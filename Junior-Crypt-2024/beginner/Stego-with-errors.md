# Stego with errors

![](../images/stego-with-errors-part-1.png)

I downloaded the `txt` file onto my Kali Linux VM and opened it, which displayed:

`Steganography is the practice of representing information within another message or physical object, in such a manner that the presence of the information is not evident to human inspection. In computing/electronic contexts, a computer file, message, image, or video is concealed within another file, message, image, or video. The word steganography comes from Greek steganographia, which combimes the words steganos, meaning "covered or concealed", and -graphia meaning "writing".
The first recorded use of the term was in 1499 by Johannes Trithemius in his Steganographia, a treatise on cryptigraphy and steganography, disguised as a book on magic. Generally, the hidden messages appear to be (or to be part of) something else: images, articles, shopping lists, or some other cover text. For esample, the hidden message may be in invisible ink between the visible lines of a private letter. Some implementations of steganography that lack a shared secret are forms of security through obscurity, and key-dependent steganographic schemes adhete to Kerckhoffs's principle.
The advantage of steganography over cryptography alone is that the intended secret mesaage does not attract attention to itself as an object of scrutiny. Plainly visible encrypted messages, no matter how unbreakable they are, arouse interest and may in themselves be incriminating in countries in which encryption is illegal.
Whereas cryptography is the practice of protecting the contents of a message alone, steganography is concerned with concealing the fact that a secret message is being sent and its contents.
Steganography includes the concealment of information within computer files. In digital steganography, electronic communications may include steganographic coding inside of a transport layer, such as a document file, image file, program, or protocol. Media files are ideal for steganographic transmission because of their large size. For example, a sender might start with an innocuous image file and adkust the color of every hundredth pixel to correspond to a letter in the alphabet. The change is so subtle that someone who is not specifically looking for it is unlikely to notice the change.
The first recorded uses of steganography can be traced back to 440 BC in Greece, when Herodotus mentions two examples in his Histories. Histiaeus sent a message to his vassal, Aristagoras, by shaving the head of his most teusted servant, "marking" the message onto his scalp, then sending him on his way once his hair had regrown, with the instruction, "When thou art come to Miletus, bid Aristagoras shave thy heas,_and look thereon." Additionally, Demaratus sent a warning about a forthcomimg attack to Greece by writing it directly on the wooden backing of a wax tablet before applying ita beeswax surface. Wax tabkets were in common use then as reusable wreting_surfaces, sometimes used for shorthand.
In his work Polygraphiae, Johannes Trithemius developed his so-called "Ave-Maria-Cipher" that can hide information in a Latin praise of God. "Auctor Sapientissimus Conseruans Angelica Deferat Nobis Charitas Potentissimi Creatoris" for example contains the concealed word VICIPEDIA.
Steganography has been widelu used for centuries. Some examples include:
Hidden messages on a paper written in secret inks.
Hidden messages sistributed,_according to a certain rule or key, as smaller parts (e.g. words or letters) among other words of a less suspicious cover text. This particular form of steganography is called a null cipher.
Messages written in Morse code on yarn and then knitted into a piece of clothing worn by a courier.
Messages written on envelopes in the area covered by postage stamps.
In the early days of the printing press, it was common to mix sifferent typefaces on a printed page because the printer did not have enouth copies of some letters in one typeface. Thus, a message could be hidden by using two or morr different typefaces, such as normal or otalic.
During and after World War II, espionage agents used photographically-produced nicrodots to send information back and forth. Microdots were typically minute (less than the size of the period produced by a typewriter). World War II microdots were embedded in the paper and covered with an adhesive, such as collodion that was reglective and so was detectable by viewing against glancing light. Alternative techneques included inserting microdots into slits cut into the edge of posrcards.
During World War II, Velvalee Dickinson, a spy for Japan in New York City, sent information to accommodation addresses in neutral South America. She was a dealer in dolls, and her letters discussed the quantity and type of doll to ship. The stegotext was the doll orders, and the concealed "plaintext" was itself encoded and gave information about ship movements, etc. Her case became somewhat famous and she became known as the Doll Woman.
During World War II, photosensitive glass was declared secret[by whom?], and used for transmitting information to Allied armies.
Jeremiah Denton repeatedly blinked his eyes in Morse code during the 1966 televised press conference that he was forced into as an American prisoner-of-war by his North Vietnamese captors, spelling out "T-O-R-T-U-R-E". That confirmed for the first time to the US Naval Intelligence and other Americans that the North Vietnamese were torturing American prisoners-of-war.
In 1968, crew members of the USS Pueblo intelligence ship, held as prisoners by North Korea, communicated in sign language during staged photo opportunities, to inform the United States that they were not defectors but captives of the North Koreans. In other photos presented to the US, crew members gave "the finger" to the unsuspecting North Koreans, in an attempt to discredit photos that showed them smiling and comfortable.
In 1985, a klezmer saxophonist smuggled secrets into and out of the Soviet Union by coding them as pitches of musical notes in sheet music.`

