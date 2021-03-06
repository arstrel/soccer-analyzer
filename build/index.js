"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvReader_1 = require("./CsvReader");
var Summary_1 = require("./Summary");
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
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
// Create some instances to compose
var winAnalysis = new WinAnalysis_1.WinAnalysis('Man United');
var consoleReport = new ConsoleReport_1.ConsoleReport();
var htmlReport = new HTMLReport_1.HTMLReport();
// Or use a static method to get a pre-configured instance of summary
var summary = Summary_1.Summary.winsAnalysisWithHTMLReport('Newcastle');
summary.buildAndPrintReport(matchReader.matches);
