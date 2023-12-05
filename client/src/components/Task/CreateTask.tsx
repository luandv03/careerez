import { Button, Center, Input, Stack, Textarea } from "@mantine/core";

import { jobSimulationService } from "../../services/job_simulation.service";
import { useState } from "react";
import { notifications } from "@mantine/notifications";

export const CreateTask = () => {
    const [job_simulation_id, set_job_simulation_id] = useState("");
    const [task_name, set_task_name] = useState("");
    const [task_time_spaced, set_task_time_spaced] = useState("");
    const [task_des, set_task_des] = useState("");
    const [task_what_learn, set_task_what_learn] = useState("");
    const [task_what_do, set_task_what_do] = useState("");
    const [task_video_intro, set_task_video_intro] = useState("");
    const [task_number, set_task_number] = useState("");
    const [task_level, set_task_level] = useState("");

    const handleCreateTask = async () => {
        const payload = {
            job_simulation_id: Number(job_simulation_id),
            task_name,
            task_time_spaced,
            task_des,
            task_what_learn,
            task_what_do,
            task_video_intro,
            task_number: Number(task_number),
            task_level,
        };
        const res = await jobSimulationService.createTaskByJobId(payload);

        notifications.show({ message: res.message });
    };

    return (
        <Stack p={50}>
            <Center>Create task</Center>
            <Input.Wrapper label="Job Id">
                <Input
                    value={job_simulation_id}
                    onChange={(e) => set_job_simulation_id(e.target.value)}
                />
            </Input.Wrapper>
            <Textarea
                label="Task Name"
                description="Input description"
                placeholder="Input placeholder"
                value={task_name}
                onChange={(e) => set_task_name(e.target.value)}
            />
            <Input.Wrapper label="Time spaced">
                <Input
                    value={task_time_spaced}
                    onChange={(e) => set_task_time_spaced(e.target.value)}
                />
            </Input.Wrapper>
            <Textarea
                label="Task Description"
                description="Input description"
                placeholder="Input placeholder"
                value={task_des}
                onChange={(e) => set_task_des(e.target.value)}
            />{" "}
            <Textarea
                label="What do you learn"
                description="Input description"
                placeholder="Input placeholder"
                value={task_what_learn}
                onChange={(e) => set_task_what_learn(e.target.value)}
            />{" "}
            <Textarea
                label="What do you do"
                description="Input description"
                placeholder="Input placeholder"
                value={task_what_do}
                onChange={(e) => set_task_what_do(e.target.value)}
            />
            <Input.Wrapper label="Video intro">
                <Input
                    placeholder="Video intro"
                    value={task_video_intro}
                    onChange={(e) => set_task_video_intro(e.target.value)}
                />
            </Input.Wrapper>
            <Input.Wrapper label="Task Number">
                <Input
                    placeholder="Task Number"
                    value={task_number}
                    onChange={(e) => set_task_number(e.target.value)}
                />
            </Input.Wrapper>
            <Input.Wrapper label="Task Level">
                <Input
                    placeholder="Level Task"
                    value={task_level}
                    onChange={(e) => set_task_level(e.target.value)}
                />
            </Input.Wrapper>
            <Button onClick={() => handleCreateTask()}>Submit</Button>
        </Stack>
    );
};
