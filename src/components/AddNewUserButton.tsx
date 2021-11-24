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
import { v4 } from "uuid";
import { setUsers } from "../redux/actions";
import FormControlInput from "./FormControlInput";

function AddNewUserButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const { users } = useSelector((state: UsersState) => state);

  const handleNewUser = (values: {
    username: string;
    name: string;
    email: string;
    city: string;
  }) => {
    const newUser: User = {
      id: v4(),
      address: {
        city: values.city,
      },
      ...values,
    };
    users.push(newUser);
    dispatch(setUsers(users));
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" size="md">
        Add new users
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form</ModalHeader>
          <ModalBody>
            {" "}
            <Formik
              initialValues={{ name: "", username: "", email: "", city: "" }}
              validate={(values) => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = "Please Provide Email";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.name) {
                  errors.name = "Please Provide Name";
                }
                if (!values.username) {
                  errors.username = "Please Provide Username";
                }
                if (!values.city) {
                  errors.city = "Please Provide City";
                }
                return errors;
              }}
              onSubmit={handleNewUser}
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
                    id="user-name"
                    label="Username"
                    placeholder="user name"
                    type="text"
                    name="username"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.username}
                    error={
                      errors.username || touched.username || errors.username
                    }
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
                  <FormControlInput
                    id="city"
                    label="City"
                    placeholder="Islamabad etc"
                    type="text"
                    name="city"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.city}
                    error={errors.city || touched.city || errors.city}
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
                      Add
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

export default AddNewUserButton;
