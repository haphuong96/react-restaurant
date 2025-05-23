import React, { useState } from "react";
import { Text } from "@/commons/components/Text/Text";
import { Button } from "@/commons/components/Button/Button";
import { Input } from "@/commons/components/Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormData, signupSchema } from "./schema";

export const SignUpForm: React.FC = () => {
  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Sign up attempt with:", data);
    // Implement sign up logic here
  };

  const handlePasswordFocus = () => {
    setShowPasswordRequirements(true);
  };

  const password = watch("password");
  return (
    <div>
      <Text typeScale="t4" className="mb-4">
        Sign Up
      </Text>
      <div className="border border-border-gray rounded-sm px-5 py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            required
            className="mb-4"
            error={errors.username?.message}
            {...register("username")}
          />

          <Input
            label="E-mail"
            required
            className="mb-4"
            error={errors.email?.message}
            {...register("email")}
          />

          <div className="relative">
            <Input
              label="Password"
              type="password"
              required
              className="mb-4"
              error={errors.password?.message}
              {...register("password")}
              onFocus={handlePasswordFocus}
            />

            {showPasswordRequirements && (
              <div className="bg-white border border-gray-200 rounded-md p-4 mb-4 shadow-sm absolute w-full">
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPasswordRequirements(false)}
                >
                  <span className="text-lg">×</span>
                </button>

                <ul className="text-sm">
                  <li
                    className={`mb-1 ${
                      password?.length >= 8 ? "text-green-500" : ""
                    }`}
                  >
                    At least 8 characters in length.
                  </li>
                  <li
                    className={`mb-1 ${
                      /[a-z]/.test(password || "") &&
                      /[A-Z]/.test(password || "")
                        ? "text-green-500"
                        : ""
                    }`}
                  >
                    At least one lower-case letter, one upper-case letter.
                  </li>
                  <li
                    className={`mb-1 ${
                      /[@#*^-]/.test(password || "") ? "text-green-500" : ""
                    }`}
                  >
                    At least one special character (@ # * ^ - ).
                  </li>
                  <li
                    className={`${
                      /[0-9]/.test(password || "") ? "text-green-500" : ""
                    }`}
                  >
                    At least one number (0-9).
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="newsletter"
              className="mr-2"
              {...register("newsletterChecked")}
            />
            <label htmlFor="newsletter">Subscribe to our newsletter</label>
          </div>

          <Button
            type="submit"
            variant="primary"
            className="uppercase bg-primary-red-light text-white py-2 px-20 rounded-lg"
          >
            SIGN UP
          </Button>
        </form>
      </div>
    </div>
  );
};
