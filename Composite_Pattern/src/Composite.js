import Component from "./Component";
import objectAssign from "object-assign";

class Composite extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    add(component) {
        if (component) this.children.push(component);
    }

    remove(component) {
        for (let i = 0; i < component.length; i++) {
            if (this.children[i] === component) {
                this.children.splice(i, 1);
            }
        }
    }

    getChild(key) {
        let child_list = "";
        if (key !== undefined) return this.children[key];

        for (let component_key in this.children) {
            child_list += ` - ${this.children[component_key].name} \n`;
        }

        return child_list;
    }

    getChildren(){
        return objectAssign([], this.children);
    }

    Operation() {
        console.log(`Composite Operation for: ${this.name}`);
        for (var i in this.children) this.children[i].Operation();
    }
}

export default Composite;