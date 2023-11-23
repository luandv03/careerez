import { JobSimulation } from "../JobSimualtion";
import { JobSimulationUser } from "../JobSimulationUser";

export const JobDetail = () => {
    return (
        <>
            {JSON.parse(localStorage.getItem("isAuthenticated") as string) ? (
                <JobSimulationUser />
            ) : (
                <JobSimulation />
            )}
        </>
    );
};
