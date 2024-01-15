 # Na'an
 NaN in computing is basically not a valid number. In this challenge we are competing in a rigged game. Shify the elf will always change his cards during the game so he **always** wins. Luckily for us, we have an ace up our sleeves..

 In your devtools, go to the sources tab. Then open game.js (the path is showed in the image below) :

 ![](../images/Naanpart1.png)

 Then navigate to this part:

 ![](../images/Naanpart2.png)

 This is where we have an ace up our sleeves. The program only checks if the number is a valid number **while** it is being entered. It doesn't check when the game actually starts to see if the number has changed. Also the game is stored on the client-side. Remember Snowball Fight? Since a NaN is not a number, we will **immediately** gain points, as the game isn't programmed to react correctly if the number input is NaN **during** the game. It will automatically default to the player win condition for the match. Since `play_card_selection(array_of_choices_as_csv)` stores the card value as an 2D-list, and there are 5 cards, we simple input in the console (as usual, make sure the console is set to the window where Na'an is being played or else this won't work):

 ```
play_card_selection([Nan]
 

 
