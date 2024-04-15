"use client";

import React from "react";
import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button, Textarea } from "@mantine/core";
import { AtIcon, MailIcon, PhoneIcon, UserIcon } from "@/constants/icons";

export default function Booking() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { username: "", email: "", password: "", phone: "" },

    validate: {
      username: (value) => (value.length == 0 ? "Нэрээ бичнэ үү" : null),
      password: (value) => (value.length < 2 ? "Нууц үг буруу байна" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Имэйл буруу байна"),
      phone: (value) =>
        value.length !== 8 ? "8 оронтой утасны дугаар оруулна уу" : null,
    },
  });

  return (
    <>
      <form
        onSubmit={form.onSubmit(console.log)}
        className="flex flex-col min-w-[350px] max-w-[400px] mx-auto gap-6"
      >
        {/* <TextInput
          label="Нэр"
          size="md"
          className=""
          placeholder="..."
          leftSection={<UserIcon />}
          {...form.getInputProps("username")}
        />
        <TextInput
          label="Имэйл"
          size="md"
          className=""
          placeholder="example@example.com"
          leftSection={<AtIcon />}
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Утасны дугаар"
          size="md"
          className=""
          placeholder="XXXX-XXXX"
          leftSection={<PhoneIcon />}
          {...form.getInputProps("password")}
        />
        <Textarea label="Дэлгэрэнгүй" placeholder="..." />
        <Button
          size="md"
          color="#96dd1e"
          type="submit"
          className="text-black uppercase"
        >
          Илгээх
        </Button> */}
      </form>
    </>
  );
}
