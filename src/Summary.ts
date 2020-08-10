import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHTMLReport(team: string): Summary {
    const winAnalysis = new WinAnalysis(team);
    const htmlReport = new HTMLReport();
    return new Summary(winAnalysis, htmlReport);
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(matches));
  }
}
