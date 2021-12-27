import Email from "../../../shared/domain/email";

export default class Employee {
  constructor(
    readonly name: string,
    readonly email: Email,
    readonly birthday: Date
  ) {}

  public isYourBitrhdayMonth(date: Date): boolean {
    return date.getMonth() === this.birthday.getMonth();
  }
}
