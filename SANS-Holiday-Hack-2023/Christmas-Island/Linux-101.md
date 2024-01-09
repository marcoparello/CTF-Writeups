# Linux 101
Oh boy this was a long one. With 22 tasks to complete (23 if you can't the exit task), it is a gauntlet. But without further to do, lets go!

![](../images/Linux-101-Challenge-1.jpg)

To start the gauntlet, we must type `yes` on our keyboard and hit the `enter` key.

![](../images/Linux-101-Challenge-2.jpg)

In linux, the `ls` command lists all the files in a directory. Since the task is to perform a directory listing of the home directory, we can assume that the `ls` command is the answer. For example, if we were in a directory called dummy and we wanted to see all the files in dummy, we would execute 
```txt
ls dummy
```
and the output would be the files that are in dummy.

So type `ls` on the keyboard and the result is:

![](../images/Linux-101-part-3.png)

We now must find the troll inside the troll. This can be accomplished with the `cat` command. In Linux, the `cat` command is used to display the contents of a file on the terminal. For instance, if I had a file named "cow" which had the word "moo" written to it, if I ran the command `cat cow` (assuming that the current directory I was in is the directory that contains the "cow" file), then "moo" would be displayed on my terminal after I execute the command. Since the file name for the troll is `troll_19315479765589239`, the command I would need to execute is:
```txt
cat troll_19315479765589239
```
After I executed the command, the result was:

![](../images/Linux-101-part-4.png)

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-4.jpg)

In order to remove a file in Linux, the `rm` command is used. The `rm` command only works if the file that is to be removed is in the current working directory. Let's say that we had a file named "notavirusiswear.exe" and we wanted to remove it from our system. We would execute the command
```txt
rm notavirusiswear.exe
```
which would remove the file. If we used the `ls` command before, it would show that the "notavirusiswear.exe" is still in the directory. However, after we executed the `rm notavirusiswear.exe` and then executed the `ls` command, "notavirusiswear.exe" would be gone.

With my understanding of the `rm` command, I typed

```txt
rm troll_19315479765589239
```

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-5.jpg)

In order to print the present working directory in Linux, the `pwd` command is used. For example, if we were working in the "idea" directory, executing the command `pwd` would result in "idea" being printed to the terminal. Therefore, I simply typed

```txt
pwd
```
After I executed the command, the result was:

![](../images/Linux-101-part-7.png) 

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-6.jpg)

In order to display hidden files in Linux, use the `ls` command with the `-a` flag. The `-a` includes hidden files and directories in the output of the `ls` command. For example, lets say we have 2 files in the "cow" directory. One of them is named "moo1.jpg" while the other is named "moo2.jpg". The file "moo1.jpg" is a non-hidden file, while "moo2.jpg" is a hidden file. If we execute the `ls` command, only moo1.jpg will be displayed in the output despite the existence of moo2. However, if we executed 

```txt
ls -a
```

The output would include both "moo1.jpg" and "moo2.jpg"

Therefore, I typed

```txt
ls -a
```
After I executed the command, the result was

![](../images/Linux-101-part-12.png)

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-7.jpg)

In Linux, your command history is stored in the `.bash_history` file. `bash_history` is a hidden file so it has a `.` at the start. As a result, it can only be seen with `ls -a` command if the user usese `ls` to list files on their system. Since the `.bash_history` file in the system we are currently working on is in the same working directory as we are, I simply type:

```txt
cat .bash_history
```
After I executed the command, the result was

![](../images/Linux-101-part-13.png)

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-8.jpg)

In Linux, the `printenv` command is used to display the enironmental variables of the system. With this information, I typed:

```txt
printenv
```

After I executed the command, the result was

![](../images/Linux-101-part-14.png)

It's not exactly pretty. Eh we can't all be beautiful like MacOS I guess.

Anyway with the abomination out of the way, I unlocked the next challenge:

![](../images/Linux-101-Challenge-9.jpg)

We are now going to challenge directories. In order to change directories in Linux, use the `cd` command. For example, if you wanted to change from the "moo" directory to the "moomoo" directory, and the "moomoo" directory was in the same working directory as the current directory, you would use the command 

```txt
cd moomoo
```

You are now in the "moomoo" directory. If you wanted to go back on the directory chain, you would use

```txt
cd ..
```

Which would move you back one directory

Using this information, I typed

```txt
cd workshop
```
I then used the `ls` command, as ls'ing after entering a new directory is like a second nature to me. I was greeted with

![](../images/Linux-101-Challenge-10-Wall.jpg)

Oh boy. Thats a lot of toolboxes

I then unlocked the next challenge (well I did unlock it after I typed `cd workshop` )

![](../images/Linux-101-Challenge-10.jpg)


