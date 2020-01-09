import React from 'react';
import { render } from '@testing-library/react';

class Home extends React.Component {
    render() {
        console.log('this.state', this.state)
        console.log('this.props', this.props)
        return (
            <h1> Home Page</h1>
        )
    }
}
export default Home;