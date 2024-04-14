"use client";

import Container from "@/components/ui/Container";
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const router = useRouter();
  const submit = async (data) => {
    try {
      const res = await fetch(`/api/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.email,
          password: data.password,
        }),
      }).then((d) => {
        if (d.status == 201) {
          router.push("/admin");
        }
        return d.json();
      });
    } catch (error) {
      console.error(error);
    }
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", password: "" },

    validate: {
      password: (value) => (value.length < 2 ? "Нууц үг буруу байна" : null),
      email: (value) => (value.length < 2 ? "5-аас их тэмдэгт байна" : null),
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Container>
      <form
        onSubmit={form.onSubmit((values) => submit(values))}
        className="flex flex-col max-w-[500px] mx-auto gap-6"
      >
        <TextInput
          type="text"
          name="username"
          size="md"
          className=""
          {...form.getInputProps("email")}
        />
        <TextInput
          type="password"
          name="password"
          size="md"
          className=""
          {...form.getInputProps("password")}
        />

        <Button
          size="md"
          color="#96dd1e"
          type="submit"
          className="text-black uppercase"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
