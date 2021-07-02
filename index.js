function csvTojson(buffer) {
  const csv = buffer.toString();
  const arrayedCsv = csv.split('\n');
  const jsonArray = [];
  const keys = arrayedCsv[0].split(',');
  for (let i=1;i<arrayedCsv.length; i++) {
    const obj = {};
    const lineData = arrayedCsv[i].split(',');
    for(let j=0;j<lineData.length;j++) {
      obj[keys[j]] = lineData[j];
    }
    jsonArray.push(obj);
  }
  return jsonArray;
};

module.exports.csvTojson = csvTojson;