const populateChartData = data => {
  const dataArray = data.map(event => {
    const dataObject = { x: 0, y: 0, label: "" };
    if (Object.keys(event).length !== 0) {
      if (dataObject.label === event.classifications[0].segment.name) {
        dataObject.y = dataObject.y + 1 || 0;
      } else {
        dataObject.x = dataObject.x + 1 || 0;
        dataObject.y = dataObject.y + 1 || 0;
        dataObject.label = event.classifications[0].segment.name;
        return dataObject;
      }
    }
  });
  console.log(dataArray);
  return dataArray;
};

export default populateChartData;
