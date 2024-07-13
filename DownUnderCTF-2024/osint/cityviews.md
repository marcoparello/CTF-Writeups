# cityviews

![](../images/cityviews-part-1.png)

I downloaded `cityviews.jpeg` and opened it on my Kali Linux VM:

![](../images/cityviews-part-2.png)

I then ran `exiftool`, but it didn’t return any coordinates. So, I then used `GeoSpy Ai`:

![](../images/cityviews-part-3.png)

I then clicked on the `View on Google Maps` button, which resulted in:

![](../images/cityviews-part-4.png)

Yeah that's not correct. I then decided to take a closer look at the image, focusing on this sign:

![](../images/cityviews-part-5.png)

The sign says `3AW Melbourne`, which means that the image was taken somewhere in Melbourne. I then foucused on this interesting logo:

![](../images/cityviews-part-7.png)

However, it was so pixelated that when I tried to use Google’s reverse image search, the results were useless:

![](../images/cityviews-part-8.png)

I then used the program `upscayl` to upscale the original image in the hopes that reverse image search would hopefully return more relevant results. I upscaled the image by a factor of 3x and used the Real-Esergan-Fast preset. After the image was was upscaled, I cropped it:

![](../images/cityviews-part-9.png)

It's a messy upscale (which makes sense as the logo is very small in the original photo), but hopefully it works. I then used Google's reverse image search on the upscaled image, which returned:

![](../images/cityviews-part-10.png)

That Linkedin post seemed to have a very similar building (I blocked at the name of the author for privacy), so I navigated to the Linkedin post, and found that the author worked at:

![](../images/cityviews-part-11.png)

I then searched:

![](../images/cityviews-part-12.png)

I then went to the address on Google Earth, and “walked” around for a bit. While walking, I came across this building:

![](../images/cityviews-part-14.png)

Those letters seem to be the same letters as this from the original photo:

![](../images/cityviews-part-15.png)

This tree must have blocked the sign in the original photo:

![](../images/cityviews-part-16.png)

I then found the name of the building in front of The Great Southern Hotel:

![](../images/cityviews-part-18.png)

Using the challenge description, I submitted  `DUCTF{hotel_indigo_melbourne}` and solved the challenge.





