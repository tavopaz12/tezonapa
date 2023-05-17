import Cita from '@/models/cita.model'
import Area from '@/models/area.model'

// get : api/citas
export async function getCitas(req, res) {
  try {
    const area = req.query.area || ''
    const sortCriteria = { createdAt: -1 }

    const perPage = 10
    const page = parseInt(req.query.page) || 1

    let areaFilter = {}

    if (area) {
      const areas = await Area.find({})
      const matchingArea = areas.find(
        (a) => a.name.toLowerCase() === area.toLowerCase(),
      )
      if (!matchingArea) {
        return res.status(404).json({ error: 'Cita no encontrada' })
      }
      areaFilter = { area: matchingArea._id }
    }

    const count = await Cita.countDocuments(areaFilter)
    const pages = Math.ceil(count / perPage)

    const citas = await Cita.find(areaFilter)
      .populate('area')
      .sort(sortCriteria)
      .skip(perPage * page - perPage)
      .limit(perPage)

    if (!citas) return res.status(404).json({ error: 'Datos no encontrados' })
    res
      .status(201)
      .json({ currentPage: page, count: count, pages: pages, citas: citas })
  } catch (error) {
    res.status(404).json({ error: 'Error mientras se obtenias los datos' })
  }
}

// get : api/citas/1
export async function getCita(req, res) {
  try {
    const { citaId } = req.query

    const cita = await Cita.findById(citaId)

    if (!cita) {
      throw new Error('Cita no encontrada')
    }

    return res.status(200).json(cita)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// post : api/citas
export async function postCita(req, res) {
  try {
    const formData = req.body
    if (!formData) return res.status(404).json({ error: 'Datos no completos' })

    // Buscar el área por su nombre o ID
    const area =
      (await Area.findOne({ name: formData.areaName })) ||
      (await Area.findById(formData.areaId))

    if (!area) return res.status(404).json({ error: 'Cita no encontrada' })

    // Crear un nuevo artículo con el ID del área relacionada
    const newCita = await Cita.create({ ...formData, area: area._id })

    // Actualizar el área correspondiente para incluir el ID del nuevo artículo
    area.citas.push(newCita._id)
    await area.save()

    return res.status(201).json(newCita)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// patch : api/citas/1
export async function patchCita(req, res) {
  try {
    const { citaId } = req.query
    const formData = req.body

    if (citaId && formData) {
      const cita = await Cita.findOneAndUpdate({ _id: citaId }, formData, {
        new: true,
      })

      if (!cita) {
        return res.status(404).json({ error: 'Cita no encontrada' })
      }

      return res.status(200).json(cita)
    }

    return res.status(400).json({ error: 'Datos de entrada no válidos' })
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error: error.message })
  }
}

// get : api/citas/fecha
export async function getCitaByDate(req, res) {
  const { fecha } = req.query

  try {
    const citas = await Cita.find({ date: fecha }).populate('area')

    if (!citas || citas.length === 0) {
      return res
        .status(404)
        .json({ error: 'No hay citas programadas para esta fecha' })
    }

    const horasOcupadasPorArea = {}
    citas.forEach((cita) => {
      const areaNombre = cita.area.name
      const hora = cita.hour
      if (!horasOcupadasPorArea[areaNombre]) {
        horasOcupadasPorArea[areaNombre] = []
      }
      horasOcupadasPorArea[areaNombre].push(hora)
    })

    return res.status(200).json({ horasOcupadasPorArea })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

// delete : api/citas/1
export async function deleteCita(req, res) {
  try {
    const { citaId } = req.query

    if (!citaId) {
      return res.status(404).json({ error: 'Cita no encontrada' })
    }

    let cita
    try {
      cita = await Cita.findByIdAndDelete(citaId)
    } catch (error) {
      return res.status(404).json({ error: 'ID invalido' })
    }

    if (!cita) {
      return res.status(404).json({ error: 'Cita no encontrada' })
    }

    const area = await Area.findOneAndUpdate(
      { citas: citaId },
      { $pull: { citas: citaId } },
    )

    res.status(200).json(`Cita con id ${citaId} eliminada`)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}
