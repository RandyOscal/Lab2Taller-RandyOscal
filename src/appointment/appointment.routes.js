import { Router } from "express";
import { saveAppointment, getAppointment, updateAppointment, cancelAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator, deleteAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/", getAppointment);

router.patch("/updateAppointment/:uid", updateAppointmentValidator, updateAppointment);

router.patch("/cancelAppointment/:uid", deleteAppointmentValidator, cancelAppointment);

export default router;