import React from 'react'
import './myStyles.css';

function StyleSheet({primary}) {
    const className = primary ? 'primary':'';
    return (
        <div>
          <h1 className={`${className} font-xl`}>StyleSheets</h1>  
        </div>
    )
}

export default StyleSheet
