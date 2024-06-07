import { postOrder } from "@/app/api/sheet/route";
import { AtIcon, PhoneIcon, UserIcon } from "@/constants/icons";
import { Box, Button, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export const BookingForm = () => {
  const form = useForm({
    // mode: "uncontrolled",w
    initialValues: { username: "", email: "", description: "", phone: "" },

    validate: {
      username: (value) => (value.length == 0 ? "Нэрээ бичнэ үү" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Имэйл буруу байна"),
      phone: (value) =>
        value.length !== 8 ? "8 оронтой утасны дугаар оруулна уу" : null,
    },
  });

  const send = () => {
    postOrder('asdf', 'asdf', 'asdf')
  }
  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <Box className="flex flex-col min-w-[350px] max-w-[400px] mx-auto gap-6">
        <TextInput
          label="Нэр"
          size="md"
          placeholder="..."
          leftSection={<UserIcon />}
          {...form.getInputProps("username")}
        />
        <TextInput
          label="Имэйл"
          size="md"
          placeholder="example@example.com"
          leftSection={<AtIcon />}
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Утасны дугаар"
          size="md"
          placeholder="XXXX-XXXX"
          leftSection={<PhoneIcon />}
          {...form.getInputProps("phone")}
        />
        <Textarea
          label="Дэлгэрэнгүй"
          placeholder="..."
          {...form.getInputProps("description")}
        />
        <Button
          size="md"
          color="#96dd1e"
          type="submit"
          className="text-black uppercase"
        >
          Илгээх
        </Button>
      </Box>
    </form>
  );
};
