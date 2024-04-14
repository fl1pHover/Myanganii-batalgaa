import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";


export const DefaultModal = ({
  opened,
  close,
  children,
  title
}) => {
  return (
    <>
      <Modal opened={opened} size={'lg'} onClose={close} title={title}>
        {children}
      </Modal>
    </>
  );
};
