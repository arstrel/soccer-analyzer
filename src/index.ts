import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvReader';
import { Summary } from './Summary';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';

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

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const winAnalysis = new WinAnalysis('Man United');
const consoleReport = new ConsoleReport();
const htmlReport = new HTMLReport();
const summary = new Summary(winAnalysis, htmlReport);
summary.buildAndPrintReport(matchReader.matches);
