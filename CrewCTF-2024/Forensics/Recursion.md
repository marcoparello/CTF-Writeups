# Recursion

![](../images/recursion-part-1.png)

Download file onto Kali Linux VM and open wireshark:

![](../images/wireshark.png)

These are Interesting packets, as they contain a lot of data compared to the other packets:
15, 31, 49, 55, 61, 67, 77
All the interesting packets had `URB_BULK out`, going to USB Bus 1. So I created a filter:
```txt
usb.device_address == 15 && usb.capdata
```
Which resulted in:

![](../images/recursion-part-2.png)

I then used tshark to extract the filtered packets by using the command:
```txt
tshark -r usb.pcapng -Y 'usb.capdata and usb.device_address==15' -T fields -e usb.capdata > raw
```
Which I then converted to binary using:

```txt
xxd -r -p raw output1.bin
```
I then used binwalk on `output1.bin` to find any hidden files
Which found a hidden file called `layer4.pcapng`. I then opened that pcap in wireshark

Interesting packets:
19, 35, 53, 59, 65,    All were going to usb bus 15 and were URB, so I used Tshark again:

```txt
tshark -r layer4.pcapng -Y 'usb.capdata and usb.device_address==15' -T fields -e usb.capdata > raw
```
Then ` xxd -r -p raw output2.bin`
Then binwalk
Use `binwalk --dd='.*'  output2.bin` to force extract. Which results in a zip folder titled `2612.zip`, which contains `layer3.pcap`. So I repeat the process again:
```txt
tshark -r layer3.pcapng -Y 'usb.capdata and usb.device_address==15' -T fields -e usb.capdata > raw
```
`xxd -r -p raw output3.bin`

Then binwalk. Which results in a file titled `layer2.pcapng` So I repeat the process again

```txt
tshark -r layer2.pcapng -Y 'usb.capdata and usb.device_address==15' -T fields -e usb.capdata > raw
```

```txt
xxd -r -p raw output4.bin`
```




Which results in a pcap titled layer1.pcapng, so I repeat the process again, but binwalk returns nothing. So, I use `strings layer1.pcapng`, where in the output:
```txt
Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz (with SSE4.2)
64-bit Windows 10 (22H2), build 19045
Dumpcap (Wireshark) 4.2.4 (v4.2.4-0-g1fe5bce8d665)
\\.\USBPcap1
USBPcap1
64-bit Windows 10 (22H2), build 19045
USBC 
USBS 
USBC 
USBS 
USBC 
USBS 
USBC 
USBS 
USBC j
BSD  4.4
BLANK      FAT32   
Non-system disk
Press any key to reboot
USBS j
USBC`zl
USBS`zl
USBC`zl
USBS`zl
USBC j
BLANK      (
`KjX
POTLI~1   
|W|W
SEVEN~1   
|W|W
ORENS~6ZIP 
FjXZ
FOREN~9ZIP"
]KjXM
SYSTEM~1   
iKjXjX
jKjX
LAG    TXT 
LAG    TXT 
AYER0~1PCA 
AYER1~1PCA 
LAYER0~1PCA 
USBS j
USBC j
USBS j
USBC Z
USBS Z
USBC Z
BLANK      (
`KjX
POTLI~1   
|W|W
SEVEN~1   
|W|W
ORENS~6ZIP 
FjXZ
FOREN~9ZIP"
]KjXM
SYSTEM~1   
iKjXjX
jKjX
LAG    TXT 
LAG    TXT 
AYER0~1PCA 
AYER1~1PCA 
LAYER0~1PCA 
USBS Z
USBC *]
Intel(R) Core(TM) i5-8400 CPU @ 2.80GHz (with SSE4.2)
64-bit Windows 10 (22H2), build 19045
Dumpcap (Wireshark) 4.2.4 (v4.2.4-0-g1fe5bce8d665)
\\.\USBPcap1
USBPcap1
64-bit Windows 10 (22H2), build 19045
USBC 
USBS 
USBC 
USBS 
USBC 
USBS 
USBC 
BSD  4.4
BLANK      FAT32   
Non-system disk
Press any key to reboot
USBS 
USBC`z
USBS`z
USBC`z
USBS`z
USBC 
BLANK      (
`KjX
POTLI~1   
|W|W
SEVEN~1   
|W|W
ORENS~6ZIP 
FjXZ
FOREN~9ZIP"
]KjXM
SYSTEM~1   
iKjXjX
jKjX
LAG    TXT 
FLAG    TXT 
USBS 
USBC 
BLANK      (
`KjX
POTLI~1   
|W|W
SEVEN~1   
|W|W
ORENS~6ZIP 
FjXZ
FOREN~9ZIP"
]KjXM
SYSTEM~1   
iKjXjX
jKjX
LAG    TXT 
FLAG    TXT 
USBS 
USBC 
USBS 
USBC j
USBS j
USBC j
BLANK      (
`KjX
POTLI~1   
|W|W
SEVEN~1   
|W|W
ORENS~6ZIP 
FjXZ
FOREN~9ZIP"
]KjXM
SYSTEM~1   
iKjXjX
jKjX
LAG    TXT 
FLAG    TXT 
USBS j
USBC j
BLANK      (
`KjX
POTLI~1   
|W|W
SEVEN~1   
|W|W
ORENS~6ZIP 
FjXZ
FOREN~9ZIP"
]KjXM
SYSTEM~1   
iKjXjX
jKjX
LAG    TXT 
FLAG    TXT 
USBS j
USBC j
crew{l00ks_l1ke_y0u_mad3_1t!}
USBS j
USBC`z
USBS`z
USBC *]
BSD  4.4
BLANK      FAT32   
Non-system disk
Press any key to reboot
RRaA
rrAa
USBS *]
USBC j
USBS j
USBC 
USBS 
USBC 
USBS 
USBC 
USBS 
USBS *]
USBC Z
BLANK      (
`KjX
POTLI~1   
|W|W
SEVEN~1   
|W|W
ORENS~6ZIP 
FjXZ
FOREN~9ZIP"
]KjXM
SYSTEM~1   
iKjXjX
jKjX
LAG    TXT 
LAG    TXT 
AYER0~1PCA 
AYER1~1PCA 
LAYER0~1PCA 
USBS Z
USBC Z
BLANK      (
`KjX
POTLI~1   
|W|W
SEVEN~1   
|W|W
ORENS~6ZIP 
FjXZ
FOREN~9ZIP"
]KjXM
SYSTEM~1   
iKjXjX
jKjX
LAG    TXT 
LAG    TXT 
AYER0~1PCA 
AYER1~1PCA 
LAYER0~1PCA 
USBS Z
USBC`Z
USBS`Z
USBC *]
BSD  4.4
BLANK      FAT32   
Non-system disk
Press any key to reboot
RRaA
rrAa
USBS *]
USBC Z
USBS Z
USBC j
USBS j
USBC 
USBS
```
Is the flag. I then submit `crew{l00ks_l1ke_y0u_mad3_1t!}`, and solve the challenge.


