import './products.sass';


export default function Products() {

    return (
        <section className="products">

            <div className="container">
                <h1>Vores Udvalg</h1>
                <div className="products__list">
                    
                    <div className="products__item">
                        <h2>Gaming Monitor</h2>
                        <img src="/shapelogic/monitor.png" alt="Gaming Monitor" className="product-image" />
                        <p>2999 kr.</p>
                    </div>

                    <div className="products__item">
                        <h2>Gaming Bundle</h2>
                        <img src="/shapelogic/gamingbundle.png" alt="Gaming Bundle" className="product-image" />
                        <p>5999 kr.</p>
                    </div>

                    <div className="products__item">
                        <h2>Keyboard og Mus</h2>
                        <img src="/shapelogic/keyboardmouse.jpg" alt="Keyboard og Mus" className="product-image" />
                        <p>899 kr.</p>
                    </div>

                    <div className="products__item">
                        <h2>Gaming Headset</h2>
                        <img src="/shapelogic/headset.jpg" alt="Gaming Headset" className="product-image" />
                        <p>699 kr.</p>
                    </div>

                    <div className="products__item">
                        <h2>Gaming Bundle</h2>
                        <img src="/shapelogic/gamingbundle.png" alt="Gaming Bundle" className="product-image" />
                        <p>5999 kr.</p>
                    </div>

                    <div className="products__item">
                        <h2>Gaming Monitor</h2>
                        <img src="/shapelogic/monitor.png" alt="Gaming Monitor" className="product-image" />
                        <p>2999 kr.</p>
                    </div>

                </div>
            </div>
        </section>
    );

}