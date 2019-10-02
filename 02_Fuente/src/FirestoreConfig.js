import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    //credenciales para la base de datos
    apiKey: "AIzaSyCmwYHrI-sB5yqRtMjWBe06ytytTVqycR0",
    authDomain: "atrabajar-pe.firebaseapp.com",
    projectId: "atrabajar-pe"
});
let db=firebase.firestore();
db.settings({timestampsInSnapshots:true});
export default db;