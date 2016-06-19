import Component from "../src/Component";
import Composite from "../src/Composite";
import Leaf from "../src/Leaf";
import chai from "chai";

chai.should();

describe("Composite 테스트", () => {
    it("Composite을 생성하고 이름이 잘 들어가는가.", () => {
        const name = "Composite1";
        let composite_1 = new Composite(name);

        composite_1.name.should.eql(name);
    });

    it("Composite에 추가한 객체가 getChild 했을때 같은가.", () => {
        let composite_1 = new Composite("Composite1");
        let composite_2 = new Composite("Composite2");
        composite_1.add(composite_2);

        composite_1.getChild(0).should.eql(composite_2);
    });

    it("Add를 여러개 했을때 같은 length가 나오는가", () => {
        const addCount = 5;
        let composite_1 = new Composite("Composite1");

        for(let i = 0; i < addCount; i++){
            composite_1.add(new Composite());
        }

        composite_1.getChildren().length.should.eql(addCount);
    });

    it("Child의 Child도 잘 추가 되는가", () => {
        const testChildName = "testChild";
        let composite_1 = new Composite();
        let composite_2 = new Composite();

        composite_2.add(new Composite(testChildName));
        composite_1.add(composite_2);

        composite_1.getChild(0).getChild(0).name.should.eql(testChildName);
    });
});