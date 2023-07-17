import { Box, Heading, FormLabel, Input, Button, Text, Flex, Link } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // here you would handle form submission, e.g. sending an email
  };

  return (
    <Box>
      <Header />
      <Box as="main" p={4}>
        <Heading as="h1" size="2xl">Contact Us</Heading>
        
        <Flex direction="column" mt={10}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" {...register("email", { required: true })} />
            {errors.email && <Text color="red.500">Email is required</Text>}

            <FormLabel htmlFor="message" mt={4}>Message</FormLabel>
            <Input as="textarea" id="message" {...register("message", { required: true })} />
            {errors.message && <Text color="red.500">Message is required</Text>}

            <Button type="submit" colorScheme="teal" mt={4}>Submit</Button>
          </form>
          
          <Text mt={10}>Or reach out to us on our social media channels:</Text>
          <Link href="https://facebook.com" mt={2}>Facebook</Link>
          <Link href="https://twitter.com" mt={2}>Twitter</Link>
          <Link href="https://instagram.com" mt={2}>Instagram</Link>
          {/* more social media links... */}
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactPage;
