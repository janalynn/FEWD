
var cardArray = [{
    el:'div',
    defaultClass: 'card',
    value: 'spade'
},

{
  el:'div',
  defaultClass: 'card',
  value:'diamond'
},

{
  el:'div',
  defaultClass: 'card',
  value:'heart'
},

{
  el:'div',
  defaultClass: 'card',
  value:'club'
}];

for(var i= 0; i<cardArray.length; i++){

console.log(cardArray[i]);
};

function MyObject(){
  this.el ='div';
  this.value ='heart';
  this.showValue = function(){
    console.log(this.value);
  };
}

var y = new MyObject();
