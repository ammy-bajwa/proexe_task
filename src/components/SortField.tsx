import { Select } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../redux/actions";

function SortField() {
  const dispatch = useDispatch();
  const { users } = useSelector((state: UsersState) => state);

  const sortHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue = event.target.value;
    const sortedArr = users.sort((a, b) => {
      if (a.username < b.username) {
        return -1;
      }
      if (a.username > b.username) {
        return 1;
      }
      return 0;
    });

    debugger;
    if (selectedValue === "z-a") {
      dispatch(setUsers(sortedArr.reverse()));
    } else if (selectedValue === "a-z") {
      dispatch(setUsers(sortedArr));
    }
  };
  return (
    <Select placeholder="Select option" w="20%" onChange={sortHandler}>
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
    </Select>
  );
}

export default SortField;
