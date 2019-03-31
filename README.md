# web-scrapping-demo-extension
A small and simple extension to fetch data from a website

# Using the extension

## Working Demo

After web scrapping is enabled, clicking on any element would push it to firebase cloud firestore.

![Demo](https://user-images.githubusercontent.com/37845584/55293725-43ccff80-5417-11e9-8402-e7621876cfae.gif)

## Configuring the extension

This extension uses [firebase](https://www.firebase.google.com/) as its backend. To run this extension, navigate to `src/background/background.js` and change this code snippet:
```js 
var config = {
    apiKey: "<API_KEY_FROM_FIREBASE>",
    authDomain: "<AUTH_DOMAIN_FROM_FIREBASE>",
    databaseURL: "<DATABASE_URL_FROM_FIREBASE>",
    projectId: "<PROJECT_ID_FROM_FIREBASE>",
    storageBucket: "<STORAGE_BUCKET_FROM_FIREBASE>",
    messagingSenderId: "<MESSAGING_SENDER_ID_FROM_FIREBASE>"
};
```

Use your credentials to fill the fields which can be found at your [firebase console](https://www.console.firebase.google.com).

## Installing on chrome

To install this extension, follow these steps:

* clone the repository using the command `git clone https://github.com/Arp-1/web-scrapping-demo-extension` 

* Open your chrome browser and navigate to `chrome://extensions`

* Turn the developer mode on(if you haven't done it already :smiley:.).

* Click on the `Load unpacked` button.

* Select the cloned repository.

* An icon has appeared in the chrome toolbar. Click on it to start using the extension.
