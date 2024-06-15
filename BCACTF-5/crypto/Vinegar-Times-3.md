# Vinegar Times 3

![](../images/vinegar-times-3-part-1.png)


Mentions French, so I looked up French cipher, which came up to be Vingenere Cipher, which led me to `dcode.fr`'s vingenere cipher decoder. Using the key of vinegar, I was able to decrypt `mmqaonv` to:

```txt
redwine
```

When I tried to use  `vinegar` again as the key to decrypt `seooizmt`, I only got gibberish as the result. So, I wondered what would happen if I used `redwine` as the key to decrypt `seooizmt`, which resulted in: 

```txt
balsamic
```

Seems like I have to "chain" the decrypted message as the key for the following encrypted message. So, I used “balsamic” as the key to decrypt `bdoloeinbdjmmyg`, which resulted in: 

```txt
addtosaladyummy
```

Since the challenge text tells me to only include the last cipher and add spaces, I submitted `bcactf{add_to_salad_yummy}` as the flag and solved the challenge.
