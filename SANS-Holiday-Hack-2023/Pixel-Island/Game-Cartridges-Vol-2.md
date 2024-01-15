# Game Cartridges: Vol 2
The second game cartridge game be found in Pixel Island, more specifically, DriftbitGrotto. In DriftbitGrotto, the location of the game cartridge is here:

![](../images/Game-Cartridges-Vol-2-part-1.png)

Once you click where I am, the second game cartridge will be available for you to access in your inventory. I then started the game. I played through normally, but reached a roadblock where the character T-Wizz won't let you pass to the next area below hiim:

![](../images/Game-Cartridges-Vol-2-part-2.png)

I then exited out of the game to see if anything changed if I played a new game. It did! While T-Wizz still won't let me pass, it is not to the area below. Instead, it is now in the area above:

![](../images/Game-Cartridges-Vol-2-part-3.png)

Therefore there must be two versions of the game. So I went into dev tools and inspected the network tab to see if I could download each game version. On my first try, I was able to get:

![](../images/Game-Cartridges-Vol-2-part-4.png)

I had one of the two versions of that game. However it took a couple of refreshes until:

![](../images/Game-Cartridges-Vol-2-part-5.png)

Got it. I then hopped onto my Kali Linux VM and installed the GhidraBoy plugin to enable Ghidra to reverse engineer the game boy roms. I then used to Ghidra to analyze `game0.gb`. While looking at the output, I found something that caught my attention:

![](../images/Game-Cartridges-Vol-2-part-6.png)

This is the code for the text that appears in game0 when you attempt to cross T-Wiz. Since it was "You shall not pass!!!", I wondered what would happen if I changed it to 

![]
