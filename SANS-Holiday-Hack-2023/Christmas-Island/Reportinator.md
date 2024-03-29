# Preface
![](../images/Reportinator.jpg)

Challenge Description: Noel Boetie used ChatNPT to write a pentest report. Go to Christmas Island and help him clean it up.

Location: Christmas Island - Rudolph's Rest Resort

Difficulty: 2 out of 5 trees


# Reportinator
This challenge actually took days for me to complete. Not because it was technically hard. It was a 2 out of 5 tree challenge, so I would say a lower intermediate challenge in terms of technical difficulty. All I needed to do was review an AI-generated penetration test report and flag each of the findings as a legitimate finding or a "hallucination" (aka just making stuff up) by the AI. Unfortunately for me, the hallucinations were very very subtle. There weren't any blatantly wrong hallucinations, a la "the sun doesn't exist. The hallucinations were more like "the sun provides sunlight and warmth for the Earth. It switches places with the moon at night before emerging the next day." The hallucination in this statement is that the moon switches places with the sun at night, but in reality, the moon doesn't. It simply covers the sun at night. Basically, all of the hallucinations were in the very minute details of the reports. So I spent days going over the entire report, using ChatGPT and BardAI along with researching the concepts and tools mentioned in the report. Even when I prompted ChatGPT and BardAI to be as critical as possible when going over the report line by line it was all for naught.
## Plan B
After a couple of days I looked over the source code for the challenge and realized that each time I submitted my answers, it would send my answer combination as a fetch request to a server to check it. The server would then respond whether my answer was correct or not. Since there were 9 findings I needed to check as a hallucination or not a hallucination, that would mean there would be around 512 possible answers. Additionally, I found that a 0 corresponded to "not a hallucination" and a corresponded to "a hallucination". I figured this out after I submitted my answers as all checkmarks, which I then navigated to the network tab in Edge to see how the data was transmitted from my computer to the server. Using this, I saw that my response to the server had nine zeros. I then made another submission, but this time flagging all the findings as hallucinations. When I looked at my request in the network tab, I saw that my response to the server had nine 1's. As a result, I was able to figure out that a 0 corresponded to "not a hallucination" flag and a 1 corresponded to "a hallucination" flag. Due to the usage of a fetch request for answer validation, I realized that I could use the console in Edge to send a script to the server that tested the server's response for every possible combination. The script would then stop once the server returned an HTTP 200 "success" message for the correct combination. Once that happened, all I would need to do was set the corresponding flag for each finding in accordance to the value seen in the correct combination for that finding. 
## Rage Against the Machine
Of course, I would actually have to write the script first before I could celebrate. So I asked ChatGPT to make a script with the following information:

![](../images/Reportinator-part-2.png)

NOTE :
  I asked ChatGPT to summarize my prompts as it took around 30 minutes to refine the script
  and there were a lot of prompts that I would need to screenshot. So instead I asked ChatGPT to summarize my prompt

Which resulted in this script:

![](../images/Reportinator-part-1.png)

Heres a link to it: [Reportinator.js](../scripts/reportinator.js)

I then went back to reportinator and inputed copied and pasted the script into the console, making sure that the console was set to the window that reportinator was in, not "top". I then executed the script and got the correct combination. I then inputted the corresponding flag for each finding per the correct combination value, and completed the challenge. 




