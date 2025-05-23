import React from "react";
import { Text } from "@/commons/components/Text/Text";
import { Button } from "@/commons/components/Button/Button";
import { Input } from "@/commons/components/Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "./schema";

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = ({ email, password }: LoginFormData) => {
    console.log("Login attempt with:", { email, password });
    // Implement login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Implement Google login logic
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // Implement forgot password flow
  };

  return (
    <div>
      <Text typeScale="t4" className="mb-4">
        Sign In
      </Text>
      <div className="border border-border-gray rounded-sm px-5 py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="E-mail"
            required
            className="mb-4"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="Password"
            type="password"
            required
            className="mb-4"
            error={errors.password?.message}
            {...register("password")}
          />

          <div className="flex gap-6 mt-10">
            <div className="flex items-center">
              <Button
                type="submit"
                variant="primary"
                className="uppercase bg-primary-red-light text-white py-2 px-12 rounded-lg"
              >
                IDENTIFICATION
              </Button>
            </div>
            <div className="flex items-center">
              <Button
                type="button"
                className="flex items-center gap-2 border border-gray-300 rounded py-1 px-2"
                onClick={handleGoogleLogin}
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  width="16"
                  height="16"
                />
                Sign in with Google
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>
              <button
                type="button"
                className="text-gray-600 text-sm"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
