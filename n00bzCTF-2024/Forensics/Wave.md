# Wave

![](../images/wave-part-1.png)

I clicked on `chall.wav`, which took me to:

![](../images/wave-part-2.png)

Unfortunately for me, `chall.wav` is corrupted. So, I used `filegrab.net`’s file download from url to download the wav file, as I was unable to download it directly from the link. I then opened `chall.wav` in `ghex`, as I need to manually uncorrupt `chall.wav` by modifying the hexadecimal code:

![](../images/wave-part-3.png)
 
Since `chall.wav` is a `.wav` file, I need to find the hexadecimal headers for `.wav` files. So, I searched `.wav file headers hex` on Google and found this from `https://soundfile.sapp.org/doc/WaveFormat/`:

![](../images/wave-part-4.png)

I could now see what was wrong. The first four bytes of the `chunk descripter` need to be changed from:

```txt
30 30 30 30
```

To:

```txt
52 49 46 46
```

Next, the last four bytes of the `chunk descripter` need to be changed from:

```txt
30 30 30 30
```

To:

```txt
57 41 56 45
```

Finally, the first three bytes of the `format subchunk` header need to be changed from:

```txt
30 30 30
```

To:

```txt
66 6D 74
```

So, in `ghex`, I went to work:

![](../images/wave-part-5.png)
 
I then saved `chall.wav`, and opened it:

![](../images/wave-part-6.png)
 
I heard a series of beeps, which sounded like morse code, so I uploaded the `chall.wav` to ` morsecode.world/international/decoder/audio-decoder-adaptive.html`, which resulted in:

![](../images/wave-part-7.png)
 
Due to the challenge description specifying that the inside of the flag is in lowercase, I changed `BEEPBOPMORSECODE` to `beepbopmorsecode`. I then submitted `n00bzctf{beepbopmorsecode}`, and solved the challenge.

