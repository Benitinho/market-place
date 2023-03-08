// import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="https://www.radiomeuh.com/">
                <b>Navbar</b>
                <span className='btn btn-danger btn-sm m-2'>{totalCounters}</span>
            </a>
        </nav>
        );
    };
 
export default NavBar;

// class NavBar extends Component {
//     render() { 
//         return (
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="https://www.radiomeuh.com/">
//                 <b>Navbar</b>
//                 <span className='btn btn-danger btn-sm m-2'>{this.props.totalCounters}</span>
//             </a>
//         </nav>
//         );
//     }
// }

// export default NavBar;


