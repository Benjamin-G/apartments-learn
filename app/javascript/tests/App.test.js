import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('Renders a LEARN welcome', ()=>{
    const app = mount(<App />)
    expect(app.find('h1').text()).toEqual('Apartments')
})
