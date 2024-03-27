import { FaFileDownload } from "react-icons/fa";
import Resume from "../assets/CV";
import { Skill } from "./Skill";

function About() {
        return (
                <>
                        <div className="AboutPage">
                                <div className="AboutText">
                                        <h1 className="AboutTextHeading"> Conóceme un <b>poco más</b></h1>

                                        <p>
                                                ¡Hola! Soy <b>Marcos Ariel Palo</b>, estudiante de <b>Ingeniería en Sistemas</b> en la UTN. Además de desarrollador <b>frontend y backend</b>. <br />

                                                <br />
                                                Como Frontend Developer, he trabajado extensamente con tecnologías como <b>HTML</b>, <b>CSS</b> y <b>JavaScript</b>, especialmente en el marco de <b>React.js</b>, creando experiencias de usuario dinámicas e interactivas. Además, he incursionado en el mundo del desarrollo <b>backend</b> con <b>Node.js</b>, construyendo <b>APIs REST</b> robustas y escalables, respaldadas por bases de datos <b>MongoDB</b>.<br />

                                                <br />

                                                En el ámbito de <b>.NET Development</b>, he desarrollado habilidades sólidas en <b>C#</b> y <b>C++</b>, contribuyendo a proyectos como un juego inspirado en el clásico Ahorcado, donde pude aplicar conceptos de programación orientada a objetos y lógica de programación avanzada.<br />

                                                <br />

                                                Entre mis logros destacados se encuentran <b>proyectos</b> como un carrito de compras implementado con React.js, donde no solo puse en práctica mis habilidades de frontend, sino también mi capacidad para <b>integrar sistemas</b> complejos y asegurar una <b>experiencia de usuario</b> fluida.<br />

                                                <br />

                                                Actualmente, mi objetivo es fusionar mis habilidades técnicas con mi pasión por el aprendizaje continuo, buscando oportunidades que desafíen mis límites y me permitan crecer profesionalmente en el emocionante mundo del desarrollo de software.<br />

                                        </p>
                                        <a href={Resume} download="Resume.pdf" className="resume-btn">
                                                <button>
                                                        Descargar CV <FaFileDownload />
                                                </button>
                                        </a>
                                </div>
                        </div>

                        <h1 className="SkillsHeading"> Skillset</h1>
                        <div className="skills">
                                <Skill skill="HTML"></Skill>
                                <Skill skill="CSS"></Skill>
                                <Skill skill="JavaScript"></Skill>
                                <Skill skill="React"></Skill>
                                <Skill skill="Node"></Skill>
                                <Skill skill="Express"></Skill>
                                <Skill skill="MonogoDB"></Skill>
                                <Skill skill="Bootstrap"></Skill>
                                <Skill skill="Npm"></Skill>
                                <Skill skill="GitHub"></Skill>
                                <Skill skill="Git"></Skill>
                                <Skill skill="Cplus"></Skill>
                                <Skill skill="Csharp"></Skill>
                                <Skill skill="SQL"></Skill>
                        </div>
                </>
        )
}

export default About


