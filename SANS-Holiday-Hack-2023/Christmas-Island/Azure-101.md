# Azure 101
Hey another 101 challenge. This time it is about Azure. Unfortunately for me, I don't know anything about Azure. But isn't that what CTF's are about, learning? Hopefully it doesn't take as long as Linux 101! Let's go.

The first challenge in Azure 101 is:

![](../images/Azure-101-part-1.png)

In order to solve this challenge, I did what I was told to. 

```txt
az help | less
```

Which resulted in the output of the help page, which looks like this:

![](../images/Azure-101-output1.jpg)

I then unlocked the next challenge:

![](../images/Azure-101-part-2.png)

It took me a bit before I realized I had to type `q` in order to exit the help page. Yeah. Anyway in order to solve the challenge I used the context clues of each highlighted " " word to type:

```txt
az account show | less
```

Which displayed:

![](../images/Azure-101-output2.jpg)

I then unlocked the next challenge:

![](../images/Azure-101-part-3.png)

Since I didn't know anything about Azure, I went to the linked page. There I used "ctrl-f" to search for "list resource groups" and got:

