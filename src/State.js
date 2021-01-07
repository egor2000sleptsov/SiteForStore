import fb from "./Firebase.js";

let state = {
    img: {}
}

export let refreshState = () => {

    let storageRef = fb.firestore().collection('cities')
    debugger
    storageRef.doc('LA').get().then( doc => {
        if (doc.exists){
            console.log('uraaaa',doc.data())
        } else {
            console.log('no such doc')
        }
    }).catch(error => console.log(error))
    debugger

}

export default state