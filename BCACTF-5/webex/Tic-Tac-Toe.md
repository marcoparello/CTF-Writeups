# Tic Tac Toe

![](../images/tic-tac-toe-part-1.png)

I clicked on the link and it took me to this webpage:

![](../images/tic-tac-toe-part-2.png)

I played the game but couldn’t win against the computer. So I checked the network tab in the Edge DevTools:

![](../images/tic-tac-toe-part-3.png)

Seems like the websockets are responsible for placing the X’s and O’s. I then opened up the page in Burpsuite, and checked Burpsuite’s websocket history:

![](../images/tic-tac-toe-part-4.png)

Seems like it is responsible for placing the X on the board, so I sent:

![](../images/tic-tac-toe-part-5.png)

Which resulted in: 

![](../images/tic-tac-toe-part-6.png)

I then set an “X” to position 1:

![](../images/tic-tac-toe-part-7.png)

Which resulted in:

![](../images/tic-tac-toe-part-8.png)

I then set an X to position 2, which was already occupied by an “O”:

![](../images/tic-tac-toe-part-9.png)

Which resulted in:

![](../images/tic-tac-toe-part-10.png)

Which then resulted in this websocket:

![](../images/tic-tac-toe-part-11.png)

This was the full interaction:

![](../images/tic-tac-toe-part-12.png)

I then submitted `bcactf{7h3_m4st3r_0f_t1ct4ct0e_678d52c8}` as the flag and solved the challenge.




