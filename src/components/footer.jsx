import '../styles/footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-web'>
                <p>2024 © Digital Academy 360 Pvt. Ltd. All rights reserved.</p>
            </div>
            <div className='footer-mobile'>
                <div>
                    <i class="ri-phone-line footer-mobile-icon"></i>
                    <span>call</span>
                </div>
                <div>
                    <i class="ri-whatsapp-line footer-mobile-icon"></i>
                    <span>whatsapp</span>
                </div>
            </div>
                <div className="footer-for-all">
                    <i class="ri-whatsapp-line whatsapp"></i>
                    <i class="ri-phone-line phone"></i>
                </div>

        </footer>
    )
}