import LeafInterface from "./leaf.interface"

class CompositeInterface extends LeafInterface {
    constructor(name, type) {
        super(name, type);
        this.children = [];
    }

    add(leaf) {

    }

    remove(leaf) {

    }

    getChild(name) {

    }

    getChildren() {

    }
}

export default CompositeInterface;