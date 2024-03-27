import APIrest from '../images/APIrest.png'
import ShopApp from '../images/ShopApp.png'
import Movie from '../images/MovieApp.png'
import Nike from '../images/NikePage.png'
import Tateti from '../images/TATETI.png'
import { ProjectBox } from './ProjectBox'


function Projects() {
  return (
    <div>
      <h1 className='projectHeading'>
        Mis <b>Proyectos</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={ShopApp} projectName="Shop"></ProjectBox>
        <ProjectBox projectPhoto={Movie} projectName="Movie"></ProjectBox>
        <ProjectBox projectPhoto={Nike} projectName="Nike"></ProjectBox>
        <ProjectBox projectPhoto={Tateti} projectName="Tateti"></ProjectBox>
        <ProjectBox projectPhoto={APIrest} projectName="API"></ProjectBox>
      </div>
    </div>
  )
}

export default Projects
