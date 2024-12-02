const fs = require("fs");

const input = fs.readFileSync("../input.txt", "utf8").split("\n");

function isSequenceSafe(levels) {
  if (levels.length < 2) return true;

  let increasing = null;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (increasing === null) {
      increasing = diff > 0;
    } else if (diff > 0 !== increasing) {
      return false;
    }
  }

  return true;
}

function isReportSafe(report) {
  const levels = report.trim().split(/\s+/).map(Number);
  if (isSequenceSafe(levels)) {
    return true;
  }

  for (let i = 0; i < levels.length; i++) {
    const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
    if (isSequenceSafe(modifiedLevels)) {
      return true;
    }
  }

  return false;
}

const safeReports = input.filter(isReportSafe).length;
console.log(safeReports);
