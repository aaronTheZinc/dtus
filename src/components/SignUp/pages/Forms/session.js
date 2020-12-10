import firebase from 'firebase'

class signUpHandle {

async checkAvailability(name) {
const firestore = firebase.firestore()
  const route = firestore.collection('Shops').doc(name);
 const res = await route.get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
    return 'exist'
    } else {

      return 'free'
     // create the document
    }
})
return res
}


}
export default new signUpHandle()