# Certified

![](../images/certified-part-1.png)

I downloaded the included pcap file and opened it up in wireshark for analysis. Most of the packets were TLS encrypted, so it was gibberish. However, some weren't. While scrolling through the `tcp flow`, I noticed this in packet 6:

![](../images/certified-part-4.png)

The RSA private key in TLS is responsible.
