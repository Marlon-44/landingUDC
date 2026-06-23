import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../layout"
import { Home } from "../pages/Home"

export const AppRouter =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}