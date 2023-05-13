import Article from '@/models/article.model'
import Area from '@/models/area.model'

// get : api/articles
// api/articles?page=numPage&title=nameTitle&area=nameArea
export async function getArticles(req, res) {
  try {
    const perPage = 3
    const page = parseInt(req.query.page) || 1
    const title = req.query.title || ''
    const area = req.query.area || ''

    const regexTitleFilter = new RegExp(title, 'i')
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

    const query = {
      $and: [{ title: { $regex: regexTitleFilter } }, areaFilter],
    }

    const articles = await Article.find(query)
      .populate('area')
      .sort(sortCriteria)
      .skip(perPage * page - perPage)
      .limit(perPage)

    const count = await Article.countDocuments(query)
    const pages = Math.ceil(count / perPage)

    if (!articles)
      return res.status(404).json({ error: 'Datos no encontrados' })
    res.status(200).json({
      currentPage: page,
      pages: pages,
      count: count,
      articles: articles,
    })
  } catch (error) {
    console.log(error)
    return res.status(404).json({ error: error.message })
  }
}

// get : api/artciles/1
export async function getArticle(req, res) {
  try {
    const { articleId } = req.query

    if (articleId) {
      const article = await Article.findById(articleId)
      if (article) {
        return res.status(200).json(article)
      } else {
        return res.status(404).json({ error: 'Articulo no encontrado' })
      }
    } else {
      return res.status(404).json({ error: 'ID de articulo no proporcionado' })
    }
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// post : api/articles
export async function postArticle(req, res) {
  try {
    const formData = req.body
    if (!formData) return res.status(404).json({ error: 'Datos no completos' })

    // Buscar el área por su nombre o ID
    const area =
      (await Area.findOne({ name: formData.areaName })) ||
      (await Area.findById(formData.areaId))

    if (!area) return res.status(404).json({ error: 'Articulo no encontrado' })

    // Crear un nuevo artículo con el ID del área relacionada
    const newArticle = await Article.create({ ...formData, area: area._id })

    // Actualizar el área correspondiente para incluir el ID del nuevo artículo
    area.articles.push(newArticle._id)
    await area.save()

    return res.status(201).json(newArticle)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ error })
  }
}

// patch : api/articles/1
export async function patchArticle(req, res) {
  try {
    const { articleId } = req.query
    const formData = req.body

    if (articleId && formData) {
      const article = await Article.findByIdAndUpdate(articleId, formData, {
        new: true,
      })
      if (!article) {
        res.status(404).json({ error: 'Articulo no encontrado' })
        return
      }
      res.status(200).json(article)
    }
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}

// delete : api/articles/1
export async function deleteArticle(req, res) {
  try {
    const { articleId } = req.query

    if (!articleId) {
      return res.status(404).json({ error: 'Articulo no encontrado' })
    }

    let article
    try {
      article = await Article.findByIdAndDelete(articleId)
    } catch (error) {
      return res.status(404).json({ error: 'ID invalido' })
    }

    if (!article) {
      return res.status(404).json({ error: 'Articulo no encontrado' })
    }

    res.status(200).json(`Articulo con id ${articleId} eliminado`)
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}
