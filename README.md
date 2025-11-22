# Playwright Testing

Quick setup and run instructions

- Install Node dependencies:

```powershell
npm install
```

- Install Playwright browsers (if not already installed):

```powershell
npx playwright install
```

- Run tests:

```powershell
npm test
```

If you see host validation warnings on Windows about `winldd`, try running:

```powershell
npx playwright install winldd
```

or consult Playwright documentation for Windows prerequisites: https://playwright.dev/docs/intro
