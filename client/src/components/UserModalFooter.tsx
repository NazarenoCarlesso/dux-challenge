import { Button } from 'primereact/button'


interface UserModalFooterProps {
  disabled?: boolean
  handleHide: () => void
  callback: () => void
  showDeleteButton?: boolean
  handleDelete?: () => void
}

export const UserModalFooter = ({
  disabled = false,
  handleHide,
  showDeleteButton = false,
  callback,
  handleDelete = () => { }
}: UserModalFooterProps) => {

  const handleSubmit = () => {
    callback()
    handleHide()
  }

  const onDelete = () => {
    handleDelete()
    handleHide()
  }

  return (
    <div className="flex flex-row justify-content-center p-2">
      {
        showDeleteButton &&
        <div className="flex m-1">
          <Button
            className="p-2"
            size="small"
            icon="pi pi-trash pr-2"
            outlined
            severity="danger"
            label="Borrar"
            onClick={onDelete}
          />
        </div>
      }
      <div className="flex m-1">
        <Button
          disabled={disabled}
          className="p-2"
          icon="pi pi-check pr-2"
          size="small"
          label="Confirmar"
          onClick={handleSubmit}
        />
      </div>
      <div className="flex m-1">
        <Button
          className="p-2"
          icon="pi pi-times pr-2"
          size="small"
          label="Cancelar"
          outlined
          onClick={handleHide}
        />
      </div>
    </div>
  )
}