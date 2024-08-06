# Wave

![](../images/wave-part-1.png)

I clicked on `chall.wav`, which took me to:

![](../images/wave-part-2.png)

Corrupted. Need to fix it. Used `filegrab.net`’s file download from url to download the wav file, as I was unable to download it directly from the link. I then opened `chall.wav` in ghex:

![](../images/wave-part-3.png)
 
Using the headers from `https://soundfile.sapp.org/doc/WaveFormat/`:

![](../images/wave-part-4.png)


I need to add the RIFF WAVE and fmt headers, so:

![](../images/wave-part-5.png)
 
Saved, then opened file:

![](../images/wave-part-6.png)
 
Here beeps, and it sounds like morse code, so I upload the file to ` morsecode.world/international/decoder/audio-decoder-adaptive.html`, which results in:

![](../images/wave-part-7.png)
 
I convert it to lowercase, and submit `n00bzctf{beepbopmorsecode}`, which solves the challenge.

