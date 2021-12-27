export default class Email {
  public value: string;

  private readonly EMAIL_REGEX =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(email: string) {
    if (email.match(this.EMAIL_REGEX)) {
      this.value = email.toLowerCase();
    } else throw Error("Invalid email");
  }
}
