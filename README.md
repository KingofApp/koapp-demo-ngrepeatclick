# Working with ngClick and ngRepeat

In this example we use the following [Koa elements](https://github.com/KingofApp/docs/tree/master/themes#list-of-elements):

* koa-grid
* koa-card
* koa-button

A koa-grid element embraces all the content to display a 2 column layout with a 10px margin:
```html
<koa-grid columns='2' cell-space='10px'>
</koa-grid>
```

Inside the koa-grid we hace a ngRepeat in the koa-card iterating over a `list` scope variable with different types of data:
```js
$scope.list = [
  "post1",
  ['Elem1', 'Elem2'],
  13,
  { 'key': 'value', 'key2': 'value2' }
];
```
In the koa-button we use ngClick to call a `test` function with different parameters:
```js
$scope.test = function(varX, varX1, varX2) {
  if (varX.key) { //Check Json Variable passed correctly
    console.log("0--Json-->", varX.key);
  } else if (_.isArray(varX)) { //Check Array Variable passed correctly
    console.log("0--Array-->", varX[0]);
  }else{
    console.log("0-------->", varX);
  }
  console.log("1-------->", varX1);
  console.log("2-------->", varX2);
}
```
`Strings inside the ngclick function have to use single quotes like the example. Double quotes won't work.`
