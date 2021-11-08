import React, { useState } from "react";
import barcode from "../../Assets/barcode3.svg";
import SearchBar from "../Search/SearchBar";
import {useHistory} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import sigmund from  '../../Assets/sigmund.png';

import "./NotFound.css"




function NotFound() {
    const history = useHistory()
  
  
  
   const [term, setTerm] = useState("");
   const handleChange = event => setTerm(event.target.value);
   

   const handleSubmit = (e) => {
     e.preventDefault();
     /\d/.test(term)
     ? history.push(`/Product/${term}`)
     : history.push(`/ProductList/${term}`);
   };

  return (  
    <div>
      <div className="image-SlideNotfound">
       
      </div>
      
      
      <div className="div-GifNotfound">

    <img className="img-NotFound" src={sigmund} alt="test"  />
    
    
</div>

    <p className="txt-Pnotfound">La page ou la recherche que vous demandez n'existe pas, vous pouvez toujours effectuer une nouvelle recherche ou nous contacter afin de résoudre le probleme.  </p>

      <div className="search-Location">

        <button className="food-pref" id="food-pref">
          Préférences Alimentaires
        </button>

        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <img className="barcode-logo" src={barcode} alt="test" />
      
      </div>
      <Footer />
</div>
);
}

export default NotFound;