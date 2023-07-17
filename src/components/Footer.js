import { Box, Flex, Link, VStack, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box as="footer" p={4} bg={bgColor} color={textColor}>
      <Flex direction={{ base: "column", md: "row" }} justify="center" align="center">
        <VStack spacing={2} align="center" flex={{ base: "1", md: "initial" }} py={2} order={{ base: "2", md: "initial" }}>
          <Link href="/privacy-policy" mx={2}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" mx={2}>
            Terms of Service
          </Link>
        <Box textAlign="center" order={{ base: "1", md: "initial" }}>
          <span>&copy; 2023 Biology Textbook. All rights reserved.</span>
        </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;


