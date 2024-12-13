import detectClassNames from "./detectClassNames";

describe("detectClassNames", () => {
  it("should return defaultClass when userClass is null", () => {
    const defaultClassName = "max-w-h";
    const userClassName = null;
    const className = detectClassNames(defaultClassName, userClassName);
    expect(className).toEqual("max-w-h");
  });

  it('should return "max-w-20" when userClass is max-w-20 and defaultClass is max-w-10', () => {
    const defaultClassName = "max-w-10";
    const userClassName = "max-w-20";
    const className = detectClassNames(defaultClassName, userClassName);
    expect(className).toEqual("max-w-20");
  });

  it('should return "max-w-20 w-20 h-10" is userClass is "w-20 h-10" and defaultClass is "max-w-20 h-20"', () => {
    const defaultClassName = "max-w-20 h-20";
    const userClassName = "w-20 h-10";
    const className = detectClassNames(defaultClassName, userClassName);
    expect(className).toEqual("max-w-20 w-20 h-10");
  });
});
