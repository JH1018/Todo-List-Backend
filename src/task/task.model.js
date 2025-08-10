import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, "El título es obligatorio"]
    },
    description: {
        type: String,
        required: [true, "La descripción es obligatoria"]
    },
    dueDate: {
        type: Date,
        required: [true, "La fecha de vencimiento es obligatoria"]
    },
    status: {
        type: String,
        enum: ["PENDIENTE", "PROGRESO", "COMPLETADA"],
        default: "PENDIENTE"
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
    {
        versionKey: false,
        timestamps: true
    }
);

taskSchema.methods.toJSON = function () {
    const { __v, _id, ...task } = this.toObject();
    task.uid = _id;
    return task;
};

export default model("Task", taskSchema);