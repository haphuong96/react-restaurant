import { Container } from "@/directory/components/Container/Container";
import { PageLayout } from "@/directory/components/PageLayout/PageLayout";
import { LoginForm } from "./components/LoginForm";
import { SignUpForm } from "./components/SignUpForm";

export const MyAccountPage = () => {
  return (
    <PageLayout title="MY ACCOUNT">
      <Container className="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <LoginForm />
        <SignUpForm />
      </Container>
    </PageLayout>
  );
};
