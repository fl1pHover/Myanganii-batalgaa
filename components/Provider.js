import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";

const Provider = ({ children }) => (
  <>
    <ColorSchemeScript defaultColorScheme="light" />
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  </>
);

export default Provider;
