import { Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

interface FAQ {
    question_id: number;
    question_text: string;
    answer_text: string;
}

export const DropdownText = ({ faq }: { faq: FAQ }) => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Box key={faq.question_id}>
            <Group
                justify="space-between"
                mb={5}
                style={{ width: "100%", cursor: "pointer" }}
                onClick={toggle}
            >
                <Text size="20px" fw={700} style={{ flex: 1 }}>
                    {faq.question_text}
                </Text>
                {opened ? <IconChevronUp /> : <IconChevronDown />}
            </Group>

            <Collapse in={opened}>
                <Text>{faq.answer_text}</Text>
            </Collapse>
        </Box>
    );
};
