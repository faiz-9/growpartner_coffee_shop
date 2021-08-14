function handleDeduction() {
  var withSugar = document.getElementById("sugar").checked;
  const strongCoffee = {
    milk: 10,
    coffee: 8,
    water: 4,
    tea: 0,
    sugar: withSugar ? 5 : 0,
  };

  const lightCoffee = {
    milk: 15,
    coffee: 4,
    water: 4,
    tea: 0,
    sugar: withSugar ? 5 : 0,
  };

  const strongTea = {
    milk: 10,
    coffee: 0,
    water: 8,
    tea: 8,
    sugar: withSugar ? 5 : 0,
  };

  const lightTea = {
    milk: 15,
    coffee: 0,
    water: 8,
    tea: 4,
    sugar: withSugar ? 5 : 0,
  };

  var selectedDrink;
  function getSelectedValue() {
    var e = document.getElementById("drinks");
    selectedDrink = e.options[e.selectedIndex].text;
  }
  function getTotalDeductions() {
    switch (selectedDrink) {
      case "Strong Coffee":
        return strongCoffee;
      case "Light Coffee":
        return lightCoffee;
      case "Strong Tea":
        return strongTea;
      case "Light Tea":
        return lightTea;

      default:
        return strongCoffee;
    }
  }

  var cups = parseInt(document.getElementById("cups").value) || 1;

  var Result = getTotalDeductions();
  var stockElements = document.querySelectorAll(".flex-contents > p");
  var stockObject = {};
  stockElements.forEach((stockElement, index) => {
    if (index % 2 == 0) {
      stockObject[stockElement.innerText.toLowerCase()] = parseInt(
        stockElements[index + 1].innerText
      );
    }
  });
  var subtractedStock = {};
  Object.keys(stockObject).forEach((key, index) => {
    subtractedStock[key] = stockObject[key] - Result[key];
    stockElements[index * 2 + 1].innerText = String(
      stockObject[key] - Result[key] * cups
    );
  });
}

var price = {
  "Strong Coffee": 100,
  "Light Coffee": 75,
  "Strong Tea": 60,
  "Light Tea": 50,
};

function handleChange() {
  var e = document.getElementById("drinks");
  selectedDrink = e.options[e.selectedIndex].text;
  console.log(selectedDrink);

  var cups = parseInt(document.getElementById("cups").value) || 1;
  console.log(cups);

  var cost = price[selectedDrink] * cups;
  var payElement = document.getElementById("pay");
  payElement.innerText = "Pay Rs " + cost;
}
