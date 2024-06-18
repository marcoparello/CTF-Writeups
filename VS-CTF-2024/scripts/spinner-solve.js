// Calculate center coordinates
const midX = window.innerWidth / 2;
const midY = window.innerHeight / 2;
const centerElem = document.getElementById('centerPoint');
const spinsDisplay = document.getElementById('spinCount');

// Set the position of the center element
centerElem.style.left = midX - 5 + 'px';
centerElem.style.top = midY - 5 + 'px';

// Initialize the WebSocket connection
const spinSocket = new WebSocket(`wss://${window.location.host}/ws`);

const messageQueue = [];

// Send all queued messages when the WebSocket is open
spinSocket.addEventListener('open', () => {
    console.log('WebSocket connection established');
    while (messageQueue.length > 0) {
        spinSocket.send(messageQueue.shift());
    }
});

// Handle incoming messages
spinSocket.addEventListener('message', (event) => {
    const receivedData = JSON.parse(event.data);
    if (receivedData.spins !== undefined) {
        spinsDisplay.textContent = `${receivedData.spins}`;
    }
    if (receivedData.message) {
        alert(receivedData.message);
    }
});

// Function to queue or send messages
function queueOrSend(message) {
    const messageStr = JSON.stringify(message);
    if (spinSocket.readyState === WebSocket.OPEN) {
        spinSocket.send(messageStr);
    } else {
        messageQueue.push(messageStr);
    }
}

// Function to simulate mouse movement and send data through WebSocket
function performMouseSimulation(cycles, distance) {
    let currentAngle = 0;

    function sendMouseData() {
        const radian = currentAngle * (Math.PI / 180);
        const posX = midX + distance * Math.cos(radian);
        const posY = midY + distance * Math.sin(radian);

        const payload = {
            x: posX,
            y: posY,
            centerX: midX,
            centerY: midY
        };

        queueOrSend(payload);

        currentAngle += 10; // Adjust this value to control the speed of the simulation

        if (currentAngle < 360 * cycles) {
            requestAnimationFrame(sendMouseData);
        }
    }

    sendMouseData();
}

// Start the simulation with the desired number of iterations and radius
performMouseSimulation(1000, 100); // Adjust the radius and iterations as needed
