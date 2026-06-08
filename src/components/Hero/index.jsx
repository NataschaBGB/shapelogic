"use client";
import React from 'react';
import './hero.sass';


export default function Hero() {

    return (
        
        <section className="hero">

            <svg height={302.224} width={1000} viewBox="0 0 1000 302.224" fill="none">
                <polygon
                    // 1. øverste hjørne - A
                    // 2. nederste højre hjørne - C
                    // 3. nederste venstre hjørne - B
                    // 
                    // A = (1000, 0)
                    //      - x er 1000 fordi side b er 1000 bred og derfor bevæger sig 1000 mod højre
                    //      - y er 0 fordi det er det øverste hjørne og derfor ikke har nogen højde
                    // B = (0, 302.224)
                    //      - x er 0 fordi det er det venstre hjørne og derfor ikke har nogen bredde
                    //      - y er 302.224 fordi den er 80% af 377.8 som er hero'ens højde
                    // C = (973.66, 302.224)
                    //      - x er 973.66 fordi den har en vinkel på 95 grader og derfor er 26.34 mindre end 1000
                    //          - Dette er udregnet ved at bruge cosinus til at finde side a's vandrette bevægelse:
                    //              302.224 * cos(95°) = -26.34 (negativ fordi det bevæger sig mod venstre)
                    //      - y er 302.224 fordi hjørnet skal sidde på bundlinjen og have samme højde som B's y-værdi
                    points="1000,0 973.66,302.224 0,302.224" 
                    fill="#56A374" 
                    stroke="#56A374"
                />
            </svg>

            <div className="container">

                <h1>Velkommen til Shape<span>Logic</span></h1>
            
                <h2>Gaming udstyr til alle</h2>
                
                <p>Vi tilpasser vores udstyr til dine behov og præferencer.</p>
                
                <button>Se vores produkter</button>

            </div>

        </section>
    
    );

}