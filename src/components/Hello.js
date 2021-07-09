import React from 'react';

const Hello = () => {
    /* return (
      <div id ='1' className ='color'>
          <h1>Hello Jitender</h1>
      </div>
    ); */
    return React.createElement('div',{id:'1',className:'color'},
           React.createElement('h1',null,'Hello Jitender'));
}

export default Hello;