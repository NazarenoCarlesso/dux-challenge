import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { ClickableText } from './ClickableText'
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator'
import { Filters, User, UsersData } from '@/interfaces'

interface UserTableProps {
  users: UsersData
  filters: Filters
  handleUserClick: (user: User) => void
  handlePageChange: (e: PaginatorPageChangeEvent) => void
}

export const UserTable = ({ users, filters, handleUserClick, handlePageChange }: UserTableProps) => {
  return (
    <>
      <DataTable className="w-full p-1 m-2" value={users?.data} tableStyle={{ minWidth: '50rem' }}>
        <Column className="p-2" field="id" header="id" headerClassName="p-2" />
        <Column
          className="p-2"
          field="usuario"
          header="Usuario"
          headerClassName="p-2"
          body={(rowData) => (
            <ClickableText
              text={rowData.usuario}
              onClick={() => handleUserClick(rowData)}
            />
          )}
        />
        <Column className="p-2" field="estado" header="Estado" headerClassName="p-2" />
        <Column className="p-2" field="sector" header="Sector" headerClassName="p-2" />
      </DataTable>
      <Paginator
        first={(filters.page - 1) * 10}
        rows={10}
        totalRecords={users?.total}
        onPageChange={handlePageChange}
      />
    </>
  )
}