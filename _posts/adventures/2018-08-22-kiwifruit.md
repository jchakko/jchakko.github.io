---
layout: post
category: adventures
---
A very common method of storing text information is within .txt files. To process this information, Python has to open and read the text files.  

file = open(pathtofile, "r")
data = file.read()

The contents of the file are now in the data variable.

Additionally we can append the contents of other files to the same data variable.

file = open(pathtoanotherfile, "r")
data.append(file.read())