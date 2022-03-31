import { useContext } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { AuthContext } from "../../context/authContext";
import {
  BackButton,
  HeaderContainer,
  HeaderTitle,
  HeaderSubtitle,
  HeaderTextContainer,
  HeaderImage,
} from "./Header.styled";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <BackButton>
        <HiOutlineChevronLeft />
      </BackButton>
      <HeaderImage src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
      <HeaderTextContainer>
        <HeaderTitle>{user.name}</HeaderTitle>
        <HeaderSubtitle>En línea</HeaderSubtitle>
      </HeaderTextContainer>
    </HeaderContainer>
  );
};

export default Header;
