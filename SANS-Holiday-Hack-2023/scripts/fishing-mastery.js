// Select the "castreel" button
const castReelButton = document.querySelector('button.castreel');

// Function to simulate clicking a button
function clickButton(button) {
    button.click();
}

// Auto-fishing logic
function autoFish(iteration = 0, maxIterations = 400) {
    // Check if the maximum number of iterations has been reached
    if (iteration >= maxIterations) {
        console.log(`Maximum number of iterations reached (${maxIterations}). Restarting auto-fishing.`);
        // Restart the loop after a delay (adjust the delay based on your application)
        setTimeout(() => {
            autoFish();
        }, 5000); // Adjust the delay before restarting (in milliseconds)
        return;
    }

    // Click on castreel
    clickButton(castReelButton);

    // Perform additional actions after casting, if needed
    console.log('Casting...');

    // Check for the presence of the "reelitin" button with class "gotone"
    const reelItInButton = document.querySelector('button.reelitin.gotone');
    
    if (reelItInButton && reelItInButton.offsetParent !== null) {
        // Click on the visible "reelitin" button with class "gotone"
        clickButton(reelItInButton);

        // Perform additional actions after reeling, if needed
        console.log('Reeling in...');
    }

    // Start the next cast after the current iteration is completed
    setTimeout(() => {
        autoFish(iteration + 1, maxIterations);
    }, 2000); // Adjust the delay between casts (in milliseconds)
}

// Start the auto-fishing process
autoFish();
