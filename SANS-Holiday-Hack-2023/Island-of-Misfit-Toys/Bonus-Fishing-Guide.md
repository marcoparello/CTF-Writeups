# Preface
![](../images/Fishing-Guide.jpg)

Challenge Description: Catch twenty different species of fish that live around Geese Islands. When you're done, report your findings to Poinsettia McMittens on the Island of Misfit Toys.

Location: Island of Misfit Toys - Squarewheel Yard

Difficulty: 1 out of 5 trees


# Bonus! Fishing Guide
The first thing I did after I unlocked this challenge was to open up the Edge dev tools while sailing in the overworld. I then saw this in the elements tab:

![](../images/Bonus-Fishing-Guide-part-3.png)

The "[DEV ONLY] Fish Density Reference" looks interesting. Since it is an `href`, I can access it by typing in the console (with the window set to `sea`):

```txt
window.location.href = 'fishdensityref.html'
```

I then executed the command, which resulted in:

![](../images/Bonus-Fishing-Guide-part-5.png)

This page is a "heatmap" that shows the spawn points of all the 171 fish. Each fish has an entry, where the white parts show where the fish spawns, and the black parts show where the fish doesn't spawn. Looking at the heat map of each of the fish, I noticed a pattern: the vast majority spawn at the head of "Film Noir Island", shown here:

![](../images/Film-Noir-Head.jpg)

So I directed my ship to the area circled in red, and kept casting and reeling until I caught 20 distinct fish. I then went back to the elf that gave me the challenge, and upon talking to him, completed the challenge. I then unlocked the next challenge, "Bonus! Fishing Mastery".

