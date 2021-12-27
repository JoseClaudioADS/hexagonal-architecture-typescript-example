import Email from "../../../shared/domain/email";
import Employee from "./employee";

describe("Employee entity", () => {
  describe("isYourBirthdayMonth", () => {
    it("should be your birthday month", () => {
      const employee = new Employee(
        "Jose",
        new Email("jose@email.com"),
        new Date("1991-05-05 00:00:00")
      );

      expect(
        employee.isYourBitrhdayMonth(new Date("1991-05-01 00:00:00"))
      ).toBeTruthy();
    });

    it("should not be your birthday month", () => {
      const employee = new Employee(
        "Jose",
        new Email("jose@email.com"),
        new Date("1991-01-05 00:00:00")
      );

      expect(
        employee.isYourBitrhdayMonth(new Date("1991-05-01 00:00:00"))
      ).toBeFalsy();
    });
  });
});
