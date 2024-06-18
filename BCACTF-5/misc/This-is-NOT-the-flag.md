# This is NOT the flag

![](../images/this-is-not-the-flag-part-1.png)

I downloaded the file and opened it:

![](../images/this-is-not-the-flag-part-2.png)

From past experiences with text encodings in CTF's, I recognized that the text looked similar to the Base64 encoding. So, I used `dcode.fr`’s Base64 decoder with the brute force option turned on:

![](../images/this-is-not-the-flag-part-3.png)

I then submitted `bcactf{7hIs_1s_7h3_fla9}` as the flag and solved the challenge.
