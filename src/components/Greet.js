import React from 'react';

const Greet = ({name, heroName, children}) => {
    // const {name, heroName, children} = props;
   return (
    <>
     <h1>Functional Component hi {name} a.k.a {heroName}</h1>
     {children}
    </>
   );
}

export default Greet;