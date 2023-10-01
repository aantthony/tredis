export type AllStrings<T> = {
  [K in keyof T]: T[K] extends string | undefined ? string : never;
};

export type KeyValuePair<T> = [key: keyof T & string, value: T[keyof T]];
