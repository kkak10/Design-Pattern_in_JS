import Folder from "../src/folder";
import File from "../src/file";
import chai from "chai";


chai.should();

describe("Folder 테스트", () => {
    const FOLDER_NAME = "my_folder";

    it("폴더 생성", () => {
        let folder1 = new Folder(FOLDER_NAME);

        folder1.should.eql(folder1);
    });

    it("폴더에 File을 추가하고 확인", () => {
        const FILE_NAME = "file1";
        let folder1 = new Folder(FOLDER_NAME);
        let file1 = new File(FILE_NAME);


        folder1.add(file1);
        folder1.getChild(FILE_NAME).name.should.eql(FILE_NAME);
    });

    it("폴더에 폴더를 추가하고 추가한 폴더 하위 leaf가 같은지 확인", () => {
        const another_folder_name = `${FOLDER_NAME}2`;
        const FILE_NAME = "file1";
        let folder1 = new Folder(FOLDER_NAME);
        let folder2 = new Folder(another_folder_name);
        let file1 = new File(FILE_NAME);

        folder2.add(file1);
        folder1.add(folder2);

        folder1.getChild(another_folder_name).getChild(FILE_NAME).should.eql(file1);
    });
});