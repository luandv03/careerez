import { Routes, Route } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp/LayoutApp";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutApp />}></Route>
                <Route path="/signin" element={<AuthLayout />}></Route>
            </Routes>
        </>
    );
}
