import React from 'react';
import '../Style/navbar.css';
import { Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='nav-box'>

                    <span className='online-shopping'>
                    <Link to='/' className='nav-link'> SHOP.COM </Link>
                    </span>
                    <div className='cart'>
                        <span>
                          <Link to='cart' className='link-plus'> <i className="fas fa-cart-plus"></i></Link> 
                        </span>
                    </div>
                </div>
                <span className='but'>
                    <button className='add-btn'>
                        <Link to='/add-product' className='btn-link'> Add product</Link>
                       
                    </button>
                </span>

            </nav>
         </>
    );
}

export default Navbar;