I noticed random `_` throughout the document, which is what seperates words in the flag format. I also noticed multiple errors throughout the text. Putting two and two together, I realized that the errors in the text must be the characters of the flag. So, I copied and pasted the text into a word document, which was then spellchecked. From there, I went through the spellchecked document and highlighted the errors:

## 1st Error

![](../images/stego-with-errors-part-2.png)

`combimes` should be `combines`. Therefore, the error character is `m`. The current flag:

`grodno{m}`

## 2nd Error

![](../images/stego-with-errors-part-3.png)

`cryptigraphy` should be `cryptography`. Therefore, the error character is `i`. The current flag is:

`grodno{mi}`

## 3rd Error

![](../images/stego-with-errors-part-4.png)

`esample` should be `example`. Therefore, the error character is `s`. The current flag is:

`grodno{mis}`

## 4th Error

![](../images/stego-with-errors-part-5.png)

`adhete` should be `adhere`. Therefore, the error character is `t`. The current flag is:

`grodno{mist}`

## 5th Error

![](../images/stego-with-errors-part-6.png)

`mesaage` should be `message`. Therefore, the error character is `a`. The current flag is:

`grodno{mista}`

## 6th Error

![](../images/stego-with-errors-part-7.png)

`adkust` should be `adjust`. Therefore, the error character is `k`. The current flag is:

`grodno{mistak}`

## 7th Error

![](../images/stego-with-errors-part-8.png)

`teusted` should be `trusted`. Therefore, the error character is `e`. The current flag is:

`grodno{mistake}`

## 8th Error

![](../images/stego-with-errors-part-9.png)

`heas,_` should be `hear, `. Therefore, the error characters are `s` and `_`. The current flag is:

`grodno{mistakes_}`

## 9th Error

![](../images/stego-with-errors-part-10.png)

`forthcomimg` should be `forthcoming`. Therefore, the error character is `m`. The current flag is:

`grodno{mistakes_m}`

## 10th Error

![](../images/stego-with-errors-part-11.png)

`ita` should be `its`. Therefore, the error character is `a`. The current flag is:

`grodno{mistakes_ma}`

## 11th Error

![](../images/stego-with-errors-part-12.png)

`tabkets` should be `tablets`. Therefore, the error character is `k`. The current flag is:

`grodno{mistakes_mak}`

## 12th Error

![](../images/stego-with-errors-part-13.png)

`wreting_surfaces` should be `writing surfaces`. Therefore, the error characters are `e` and `_`. The current flag is:

`grodno{mistakes_make_}`

## 13th Error

![](../images/stego-with-errors-part-14.png)

`widelu` should be `widely`. Therefore, the error character is `u`. The current flag is:

`grodno{mistakes_make_u}`

## 14th Error

![](../images/stego-with-errors-part-15.png)

`sistributed,_` should be `distributed, `. Therefore, the error characters are `s` and `_`. The current flag is:

`grodno{mistakes_make_us_}`

## 15th Error

![](../images/stego-with-errors-part-16.png)

`sifferent` should be `different`. Therefore, the error character is `s`. The current flag is:

`grodno{mistakes_make_us_s}`

## 16th Error

![](../images/stego-with-errors-part-17.png)

`enouth` should be `enough`. Therefore, the error character is `t`. The current flag is:

`grodno{mistakes_make_us_st}`

## 17th Error

![](../images/stego-with-errors-part-18.png)

`nicrodots` should be `microdots`. Therefore, the error character is `n`. The current flag is:

`grodno{mistakes_make_us_stn






