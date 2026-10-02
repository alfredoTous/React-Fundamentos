import Header from "./components/Header";
import Banner from "./views/Banner";
import CoursesSection from "./views/CoursesSection";
import CounterSection from "./views/CounterSection";
import Footer from "./components/Footer"
import Login from "./views/Login"
import PaginaNoEncontrada from "./views/PaginaNoEncontrada"
import './App.css'

import { Routes, Route } from 'react-router';

function App()
{
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/"         element={<Banner/>}/>
                    <Route path="/login"    element={<Login/>}/>
                    <Route path="/cursos"   element={<CoursesSection/>}/>
                    <Route path="/nosotros" element={<CounterSection/>}/>
                    <Route path="*"         element={<PaginaNoEncontrada/>}/>
                </Routes>
            </main>

            <Footer/>
        </>
    )
}

export default App;
