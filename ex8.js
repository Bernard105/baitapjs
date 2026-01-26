function HtmlElement() {
  // instance method
  this.click = function () {
    console.log("clicked");
    this.focus();
  };
}

// prototype method
HtmlElement.prototype.focus = function () {
  console.log("focused");
};


function HtmlSelectElement(items) {
  this.items = items || [];
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.addItem = function (item) {
  this.items.push(item);
};

HtmlSelectElement.prototype.removeItem = function (item) {
  this.items = this.items.filter(i => i !== item);
};

HtmlSelectElement.prototype.render = function () {
  let options = this.items
    .map(item => `<option>${item}</option>`)
    .join("");

  return `<select>${options}</select>`;
};

function HtmlImageElement(src) {
  this.src = src;
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

HtmlImageElement.prototype.render = function () {
  return `<img src="${this.src}">`;
};
