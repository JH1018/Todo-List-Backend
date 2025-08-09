import { Router } from "express";
import { createTask, getTasks, getTasksByStatus, updateTask, deleteTask, updateTaskStatus } from "./task.controller.js";
import { createTaskValidator, getTasksByStatusValidator, updateTaskValidator, deleteTaskValidator, updateTaskStatusValidator } from "../middlewares/task-validator.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Endpoints para la gestión de tareas
 */

/**
 * @swagger
 * /task/createTask:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Comprar pan"
 *               description:
 *                 type: string
 *                 example: "Ir a la panadería a las 8am"
 *               dueDate:
 *                 type: string
 *                 format: date
 *                 example: "2025-08-10"
 *     responses:
 *       201:
 *         description: Tarea creada correctamente
 *       500:
 *         description: Error al crear la tarea
 */
router.post(
    "/createTask",
    createTaskValidator,
    createTask
);


/**
 * @swagger
 * /task/:
 *   get:
 *     summary: Obtiene todas las tareas activas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas
 *       500:
 *         description: Error al obtener las tareas
 */
router.get(
    "/",
    getTasks
);


/**
 * @swagger
 * /task/getTasksByStatus:
 *   get:
 *     summary: Obtiene tareas por estado
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [PENDIENTE, PROGRESO, COMPLETADA]
 *         required: true
 *         description: Estado de la tarea
 *     responses:
 *       200:
 *         description: Lista de tareas filtradas por estado
 *       400:
 *         description: Parámetros inválidos
 *       500:
 *         description: Error al obtener las tareas
 */
router.get(
    "/getTasksByStatus",
    getTasksByStatusValidator,
    getTasksByStatus
);


/**
 * @swagger
 * /task/updateTask/{uid}:
 *   patch:
 *     summary: Actualiza una tarea existente
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *                 enum: [PENDIENTE, PROGRESO, COMPLETADA]
 *     responses:
 *       200:
 *         description: Tarea actualizada correctamente
 *       400:
 *         description: Parámetros inválidos
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error al actualizar la tarea
 */
router.patch(
    "/updateTask/:uid",
    updateTaskValidator,
    updateTask
);


/**
 * @swagger
 * /task/deleteTask/{uid}:
 *   patch:
 *     summary: Elimina (desactiva) una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea eliminada correctamente
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error al eliminar la tarea
 */
router.patch(
    "/deleteTask/:uid",
    deleteTaskValidator,
    deleteTask
);


/**
 * @swagger
 * /updateTaskStatus/{uid}:
 *   patch:
 *     summary: Actualiza el estado de una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [PENDIENTE, PROGRESO, COMPLETADA]
 *     responses:
 *       200:
 *         description: Estado de la tarea actualizado correctamente
 *       400:
 *         description: Parámetros inválidos
 *       404:
 *         description: Tarea no encontrada
 *       500:
 *         description: Error al actualizar el estado de la tarea
 */

router.patch(
    "/updateTaskStatus/:uid",
    updateTaskStatusValidator,
    updateTaskStatus
);

export default router;