import './header.sass';
import Link from 'next/link';


export default function Header() {
    
    return (
        
        <header className="header">

            <div className="container">

                <Link href="/" className="header__logo">
                    <img src="/shapelogic/shapelogic_logo.png" alt="ShapeLogic Logo" className="header__logo-image" />
                    <h1 className="header__title">Shape<span>Logic</span></h1>
                </Link>
                
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <Link href="/produkter" className="header__nav-link">Produkter</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link href="/tastatur" className="header__nav-link">Keyboard</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link href="/" className="header__nav-link">Om os</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link href="/" className="header__nav-link">Kontakt</Link>
                        </li>
                        <li className="header__nav-item">
                            <button className="header__nav-button">Meet'n Greet</button>
                        </li>
                    </ul>
                </nav>

            </div>

            

        </header>
        
    );

}