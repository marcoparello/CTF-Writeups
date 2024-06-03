# Web Cook
![](../images/web-cook-part-1.png)

I clicked on the link, which took me to this page:

![](../images/web-cook-part-2.png)

The "instructions" for the "recipe" seem interesting:

![](../images/web-cook-part-3.png)

Seems like they are the instructions for how to solve this challenge. So basically:

```txt
1. Make a PHP array out of JSON to set the isAdmin value to 1
2. Encode that PHP array with Base64
3. Make that encoded PHP array as the website cookie
4.????
5. Profit
```

After messing around with the website for a bit, I noticed that trying to resubmit a form causes this:

![](../images/web-cook-part-4.png)

But if you delete the website cookie and refresh the page, the message goes away and the page is displayed normally. This points to the website using client-side validation, where the client computer is responsible for the validation of creditionals for the website. I opened up Burpsuite and used the Burpsuite browser to collect more information about the page. After some time I came across something interesting:

![](../images/web-cook-part-5.png)

The `Set-Cookie: session =` is responsible for the cookie on the website. However, this was a response, not a request. After some more fiddling I was able to get a request with the `Set-Cookie: session = ` :

![](../images/web-cook-part-6.png)

Which I sent to Repeater. I then used ChatGPT to create a template for a script that would create a cookie that I could insert into the `Set-Cookie: session = ` field that would set the `isAdmin` value to 1:

![](../images/web-cook-part-7.png)

Which I modified to be:

![](../images/web-cook-part-8.png)

As there are only two parameters for the cookie, the `username` and `isAdmin`. I than ran the script, which resulted in a cookie of:

```txt
eyJ1c2VybmFtZSI6ImpvaG5fZG9lIiwiaXNBZG1pbiI6MX0
```

I then inserted the cookie into the `Set-Cookie: session = ` field into the request in Repeater:

![](../images/web-cook-part-9.png)

I sent the request, which resulted in:

![](../images/web-cook-part-10.png)

I then submitted `N0PS{y0u_Kn0W_H0w_t0_c00K_n0W}` as the flag and solved the challenge.




