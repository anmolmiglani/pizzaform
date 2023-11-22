// script.js

class Pizza {
  constructor(size, toppings, quantity, deliveryOption, address) {
    this.size = size;
    this.toppings = toppings;
    this.quantity = quantity;
    this.deliveryOption = deliveryOption;
    this.address = address;
  }

  getDescription() {
    return `Pizza Size: ${this.size} | Toppings: ${this.toppings} | Quantity: ${this.quantity} | 
              Delivery Option: ${this.deliveryOption} | Address: ${this.address}`;
  }
}

class PizzaApp {
  static submitForm(event) {
    event.preventDefault();
    // Validate form fields
    const pizzaSize = document.querySelector(".pizza-size").value;
    const toppings = document.querySelector(".toppings").value;
    const quantity = document.querySelector(".quantity").value;
    const deliveryOption = document.querySelector(
      'input[name="delivery-option"]:checked'
    );
    const address = document.querySelector(".address").value;

    if (!pizzaSize) {
      alert("Please select Pizza Size.");
      return;
    }

    if (!toppings) {
      alert("Please enter Toppings.");
      return;
    }

    if (!quantity) {
      alert("Please enter Quantity.");
      return;
    }

    if (!deliveryOption) {
      alert("Please select Delivery or Take Away.");
      return;
    }

    if (deliveryOption.value === "delivery" && !address) {
      alert("Please enter Delivery Address.");
      return;
    }

    // If all validations pass, proceed with creating the Pizza object
    const pizza = new Pizza(
      pizzaSize,
      toppings,
      quantity,
      deliveryOption.value,
      address
    );

    const pizzaDescription = document.querySelector(".pizza-description");
    pizzaDescription.textContent = pizza.getDescription();
  }

  static resetForm() {
    // Reset the form fields
    document.querySelector(".pizza-form").reset();

    // Clear the pizza description
    const pizzaDescription = document.querySelector(".pizza-description");
    pizzaDescription.innerHTML = "";
  }
}
