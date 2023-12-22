import { GrAed } from "react-icons/gr";
import * as Style from "./index.styled";

const Loader = () => {
  return (
    <Style.Loader>
      <Style.Icon>
        <GrAed />
      </Style.Icon>
      <Style.Text>Loading...</Style.Text>
    </Style.Loader>
  );
};

export default Loader;
