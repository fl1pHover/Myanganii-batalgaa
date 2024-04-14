import { useForm } from "@mantine/form";
import { validateString } from "../../util/functions";
import { useDisclosure } from "@mantine/hooks";
import {
  ActionIcon,
  Box,
  Button,
  CloseIcon,
  FileButton,
  Grid,
  Group,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { ProjectStrings } from "../../util/string";
import { DateInput, DatePicker } from "@mantine/dates";
import { useRef } from "react";
export const ProjectForm = ({ submit }) => {
  const resetRef = useRef(null);
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      type: "ADMIN",
      date: null,
      image: [],
    },

    validate: {
      title: (value) =>
        !validateString(value ?? '', ProjectStrings.title).validated ? validateString(value ?? '').message : null,
      description: (value) =>
        !validateString(value ?? '', ProjectStrings.description).validated ? validateString(value ?? '').message : null,
      image: (value) =>
        value.length == 0 ? "Зураг оруулна уу." : null,
      date: (value) => (value == null ? "Огноо оруулна уу" : null),
    },
  });

  return (
    <>
   
      <form onSubmit={form.onSubmit((values) => submit(values))}>
        <Box>
          <TextInput
            label={ProjectStrings.title + " оруулна уу"}
            placeholder={ProjectStrings.title + " оруулна уу"}
            withAsterisk
            {...form.getInputProps("title")}
          />

          <Textarea
            label={ProjectStrings.description + " оруулна уу"}
            placeholder={ProjectStrings.description}
            {...form.getInputProps("description")}
          />
          <Group>
            <Select
              label={ProjectStrings.type + " оруулна уу"}
              placeholder={ProjectStrings.type + " оруулна уу"}
              {...form.getInputProps("type")}
              value={form.values.type}
              data={["ADMIN", "USER"]}
            />

            <DateInput
              onChange={(e) => form.setValues((prev) => ({ ...prev, date: e }))}
              label={ProjectStrings.date + " оруулна уу"}
              placeholder={ProjectStrings.date + " оруулна уу"}
            />
          </Group>

          <Group mt={8}>
            {form.values.image.length > 0 ? (
              <FileButton
                resetRef={resetRef}
                onChange={(e) => {
                  let image = [...e, ...form.values.image];
                  form.setValues((prev) => ({ ...prev, image: image }));
                }}
                accept="image/*"
                multiple
              >
                {(props) => <Button {...props}>Зураг нэмэх</Button>}
              </FileButton>
            ) : (
              <FileButton
                resetRef={resetRef}
                {...form.getInputProps("image")}
                accept="image/*"
                multiple
              >
                {(props) => <Button {...props}>Зураг оруулах</Button>}
              </FileButton>
            )}
            <Button
              disabled={!form.values.image}
              color="red"
              onClick={(e) =>
                form.setValues((prev) => ({ ...prev, image: [] }))
              }
            >
              Цэвэрлэх
            </Button>
          </Group>

          <Grid my={16}>
            {form.values.image?.map((img, i) => {
              return (
                <Grid.Col key={i} span={3}>
                  <Box pos={"relative"}>
                    <Box
                      pos={"absolute"}
                      top={"-2%"}
                      right={"-3%"}
                      className="z-10"
                    >
                      <ActionIcon
                        size="md"
                        radius={100}
                        bg={"red"}
                        aria-label="Gradient action icon"
                        onClick={() =>
                          form.setValues((prev) => ({
                            ...prev,
                            image: form.values.image.filter((a, b) => b != i),
                          }))
                        }
                      >
                        <CloseIcon />
                      </ActionIcon>
                    </Box>

                    <img
                      className="object-contain h-full w-full"
                      src={`${(window.URL || window.webkitURL).createObjectURL(
                        img
                      )}`}
                      alt=""
                    />
                  </Box>
                </Grid.Col>
              );
            })}
          </Grid>
          <Button type="submit">Илгээх</Button>
        </Box>
      </form>
    </>
  );
};
