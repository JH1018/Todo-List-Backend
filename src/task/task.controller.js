import Task from "./task.model.js";

export const createTask = async (req, res) => {
    try {
        const data = req.body;

        const task = await Task.create(data);

        return res.status(201).json({
            success: true,
            message: "Tarea creada correctamente",
            task
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al crear la tarea",
            error: err.message
        });
    }
};

export const getTasks = async (res) => {
    try {
        const query = { isActive: true };

        const [total, tasks] = await Promise.all([
            Task.countDocuments(query),
            Task.find(query)
        ]);

        return res.status(200).json({
            success: true,
            total,
            tasks
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener las tareas",
            error: err.message
        })
    }
};

export const getTasksByStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const query = { status, isActive: true };

        const [total, tasks] = await Promise.all([
            Task.countDocuments(query),
            Task.find(query)
        ]);

        return res.status(200).json({
            success: true,
            total,
            tasks
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener las tareas",
            error: err.message
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { uid } = req.params;
        const data = req.body;

        const task = await Task.findByIdAndUpdate(uid, data, { new: true });

        return res.status(200).json({
            success: true,
            message: "Tarea actualizada correctamente",
            task
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar la tarea",
            error: err.message
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { uid } = req.params;

        const task = await Task.findByIdAndUpdate(uid, { isActive: false }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Tarea eliminada correctamente",
            task
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar la tarea",
            error: err.message
        });
    }
};