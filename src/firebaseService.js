import { firebase } from "./Setup";
/**
 * This page contains all the functions related to firebase
 */

export const getCurrentID = () => {
  let val = 0;
  return new Promise(function (resolve, reject) {
    firebase
      .database()
      .ref("/CurrentIDIssue")
      .once("value")
      .then((value) => {
        val = value.val();
        firebase
          .database()
          .ref("/CurrentIDIssue")
          .update(val + 1);
        resolve(val);
      });
  });
};

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
      .ref("users")
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
  // first search by name
  // second search by category
  // search by manufacturer
  return new Promise(function (resolve, reject) {
    let products = [];
    firebase
      .database()
      .ref("/products")
      .once("value")
      .then((snapshot) => {
        // searching by name
        snapshot.forEach(function (childSnapshot) {
          var data = childSnapshot.val();
          if (data.title.toLowerCase() === string.toLowerCase()) {
            var key = childSnapshot.key;
            products.push({
              key: key,
              title: data.title,
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
              title: data.title,
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
export async function addProduct(product) {
  let currentUser = await GetCurrentUserInformation();
  let items = [];

  items.push(...Object.values(currentUser.items));

  firebase
    .database()
    .ref("numberOfItems")
    .once("value")
    .then((snapshot) => {
      let numberOfItems = snapshot.val() + 1;
      firebase
        .database()
        .ref("/numberOfItems")
        .set(numberOfItems)
        .then(() => {
          firebase
            .database()
            .ref("/products")
            .child(`pid_${numberOfItems}`)
            .set({
              title: product.title,
              price: product.price,
              id: numberOfItems,
              category: product.category,
              picture: product.picture,
              description: product.description,
            });
          items.push(numberOfItems);
          firebase
            .database()
            .ref(`/users/user_${currentUser.id}`)
            .update({ items: items });
        });
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
      .ref("/products")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          var key = childSnapshot.key;
          var data = childSnapshot.val();
          products.push({
            key: key,
            title: data.title,
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

export function get4RelatedProducts(category, id) {
  return new Promise(function (resolve, reject) {
    let products = [];
    let counter = 0;
    firebase
      .database()
      .ref("/products")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          var key = childSnapshot.key;
          var data = childSnapshot.val();
          if ( counter < 4 && data.id != id && data.category.toLowerCase() === category.toLowerCase()  ){
            counter++;
          products.push({
            key: key,
            title: data.title,
            id: data.id,
            picture: data.picture,
            price: data.price,
            category: data.category,
            description: data.description,
          });}
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
        .ref(`/users/user_${currentUserId}`)
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

export function GetUserInformation(id) {
  let currentUser;
  let currentUserId = id;
  return new Promise(function (resolve, reject) {
    if (currentUserId !== null) {
      firebase
        .database()
        .ref(`/users/user_${currentUserId}`)
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

export function getAllUsers() {
  let users = [];
  return new Promise(function (resolve, reject) {
    firebase
    .database()
    .ref(`/users`)
    .once("value")
    .then((snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        var data = childSnapshot.val();
        users.push(data);
      });
      resolve(users);
    })
    .catch((error) => {
      reject(error);
    });
  })
}

/**
 * Function to edit user name and email
 */
export async function setCurrentUserInformation(user) {
  let currentUserId = await GetCurrentUserId();
  firebase.database().ref(`/users/user_${currentUserId}`).update({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });
}
export async function deleteFirebaseUser(id){
  firebase
  .database()
  .ref(`/users/user_${id}`)
  .remove();
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
      .ref("/users/")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          if (childSnapshot.val().email === currentUserEmail) {
            currentUserId = childSnapshot.val().id;
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

  if (currentUser.cart !== undefined) {
    cart.push(...Object.values(currentUser.cart));
  }
  if (!cart.includes(itemId)) {
    cart.push(itemId);
  }
  return new Promise(function (resolve, reject) {
    firebase
      .database()
      .ref(`/users/user_${currentUser.id}`)
      .update({ cart: cart });

    resolve("Item Added");
  });
}
/**
 * Function to get the current User Cart
 */
export async function GetCurrentUserCart() {
  let currentUser = await GetCurrentUserInformation();
  return new Promise(function (resolve, reject) {
    resolve(currentUser.cart || "");
  });
}
/**
 * Function to remove all an item from the cart of the user
 */
export async function RemoveItemFromCart(itemId) {
  let currentUser = await GetCurrentUserInformation();
  let cart = [];

  cart.push(...Object.values(currentUser.cart));
  cart.splice(
    cart.findIndex((items) => items === itemId),
    1
  );
  return new Promise(function (resolve, reject) {
    firebase
      .database()
      .ref(`/users/user_${currentUser.id}`)
      .update({ cart: cart });
    resolve("Item Added");
  });
}

//returns user type
export async function GetUserType() {
  let currentUser = await GetCurrentUserInformation();
  return new Promise(function (resolve, reject) {
    resolve(currentUser.userType);
  });
}

/*
Delete item of seller
*/
export async function DeleteItem(itemId) {
  let products = await getProducts();
  let currentUser = await GetCurrentUserInformation();
  let items = [];
  console.log(products);
  items.push(...Object.values(currentUser.items));
  items.splice(
    items.findIndex((items) => items === itemId),
    1
  );
  products.splice(
    products.findIndex((items) => items.id === itemId),
    1
  );

  return new Promise(function (resolve, reject) {
    firebase.database().ref(`/products/pid_${itemId}`).remove();
    console.log("DELETE", `  pid_${itemId}`);
    firebase
      .database()
      .ref(`/users/user_${currentUser.id}`)
      .update({ items: items });
    resolve("Item Deleted");
  });
}

/*
Get the items of the seller
*/
export async function GetSellerProducts() {
  let currentUser = await GetCurrentUserInformation();
  return new Promise(function (resolve, reject) {
    resolve(currentUser.items || "");
  });
}

/*
Edit item of seller
*/
export function EditProduct(item) {
  firebase.database().ref(`/products/pid_${item.id}`).update({
    category: item.category,
    description: item.description,
    id: item.id,
    picture: item.picture,
    price: item.price,
  });
}
