import { tableClasses } from '@mui/material'
import table from '../../img/table.webp'
import './product.css'

const Product = () => {
    return (
        <div className='product'>
            <div className="productContainer">
                <div className='gridFirst'>
                    <div className="imgContainer">
                        <img
                        className='imgProduct'
                        src={table} alt="" />

                    </div>
                    <div className="productInfoContainer">
                        <div className="productInfo">#NEW ARRIVALS</div>
                        <div className="productTitle">Suitable Wood Tool</div>
                        <span className="productDesc">SHOP NOW</span>
                    </div>
                </div>
                <div className='gridSecond'>

                    <img 
                    className='imgProduct'
                    src={table} alt="" />
                    <div className="productInfoContainer">
                        <div className="productInfo">#NEW ARRIVALS</div>
                        <div className="productTitle">Suitable Wood Tool</div>
                        <span className="productDesc">SHOP NOW</span>
                    </div>
                </div>
                <div className='gridThird'>
                    <div className="imgContainer">
                        <img className='imgProductThird' src={table} alt="" />
                    </div>
                </div>
                <div className='gridFour'>
                    <div className="imgContainer">
                        <img className='imgProduct' src={table} alt="" />
                    </div>
                </div>
                <div className='gridFive'>
                    <div className="imgContainer">
                        <img src={table} alt="" className="imgProduct" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
