import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUpload } from '@fortawesome/free-solid-svg-icons'
import InputText from '../UI/InputText'
import InputFile from '../UI/InputFile'
import TextArea from '../UI/TextArea'
import InputSelect from '../UI/InputSelect'

export default function FormCreateNotice() {
  return (
    <form action="#" className="my-6">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <InputText
            title="Titulo / Encabezado"
            name="title"
            required
            placeholder="Ingrese el titulo de la noticia"
          />
        </div>

        <div>
          <InputSelect
            title="Selecionar Area"
            defaultSelect="Selecciona una area"
            options={[
              'General',
              'Comude - General',
              'Comude - Futbol',
              'Comude - Beisbol',
              'Comude - Voleibol',
              'Comude - Basquetbol',
              'Comercio',
              'Desarrollo Social',
              'Fomento Agropecuario',
              'Educación',
            ]}
          />
        </div>

        <div>
          <InputFile title="Seleccionar imagen principal" required />
        </div>
        <div className="sm:col-span-2">
          <TextArea
            title="Contenido"
            name="content"
            rows={8}
            required
            placeholder="Ingresa el contenido"
            helperText="Cada punto final, sera tomado en cuenta como un parrafo"
          />
        </div>

        <div>
          <InputFile title="Seleccionar imagenes" required />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="text-white text-center mt-2 w-2/4 flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
          Agregar Nueva Noticia
        </button>
      </div>
    </form>
  )
}
