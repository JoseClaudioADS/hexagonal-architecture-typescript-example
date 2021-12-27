interface Left<A> {
  value: A;
  tag: "left";
}

interface Right<B> {
  value: B;
  tag: "right";
}

export type Either<A, B> = Left<A> | Right<B>;

export function isLeft<A>(val: any): val is Left<A> {
  if ((val as Left<A>).tag === "left") return true;
  return false;
}

export function isRight<B>(val: any): val is Right<B> {
  if ((val as Right<B>).tag === "right") return true;
  return false;
}

export function Left<A>(val: A): Left<A> {
  return { value: val, tag: "left" };
}

export function Right<B>(val: B): Right<B> {
  return { value: val, tag: "right" };
}
