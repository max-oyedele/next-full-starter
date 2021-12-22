import { 
  Container, 
  Heading, 
  HStack, 
  Center, 
  Box, 
  Text, 
  Button, 
  Link, 
  Divider 
} from "@chakra-ui/react";

import { Counter } from "src/components/Counter";
import MotionBoxExample from "src/components/MotionBox";

export default function Home() {
  return (
    <Container maxW="3xl" py={12}>
      <Center>
        <Heading>
          Welcome to{" "}
          <Link href="">
            My Starter
          </Link>
        </Heading>
      </Center>

      <Box mt={12}>
        <Counter />
      </Box>
      <Divider my={12} />
      <MotionBoxExample />

    </Container>
  );
}
