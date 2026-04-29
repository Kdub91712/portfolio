const { test, expect } = require('@playwright/test');

test.describe('Header', () => {
    test('shows name and role', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('.header-name')).toHaveText('Kevin Wilson');
        await expect(page.locator('.header-role')).toHaveText('Full Stack Software Engineer');
    });
});

test.describe('Navigation', () => {
    test('shows all nav links on desktop', async ({ page }) => {
        await page.goto('/');
        const links = page.locator('.nav-links');
        await expect(links).toHaveCount(8);
    });

    test('hamburger opens and closes the menu', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto('/');
        const menu = page.locator('.nav-menu');
        await expect(menu).not.toHaveClass(/nav-menu--open/);
        await page.click('.hamburger');
        await expect(menu).toHaveClass(/nav-menu--open/);
        await page.click('.hamburger');
        await expect(menu).not.toHaveClass(/nav-menu--open/);
    });
});

test.describe('Sections', () => {
    test('Projects section is visible by default', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('.project-rotator')).toBeVisible();
    });

    test('clicking About shows the About section', async ({ page }) => {
        await page.goto('/');
        await page.click('text=About');
        await expect(page.locator('.about-name')).toHaveText('Kevin Wilson');
    });

    test('clicking Skills shows the Skills section', async ({ page }) => {
        await page.goto('/');
        await page.click('text=Skills');
        await expect(page.locator('.skills-label').first()).toBeVisible();
    });

    test('clicking Contact shows the contact form', async ({ page }) => {
        await page.goto('/');
        await page.click('text=Contact');
        await expect(page.locator('#contact_form')).toBeVisible();
        await expect(page.locator('input[name="name"]')).toBeVisible();
        await expect(page.locator('input[name="email"]')).toBeVisible();
    });

    test('clicking Recent Projects shows the section', async ({ page }) => {
        await page.goto('/');
        await page.click('text=Recent Projects');
        await expect(page.locator('.in-progress-heading')).toBeVisible();
        await expect(page.locator('.recent-project-card').first()).toBeVisible();
    });

    test('clicking Philosophy shows the section', async ({ page }) => {
        await page.goto('/');
        await page.click('text=Philosophy');
        await expect(page.locator('.philosophy-entry').first()).toBeVisible();
    });

    test('clicking the header returns to Projects', async ({ page }) => {
        await page.goto('/');
        await page.click('text=About');
        await expect(page.locator('.about-name')).toBeVisible();
        await page.click('.App-header');
        await expect(page.locator('.project-rotator')).toBeVisible();
    });
});

test.describe('Footer', () => {
    test('shows built with text', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('.footer')).toContainText('Built with React');
    });
});
