import { Invoice } from "./modules/Invoice.js";
import { Payment } from "./modules/Payment.js";
import { ListTemplate } from "./modules/ListTemplate.js";
const formElem = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
console.log(JSON.parse(window.localStorage.getItem("data")));
formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    let values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc; //there is no reason for give this interface here, because we already added it in classes
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
