import FileInterface from "./interface/file.interface";
let File;

{
    const FILE_TYPE = "FILE";

    File = class extends FileInterface {
        constructor(name) {
            super(name, FILE_TYPE);

            this.content = "";
        }

        getContent() {
            return this.content;
        }

        setContent(content) {
            this.content = content;
        }
    }
}

export default File;