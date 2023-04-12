import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import Form from "./ui/form";

export type SignInValues = {
  username: string;
  password: string;
};

type Props = {
  onSubmit: (values: SignInValues) => void;
};

export const SignInForm: FC<Props> = ({ onSubmit }) => {
  const methods = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.Field name="username">
          <Form.Label label="Username" />
          <Form.TextInput placeholder="Username" />
        </Form.Field>
        <Form.Field name="password">
          <Form.Label label="Password" />
          <Form.TextInput type="password" placeholder="Password" />
        </Form.Field>
        <Button className="w-full" type="submit">
          Sign in
        </Button>
      </Form>
    </FormProvider>
  );
};
