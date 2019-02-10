---
title: Importing Text Files with Python
layout: post
category: math
---
A very common method of storing text information is within .txt files. To process this information, Python has to open and read the text files.  

file = open(pathtofile, "r")
data = file.read()

The contents of the file are now in the data variable.

Additionally we can append the contents of other files to the same data variable.

file = open(pathtoanotherfile, "r")
data.append(file.read())

Through the use of loops, we can rapidly give Python our text information, even if its spread out among many files.

The function len(data) returns the number of characters in the variable. This information is interesting. We could analyze the frequency of letters, punctuation marks, and spaces. However, a lot of text analysis requires the data to be separated into words or sentences.

Splitting raw text into words and sentences is harder than it initially seems. This is caused by the versatility of language. In most cases, a period signifies the end of a sentence but if we're talking about Mt. Kilimanjaro it does not. 

Thankfully much of the heavy lifting has been done already. Libraries such as the Natural Language Toolkit have the capability to segment sentences with more accuracy than we could manage ourselves.

This process is known as Tokenization.

