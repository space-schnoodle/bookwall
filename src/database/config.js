import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAkDQDCWPMNeZyMK9IsNeBAQ1qfXq_8wMU',
  authDomain: 'photowall-5b2b1.firebaseapp.com',
  databaseURL: 'https://photowall-5b2b1-default-rtdb.firebaseio.com',
  projectId: 'photowall-5b2b1',
  storageBucket: 'photowall-5b2b1.appspot.com',
  messagingSenderId: '1088296916986',
  appId: '1:1088296916986:web:c49f57fbfea3980d80f643',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
