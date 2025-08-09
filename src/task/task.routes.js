import { Router } from "express";
import { createTask, getTasks, getTasksByStatus, updateTask, deleteTask } from "./task.controller.js";
import { createTaskValidator, getTasksByStatusValidator, updateTaskValidator, deleteTaskValidator } from "../middlewares/task-validator.js";

const router = Router();

router.post(
    "/createTask",
    createTaskValidator,
    createTask
);

router.get(
    "/",
    getTasks
);

router.get(
    "/getTasksByStatus",
    getTasksByStatusValidator,
    getTasksByStatus
);

router.patch(
    "/updateTask/:uid",
    updateTaskValidator,
    updateTask
);

router.patch(
    "/deleteTask/:uid",
    deleteTaskValidator,
    deleteTask
);

export default router;