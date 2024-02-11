import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Portfolio />
  </ChakraProvider>
);
