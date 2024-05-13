
const scrollpane = document.querySelector("#contacts-scroll");

function populate() {
    const card_d = document.createElement("div");
    const name_d = document.createElement("div");
    const email_d = document.createElement("div");
    const phone_d = document.createElement("div");
    const msg_d = document.createElement("div");


    name_d.style.border = "1px solid var(--earth-green)";
    email_d.style.border = "1px solid var(--earth-green)";
    phone_d.style.border = "1px solid var(--earth-green)";
    msg_d.style.border = "1px solid var(--earth-green)";

    card_d.style.width = "300px";
    card_d.style.height = "300px";
    card_d.style.border = "4px solid var(--earth-green)";
    // card_d.textContent = "placehold";

    /* Name */
    const name_l = document.createElement("label");
    const name = document.createElement("p");
    name_l.textContent = "Name:";
    name.textContent = "Barbara Holmes";
    name_d.appendChild(name_l); name_d.appendChild(name);
    name_d.style.display = "flex";
    name_d.style.alignItems = "center";
    name_d.style.justifyContent = "space-around";
    name_d.style.fontSize = "large";
    card_d.appendChild(name_d);

    /* Email */
    const email_l = document.createElement("label");
    const email = document.createElement("p");
    email_l.textContent = "Email:";
    email.textContent = "Choose not to reveal";
    email_d.appendChild(email_l); email_d.appendChild(email);
    email_d.style.display = "flex";
    email_d.style.alignItems = "center";
    email_d.style.justifyContent = "space-around";
    email_d.style.fontSize = "large";
    card_d.appendChild(email_d);

    /* Phone */
    const num_l = document.createElement("label");
    const num = document.createElement("p");
    num_l.textContent = "Phone:";
    num.textContent = "Choose not to reveal";
    phone_d.appendChild(num_l); phone_d.appendChild(num);
    phone_d.style.display = "flex";
    phone_d.style.alignItems = "center";
    phone_d.style.justifyContent = "space-around";
    phone_d.style.fontSize = "large";
    card_d.appendChild(phone_d);





    scrollpane.appendChild(card_d);
}

populate();