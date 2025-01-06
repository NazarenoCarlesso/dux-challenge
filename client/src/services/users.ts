import { Filters, User } from '@/interfaces'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

axios.defaults.params = { sector: 6000 }

interface Params {
  sector: number
  '_limit': number
  '_page': number
  'usuario_like'?: string
  'estado'?: 'ACTIVO' | 'INACTIVO'
}

export const getAllUsers = async () => {
  return await axios.get('/personal', { params: { sector: 6000 } })
    .then(res => ({ data: res.data, total: res.data.length }))
}

export const getUsersByPage = async (page = 1) => {
  return await axios.get('/personal', { params: { sector: 6000, '_limit': 10, '_page': page } })
    .then(res => ({ data: res.data, total: res.headers['x-total-count'] }))
}

export const getUsersByName = async (name: string) => {
  return await axios.get('/personal', { params: { sector: 6000, 'usuario_like': name } })
    .then(res => ({ data: res.data, total: res.data.length }))
}

export const getUsersFiltered = async ({ name, page = 1, status }: Filters) => {
  const params: Params = {
    sector: 6000,
    '_limit': 10,
    '_page': page,
    'usuario_like': name,
  }

  if (status) { params.estado = status }

  return await axios.get('/personal', { params })
    .then(res => ({ data: res.data, total: res.headers['x-total-count'] }))
}

export const modifyUser = async (user: User) => {
  try {
    if (!user.sector || !user.estado || !user.usuario) throw new Error('Faltan datos obligatorios')

    await axios.put(`/personal/${user.id}`, user)
      .then(res => console.log('Modificado con éxito:', res.data))
  } catch (error) {
    console.error('Error al modificar:', error)
  }
}

export const createUser = async (user: User) => {
  try {
    if (!user.sector || !user.estado || !user.usuario) throw new Error('Faltan datos obligatorios')

    await axios.post('/personal', ({
      sector: user.sector,
      estado: user.estado,
      usuario: user.usuario
    }))
      .then(res => console.log('Creado con éxito:', res.data))
  } catch (error) {
    console.error('Error al crear:', error)
  }
}

export const deleteUser = async (id: string) => {
  try {
    if (!id) throw new Error('Faltan datos obligatorios')

    await axios.delete(`/personal/${id}`)
      .then(res => console.log('Eliminado con éxito:', res.data))
  } catch (error) {
    console.error('Error al eliminar:', error)
  }
}