import './stylish.css'
import { bestseller, Featured, newArrival } from '../data'
import minimalChair from '../img/minimalChair.png'

const Stylish = () => {
    return (
        <div className='stylish'> 
            <div className="stylishContainer">
            <div className="stylishIntro">
                <h2 className="stylishTitle">STYLISH <a style={{fontWeight: '400'}}>MINIMAL CHAIR</a></h2><br/>
                <span className="stylishView">VIEW NOW</span>   
            </div>

            <div className="ImagContainer">
                <img src={minimalChair} alt="" className="stylishImg" />
            </div>        
        </div>

        <ul className="stylishItem">
            <li className="stylishLink">
                BESTSELLER
                <div className="stylishProductInfo">
                    {bestseller.map((item) => (
                        <div className="stylishWrapper">                      
                        <div className="imgContainer">
                            <img key={item.id} src={item.img} alt="" className="img" />
                        </div>
                            <div className="productContent">
                                <h5 className="title">{item.title}</h5>
                                <span className='price'>${item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </li>

            <li className="stylishLink">
                NEW ARRIVAL
                <div className="stylishProductInfo">
                    {newArrival.map((item) => (
                        <div className="stylishWrapper">                      
                            <div className="imgContainer">
                                <img key={item.id} src={item.img} alt="" className="img" />
                            </div>

                        <div className="productContent">
                                <h5 className="title">{item.title}</h5>
                                <span className='price'>${item.price}</span>
                            </div>
                        </div>
                    ))}                   
                </div>
            </li>
            
            <li className="stylishLink">
                FEATURED
                <div className="stylishProductInfo">
                    {Featured.map((item) => (
                        <div className="stylishWrapper">                      
                            <div className="imgContainer">
                                <img key={item.id} src={item.img} alt="" className="img" />
                            </div>

                        <div className="productContent">
                                <h5 className="title">{item.title}</h5>
                                <span className='price'>${item.price}</span>
                            </div>
                        </div>
                    ))}                    
                </div>
            </li>

        </ul>
        </div>
    )
}

export default Stylish 
 