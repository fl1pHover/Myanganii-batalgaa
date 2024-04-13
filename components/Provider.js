import { createTheme, MantineProvider } from "@mantine/core";

const Provider = ({ children }) => (
  <MantineProvider>{children}</MantineProvider>
);

export default Provider;
