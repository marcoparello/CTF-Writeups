# KQL Kraken Hunt
This had to be the challenge that took the longest for me to complete. It took a couple days. It is basically 5 challenges. Here we go

## Welcome to SANS Holiday Hack 2023!
![](../images/KQL-Kraken-Hunt-Challenge-1.jpg)
To begin the challenge, I had to complete the onboarding portion. This meant I had to make an azure account, get a free cluster, and then type the commands instructed to me to set up the challenge. I didn't screenshot this for privacy concerns. After I finished the onboarding portion, the first task was to find: 

`How many Craftperson Elf's are working from laptops?`

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
![](../images/KQL-Kraken-Hunt-Challenge-2.jpg)

For this case, I need to find:

`What is the email address of the employee who received this phishing email?`

`What is the email address that was used to send this spear phishing email?`

`What was the subject line used in the spear phishing email?`

Since `link` is a column in the `Email` table, and the case description gave me a malicious link, I typed this KQL query:
```txt
Email
| where link == 'http://madelvesnorthpole.org/published/search/MonthlyInvoiceForReindeerFood.docx'
```
This KQL searches the `Email` table for the value in the `link` column that is **exactly** equal to the string "http://madelvesnorthpole.org/published/search/MonthlyInvoiceForReindeerFood.docx". The result obtained by the query was:

![](../images/KQL-Kraken-Hunt-part-6.png)

The image shows that the `sender` column contains the string "cwombley@gmail.com", the `recipient` column contains the string "alabaster_snowball@santaworkshopgeeseislands.org" (when double clicked on as it is too large to display with the current column length), and the `subject` column contains the string "[EXTERNAL] Invoice foir reindeer food past due". We now can answer the questions asked:

`What is the email address of the employee who recieved this phishing email?  = alabaster_snowball@santaworkshopgeeseislands.org`

`What is the email address that was used to send this spear phishing email? = cwombley@gmail.com`

`What was the subject line used in the spear phishing email? = [EXTERNAL] Invoice foir reindeer food past due`

I then submitted my answers into the answer column, and the result was:

![](../images/KQL-Kraken-Hunt-part-19.png)

Onto the next case!

## Someone got phished! Let's dig deeper on the victim...
![](../images/KQL-Kraken-Hunt-Challenge-3.jpg)

For this case, I need to find:

`What is the role of our victim in the organization?`

`What is the hostname of the victim's machine?`

`What is the source IP linked to the victim?`

Since I know that the name of the employee is "alabaster" and the table `Employees` has a name column, I typed this KQL query:

```txt
Employees
| where name has "alabaster"
```
The result obtained by the query was:
![](../images/KQL-Kraken-Hunt-part-10.png)

Looking at the entry, I saw that the in the `role` column contains the string "Head Elf". Additionally, the `hostname` column contains the string "Y1US-DESKTOP". Finally, the `ip_addr` column contains the address "10.10.0.4". With this information, we now can answer the questions asked:

`What is the role of our victim in the organization? = Head Elf`

`What is the hostname of the victim's machine? = Y1US-DESKTOP`

`What is the source IP linked to the victim? = 10.10.0.4`

I then submitted my answers into the answer column, and the result was:

![](../images/KQL-Kraken-Hunt-part-19.png)

Onto the next case!

## That's not good. What happened next?
![](../images/KQL-Kraken-Hunt-Challenge-4.jpg)

For this case, I need to find:

`What time did Alabaster click on the malicious link? Make sure to copy the exact timestamp from the logs!`

`What file is dropped to Alabaster's machine shortly after he downloads the malicious file?`

To solve this, I first needed to figure out which table would contain the event when Alabaster clicked the malicious link. After thinking for a couple minutes, I realized that clicking a link to download a file would send a request to a server *outside* of the network. The server's response would then be sent *to* the network. With that realization, I typed the KQL query:

```txt
OutboundNetworkEvents
| where src_ip has "10.10.0.4"
```
This query searches entries in the `OutboundNetworkEvents` table that have the string "10.10.0.4" in their `src_ip` column. After the entire table has been read, the result is then returned. Of course, since there were multiple entries, I had to scroll through the data for a bit before I encounted this entry:

![](../images/KQL-Kraken-Hunt-part-15.png)

Looking at the entry, I see that this was a GET request to a server. A GET request is used to request data from the server. From examination, I see that the link shows the phishing file `MonthlyInvoiceForReindeerFood.docx`. Since the phishing file is being requested by Alabster's ip_address to the server, I concluded that the timestamp shown in this entry must be the timestamp when Alabaster clicked on the malicious link. I then copied and pasted the timestamp into the answer box, which then displayed

`What time did Alabaster click on the malicious link? Make sure to copy the exact timestamp from the logs! = 2023-12-02T10:12:42Z`

I still had one question left to answer. Since there was a table named `FileCreationEvents`, I concluded that since after clicking a malicious link that would "drop" (create) a file on his machine, the answer must be in an entry in that table. So I typed the KQL query:

```txt
FileCreationEvents
| where username has "alsnowball"
```
This query searches the `FileCreationEvents` table for entries that have the string "alsnowball" in the `username` column. After all of the entries have been searched, the result is displayed. Since there were a lot of matching entries, I had to look through the data for a bit before I encounted this entry:

![](../images/KQL-Kraken-Hunt-part-17.png)
## A compromised host! Time for a deep dive.
![](../images/KQL-Kraken-Hunt-Challenge-5.jpg)

For this case, I need to find:

`The attacker created an reverse tunnel connection with the compromised machine. What IP was the connection forwarded to?`

`What is the timestamp when the attackers enumerated network shares on the machine?`

`What was the hostname of the system the attacker moved laterally to?`

## A hidden message
![](../images/KQL-Kraken-Hunt-Challenge-6.jpg)

For this case, I need to find:

`When was the attacker's first base64 encoded PowerShell command executed on Alabaster's machine?`

`What was the name of the file the attacker copied from the fileshare? (This might require some additional decoding)`

`The attacker has likely exfiltrated data from the file share. What domain name was the data exfiltrated to?`

## The final step!
![](../images/KQL-Kraken-Hunt-Challenge-7.jpg)

For this case, I need to find:

`What is the name of the executable the attackers used in the final malicious command?`

`What was the command line flag used alongside this executable?`

## Congratulations!
![](../images/KQL-Kraken-Hunt-Challenge-8.jpg)

For this "case", I need to enter:

`print base64_decode_tostring('QmV3YXJlIHRoZSBDdWJlIHRoYXQgV29tYmxlcw==')`









