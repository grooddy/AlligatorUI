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

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}