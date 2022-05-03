import React, {useState} from "react";
import "./Home.css";

const Home = () => {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert(`please add your name ${text}`);
            return;
        }
    }
    return (
        <>
            <div className="sect" id="home">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__sign--up">
                                <h2>Get A Quote</h2>
                                <div className="card__front--name">
                                    <input type="text" pattern="[a-zA-Z]{5,}" maxLength="25" name="name" onChange={(e) => setText(e.target.value)} value={text} placeholder="NAME" />
                                    
                                </div>
                                <div className="card__front--email">
                                    <input type="text" name="email" placeholder="EMAIL" required />
                                    
                                </div>
                                <div className="card__front--phone">
                                    <input type="tel" name="phone" placeholder="PHONE" min="1" max="11" required />
                                </div>
                                <div className="card__front--message">
                                    <textarea rows="8" col="20" placeholder="MESSAGE"/>
                                </div>
                                <button className="btn btn--white btn--animated">Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/* <a href="#section-tours" className="btn btn--white btn--animated">Discover our tours</a> */}
        </>
    );
};

export default Home;