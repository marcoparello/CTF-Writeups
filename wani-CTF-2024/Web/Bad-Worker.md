# Bad_Worker

![](../images/bad-worker-part-1.png)

I click on the link, which takes me to this page:

![](../images/bad-worker-part-2.png)

I then navigate to the `Counter` tab:

![](../images/bad-worker-part-3.png)

Where I can click a button to count. I then navigate to the `Fetch Data` tab:

![](../images/bad-worker-part-4.png)

I then click `Fetch FLAG.txt`, which reveals:

![](../images/bad-worker-part-5.png)

Aw man! I fake flag. So I then open DevTools and navigate to the sources tab, where I notice:

![](../images/bad-worker-part-6.png)

I wonder what would happen if I change `DUMMY.txt` to `FLAG.txt`. So I follow the instructions to run the website on my system (as detailed in the first page that is displayed when reaching the website), and modify `DUMMY.txt` to:

![](../images/bad-worker-part-8.png)

I then click `Fetch FLAG.txt` again, which results in:

![](../images/bad-worker-part-9.png)

I then submit `FLAG{pr0gr3ssiv3_w3b_4pp_1s_us3fu1}` and solve the challenge.
