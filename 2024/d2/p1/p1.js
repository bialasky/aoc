const fs = require("fs");

const input = fs.readFileSync("../input.txt", "utf8").split("\n");

function isReportSafe(report) {
  const levels = report.trim().split(/\s+/).map(Number);
  let inc = null;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }
    if (inc === null) {
      inc = diff > 0;
    } else if (diff > 0 !== inc) {
      return false;
    }
  }

  return true;
}

const safeReports = input.filter(isReportSafe).length;
console.log(safeReports);
