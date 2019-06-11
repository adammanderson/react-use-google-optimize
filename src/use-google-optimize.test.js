import React from 'react';
import { shallow } from 'enzyme';
import useGoogleOptimize from './use-google-optimize';

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

describe('useGoogleOptimize', () => {
  it('should have null value without experimentID', () => {
    let wrapper = shallow(<HookWrapper hook={() => useGoogleOptimize()} />);
    let { hook } = wrapper.find('div').props();
    let variant = hook;
    expect(variant).toEqual(null)
  })
});
