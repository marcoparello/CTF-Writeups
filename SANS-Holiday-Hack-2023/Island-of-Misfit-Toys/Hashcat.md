# Hashcat
I first use the `cat` command on the file `hash.txt` to see what the hash looked like. 

![](../images/Hashcat-part-1.png)

I then went to the Hashcat wiki's "example hashes" page and found this hash:

![](../images/hashcat-example-hash.jpg)

The example hash seems similar to the hash from `hash.txt`. From the startup message, tells me to add `-w 1 -u 1 --kernel-accel 1 --kernel-loops 1` to the end of my command, as since this is web-based emulated terminal that isn't using my computers native hardware to run hashcat (which I allocated the power to my Kali Linux VM), hash cat gives errors. So I ran the command:




```txt
hashcat -m 18200 hash.txt password_list.txt -w 1 -u 1 --kernel-accel 1 --kernel-loops 1 
```


