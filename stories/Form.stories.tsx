import { Meta, StoryFn } from "@storybook/react";
import { Card } from "../components/ui/card";
import { SignUpForm as SignUpFormComponent } from "../components/sign-up-form";
import { SignInForm } from "../components/sign-in-form";
export default {
  title: "Patterns/Form",
} as Meta;

const onSubmit = (data: any) => alert(JSON.stringify(data));

export const LoginForm: StoryFn = () => (
  <Card>
    <SignInForm onSubmit={onSubmit} />
  </Card>
);

export const SignUpForm: StoryFn = () => (
  <Card>
    <SignUpFormComponent onSubmit={(data) => alert(JSON.stringify(data))} />
  </Card>
);
