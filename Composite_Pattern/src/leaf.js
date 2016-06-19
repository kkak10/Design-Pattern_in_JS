import Component from "./Component.js"

class Leaf extends Component {
    constructor(name) {
        super();
        this.name = name;
    }

    Operation() {
        console.log(`${this.name} Operation`);
    }
}

export default Leaf;