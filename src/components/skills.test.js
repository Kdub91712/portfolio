import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import Skills from './skills';

let div;
let root;

const mockSkills = ['PHP', 'React', 'MySQL', 'Docker', 'Linux', 'Git', 'Java', 'CSS', 'HTML 5', 'AWS', 'Extra1'];
const mockSomeExperience = ['Python', 'NodeJS', 'Ruby on Rails'];
const mockSaas = ['Google Analytics', 'Salesforce', 'Zendesk', 'Zoho'];

beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
    act(() => { root = createRoot(div); });
});

afterEach(() => {
    act(() => { root.unmount(); });
    document.body.removeChild(div);
});

it('renders without crashing', () => {
    act(() => { root.render(<Skills skills={mockSkills} some_experience={mockSomeExperience} saas={mockSaas} />); });
});

it('renders all three section labels', () => {
    act(() => { root.render(<Skills skills={mockSkills} some_experience={mockSomeExperience} saas={mockSaas} />); });
    const labels = div.querySelectorAll('.skills-label');
    const labelTexts = Array.from(labels).map(l => l.textContent);
    expect(labelTexts).toContain('Proficient');
    expect(labelTexts).toContain('Some Experience');
    expect(labelTexts).toContain('SaaS');
});

it('renders SaaS tools', () => {
    act(() => { root.render(<Skills skills={mockSkills} some_experience={mockSomeExperience} saas={mockSaas} />); });
    const pills = div.querySelectorAll('.skill-pill');
    const pillTexts = Array.from(pills).map(p => p.textContent);
    expect(pillTexts).toContain('Google Analytics');
    expect(pillTexts).toContain('Salesforce');
    expect(pillTexts).toContain('Zendesk');
    expect(pillTexts).toContain('Zoho');
});

it('renders proficient skills', () => {
    act(() => { root.render(<Skills skills={mockSkills} some_experience={mockSomeExperience} saas={mockSaas} />); });
    const pills = div.querySelectorAll('.skill-pill--proficient');
    expect(pills.length).toBeGreaterThan(0);
});

it('shows show-more button when proficient skills exceed 10', () => {
    act(() => { root.render(<Skills skills={mockSkills} some_experience={mockSomeExperience} saas={mockSaas} />); });
    const buttons = div.querySelectorAll('.skills-show-all');
    expect(buttons.length).toBeGreaterThan(0);
    expect(buttons[0].textContent).toMatch(/\+\d+ more/);
});

it('renders gracefully with no props', () => {
    act(() => { root.render(<Skills />); });
    const labels = div.querySelectorAll('.skills-label');
    expect(labels.length).toBe(3);
});
