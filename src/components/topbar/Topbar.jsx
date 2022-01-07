import './topbar.css'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="left">
                    <span className='contact'>+980 1234 567898</span>
                    <div className="icon"></div>
                    <span className="contactEmail">shopnik@gmail.com</span>
                </div>

                <div className="right">
                    <div className="rightList">
                        <span className="rightItems">account</span>
                        <div className="icon"></div>
                        <span className="rightItems">wishlist</span>
                        <div className="icon"></div>
                        <span className="rightItems">blog</span>
                        <div className="icon"></div>
                        <span className="rightItems">log in</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
