import { ChangeEvent, useEffect, useState } from 'react'
import { DropdownChangeEvent } from 'primereact/dropdown'
import { createUser, deleteUser, modifyUser } from '@/services/users'
import { FORM_INITAL_STATE } from '@/constants'
import { User } from '@/interfaces'

export const useUserModal = (activeUser: User | null, callback: () => void) => {
  const [form, setForm] = useState<User>(FORM_INITAL_STATE)

  useEffect(() => {
    if (activeUser != null) {
      setForm(activeUser)
    } else setForm(FORM_INITAL_STATE)
  }, [activeUser])

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement> | DropdownChangeEvent) => {
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async () => {
    if (activeUser) {
      await modifyUser(form)
    } else {
      await createUser(form)
    }
    setForm(FORM_INITAL_STATE)
    callback()
  }

  const handleDelete = async () => {
    if (activeUser && activeUser.id) {
      await deleteUser(activeUser.id)
    }
    callback()
  }

  const isFormValid = !!form.usuario && !!form.usuario.trim() && !!form.estado && !!form.sector

  return {
    form,
    handleInputChange,
    handleSubmit,
    handleDelete,
    isFormValid
  }
}