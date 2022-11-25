// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'portfolio-argentina-prog-f5593',
    appId: '1:551136936187:web:bdc3211c004d8933e7f05e',
    storageBucket: 'portfolio-argentina-prog-f5593.appspot.com',
    apiKey: 'AIzaSyBAp4jY0zm0WmJMXCBGPHphVUp6h2nwvHM',
    authDomain: 'portfolio-argentina-prog-f5593.firebaseapp.com',
    messagingSenderId: '551136936187',
    measurementId: 'G-MBJE4JDWW8',
  },
  production: false,
  //baseUrl:"https://arg-prog-portfolio3.herokuapp.com/" //backEnd3
  //baseUrl:"https://secret-journey-76793.herokuapp.com" //backEnd-developer
  baseUrl: "https://arg-prog-back-end.herokuapp.com/"//arg-prog-back-end
  //baseUrl: "http://localhost:8080"
  
  //Configuracion proxy
  //baseUrl:"/person/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
