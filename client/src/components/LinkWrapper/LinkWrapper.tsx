import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

export function LinkWrapper({ link }: { link: string }) {
    const [opened, { open, close }] = useDisclosure(false);

    const url = new URL(link);
    if (url.hostname === import.meta.env.VITE_CLIENT_DOMAIN)
        return (
            <a target="_blank" href={link}>
                {link}
            </a>
        );
    else
        return (
            <>
                <Modal opened={opened} onClose={close} title="Authentication">
                    <iframe
                        src={link}
                        style={{ width: "100%", height: "400px" }}
                    />
                </Modal>

                <Button onClick={open}>Open modal</Button>
            </>
        );
}
