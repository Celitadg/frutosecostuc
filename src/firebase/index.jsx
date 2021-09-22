import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, getDoc, addDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmmD1t_8y028Jdd0g_0iW-OhNFc0sE348",
    authDomain: "frutos-secos-22ce3.firebaseapp.com",
    projectId: "frutos-secos-22ce3",
    storageBucket: "frutos-secos-22ce3.appspot.com",
    messagingSenderId: "46894748883",
    appId: "1:46894748883:web:90dc01362f8a11bdf63026"
};


initializeApp(firebaseConfig);
const db = getFirestore();

export class Firebase {
    static getCollection(...pathSegments) {
    return collection(db, ...pathSegments);
    }

    static getDoc(...pathSegments) {
    return doc(db, ...pathSegments);
    }

    static get(path) {
    const pathSegments = path.split('/');
    const ref = this.getDoc(...pathSegments);
    return getDoc(ref);
    }

    static getAll(path, options) {
    const pathSegments = path.split('/');
    const ref = this.getCollection(...pathSegments);
    return getDocs(ref);
    }

    static add(path, obj) {
    const pathSegments = path.split('/');
    const ref = this.getCollection(...pathSegments);
    return addDoc(ref, obj);
    }

}


