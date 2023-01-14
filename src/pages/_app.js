import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'

function MyApp({Component, pageProps}) {
  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{colorScheme:light}}
    
    >
      <Components {...pageProps}  />
    </MantineProvider>
  )
}
