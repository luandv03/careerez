import {
    Text,
    Stack,
    TypographyStylesProvider,
    Paper,
    FileInput,
    rem,
    Group,
} from "@mantine/core";
import { IconUpload, IconCircleCheck } from "@tabler/icons-react";
import { useState } from "react";

interface IRequirement {
    requirement_id: number;
    requirement_name: string;
    requirement_des: string;
}

export const Requirement = ({ requirement }: { requirement: IRequirement }) => {
    const icon = (
        <IconUpload style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
    );

    const [value, setValue] = useState<File | null>(null);

    return (
        <Stack key={requirement.requirement_id} p={20}>
            <Text fw={700} size="20px">
                {requirement.requirement_name}
            </Text>

            <TypographyStylesProvider>
                <div
                    dangerouslySetInnerHTML={{
                        __html: requirement.requirement_des,
                    }}
                />
            </TypographyStylesProvider>

            <Paper shadow="xs" p="md">
                <Stack>
                    <Text fw={700}>Nộp bài tập</Text>
                    <FileInput
                        leftSection={icon}
                        placeholder="File"
                        leftSectionPointerEvents="none"
                        value={value}
                        onChange={setValue}
                    />

                    {!!value && (
                        <Group>
                            <IconCircleCheck />
                            <Text fw={500} size="18px">
                                Bạn đã nộp bài thành công!
                            </Text>
                        </Group>
                    )}
                </Stack>
            </Paper>
        </Stack>
    );
};
