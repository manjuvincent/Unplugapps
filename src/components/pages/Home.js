import React from "react";

// export const Home= () => {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// };

// import './Homepage.css';
import NavBar from '../NavBar';
import InnovationShort from '../InnovationShort';
export const Home = () =>{
    return(
        <div className="homepage">
            {/* <div className="homepage_header">
                <NavBar></NavBar>
            </div> */}
            <div className="homepage_background">
                <InnovationShort></InnovationShort>
            </div>

        </div>
    )
}