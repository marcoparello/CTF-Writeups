# Chalkboard Gag

![](../images/chalkboard-gag-part-1.png)

I downloaded the file and opened it:

![](../images/chalkboard-gag-part-2.png)

It’s 100001 lines of: "I WILL NOT BE SNEAKY". Anyway something is most likely hidden. While scrolling through the text, I noticed this:

![](../images/chalkboard-gag-part-3.png)

So I used grep -v:

![](../images/chalkboard-gag-part-4.png)

Theres the flag. Now lets manually extract it:

![](../images/chalkboard-gag-part-5.png)

I then submitted `bcactf{BaRT_W0U1D_B3_PR0uD}` as the flag and solved the challenge.
