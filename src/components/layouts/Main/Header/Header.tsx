import Button from "@/components/common/Button/Button";
import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          {/*Изменение картинки сайта*/}
          <Style.Img src="https://yt3.googleusercontent.com/_NSzIcxbeWPxBGQ7PAsqTjIdw8WE4UsSE1KHM3coO3lbX6uWFrUgdqpQEsS6QwBjy-WlvC6TDw=s900-c-k-c0x00ffffff-no-rj">
          </Style.Img>
          <Style.Name>Watch movies and wear pink!</Style.Name> {/*Изменение заглавной надписи*/}
        </Style.Logo>

        <Style.Buttons>
          <Button
            name={<VscSymbolColor />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
