import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Header from './Header';
import MyContent from './MyContent';
import Footer from './Footer';


const styles = {
    backgroundColor: "cyan",
    alignment: "center",
    maxWidth: "80%",
    margin: "auto",
    color: "white",
    padding: "10px 5px",

};

function MyApp() {
    return (
        <div>
            {Header}
            <body style={styles}>
                {MyContent}
                {Footer}
            </body>
        </div>);
}

ReactDOM.render(<MyApp />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
