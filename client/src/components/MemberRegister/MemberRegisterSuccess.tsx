import { useEffect } from "react";
import { Alert, Center, Stack, Text } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

export const MemberRegisterSuccess = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.close();
        }, 300);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Center p={50}>
            <Alert>
                <Stack>
                    <Center>
                        <IconCircleCheck size={40} color="rgb(40, 89, 182)" />
                    </Center>
                    <Center>
                        <Text fw={500} color="rgb(40, 89, 182)">
                            Bạn đã đăng ký thành thông{" "}
                        </Text>
                    </Center>
                </Stack>
            </Alert>
        </Center>
    );
};
