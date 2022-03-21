import React from 'react';
import ReactDOM from 'react-dom';

import {render} from '@testing-library/react';
import { SignInUser } from '../../firebaseService';
import { AssertionError } from 'assert';
import { string } from 'yup';
import LoginPage from '../../Pages/LoginPage';

// test('Test Sign In', () =>{
//     const 
//     expect(document.getElementsByClassNameSignInUser("test@test.com", "123456").value
//     ).toBe("Sign In Successfully")
// })

const firebase = require('@firebase/testing');
const PROJECT_ID = "soen341webstore-5485f";

//describe("Test sign in", () => {
    // it("Can read information in the admin collection", async () => {
    //     const myAuth = {uid: "test_customer", email: "unit@test.com"};
    //     const db = firebase.initializeTestApp({projectId: PROJECT_ID, auth: myAuth}).firestore();
    //     const testDoc = db.collection("Customer").doc("test_customer");
    //     await firebase.assertSucceeds(testDoc.set({foo:"test"})); 
    // });

    // it("Can sign in with the proper credentials", () => {
    //     const myAuth = {uid: "test_customer", email: "unit@test.com"};
    //     fixture.SignInUser("unit@test.com", "abcdef")
    //     .then(
    //         () => {
    //             expect(result).toEqual("unit@test.com", "abcdef");
    //         }
    //     )
    // })

    // security test to check that anyone can view products uploaded on the website 
    // wihout having to sign into an account
    
    // it("Should return 'Sign In Successfully' if signed in properly", () => {
    //      const myAuth = {email: "unit@test.com", password: "abcdef"};
    //     // expect(SignInUser(myAuth)).toEqual("unit@test.com", "abcdef");
    //     // return expect(SignInUser("unit@test.com", "abcdef"))
    //     // .resolves.toEqual("unit@test.com", "abcdef");
    //     return expect(SignInUser(myAuth)).toBe("Sign In Successfully");
    // });

   describe("Test View Products", () => {
      it("Can view products uploaded wihtout signing in", async () => {
        const myAuth = null;
        const db = firebase.initializeTestApp({projectId: PROJECT_ID, auth: myAuth}).firestore();
       // const db = getFirestore(null);
        const testQuery = db.collection("something").where("visibility", "==", "public");
        await firebase.assertSucceeds(testQuery.get());
    });
})
    
//})
