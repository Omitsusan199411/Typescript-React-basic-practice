/* eslint-disable @typescript-eslint/no-unused-vars */

// Typescriptの基本の型

// boolean
let bool: boolean = true;

// number 数字
let num: number = 0;

// string 文字
let str: string = "A";

// array 配列 <numberは中の要素の型を書く>
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 違う型の要素を配列に格納
let tuple: [number, string] = [0, "A"];

// any 型はなんでも良い
let any1: any = false;

// void 何も返却値がない型（つまり返却値がない関数などで使う）
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };