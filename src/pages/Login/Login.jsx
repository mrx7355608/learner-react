import { Heading, VStack, Text } from "@chakra-ui/react";
import ContinueWithGoogle from "../../components/ContinueWithGoogleButton";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <VStack mx="auto" w="30vw" minH="100vh" justifyContent="center">
            <Heading as="h1" size={"lg"} mb={"10"}>
                Login to your account
            </Heading>
            <ContinueWithGoogle />
            <Text mt={"4"}>
                Not a member?{" "}
                <Link to="/auth/signup">
                    <Text as="span" fontWeight={"medium"} color="teal">
                        Signup
                    </Text>
                </Link>
            </Text>
        </VStack>
    );
}
