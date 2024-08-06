# Vacation

![](../images/vacation-part-1.png)

Download files. `run.ps1` contains:
```txt
$bytes = [System.Text.Encoding]::ASCII.GetBytes((cat .\flag.txt))
[System.Collections.Generic.List[byte]]$newBytes = @()
$bytes.ForEach({
    $newBytes.Add($_ -bxor 3)
    })
$newString =  [System.Text.Encoding]::ASCII.GetString($newBytes)
echo $newString | Out-File -Encoding ascii .\output.txt
```
While `output.txt` contains:
```txt
m33ayxeqln\sbqjp\twk\{lq~
```

Chatgpt prompt:
```txt
Using this .ps1 script: $bytes = [System.Text.Encoding]::ASCII.GetBytes((cat .\flag.txt)) [System.Collections.Generic.List[byte]]$newBytes = @() $bytes.ForEach({ $newBytes.Add($_ -bxor 3) }) $newString = [System.Text.Encoding]::ASCII.GetString($newBytes) echo $newString | Out-File -Encoding ascii .\output.txt Reverse engineer the output: m33ayxeqln\sbqjp\twk\{lq~ to get the flag
```

Resulted in this python script 

```txt
# Encoded string
encoded_string = "m33ayxeqln\\sbqjp\\twk\\{lq~"

# Decode the string
decoded_bytes = [chr(ord(char) ^ 3) for char in encoded_string]
decoded_string = ''.join(decoded_bytes)

# Output the decoded string
print(decoded_string)
```

I copied and pasted the script into a python file, which I named `vacation_solve.py` and ran it, which resulted in:
```txt
n00bz{from_paris_wth_xor}
```

I then submitted `n00bz{from_paris_wth_xor}` and solved the challenge.

