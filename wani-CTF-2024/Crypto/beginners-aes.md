# beginners_aes
![](../images/beginners-aes-part-1.png)

I download `cry-beginners-aes.zip` onto my Kali Linux VM. After downloading it, I unzip it. Inside the unzipped `cry-beginners-aes.zip` are two files: chall.py and output.txt. chall.py contains:

```txt
# https://pycryptodome.readthedocs.io/en/latest/src/cipher/aes.html
from Crypto.Util.Padding import pad
from Crypto.Cipher import AES
from os import urandom
import hashlib

key = b'the_enc_key_is_'
iv = b'my_great_iv_is_'
key += urandom(1)
iv += urandom(1)

cipher = AES.new(key, AES.MODE_CBC, iv)
FLAG = b'FLAG{This_is_a_dummy_flag}'
flag_hash = hashlib.sha256(FLAG).hexdigest()

msg = pad(FLAG, 16)
enc = cipher.encrypt(msg)

print(f'enc = {enc}') # bytes object
print(f'flag_hash = {flag_hash}') # str object
```

While output.txt contains:

```txt
enc = b'\x16\x97,\xa7\xfb_\xf3\x15.\x87jKRaF&"\xb6\xc4x\xf4.K\xd77j\xe5MLI_y\xd96\xf1$\xc5\xa3\x03\x990Q^\xc0\x17M2\x18'
flag_hash = 6a96111d69e015a07e96dcd141d31e7fc81c4420dbbef75aef5201809093210e
```

My strategy for any challenge that requires scripting (often crypto and web challenges) is to prompt ChatGPT to create a solve script for the challenge. If that doesn't work, I then use the solve script as a template to manually adjust as needed in order to solve the challenge. This saves me time while also causing my prompting skills to improve. Since AI is the future, being able to effectly write prompts that will return answers that actually work is paramount. However, this doesn't mean that ChatGPT can immediately solve any CTF challenge. It just means that the prompter must have the knowledge necessary to correctly tell ChatGPT what to do. ChatGPT is just another tool in my toolbox, and like any tool, it can either be effectively used or not. 
