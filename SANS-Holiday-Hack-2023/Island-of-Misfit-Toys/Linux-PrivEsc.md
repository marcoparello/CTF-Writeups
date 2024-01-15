# Linux PrivESC:
Using the article provided by the hint *Linux Privilege Escalation Guide (Updated for 2023)* by Rashid-Ferose published by Payatu, I tried the strategies provided by the article. When I came across this:

![](../images/Linux-PrivEsc-part-1.png)

It seemed interesting. In order to see if the Linux system I was working on had anything that could be used for a privilege escalation attack that also had a SUID bit set, I used this command:

```txt
find / -perm -u=s -type f 2>/dev/null
```

After I executed the command, the result was:

![](../images/Linux-PrivEsc-part-2.png)

The simplecopy command seemed interesting. Since it had a sudo attribute set, I could theoretically use it to perform a linux privelege escalation attack by overwrititng the password file to give me root access. But first I needed to check if simplecopy had was an actual file copier, so I ran:

```txt
simplecopy
```

After I executed the command, the result was:

`Usage: simplecopy <source> <destination>`

So simplecopy is basically the `cp` command but with a SUID bit set. Now I only need to check if simplecopy has root read and write permissons. In order to do this, I typed:

```txt
ls -la /usr/bin/simplecopy
```

After I executed the command, the result was:

![](../images/Linux-PrivEsc-part-4.png)

Simplecopy has root read and write permissions. I then read the article *Linux Privilege Esclation using the SUID bit* by Rangeforce, where I found this interesting bit:




