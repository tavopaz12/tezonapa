import Areas from '@/models/area.model'
import Events from '@/models/event.model'
import Articles from '@/models/article.model'

// get : api/areas
export async function getAreas(req, res) {
  try {
    const areas = await Areas.find().populate('articles').populate('events')

    if (!areas) return res.status(404).json({ error: 'Datos no encontradas' })
    res.status(200).json(areas)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// get : api/areas/1
export async function getArea(req, res) {
  try {
    const { areaId } = req.query

    if (areaId) {
      const area = await Areas.findById(areaId)
      if (area) {
        return res.status(200).json(area)
      } else {
        return res.status(404).json({ error: 'Area no encontrada' })
      }
    } else {
      return res.status(404).json({ error: 'ID de area no proporcionado' })
    }
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// post : api/areas
export async function postArea(req, res) {
  try {
    const formData = req.body

    if (!formData) return res.status(404).json({ error: 'Datos no completos' })
    const newArea = await Areas.create(formData)
    return res.status(201).json(newArea)
  } catch (error) {
    return res.status(404).json({ error })
  }
}

// patch : api/areas/1
export async function patchArea(req, res) {
  try {
    const { areaId } = req.query
    const formData = req.body

    if (areaId && formData) {
      const area = await Areas.findByIdAndUpdate(areaId, formData, {
        new: true,
      })
      if (!area) {
        res.status(404).json({ error: 'Area no encontrada' })
        return
      }
      res.status(200).json(area)
    }
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// delete : api/areas/1
export async function deleteArea(req, res) {
  try {
    const { areaId } = req.query

    if (!areaId) {
      return res.status(404).json({ error: 'Area no encontrada' })
    }

    let area
    try {
      area = await Areas.findByIdAndDelete(areaId)
    } catch (error) {
      return res.status(404).json({ error: 'ID invalido' })
    }

    if (!area) {
      return res.status(404).json({ error: 'Area no encontrada' })
    }

    res.status(200).json(`Area con id ${areaId} eliminada`)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}
