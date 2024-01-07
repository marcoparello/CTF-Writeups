# Snowball Fight
In order to beat this challenge, you simply have to defeat Santa in a snowball fight with another player. No challenge here, simply play the game and win. Luckily, since I had around 350 hours in Monster Hunter World, I was very good at dodging the snowballs thrown by Santa. It was hard to take him down, but eventually, I was able to accomplish the task with another player. Turns out "git gud" is actually pretty good advice. 

Of course, because the game is stored on the client side, there are some l33t hax0r tricks you can do to make the game easier (or harder if you want to have internet bragging rights). For example, the game hints that there is a single-player mode. Of course, the game is currently set to multiplayer only. But because everything is stored on the client side, we can change that. In order to make single-player mode available, create a private room. 

![](../images/Snowball-fight-part-2.jpg)

Before you click the big red start button, open up the console in your browser devtools, and make sure that it is set to "\room" (I made this mistake way too often before I realized what I was doing wrong). Then, type 
```txt
window.location.href  
```
And you should get this output:

![](../images/Snowball-fight-part-1.jpg)

notice how at the end of the line the variable `singlePlayer` is set to `false`. We want to change that if we want to access single-player mode. So copy and paste the entire text, then type 
```txt
window.location.href =
```
and paste the text to be after the equal sign. Make sure to put the `'` marks at the beginning and the end of the text you just pasted. Then go to the end of the text and change `singlePlayer=false` to `singlePlayer=true`. Then press enter to execute your code and the window where the game is located will refresh. Once that happens, you will be greeted to the same welcome screem with the ready button. This time, click it. The game will start and a couple seconds later you will get a message that "Elf the dwarf has joined your team". 

![](../images/Snowball-fight-part-3.jpg)

