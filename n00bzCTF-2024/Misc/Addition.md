# Addition

![](../images/addition-part-1.png)

I clicked on `server.py`, which took me to a webpage that displayed:

```txt
import time
import random

questions = int(input("how many questions do you want to answer? "))

for i in range(questions):
    a = random.randint(0, 10)
    b = random.randint(0, 10)

    yourans = int(input("what is " + str(a) + ' + ' + str(b) + ' = '))

    print("calculating")

    totaltime = pow(2, i)

    print('.')
    time.sleep(totaltime / 3)
    print('.')
    time.sleep(totaltime / 3)
    print('.')
    time.sleep(totaltime / 3)

    if yourans != a + b:
        print("You made my little brother cry ðŸ˜¬")
        exit(69)

f = open('/flag.txt', 'r')
flag = f.read()
print(flag[:questions])

```

I then typed:

```txt
nc 24.199.110.35 42189
```

To connect to the service. Looking at `server.py`, I noticed:

```txt
print(flag[:questions])
```

Which means that the number of questions determine how much of the flag is shown. If the number of questions equals 1, the flag will be printed from the character at it's 0th index to it's 1st index. However:

```txt
for i in range(questions):
    a = random.randint(0, 10)
    b = random.randint(0, 10)

    yourans = int(input("what is " + str(a) + ' + ' + str(b) + ' = '))

    print("calculating")

    totaltime = pow(2, i)

    print('.')
    time.sleep(totaltime / 3)
    print('.')
    time.sleep(totaltime / 3)
    print('.')
    time.sleep(totaltime / 3)

```

As the number of questions increases, the amount of time the server sleeps before the next question is asked increases. But:

```txt
questions = int(input("how many questions do you want to answer? "))
```

The number of questions is based off user input. Therefore, I entered `-1` for the amount of questions, as an index of -1 would correspond to the last character (an index of -2 would correpsond to it's second to last character, and so on), therefore printing the flag out from the character at it's 0th index to the character at it's last index:

```txt
how many questions do you want to answer? -1
n00bz{m4th_15nt_4ll_4b0ut_3qu4t10n5}
```

I then submitted `n00bz{m4th_15nt_4ll_4b0ut_3qu4t10n5}`, and solved the challenge.

