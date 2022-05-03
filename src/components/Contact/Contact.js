import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(`Pls enter your information ${name}`);

    }

    const [modal, setModal] = useState(true);

    const handleModal = ()=> {
        setModal(!modal)
    }

    const x = 'contact';

  return (
    <>
        <div className='Contact__Page' id='contact'>
            <div className='Contact__Box'>
                <div className='Contact__Info'>
                    <span>Have any question about our work ?</span>
                    <span href='#btn' className='btn  btn--white btn--animated ' onClick={handleModal}>{x.toUpperCase()}</span>
                </div>
                <div className={`Contact__Form ${modal ? 'showModal': ""}`}>
                    <span className='Contact__Times' onClick={handleModal} >&times;</span>
                    <form className='Contact__Form--wrap' onSubmit={handleSubmit}>
                        <div className='Contact__Input--Name'>
                            <label htmlFor='Name'>Full Name:</label>
                            <input type='text' name="username" value={name.username || ""} onChange={(e) => setName(e.target.value)} placeholder="Meshach Ekene" className='FullName' />
                        </div>
                        <div className='Contact__Input--Email'>
                            <label htmlFor='Name'>Email:</label>
                            <input type='email' name="email" value={name.email || ""} placeholder="pls enter your mail" className='Email' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='Contact__TextArea'>
                            <textarea cols="30" rows="10" placeholder='pls send me your message' className="textarea" />
                        </div>
                        <button value="submit">submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;