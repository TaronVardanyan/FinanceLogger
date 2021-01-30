export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        p.innerText = item.format();
        li.append(h4);
        li.append(p);
        this.container[position === "start" ? "prepend" : "append"](li);
    }
}
