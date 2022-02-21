import {firebase} from "../Setup.js";
let products = [];
function ProductCard() {
    // reference to database containing products
  var productRef = firebase.database().ref("/product");

  productRef.once("value", function (snapshot) {

    snapshot.forEach(function (childSnapshot) {
      var key = childSnapshot.key;
      var data = childSnapshot.val();
      products.push({
        key: key,
        name: data.name,
        id: data.id,
        picture: data.picture,
        price: data.price,
        category: data.category
      });
    });
  });

  return (<div>
      Hello it's me!
      
      
      </div>);
}

export default ProductCard;
