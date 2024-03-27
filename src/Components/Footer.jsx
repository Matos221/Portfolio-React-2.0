import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";


function Footer() {

        const date = new Date();
        let year = date.getFullYear();


        return (
                <footer>
                        <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
                        <div className="footerLinks">
                                <a href="https://www.instagram.com/_marcos.palo/" target="_blank">
                                        <SlSocialInstagram id="instagram" ></SlSocialInstagram>
                                </a>

                                <a href="https://github.com/Matos221" target="_blank">
                                        <FaGithub id="github"></FaGithub>
                                </a>

                                <a href="https://www.linkedin.com/in/marcos-developer221/" target="_blank">
                                        <SlSocialLinkedin id="linkedin"></SlSocialLinkedin>
                                </a>
                        </div>
                </footer>
        )
}

export default Footer
