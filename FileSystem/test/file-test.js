import File from "../src/file";
import LeafInterface from "../src/interface/leaf.interface";
import FileInterface from "../src/interface/file.interface";
import chai from "chai";


chai.should();

describe("File 테스트", () => {
    it("파일 생성.", () => {
        let file1 = new File("file1");

        file1.should.eql(file1);
    });

    it("생성된 파일의 Interface가 leaf이다.", () => {
        let file1 = new File("file1");

        (file1 instanceof LeafInterface).should.true;
    });

    it("생성된 파일의 Interface가 file이다.", () => {
        let file1 = new File("file1");

        (file1 instanceof FileInterface).should.true;
    });

    it("생성된 파일의 이름이 생성시 넣은 이름과 같다.", () => {
        let fileName = "file1";
        let file1 = new File(fileName);

        file1.name.should.eql(fileName);
    });

    it("생성된 파일의 타입이 FILE이다.", () => {
        let file1 = new File("file1");

        file1.type.should.eql("FILE");
    });

    it("파일에 컨텐츠를 쓰고 읽을 수 있다.", () => {
        let content = "안녕하세요:)";
        let file1 = new File("file1");

        file1.setContent(content);

        file1.getContent().should.eql(content);
    });
});