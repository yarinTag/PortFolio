import React ,{useState} from 'react';
import '../styles/components/NavBar1.css';
import {MenuItems} from './MenuItems';

function Navbar1() {
    const [click,setClick]=useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (

        <>
            <nav className="NavBarItems">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : "fas fa-bars"}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>  
                        )
                    })}
                    
                </ul>
            </nav>
        </>

    //     <>
    //         <nav className='navbar'>
    //             <Link to='/' className="navbar-logo">
    //                 Epic
    //             </Link>
    //             <div className="menu-icon" onClick={handleClick}>
    //                 <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
    //             </div>
    //             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    //                 <li className="nav-item">
    //                     <Link to='/' className="nav-links" onClick={closeMobileMenu}>
    //                         Home
    //                     </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to='/About' className="nav-links" onClick={closeMobileMenu}>
    //                         About
    //                     </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to='/Skills' className="nav-links" onClick={closeMobileMenu}>
    //                         Skills
    //                     </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to='/' className="nav-links" onClick={closeMobileMenu}>
    //                         Project
    //                     </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to='/' className="nav-links" onClick={closeMobileMenu}>
    //                         Contact
    //                     </Link>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </>
     )
}

export default Navbar1;
