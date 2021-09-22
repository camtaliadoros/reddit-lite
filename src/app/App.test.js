import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';


describe("rendering components", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});