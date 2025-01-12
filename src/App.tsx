import { ThemeProvider } from "@emotion/react"
import { Box, createTheme } from "@mui/material"
import { Header } from "./app/components/Header"
import { Layout } from "./app/components/Layout"

const theme = createTheme({})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: "#000",
        }}
      >
        <Header />
        <Layout>
          <h1>Hello World!</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
