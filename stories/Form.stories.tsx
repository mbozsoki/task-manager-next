import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Label } from "../components/label";
import { TextInput } from "../components/textInput";
export default {
  title: "Patterns/Form",
} as Meta;

export const LoginForm: StoryFn = () => (
  <Card>
    <form>
      <Label>Username</Label>
      <TextInput placeholder="Username" />
      <Label>Password</Label>
      <TextInput type="password" placeholder="Password" />
      <Button className="w-full" type="submit">
        Sign in
      </Button>
    </form>
  </Card>
);

