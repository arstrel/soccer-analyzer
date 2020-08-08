"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
/*
Issues:
1. ✔ Magic strings comparisons - solved with enum
2. ✔ Source of data is hardcoded - solved with CsvFileReader class
3. ✔ Data array is all strings, even though it might have numbers in it
      - solved with tuple and type assertion
4. Variable named after a specific team
5. Analisis type is fixed
6. No ability to output the report in different formats
*/
//  Needs to be written in it's entirety at the compile time
// We cannot add properties dynamically at runtime, or rely on network request
var matchReader = new MatchReader_1.MatchReader('football.csv');
matchReader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
