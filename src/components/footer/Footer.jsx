import './footer.css'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import dining from '../../img/dining.jpg'
import furniture from '../../img/furniture.jpg'
import house from '../../img/house.jpg'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerLeft">
                <div className='footerLeftItem'>
                    <h1 className="footerTitle">Shopnik</h1>
                    <div className="footerTitleIcon"></div>
                </div>
                <p className="footerDesc">
                    Lorem ipsum dolor sit amet.consect etuer adipiscing elit. sed diam nonu mmy nibh euismod tincidunt ut laareet dolore mag.
                </p>
            </div>

            <div className="footerLinks">
                <div className="footerLinksItem">
                    <div className="footerTitle">CONTACT US</div>

                    <div className="footerLinkInfo">
                        <LocalPhoneOutlinedIcon className='footerIcon' />
                        <span>(+88) 1234 567898</span>
                    </div>

                    <div className="footerLinkInfo">
                        <MailOutlineOutlinedIcon className='footerIcon'/>
                        <span>shopnik@gmail.com</span>
                    </div>

                    <div className="footerLinkInfo">
                        <MapOutlinedIcon className='footerIcon'/>
                        <span>469 Hag Camp Road, Illionois</span>
                    </div>

                    <div className="footerSocial">
                        <div className="footerSocialItem"><FacebookIcon/></div>
                        <div className="footerSocialItem"><TwitterIcon/></div>
                        <div className="footerSocialItem"><LinkedInIcon/></div>
                        <div className="footerSocialItem"><InstagramIcon/></div>
                    </div>
                </div>
            </div>

            <div className="footerLinks">
                <div className="footerLinksItem">
                    <div className="footerTitle">USEFUL LINKS</div> 
                    <div className="footerLinksList">
                        <div className="footerLinksItem">About Shopnik.</div>
                        <div className="footerLinksItem">Contact us</div>
                        <div className="footerLinksItem">FAQ</div>
                        <div className="footerLinksItem">Supports</div>
                        <div className="footerLinksItem">Blog</div>
                        <div className="footerLinksItem">Privacy Policy</div>
                    </div>
                </div>
            </div>

            <div className="footerLinks">
                <div className="footerLinksItem">
                    <div className="footerTitle">LATEST NEWS</div>
                    <div className="footerLatest">
                        <img className='Footerimg' src={furniture} alt="" />
                        <div className="footerLatestInfo">
                            <div className="footerLatestTitle">Furniture Decorate Idea.</div>
                            <div className="footerLatestDesc">October 20, 2015</div>
                        </div>
                    </div>

                    <div className="footerLatest">
                        <img className='Footerimg' src={house} alt="" />
                        <div className="footerLatestInfo">
                            <div className="footerLatestTitle">Decorate your Idea.</div>
                            <div className="footerLatestDesc">October 20, 2015</div>
                        </div>
                    </div>

                    <div className="footerLatest">
                        <img className='Footerimg' src={dining} alt="" />
                        <div className="footerLatestInfo">
                            <div className="footerLatestTitle">Dining Table Decorate.</div>
                            <div className="footerLatestDesc">October 20, 2015</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
