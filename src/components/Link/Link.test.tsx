import * as React from "react";
import * as renderer from "react-test-renderer";
import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {shallow} from "enzyme";
import Link from "./";

configure({ adapter: new Adapter() });


test("Link should render", () => {
    const component = renderer.create(
        <Link href={""}>React</Link>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test("Link should render <a></a> as first child", () => {
    const component = shallow(
        <Link href={""}>React</Link>
    );

    expect(component.first().is("a")).toBe(true);
}); 