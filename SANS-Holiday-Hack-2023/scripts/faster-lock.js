function moveLockIntoUnlockedPosition() {
  // Simulate unlocking immediately without the correct combination
  isTweenActive = true;
  game.scene.scenes[0].tweens.add({
    targets: [lock_dial, lock_body],
    y: '+=75',
    duration: 500,  // can adjust the duration as needed
    ease: 'Power2',
    onComplete: function () {
      game.scene.scenes[0].tweens.add({
        targets: lockContainer,
        y: '-=215',
        x: '+=105',
        angle: '-=90', // Rotate 90 degrees to the left
        duration: 500,
        ease: 'Power2',
        onComplete: function () {
          game.scene.scenes[0].tweens.add({
            targets: lockContainer,
            y: '+=800',
            x: '-=200',
            duration: 1000,
            ease: 'Linear',
            onComplete: function () {
              latch_back.setVisible(false)
              latch_front.setVisible(false)
              latch_open_back.setVisible(true)
              latch_open.setVisible(true)
              game.scene.scenes[0].tweens.add({
                targets: latch_open,
                scaleX: -1,
                x: '+=45',
                duration: 500,
                ease: 'Linear',
                yoyo: false,
                onComplete: function () {
                  checkit()
                }
              })
            }
          })
        }
      });
    }
  });
}

// Call the function to simulate unlocking immediately
moveLockIntoUnlockedPosition();
