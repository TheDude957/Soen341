import { firebase } from "./Setup";
/**
 * This page contains all the functions related to firebase
 */

/**
 * Sign in function
 */
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

/**
 * Sign out function
 */
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

/**
 * Sign up function
 */
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

/**
 * Function to search item in database
 */
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

/**
 * Function to add a product to the database
 */
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

/**
 * FunctionAdd to retrieve all products from store
 */
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

/**
 * Function to get all information of current User
 */
export async function GetCurrentUserInformation() {
  let currentUser;
  let currentUserId = await GetCurrentUserId();
  return new Promise(function (resolve, reject) {
    if (currentUserId !== null) {
      firebase
        .database()
        .ref(`/Customer/${currentUserId}`)
        .once("value")
        .then((snapshot) => {
          currentUser = snapshot.val();
          resolve(currentUser || null);
        });
    } else {
      return null;
    }
  });
}

/**
 * Function to edit user name and email
 */
export async function setCurrentUserInformation(user){
  let currentUserId = await GetCurrentUserId();
  firebase
  .database()
  .ref(`/Customer/${currentUserId}`)
  .update(
    {
      'firstName' : user.firstName,
      'lastName' : user.lastName,
      'email' : user.email
    }

  )

}

/**
 * Function to get ID of current User
 */
function GetCurrentUserId() {
  let currentUserId;
  let currentUserEmail = firebase.auth().currentUser.email;

  return new Promise(function (resolve, reject) {
    firebase
      .database()
      .ref("/Customer/")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          if (childSnapshot.val().email === currentUserEmail) {
            currentUserId = childSnapshot.key;
          }
        });
        resolve(currentUserId || null);
      });
  });
}
/**
 * Function to add item in the Cart of the User
 */
export async function AddItemToCart(itemId) {
  
  let currentUser = await GetCurrentUserInformation();
  let cart = [];

  if (currentUser.Cart !== undefined) {
    cart.push(...Object.values(currentUser.Cart));
  }
  if (!cart.includes(itemId)) {
    cart.push(itemId);
  }
  return new Promise(function (resolve, reject) {
    firebase
      .database()
      .ref(`/Customer/-MyJX0pgxGEfpkZjOPGD/`)
      .update({ Cart: cart });

    resolve("Item Added");
  });
}
/**
 * Function to get the current User Cart
 */
export async function GetCurrentUserCart() {
  let currentUser = await GetCurrentUserInformation();
  return new Promise(function (resolve, reject) {
    resolve(currentUser.Cart || "");
  });
}
/**
 * Function to remove all an item from the cart of the user
 */
export async function RemoveItemFromCart(itemId) {
  let currentUser = await GetCurrentUserInformation();
  let cart = [];

  cart.push(...Object.values(currentUser.Cart));
  cart.splice(
    cart.findIndex((items) => items === itemId),
    1
  );
  return new Promise(function (resolve, reject) {
    firebase
      .database()
      .ref(`/Customer/-MyJX0pgxGEfpkZjOPGD/`)
      .update({ Cart: cart });
    resolve("Item Added");
  });
}

//returns user type
export async function GetUserType(){
  let currentUser = await GetCurrentUserInformation();
  return new Promise(function (resolve, reject) {
    resolve(currentUser.userType);
  })

}
