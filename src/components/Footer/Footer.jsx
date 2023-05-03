import {
  faClockFour,
  faLocationDot,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <div className="bottom-0 relative md:flex md:justify-between bg-[#2A2D34] w-full px-10 py-4">
      <div className="md:w-1/4 ">
        <h2 className="uppercase text-white font-bold text-3xl max-md:text-center max-md:text-xl">
          Contacto
        </h2>
        <hr className="border-t-4 border-solid border-[#2D974B] w-40 my-4 max-md:w-full" />

        <div>
          <p className="font-bold text-white capitalize text-lg max-md:text-center max-md:text-base">
            Municipio de Tezonapa
          </p>
          <p className="text-white mt-3 max-md:text-center max-md:text-sm">
            Si tienes alguna duda, puedes contactarnos de las siguientes maneras
          </p>
        </div>
      </div>

      <div className="md:w-1/4 max-md:mt-8">
        <div className="flex items-center gap-4 mb-8">
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="h-5 w-5 text-[#2D974B] font-extrabold"
          />
          <div>
            <p className="text-[#2D974B] font-extrabold max-md:text-sm uppercase">
              Teléfonos
            </p>
            <p className="text-white font-semibold max-md:text-sm">
              278 736 0122
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="h-5 w-5 text-[#2D974B] font-extrabold"
          />
          <div>
            <p className="text-[#2D974B] font-extrabold uppercase max-md:text-sm">
              Dirección
            </p>
            <p className="text-white font-semibold max-md:text-sm">
              Carretera al Palmar s/n
            </p>
            <p className="text-white font-semibold max-md:text-sm">
              Col. Centro, CP. 95096
            </p>
            <p className="text-white font-semibold max-md:text-sm">
              Tezonapa, Veracruz, México
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <FontAwesomeIcon
            icon={faClockFour}
            className="h-5 w-5 text-[#2D974B] font-extrabold"
          />
          <div>
            <p className="text-[#2D974B] font-extrabold uppercase max-md:text-sm">
              Horarios
            </p>
            <p className="text-white font-semibold max-md:text-sm">
              Lunes - Viernes 9:00 AM - 3:00 PM
            </p>
            <p className="text-white font-semibold max-md:text-sm">
              Sabado 10:00 AM - 14:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/4 p-4 max-md:mt-8"></div>
    </div>
  )
}
