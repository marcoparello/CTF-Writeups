# Sea Scavenger
![](../images/sea-scavenger-part-1.png)

I clicked on the link, which took me to a website that seemed zoomed in. To see if anything interesting was hiding that I couldn't see with the current zoom level, I zoomed out in my browser:

![](../images/sea-scavenger-part-2.png)

The treasure chest seemed interesting, so I clicked on it:

![](../images/sea-scavenger-part-3.png)

Since was a web challenge, I assumed the "robots" in the text was robots.txt. I then attempted to access robots.txt through the use of directory traversal:

![](../images/sea-scavenger-part-4.png)

Well, at least I had the end portion of the flag. I then embarked on a hunt to find the rest of the flag. There were a lot of animals I could click on, so I decided to start from the top:

## Shark

![](../images/sea-scavenger-part-5.png)

The HTML of a website can be used by looking at it's source code. So I used the Edge DevTools to view the webpage's source code:

![](../images/sea-scavenger-part-6.png)

## Squid

![](../images/sea-scavenger-part-7.png)

Mentioning the word "console" was a dead giveaway to check the console in DevTools:

![](../images/sea-scavenger-part-8.png)

## Clam

![](../images/sea-scavenger-part-9.png)

From personal experience, I knew that cookies were a sweet treat. I also knew that websites used "cookies" to store browser information. So I checked the cookies in DevTools: 

![](../images/sea-scavenger-part-10.png)

## Ship

![](../images/sea-scavenger-part-11.png)

Burpsuite is a great tool for seeing all the traffic going in and out of a website along with the requests and responses, so I opened the page in Burpsuite. I then noticed in the response headers for the page:

![](../images/sea-scavenger-part-12.png)

## Whale

![](../images/sea-scavenger-part-13.png)

The inclusion of the word "sources" was a dead giveaway to check the sources tab in DevTools:

![](../images/sea-scavenger-part-14.png)

Now with everything found, I submitted `bcactf{b3t_y0u_d1dnt_f1nd_th3_tre4sur3_t336e3}` and solved the challenge.
