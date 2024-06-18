# Vinegar Times 3

![](../images/vinegar-times-3-part-1.png)


The challenge description mentions French, so I looked up "French cipher" on Google, which returned "Vingenere cipher". I then searched for a Vingenere cipher decoder, which led me to `dcode.fr`'s Vingenere cipher decoder. Using the key of vinegar, I was able to decrypt `mmqaonv` to:

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
