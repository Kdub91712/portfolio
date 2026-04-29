import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import Contact from './contact';

let div;
let root;
let mockSubmitHandler;

beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    act(() => { root = createRoot(div); });
    mockSubmitHandler = jest.fn((e) => e.preventDefault());
});

afterEach(() => {
    act(() => { root.unmount(); });
    document.body.removeChild(div);
});

it('renders without crashing', () => {
    act(() => { root.render(<Contact formSubmitHandler={mockSubmitHandler} />); });
});

it('renders all four form fields', () => {
    act(() => { root.render(<Contact formSubmitHandler={mockSubmitHandler} />); });
    expect(div.querySelector('input[name="name"]')).not.toBeNull();
    expect(div.querySelector('input[name="phone"]')).not.toBeNull();
    expect(div.querySelector('input[name="email"]')).not.toBeNull();
    expect(div.querySelector('textarea[name="comments"]')).not.toBeNull();
});

it('renders a submit button', () => {
    act(() => { root.render(<Contact formSubmitHandler={mockSubmitHandler} />); });
    const submit = div.querySelector('input[type="submit"]');
    expect(submit).not.toBeNull();
    expect(submit.value).toBe('Submit');
});

it('calls formSubmitHandler on submit', () => {
    act(() => { root.render(<Contact formSubmitHandler={mockSubmitHandler} />); });
    const form = div.querySelector('#contact_form');
    act(() => { form.dispatchEvent(new Event('submit', { bubbles: true })); });
    expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
});

it('form fields start empty', () => {
    act(() => { root.render(<Contact formSubmitHandler={mockSubmitHandler} />); });
    expect(div.querySelector('input[name="name"]').value).toBe('');
    expect(div.querySelector('input[name="email"]').value).toBe('');
    expect(div.querySelector('textarea[name="comments"]').value).toBe('');
});
