import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Our E-commerce Store</Heading>
        <Box boxSize="sm">
          <Image src="/images/storefront.jpg" alt="Storefront" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Discover the best products at unbeatable prices. Shop now and experience the difference!
        </Text>
        <Button colorScheme="teal" size="lg" mt={4}>Start Shopping</Button>
      </VStack>
    </Container>
  );
};

export default Index;