'use client'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Suspense } from 'react'
import statusMock from '../mocks/status.json'
import sectorsMock from '../mocks/sectors.json'
import { UserModal, UserTable } from '@/components'
import { useUserPage } from '@/hooks/useUserPage'

export const UserPage = () => {
  const {
    users, activeUser, reloadUsers,
    filters, handleInputChange,
    handlePageChange, handleInputBlur,
    visible, handleHide, handleUserClick
  } = useUserPage()

  return (
    <div className="p-3">
      <div className="flex flex-row w-full justify-content-between align-items-center">
        <span className="font-bold text-3xl p-1 m-1">
          Usuarios
        </span>
        <Button
          className="p-2"
          icon="pi pi-plus pr-2"
          size="small"
          label="Nuevo Usuario"
          onClick={() => handleUserClick(null)}
        />
      </div>
      <UserModal visible={visible} handleHide={handleHide} activeUser={activeUser} callback={reloadUsers} />
      <div className="flex flex-row w-full align-items-center">
        <InputText
          className="flex-grow-1 p-2 m-1"
          size="large"
          placeholder={"Buscar"}
          keyfilter={/^[A-Za-z\s]*$/}
          name="name"
          onBlur={handleInputBlur}
        />
        <Dropdown
          showClear
          className="flex-grow-1 m-1 p-inputtext-sm md:w-14rem"
          options={statusMock}
          placeholder={"Seleccionar el Estado"}
          name="status"
          value={filters.status}
          onChange={handleInputChange}
        />
        <Dropdown
          disabled
          className="flex-grow-1 m-1 p-inputtext-sm"
          options={sectorsMock}
          placeholder={"Seleccionar el Sector"}
          name="sector" value={filters.sector}
          onChange={handleInputChange}
        />
        <Button className="p-2 m-1" icon="pi pi-filter-fill" severity="secondary" size="small" />
        <Button className="p-2 m-1" icon="pi pi-sliders-v" severity="secondary" size="small" />
      </div>
      <Suspense fallback={<ProgressSpinner />}>
        <UserTable
          users={users}
          filters={filters}
          handleUserClick={handleUserClick}
          handlePageChange={handlePageChange}
        />
      </Suspense>
    </div>
  )
}
