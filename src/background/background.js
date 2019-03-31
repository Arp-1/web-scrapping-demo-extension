chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({'isScrappingEnabled': false});
})

var config = {
    apiKey: "<API_KEY_FROM_FIREBASE>",
    authDomain: "<AUTH_DOMAIN_FROM_FIREBASE>",
    databaseURL: "<DATABASE_URL_FROM_FIREBASE>",
    projectId: "<PROJECT_ID_FROM_FIREBASE>",
    storageBucket: "<STORAGE_BUCKET_FROM_FIREBASE>",
    messagingSenderId: "<MESSAGING_SENDER_ID_FROM_FIREBASE>"
};
firebase.initializeApp(config);

let db = firebase.firestore();

chrome.runtime.onMessage.addListener((response) => {
    db.collection(response.collection).add(response.data).then((docRef)=>console.log(docRef)).catch((err)=>console.log(err.message));
})