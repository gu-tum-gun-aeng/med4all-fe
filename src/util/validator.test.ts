import Validator from "./validator";

describe("validator", () => {
  describe("requiredValue", () => {
    it("should return false if got some value", async () => {
      expect(Validator.requiredValue("some")).toBeFalsy();
    });

    it("should return error message if got undefined", async () => {
      expect(Validator.requiredValue(undefined)).toBe("This field is required");
    });
  });

  describe("check id", () => {
    it("should return false if got correct value", async () => {
      expect(Validator.checkID("0000000000000")).toBeFalsy();
      expect(Validator.checkID("AA00000")).toBeFalsy();
    });

    it("should return error message if got wrong value", async () => {
      expect(Validator.checkID("")).toBe(
        "not Thai ID number nor Passport number nor non-Thai ID number"
      );
      expect(Validator.checkID("@@@@@")).toBe(
        "not Thai ID number nor Passport number nor non-Thai ID number"
      );
    });
  });
});
