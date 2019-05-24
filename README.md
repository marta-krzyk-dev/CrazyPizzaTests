# Node JS Tests
5th homework assignment for [Pirple's NodeJS master class](https://pirple.thinkific.com/courses/the-nodejs-master-class).
This project creates unit tests for two simple libraries: math and lang.

## Features
- [x] Tests and test runner are within /test folder, libraries are within /app folder.
- [x] lang and math libraries both contain simple functions.
- [x] Tests are contained in test/lang_unit.js and test/math_unit.js. They check if the library functions return the correct values, that they throw or do not throw errors depending on the parameters passed in.

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

## Libraries

### Math library
|Function|Parameters|Description|
|-------|-----------|-----------|
|`findDivisors`|`number`| Returns an array of 2 greatest divisors for a given number. If number is invalid, `TypeError` is thrown. If number is 1, array [1] is returned.|
|`getANumber`|`min`, `max`| Returns a random number between min and max. If `min` is invalid, it is set to 1. If `max` is invalid, it is set to 10. If `min` is greater than `max`, then they are set to 1 and 10 respectively.|

### Lang library
|Function|Parameters|Description|
|-------|-----------|-----------|
|`conjugateRegularPreterite`|`verb`,`person`| Returns a simple past form (preterite) of the verb passed in, eg. for ('cominar','tu') the result is 'caminaste'. If the verb is not in infinitive form (ends with -ar,-er,-ir), a custom `VerbNotInfinitiveError` is thrown. If verb is not a valid string, a custom `LangError` is thrown. `person` argument must be one of: `yo`, `tu`, `el_ella`, `nosotros`, `vosotros`, `ellos_ellas`, otherwise `yo` form is returned.
|`getOrdinalNumber`|`number`, `noun`| Returns an ordinal number as a string in Spanish and the noun passed. Eg. for (4,'gato') result is 'cuatro gato'; for (10,'sandía') the result is 'décima sandía'. If the arguments are not number and noun respectively, a custom `LangError` is thrown.|
