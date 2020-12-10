import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  apiKey: 'AIzaSyCKSEjms1-mn-UoGi-1MrQiFhIIxaNaomM',
  authDomain: 'downtown-97d7d.firebaseapp.com',
  projectId: 'downtown-97d7d',
  databaseURL: 'https://downtown-97d7d.firebaseio.com/'

};

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();
    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            this.getUserName(authUser.uid).once('value', snapshot => {

              const name = snapshot.val() !== null ? snapshot.val() : "user"

              authUser = {
                displayName: name,
                uid: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
                providerData: authUser.providerData,
                ...dbUser,
              };

              next(authUser);
            });


          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  getUserStat = (uid) => this.db.ref(`/${uid}`);

  getUserName = (uid) => this.db.ref(`/${uid}/firstName`);

  setDefaultInUserSignUp = (uid, userEmail, userPW, firstName, lastName) => this.db.ref(uid).set({

    "firstName": firstName,
    "lastName": lastName,
    
    'email': String(userEmail),
    'password': String(userPW),
    "Analytics": {
      "totalRevenue": "0",
      "totalOrders": "0"
    },
   
    "balance": {
      "balance": "0.00"
    }
  })

  getUserStatistic = (uid) => {
    const db = this.db.ref(`/${uid}`);
    db.once('value', (snapshot) => {
      return snapshot.val()
    })
  }

  static addProductResponse = (uid, reposne) => {
    const db = app.database()
    const category = reposne.category
    const productName = `${category})_${reposne.recordId}`
    console.log("YY", uid, reposne)
    db.ref(`/${uid}/products`).child(productName).set(reposne)

  }

  // *** Message API ***

  message = uid => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref('messages');
}

export default Firebase;
