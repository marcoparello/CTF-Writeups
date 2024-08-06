# Vacation

![](../images/vacation-part-1.png)

I click on`run.ps1`, which takes me to a webpage that displays:

```txt
$bytes = [System.Text.Encoding]::ASCII.GetBytes((cat .\flag.txt))
[System.Collections.Generic.List[byte]]$newBytes = @()
$bytes.ForEach({
    $newBytes.Add($_ -bxor 3)
    })
$newString =  [System.Text.Encoding]::ASCII.GetString($newBytes)
echo $newString | Out-File -Encoding ascii .\output.txt
```
I then click on `output.txt`, which takes me to a webpage that displays:

```txt
m33ayxeqln\sbqjp\twk\{lq~
```

I then ask ChatGPT to explain what the code is doing, line by line, which results in: 
```txt
Using this .ps1 script: $bytes = [System.Text.Encoding]::ASCII.GetBytes((cat .\flag.txt)) [System.Collections.Generic.List[byte]]$newBytes = @() $bytes.ForEach({ $newBytes.Add($_ -bxor 3) }) $newString = [System.Text.Encoding]::ASCII.GetString($newBytes) echo $newString | Out-File -Encoding ascii .\output.txt Reverse engineer the output: m33ayxeqln\sbqjp\twk\{lq~ to get the flag
```

Resulted in this python script 

```txt
encoded_string = "m33ayxeqln\\sbqjp\\twk\\{lq~"
decoded_bytes = [chr(ord(char) ^ 3) for char in encoded_string]
decoded_string = ''.join(decoded_bytes)
print(decoded_string)
```

I copied and pasted the script into a python file, which I named `vacation_solve.py` and ran it, which resulted in:
```txt
n00bz{from_paris_wth_xor}
```

I then submitted `n00bz{from_paris_wth_xor}` and solved the challenge.

