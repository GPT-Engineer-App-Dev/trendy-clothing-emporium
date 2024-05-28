import { Container, Text, VStack, Heading, Box, Image, Button, Grid, GridItem, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "T-Shirt", price: "$20", image: "/images/tshirt.jpg" },
  { id: 2, name: "Jeans", price: "$40", image: "/images/jeans.jpg" },
  { id: 3, name: "Jacket", price: "$60", image: "/images/jacket.jpg" },
  { id: 4, name: "Sneakers", price: "$80", image: "/images/sneakers.jpg" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Clothing Brand</Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2}>Home</Link>
          <Link as={RouterLink} to="/shop" p={2}>Shop</Link>
          <Link as={RouterLink} to="/about" p={2}>About</Link>
          <Link as={RouterLink} to="/contact" p={2}>Contact</Link>
        </Flex>
      </Flex>

      <Container centerContent maxW="container.md" py={10}>
        <VStack spacing={4}>
          <Heading as="h2" size="xl" mb={4}>Welcome to Our Clothing Store</Heading>
          <Box boxSize="sm">
            <Image src="/images/storefront.jpg" alt="Storefront" />
          </Box>
          <Text fontSize="lg" textAlign="center">
            Discover the latest trends in fashion. Shop now and elevate your style!
          </Text>
          <Button colorScheme="teal" size="lg" mt={4}>Start Shopping</Button>
        </VStack>
      </Container>

      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="lg" mb={6}>Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          {products.map(product => (
            <GridItem key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Heading as="h4" size="md">{product.name}</Heading>
                <Text mt={2}>{product.price}</Text>
                <Button colorScheme="teal" size="sm" mt={4}>Add to Cart</Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Flex as="footer" bg="gray.800" color="white" p={4} justifyContent="center">
        <Text>&copy; 2023 Clothing Brand. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;