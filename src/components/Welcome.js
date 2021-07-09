import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        //Props are immutable
        const {name, heroName, children} = this.props;
        return (
          <>
          <h1>Class Component hi {name} a.k.a {heroName}</h1>
          {children}
          </>
        );
    }
}

export default Welcome;
