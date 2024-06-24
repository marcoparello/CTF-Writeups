# pow

![](../images/pow-part-1.png)

I click on the link, which takes me to this website:

![](../images/pow-part-2.png)

After some time, the website changes to:

![](../images/pow-part-3.png)

I open Edge DevTools, and in the network tab I notice:

![](../images/pow-part-5.png)

I resend `pow` again, which results in:

![](../images/pow-part-6.png)

I then interecept the `pow` request in Burpsuite (by running the Burpsuite browser and waiting). I then go to `Intruder` and set the request to run 1,000,000 times. I then launch my intruder, which works for a couple requests until:

![](../images/pow-part-8.png)

Oh. So I clear the website cookies and try again. I wait until I have 3/1,000,000

![](../images/pow-part-9.png)

When I wonder to myself "what would happen if I duplicated the number inside of the `pow` request 2 times?" So, I copy and paste `7844289` two times to make an array of 3 items:

![](../images/pow-part-10.png)

I send the request, which results in:

![](../images/pow-part-11.png)

I then create a python script that writes the string “7844289” to output.txt (with double quotations), puts a comma at the end of it, and repeats this process for as many times as specified:

```
