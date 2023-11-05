import { Routes, Route } from "react-router-dom";
import LayoutApp from "./layouts/LayoutApp/LayoutApp";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Personality, MBTITest } from "./components/Personality";
import { Signin } from "./components/Signin/Signin";
import { CareerExperience } from "./components/CareerExperience";
import { CourseDetail } from "./components/Course/CourseDetail";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutApp />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/personality_test" element={<Personality />} />
                    <Route
                        path="/career_experience"
                        element={<CareerExperience />}
                    />
                    <Route path="/mbti_test" element={<MBTITest />} />
                    <Route
                        path="/course/detail/:courseId"
                        element={<CourseDetail />}
                    />
                </Route>
                <Route path="/signin" element={<AuthLayout />}>
                    <Route path="/signin" element={<Signin />} />
                </Route>
            </Routes>
        </>
    );
}
