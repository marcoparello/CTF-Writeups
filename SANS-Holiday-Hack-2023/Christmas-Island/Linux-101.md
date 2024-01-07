# Linux 101
Oh boy this was a long one. With 22 tasks to complete (23 if you can't the exit task), it is a gauntlet. But without further to do, lets go!

![](../images/Linux-101-Challenge-1.jpg)

To start the gauntlet, we must type `yes` on our keyboard and hit the `enter` key.

![](../images/Linux-101-Challenge-2.jpg)

In linux, the `ls` command lists all the files in a directory. Since the task is to perform a directory listing of the home directory, we can assume that the `ls` command is the answer. So type `ls` on the keyboard and the result is:

![](../images/Linux-101-part-3.png)

We now must find the troll inside the troll. This can be accomplished with the `cat` command. In Linux, the `cat` command is used to display the contents of a file on the terminal. For instance, if I had a file named "cow" which had the word "moo" written to it, if I ran the command `cat cow` (assuming that the current directory I was in is the directory that contains the "cow" file), then "moo" would be displayed on my terminal after I execute the command. Since the file name for the troll is `troll_19315479765589239`, the command I would need to execute is:
```txt
cat troll_19315479765589239
```
