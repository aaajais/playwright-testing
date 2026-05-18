// import { PlaywrightTestConfig } from '@playwright/test';

// const config: PlaywrightTestConfig = {
//   testDir: 'tests',
//   timeout: 60_000,
//   expect: {
//     timeout: 5000,
//   },
//   use: {
//     headless: true,
//   },
//   reporter: [['html', { open: 'never' }]],
// };

// export default config;

import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'tests',

  timeout: 60000,

  use: {
    headless: true,

    ignoreHTTPSErrors: true,

    launchOptions: {
      args: [
        '--disable-http2',
        '--disable-dev-shm-usage',
        '--no-sandbox'
      ]
    }
  },

  reporter: [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'results.xml' }]
  ]
};

export default config;