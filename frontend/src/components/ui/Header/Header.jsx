import { Flex, Box, HStack } from "@chakra-ui/react";
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
      bg="#220925" // A cor de fundo roxa escura do seu design
      boxShadow="xl"
      display={{ base: "none", md: "flex" }} // Esconde no mobile, como no seu Tailwind
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