import { Link } from "react-router-dom"
import { Type } from "./Type"
import MiFoto from '../images/MiFoto.png'
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

function Home() {
  return (
        <div className="HomePage">
        <div className="HomeText">
                <h1>Hola Mundo!!!</h1>
                <h1>
                        <b>Soy Marcos Palo</b>
                </h1>

                <Type/>
                
                <Link to = '/About'>
                        <button>
                                About me <BsPerson></BsPerson>
                        </button>
                </Link>

                <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJfmrJhSGRsbxjCkMmPhbVPfgVHKpBZtsgdTWVCjZjgXDJkZHRbjbJnHrWLmCbVzJbrBNqV" target="_blank">
                        <button>
                                Contact <CgPhone></CgPhone>
                        </button>
                </a>
        </div>
        
        <img className="Avatar" src={MiFoto} alt='' />

    </div>
  )
}

export default Home
