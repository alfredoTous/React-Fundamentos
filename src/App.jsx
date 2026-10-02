import Header from "./components/Header";
import Banner from "./components/Banner";
import CoursesSection from "./components/CoursesSection";
import CounterSection from "./components/CounterSection";
import Footer from "./components/Footer"
import Login from "./components/Login"
import PaginaNoEncontrada from "./components/PaginaNoEncontrada"
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
