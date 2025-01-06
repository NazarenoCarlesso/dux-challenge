import { ChangeEvent, useEffect, useState } from 'react'
import { DropdownChangeEvent } from 'primereact/dropdown'
import { PaginatorPageChangeEvent } from 'primereact/paginator'
import { getUsersFiltered } from '@/services/users'
import { Filters, User, UsersData } from '@/interfaces'
import { FILTERS_INITIAL_STATE, USERS_DATA_INITIAL_STATE } from '@/constants'
import { useModal } from './useModal'

export const useUserPage = () => {
  const { visible, handleShow, handleHide } = useModal()
  const [users, setUsers] = useState<UsersData>(USERS_DATA_INITIAL_STATE)
  const [activeUser, setActiveUser] = useState<User | null>(null)
  const [filters, setFilters] = useState<Filters>(FILTERS_INITIAL_STATE)

  const handleUserClick = (user: User | null) => {
    setActiveUser(user)
    handleShow()
  }

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement> | DropdownChangeEvent) => {
    const { name, value } = target
    setFilters({ ...filters, [name]: value })
  }

  const handleInputBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFilters({ ...filters, [name]: value })
  }

  const handlePageChange = (e: PaginatorPageChangeEvent) => setFilters({ ...filters, page: e.page + 1 })

  const reloadUsers = () => getUsersFiltered(filters).then(data => setUsers(data))

  useEffect(() => {
    reloadUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  return {
    visible,
    handleShow,
    handleHide,
    users,
    activeUser,
    filters,
    reloadUsers,
    handleUserClick,
    handlePageChange,
    handleInputChange,
    handleInputBlur,
  }
}