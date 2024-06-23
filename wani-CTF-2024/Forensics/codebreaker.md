# codebreaker

![](../images/codebreaker-part-1.png)

I download `for-codebreaker.zip` onto my Kali Linux VM and unzip it. The unzipped `for-codebreaker.zip` contains one file: `chal_codebreaker.png`. `chal_codebreaker.png` displays:

![](../images/codebreaker-part-2.png)

At first I tried to see if I could remove the X from the QR code, but all my efforts were in vain. So instead I reconstructed what I could from the image using `merri.cx/qrazybox/`'s QR code editor:

![](../images/codebreaker-part-3.png)

Here is what it looks like outside the editor:

![](../images/codebreaker-part-4.png)

I then navigated to the `tools` section of the page, and selected `Extract QR Information`, which resulted in:

![](../images/codebreaker-part-5.png)

I then went to `binaryhexconverter.com`'s Binary to ASCII converter, and copied and pasted `final data bits` into the input box, which resulted in:

![](../images/codebreaker-part-6.png)

Oh no. So I then went back to the tools section, and tried `Reed-Solomon Decoder`:

![](../images/codebreaker-part-7.png)

I pressed `decode`, which resulted in:

![](../images/codebreaker-part-8.png)

I then submitted `FLAG{How_scan-dalous}` and solved the challenge.
