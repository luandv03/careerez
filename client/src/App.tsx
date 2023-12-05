import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import LayoutApp from "./layouts/LayoutApp/LayoutApp";
import { AuthLayout } from "./layouts/AuthLayout/AuthLayout";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Personality, MBTITest, MBTIResult } from "./components/Personality";
import { Signin } from "./components/Signin/Signin";
import { OverviewCareer } from "./components/OverviewCareer";
import { OverviewCareerDetail } from "./components/OverviewCareerDetail";
import { OnlineInternShip } from "./components/OnlineInternShip";
import { JobSimulation } from "./components/JobSimualtion";
import { JobSimulationUser } from "./components/JobSimulationUser";
import { FAQs } from "./components/FAQs";
import { MemberRegister } from "./components/MemberRegister";
import { Editor } from "./components/Editor";
import { JobDetail } from "./components/JobDetail";
import { MemberRegisterSuccess } from "./components/MemberRegister/MemberRegisterSuccess";
import { CreateTask } from "./components/Task";

export default function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LayoutApp />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/personality_test" element={<Personality />} />
                    <Route path="/istp-personality" element={<MBTIResult />} />
                    <Route
                        path="/career_overview"
                        element={<OverviewCareer />}
                    />
                    <Route path="/mbti_test" element={<MBTITest />} />
                    <Route
                        path="/career_overview/:major_id"
                        element={<OverviewCareerDetail />}
                    />
                    <Route
                        path="/internship_online"
                        element={<OnlineInternShip />}
                    />
                    <Route
                        path="/internship_online/:job_simulation_id"
                        element={<JobSimulation />}
                    />
                    <Route
                        path="/member_register"
                        element={<MemberRegister />}
                    />
                    <Route path="/faqs" element={<FAQs />} />

                    <Route path="/editor" element={<Editor />} />

                    <Route
                        path="/job_simulation/:job_simulation_id/owner"
                        element={<JobSimulationUser />}
                    />

                    <Route
                        path="/job_detail/:job_simulation_id"
                        element={<JobDetail />}
                    />

                    <Route path="/create_task" element={<CreateTask />} />
                </Route>
                <Route path="/signin" element={<AuthLayout />}>
                    <Route path="/signin" element={<Signin />} />
                </Route>

                <Route
                    path="/member_register/:ordere_id/success"
                    element={<MemberRegisterSuccess />}
                />
            </Routes>
        </AnimatePresence>
    );
}
