import mongoose, {Schema} from "mongoose";

const Schema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.models.topic || mongoose.models("Topics", topicSchema);

export default topic();