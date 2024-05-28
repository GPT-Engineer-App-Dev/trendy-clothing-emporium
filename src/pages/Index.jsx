import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack, Button, HStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" justify="space-between" align="center" mb={8} p={4} bg="gray.100" borderRadius="md">
        <Heading as="h1" size="lg">Clothing Brand</Heading>
        <HStack spacing={4}>
          <Link href="#" fontWeight="bold">Home</Link>
          <Link href="#" fontWeight="bold">Shop</Link>
          <Link href="#" fontWeight="bold">About</Link>
          <Link href="#" fontWeight="bold">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <VStack spacing={4} mb={8} textAlign="center">
        <Heading as="h2" size="2xl">Welcome to Our E-commerce Store</Heading>
        <Text fontSize="lg">Discover the best products at unbeatable prices. Shop now and experience the difference!</Text>
        <Button colorScheme="teal" size="lg">Start Shopping</Button>
      </VStack>

      {/* Product Listings */}
      <Heading as="h3" size="lg" mb={4}>Featured Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/product1.jpg" alt="Product 1" />
          <Box p={4}>
            <Heading as="h4" size="md">Product 1</Heading>
            <Text mt={2}>$29.99</Text>
            <Button colorScheme="teal" size="sm" mt={2}>Add to Cart</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/product2.jpg" alt="Product 2" />
          <Box p={4}>
            <Heading as="h4" size="md">Product 2</Heading>
            <Text mt={2}>$39.99</Text>
            <Button colorScheme="teal" size="sm" mt={2}>Add to Cart</Button>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="/images/product3.jpg" alt="Product 3" />
          <Box p={4}>
            <Heading as="h4" size="md">Product 3</Heading>
            <Text mt={2}>$49.99</Text>
            <Button colorScheme="teal" size="sm" mt={2}>Add to Cart</Button>
          </Box>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Flex as="footer" justify="space-between" align="center" mt={8} p={4} bg="gray.100" borderRadius="md">
        <Text>&copy; 2023 Clothing Brand. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="#" fontWeight="bold">Privacy Policy</Link>
          <Link href="#" fontWeight="bold">Terms of Service</Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;