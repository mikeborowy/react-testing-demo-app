import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach( () => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {name: 'Fetched #1'},
            {name: 'Fetched #2'}
        ]
    });
});

afterEach( () => {
    moxios.uninstall();
});

it('can fetch a list of components and display them', (done) => {
    //attemp to render the *entire* app
    const component = mount(
        <Root>
            <App />
        </Root>
    );
    //find the fetchComments button and click
    component.find('.fetch-comments-btn').simulate('click');
    //expect a list of comments like 500 LIs
    //we need to pause to give moxios some time 
    moxios.wait( () => {
        component.update();
        expect(component.find('li').length).toEqual(2);
        done();
        component.unmount();
    });
});
