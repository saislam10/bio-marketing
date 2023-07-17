// pages/index.js

import * as React from 'react';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box maxW="1200px" mx="auto" pt="10" px={{ base: '6', lg: '8' }}>
      <Box px={{ base: '6', lg: '8' }}>
        <Heading as="h1" size="2xl">
          Our New Biology Textbook
        </Heading>
        <Text mt="4" fontSize="lg" fontWeight="medium">
          Discover the exciting world of biology with our comprehensive, engaging, and detailed textbook. Ideal for students, teachers, and enthusiasts alike.
        </Text>
        <Button colorScheme="teal" size="md" mt="6">
          Learn More
        </Button>
      </Box>
      <Box mt="10">
        <Image src="/path/to/your/textbook-cover.jpg" alt="Textbook Cover" />
      </Box>
    </Box>
  );
}
