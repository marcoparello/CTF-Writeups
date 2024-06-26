# All About Robots
![](../images/all-about-robots-part-1.png)

I pressed start, which after a couple of seconds, provided me a link. I clicked on the link and it took me to a web page which displayed:

![](../images/all-about-robots-part-2.png)

Clicking on `learn more` after clicking on a robot navigates to a page explaining what robots.txt is. According to Cloudflare, robots.txt is a

`file contains instructions for bots that tell them which webpages they can and cannot access. Robots.txt files are most relevant for web crawlers from search engines like Google.`

Since the challenge is called `All About Robots` and mentions `robots.txt`, I assumed that in order to solve this challenge I must access robots.txt. Since I cannot use Dirbuster or any automated tools, I first attempted to see if directory traversal would allow me to access the websites robots.txt file. So I appended:

```txt
/robots.txt
```

to the end of the URL and pressed enter, which resulted in:

![](../images/all-about-robots-part-3.png)

Seems like I need to access `open_the_pod_bay_doors_hal_and_give_me_the_flag.html`. So I removed `robots.txt` from the URL and appended:

```txt
/open_the_pod_bay_doors_hal_and_give_me_the_flag.html
```

to the end of the URL and pressed enter, which resulted in:

![](../images/all-about-robots-part-4.png)

I then submitted `flag{3f19b983c1de42bd49af1a237d7e57b9}` into the challenge box and solved the challenge.








