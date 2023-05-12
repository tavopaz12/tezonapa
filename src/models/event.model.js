import mongoose, { Schema, models, model } from 'mongoose'

const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    show: Boolean,
    area: { type: mongoose.Types.ObjectId, ref: 'Area' },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
)

const Events = models.Event || model('Event', EventSchema)

export default Events
