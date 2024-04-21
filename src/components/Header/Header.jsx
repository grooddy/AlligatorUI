import './Header.css'
import NavigationSection from './NavigationSection'


export default function Header() {
    return (
        <>


            <header id="header" className="d-flex align-items-center sticky-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="/">ALLIGATOR</a></h1>
                    {//<a href="index.html" className="logo me-auto "><div className='navbar-brand-logo'></div></a>
                    }
                    <NavigationSection />       
                </div>
            </header>
        </>
    )
}