import mongoose, { Schema, models, model } from 'mongoose'

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    banner: { type: String, required: true },
    content: { type: String, required: true },
    images: [{ type: String}],
    slug: { type: String, required: true },
    area: { type: mongoose.Types.ObjectId, ref: 'Area' },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
)

const Article = models.Article || model('Article', ArticleSchema)

export default Article
