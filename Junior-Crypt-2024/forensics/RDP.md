# RDP

![](../images/rdp-part-1.png)

I downloaded the Log files onto my Windows machine, and unzipped the zipped folder. Inside the folder, there were 147 different logs. In Windows Event Viewer, the Event ID for RDP is 1149. So, I searched each log with, filtering all Event ID's to be 1149. Eventually, in `Microsoft-Windows-TerminalServices-RemoteConnectionManager%4Operational.evtx`:

![](../images/rdp-part-2.png)

I examined the log entry:

![](../images/rdp-part-3.png)

Knowing that the source network address was `103.109.92.4`, I used `whatismyIPaddress.com` to find the country `103.109.92.4` originated from:

![](../images/rdp-part-4.png)

Since the country was Bangladesh, I submitted `grodno{Bangladesh}`, which solved the challenge.

