import CourseCard from "./CourseCard";
import './CoursesSection.css';

function CoursesSection()
{
    return (
        <div className="coursesSection">
            <h2>Nuestros Cursos</h2>
            <p>Elige el camino que mejor se adapte a ti</p>
            <div className="coursesSection__cards">
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
                <CourseCard/>
            </div>
        </div>
    )
}

export default CoursesSection;
