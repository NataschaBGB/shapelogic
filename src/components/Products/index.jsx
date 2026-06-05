import './products.sass';


export default function Products() {

    return (
        <section className="products">

            <div className="container">
                <h1>Vores Tjenester</h1>
                <div className="product-list">
                    
                    <div className="product-item">
                        <h2>Webudvikling</h2>
                        <p>Vi skaber moderne og responsive hjemmesider, der er skræddersyet til dine behov.</p>
                    </div>
                    <div className="product-item">
                        <h2>Softwareudvikling</h2>
                        <p>Vi udvikler skræddersyede softwareløsninger, der optimerer dine forretningsprocesser.</p>
                    </div>
                    <div className="product-item">
                        <h2>Digital Markedsføring</h2>
                        <p>Vi hjælper dig med at nå din målgruppe gennem effektive digitale marketingstrategier.</p>
                    </div>

                </div>
            </div>
        </section>
    );

}