# Addition

![](../images/addition-part-1.png)

`server.py` contains:
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
Connect with netcat
10 questions:
```txt
how many questions do you want to answer? 10
what is 6 + 4 = 10
calculating
.
.
.
what is 9 + 10 = 19
calculating
.
.
.
what is 4 + 6 = 10
calculating
.
.
.
what is 4 + 6 = 10
calculating
.
.
.
what is 2 + 2 = 4
calculating
.
.
.
what is 2 + 5 = 7
calculating
.
.
.
what is 2 + 6 = 8
calculating
.
.
.
what is 6 + 2 = 8
calculating
.
.
.
what is 3 + 4 = 7
calculating
.
.
.
what is 1 + 10 = 11
calculating
.
.
.
n00bz{m4th
```

I wondered what would happen if I entered `-1` for the amount of questions, as an index of -1 would correspond to the last character:
```txt
how many questions do you want to answer? -1
n00bz{m4th_15nt_4ll_4b0ut_3qu4t10n5}
```

I then submitted `n00bz{m4th_15nt_4ll_4b0ut_3qu4t10n5}` and solved the challenge.

