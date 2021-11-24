import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions";

function DeleteUserButton({ id }: { id: string }) {
  const dispatch = useDispatch();
  const { users } = useSelector((state: UsersState) => state);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteHandler = () => {
    const updatedUsers = users.filter((user) => user.id !== id);
    dispatch(setUsers(updatedUsers));
  };

  return (
    <>
      <Button onClick={onOpen} color="white" colorScheme="red">
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmation</ModalHeader>
          <ModalBody>
            <Text fontWeight="bold" color="red.500" mb="30px">
              Are you sure you want to delete the user?
            </Text>
            <Stack
              spacing={4}
              direction="row"
              align="center"
              justify="flex-end"
            >
              <Button colorScheme="gray" size="md">
                Cancel
              </Button>
              <Button colorScheme="red" size="md" onClick={deleteHandler}>
                Delete
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteUserButton;
