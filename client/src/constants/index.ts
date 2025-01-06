import { Filters, User, UsersData } from '@/interfaces'

export const FORM_INITAL_STATE: User = {
  id: '',
  usuario: '',
  estado: '',
  sector: 6000
}

export const FILTERS_INITIAL_STATE: Filters = {
  sector: 6000,
  page: 1,
  name: '',
  status: undefined
}

export const USERS_DATA_INITIAL_STATE: UsersData = {
  data: undefined,
  total: 0
}