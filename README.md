# Node JS Tests
5th homework assignment for [Pirple's NodeJS master class](https://pirple.thinkific.com/courses/the-nodejs-master-class).
This project creates unit tests for two simple libraries: math and lang.

## Features
- [x] Tests and test runner are within /test folder, libraries are within /app folder.
- [x] lang and math libraries both contain simple functions.
- [x] Tests are contained in test/lang_unit.js and test/math_unit.js. They check if the llibrary functions return the correct values, that they throw or do not throw errors depending on the parameters passed in.

## Screencast

[See the tests in action and watch the code being explained line by line](https://www.youtube.com/watch?v=4P79amJ9D1o)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=oNE8IBRIOTE
" target="_blank"><img src="http://img.youtube.com/vi/oNE8IBRIOTE/0.jpg" 
alt="Pirple Node JS Master Class Homework Assignment #5" width="300" height="200" border="10" /></a>

## Manual

### Set up
0. Download the project.
1. Open the command prompt (for Windows, click Start icon and type in `cmd`) and go to the project directory.eg. :

`cd C:/NodeJSTests`

2. Run the test runner:

`node test`

Optionally, one can set DEBUG variable to print out messages in the console. (for Windows):

`set DEBUG=* & node test // Print out all debug messages`

`set DEBUG=helpers & node test // Print out debug messages coming from helpers module`

## Printscreens
### All tests passed
![Passed tests](https://github.com/marta-krzyk-dev/NodeJSTests/blob/master/PrintScreens/all_green.png?raw=true)

### One test failed, details are printed
![Failed test](https://github.com/marta-krzyk-dev/NodeJSTests/blob/master/PrintScreens/error.png?raw=true)

## lang library
