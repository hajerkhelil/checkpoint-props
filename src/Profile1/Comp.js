
import React from "react";
import PropTypes from "prop-types";


function Child({data, children }) {
    return (
      <div>
        <h2>This is the child component</h2>
       
        {data.map((el, i) => (
          <div key={i}>
            <h1 style={{color: "red"}}>{el.fullName}</h1>
            <h2>{el.bio}</h2>
            <h2>{el.profession}</h2>
            <p> alert({el.fullName}) </p>
          </div>
        ))}
        {children}
      </div> 
    );
  }


  // const fonction = ({data}) => alert({data.fullName})  ??? 




  //default props
  Child.defaultProps={fullName: 'not found'}

  //propTypes
  Child.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
  };

  export default Child;