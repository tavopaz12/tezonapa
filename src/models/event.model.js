import mongoose from 'mongoose'

let Event

try {
  Event = mongoose.model('Event')
} catch (error) {
  const EventSchema = new mongoose.Schema(
    {
      title: String,
      image: String,
      content: String,
      show: Boolean,
      area: { type: mongoose.Types.ObjectId, ref: 'Area' },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true },
  )

  Event = mongoose.model('Event', EventSchema)
}

export default Event
