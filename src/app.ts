import {Invoice} from "./modules/Invoice.js";
import {Payment} from "./modules/Payment.js";
import {ListTemplate} from "./modules/ListTemplate.js";
import {HasFormatter} from "./Interfaces/HasFormatter.js";

const formElem = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

console.log(JSON.parse(window.localStorage.getItem("data")!))

formElem.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber];
    let doc: HasFormatter; //there is no reason for give this interface here, because we already added it in classes
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, "end");
});
