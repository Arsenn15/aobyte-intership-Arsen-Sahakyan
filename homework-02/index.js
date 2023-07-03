class DomElement {
    constructor(type, attrs, children) {
        this.type = type;
        this.attrs = attrs;
        this.children = children;
    }

    draw() {
        const elem = document.createElement(this.type);

        for (const attr in this.attrs) {
            elem.setAttribute(attr, this.attrs[attr]);
        }

        if (Array.isArray(this.children)) {
            this.children.forEach(child => elem.appendChild(child.draw()));
        } else if (this.children instanceof DomElement) {
            elem.appendChild(this.children.draw());
        } else if (typeof this.children === 'string') {
            elem.appendChild(document.createTextNode(this.children));
        }

        return elem;
    }
}

function el(type, attrs, children) {
    return new DomElement(type, attrs, children);
}


//Test case 1
const tree1 =
    el("div", {"class": "some_classname", "id": "some_id"},
        el("span", {}, 'hello')
    );
document.getElementById("root").appendChild(tree1.draw());

//Test case 2.
const tree2 =
    el("div", {},
        el("ul", {}, [
            el("li", {}, "Item 1"),
            el("li", {}, "Item 2"),
            el("li", {}, "Item 3")
        ])
    );
document.getElementById("root").appendChild(tree2.draw());

//Test case 3.
const tree3 =
    el("form", {action: '/some_action'}, [
        el("label", {for: 'name'}, "First name:"),
        el("br", {}, null),
        el("input", {type: 'text', id: 'name', name: 'name', value: "My name"}, null),
        el("br", {}, null),
        el("label", {for: 'last_name'}, "Last name:"),
        el("br", {}, null),
        el("input", {type: 'text', id: 'last_name', name: 'last_name', value: "My second name"}, null),
        el("br", {}, null),
        el("input", {type: 'submit', value: "Submit"}, null),
    ]);
document.getElementById("root").appendChild(tree3.draw());