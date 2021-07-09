import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        const { isLoggedIn } =this.state;
        return (
            <div>
               {isLoggedIn && <div>Welcome Jitender</div>}
            </div>
        )
    }
}

export default UserGreeting;
