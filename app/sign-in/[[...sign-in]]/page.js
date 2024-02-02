import LoginComp from "@/app/components/LoginComp";
import { SignIn } from "@clerk/nextjs";
import { Container } from "@mantine/core";
 
export default function Page() {
  return (
    <Container>
    <LoginComp />
    </Container>
  );
}