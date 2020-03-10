import event from "../hardcode";
import { makeRefObj, PopulateChartData } from "../utils/utils";

describe.only("format to populate chart data", () => {
  it("returns an empty array when passed an empty array", () => {
    const input = [];
    const actual = PopulateChartData(input);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  it("returns an array with the added dataObject when passed in multiple event data objects", () => {
    const input = event.events;
    const actual = PopulateChartData(input);
    expect(actual).toEqual([
      { x: 1, y: 1, label: "Sports" },
      { x: 2, y: 1, label: "Sports2" }
    ]);
  });
});

describe("Making a reference object from our data", () => {
  it("takes a data array and returns a reference object", () => {
    const input = event.events;
    const actual = makeRefObj(input);
    const expected = { Sports: 1, Sports2: 1 };
    expect(actual).toEqual(expected);
  });
});
