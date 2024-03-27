import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export const ProjectBox = ({ projectName, projectPhoto }) => {

  const desc = {
    ShopDesc: "Uno de los tres proyectos que hice con React, al igual que los demás, aplicamos una petición HTTP a una API con diversos productos de venta. Sumando algunos elementos de UI Material, quedó como resultado esta aplicación web. ",
    ShopGitHub: "https://github.com/Matos221/React-Carrito-Compras",
    ShopLink: "https://carrito-compras-matos.netlify.app/",

    TatetiDesc: "Juego TA-TE-TI realizado en React y Vite. Centrado en practicar useState, almacenamiento en el storage y muchas cosas más.",
    TatetiGitHub: "https://github.com/Matos221/TA-TE-TI",
    TateiLink: "https://marcosdevs-tateti.netlify.app/",

    APIDesc: "Creación de un servidor con base de datos Mongo usando Node, Express Js, Mongoose y Docker. Es el proyecto final del curso de Node Js en el que participe.",
    APIGitHub: "https://github.com/Matos221/node_API_rest_mongo",
    APILink: "https://nodeapirestmongo-production-4983.up.railway.app/books",

    MovieDesc: "Uno de mis primeros proyectos con React, enfocado en realizar una petición HTTP a una API con lista de películas. Objetivo de este proyecto, empezar con el trabajo de API´s y uso de los ganchos básicos.",
    MovieGitHub: "https://github.com/Matos221/Buscador-Peliculas",
    MovieLink: "https://buscadorpeliculas2.netlify.app/",

    NikeDesc: "Como primer proyecto web cree esta página web, copiando un estilo de los sitios promocionales de marcas de ropa. Tiene implementada una petición a una API local de la página para cambiar el estado de los precios.",
    NikeGitHub: "https://github.com/Matos221/Nike-Copy",
    NikeLink: "https://marcosdevs-nike.netlify.app/",
  }

  return (
    <div className="projectBox">
      <img src={projectPhoto} alt="Project display" className="projectPhoto" />
      <div>

        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "GitHub"]} target="_blank">
          <button className="projectbtn">
            <FaGithub className="icono"></FaGithub> GitHub
          </button>
        </a>

        <a href={desc[projectName + "Link"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument className="icono"></CgFileDocument> Site
          </button>
        </a>

      </div>
    </div>
  )
}
