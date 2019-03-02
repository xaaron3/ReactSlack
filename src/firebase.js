import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var config = {
   apiKey: "AIzaSyBPYrbwa6PwzqS2AKJeqg4-Z4KPhe4Yp-Y",
   authDomain: "react-slack-clone-17833.firebaseapp.com",
   databaseURL: "https://react-slack-clone-17833.firebaseio.com",
   projectId: "react-slack-clone-17833",
   storageBucket: "react-slack-clone-17833.appspot.com",
   messagingSenderId: "954994581908"
 };

firebase.initializeApp(config);

export default firebase;