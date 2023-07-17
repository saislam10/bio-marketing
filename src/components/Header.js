import { useState } from "react";
import { Box, Heading, Flex, Spacer, IconButton, useColorMode, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Link, useMediaQuery } from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box as="header" p={4} bg={colorMode === "light" ? "teal.500" : "teal.200"} color={colorMode === "light" ? "white" : "black"}>
      <Flex align="center">
        <Heading as="h1" size="lg" flex={{ base: "initial", md: "1" }} textAlign={{ base: "center", md: "left" }}>
          <Link href="/" _hover={{ textDecoration: "none" }}>
            Biology Textbook
          </Link>
        </Heading>
        <Spacer />
        {!isMobile ? (
          <>
            <Link href='/about' ml={4} _hover={{ textDecoration: "none" }}>About</Link>
            <Link href='/reviews' ml={4} _hover={{ textDecoration: "none" }}>Reviews</Link>
            <Link href='/purchase' ml={4} _hover={{ textDecoration: "none" }}>Purchase</Link>
            <Link href='/contact' ml={4} _hover={{ textDecoration: "none" }}>Contact</Link>
          </>
        ) : (
          <IconButton
            aria-label="Toggle menu"
            icon={<HamburgerIcon />}
            onClick={handleDrawerOpen}
            color={colorMode === "light" ? "white" : "black"}
            variant="ghost"
          />
        )}
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <MoonIcon color="white" /> : <SunIcon color="black" />}
          onClick={toggleColorMode}
          ml={4}
          variant="ghost"
        />
      </Flex>
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={handleDrawerClose}>
        <DrawerOverlay >
          <DrawerContent >
            <DrawerCloseButton mt={4} />
            <DrawerBody mt={4}>
              <VStack spacing={4} align="start">
                <Link href="/" ml={4} _hover={{ textDecoration: "none" }}> Home</Link>
                <Link href='/about' ml={4} _hover={{ textDecoration: "none" }}>About</Link>
                <Link href='/reviews' ml={4} _hover={{ textDecoration: "none" }}>Reviews</Link>
                <Link href='/purchase' ml={4} _hover={{ textDecoration: "none" }}>Purchase</Link>
                <Link href='/contact' ml={4} _hover={{ textDecoration: "none" }}>Contact</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
