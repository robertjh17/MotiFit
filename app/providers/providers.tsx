'use client'

import { ChakraProvider} from '@chakra-ui/react'
import theme from './theme'
import { ColorModeScript } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <><ColorModeScript initialColorMode={theme.config.initialColorMode} />
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>
  </>
}