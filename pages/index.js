import {Container, Box, Heading, Image, useColorModeValue, Link, Button} from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from "../components/paragraph";
import {BioSection, BioYear} from "../components/bio";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Page = () => {
    return (
        <Container>
            <Box borderRadius={"lg"} bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3}
                 align={"center"}>
                Hello, I&apos;m a Frontend Developer!
            </Box>
            <Box display={{md: "flex"}}>
                <Box flexGrow={1}>
                    <Heading as={"h2"} variant={"page-title"}>
                        Rifki Okta Pratama
                    </Heading>
                    <p>Web Designer / Developer / Gamer</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align={"center"}>
                    <Image borderColor={'whiteAlpha.800'} borderWidth={2} borderStyle={"solid"} maxWidth={'100px'}
                           display={"inline-block"} borderRadius={"full"} src={'/images/2.png'} alt={"Profile Image"}
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Rifki is a freelance and a full-stack developer based in Osaka with a
                    passion for building digital services/stuff he wants. He has a knack
                    for all things launching products, from planning and designing all the
                    way to solving real-life problems with code. When not online, he loves
                    hanging out with his camera. Currently, he is living off of his own
                    product called{' '}
                    <NextLink href="/works/inkdrop">
                        <Link>Inkdrop</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align={'center'} my={4}>
                    <NextLink href={'/work'}>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme={"teal"}>
                            My Portofolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born in Lampung, Indonesia.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Completed the Bachelor degree &apos;s Program in the at Universitas Gunadarma
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Worked at Pt. Allbest Solusi Sistem! Indonesia
                </BioSection>
                <BioSection>
                    <BioYear>2020 to present</BioYear>
                    Worked at Pt. Nashta Global Utama! Indonesia
                </BioSection>
            </Section>
        </Container>
    );
};
export default Page;