import mongoose from 'mongoose'

let Article

try {
  Article = mongoose.model('Article')
} catch (error) {
  const ArticleSchema = new mongoose.Schema(
    {
      title: String,
      banner: String,
      content: String,
      images: [String],
      slug: String,
      area: { type: mongoose.Types.ObjectId, ref: 'Area' },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true },
  )

  Article = mongoose.model('Article', ArticleSchema)
}

export default Article
