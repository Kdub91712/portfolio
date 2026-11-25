import React from 'react';
import PageLayout from './pageLayout';

const STRATEGIES = [
    {
        number: '01',
        title: 'Defense is the best offense',
        body: 'AI increases output, but that means we need more guard rails as well. Unit, integration and E2E tests should be added/updated after every new logic addition, and before any major refactor or feature.',
    },
    {
        number: '02',
        title: 'Assume your AI will not remember why or when something was done',
        body: 'Running existing tests and writing new ones immediately after the AI adds anything new to the codebase is critical, because that is when the AI is most aware of what it\'s building. Your next AI session can feel like talking to a different engineer that was not involved in the build at all.',
    },
    {
        number: '03',
        title: 'Guard your secrets with your life',
        body: 'AI might remember to hide sensitive keys but it\'s not consistent, so consider it guilty until proven innocent. Frequent security audits, environment variables and git ignore are your friends.',
    },
    {
        number: '04',
        title: "Don't forget to help your AI",
        body: "If the AI is fixing something and spinning it's wheels, make sure to intervene to save time and cost. More than one or two \"guesses\" to find a fix or something taking more than a minute is often an indicator that the AI is struggling.",
    },
    {
        number: '05',
        title: 'Push back on everything.',
        body: "Often times the AI will choose the first path that \"comes into it's head\", but that's not always the way forward. Ask about best practices, alternatives and drawbacks to make sure you're not heading down a bad path of tech debt.",
    },
    {
        number: '06',
        title: "Don't give AI the keys to the castle",
        body: "In 2026, there is no reason AI should be writing/reading prod data or have access to hosting/deploying configuration. Your local environment and/or development environments should give you all you need to reproduce an issue or test a new configuration. Make sure test data is seeded and/or mocked regardless of the test suite you're running. I personally avoid letting the AI run git commands to prevent costly mistakes to the repo(s), accidental or not.",
    },
    {
        number: '07',
        title: 'Write down the why, not just the what',
        body: "AI is good at producing code and bad at remembering the reasoning behind it. Architecture Decision Records (ADRs) capture the context, options and tradeoffs behind each significant choice, so the next AI session (or the next engineer) inherits the reasoning instead of re-litigating it. A short markdown file per decision in the repo is usually enough, and I have the AI draft it while the reasoning is still fresh.",
    },
    {
        number: '08',
        title: 'Climb the testing pyramid',
        body: "Lots of fast unit tests, a healthy layer of integration tests, and a thin top of end-to-end tests that cover the critical paths. AI makes it cheap to write tests, so it is tempting to skip straight to the slow, brittle ones at the top. Don't. Keep the pyramid's shape intact and the suite stays fast enough that the AI actually runs it, and failures still point at a small piece of code.",
    },
]

const AiStrategies = () => (
    <PageLayout>
        <p className="ai-strategies-intro">
            Using AI let's you code fast, but that does not make building easy. In the hands of a Senior Software Engineer, tools like Claude are very powerful. In the hands of others, it can be very dangerous to a production web application. Here are the techniques I use to make sure AI helps more than it hurts.
        </p>
        <div className="philosophies-list">
            {STRATEGIES.map((s) => (
                <div key={s.number} className="philosophy-entry">
                    <span className="philosophy-number">{s.number}</span>
                    <div className="philosophy-divider" />
                    <h2 className="philosophy-title">{s.title}</h2>
                    <p className="philosophy-body">{s.body}</p>
                </div>
            ))}
        </div>
    </PageLayout>
);

export default AiStrategies;
