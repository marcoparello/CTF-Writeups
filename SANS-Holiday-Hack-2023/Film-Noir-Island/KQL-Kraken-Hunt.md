# KQL Kraken Hunt
This had to be the challenge that took the longest for me to complete. It took a couple days. It is basically 5 challenges. Here we go

## Welcome to SANS Holiday Hack 2023!
To begin the challenge, I had to complete the onboarding portion. This meant I had to make an azure account, get a free cluster, and then type the commands instructed to me to set up the challenge. I didn't screenshot this for privacy concerns. After I finished the onboarding portion, the first task was to find: 

![](../images/KQL-Kraken-Hunt-part-1.png)

I then typed this KQL query:
```txt
Employees
| where role == "Craftsperson Elf"
| where hostname has "LAPTOP"
| summarize dcount(hostname)
```
The query looked in the `Employees` table. In the table it looked in the `role` column for values that were equal to the string "Craftsperson Elf". Once that was done, it then sorted through that data to find values in the `hostname` column that contained the string "LAPTOP". Finally, it then summarized the amount of data by the unique hostname (dcount is distinct count. Only unique entries are counted). After this was done, the number 25 was outputted to me in the console. I then inputted 25 as my answer, and got a credly badge:

![](../images/KQL-Kraken-Hunt-part-3.png)

Apparently this is an "NFT" badge (remember those). Not sure why exactly but i'll take it. Anyway since creditionals from Credly can be added to my Linkedin creditionals section, I did what had to be done. 
## Welcome to Operation Giftwrap: Defending the Geese Island network

