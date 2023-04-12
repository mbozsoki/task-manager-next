import { Switch } from "./ui/switch";
import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "./ui/button";
import Form from "./ui/form";
import { PasswordStrengthIndicator } from "./password-strength-indicator";
import {
  EMAIL_PATTERN,
  PASSWORD_LENGTH,
  PASSWORD_REGEXP,
} from "../utils/validations";
import {
  PASSWORD_STRENGTH_VALUES,
  getPasswordStrength,
} from "../utils/sign-up-utils";

export type SignUpValues = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  onSubmit: (values: SignUpValues) => void;
};

export const SignUpForm: FC<Props> = ({ onSubmit }) => {
  const methods = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      agreed: false,
    },
  });
  const { password, confirmPassword, agreed } = methods.watch();

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Form.Field
          name="email"
          rules={{ required: true, pattern: EMAIL_PATTERN }}
        >
          <Form.Label label="E-mail">
            <Form.Hint
              show={methods.formState.errors.email?.type === "pattern"}
            >
              Valid E-mail address must be provided.
            </Form.Hint>
          </Form.Label>
          <Form.TextInput placeholder="example@example.com" />
        </Form.Field>
        <Form.Field name="username" rules={{ required: true }}>
          <Form.Label label="Username" />
          <Form.TextInput placeholder="Username" />
        </Form.Field>
        <Form.Field
          name="password"
          rules={{
            required: true,
            pattern: PASSWORD_REGEXP,
            minLength: PASSWORD_LENGTH,
          }}
        >
          <Form.Label label="Password">
            <PasswordStrengthIndicator
              step={getPasswordStrength(password)}
              values={PASSWORD_STRENGTH_VALUES}
            />
          </Form.Label>
          <Form.TextInput type="password" placeholder="Password" />
          <Form.Hint>
            Minimum of 6 characters, with upper and lowercase letters, and a
            number and a symbol.
          </Form.Hint>
        </Form.Field>
        <Form.Field
          name="confirmPassword"
          rules={{ required: true, pattern: new RegExp(password) }}
        >
          <Form.Label label="Confirm password">
            <Form.Hint show={password !== confirmPassword}>
              Passwords must match.
            </Form.Hint>
          </Form.Label>
          <Form.TextInput type="password" placeholder="Password" />
        </Form.Field>
        <Form.Field name="agreed" rules={{ required: true }}>
          <Form.Switch>
            I agree to the <a href="#">terms of service</a> and the{" "}
            <a href="#">privacy policy</a>.
          </Form.Switch>
        </Form.Field>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </Form>
    </FormProvider>
  );
};
