import Category from '../category/Category'
import './categorylist.css'
import { MapsHomeWorkOutlined } from '@mui/icons-material'

const CategoryList = () => {
    return (
        <div className='categorylist'>
            <Category/>
            <div className="categoryLogoList">
                <div className="categoryBuro">
                    <div className="categoryLogoTitle">Büro</div>
                    <div className="categoryListLine"></div>
                </div>
            
                <div className="categoryVintage">
                    <div className="categoryVintageLogo">
                        <span><MapsHomeWorkOutlined style={{fontSize: '50px',color: 'gray'}}/></span> 
                        <span className="categorytitle">VIN <pre>TAGE</pre> </span>
                    </div>
                    <div className='categorySubtitle'><pre>B O O K S T O R E</pre></div>
                </div>

                <div className="categoryMinimalism">
                    <h3 className='categoryMinimalismTitle'>Minimalism</h3>
                    <pre className='categoryMinimalisSub'>E S T. 1 9 6 9</pre>
                </div>

                <div className="categoryDesign">
                    <pre className="categoryDesignTitle">des!9n</pre>
                </div>

                <div className="categoryVintageHair">
                    <div className="categoryVintageHairTitle">
                        VINTAGE
                        <div className="vintageBorder"></div>
                        <span className='vintageHairSub'><pre>H A I R S T O R E</pre></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryList
