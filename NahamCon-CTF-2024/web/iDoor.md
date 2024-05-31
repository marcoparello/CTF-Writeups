![](../images/idoor-part-1.png)

I clicked the link, which led me to a webpage that displayed:

![](../images/idoor-part-2.png)

I tried looking through the source code and pressed all the buttons to see if anything would reveal the flag, but nothing came up. I then noticed something interesting in the url

![](../images/idoor-part-3.png)

The challenge description mentioned the use of SHA256 hashing. So I put it into a SHA256 decoder online and got a decoded message of 11, which lines up with the customer id. I then wondered if I could “snoop” on different cameras by putting in different hashes?

I inserted `4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5` (the SHA256 hash for 10) in the url where the SHA256 hash for 11 and pressed enter:

![](../images/idoor-part-5.png)

Now knowing how to "snoop" on different cameras, I then decided to enter different hash values from 1-9. 

`6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b` (SHA256 hash value for 1):

![](../images/idoor-part-6.png)

`d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35` (SHA256 hash value for 2):

![](../images/idoor-part-7.png)

`4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce` (SHA256 hash value for 3):

![](../images/idoor-part-8.png)

`4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a` (SHA256 hash value for 4):
