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

## Jenkins CI setup

This repository includes a `Jenkinsfile` (Declarative Pipeline) and a `docker-compose.jenkins.yml` to run a local Jenkins instance for CI.

Quick steps to run Jenkins locally (Docker must be installed):

```powershell
docker compose -f docker-compose.jenkins.yml up -d

# open http://localhost:8080 and complete the Jenkins setup (use the initial admin password from the container logs)
docker logs -f jenkins --tail 50
```

Pipeline notes:
- The `Jenkinsfile` uses the `mcr.microsoft.com/playwright:latest` Docker image to run tests.
- The pipeline runs `npm ci`, installs Playwright browsers, runs `npx playwright test --reporter=junit` and publishes JUnit test results.
- After installing plugins (Git, Pipeline, Docker Pipeline, Blue Ocean) and creating a Pipeline job pointing to this repo, Jenkins will automatically run the `Jenkinsfile`.

Suggested next steps:
- Install necessary Jenkins plugins (GitHub / Git / Pipeline / Blue Ocean / JUnit Publisher).
- Add a GitHub personal access token to Jenkins credentials to allow Jenkins to clone private repos and set webhooks.
- Optionally configure the Jenkins job to run on push or create a multibranch pipeline.
