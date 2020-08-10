"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinAnalysis_1 = require("./analyzers/WinAnalysis");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHTMLReport = function (team) {
        var winAnalysis = new WinAnalysis_1.WinAnalysis(team);
        var htmlReport = new HTMLReport_1.HTMLReport();
        return new Summary(winAnalysis, htmlReport);
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        this.outputTarget.print(this.analyzer.run(matches));
    };
    return Summary;
}());
exports.Summary = Summary;
