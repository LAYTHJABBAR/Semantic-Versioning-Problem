# Semantic-Versioning-Problem

to run the function clone the repo to your local machine
run the determinePrecedence.js file with node or any js engine

##Three examples passed to the function as bellow

##examples 

##example one will return (Result1 true) which mean first semver provided to the function has a higher precedence than the second semver provided

console.log("Result1", determinePrecedence("31.40.11-alpha", "3.40.00-alpha"))

##example two will return (Result2 false) which mean the second semver provided to the function has a higher precedence than the first semver provided

console.log("Result2", determinePrecedence("31.40.11", "35.40.00"))

##example 3 will return (Result3 Version String not valid, Contain Lead Zero) which mean the semver provided is not valid because one or both of them contains lead zeros

console.log("Result3", determinePrecedence("31.40.11", "03.40.00"))

##To test the function with your inputs just write the code bellow at the end of the function

console.log("Result", determinePrecedence(semver1, semver2))

semver1 and semver2 should be in string format
