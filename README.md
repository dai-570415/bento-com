# bento-com

## Data download & construction

```bash
$ git clone https://github.com/dai-570415/bento-com.git

$ cd bento-com

$ npm install

$ npm start
```

- Setting(Firebase.js)

```js
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "Your_Key",
    authDomain: "Your_Key",
    databaseURL: "Your_Key",
    projectId: "Your_Key",
    storageBucket: "Your_Key",
    messagingSenderId: "Your_Key",
    appId: "Your_Key",
    measurementId: "Your_Key"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
```

- Setting(components/article/Hyogo.js)

```js
const keyId = 'Your_Key'; // ぐるなびAPI KEY
```