# Node JS Tests
5th homework assignment for [Pirple's NodeJS master class](https://pirple.thinkific.com/courses/the-nodejs-master-class).
This project creates unit tests for simple two libraries: math and lang.

## Features
- [x] Tests and test runner are within /test folder, libraries are within /app folder.
- [x] lang and math libraries both contain simple functions.
- [x] Tests are contained in test/lang_unit.js and test/math_unit.js. They check if the llibrary functions return the correct values, that they throw or do not throw errors depending on the parameters passed in.

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

