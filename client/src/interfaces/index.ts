export interface User {
  id: string | undefined
  usuario: string | undefined
  estado: string | number | undefined
  sector: number | undefined
}

export interface UsersData {
  data: User[] | undefined
  total: number
}

export interface Filters {
  sector: number
  page: number
  name: string | undefined
  status: 'ACTIVO' | 'INACTIVO' | undefined
}