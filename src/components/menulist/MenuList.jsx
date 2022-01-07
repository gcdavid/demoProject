
import Menu from '../menu/Menu'
import './menulist.css'

const MenuList = () => {
    return (
        <>
       
        <div className='menulist'>
             <ul className="menuListItem">
                <li className="menuListLinks">FURNITURE</li>
                <li className="menuListLinks">LIGHTING</li>
                <li className="menuListLinks">SOFAS</li>
                <li className="menuListLinks">LOUNGE CHAIRS</li>
            </ul>

            <div className="menulistWrapper">
                <Menu className='menuContainer'/>
                <Menu className='menuContainer'/>
                <Menu className='menuContainer'/>
                <Menu className='menuContainer'/>
                <Menu className='menuContainer'/>
                <Menu className='menuContainer'/>
                <Menu className='menuContainer'/>
                <Menu className='menuContainer'/>
            </div>

            <div className="button">
                <button className='btn'>GO TO SHOP</button>
            </div>           
        </div>       
           

        </>
    )
}

export default MenuList
