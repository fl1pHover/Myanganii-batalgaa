import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button } from "@mantine/core";

export default function ContactForm() {
  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        {...form.getInputProps("email")}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        {...form.getInputProps("age")}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
