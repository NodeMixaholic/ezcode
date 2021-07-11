require("./englishDefs.js");
require("./jsDefs.js");
require("./luaDefs.js");
require("./cSharpDefs.js");
require("./allDefs.js");
//EzCode
//By Samuel Lord
//Makes coding easy by providing fast prototyping using parsing of the English language to create code.
//Example codes:
//print out "hello world";
//js: console.log("hello world");
//C#: Console.WriteLine("hello world");
//NOTE TO SELF: for i in table.length { a.split(find).join(replace) }



function getUniqueVariableName() {
    return `varId${Math.floor(Math.random() * 1000000).toString()}`
}


function englishToLangParse(description) {
    var d = String.toLowerCase(description)
    var newCode = d;
    var lang;
    
    // englishIndicateValueCreation - ported to all
    // englishIndicateValueModification - generic
    // englishPrintInstructions - ported to all
    // englishIndicateEqualityCheck - generic
    // englishIndicateGeneralEquality - generic
    // englishIndicateFloorAction - ported to all
    // englishIndicateRandomNumber - ported to all
    // englishIndicateAdd - generic
    // englishIndicateSub - generic
    // englishIndicateMult - generic
    // englishIndicateDiv - generic
    // englishIndicateWhileLoop - ported to all
    // englishIndicateTry - js and c# exclusive
    // englishIndicateCatchOrExcept - js and c# exclusive
    // englishIndicateGetType - ported to all

    if (code.includes("langisjs;")) {
        lang == "js"
    } else if (code.includes("langisc#;")) {
        lang == "c#"
    } else if (code.includes("langislua;")) {
        lang == "lua"
    } else {
        console.log("Invalid language! Languages to convert to: JS, C#, LUA.")
    }
    if (lang == "js") {
        for (let i = 0; i < englishIndicateValueCreation.length; i++)
        {
            let jsOrCSharpIndicateVariableCreation = `var ${getUniqueVariableName()} = `
            newCode = newCode.split(englishIndicateValueCreation[i]).join(jsOrCSharpIndicateVariableCreation)
        }
        
        for (let i = 0; i < englishIndicateValueModification.length; i++)
        {
            newCode = newCode.split(englishIndicateValueModification[i]).join(allVarMod)
        }
        for (let i = 0; i < englishPrintInstructions.length; i++)
        {
            newCode = newCode.split(englishPrintInstructions[i]).join(jsPrint)
        }
        for (let i = 0; i < englishIndicateEqualityCheck.length; i++)
        {
            newCode = newCode.split(englishIndicateEqualityCheck[i]).join(allEqualityCheck)
        }
        for (let i = 0; i < englishIndicateGeneralEquality.length; i++)
        {
            newCode = newCode.split(englishIndicateGeneralEquality[i]).join(allGeneralEquality)
        }
        for (let i = 0; i < englishIndicateFloorAction.length; i++)
        {
            newCode = newCode.split(englishIndicateFloorAction[i]).join(jsFloor)
        }
        for (let i = 0; i < englishIndicateRandomNumber.length; i++)
        {
            newCode = newCode.split(englishIndicateRandomNumber[i]).join(jsRandomNumber)
        }
        for (let i = 0; i < englishIndicateAdd.length; i++)
        {
            newCode = newCode.split(englishIndicateAdd[i]).join(allAdd)
        }
        for (let i = 0; i < englishIndicateSub.length; i++)
        {
            newCode = newCode.split(englishIndicateSub[i]).join(allSub)
        }
        for (let i = 0; i < englishIndicateMult.length; i++)
        {
            newCode = newCode.split(englishIndicateMult[i]).join(allMult)
        }
        for (let i = 0; i < englishIndicateDiv.length; i++)
        {
            newCode = newCode.split(englishIndicateDiv[i]).join(allDiv)
        }
        for (let i = 0; i < englishIndicateWhileLoop.length; i++)
        {
            newCode = newCode.split(englishIndicateWhileLoop[i]).join(jsOrCSharpWhileLoop)
        }
        for (let i = 0; i < englishIndicateTry.length; i++)
        {
            newCode = newCode.split(englishIndicateTry[i]).join(jsOrCSharpTry)
        }
        for (let i = 0; i < englishIndicateCatchOrExcept.length; i++)
        {
            newCode = newCode.split(englishIndicateCatchOrExcept[i]).join(jsCatch)
        }
        for (let i = 0; i < englishIndicateGetType.length; i++)
        {
            newCode = newCode.split(englishIndicateGetType[i]).join(cSharpJSTypeOf)
        }
    } else if (lang == "c#") {
        for (let i = 0; i < englishIndicateValueCreation.length; i++)
        {
            let jsOrCSharpIndicateVariableCreation = `var ${getUniqueVariableName()} = `
            newCode = newCode.split(englishIndicateValueCreation[i]).join(jsOrCSharpIndicateVariableCreation)
        }
        
        for (let i = 0; i < englishIndicateValueModification.length; i++)
        {
            newCode = newCode.split(englishIndicateValueModification[i]).join(allVarMod)
        }
        for (let i = 0; i < englishPrintInstructions.length; i++)
        {
            newCode = newCode.split(englishPrintInstructions[i]).join(cSharpPrint)
        }
        for (let i = 0; i < englishIndicateEqualityCheck.length; i++)
        {
            newCode = newCode.split(englishIndicateEqualityCheck[i]).join(allEqualityCheck)
        }
        for (let i = 0; i < englishIndicateGeneralEquality.length; i++)
        {
            newCode = newCode.split(englishIndicateGeneralEquality[i]).join(allGeneralEquality)
        }
        for (let i = 0; i < englishIndicateFloorAction.length; i++)
        {
            newCode = newCode.split(englishIndicateFloorAction[i]).join(cSharpFloor)
        }
        for (let i = 0; i < englishIndicateRandomNumber.length; i++)
        {
            newCode = newCode.split(englishIndicateRandomNumber[i]).join(cSharpRandomNumber)
        }
        for (let i = 0; i < englishIndicateAdd.length; i++)
        {
            newCode = newCode.split(englishIndicateAdd[i]).join(allAdd)
        }
        for (let i = 0; i < englishIndicateSub.length; i++)
        {
            newCode = newCode.split(englishIndicateSub[i]).join(allSub)
        }
        for (let i = 0; i < englishIndicateMult.length; i++)
        {
            newCode = newCode.split(englishIndicateMult[i]).join(allMult)
        }
        for (let i = 0; i < englishIndicateDiv.length; i++)
        {
            newCode = newCode.split(englishIndicateDiv[i]).join(allDiv)
        }
        for (let i = 0; i < englishIndicateWhileLoop.length; i++)
        {
            newCode = newCode.split(englishIndicateWhileLoop[i]).join(jsOrCSharpWhileLoop)
        }
        for (let i = 0; i < englishIndicateTry.length; i++)
        {
            newCode = newCode.split(englishIndicateTry[i]).join(jsOrCSharpTry)
        }
        for (let i = 0; i < englishIndicateCatchOrExcept.length; i++)
        {
            newCode = newCode.split(englishIndicateCatchOrExcept[i]).join(cSharpExcept)
        }
        for (let i = 0; i < englishIndicateGetType.length; i++)
        {
            newCode = newCode.split(englishIndicateGetType[i]).join(cSharpJSTypeOf)
        }
    } else if (lang == "lua") {
        for (let i = 0; i < englishIndicateValueCreation.length; i++)
        {
            let luaIndicateVariableCreation = `var ${getUniqueVariableName()} = `
            newCode = newCode.split(englishIndicateValueCreation[i]).join(luaIndicateVariableCreation)
        }
        for (let i = 0; i < englishIndicateValueModification.length; i++)
        {
            newCode = newCode.split(englishIndicateValueModification[i]).join(allVarMod)
        }
        for (let i = 0; i < englishPrintInstructions.length; i++)
        {
            newCode = newCode.split(englishPrintInstructions[i]).join(luaPrint)
        }
        for (let i = 0; i < englishIndicateEqualityCheck.length; i++)
        {
            newCode = newCode.split(englishIndicateEqualityCheck[i]).join(allEqualityCheck)
        }
        for (let i = 0; i < englishIndicateGeneralEquality.length; i++)
        {
            newCode = newCode.split(englishIndicateGeneralEquality[i]).join(allGeneralEquality)
        }
        for (let i = 0; i < englishIndicateFloorAction.length; i++)
        {
            newCode = newCode.split(englishIndicateFloorAction[i]).join(luaFloor)
        }
        for (let i = 0; i < englishIndicateRandomNumber.length; i++)
        {
            newCode = newCode.split(englishIndicateRandomNumber[i]).join(luaRandomNumber)
        }
        for (let i = 0; i < englishIndicateAdd.length; i++)
        {
            newCode = newCode.split(englishIndicateAdd[i]).join(allAdd)
        }
        for (let i = 0; i < englishIndicateSub.length; i++)
        {
            newCode = newCode.split(englishIndicateSub[i]).join(allSub)
        }
        for (let i = 0; i < englishIndicateMult.length; i++)
        {
            newCode = newCode.split(englishIndicateMult[i]).join(allMult)
        }
        for (let i = 0; i < englishIndicateDiv.length; i++)
        {
            newCode = newCode.split(englishIndicateDiv[i]).join(allDiv)
        }
        for (let i = 0; i < englishIndicateWhileLoop.length; i++)
        {
            newCode = newCode.split(englishIndicateWhileLoop[i]).join(luaLoop)
        }
        for (let i = 0; i < englishIndicateTry.length; i++)
        {
            newCode = newCode.split(englishIndicateTry[i]).join("--[[ Attempt to load exclusive feature under LUA. This line will be ignored.]];")
        }
        for (let i = 0; i < englishIndicateCatchOrExcept.length; i++)
        {
            newCode = newCode.split(englishIndicateCatchOrExcept[i]).join("--[[ Attempt to load exclusive feature under LUA. This line will be ignored.]];")
        }
        for (let i = 0; i < englishIndicateGetType.length; i++)
        {
            newCode = newCode.split(englishIndicateGetType[i]).join(luaTypeOf)
        }
    } else {
        console.log("Invalid language!")
    }

    return newCode;
}