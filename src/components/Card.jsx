import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

const CardSection = () => {
  return (
    <Box className="bg-white py-16">
      <Box className="max-w-7xl mx-auto px-6">
        <Heading as="h2" className="text-3xl font-semibold text-center mb-12">
          Our Products
        </Heading>
        <Flex wrap="wrap" gap="8" justify="center">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            className="max-w-sm"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Product Image"
            />
            <Stack>
              <CardBody>
                <Heading size="md">The Perfect Latte</Heading>
                <Text py="2">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Buy Latte
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          {/* Agrega más tarjetas aquí */}
        </Flex>
      </Box>
    </Box>
  );
};

export default CardSection;
