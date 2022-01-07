import './menu.css'
import furniture from '../../img/furniture.jpg'

const Menu = () => {
    return (
        <div className='menu'>
            <div className="menuContainer">
                <div className="menuImgContainer">
                    <img className='menuImg' src={furniture} alt="" />            
                </div>

                <div className="infoContainer">
                    <div className="infoTitle">Buckle Wrap Wooden Table</div>
                    <div className="infoPrice">$52.00</div>
                </div>

                
            </div>
        </div>
    )
}

export default Menu

