# not-quite-caesar
![](../images/not-quite-caeser-part-1.png)

I download the zip file and view it in my Kali Linux VM. Inside the zip file there is a folder called `dist` that contains two files: `nqc.py` and `out.txt`. `nqc.py` contains:

![](../images/not-quite-caeser-part-2.png)

While `out.txt` contains:

![](../images/not-quite-caeser-part-3.png)

Using the provided code and values, I prompt ChatGPT to create a script that reverse engineers the encryption process and output the flag in plaintext. 

![](../images/not-quite-caeser-part-4.png)

[script](../scripts/not-quite-caeser-solve.py)

I than ran the script, which resulted in:

![](../images/not-quite-caeser-part-5.png)

I then submitted `vsctf{looks_like_ceasar_but_isnt_a655563a0a62ef74` and solved the challenge.
