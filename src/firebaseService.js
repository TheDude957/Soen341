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

export const SignUpUser = (user, password) => {
  return new Promise(function (resolve, reject) {
    firebase
      .database()
      .ref(user.type)
      .push(user)
      .then(() => {
        firebase.auth().createUserWithEmailAndPassword(user.email, password);
        resolve("Student added");
      })
      .catch((error) => reject(error));
  });
};

export function searchProduct(string) {
  console.log("in search product method");
  // first search by name
  // second search by category
  // search by manufacturer
  return new Promise(function (resolve, reject) {
    let products = [];
    firebase
      .database()
      .ref("/product")
      .once("value")
      .then((snapshot) => {
        // searching by name
        snapshot.forEach(function (childSnapshot) {
          var data = childSnapshot.val();
          if (data.name.toLowerCase() === string.toLowerCase()) {
            var key = childSnapshot.key;
            products.push({
              key: key,
              name: data.name,
              id: data.id,
              picture: data.picture,
              price: data.price,
              category: data.category,
              description: data.description,
            });
          }
        });

        //checking search by category
        snapshot.forEach(function (childSnapshot) {
          var data = childSnapshot.val();
          if (data.category.toLowerCase() === string.toLowerCase()) {
            var key = childSnapshot.key;
            products.push({
              key: key,
              name: data.name,
              id: data.id,
              picture: data.picture,
              price: data.price,
              category: data.category,
              description: data.description,
            });
          }
        });

        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// snapshot.forEach(function (childSnapshot) {
//   var data = childSnapshot.val();
//   if (data.category === string)
//     products = pushProduct2Array(products, childSnapshot.key, data);
// });

export function addProduct(product) {
  firebase.database().ref("/product").push({
    name: product.name,
    price: product.price,
    id: product.id,
    category: product.category,
    picture: product.picture,
    description: product.description,
  });
}

// a function to retrieve all products from store
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
            description: data.description,
          });
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
