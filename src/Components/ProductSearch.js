import React, {useState, useEffect} from 'react';
import "../CSS/ProductSearch.css";

function ProductSearch(props){

    const [value, setValue] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        if(value.length > 0){
            fetch('https://soen341webstore-5485f-default-rtdb.firebaseio.com/product.json').then(
                response => response.json()
            ).then(responseData => {
                setResult([]);
                let searchQuery = value.toLowerCase();
                for(const key in responseData) {
                    let product = responseData[key].name.toLowerCase();
                    if(product.slice(0, searchQuery.length).IndexOf(searchQuery) !== -1){
                        setResult(prevResult => {
                            return [...prevResult, responseData[key].name]
                        });
                    }
                }
            }).catch(error => {
                console.log(error);
            })
        }else{
            setResult([]);
        }

    }, [value])


    return (
        <div>
            <input type = "text"
            className = "searchBar"
            onChange = {(event) => setValue(event.target.value)}
            value = {value}
            />
            <div className = 'searchBack'>
                {result.map((result, index) => (
                    <a href = "#" key = {index}>
                        <div className  = "searchEntry"> 
                            {result}
                        </div>
                    </a>
                ))}
            </div>
         </div>
    );
}

export default ProductSearch;