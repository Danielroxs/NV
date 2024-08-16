import { testimonials } from "../constants";
import { Box, Stack, Heading, Text, Image, Flex } from "@chakra-ui/react";

const TestimonialSection = () => {
  return (
    <Box className="bg-gray-100 text-slate-700 py-16">
      <Box className="max-w-7xl mx-auto px-6">
        <Heading as="h2" className="text-3xl font-semibold text-center mb-12">
          Clientes Satisfechos
        </Heading>
        <Flex wrap="wrap" justify="center" gap="8">
          {testimonials.map((testimonial, id) => (
            <Box
              key={id}
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs p-6"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <Heading
                as="h3"
                className="text-xl font-semibold text-center mt-4"
              >
                {testimonial.name}
              </Heading>
              <Text className="text-gray-600 text-center mt-2">
                {testimonial.quote}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
