# yaml-tag
Template literal tag function for YAML in JS – Because yaml is human-friendly and pretty awesome 👌

## How to use

`npm install yaml-tag --save`

`yarn add yaml-tag`

Use as a tag for template literals containing yaml. It’s parsed using `load` from [js-yaml](https://www.npmjs.com/package/js-yaml).

```js
const yaml = require('yaml-tag');

const cats = yaml`
  - name: Alice
    age: 7
    favorite food: ice cream
  - name: Tom
    age: 3
    favorite food: potato chips
`;

console.log(cats[0].name); // "Alice"
console.log(cats[1]['favorite food']); // "potato chips"
```

Use js expressions where you don’t want to (or can) use plain yaml.

```js
const yaml = require('yaml-tag');

const breakingNews = yaml`
  title: This Just In
  date: ${new Date()}
`;

console.log(breakingNews.date instanceof Date); // true
```

Wrap yaml in yaml for extra superpowers!

```js
const yaml = require('yaml-tag');
const { times } = require('lodash');

const blog = yaml`
  posts: ${times(3, (n) => yaml`
    title: Lorem ipsum ${n + 1}
    body: |
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam, tempore culpa ipsam, voluptatibus aliquid laudantium, nostrum quam aspernatur esse inventore qui laboriosam eos voluptatum eligendi quas nihil laborum blanditiis.
  `)}
`;

/*
{
  posts: [
    {
      title: 'Lorem ipsum 1'
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam, tempore culpa ipsam, voluptatibus aliquid laudantium, nostrum quam aspernatur esse inventore qui laboriosam eos voluptatum eligendi quas nihil laborum blanditiis.'
    },
    {
      title: 'Lorem ipsum 2'
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam, tempore culpa ipsam, voluptatibus aliquid laudantium, nostrum quam aspernatur esse inventore qui laboriosam eos voluptatum eligendi quas nihil laborum blanditiis.'
    },
    {
      title: 'Lorem ipsum 3'
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam, tempore culpa ipsam, voluptatibus aliquid laudantium, nostrum quam aspernatur esse inventore qui laboriosam eos voluptatum eligendi quas nihil laborum blanditiis.'
    }
  ]
}
*/
```
