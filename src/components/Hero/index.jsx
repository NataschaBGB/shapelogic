"use client";
import React from 'react';
import './hero.sass';


export default function Hero() {

    return (
        
        <section className="hero">

            <svg height={302.224} width={1228.8} viewBox="0 0 1228.8 302.224" fill="none" xmlns="http://www.w3.org/2000/svg">
        
                {/* 0 x -------------A> */}
                {/* y                   */}
                {/* |                   */}
                {/* |                   */}
                {/* |                   */}
                {/* v    B         C    */}

                <polygon
                    // øverste hjørne er x 800 og y 0
                    // nederste højre hjørne er x 700 og y 600
                        // sæt x til at blive udregnet fra at det hjørne skal have en vinkel på 110 grader
                    // nederste venstre hjørne er x 0 og y 600
                    // A = (1228.8, 0) x er 1228.8 fordi trekanten er 1228.8 bred
                    // B = (0, 302.224)
                    // C = (1195.8, 376.34)
                    points="1228.8,0 1202.46,302.224 0,302.224" 
                    fill="#56A374" 
                    stroke="#56A374"
                />
            </svg>

            <div className="container">

                <h1>Velkommen til Shape<span>Logic</span></h1>
            
                <h2>Vi skaber digitale løsninger</h2>
                
                <p>Moderne hjemmesider med fokus på brugeroplevelse, performance og design.</p>
                
                <button>Se vores projekter</button>

            </div>

        </section>
    
    );

}