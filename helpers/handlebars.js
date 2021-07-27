const status = require("./status");

function getStatus(input) {
  return status[input];
}

module.exports = {
  sum: (a, b) => a + b,
  compare: (a, b) => a === b,
  compareSelected: (a, b) => (a === b ? "selected" : ""),
  statusText: (input) => getStatus(input).text,
  statusColor: (input) => getStatus(input).color,
};
