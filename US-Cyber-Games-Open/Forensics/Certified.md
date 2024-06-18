# Certified

![](../images/certified-part-1.png)

I downloaded the included pcap file and opened it up in wireshark for analysis. Most of the packets were TLS encrypted, so it was gibberish. However, some weren't. While scrolling through the `tcp flow`, I noticed this in packet 6:

![](../images/certified-part-4.png)

Know that I know the RSA private key, I can decrypt the TLS encrypted packets. I extracted the RSA private key and made it a `.pem` file, which I then imported as one of my RSA keys in Wireshark.

![](../images/certified-part-7.png)

After importing it, all of the TLS encrypted data in the pcap was then decrypted. While looking thorugh the newly-decrypted packets, I noticed something interesting in packet 20:

![](../images/certified-part-8.png)

I then submitted `SIVUSCG{c3rtif1abl3_h4ck3rs}` and solved the challenge.
