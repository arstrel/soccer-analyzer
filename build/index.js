"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvReader_1 = require("./CsvReader");
var Summary_1 = require("./Summary");
var WinAnalysis_1 = require("./WinAnalysis");
var ConsoleReport_1 = require("./ConsoleReport");
/*
Issues:
1. ✔ Magic strings comparisons - solved with enum
2. ✔ Source of data is hardcoded - solved with CsvFileReader class
3. ✔ Data array is all strings, even though it might have numbers in it
      - solved with composition
4. ✔ Variable named after a specific team - refactored to be an argument
      to a composable Analyzer class
5. ✔ Analisis type is fixed - refactored to an Analyzer iterface for a class
6. ✔ No ability to output the report in different formats
      - refactored with Output interface
*/
var csvFileReader = new CsvReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var winAnalysis = new WinAnalysis_1.WinAnalysis('Man United');
var consoleReport = new ConsoleReport_1.ConsoleReport();
var summary = new Summary_1.Summary(winAnalysis, consoleReport);
summary.buildAndPrintReport(matchReader.matches);
