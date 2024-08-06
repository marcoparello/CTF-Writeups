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

I then ask ChatGPT to explain what the code is doing, line by line, and then summarize it. After I execute the prompt, this summary is returned:
```txt
Reads the contents of flag.txt.
Converts the content into an array of bytes.
Applies a bitwise XOR operation with the number 3 to each byte.
Converts the modified byte array back into a string.
Writes the resulting string to output.txt.
```

I then create a python file titled `vacation_solve.py` and begin working:


```txt
encoded_string = "m33ayxeqln\\sbqjp\\twk\\{lq~"
decoded_bytes = [chr(ord(char) ^ 3) for char in encoded_string]
decoded_string = ''.join(decoded_bytes)
print(decoded_string)
```

```txt
n00bz{from_paris_wth_xor}
```

I then submitted `n00bz{from_paris_wth_xor}` and solved the challenge.

