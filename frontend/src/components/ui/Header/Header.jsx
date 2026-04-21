import { Flex } from "@chakra-ui/react";
import Logo from "./Logo.jsx";
import HeaderOptions from "./HeaderOptions.jsx";
import Socials from "./Socials.jsx";

function Header() {

  return (
    <Flex
      as="header"
      w="full"
      justify="space-between"
      align="center"
      px={6}
      py={4}
      bg="#220925" 
      boxShadow="xl"
      display={{ base: "none", md: "flex" }}
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Logo/>
      <HeaderOptions/>
      <Socials/>

    </Flex>
  );
}

export default Header;