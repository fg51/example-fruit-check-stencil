import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  outputTargets: [{
    type: 'www',
    serviceWorker: null,
    // baseUrl: 'https://kflange.github.io/example-fruit-check',
    // baseUrl: 'example-fruit-check/',
    // baseUrl: 'https://foobar',
    // baseUrl: 'example-fruit',
    prerenderConfig: './prerender.config.ts'
  }],
};
