import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Box as="main" p={4}>
        <Heading as="h1" size="2xl">Lorem Ipsum Dolor</Heading>
        <Text mt={4}>
          Consectetur adipiscing elit. Vestibulum semper venenatis ipsum, eu lobortis 
          risus porta a. Aliquam consectetur odio id nisi accumsan, a porttitor lectus 
          condimentum. Aenean euismod erat ut sem rhoncus, eget vehicula lacus convallis.
        </Text>
        <Heading as="h2" size="xl" mt={10}>Sit Amet Consectetur</Heading>
        <Text mt={4}>
          Ut sed sem vel quam pretium condimentum non id quam. Pellentesque convallis, 
          risus id gravida luctus, sapien sem condimentum nunc, id feugiat enim lorem non nibh.
        </Text>
        <Button size="lg" colorScheme="teal" mt={10}>
          Purchase Now
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
