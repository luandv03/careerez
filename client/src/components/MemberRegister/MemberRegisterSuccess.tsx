import { useEffect } from "react";
import { Alert, Center, Stack, Text } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import { useSearchParams } from "react-router-dom";

export const MemberRegisterSuccess = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        localStorage.setItem(
            "user_buy_service_pack_id",
            JSON.stringify(
                Number(searchParams.get("user_buy_service_pack_id") as string)
            )
        );

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
