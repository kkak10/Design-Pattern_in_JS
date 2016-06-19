import LeafInterface from "./leaf.interface";

class FileInterface extends LeafInterface {
    constructor(name, type) {
        super(name, type);
    }

    getContent() {

    }
}

export default FileInterface;