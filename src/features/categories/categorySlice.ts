import { createSlice } from "@reduxjs/toolkit"

interface Category {
  id: string
  name: string
  is_active: boolean
  created_at: string
  updated_at: string
  deleted_at: null | string
  description: null | string
}

const category: Category = {
  id: "1",
  name: "Category 1",
  description: "Category description",
  is_active: true,
  deleted_at: null,
  created_at: "2021-09-20T00:00:00.000000Z",
  updated_at: "2021-09-20T00:00:00.000000Z",
}

const categories = [
  category,
  {
    ...category,
    id: "2",
    name: "Category 2",
  },
  {
    ...category,
    id: "3",
    name: "Category 3",
  },
  {
    ...category,
    id: "4",
    name: "Category 4",
  },
  {
    ...category,
    id: "5",
    name: "Category 5",
  },
]

export const initialState = categories

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {},
    updateCategory(state, action) {},
    deleteCategory(state, action) {},
  },
})
