export type FirstOrderFunc<T> = (T) => T
export type SecondOrderFunc<T> = (T) => FirstOrderFunc<T>
export type ThirdOrderFunc<T> = (T) => SecondOrderFunc<T>
