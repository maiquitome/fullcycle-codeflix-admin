import { Box, Button } from "@mui/material"
import { useAppSelector } from "../../app/hooks"
import { selectCategories } from "./categorySlice"
import { Link } from "react-router"
import type { GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { DataGrid } from "@mui/x-data-grid"

export const CategoryList = () => {
  // ! bad practice
  // const categories = useAppSelector(state => state.categories)

  // * good practice
  const categories = useAppSelector(selectCategories)

  const rows: GridRowsProp = categories.map(category => ({
    id: category.id,
    name: category.name,
    description: category.description,
  }))

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
  ]

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>

      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  )
}
