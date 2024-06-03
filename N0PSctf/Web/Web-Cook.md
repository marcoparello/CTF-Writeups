# Web Cook
![](../images/web-cook-part-1.png)

I click on the link, which takes me to this page:

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

But if you delete the website cookie and refresh the page, the message goes away and the page is displayed as normal. This points to the website using client-side validation, where the client computer is responsible for the validation of creditionals for the website. I opened up Burpsuite and used the Burpsuite browser to collect more information about the page. After some time I came across something interesting:

![](../images/web-cook-part-5.png)

