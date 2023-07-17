import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Review = ({ name, text }) => (
  <Box border="1px" borderColor="gray.200" borderRadius="md" p={4} my={4}>
    <Heading as="h3" size="lg">{name}</Heading>
    <Text mt={2}>{text}</Text>
  </Box>
);

const ReviewsPage = () => {
  const reviews = [
    { name: 'Reviewer 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Reviewer 2', text: 'Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.' },
    { name: 'Reviewer 3', text: 'Fusce et varius dolor.' },
    // more reviews...
  ];
  
  return (
    <Box>
      <Header />
      <Box as="main" p={4}>
        <Heading as="h1" size="2xl">Reviews and Testimonials</Heading>
        
        <Flex direction="column" mt={10}>
          {reviews.map((review, index) => (
            <Review key={index} name={review.name} text={review.text} />
          ))}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default ReviewsPage;
