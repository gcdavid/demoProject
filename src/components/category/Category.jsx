import './category.css'
import { category } from '../../data'
const Category = () => {
    return (
        <div className='category'>
            {category.map((item) => (
                <img className='categoryImg' key={item.id} src={item.img}/>
            ))}
            <button className="categoryButton">
                    <pre>I N S T A G R A M</pre>
                </button>
        </div>
    )
}

export default Category
