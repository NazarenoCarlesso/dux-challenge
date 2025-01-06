import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import statusMock from '../mocks/status.json'
import sectorsMock from '../mocks/sectors.json'
import { User } from '@/interfaces'
import { UserModalFooter } from './index'
import { useUserModal } from '@/hooks/useUserModal'

interface UserModalProps {
  visible: boolean
  handleHide: () => void
  activeUser: User | null
  callback: () => void
}

export const UserModal = ({ visible, handleHide, activeUser, callback }: UserModalProps) => {
  const {
    form, handleInputChange,
    handleSubmit, handleDelete,
    isFormValid
  } = useUserModal(activeUser, callback)

  return (
    <Dialog
      header="Header"
      headerClassName="bg-primary text-white p-1 pl-3"
      visible={visible}
      style={{ width: '50vw' }}
      onHide={handleHide}
      footer={
        <UserModalFooter
          disabled={!isFormValid}
          handleHide={handleHide}
          showDeleteButton={!!activeUser}
          callback={handleSubmit}
          handleDelete={handleDelete}
        />}>
      <div className="flex flex-column p-2">
        <div className="flex m-1">
          <label className="font-medium">
            id
          </label>
        </div>
        <div className="flex m-1">
          <InputText
            disabled
            className="flex-grow-1 p-2"
            placeholder={"Ingrese el id del Usuario"}
            name="id"
            value={form.id}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex m-1">
          <label className="font-medium">
            Nombre:
          </label>
        </div>
        <div className="flex m-1">
          <InputText
            className="flex-grow-1 p-2"
            keyfilter="alpha"
            placeholder={"Ingrese el nombre del Usuario"}
            name="usuario"
            value={form.usuario}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex m-1">
          <label className="font-medium">
            Estado:
          </label>
        </div>
        <div className="flex m-1">
          <Dropdown
            className="flex-grow-1 p-inputtext-sm"
            options={statusMock}
            placeholder={"Seleccionar el estado"}
            name="estado"
            value={form.estado}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex m-1">
          <label className="font-medium">
            Sector:
          </label>
        </div>
        <div className="flex m-1">
          <Dropdown
            invalid={!form.sector}
            className="flex-grow-1 p-inputtext-sm"
            options={sectorsMock}
            placeholder={"Seleccionar el Sector"}
            name="sector" value={form.sector}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </Dialog>
  )
}