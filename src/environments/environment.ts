// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  algolia: {
    appId: 'G5YU8MWMX3',
    apiKey: '8fb9a56301949ce2a6fd28f4c16a8936',
    indexName: 'getstarted_actors',
    urlSync: false
  },

  firebase: {
    apiKey: "AIzaSyBRQJITVTfYaPUGB-1NBMI3soy-BWwh8EY",
    authDomain: "projet-inno-storage.firebaseapp.com",
    databaseURL: "https://projet-inno-storage.firebaseio.com",
    projectId: "projet-inno-storage",
    storageBucket: "projet-inno-storage.appspot.com",
    messagingSenderId: "31381920934"
  }
};
