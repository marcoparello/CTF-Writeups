# Baby's First Forensics

![](../images/babys-first-forensics-part-1.png)

I downloaded `capture.pcap` onto my Kali Linux VM. I then opened the pcap in Wireshark:

![](../images/capture-1.png)

Since it was a mix of HTTP, TCP, and DNS packets, I navigated to `Follow -> HTTP stream` option by rightclicking one of the packets. I chose to view the HTTP streams as HTTP is transmitted without any encryption (this is the main reason why your browser will alert you if you navigate to an HTTP site). I started from stream 0, and began to browse through the streams. When I navigated to the 6th HTTP stream, I noticed:

![](../images/babys-first-forensics-part-2.png)
