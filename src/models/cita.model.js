import mongoose from 'mongoose'

let Cita

try {
  Cita = mongoose.model('Cita')
} catch (error) {
  const EventSchema = new mongoose.Schema(
    {
      nombre: String,
      email: String,
      tel: String,
      date: String,
      hour: String,
      area: { type: mongoose.Types.ObjectId, ref: 'Area' },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true },
  )

  Event = mongoose.model('Cita', EventSchema)
}

export default Event
