import Logo from '../../assets/logo_footer.png'
import './footer.css'

//! Footer de la page 
function Footer() {
    return(
        <div className='footer'>
            <div className='footer-conatainer'>
                <img className='footer-logo' src={Logo} alt='logo'/>
                <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer