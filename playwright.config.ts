import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'tests',
  timeout: 30_000,
  expect: {
    timeout: 5000,
  },
  use: {
    headless: true,
  },
  reporter: [['html', { open: 'never' }]],
};

export default config;
