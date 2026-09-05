import CourseCard from "./CourseCard";
import './CoursesSection.css';

import reactIcon  from '../assets/react-icon-svg.webp'
import cycleIcon  from '../assets/cycle-icon.png'
import folderIcon from '../assets/folder-icon-svg.webp'
import coheteIcon from '../assets/cohete-icon-svg.webp'


function CoursesSection()
{

    const cursos = [
        { logo: reactIcon, alt: "Icono React", title: "React Basico", description: "Componentes, props, estado y eventos. Todo lo que necesitas para empezar", difficulty: "Principiante" },

        { logo: cycleIcon, alt: "Icono Ciclo", title: "React Hooks", description: "Profundiza en useState, useEffect y crea tus propios custom hooks.", difficulty: "Intermedio" },

        { logo: folderIcon, alt: "Icono Folder", title: "Estado Global", description: "Gestiona el estado con Context API y aprende cuando usarlo.", difficulty: "Intermedio" },

        { logo: coheteIcon, alt: "Icono Cohete", title: "React Avanzado", description: "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.", difficulty: "Avanzado" },
    ]

    return (
        <div id="cursos" className="coursesSection">
            <h2>Nuestros Cursos</h2>
            <p>Elige el camino que mejor se adapte a ti</p>
            <div className="coursesSection__cards">
                {cursos.map((curso, index) => {
                    return <CourseCard key={index} curso={curso}/>
                })}
            </div>
        </div>
    )
}

export default CoursesSection;
