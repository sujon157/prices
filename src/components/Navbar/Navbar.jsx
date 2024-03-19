import { useState } from "react";

import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "../Link/Link";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/blog', name: 'Blog' },
    ];

    return (
        <nav className="text-black p-6 bg-yellow-200">
            <div className="md:hidden  text-2xl " onClick={()=> setOpen(!open)}>
                {
                    open === true? <AiOutlineClose></AiOutlineClose> :  <RiMenu2Line ></RiMenu2Line>
                }
               
            </div>
            {/* ul container upore cole jabe  */}

            <ul className={`md:flex absolute duration-1000
             ${open? 'top-16': '-top-60'} md:static
            bg-yellow-200 px-6 shadow-lg`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul> 

            {/* click korle  ul container show off hobe */}

            {/* <ul className={`md:flex absolute duration-1000
             ${open? '': 'hidden'}
            bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul> */}


          
        </nav>
    );
};

export default Navbar;