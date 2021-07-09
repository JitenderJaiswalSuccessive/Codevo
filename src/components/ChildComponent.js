import React from 'react';

const ChildComponent = ({greetHandler}) => {
    return (
        <div>
            {/*<button onClick={greetHandler}>Greet Handler</button>*/}
            <button onClick={() => greetHandler('child')}>Greet Handler</button>
        </div>
    )
}

export default ChildComponent;
