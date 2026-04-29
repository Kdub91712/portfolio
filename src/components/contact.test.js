import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Contact from './contact';

let div;
let mockSubmitHandler;

beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    mockSubmitHandler = jest.fn((e) => e.preventDefault());
});

afterEach(() => {
    act(() => { ReactDOM.unmountComponentAtNode(div); });
    document.body.removeChild(div);
});

it('renders without crashing', () => {
    act(() => { ReactDOM.render(<Contact formSubmitHandler={mockSubmitHandler} />, div); });
});

it('renders all four form fields', () => {
    act(() => { ReactDOM.render(<Contact formSubmitHandler={mockSubmitHandler} />, div); });
    expect(div.querySelector('input[name="name"]')).not.toBeNull();
    expect(div.querySelector('input[name="phone"]')).not.toBeNull();
    expect(div.querySelector('input[name="email"]')).not.toBeNull();
    expect(div.querySelector('textarea[name="comments"]')).not.toBeNull();
});

it('renders a submit button', () => {
    act(() => { ReactDOM.render(<Contact formSubmitHandler={mockSubmitHandler} />, div); });
    const submit = div.querySelector('input[type="submit"]');
    expect(submit).not.toBeNull();
    expect(submit.value).toBe('Submit');
});

it('calls formSubmitHandler on submit', () => {
    act(() => { ReactDOM.render(<Contact formSubmitHandler={mockSubmitHandler} />, div); });
    const form = div.querySelector('#contact_form');
    act(() => { form.dispatchEvent(new Event('submit', { bubbles: true })); });
    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
});

it('form fields start empty', () => {
    act(() => { ReactDOM.render(<Contact formSubmitHandler={mockSubmitHandler} />, div); });
    expect(div.querySelector('input[name="name"]').value).toBe('');
    expect(div.querySelector('input[name="email"]').value).toBe('');
    expect(div.querySelector('textarea[name="comments"]').value).toBe('');
});
