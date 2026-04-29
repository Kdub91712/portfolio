import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
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
  document.body.appendChild(div);
  let root;
  act(() => { root = createRoot(div); root.render(<App />); });
  act(() => { root.unmount(); });
  document.body.removeChild(div);
});
