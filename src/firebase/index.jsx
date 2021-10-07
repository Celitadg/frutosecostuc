import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, getDoc, addDoc, doc, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLyvpkEkVa1Mpa7glFJvtUTuUr_06K5fk",
    authDomain: "frutos-secos-tuc.firebaseapp.com",
    projectId: "frutos-secos-tuc",
    storageBucket: "frutos-secos-tuc.appspot.com",
    messagingSenderId: "269072161459",
    appId: "1:269072161459:web:db5067b30b2f48424caec6"
};


initializeApp(firebaseConfig);
const db = getFirestore();

class FirebaseUtils {
    static isValidString(field) {
        return typeof field === 'string' && field !== '';
    }

    static isValid(field) {
        return field !== '';
    }

    static isValidOptions(options) {
        if (typeof options === 'object') {
            const isValidField = this.isValidString(options.field);
            const isValidCondition = this.isValidString(options.condition);
            const isValidValue = this.isValid(options.value);
            return isValidField && isValidCondition && isValidValue;
        }
        return false;
    }
}

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
    
        const isValid = FirebaseUtils.isValidOptions(options);
        if (isValid) {
            return getDocs(
            query(ref, where(options.field, options.condition, options.value))
            );
        }
            return getDocs(ref);
    }

    static add(path, obj) {
        const pathSegments = path.split('/');
        const ref = this.getCollection(...pathSegments);
        return addDoc(ref, obj);
    }

}


