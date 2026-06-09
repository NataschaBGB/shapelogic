import './keyboard.sass';


export default function Keyboard() {

    return (
        <section className="keyboard">

            <div className="container">
                <div className="keyboard__content">
                    
                    <div className="keyboard__row-1 keyboard__button-row">
                        <button className="keyboard__button">Esc</button>
                        <button className="keyboard__button">1</button>
                        <button className="keyboard__button">2</button>
                        <button className="keyboard__button">3</button>
                        <button className="keyboard__button">4</button>
                        <button className="keyboard__button">5</button>
                        <button className="keyboard__button">6</button>
                        <button className="keyboard__button">7</button>
                        <button className="keyboard__button">8</button>
                        <button className="keyboard__button">9</button>
                        <button className="keyboard__button">0</button>
                        <button className="keyboard__button">+ ?</button>
                        <button className="keyboard__button">|</button>
                        <button className="keyboard__button keyboard__button-backspace">Back</button>
                    </div>
                    
                    <div className="keyboard__row-2 keyboard__button-row">
                        <button className="keyboard__button">tab</button>
                        <button className="keyboard__button">Q</button>
                        <button className="keyboard__button">W</button>
                        <button className="keyboard__button">E</button>
                        <button className="keyboard__button">R</button>
                        <button className="keyboard__button">T</button>
                        <button className="keyboard__button">Y</button>
                        <button className="keyboard__button">U</button>
                        <button className="keyboard__button">I</button>
                        <button className="keyboard__button">O</button>
                        <button className="keyboard__button">P</button>
                        <button className="keyboard__button">Å</button>
                        <button className="keyboard__button">'</button>
                        <button className="keyboard__button">^</button>
                    </div>
                    
                    <div className="keyboard__row-3 keyboard__button-row">
                        <button className="keyboard__button">CAPS</button>
                        <button className="keyboard__button">A</button>
                        <button className="keyboard__button">S</button>
                        <button className="keyboard__button">D</button>
                        <button className="keyboard__button">F</button>
                        <button className="keyboard__button">G</button>
                        <button className="keyboard__button">H</button>
                        <button className="keyboard__button">J</button>
                        <button className="keyboard__button">K</button>
                        <button className="keyboard__button">L</button>
                        <button className="keyboard__button">Ø</button>
                        <button className="keyboard__button">Æ</button>
                        <button className="keyboard__button keyboard__button-enter">enter</button>
                    </div>
                    
                    <div className="keyboard__row-4 keyboard__button-row">
                        <button className="keyboard__button">shift</button>
                        <button className="keyboard__button">\</button>
                        <button className="keyboard__button">Z</button>
                        <button className="keyboard__button">X</button>
                        <button className="keyboard__button">C</button>
                        <button className="keyboard__button">V</button>
                        <button className="keyboard__button">B</button>
                        <button className="keyboard__button">N</button>
                        <button className="keyboard__button">M</button>
                        <button className="keyboard__button"><p>;</p><p>,</p></button>
                        <button className="keyboard__button"><p>:</p><p>.</p></button>
                        <button className="keyboard__button"><p>_</p><p>-</p></button>
                        <button className="keyboard__button keyboard__button-PgUp">PgUp</button>
                        <button className="keyboard__button keyboard__button-up">up</button>
                        <button className="keyboard__button keyboard__button-PgDn">PgDn</button>
                    </div>

                    <div className="keyboard__row-5 keyboard__button-row">
                        <button className="keyboard__button">fn</button>
                        <button className="keyboard__button">ctrl</button>
                        <button className="keyboard__button">win</button>
                        <button className="keyboard__button">alt</button>
                        <button className="keyboard__button keyboard__button-space"></button>
                        <button className="keyboard__button">altgr</button>
                        <button className="keyboard__button">prc scr</button>
                        <button className="keyboard__button">ctrl</button>
                        <button className="keyboard__button">left</button>
                        <button className="keyboard__button">down</button>
                        <button className="keyboard__button">right</button>
                    </div>

                </div>
            </div>
        </section>
    )

}