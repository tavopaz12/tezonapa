import Event from '@/models/event.model'
import Area from '@/models/area.model'

// get : api/events
export async function getEvents(req, res) {
  try {
    const area = req.query.area || ''
    const sortCriteria = { createdAt: -1 }

    let areaFilter = {}

    if (area) {
      const areas = await Area.find({})
      const matchingArea = areas.find(
        (a) => a.name.toLowerCase() === area.toLowerCase(),
      )
      if (!matchingArea) {
        return res.status(404).json({ error: 'Área no encontrada' })
      }
      areaFilter = { area: matchingArea._id }
    }

    const events = await Event.find(areaFilter)
      .populate('area')
      .sort(sortCriteria)

    if (!events) return res.status(404).json({ error: 'Datos no encontrados' })
    res.status(201).json(events)
  } catch (error) {
    res.status(404).json({ error: 'Error mientras se obtenias los datos' })
  }
}

// get : api/events/1
export async function getEvent(req, res) {
  try {
    const { eventId } = req.query

    const event = await Event.findById(eventId)

    if (!event) {
      throw new Error('Evento no encontrado')
    }

    return res.status(200).json(event)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// post : api/events
export async function postEvent(req, res) {
  try {
    const formData = req.body
    if (!formData) return res.status(404).json({ error: 'Datos no completos' })

    // Buscar el área por su nombre o ID
    const area =
      (await Area.findOne({ name: formData.areaName })) ||
      (await Area.findById(formData.areaId))

    if (!area) return res.status(404).json({ error: 'Evento no encontrado' })

    // Crear un nuevo artículo con el ID del área relacionada
    const newEvent = await Event.create({ ...formData, area: area._id })

    // Actualizar el área correspondiente para incluir el ID del nuevo artículo
    area.events.push(newEvent._id)
    await area.save()

    return res.status(201).json(newEvent)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// patch : api/events/1
export async function patchEvent(req, res) {
  try {
    const { eventId } = req.query
    const formData = req.body

    if (eventId && formData) {
      const event = await Event.findOneAndUpdate({ _id: eventId }, formData, {
        new: true,
      })

      if (!event) {
        return res.status(404).json({ error: 'Evento no encontrado' })
      }

      return res.status(200).json(event)
    }

    return res.status(400).json({ error: 'Datos de entrada no válidos' })
  } catch (error) {
    console.error(error)
    return res.status(404).json({ error: error.message })
  }
}

// delete : api/events/1
export async function deleteEvent(req, res) {
  try {
    const { eventId } = req.query

    if (!eventId) {
      return res.status(404).json({ error: 'Evento no encontrado' })
    }

    let event
    try {
      event = await Event.findByIdAndDelete(eventId)
    } catch (error) {
      return res.status(404).json({ error: 'ID invalido' })
    }

    if (!event) {
      return res.status(404).json({ error: 'Evento no encontrado' })
    }

    res.status(200).json(`Evento con id ${eventId} eliminado`)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}
