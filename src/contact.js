import clearContent from "./clearContent";
import mapImg from "./map.jpg";

const loadContact = () => {
    clearContent();

    const div = document.querySelector("#content");
    const map = new Image();
    map.src = mapImg;

    const address = document.createElement("p");
    address.innerText = "1234 Madeup Place\n Nowhere, KS 99999";

    const email = document.createElement("p");
    email.innerText = "bestaurant@bob.com";

    const phone = document.createElement("p");
    phone.innerText = "123-456-7890";

    const btn = document.createElement("button");
    btn.innerText = "Make a Reservation";

    div.appendChild(map);
    div.appendChild(address);
    div.appendChild(email);
    div.appendChild(phone);
    div.appendChild(btn);
    console.log("contact loaded");
};

export default loadContact;
