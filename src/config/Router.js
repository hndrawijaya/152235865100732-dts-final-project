import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";


const Router = () => {
        return (
                <>
                        <BrowserRouter>
                                <Routes>
                                        <Route path='/' 
                                        element={
                                                <ProtectedRoute>
                                                        <Home />
                                                </ProtectedRoute>
                                        } />
                                </Routes>
                        </BrowserRouter>
                </>
        );
}

export default Router;