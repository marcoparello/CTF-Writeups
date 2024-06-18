# Redundant
![](../images/redundant-part-1.png)

I downloaded the file and opened it using the image viewer in my Kali Linux VM:

![](../images/redundant-part-2.png)

Yep thats a corrupted file. I then ran `PCRT` to see if it would be able to restore the image to it's uncorrupted state:

![](../images/redundant-part-4.png)

Since the operation was successful, I opened `fixed.png`, which displayed:

![](../images/redundant-part-5.png)

I then submitted `SIVUSCG{1nv4l1d_chunk5_l0l}` and solved the challenge.
