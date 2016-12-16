#RoyalScript

##Intro

RoyalScript is a functional programming languag that aims to combine the utility of popular functional programming languages with the mutable data structures found in object oriented languages. The language is also quickly compiled to compressed JavaScript, so it can be run in the browser, without having to download anything on your computer. Lastly, RoyalScript is also inter-operable with javascript functions. You can call native javascript functions from RoyalScirpt as well!

##Computational Functions

The major difference between RoyalScript and other functional languags lik Scheme is that RoyalScript functions do not *always* evaluate to some resulting value. They do not always return a value. Some functions, such as the `for` function loops over some list of values. Another example is the 

RoyalScript is meant to offer more options for computation than just recursion, although recursion is definitely usable. 

In fact, every RoyalScript program must have at least one or more functions, otherwise you will raise an error.

##Syntax

In RoyalScript, all statements abide by a concise function syntax as follows

```
<FUNCTION>(<ARGUMENT 1>, <ARGUMENT 2>....)

nested functions:

<FUNCTION 1>(<FUNCTION 2>(<ARGUEMNT 1>), <ARGUMENT 1>....)

series of functions:

<FUNCTION>(<ARGUMENT 1>, <ARGUMENT 2>...), <FUNCTION>()
```

So statements or programs in RoyalScript consist purely of functions and their arguments.

##Types

###Literal

RoyalScript variables, function names, and struct names, or any name is represented as a literal. A literal is pure representation of data in UTF-8 format. 

###Primtiive Types

RoyalScript has primitive types and custom or reference types created by structs



* Number
* String
* Boolean
* List(Array)
* null
* function

Numbers represented both integers and floats, as JavaScript numbers do.
