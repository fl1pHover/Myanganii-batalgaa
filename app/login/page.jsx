"use client";

import Container from "@/components/ui/Container";
import { AtIcon, PhoneIcon } from "@/constants/icons";
import { Box, Button, TextInput } from "@mantine/core";
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
    // mode: "uncontrolled",
    initialValues: { email: "", password: "" },

    validate: {
      email: (value) => (value.length < 2 ? "Имэйл-ээ оруулна уу" : null),
      password: (value) => (value.length < 5 ? "Нууц үг буруу байна" : null),
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <Container>
      <h1 className="mb-10 text-center sectionTitle_semibold">Зөвхөн админ</h1>
      <form onSubmit={form.onSubmit((values) => submit(values))}>
        <Box className="flex flex-col min-w-[350px] max-w-[400px] mx-auto gap-6">
          <TextInput
            label="Имэйл"
            size="md"
            placeholder="example@example.com"
            leftSection={<AtIcon />}
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Нууц үг"
            type="password"
            size="md"
            placeholder="5-аас дээш тэмдэгттэй"
            leftSection={<PhoneIcon />}
            {...form.getInputProps("password")}
          />

          <Button
            size="md"
            color="#96dd1e"
            type="submit"
            className="text-black uppercase"
          >
            Нэвтрэх
          </Button>
        </Box>
      </form>
    </Container>
  );
}
