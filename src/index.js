import loadPage from "./load-page";
import loadMenu from "./menu";
import loadAbout from "./about";
import loadContact from "./contact";
import "./styles.css";

loadPage();

const addTabListeners = (() => {
    const tabs = Array.from(document.querySelectorAll("#nav-list>li"));

    console.log(tabs);

    tabs[0].addEventListener("click", () => {
        loadMenu();
    });
    tabs[1].addEventListener("click", () => {
        loadAbout();
    });
    tabs[2].addEventListener("click", () => {
        loadContact();
    });
})();

loadAbout();
