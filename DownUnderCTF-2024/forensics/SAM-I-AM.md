# SAM I AM

![](../images/sam-i-am-part-1.png)

I downloaded `samiam.zip` and placed it on my Kali Linux VM. From there, I unzipped it, which revealed that `samiam.zip` contained 2 files: sam.bak and system.bak. Junior Crypt 2024 had a lot of SAM file challenges, so I knew what I had to do. So I typed:

```txt
samdump2 system.bak sam.balk
```

`samdump2` is used to extract password hashes from a SAM database using a SYSTEM file for decryption, outputting the hashed passwords. `system.bak` contains the system key for decryption of the SAM database `sam.bak`. I then executed the command, which resulted in:

![](../images/sam-i-am-part-2.png)

The last hash for the Administrator account, 476b4dddbbffde29e739b618580adb1e, is the password hash. Since the hash came from a SAM file, it is of the NTLM type. In order to crack the hash, I decided to use hashcat. I typed:
