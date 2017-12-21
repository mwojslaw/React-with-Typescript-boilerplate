import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Link from "./";

test("Link should render", () => {
    const component = renderer.create(
        <Link href={''}>React</Link>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});