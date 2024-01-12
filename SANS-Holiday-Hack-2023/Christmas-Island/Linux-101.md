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

This challenge requires the `grep` command to be used. The `grep` command searches for patterns in text. If found, it highlights the patterns in it's output. That is the default `grep` behavior without using any flags.  However, it also has optional flags that you can chain to do a lot of crazy searches. In order to solve the challenge, I typed:

```txt
grep -Rin "troll" .
```
The `-Rin` flag is a combination of the `-R`, `-i`, and `-n` flags for `grep`. The `-R` flag performs a recursive search, aka looking through the current directory and it's subdirectory. It will only stop once there aren't any more directories to traverse. The `-i` flag tells `grep` to perform a case-insensitive search, meaning that casing doesn't matter. As long as `grep` finds patterns that match the words for the target query, it will highlight the pattern. The `-n` flag tells `grep` to display number lines in it's output. I didn't have to put this flag in but I wanted to because it looked nice. Finally the `.` tells `grep` to start the search in the current directory. After I executed `grep -Rin "troll"`, the result was:

![](../images/Linux-101-part-10.png)

Which unlocked the next challenge:

![](../images/Linux-101-Challenge-11.jpg)

Since the `present_engine` binary file is already in our `/usr/local/bin` directory (I checked it before while trying to solve this challenge originally), we don't have to do multiple `cd ..` or `cd` commands to go the directory where `present_engine` is located. Since binary files almost always never have execute permissions by default, I typed:

`chmod +x present_engine`

The `chmod` command changes permissions for files. The `+x` flag adds the "execute" permission to a file, allowing the file to be run by the user. Finally, `present_engine` is the target file for chmod. Now that `present_engine` is an executable file, I type:

`./present_engine`

The `./` command in Linux is used to run executable files from the current directory. Since `present_engine` is in the `/usr/local/bin` directory, we can run it from any location in our system. Because we want to run `present_engine` from the current directory, we use the aformentioned command. After I ran `./present_engine` command, I unlocked the next challenge:

![](../images/Linux-101-Challenge-12.jpg)

To solve this, I first typed:

```txt
cd electrical
```

The `mv` command in linux is used for moving files and directories, but it also can be used to rename files. The syntax for renaming files is as follows: `mv <oldname> <newname>`. Using this information, I typed:

```txt
mv blown_fuse0 fuse0
```

Which immediately unlocked the next challenge:

![](../images/Linux-101-Challenge-13.jpg)

A symlink in Linux is basically a shortcut in Windows. In order to create a symlink, we must use the `ln -s` command. The `ln` command creates links to files in Linux, while the `-s` flag tells `ln` to make the link a symlink. Using this information, I typed the command:

```txt
ln -s fuse0 fuse1
```
Which immediately unlocked the next challenge:

![](../images/Linux-101-Challenge-14.jpg)

In Linux, the `cp` command is used to copy files. The syntax is as follows `cp <original_file> <copy_file>`. Using this information, I typed:

```txt
cp fuse1 fuse2
```
Which immediately unlocked the next challenge:

![](../images/Linux-101-Challenge-15.jpg)

The `echo >>` command is used to add text to a file in Linux. The `echo` command is used to output text in the terminal, while the `>>` option signifies appending an output to a file. Using this information, I typed:

```txt
echo TROLL_REPELLENT >> fuse2
```
Which immediately unlocked the next challenge:

![](../images/Linux-101-Challenge-16.jpg)

Remember earlier when I said at least we don't have to run multiple `cd` or `cd..` commands. Yeah. Anywhere in order to get to /opt/troll_den, I typed:
```txt
cd ..
cd ..
cd ..
cd opt
cd troll_den
```

Since I needed to "find" a file that is a troll somewhere, I typed:

```txt
find -iname troll*
```

The `find` command in Linux is used to locate files. The `-iname` flag is used in `find` to specify that the casing of the word doesn't matter. As long as the characters are the same, count a file that contains the word as a match. Finally, the `troll*` portion looks for a file with the word "troll" in it, with the `*` being a wildcard (bascially any character or characters) that come after "troll". After I executed the command, the result was:

![](../images/Linux-101-Extra-Screenshot.jpg)

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-17.jpg)

Now I need to "find" the file in troll_den that is owned by the "user" troll. To do this, I typed:

```txt
find . -user troll
```

The `find` searches for files , the `.` specifies the current directory to be searches, the `-user` tells find to look for files owned by a specfic user, and `troll` specifices that user for which we are looking for their files. After I executed the command, the result was:

![](../images/Linux-101-part-23.png)

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-18.jpg)

Note include explanation later

```txt
find . -size +108k -size -110k
```

![](../images/Linux-101-part-24.png)

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-19.jpg)

Note include explanation later

```txt
ps -ef
```

![](../images/Linux-101-part-25.png)

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-20.jpg)

Note include explanation later

```txt
netstat -ntl
```

![](../images/Linux-101-part-26.png)

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-21.jpg)

Note include explanation later

```txt
curl 127.0.0.1:54321
```

![](../images/Linux-101-part-27.png)

I then unlocked the next challenge:

![](../images/Linux-101-Challenge-22.jpg)

Note include explanation later

```txt
pkill 14516_troll
```

![](../images/Linux-101-part-28.png)

I then unlocked the next "challenge"

![](../images/Linux-101-Challenge-23.jpg)

Note include explanation later

```txt
exit
```

Done





