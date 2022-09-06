// Dom functions

const object_container = document.getElementById("orders_list");
const nameInput = document.getElementById("name_input");
const destinationInput = document.getElementById("destination_input");
const brandInput = document.getElementById("brand_input");
const order_dateInput = document.getElementById("order_date_input");
const priceInput = document.getElementById("price_input");


let objects = [];
let id = 0;

const object_template = ({id, full_name, destination, car_brand, order_date, price}) => `
<li id="${id}" class="item">
  <div class="card">
    <h4 class="card-type">Name: ${full_name}</h4>
    <h4 class="card-price">Price: ${destination}$</h4>
    <h4 class="card-brand">Brand: ${car_brand}</h4>
    <h4 class="card-production-date">Date: ${order_date}</h4>
    <h4 class="card-production-date">Price: ${price}</h4>
    <div class="block_btn">
      <button id="edit_btn${id}" type="button" class="btn-primary btn_card" onclick="editFunc(${id})">
        Edit
      </button>
      <button type="button" id="cancel_search_btn" class="btn_card_cansel">Delete</button></div>
    </div>
</li>`;


const clear_inputs =() => {
  nameInput.value = "";
  destinationInput.value = "";
  order_dateInput.value = "";
  priceInput.value = "";
}


const add_object_to_page = ({id, full_name, destination, car_brand, order_date, price}) => {
  object_container.insertAdjacentHTML(
    "beforeend",
    object_template({id, full_name, destination, car_brand, order_date, price})
  );
};

const get_values = () => {
  return {
    full_name: nameInput.value,
    destination: destinationInput.value,
    car_brand: brandInput.value,
    order_date: order_dateInput.value,
    price: priceInput.value,
  };
};


const add_object = ({full_name, destination, car_brand, order_date, price}) => {
  const new_object = {
    id: id,
    full_name: full_name,
    destination: destination,
    car_brand: car_brand,
    order_date: order_date,
    price: price,  
  };
  id += 1;
  objects.push(new_object);
  add_object_to_page(new_object);

} 

// Event Block

const add_button = document.getElementById("submit_btn")



add_button.addEventListener("click", (event) => {
    // Prevents default page reload on submit
    event.preventDefault();

    const { full_name, destination, car_brand, order_date, price} = get_values();
    add_object({full_name, destination, car_brand, order_date, price})
    toggleMainPage();
    clear_inputs();
}

) 

// Toggle functions

const CLOSE_CLASSNAME = "close";
const OPEN_CLASSNAME = "open";

const mainPage = document.getElementById("main_page");
const createPage = document.getElementById("create_page");


function toggleMainPage() {
  if (mainPage.classList.contains(CLOSE_CLASSNAME)) {
    mainPage.classList.remove(CLOSE_CLASSNAME);
  }
  if (createPage.classList.contains(OPEN_CLASSNAME)) {
    createPage.classList.remove(OPEN_CLASSNAME);
  }
}

function toggleCreatePage() {
  console.log("CREATE BLOCK");
  if (!mainPage.classList.contains(CLOSE_CLASSNAME)) {
    mainPage.classList.add(CLOSE_CLASSNAME);
  }
  if (!createPage.classList.contains(OPEN_CLASSNAME)) {
    createPage.classList.add(OPEN_CLASSNAME);
  }
}