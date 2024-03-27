import { useState } from "react"
import { FaCheck } from "react-icons/fa6"

function Contact() {

        const [formData, setFormData] = useState({
                name: "",
                email: "",
                message: ""
        });

        const [submitted, setSubmitted] = useState(false);
        
        const handleChange = (e) => {
                const {name , value} = e.target;
                setFormData({
                        ...formData,
                        [name]:value,
                });
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                console.log("Form Send")
                setSubmitted(true)
        }

        return (

                <div className="contact-container">
                        <h2>Enviame tu mensaje</h2>
                        {submitted
                                ? (
                                        <p className="submitted-message"> Se envio el formulario</p>
                                )
                                : (
                                        <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                        <label htmlFor="name"> Name: </label>
                                                        <input
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                required
                                                        />
                                                </div>
                                                <div className="form-group">
                                                        <label htmlFor="email"> Email: </label>
                                                        <input
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                required
                                                        />
                                                </div>
                                                <div className="form-group">
                                                        <label htmlFor="message"> Message: </label>
                                                        <textarea
                                                                type=""
                                                                id="message"
                                                                name="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                required
                                                        />
                                                </div>
                                                <a href="mailTo:marcospalo22@gmail.com">
                                                        <button className="submit-btn">
                                                                {" "}
                                                                Sumbit
                                                                <FaCheck></FaCheck>
                                                        </button>
                                                </a>
                                        </form>
                                )
                        }

                </div>

        )
}

export default Contact