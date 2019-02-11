import React from 'react';
import { shallow } from 'enzyme';
import { Register } from '../component/auth/Register';

describe('<Register/>', () => {
  const editor = shallow(<Register registerUser={jest.fn()} />);

  it('should render without crashing', () => {
    expect(editor).toMatchSnapshot();
  });
  const props = {
    registerUser: (newUser) => jest.fn(),
    auth: { isAuthenticated: false, user: {} },
    errors: {}
  };

  it('test Register component onchange', () => {
    const wrapper = shallow(<Register {...props} />);
    const instance = wrapper.instance();
    instance.onChange({ target: { name: 'name', value: 'value' } });
    const e = { preventDefault: () => {} };
    instance.onSubmit(e);
  });

  it('tests that the component receives new props', () => {
    const wrapper = shallow(<Register {...props} />);
    const data = {
      errors: {
        
          name: 'invalid username'
        
      }
    };
    wrapper.instance().componentWillReceiveProps(data);
    expect(wrapper.instance().state.errors.name).toEqual('invalid username');
  });
});
