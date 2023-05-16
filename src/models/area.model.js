import mongoose from 'mongoose'

let Area

try {
  Area = mongoose.model('Area')
} catch (error) {
  const AreaSchema = new mongoose.Schema({
    name: String,
    banner: String,
    logo: String,
    director: String,
    articles: [{ type: mongoose.Types.ObjectId, ref: 'Article' }],
    events: [{ type: mongoose.Types.ObjectId, ref: 'Event' }],
    citas: [{ type: mongoose.Types.ObjectId, ref: 'Cita' }],
  })

  Area = mongoose.model('Area', AreaSchema)
}

export default Area
