const populateChartData = data => {
  const refObj = makeRefObj(data);

  const labels = Object.keys(refObj);

  const dataArray = [];

  labels.forEach(label => {
    const dataObj = { x: 1, y: 0, label: '' };
    if (dataArray.length !== 0) {
      dataObj.x = dataObj.x + dataArray.length;
    }
    dataObj.label = label;
    dataObj.y = refObj[label];
    dataArray.push(dataObj);
  });

  return dataArray;
};

const makeRefObj = data => {
  const refObj = {};

  data.forEach(event => {
    if (refObj[event.classifications[0].segment.name]) {
      refObj[event.classifications[0].segment.name] =
        refObj[event.classifications[0].segment.name] + 1 || 0;
    } else {
      refObj[event.classifications[0].segment.name] = 1;
    }
  });
  return refObj;
};

export { makeRefObj, populateChartData };
