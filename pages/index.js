import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius={"lg"} bg={"blue"} mb={6} p={3} align={"center"}>
        Hello, I&apos;m a Frontend Developer!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as={"h2"} variant={"page-title"}>
            Rifki Okta Pratama
          </Heading>
          <p>Web Designer / Developer / Gamer</p>
        </Box>
      </Box>
    </Container>
  );
};
export default Page;