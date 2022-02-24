import { firebase } from "./Setup";

export const SignInUser = (email, passsword) => {
  return new Promise(function (resolve, reject) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, passsword)
      .then(() => {
        resolve("Sign In Successfully");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const SignOutUser = () => {
  return new Promise(function (resolve, reject) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        resolve("Sign Out Successfully");
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export function getProducts() {
  return new Promise(function (resolve, reject) {
    let products = [];
    firebase
      .database()
      .ref("/product")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          var key = childSnapshot.key;
          var data = childSnapshot.val();
          products.push({
            key: key,
            name: data.name,
            id: data.id,
            picture: data.picture,
            price: data.price,
            category: data.category,
          });
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
