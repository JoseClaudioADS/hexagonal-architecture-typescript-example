interface Left<A> {
  value: A;
  tag: "left";
}

interface Right<B> {
  value: B;
  tag: "right";
}

export type Either<A, B> = Left<A> | Right<B>;

export function isLeft<A, B>(val: Either<A, B>): val is Left<A> {
  return val.tag === "left";
}

export function isRight<A, B>(val: Either<A, B>): val is Right<B> {
  return val.tag === "right"
}

export function Left<A>(val: A): Left<A> {
  return { value: val, tag: "left" };
}

export function Right<B>(val: B): Right<B> {
  return { value: val, tag: "right" };
}
