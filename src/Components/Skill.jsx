import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaNode,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiCsharp, SiCplusplus, SiExpress } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

export const Skill = ({ skill }) => {
  const icons = {
    HTML: <FaHtml5></FaHtml5>,
    CSS: <FaCss3></FaCss3>,
    Npm: <FaNpm></FaNpm>,
    JavaScript: <DiJavascript1></DiJavascript1>,
    MonogoDB: <DiMongodb></DiMongodb>,
    Bootstrap: <FaBootstrap></FaBootstrap>,
    React: <FaReact></FaReact>,
    Node: <FaNode></FaNode>,
    Express: <SiExpress></SiExpress>,
    GitHub: <FaGithub></FaGithub>,
    Git: <FaGitAlt></FaGitAlt>,
    Cplus: <SiCplusplus ></SiCplusplus >,
    Csharp: <SiCsharp></SiCsharp>,
    SQL: <BsFiletypeSql></BsFiletypeSql>


  }

  return (
    <div title={skill} className="SkillBox">
      {icons[skill]}
    </div>

  )
}
