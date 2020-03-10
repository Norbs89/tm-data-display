import populateChartData from "../utils/utils";
import event from "../hardcode";

describe.only("format to populate chart data", () => {
  it("returns an empty array when passed an empty array", () => {
    const input = [];
    const actual = populateChartData(input);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  it("returns an array with the added dataObject when passed an event data", () => {
    const input = event.events[0];
    const actual = populateChartData(input);
    expect(actual).toEqual([{ x: 1, y: 1, label: "Sports" }]);
  });
  it.only("returns an array with the added dataObject when passed in multiple event data objects", () => {
    const input = event.events;
    const actual = populateChartData(input);
    expect(actual).toEqual([
      { x: 1, y: 1, label: "Sports" },
      { x: 2, y: 1, label: "Sports2" }
    ]);
  });
});
