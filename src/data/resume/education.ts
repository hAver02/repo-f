import { Achievement } from "@/modules/common/types/achivement";

export const educationAchivements: Achievement[] = [
    {
      id: "1",
      name: "Ingeniería en Informática - Universidad de Palermo",
      start: 2024, // Año de inicio
      end: 0, // 0 significa que aún está en curso
      content: "Actualmente cursando Ingeniería en Informática en la Universidad de Palermo.",
      active: true,
      createdAt: new Date(),
    },
    {
      id: "2",
      name: "Curso de Desarrollo Backend - Coderhouse",
      start: 2023,
      end: 2023,
      content: "Curso de Backend con Node.js, Express y bases de datos relacionales en Coderhouse.",
      active: false,
      createdAt: new Date(),
    },
    {
      id: "3",
      name: "Curso de Desarrollo Full Stack - Coderhouse",
      start: 2023,
      end: 2023,
      content: "Curso de desarrollo Full Stack con React, Node.js y MongoDB en Coderhouse.",
      active: false,
      createdAt: new Date(),
    }
  ];