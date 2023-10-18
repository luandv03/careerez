import { Routes, Route } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp/LayoutApp";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Personality } from "./components/Personality";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutApp />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/personality_test" element={<Personality />} />
                </Route>
                <Route path="/signin" element={<AuthLayout />}></Route>
            </Routes>
        </>
    );
}
