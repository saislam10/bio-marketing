import { Box, Heading, Text, Button, Link, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RetailerLink = ({ name, url }) => (
  <Box my={4}>
    <Button as={Link} href={url} colorScheme="teal" isFullWidth>
      Buy from {name}
    </Button>
  </Box>
);

const PurchasePage = () => {
  const retailers = [
    { name: 'Retailer 1', url: 'https://www.retailer1.com/buy' },
    { name: 'Retailer 2', url: 'https://www.retailer2.com/buy' },
    { name: 'Retailer 3', url: 'https://www.retailer3.com/buy' },
    // more retailers...
  ];

  return (
    <Box>
      <Header />
      <Box as="main" p={4}>
        <Heading as="h1" size="2xl">Purchase Our Book</Heading>
        <Text mt={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Flex direction="column" mt={10}>
          {retailers.map((retailer, index) => (
            <RetailerLink key={index} name={retailer.name} url={retailer.url} />
          ))}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default PurchasePage;
