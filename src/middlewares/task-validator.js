import { body, param } from "express-validator";
import { validationsFields } from "./fields-validator.js";
import { catchErrors } from "./catch-errors.js";

export const createTaskValidator = [
    body("title").notEmpty().withMessage("El título es obligatorio"),
    body("description").notEmpty().withMessage("La descripción es obligatoria"),
    body("dueDate").isDate().withMessage("La fecha de vencimiento no es válida"),
    body("status").optional().isIn(["PENDIENTE", "PROGRESO", "COMPLETADA"]).withMessage("El estado no es válido"),
    validationsFields,
    catchErrors
];

export const getTasksByStatusValidator = [
    body("status").isIn(["PENDIENTE", "PROGRESO", "COMPLETADA"]).withMessage("El estado no es válido"),
    validationsFields,
    catchErrors
];

export const updateTaskValidator = [
    param("uid").isMongoId().withMessage("El ID de la tarea no es válido"),
    body("title").optional().notEmpty().withMessage("El título es obligatorio"),
    body("description").optional().notEmpty().withMessage("La descripción es obligatoria"),
    body("dueDate").optional().isDate().withMessage("La fecha de vencimiento no es válida"),
    body("status").optional().isIn(["PENDIENTE", "PROGRESO", "COMPLETADA"]).withMessage("El estado no es válido"),
    validationsFields,
    catchErrors
]

export const deleteTaskValidator = [
    param("uid").isMongoId().withMessage("El ID de la tarea no es válido"),
    validationsFields,
    catchErrors
];