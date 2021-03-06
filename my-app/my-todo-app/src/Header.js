import React from 'react';

class Header extends React.Component {

    render() {
        return <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                <a className="navbar-brand" href="#">To DO </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">List <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">New </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Del </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    }
}

export default Header;
