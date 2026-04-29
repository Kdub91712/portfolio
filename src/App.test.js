import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('react-ga', () => ({
  initialize: jest.fn(),
  pageview: jest.fn(),
  event: jest.fn(),
}));

jest.mock('axios', () => {
  const mock = {
    get: jest.fn(() => Promise.resolve({ data: { projects: {}, skills: [], some_experience: [] } })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
  };
  return { __esModule: true, default: mock, ...mock };
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
