import './navbar.css'
import { SearchOutlined } from '@mui/icons-material';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbarWrapper">
                <div className="navbarLeft">
                    <h2 className="navbarTitle">Shopnik</h2>
                    <div className='navIcon'></div>
                </div>

                <div className="navbarCenter">
                    <ul className="navbarList">
                        <li className="navbarListItems">HOME</li>
                        <li className="navbarListItems">FEATURES</li>
                        <li className="navbarListItems">SERVICES</li>
                        <li className="navbarListItems">PROJECTS</li>
                        <li className="navbarListItems">SHOP</li>
                        <li className="navbarListItems">NEWS</li>
                    </ul>
                </div> 

                 <div className="navbarRight">
                        <SearchOutlined className='navRightIcon'/>
                    </div>              
            </div>
        </div>
    )
}

export default Navbar
