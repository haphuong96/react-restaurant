import { useState } from "react";
import { Container } from "@/directory/components/Container/Container";
import { PageLayout } from "@/directory/components/PageLayout/PageLayout";
import { Text } from "@/commons/components/Text/Text";
import { Button } from "@/commons/components/Button/Button";
import { Icon } from "@/commons/components/Icon/Icon";
import { useI18nContext } from "@/commons/i18n/i18n-react";

export const MyAccountPage = () => {
  const { LL } = useI18nContext();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signUpPasswordVisible, setSignUpPasswordVisible] = useState(false);

  return (
    <PageLayout>
      <Container bgClassName="bg-primary-beige" className="py-5 text-center">
        <Text typeScale="t2">MY ACCOUNT</Text>
      </Container>
      <Container className="py-8 grid grid-cols-2 gap-8">
        {/* Sign In Form */}
        <div>
          <div className="border border-border-gray rounded-sm px-5 py-5">
            <Text typeScale="t4" className="mb-4">
              Sign In
            </Text>
            <form>
              <div className="mb-4">
                <label className="block mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    required
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2.5"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    <Icon name="password-visible" />
                    {passwordVisible && (
                      <span
                        className="absolute inset-0 before:absolute before:content-[''] before:left-1/2 before:top-1/2 before:w-[130%] before:h-[2px] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-gray-700 before:rotate-45 before:rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex gap-6 mt-10">
                <div className="flex items-center">
                  <Button
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
                  <a href="#" className="text-gray-600 text-sm">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Sign Up Form */}
        <div>
          <div className="border border-border-gray rounded-sm px-5 py-5">
            <Text typeScale="t4" className="mb-4">
              Sign Up
            </Text>
            <form>
              <div className="mb-4">
                <label className="block mb-2">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={signUpPasswordVisible ? "text" : "password"}
                    required
                    className="w-full border border-gray-300 rounded p-2"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2.5"
                    onClick={() =>
                      setSignUpPasswordVisible(!signUpPasswordVisible)
                    }
                  >
                    eye
                    {/* <Icon name={signUpPasswordVisible ? "eye-off" : "eye"} /> */}
                  </button>
                </div>

                {/* Password requirements box */}
                {/* <div className="bg-white border border-gray-200 rounded-md p-4 mt-2 shadow-sm">
                  <button
                    type="button"
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  >
                    <span className="text-lg">×</span>
                  </button>
                  <ul className="text-sm">
                    <li className="mb-1">At least 8 characters in length.</li>
                    <li className="mb-1">
                      At least one lower-case letter, one upper-case letter.
                    </li>
                    <li className="mb-1">
                      At least one special character (@ # * ^ - ).
                    </li>
                    <li>At least one number (0-9).</li>
                  </ul>
                </div> */}
              </div>

              <div className="mb-4 flex items-center">
                <input type="checkbox" id="newsletter" className="mr-2" />
                <label htmlFor="newsletter">Subscribe to our newsletter</label>
              </div>

              <Button
                variant="primary"
                className="w-full uppercase bg-primary-red-light text-white py-2 px-4 rounded"
              >
                SIGN UP
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
};
