export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <h3>Алігатор</h3>
                    <p>Готельний розважально-оздоровчий комплекс "АЛIГАТОР"</p>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                    <div className="copyright">
                        &copy; Copyright <strong><span>Green</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            
            <section id="topbar" className="d-flex align-items-center fixed-bottom">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope-fill"></i><a href="alligator.hotel@gmail.com">alligator.hotel@gmail.com</a>
                        <i className="bi bi-phone-fill phone-icon"></i> +38 (067) 555 6 888
                    </div>
                    <div className="social-links d-none d-md-block">
                        <a href="https://www.facebook.com/alligator.te.ua/" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/alligator.te.ua/" className="instagram"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}