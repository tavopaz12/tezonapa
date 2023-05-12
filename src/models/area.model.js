import mongoose, { Schema, models, model } from 'mongoose'

const AreaSchema = new Schema({
  name: { type: String, required: true },
  banner: { type: String, required: true },
  logo: { type: String, required: true },
  director: { type: String, required: true },
  articles: [{ type: mongoose.Types.ObjectId, ref: 'Article' }],
  events: [{ type: mongoose.Types.ObjectId, ref: 'Event' }],
})

const Area = models.Area || model('Area', AreaSchema)

export default Area
