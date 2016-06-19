import CompositeInterface from "./interface/composite.interface";

let Folder;
{
    const FOLDER_TYPE = "FOLDER";

    Folder = class extends CompositeInterface {
        constructor(name) {
            super(name, FOLDER_TYPE);
        }

        add(leaf) {
            this.children.push(leaf);
        }

        remove(leaf) {
            for (let i = 0; i < this.children.length; i++) {
                if (children[i] === leaf) {
                    this.children.splice(i, 1);
                }
            }
        }

        getChild(name) {
            let target_leaf;

            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].name === name) {
                    target_leaf = this.children[i];
                }

                if (target_leaf) break;
            }

            return target_leaf;
        }

        getChildren() {
            return this.children;
        }
    }
}

export default Folder;