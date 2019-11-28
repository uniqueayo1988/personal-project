import React from 'react';
import Mar from '../marble.jpg';


function Marble() {
     return (
          <nav>
               <h1 className="container">MARBLE RESTORATION</h1>
               <img
                    className=" container-fluid d-block w-100"
                    src={Mar}
                    alt="marble.jpg" />
               <div className="container">
                    <p>Marble is an expensive investment and we believe that replacing it when dull isn’t the smart choice. Instead, utilize our low-cost marble restoration services that will restore the shine and mirror finish of the existing marble no matter the marbles age. Our step-by-step marble restoration process offers guaranteed results that uplift the original colour of the marble.</p>
                    <p>We pride ourselves on our experience, expertise and quality of work that makes us a leading force in the field of Marble and Limestone restoration. Using our high standards of craftsmanship and restoration skills, we can restore your natural Marble surfaces back to its original and beautiful appearance.
</p>
                    <h4>OUR MARBLE RESTORATION PROCESS</h4>
                    <ul>
                         <li>Cleaning - The cleaning process entails the removal of embedded dirt, wax and other build-up.
</li>
                         <li>Grinding - Grinding with diamond abrasives removes a very thin layer from the stone’s surface to eliminate deep scratches, lippage and other imperfections.
</li>
                         <li>Honing - Honing involves the removal of more minor, superficial scratches and flaws from foot traffic.
</li>
                         <li>Polishing - We use state-of-the-art stone polishing equipment and techniques to achieve a satin, semi-gloss, or high gloss finish.
</li>
                         <li>Sealing - The stone flooring is sealed, protecting it from water and oil-based stains
</li>
                    </ul>
                    <h5>PLEASE FEEL FREE TO CALL US FOR A FREE SAMPLE.</h5>
               </div>

          </nav>
     )
}
export default Marble;