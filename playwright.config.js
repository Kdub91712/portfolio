const { defineConfig, devices } = require('@playwright/test');

const isCI = !!process.env.CI;

module.exports = defineConfig({
    testDir: './e2e',
    fullyParallel: true,
    forbidOnly: isCI,
    retries: isCI ? 1 : 0,
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    ],
    webServer: {
        command: isCI
            ? 'yarn build && npx serve -s build -l 3000'
            : 'BROWSER=none yarn dev',
        url: 'http://localhost:3000',
        reuseExistingServer: !isCI,
        timeout: 120000,
    },
});
