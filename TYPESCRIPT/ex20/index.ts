let age: Age;

interface StringOnly {
  [key: string]: string;
}

let user: StringOnly = {
  name: 'kim',
  age: '20',
  1: 'seoul',
};

console.log(user[1]);

interface MyType {
  'font-size': MyType | number;
}

let css: MyType = {
  'font-size': {
    'font-size': {
      'font-size': 14,
    },
  },
};
