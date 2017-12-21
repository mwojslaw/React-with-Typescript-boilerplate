import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {App} from './';

test('App should render', () => {
    const helloMessage = 'Hello world';
    const component = renderer.create(
        <App helloMessage={helloMessage} usedTechnologies={[]} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});