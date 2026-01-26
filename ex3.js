//ex1
let address = {
  street: "Le Dai Hanh",
  city: "Tp Ho Chi Minh",
  zipcode: "9000",
};

function showAddress() {
  for (let key in address) {
    console.log(address[key]);
  }
}

function showAddress() {
  Object.values(address).forEach((value) => {
    console.log(value);
  });
}

//ex2-1 Factory Function
function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode
  };
}

const add1 = createAddress('Au Co', "TP Ho Chi Minh", "9000");
const add2 = createAddress('Lac Long Quan', "TP Ho Chi Minh","9000");


//ex2-2 Constructor Function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;

}
const address1 = new Address("3/2", "TP Ho Chi Minh", "9000");
const address2 = new Address("Hoa Binh", "TP Ho Chi Minh", "9000");

//ex3
function areSame (obj1,obj2) {
  console.log(Object.is(obj1, obj2));
}
function areEqual(obj1,obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if(key1.length !== key2.length){
    return false;
  }
  for(let key of key1) {
    if(obj1[key]!==obj2[key]) {
      return false;
    }
  }
  return true;
}

const addCompare1 = new Address("x","y","z");
const addCompare2 = new Address("x","y","z");
areSame(addCompare1,addCompare2);
areEqual(addCompare1,addCompare2);

//ex4
let blogPost = {
  title:"Tieu de",
  body:"Noi dung",
  author: "Tac gia",
  views: 100,
  comment: [
    {
      arthor:"tac gia",
      body:"noi dung",
    }
  ],
  isLive: true
}

//ex5
function Post(title,body,author) {
  this.title = title;
  this.body = body;
  this.author = author;
  view = 0;
  comment = [];
  isLive = false;
}

//ex6
let priceRange = [{
  label: "$",
  price: "Inexpensive",
  min: 100000,
  max: 1000000,
},
{
  label: "$$",
  price: "Moderate",
  min: 200000,
  max: 2000000,
},
{
  label: "$$$",
  price: "Expensive",
  min: 300000,
  max: 3000000,
}]
