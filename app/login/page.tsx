import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <>
      <div className="w-4/6">
      70%
      </div>
      <div className="w-2/6 h-screen flex items-center justify-center">
      <Card
      maxW={"md"}
      align={"center"}
      >
      <CardHeader>
        <Heading as="h1" size={'md'} >
          Sign In
        </Heading>
      </CardHeader>
              <CardBody>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" mt={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <SubmitButton
            pendingText="Signing In..."
            formAction={signIn}
            >
              Sign in
            </SubmitButton>
        </CardBody>
      </Card>
      </div>
    </>
  );
}
