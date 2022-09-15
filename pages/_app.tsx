import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
