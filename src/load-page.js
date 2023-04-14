import backgroundImg from "./restaurant.jpg";

const createHeader = () => {
    const header = document.createElement("header");
    const logo = document.createElement("h1");

    logo.textContent = "Bestaurant";
    header.appendChild(logo);

    // menu options for "Menu", "About", "Contact"
    // import modules that will replace JS in main with new pages when clicked

    const tabs = document.createElement("ul");
    tabs.id = "nav-list";
    const menuTab = document.createElement("li");
    const aboutTab = document.createElement("li");
    const contactTab = document.createElement("li");

    menuTab.textContent = "Menu";
    aboutTab.textContent = "About";
    contactTab.textContent = "Contact Us";

    tabs.append(menuTab, aboutTab, contactTab);
    header.appendChild(tabs);

    return header;
};

const createMain = () => {
    const main = document.createElement("div");
    main.id = "main";

    const mainImage = new Image();
    mainImage.src = backgroundImg;

    main.appendChild(mainImage);
    return main;
};

const createContent = () => {
    const div = document.createElement("div");
    div.id = "content";

    div.innerHTML = "";

    return div;
};

const createFooter = () => {
    const footer = document.createElement("footer");

    footer.textContent = "Copyright © 2023 B.O.B LLC";

    return footer;
};

const loadPage = () => {
    const body = document.querySelector("body");

    body.appendChild(createHeader());
    body.appendChild(createMain());
    body.appendChild(createContent());
    body.appendChild(createFooter());
};

export default loadPage;
