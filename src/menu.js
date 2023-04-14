import clearContent from "./clearContent";
import Data from "./menu.json";

const loadMenu = () => {
    clearContent();

    const div = document.querySelector("#content");
    // Menu will be array of objects, each new object will correspond to
    // different course e.g. Drinks, Appetizers, Salads, Entrees, Desserts
    // each key value will be Name of Menu Item and ingredients
    // Loop through
    const courses = ["Drinks", "Appetizers", "Salads", "Entrees", "Desserts"];

    courses.forEach((course) => {
        const menuSection = document.createElement("h2");

        menuSection.classList.add("menu-course");
        menuSection.id = course.toLowerCase();
        menuSection.textContent = course;

        menuSection.appendChild(createMenu(course));
        div.appendChild(menuSection);
    });
};

const createMenu = (section) => {
    const sectionData = Data[section];
    const ul = document.createElement("ul");

    sectionData.forEach((data) => {
        const item = document.createElement("li");
        item.textContent = data.item;

        const desc = document.createElement("p");
        desc.textContent = data.desc;
        item.appendChild(desc);

        const price = document.createElement("p");
        price.textContent = data.price;
        item.appendChild(price);

        ul.appendChild(item);
    });

    return ul;
};

export default loadMenu;
