import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: {
      type: String,
      enum: ['internship', 'consultation', 'development', 'training'],
      required: true,
    },
    price: { type: Number, default: 0 },
    enrolledUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

export default mongoose.model('Service', serviceSchema);
