import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions";
import FormControlInput from "./FormControlInput";

function EditUserButton({
  name,
  email,
  id,
}: {
  name: string;
  email: string;
  id: string;
}) {
  const dispatch = useDispatch();
  const { users } = useSelector((state: UsersState) => state);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleEditUser = (
    values: { email: string; name: string },
    {
      setSubmitting,
    }: {
      setSubmitting: any;
    }
  ) => {
    const updatedUsersArr = users.map((user) => {
      if (user.id === id) {
        user.name = values.name;
        user.email = values.email;
        return user;
      }
      return user;
    });
    dispatch(setUsers(updatedUsersArr));
    setSubmitting(false);
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} color="white" colorScheme="yellow">
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form</ModalHeader>
          <ModalBody>
            {" "}
            <Formik
              initialValues={{ email, name }}
              validate={(values) => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={handleEditUser}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormControlInput
                    id="first-name"
                    label="Name"
                    placeholder="name"
                    type="text"
                    name="name"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.name}
                    error={errors.name || touched.name || errors.name}
                  />

                  <FormControlInput
                    id="email"
                    label="Email"
                    placeholder="email"
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.email}
                    error={errors.email || touched.email || errors.email}
                  />
                  <Flex justifyContent="flex-end">
                    <Button
                      onClick={onClose}
                      w="30%"
                      m={3}
                      type="button"
                      variant="outline"
                      colorScheme="red"
                    >
                      Cancel
                    </Button>
                    <Button
                      w="30%"
                      m={3}
                      type="submit"
                      colorScheme="green"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </Flex>
                </form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditUserButton;
