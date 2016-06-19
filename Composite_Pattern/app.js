import Component from "./src/Component"
import Composite from "./src/Composite"
import Leaf from "./src/Leaf"

{
    let composite = new Composite();
    let composite_c1 = new Composite("c1");
    let composite_c2 = new Composite("c2");

    composite.add(composite_c1);
    composite.add(composite_c2);
    console.log(composite.getChild(0));
}