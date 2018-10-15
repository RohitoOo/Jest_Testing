import React from 'react';
import App from './App';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('Testing the <App/> Component' , () => {
  it('Renders 1 <App/> component' , () => {
    const component = shallow(<App />);
    // console.log(component); // Not Working - Raised Issue On Github
    expect(component).toHaveLength(1); 
  });
  it('<App/> Component Receives Props ' , () => {
    const component = shallow(<App name={"Rohito's Props"}/>);
    expect(component.instance().props.name).toBe("Rohito's Props"); 
  });
});
 