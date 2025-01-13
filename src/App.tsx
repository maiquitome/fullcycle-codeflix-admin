import { ThemeProvider } from "@emotion/react"
import { Box, Typography } from "@mui/material"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { appTheme } from "./config/theme"
import { Route, Routes } from "react-router"
import { CategoryList } from "./features/categories/ListCategory"
import { CategoryEdit } from "./features/categories/EditCategory"

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh",
          backgroundColor: theme => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="categories" element={<CategoryList />} />
            <Route path="categories/create" element={<CategoryList />} />
            <Route path="categories/edit/:id" element={<CategoryEdit />} />
            <Route
              path="*"
              element={
                <Box sx={{ color: "white" }}>
                  <Typography variant="h1">404</Typography>
                  <Typography variant="h2">Page not found</Typography>
                </Box>
              }
            />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App
