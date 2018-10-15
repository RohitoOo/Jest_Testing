import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import App from '../../App';

import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Checking If State ( From <App/> ) Changes OnClick of Button in <DrawerToggleButton/> Component' , () => {
    it('State Changes From False To True' , () => {
      const component = mount(<App />);
    //   const component = mount(<DrawerToggleButton />);
    //   console.log(component); // Not Working - Raised Issue On Github
      const button = component.find("button");
      button.simulate('click')
      expect(component.state().SideDrawerOpen).toEqual(true); 
    });
    it('State Changes From False To True Then False' , () => {
        const component = mount(<App />);
      //   const component = mount(<DrawerToggleButton />);
      //   console.log(component); // Not Working - Raised Issue On Github
        const button = component.find("button");
        button.simulate('click');
        button.simulate('click');
        expect(component.state().SideDrawerOpen).toEqual(false); 
      });
   
  });