import clearContent from "./clearContent";
import ownerImg from "./owners.jpg";

const loadAbout = () => {
    clearContent();

    const div = document.querySelector("#content");

    const img = new Image();
    img.src = ownerImg;

    const p = document.createElement("p");
    p.innerText =
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio facilis dolorem nostrum quasi libero animi ullam quibusdam quod ipsum nemo, repellat sint tempore molestias. Dolore error nam labore consequuntur quo.\n\n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio facilis dolorem nostrum quasi libero animi ullam quibusdam quod ipsum nemo, repellat sint tempore molestias. Dolore error nam labore consequuntur quo.\n\n Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio facilis dolorem nostrum quasi libero animi ullam quibusdam quod ipsum nemo, repellat sint tempore molestias. Dolore error nam labore consequuntur quo.";

    div.appendChild(img);
    div.appendChild(p);
    console.log("about loaded");
};

export default loadAbout;
