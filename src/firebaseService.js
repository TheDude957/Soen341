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

export const SignUpUser = (user) => {
  return new Promise(function (resolve, reject) {
    firebase
      .database()
      .ref(user.type)
      .push(user)
      .then(() => {
        resolve("Student added");
      })
      .catch((error) => reject(error));
  });
};
