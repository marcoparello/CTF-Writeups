# Hashcat
I first use the `cat` command on the file `hash.txt` to see what the hash looked like. 

![](../images/Hashcat-part-1.png)

I then went to the Hashcat wiki's "example hashes" page and found this hash:

![](../images/hashcat-example-hash.jpg)

The example hash seems similar to the hash from `hash.txt`. From the startup message, tells me to add `-w 1 -u 1 --kernel-accel 1 --kernel-loops 1` to the end of my command, as since this is web-based emulated terminal that isn't using my computers native hardware to run hashcat (which I allocated the power to my Kali Linux VM), hash cat gives errors. So I ran the command:




```txt
hashcat -m 18200 hash.txt password_list.txt -w 1 -u 1 --kernel-accel 1 --kernel-loops 1 
```
The `-m` flag tells hashcat to that the hash corresponded with 18200 is the hash that it will be targeting. The `hash.txt` is the location of the hash to be cracked. The `password_list.txt` is the possible passwords for the hash. The `-w 1` sets the hashcat workload profile to be 1. The `-u 1` enables Enables uppercase rules, allowing the tool to test uppercase variations of the passwords. The `--kernel-accel 1` sets the kernel acceleration to be profile 1, which influences the speed of the cracking process. The `-kernel-loops 1 ` sets the number of kernel loops to be 1, as without the option hashcat is automatically killed due to using too much resouces on the web-based terminal. I run the command and get:




