let determinePrecedence = (stringA, stringB) => {
    let checkLeadZero = (string) => {
        var j = string.length;
        while (j--) {
            if (string.charAt(j) === "." && string.charAt(j + 1) === "0" && string.charAt(j + 2) !== "0") {
                return true
            } else if (string.charAt(0) === "0" && string.charAt(string.indexOf(".")) !== "0") {
                return false
            } else {
                return true
            }

        }
    }
    if (!checkLeadZero(stringA) ||
        !checkLeadZero(stringB)) {
        return "Version String not valid, Contain Lead Zero"
    } else {
        if (stringA.includes("-")) {
            stringA = stringA.substring(-1, stringA.indexOf("-"));
        }

        if (stringB.includes("-")) {
            stringB = stringB.substring(-1, stringB.indexOf("-"));
        }
        stringA = stringA.split('.').map(n => Number(n));
        stringB = stringB.split('.').map(n => Number(n));
        let z = "";

        for (i = 0; i < stringA.length; i++) {

            if (stringA[i] == stringB[i]) {
                z += "e";
            } else
                if (stringA[i] > stringB[i]) {
                    z += "m";
                } else {
                    z += "l";
                }
        }
        if (!z.match(/[l|m]/g)) {
            return true;
        } else if (z.split('e').join('')[0] == "m") {
            return true;
        } else {
            return false;
        }

    }

}


// examples 

// example one will return (Result1 true) which mean first semver provided to the function has a higher precedence than the second semver provided
console.log("Result1", determinePrecedence("31.40.11-alpha", "3.40.00-alpha"))

// example two will return (Result2 false) which mean the second semver provided to the function has a higher precedence than the first semver provided
console.log("Result2", determinePrecedence("31.40.11", "35.40.00"))

// example 3 will return (Result3 Version String not valid, Contain Lead Zero) which mean the semver provided is not valid because one or both of them contains lead zeros
console.log("Result3", determinePrecedence("31.40.11", "03.40.00"))