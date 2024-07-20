"use client";
import React, { ReactNode, Suspense } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import theme from "@/themes";

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback="loading">
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Box className="container">{children}</Box>
        </ChakraProvider>
      </CacheProvider>
    </Suspense>
  );
}
