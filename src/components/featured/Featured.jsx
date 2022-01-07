import './featured.css'
import background from '../../img/background.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredWrapper">
                <div className="featuredInfo">
                    <span className="featuredTitle">Shopnik. <span>Number #1 Trusted</span> </span>
                    <div className="featuredSubTitle">Furniture Website</div>
                    <div className="featuredDesc">coming soon in your door with a huge discount</div>

                    <div className="featuredButton">
                        <div className='featuredView'>VIEW NOW</div>

                        <div className="featuredViewBottom">
                            <pre>
                                <a style={{fontWeight: '600'}}>BACK  |</a>  <a style={{fontWeight: '300'}}>NEXT</a>

                            </pre>                          
                        </div>
                    </div>
                </div>
                <div className="imgContainer">
                    <img
                     className='featuredImg' 
                     src={background} alt="" />
                </div>
            </div>

            <div className="featuredProductContainer">
                <div className="featuredProduct">
                    <img src="" alt="" />

                    <div className="featuredProductInfo">
                        <div className="featuredProductTitle">COMFORTABLE <a style={{fontWeight: 'bold'}}>CHAIR</a> </div>
                        <p className="producDesc">Domad as farmer time of very might vows trial of very might vows trial Road  Its clarinet expect.</p>
                        <span className='featuredProductView'>VIEW NOW</span>
                    </div>
                </div>

                <div className="featuredProduct">
                    <img src="" alt="" />

                    <div className="featuredProductInfo">
                        <div className="featuredProductTitle">LUXURIOUS NEW <a style={{fontWeight: 'bold'}}>DESK</a> </div>
                        <p className="produopcDesc">As shoulders ship first uninitiated theory mathematically trying. Nor some the measures arrived.</p>
                        <span className='featuredProductView'>VIEW NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
