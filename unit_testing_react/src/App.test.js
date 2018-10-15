import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('<App/>' , () => {
  it('Renders 1 <App/> component' , () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1); 
  });
});
