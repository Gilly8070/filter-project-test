import React from 'react'

import './Search.css'

function Search() {

  const myArray = ['level', 'message', 'resourceID','Dates','time','traceID','spanID','commit','parentResourceId'];



  return (
    <div className="search-container">
      {/* <br /> */}
        <div className="search">
          <input type="text"  className = "input-search" placeholder='Search-Query'/>
          <i class="fa fa-search fa-lg"></i> 

        </div>

        <div className="filter">

          <div className="first">
            <input type="button" value="Level" />
            <input type="button" value="Message" />
            <input type="button" value="ResourceID" />
            <input type="Date" value="Dates" />
            <input type="time" value="Time" />
          
          </div>
         

          <div className="second">
            <input type="button" value="TraceID" />
            <input type="button" value="SpanID" />
            <input type="button" value="Commit" />
            <input type="button" value="ParentResourceId" />
          </div>
         
         
        </div>  



    </div>
  )
}

export default Search




/*





import React from "react";
import ReactDOM from "react-dom";

const names = ["whale", "squid", "turtle", "coral", "starfish"];

const NamesList = () => (
  <div>
    <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<NamesList />, rootElement);




Today was my 46th day out of the 100 days  hard challenge.
So today, I solved 5 problems .


1. 2937. Make Three Strings Equal (https://leetcode.com/problems/make-three-strings-equal/description/).


2. 2938. Separate Black and White Balls (https://leetcode.com/problems/separate-black-and-white-balls/description/).


3. 2939. Maximum Xor Product (https://leetcode.com/problems/maximum-xor-product/description/)


4. Array sorting (https://www.codechef.com/problems/ARRSORT?tab=statement).


5. Break Free (https://www.codechef.com/problems/REMOSET?tab=statement).


#100dayschallenge #challenge #consistency #Cp #lessons  #learning


*/