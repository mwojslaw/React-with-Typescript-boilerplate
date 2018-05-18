// import * as React from "react";
// import * as renderer from "react-test-renderer";
// import { configure } from "enzyme";
// import * as Adapter from "enzyme-adapter-react-16";
// import { shallow } from "enzyme"
// import { NotConnected } from "./";
// import Link from "./../Link";

// configure({ adapter: new Adapter() });

// test("App should render", () => {
//     const helloMessage = "Hello world";
//     const component = renderer.create(
//         <NotConnected helloMessage={helloMessage} usedTechnologies={[]} />
//     );

//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });

// test("App should render <div> as first child", () => {
//     const component = shallow(
//         <NotConnected helloMessage={''} usedTechnologies={[]} />
//     );

//     expect(component.first().is("div")).toBe(true);
// })

// test("App should render <h1> with passed message", () => {
//     const helloMessage = "Hello world";
//     const component = shallow(
//         <NotConnected helloMessage={helloMessage} usedTechnologies={[]} />
//     );

//     expect(component.find("h1").text()).toEqual(helloMessage);
// });

// test("App should render as meny <Link> as passed used technologies", () => {
//     const usedTechnologies = [{
//         href: '',
//         name: 'React'
//     }];

//     const component = shallow(
//         <NotConnected usedTechnologies={usedTechnologies} helloMessage='' />
//     );

//     expect(component.find(Link).length).toEqual(usedTechnologies.length);
// });