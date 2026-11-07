// ============================================================================
// DATOS INICIALES UNIFICADOS — PLANNER Y TAREAS (CURSO 2026-2027)
// Generado a partir de planner.html, control_clases.html y Firebase RTDB en vivo
// ============================================================================

window.SCHEDULE_TEMPLATES = {
  ribarroja: {
    intensiva: { // Sep y Jun
      0: [ // Lunes
        { time: "09:05 - 10:00", course: "3º ESO - B", type: "class" },
        { time: "10:00 - 10:30", label: "PATIO", type: "break" },
        { time: "10:30 - 11:25", course: "1º ESO - A", type: "class" },
        { time: "11:25 - 12:20", course: "4º ESO - B", type: "class" },
        { time: "12:20 - 13:15", course: "3º ESO - A", type: "class" }
      ],
      2: [ // Miércoles
        { time: "08:10 - 09:05", course: "2º ESO - A", type: "class" },
        { time: "09:05 - 10:00", course: "2º ESO - B", type: "class" },
        { time: "10:00 - 10:30", label: "PATIO", type: "break" },
        { time: "10:30 - 11:25", course: "1º ESO - B", type: "class" },
        { time: "11:25 - 12:20", course: "4º ESO - A", type: "class" },
        { time: "12:20 - 13:15", course: "1º BACHILLERATO", type: "class" },
        { time: "13:25 - 14:20", label: "REUNIÓN ESO/BAC/CF", type: "activity" }
      ]
    },
    ordinaria: { // Oct a May
      0: [ // Lunes
        { time: "09:05 - 10:00", course: "3º ESO - B", type: "class" },
        { time: "10:00 - 10:30", label: "PATIO", type: "break" },
        { time: "10:30 - 11:25", label: "TIEMPO LIBRE", type: "activity" },
        { time: "11:25 - 12:20", course: "4º ESO - B", type: "class" },
        { time: "12:20 - 13:15", course: "3º ESO - A", type: "class" },
        { time: "13:15 - 15:00", label: "COMEDOR", type: "break" },
        { time: "15:00 - 15:55", course: "1º ESO - B", type: "class" },
        { time: "15:55 - 16:50", course: "1º ESO - A", type: "class" }
      ],
      2: [ // Miércoles
        { time: "08:10 - 09:05", course: "2º ESO - A", type: "class" },
        { time: "09:05 - 10:00", course: "2º ESO - B", type: "class" },
        { time: "10:00 - 10:30", label: "PATIO", type: "break" },
        { time: "10:30 - 11:25", label: "TIEMPO LIBRE", type: "activity" },
        { time: "11:25 - 12:20", course: "4º ESO - A", type: "class" },
        { time: "12:20 - 13:15", course: "1º BACHILLERATO", type: "class" },
        { time: "13:15 - 15:00", label: "COMEDOR", type: "break" },
        { time: "15:00 - 16:50", label: "TARDE FORMATIVA", type: "activity" }
      ]
    }
  },
  manises: {
    intensiva: { // Sep y Jun
      1: [ // Martes
        { time: "08:00 - 08:55", course: "1º ESO - A", type: "class" },
        { time: "08:55 - 09:50", course: "4º ESO - B", type: "class" },
        { time: "09:50 - 10:45", course: "2º ESO - A", type: "class" },
        { time: "10:45 - 11:00", label: "LECTURA (1º ESO B)", type: "activity" },
        { time: "11:00 - 11:25", label: "RECREO / PATIO", type: "break" },
        { time: "11:25 - 12:20", label: "GUÀRDIA", type: "activity" },
        { time: "12:20 - 13:15", course: "4º ESO - A", type: "class" },
        { time: "13:15 - 14:10", course: "1º ESO - B", type: "class" }
      ],
      3: [ // Jueves
        { time: "08:00 - 08:55", course: "2º ESO - B", type: "class" },
        { time: "08:55 - 09:50", course: "3º ESO - B", type: "class" },
        { time: "09:50 - 10:45", course: "3º ESO - A", type: "class" },
        { time: "10:45 - 11:00", label: "LECTURA (1º ESO B)", type: "activity" },
        { time: "11:00 - 11:25", label: "RECREO / PATIO", type: "break" }
      ]
    },
    ordinaria: { // Oct a May
      1: [ // Martes
        { time: "08:00 - 08:55", course: "2º ESO - A", type: "class" },
        { time: "08:55 - 09:50", course: "2º ESO - B", type: "class" },
        { time: "09:50 - 10:45", course: "3º ESO - B", type: "class" },
        { time: "10:45 - 11:00", label: "LECTURA (1º ESO B)", type: "activity" },
        { time: "11:00 - 11:25", label: "RECREO / PATIO", type: "break" },
        { time: "11:25 - 12:20", course: "4º ESO - A", type: "class" },
        { time: "12:20 - 13:15", course: "4º ESO - B", type: "class" },
        { time: "13:15 - 15:00", label: "COMEDOR", type: "break" },
        { time: "15:00 - 15:55", course: "1º ESO - B", type: "class" },
        { time: "15:55 - 16:50", course: "1º ESO - A", type: "class" }
      ],
      3: [ // Jueves
        { time: "08:00 - 08:55", course: "3º ESO - A", type: "class" },
        { time: "08:55 - 09:50", label: "GUÀRDIA", type: "activity" },
        { time: "09:50 - 10:45", label: "TIEMPO LIBRE", type: "activity" },
        { time: "10:45 - 11:00", label: "LECTURA (1º ESO B)", type: "activity" },
        { time: "11:00 - 11:25", label: "RECREO / PATIO", type: "break" }
      ]
    }
  }
};

window.INITIAL_APP_DATA = {
  "weeks": [
    {
      "week_index": 0,
      "week_num": 1,
      "num_sem": "Semana 1",
      "rango": "01/09 - 04/09",
      "fechas": "01/09 - 04/09",
      "date_start": "2026-09-01",
      "mes": "SEPTIEMBRE",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 1,
      "week_num": 2,
      "num_sem": "Semana 2",
      "rango": "07/09 - 11/09",
      "fechas": "07/09 - 11/09",
      "date_start": "2026-09-07",
      "mes": "SEPTIEMBRE",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Clasrroom\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Clasrroom\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Clasrroom\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 2,
      "week_num": 3,
      "num_sem": "Semana 3",
      "rango": "14/09 - 18/09",
      "fechas": "14/09 - 18/09",
      "date_start": "2026-09-14",
      "mes": "SEPTIEMBRE",
      "tipo_sem": "Festivo",
      "manises": {
        "1º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Clasrroom\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Clasrroom\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Clasrroom\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Código Classroom\n\nCuestionario inicial\n\nPrueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Código Classroom\n\nCuestionario inicial\n\nPrueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Código Classroom\n\nCuestionario inicial\n\nPrueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Clasrroom\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Clasrroom\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nExplicar TEAMS\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 3,
      "week_num": 4,
      "num_sem": "Semana 4",
      "rango": "21/09 - 25/09",
      "fechas": "21/09 - 25/09",
      "date_start": "2026-09-21",
      "mes": "SEPTIEMBRE",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 2",
          "actividades": "PPT - Jueces\n- Semáforo - TD\n\n\n",
          "avisos": "Aviso\n- EXAMEN (Fecha)\n\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 1\n- Vídeo - Curiosamente\n- Ficha 1 - Preguntas fundamentales - POR\n\nIMPRIMIR",
          "avisos": "Aviso\n- EXAMEN (Fecha)\n\nPO",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 1\n- Vídeo - Curiosamente\n- Ficha 1 - Preguntas fundamentales - POR\n\nIMPRIMIR",
          "avisos": "Aviso\n- EXAMEN (Fecha)\n\nPO",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nExplicar TEAMS\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCuestionario Inicial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial\n\nLectura comprensiva\n\n- Proyecto Personal",
          "avisos": "TD\nTD",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 4,
      "week_num": 5,
      "num_sem": "Semana 5",
      "rango": "28/09 - 02/10",
      "fechas": "28/09 - 02/10",
      "date_start": "2026-09-28",
      "mes": "OCTUBRE",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "Presentar Rúbrica del Portfolio\n\nPPT - 1\n\n- Contextos dignidad humana - POR",
          "avisos": "- EXAMEN (27. octubre, martes)\n- LM - IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "1",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "Presentar Rúbrica del Portfolio\n\nPPT - 1\n\n- Contextos dignidad humana - POR",
          "avisos": "- EXAMEN (27. octubre, martes)\n- LM - IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "1",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 2",
          "actividades": "PPT - Jueces\n\n- Semáforo - TD",
          "avisos": "- EXAMEN (27. octubre, martes)\n- LM - IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Cambio horario",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 2\n- Vídeo - Curiosamente\n\n- Ficha 3 - Creencias y certezas - POR",
          "avisos": "- IA\n- Examen (29 OCT)",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Cambio horario",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Antropología",
          "actividades": "PPT - 1\n\n- Etiquetas - POR",
          "avisos": "- EXAMEN (27. octubre, martes)\n- LM - IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Antropología",
          "actividades": "PPT - 1\n\n- Etiquetas - POR",
          "avisos": "- EXAMEN (27. octubre, martes)\n- LM - IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial - TD\n\nLectura comprensiva - TD",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "Presentar Rúbrica del Portfolio\n\nPPT - 1\n\n- Contextos dignidad humana - POR",
          "avisos": "- EXAMEN (2 noviembre, lunes)\n- IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "1",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 2",
          "actividades": "PPT - Jueces\n\n- Semáforo - TD",
          "avisos": "- EXAMEN (4 noviembre, miércoles)\n- LM - IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 2",
          "actividades": "PPT - Jueces\n\n- Semáforo - TD",
          "avisos": "- EXAMEN (4 noviembre, miércoles)\n- IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial - TD\n\nLectura comprensiva - TD",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial - TD\n\nLectura comprensiva - TD",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Antropología",
          "actividades": "PPT - 1\n\n- Etiquetas - POR",
          "avisos": "- EXAMEN (2 diciembre, miércoles)\n- IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Presentación Curso",
          "actividades": "Prueba inicial - TD\n\nLectura comprensiva - TD",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º BACHILLERATO": {
          "tema": "Proyecto Personal",
          "actividades": "Explicación Proyecto Personal\n\nProyecto - Empezamos PPT\n\n- Primera entrada del diario - DIARIO",
          "avisos": "-IA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      }
    },
    {
      "week_index": 5,
      "week_num": 6,
      "num_sem": "Semana 6",
      "rango": "05/10 - 09/10",
      "fechas": "05/10 - 09/10",
      "date_start": "2026-10-05",
      "mes": "OCTUBRE",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "PPT - 2\n- Citas bíblicas - POR\n- Lista de problemas medioambientales - POR\n* Corregir Contextos mientras trabajan.",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Medioambiente",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "2",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "PPT - 2\n- Citas bíblicas - POR\n- Lista de problemas medioambientales - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Medioambiente",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "2",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 2",
          "actividades": "- Semáforo\n\n- Plickers - POR\nPPT - Monarquía",
          "avisos": "Plickers",
          "avisoDado": true,
          "educamos": "Plickers - Monarquía",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 2",
          "actividades": "- Plickers - POR\nPPT - Monarquía",
          "avisos": "- EXAMEN (27. octubre, martes)\nIA - Plickers",
          "avisoDado": true,
          "educamos": "Plickers - Monarquía",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "- Certezas y creencias\n- Corregir Preguntas fundamentales\nPPT - 3\n- Vídeo - Curiosamente\n- Ficha 4 - Tabla de sentidos - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Creencias. y certezas",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 2\n- Vídeo - Curiosamente\n- Ficha 3 - Creencias y certezas - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Antropología",
          "actividades": "PPT - Platón\n\n- Cuerpo y Alma - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Antropología",
          "actividades": "📌 PENDIENTE (Sem. 5):\n- Etiquetas - POR\n────────────────────\nPPT - Platón\n\n- Cuerpo y Alma - POR\n\n* Corregir Etiquetas mientras trabajan.",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "Presentar Rúbrica del Portfolio\nPPT - 1\n- Contextos dignidad humana - POR",
          "avisos": "- EXAMEN (9 noviembre, lunes)",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "1",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "PPT - 2\n- Citas bíblicas - POR\n- Lista de problemas medioambientales - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "2",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 2",
          "actividades": "- Plickers - POR\nPPT - Monarquía",
          "avisos": "Plickers",
          "avisoDado": true,
          "educamos": "Plickers - Monarquia",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 2",
          "actividades": "- Plickers - POR\nPPT - Monarquía",
          "avisos": "Plickers",
          "avisoDado": true,
          "educamos": "Plickers - Monarquia",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 1\n- Vídeo - Curiosamente\n- Ficha 1 - Preguntas fundamentales - POR",
          "avisos": "- EXAMEN (30 noviembre, lunes)\nIA",
          "avisoDado": true,
          "educamos": "Preguntas fundamentales",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 1\n- Vídeo - Curiosamente\n- Ficha 1 - Preguntas fundamentales - POR",
          "avisos": "- EXAMEN (30 noviembre, lunes)\nIA",
          "avisoDado": true,
          "educamos": "Preguntas fundamentales",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Antropología",
          "actividades": "PPT - Platón\n- Cuerpo y Alma - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Cuerpo y alma",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Antropología",
          "actividades": "PPT - 1\n- Etiquetas - POR",
          "avisos": "- EXAMEN (30 noviembre, lunes)\nIA",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º BACHILLERATO": {
          "tema": "¿Quién soy?",
          "actividades": "PPT 1 - Imagen de Dios, hijos de Dios\n- Carta a mi \"yo\" - PRO",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Carta a mi yo futuro",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      }
    },
    {
      "week_index": 6,
      "week_num": 7,
      "num_sem": "Semana 7",
      "rango": "12/10 - 16/10",
      "fechas": "12/10 - 16/10",
      "date_start": "2026-10-12",
      "mes": "OCTUBRE",
      "tipo_sem": "Festivo",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "PPT - 3\n- ¿Eres perfecto?\n\n",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Material y búsqueda de noticia",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "3",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "PPT - 3\n- ¿Eres perfecto?\n\n",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Material y búsqueda de noticia",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "3",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 2",
          "actividades": "- Plickers - POR\nPPT - División del Reino",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Plickers profetas",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 2",
          "actividades": "- Plickers - POR\nPPT - División del Reino",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Plickers profetas",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "�� PENDIENTE (Sem. 6):\n• 📝 Corregir: Creencias y certezas\n📌 Pendiente: Tabla de sentidos\n────────────────────\nHacer Grupos Trabajo (5 personas)\n\nGabinete existencial\n- Explicación\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "📌 PENDIENTE (Sem. 6):\n• 📝 Corregir: Creencias y certezas\n\nPPT - 3\n- Vídeo - Curiosamente\n- Ficha 4 - Tabla de sentidos - POR",
          "avisos": "Recordar Examen próxima semana",
          "avisoDado": true,
          "educamos": "Examen",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Antropología",
          "actividades": "PPT - Aristóteles\n- Así soy - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Antropología",
          "actividades": "PPT - Aristóteles\n- Así soy - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "DOUMUND",
          "actividades": "• 📖 EXPLICACIÓN: DOMUND 2\n• ✍️ TRABAJO DIARIO: Actividad",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Plickers - Monarquía",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "DOUMUND",
          "actividades": "• 📖 EXPLICACIÓN: DOMUND 2\n• ✍️ TRABAJO DIARIO: Actividad",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Plickers - Monarquía",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Antropología",
          "actividades": "PPT - Aristóteles\n- Así soy - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Terminar tareas",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "📌 PENDIENTE (Sem. 6):\n• 📌 Pendiente: Acabar Etiquetas",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "DOUMUND",
          "actividades": "• 📖 EXPLICACIÓN: DOMUND 2\n• ✍️ TRABAJO DIARIO: Actividad",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        }
      }
    },
    {
      "week_index": 7,
      "week_num": 8,
      "num_sem": "Semana 8",
      "rango": "19/10 - 23/10",
      "fechas": "19/10 - 23/10",
      "date_start": "2026-10-19",
      "mes": "OCTUBRE",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "Vídeo - Derechos Humanos\n\nDerechos Humanos - PROY\nContestar a las preguntas",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Examen",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "4",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "Vídeo - Derechos Humanos\n\nDerechos Humanos - PROY\nContestar a las preguntas",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Examen",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "4",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 5",
          "actividades": "- Plickers - POR\nPPT - Profetas y Mesías",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Examen",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 5",
          "actividades": "- Plickers - POR\nPPT - División del reino",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Examen",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "Gabinete existencial - PROYECTO\n- Grupos de trabajo (5 personas)\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Cartulina para clase\nExamen",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "EXAMEN",
          "actividades": "MARTES - 20 Octubre\n- Búsqueda de sentido\n\n---\nGrupos Trabajo ✅\nExplicar trabajo ✅",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Cartulina",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Antropología",
          "actividades": "Diagnóstico antropológico\nProyecto",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Examen",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Antropología",
          "actividades": "Diagnóstico antropológico\nProyecto",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Examen",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "📌 PENDIENTE (Sem. 6):\n• 📌 Pendiente: - Contextos dignidad humana - POR\n────────────────────\nPPT - 2\n- Citas bíblicas - POR\n- Lista de problemas medioambientales - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Contextos; Citas y problemas. Teams - Trabajo de clase - Presentación",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "2",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "PPT - 3\n- ¿Eres perfecto?",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Eres perfecto. Teams - Trabajo de clase - Presentación",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "3",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 4",
          "actividades": "- Plickers - POR\nPPT - División del Reino",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Plickers División del reino",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 4",
          "actividades": "- Plickers - POR\nPPT - División del Reino",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Plickers División del reino",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 2\n- Vídeo - Curiosamente\n- Ficha 3 - Creencias y certezas - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Creencias y certezas",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 2\n- Vídeo - Curiosamente\n- Ficha 3 - Creencias y certezas - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Creencias y certezas",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Antropología",
          "actividades": "Diagnóstico antropológico\nProyecto",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Antropología",
          "actividades": "• 📌 Pendiente: Acabar Etiquetas\nPPT - Platón\n- Cuerpo y Alma - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Cuerpo y alma",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º BACHILLERATO": {
          "tema": "¿Quién soy?",
          "actividades": "PPT 2 - Talentos y límites\n- Mis talentos y límites - PRO",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      }
    },
    {
      "week_index": 8,
      "week_num": 9,
      "num_sem": "Semana 9",
      "rango": "26/10 - 30/10",
      "fechas": "26/10 - 30/10",
      "date_start": "2026-10-26",
      "mes": "OCTUBRE",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "EXAMEN",
          "actividades": "MARTES - 27 Octubre\n- ¿Quiénes somos?\n---\nExplicar trabajo\nGrupos Trabajo\n\n",
          "avisos": "AVISAR MATERIAL PERIÓDICO HUMANIZANTE\n- 1 Cartulina por grupo\n- Imágenes de las noticias",
          "avisoDado": true,
          "educamos": "Material Noticias de esperanza",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "EXAMEN",
          "actividades": "MARTES - 27 Octubre\n- ¿Quiénes somos?\n---\nExplicar trabajo\nGrupos Trabajo",
          "avisos": "AVISAR MATERIAL PERIÓDICO HUMANIZANTE\n- 1 Cartulina por grupo\n- Imágenes de las noticias",
          "avisoDado": true,
          "educamos": "Material Noticias de esperanza",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "EXAMEN",
          "actividades": "MARTES - 27 Octubre\n- Historia de Israel 2\n---\nNOTICIERO\n\n- Explicar\n- Hacer grupos",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "EXAMEN",
          "actividades": "MARTES - 27 Octubre\n- Historia de Israel 2\n---\nNOTICIERO\n\n- Explicar\n- Hacer grupos",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "EXAMEN",
          "actividades": "JUEVES - 29 Octubre\n\n- Búsqueda de sentido\n---\nSeguir trabajando en el proyecto Gabinete Existencial",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "Hacer Grupos Trabajo (5 personas)\n\nGabinete existencial\n- Explicación\n- Trabajo en clase",
          "avisos": "Revisión Examen",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "EXAMEN",
          "actividades": "Examen\n\nTerminar / Corregir actividades pendientes",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "EXAMEN",
          "actividades": "Examen\n\nTerminar / Corregir actividades pendientes",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": true
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "PPT - 3\n- ¿Eres perfecto?",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Eres perfecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "3",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "Vídeo - Derechos Humanos\n\nDerechos Humanos - PROY\nContestar a las preguntas",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Material y búsqueda de noticia\nExamen",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "4",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 5",
          "actividades": "- Plickers - POR\nPPT - Profetas y Mesías",
          "avisos": "",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 5",
          "actividades": "- Plickers - POR\nPPT - Profetas y Mesías",
          "avisos": "",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Convivencia",
          "actividades": "IMPRIMIR ❌\n1º A - DDHH - C 30 ✅\n1º B - EX - C - 30 🔵\n2º A - EX - V 30 🔵\n2º B - EX - V 30 / C 4 🔵\n1º BAC - Caso de rescate - C 20 ✅",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Salida / Convivencia",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Convivencia",
          "actividades": "IMPRIMIR ❌\n\n1º A - DDHH - C 30 \n1º B - EX - C - 30 \n2º A - EX - V 30 \n2º B - EX - V 30 / C 4 \n\n1º BAC - Caso de rescate - C 20 ",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Salida / Convivencia",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Antropología",
          "actividades": "Diagnóstico antropológico\nProyecto\n\nEstuvieron estudiando",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Antropología",
          "actividades": "PPT - Aristóteles\n- Así soy - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Así soy",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º BACHILLERATO": {
          "tema": "¿Quién soy?",
          "actividades": "PPT 3 - Creencias nucleares y emociones\n- Creencias y emociones - PRO",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Creencias y emociones",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      }
    },
    {
      "week_index": 9,
      "week_num": 10,
      "num_sem": "Semana 10",
      "rango": "02/11 - 06/11",
      "fechas": "02/11 - 06/11",
      "date_start": "2026-11-02",
      "mes": "NOVIEMBRE",
      "tipo_sem": "Evaluación",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "📌 PENDIENTE (Sem. 9):\n---\nExplicar trabajo\nGrupos Trabajo - LOS HACÍAN ELLOS DURANTE LA SEMANA\n────────────────────\nNoticias de esperanza - PROY\n\n- Trabajo en clase",
          "avisos": "Revisión examen",
          "avisoDado": true,
          "educamos": "Actualizar notas TODAS",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "📌 PENDIENTE (Sem. 9):\n---\nExplicar trabajo\nGrupos Trabajo - LOS HACÍAN ELLOS DURANTE LA SEMANA\n────────────────────\nNoticias de esperanza - PROY\n\n- Trabajo en clase",
          "avisos": "Revisión examen",
          "avisoDado": true,
          "educamos": "Actualizar notas TODAS",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 6",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- Trabajar en clase.",
          "avisos": "Revisión examen",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 6",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- Trabajar en clase.",
          "avisos": "Revisión examen",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "Las grandes religiones",
          "actividades": "Ponencia Filosófica - PROYECTO\n- Trabajo en clase\n- ENTREGAR",
          "avisos": "Revisión examen",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "Ponencia Filosófica - PROYECTO\n- Trabajo en clase\n- ENTREGAR\n---\n\nEntregar tareas pendientes si hay.",
          "avisos": "Revisión Exámenes",
          "avisoDado": true,
          "educamos": "Actualizar todas las notas",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "PPT - Medios y fines\n- ¿Medios o fines? - PROYECTO",
          "avisos": "",
          "avisoDado": true,
          "educamos": "Medios o fines",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "Dignidad Humana",
          "actividades": "PPT - Medios y fines\n- ¿Medios o fines? - PROYECTO",
          "avisos": "",
          "avisoDado": true,
          "educamos": "Medios o fines",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "Vídeo - Derechos Humanos\n\nDerechos Humanos - PROY\nContestar a las preguntas",
          "avisos": "Capilla - Lunes Rosario - Jueves Adoración\n\nImprimir hojas",
          "avisoDado": false,
          "educamos": "Examen",
          "educamosDado": true,
          "imprimir": "Imprimir hojas de la sesión",
          "imprimirDado": false,
          "sesion": "4",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "EXAMEN",
          "actividades": "LUNES - 2 Noviembre\n¿Quiénes somos?\n---\nGrupos Proyecto - Noticias de Esperanza",
          "avisos": "Capilla - Lunes Rosario - Jueves Adoración\n\nAVISAR MATERIAL PERIÓDICO HUMANIZANTE\n- 1 Cartulina por grupo\n- Imágenes de las noticias",
          "avisoDado": true,
          "educamos": "Cartulina",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "EXAMEN",
          "actividades": "MIÉRCOLES - 4 Octubre\n- Historia de Israel 2\n---\n\nNOTICIERO\n\n- Explicar\n- Hacer grupos",
          "avisos": "- Capilla - Lunes Rosario - Jueves Adoración\nCartulina",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "EXAMEN",
          "actividades": "MIÉRCOLES - 4 Octubre\n- Historia de Israel 2\n---\n\nNOTICIERO\n\n- Explicar\n- Hacer grupos",
          "avisos": "- Capilla - Lunes Rosario - Jueves Adoración\nCartulina",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 3\n- Ficha 4 - Tabla de sentidos - POR",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Tabla de sentidos",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "PPT - 3\n- Ficha 4 - Tabla de sentidos - POR",
          "avisos": "- Capilla - Lunes Rosario - Jueves Adoración",
          "avisoDado": true,
          "educamos": "Tabla de sentidos",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "PPT - Medios y fines\n- ¿Medios o fines? - PROYECTO",
          "avisos": "- Capilla - Lunes Rosario - Jueves Adoración",
          "avisoDado": false,
          "educamos": "Medios o fines",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "Antropología",
          "actividades": "Aula Informática ?\n\nDiagnóstico antropológico",
          "avisos": "Capilla - Lunes Rosario - Jueves Adoración\n\nPENSAR ACTIVIDAD PROYECTO",
          "avisoDado": true,
          "educamos": "Proyecto",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "¿Quién soy?\n¿Dónde estoy?",
          "actividades": "Caso de rescate\n\n- Explicar trabajo\n- Trabajo en clase\n\n2 sesiones para hacerlo.",
          "avisos": "- Capilla - Lunes Rosario - Jueves Adoración",
          "avisoDado": false,
          "educamos": "Entrega trabajo Caso de rescate\nRevisión Cuadernos",
          "educamosDado": true,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 10,
      "week_num": 11,
      "num_sem": "Semana 11",
      "rango": "09/11 - 13/11",
      "fechas": "09/11 - 13/11",
      "date_start": "2026-11-09",
      "mes": "NOVIEMBRE",
      "tipo_sem": "Evaluación",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "Noticias de esperanza - PROY\n- Trabajo en clase\n\n- 0,5 puntos a cada grupo por gritar.",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "Noticias de esperanza - PROY\n- Trabajo en clase\n\n- 1 punto a cada grupo por gritar.",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 7",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- Trabajar en grupos",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 7",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- Trabajar en grupos",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "Terminar trabajo --> Pasar a cartulina y entregar\n---\n",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "Ponencia Filosófica - PROYECTO\n- Trabajo en clase\n- ENTREGAR\n---\n\nEntregar tareas pendientes si hay.",
          "avisos": "Revisión Examen",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "PPT - Dignidad cristiana\n- Hijos de Dios - PROYECTO",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Hijos de Dios",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Dignidad Humana",
          "actividades": "PPT - Dignidad cristiana\n- Hijos de Dios - PROYECTO",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Hijos de Dios",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "EXAMEN",
          "actividades": "LUNES - 9 Noviembre\n¿Quiénes somos?\n\n---\nGrupos Proyecto - Noticias de Esperanza\n\nCORREGIR ACTIVIDADES ATRASADAS ❌",
          "avisos": "AVISAR MATERIAL PERIÓDICO HUMANIZANTE\n- 1 Cartulina por grupo\n- Imágenes de las noticias",
          "avisoDado": false,
          "educamos": "Cartulina",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "Noticias de esperanza - PROY\n\n- Trabajo en clase",
          "avisos": "Revisión examen\n",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 6",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- Explicar trabajo\n- Hacer grupos",
          "avisos": "Revisión examen",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 6",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- Explicar trabajo\n- Hacer grupos",
          "avisos": "Revisión examen",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "Ficha 3 y 4 - PRO\n\nGabinete existencial - PROYECTO\n- Grupos de trabajo (5 personas)\n- Trabajo en clase",
          "avisos": "- Capilla - Lunes Rosario - Jueves Adoración",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "Ficha 3 y 4 - PRO\n\nGabinete existencial - PROYECTO\n- Grupos de trabajo (5 personas)\n- Trabajo en clase",
          "avisos": "IMPRIMIR",
          "avisoDado": true,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "Imprimir material (Búsqueda de sentido)",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "PPT - Dignidad cristiana\n- Hijos de Dios - PROYECTO",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Dignidad Humana",
          "actividades": "PPT - Medios y fines\n- ¿Medios o fines? - PROYECTO",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º BACHILLERATO": {
          "tema": "¿Quién soy?\n¿Dónde estoy?",
          "actividades": "Caso de rescate\n- Explicar trabajo\n- Trabajo en clase\n\n2 sesiones para hacerlo.\n---\nRevisión CUADERNOS",
          "avisos": "- Revisión rúbrica autoevaluación - Diario Personal\n\n7 Entradas",
          "avisoDado": false,
          "educamos": "Entrega trabajo Caso de rescate\nRevisión Cuadernos",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      }
    },
    {
      "week_index": 11,
      "week_num": 12,
      "num_sem": "Semana 12",
      "rango": "16/11 - 20/11",
      "fechas": "16/11 - 20/11",
      "date_start": "2026-11-16",
      "mes": "NOVIEMBRE",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "Periódico Humanizante - PROY\n- Trabajo en clase\n\nEXPOSICIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "Periódico Humanizante - PROY\n- Trabajo en clase\n\nEXPOSICIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 8",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- EXPONER",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 8",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- EXPONER",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Las grandes religiones",
          "actividades": "• 📖 EXPLICACIÓN: PPT - 1\n• 📂 PORTFOLIO: - Mi religión",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Las grandes religiones",
          "actividades": "• 📖 EXPLICACIÓN: PPT - 1\n• 📂 PORTFOLIO: - Mi religión",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "Derechos Humanos - PROYECTO\n\nVer vídeo.\nLeer texto y contestar a las preguntas.",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Dignidad Humana",
          "actividades": "Derechos Humanos - PROYECTO\n\nVer vídeo.\nLeer texto y contestar a las preguntas.",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "Periódico Humanizante - PROY\n- Explicación proyecto\n- Grupos\n- Trabajo en clase",
          "avisos": "Revisión examen",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "Periódico Humanizante - PROY\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 7",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- Trabajar en grupos",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 7",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- Trabajar en grupos",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "Ponencia Filosófica - PROYECTO\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "Ponencia Filosófica - PROYECTO\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "Derechos Humanos - PROYECTO\n\nVer vídeo.\nLeer texto y contestar a las preguntas.",
          "avisos": "IMPRIMIR",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "Imprimir material (Dignidad Humana)",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Dignidad Humana",
          "actividades": "PPT - Dignidad cristiana\n- Hijos de Dios - PROYECTO",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Hijos de Dios",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º BACHILLERATO": {
          "tema": "¿Quién soy?\n¿Dónde estoy?",
          "actividades": "Acabar trabajos pendientes\n\n¿Estudiar?\n\nRevisión CUADERNOS",
          "avisos": "- Revisión rúbrica autoevaluación - Diario Personal\n\n8 Entradas",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      }
    },
    {
      "week_index": 12,
      "week_num": 13,
      "num_sem": "Semana 13",
      "rango": "23/11 - 27/11",
      "fechas": "23/11 - 27/11",
      "date_start": "2026-11-23",
      "mes": "NOVIEMBRE",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "Religiones - ¿Para qué somos?\n\n- PPT 1\n\n- Cofre del Tesoro",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "Religiones - ¿Para qué somos?\n\n- PPT 1\n\n- Cofre del Tesoro",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 1\n- RP - Antes pensaba, ahora pienso",
          "avisos": "",
          "avisoDado": false,
          "educamos": "RP - Antes pensaba, ahora pienso",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 1\n- RP - Antes pensaba, ahora pienso",
          "avisos": "",
          "avisoDado": false,
          "educamos": "RP - Antes pensaba, ahora pienso",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "Las grandes religiones",
          "actividades": "• 👥 TRABAJO EN CLASE:",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Las grandes religiones",
          "actividades": "• 👥 TRABAJO EN CLASE:",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "Pena de muerte\n\nPreparar Debate",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Dignidad Humana",
          "actividades": "Pena de muerte\n\nPreparar Debate",
          "avisos": "REVISAR",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "Periódico Humanizante - PROY\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Proyecto",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Quiénes somos?",
          "actividades": "Periódico Humanizante - PROY\n- Trabajo en clase\n\nEXPOSICIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Historia de Israel 8",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- EXPONER",
          "avisos": "PRO",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Historia de Israel 8",
          "actividades": "Noticiario de la historia - PROYECTO\n\n- EXPONER",
          "avisos": "PRO",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "Búsqueda de sentido",
          "actividades": "Ponencia Filosófica - PROYECTO\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Examen",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Búsqueda de sentido",
          "actividades": "Ponencia Filosófica - PROYECTO\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Examen",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "Pena de muerte\n\nPreparar Debate",
          "avisos": "IMPRIMIR",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "Imprimir material (Dignidad Humana)",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Dignidad Humana",
          "actividades": "Derechos Humanos - PROYECTO\n\nVer vídeo.\nLeer texto y contestar a las preguntas.",
          "avisos": "IMPRIMIR",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "Imprimir material (Dignidad Humana)",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º BACHILLERATO": {
          "tema": "Están de exámenes",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": true
        }
      }
    },
    {
      "week_index": 13,
      "week_num": 14,
      "num_sem": "Semana 14",
      "rango": "30/11 - 04/12",
      "fechas": "30/11 - 04/12",
      "date_start": "2026-11-30",
      "mes": "DICIEMBRE",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "Plickers - PPT 1\n\n- PPT 2\n\n- Las preguntas (Pizarra)",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "Plickers - PPT 1\n\n- PPT 2\n\n- Las preguntas (Pizarra)",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 2\n- Semáforo",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Semáforo",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 2\n- Semáforo",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Semáforo",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "Las grandes religiones",
          "actividades": "• 🚀 PROYECTO: EXPONER",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - B": {
          "tema": "Las grandes religiones",
          "actividades": "• 🚀 PROYECTO: EXPONER",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "Pena de muerte\n\nHacer debate en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "Dignidad Humana",
          "actividades": "Pena de muerte\n\nHacer debate en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Quiénes somos?",
          "actividades": "Periódico Humanizante - PROY\n- Trabajo en clase\n\nEXPOSICIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Trabajo",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "Religiones - ¿Para qué somos?\n\n- PPT 1\n\n- Cofre del Tesoro",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 1\n- Antes pensaba, ahora pienso",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Antes pensaba, ahora pienso",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 1\n- Antes pensaba, ahora pienso",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Antes pensaba, ahora pienso",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "EXAMEN",
          "actividades": "JUEVES - 29 Octubre\n\n- Búsqueda de sentido",
          "avisos": "IMPRIMIR",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "Imprimir material (EXAMEN)",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "EXAMEN",
          "actividades": "JUEVES - 29 Octubre\n\n- Búsqueda de sentido",
          "avisos": "IMPRIMIR",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "Imprimir material (EXAMEN)",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Dignidad Humana",
          "actividades": "Pena de muerte\n\nHacer debate en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "4º ESO - B": {
          "tema": "EXAMEN",
          "actividades": "",
          "avisos": "IMPRIMIR",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "Imprimir material (EXAMEN)",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 14,
      "week_num": 15,
      "num_sem": "Semana 15",
      "rango": "07/12 - 11/12",
      "fechas": "07/12 - 11/12",
      "date_start": "2026-12-07",
      "mes": "DICIEMBRE",
      "tipo_sem": "Festivo",
      "manises": {
        "1º ESO - A": {
          "tema": "INMACULADA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "INMACULADA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "INMACULADA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "INMACULADA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "INMACULADA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "INMACULADA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 2\n- Semáforo",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Semáforo",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 2\n- Semáforo",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Semáforo",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "EXAMEN",
          "actividades": "",
          "avisos": "IMPRIMIR",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "Imprimir material (EXAMEN)",
          "imprimirDado": false,
          "sesion": "Examen",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 15,
      "week_num": 16,
      "num_sem": "Semana 16",
      "rango": "14/12 - 18/12",
      "fechas": "14/12 - 18/12",
      "date_start": "2026-12-14",
      "mes": "DICIEMBRE",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "Plickers - PPT 2\n\nTOUR ESPIRITUAL\n\n- Grupos\n- Explicar actividad\n- Rúbricas\n- Materiales",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "Plickers - PPT 2\n\nTOUR ESPIRITUAL\n\n- Grupos\n- Explicar actividad\n- Rúbricas\n- Materiales",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 3\n- Semáforo",
          "avisos": "Cartulina",
          "avisoDado": false,
          "educamos": "Semáforo",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 3\n- Semáforo",
          "avisos": "Cartulina",
          "avisoDado": false,
          "educamos": "Semáforo",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "INMACULADA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "Religiones - ¿Para qué somos?\n\n- PPT 1\n\n- Cofre del Tesoro",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "Plickers - PPT 1\n\n- PPT 2\n\n- Las preguntas (Pizarra)",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 3\n- Semáforo",
          "avisos": "Cartulina",
          "avisoDado": false,
          "educamos": "Semáforo",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "PPT 3\n- Semáforo",
          "avisos": "Cartulina",
          "avisoDado": false,
          "educamos": "Semáforo",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "Revisión examen",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "Revisión examen",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Aborto",
          "actividades": "S1 - El estatuto del embrióon - Es una vida con posibilidades\n\nRutina de pensamiento",
          "avisos": "Revisión examen",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "Aborto",
          "actividades": "S1 - El estatuto del embrióon - Es una vida con posibilidades\n\nRutina de pensamiento",
          "avisos": "PENSAR ACTIVIDAD PROYECTO\n\nRevisión examen",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 16,
      "week_num": 17,
      "num_sem": "Semana 17",
      "rango": "21/12 - 25/12",
      "fechas": "21/12 - 25/12",
      "date_start": "2026-12-21",
      "mes": "DICIEMBRE",
      "tipo_sem": "Vacaciones",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "Trabajo - Expediente galilea\n- Explicación trabajo\n- Grupos\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "Trabajo - Expediente galilea\n- Explicación trabajo\n- Grupos\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "Plickers - PPT 1\n\n- PPT 2\n\n- Las preguntas (Pizarra)",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "Plickers - PPT 2\n\nTOUR ESPIRITUAL\n\n- Grupos\n- Explicar actividad\n- Rúbricas\n- Materiales",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "Trabajo - Expediente galilea\n- Explicación trabajo\n- Grupos\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "Trabajo - Expediente galilea\n- Explicación trabajo\n- Grupos\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "Aborto",
          "actividades": "Plickers - S1\n\nS2 - Conflicto cultural y legal - Legalidad y mooralidad. Argumentos a favor y en contra\n\nVídeo - María del Himalaya\n\nRP - Semáforo",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "Aborto",
          "actividades": "Plickers - S1\n\nS2 - Conflicto cultural y legal - Legalidad y mooralidad. Argumentos a favor y en contra\n\nVídeo - María del Himalaya\n\nRP - Semáforo",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      }
    },
    {
      "week_index": 17,
      "week_num": 18,
      "num_sem": "Semana 18",
      "rango": "28/12 - 01/01",
      "fechas": "28/12 - 01/01",
      "date_start": "2026-12-28",
      "mes": "ENERO",
      "tipo_sem": "Vacaciones",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "Trabajo - Expediente galilea\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Exposición",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "Trabajo - Expediente galilea\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Exposición",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "Trabajo - Expediente galilea\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Exposición",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "Trabajo - Expediente galilea\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Exposición",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": true
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      }
    },
    {
      "week_index": 18,
      "week_num": 19,
      "num_sem": "Semana 19",
      "rango": "04/01 - 08/01",
      "fechas": "04/01 - 08/01",
      "date_start": "2027-01-04",
      "mes": "ENERO",
      "tipo_sem": "Vacaciones",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "Jesús, encuentro y noticia",
          "actividades": "Trabajo - Expediente galilea\n- Trabajo en clase",
          "avisos": "",
          "avisoDado": false,
          "educamos": "Exposición",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": true
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      }
    },
    {
      "week_index": 19,
      "week_num": 20,
      "num_sem": "Semana 20",
      "rango": "11/01 - 15/01",
      "fechas": "11/01 - 15/01",
      "date_start": "2027-01-11",
      "mes": "ENERO",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "Plickers - PPT 2\n\nTOUR ESPIRITUAL\n\n- Grupos\n- Explicar actividad\n- Rúbricas\n- Materiales",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "NIEVE",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Salida / Convivencia",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "NIEVE",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Salida / Convivencia",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 20,
      "week_num": 21,
      "num_sem": "Semana 21",
      "rango": "18/01 - 22/01",
      "fechas": "18/01 - 22/01",
      "date_start": "2027-01-18",
      "mes": "ENERO",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE\n\n- EXPOSICIÓN - REVISIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE\n\n- EXPOSICIÓN - REVISIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE\n\n- EXPOSICIÓN - REVISIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 21,
      "week_num": 22,
      "num_sem": "Semana 22",
      "rango": "25/01 - 29/01",
      "fechas": "25/01 - 29/01",
      "date_start": "2027-01-25",
      "mes": "ENERO",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE\n\n- EXPOSICIÓN - REVISIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE\n\n- EXPOSICIÓN - REVISIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE\n\n- EXPOSICIÓN - REVISIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE\n\n- EXPOSICIÓN - REVISIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 22,
      "week_num": 23,
      "num_sem": "Semana 23",
      "rango": "01/02 - 05/02",
      "fechas": "01/02 - 05/02",
      "date_start": "2027-02-01",
      "mes": "FEBRERO",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "¿Para qué somos?",
          "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE\n\n- EXPOSICIÓN - REVISIÓN",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 23,
      "week_num": 24,
      "num_sem": "Semana 24",
      "rango": "08/02 - 12/02",
      "fechas": "08/02 - 12/02",
      "date_start": "2027-02-08",
      "mes": "FEBRERO",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 24,
      "week_num": 25,
      "num_sem": "Semana 25",
      "rango": "15/02 - 19/02",
      "fechas": "15/02 - 19/02",
      "date_start": "2027-02-15",
      "mes": "FEBRERO",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 25,
      "week_num": 26,
      "num_sem": "Semana 26",
      "rango": "22/02 - 26/02",
      "fechas": "22/02 - 26/02",
      "date_start": "2027-02-22",
      "mes": "FEBRERO",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 26,
      "week_num": 27,
      "num_sem": "Semana 27",
      "rango": "01/03 - 05/03",
      "fechas": "01/03 - 05/03",
      "date_start": "2027-03-01",
      "mes": "MARZO",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 27,
      "week_num": 28,
      "num_sem": "Semana 28",
      "rango": "08/03 - 12/03",
      "fechas": "08/03 - 12/03",
      "date_start": "2027-03-08",
      "mes": "MARZO",
      "tipo_sem": "Evaluación",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 28,
      "week_num": 29,
      "num_sem": "Semana 29",
      "rango": "15/03 - 19/03",
      "fechas": "15/03 - 19/03",
      "date_start": "2027-03-15",
      "mes": "MARZO",
      "tipo_sem": "Vacaciones",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Festivo",
          "preparada": false
        }
      }
    },
    {
      "week_index": 29,
      "week_num": 30,
      "num_sem": "Semana 30",
      "rango": "22/03 - 26/03",
      "fechas": "22/03 - 26/03",
      "date_start": "2027-03-22",
      "mes": "MARZO",
      "tipo_sem": "Vacaciones",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "FALLAS",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 30,
      "week_num": 31,
      "num_sem": "Semana 31",
      "rango": "29/03 - 02/04",
      "fechas": "29/03 - 02/04",
      "date_start": "2027-03-29",
      "mes": "ABRIL",
      "tipo_sem": "Vacaciones",
      "manises": {
        "1º ESO - A": {
          "tema": "PASCUA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "PASCUA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "PASCUA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "PASCUA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "PASCUA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "PASCUA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "PASCUA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      }
    },
    {
      "week_index": 31,
      "week_num": 32,
      "num_sem": "Semana 32",
      "rango": "05/04 - 09/04",
      "fechas": "05/04 - 09/04",
      "date_start": "2027-04-05",
      "mes": "ABRIL",
      "tipo_sem": "Vacaciones",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "PASCUA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "PASCUA",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      }
    },
    {
      "week_index": 32,
      "week_num": 33,
      "num_sem": "Semana 33",
      "rango": "12/04 - 16/04",
      "fechas": "12/04 - 16/04",
      "date_start": "2027-04-12",
      "mes": "ABRIL",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 33,
      "week_num": 34,
      "num_sem": "Semana 34",
      "rango": "19/04 - 23/04",
      "fechas": "19/04 - 23/04",
      "date_start": "2027-04-19",
      "mes": "ABRIL",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 34,
      "week_num": 35,
      "num_sem": "Semana 35",
      "rango": "26/04 - 30/04",
      "fechas": "26/04 - 30/04",
      "date_start": "2027-04-26",
      "mes": "ABRIL",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 35,
      "week_num": 36,
      "num_sem": "Semana 36",
      "rango": "03/05 - 07/05",
      "fechas": "03/05 - 07/05",
      "date_start": "2027-05-03",
      "mes": "MAYO",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 36,
      "week_num": 37,
      "num_sem": "Semana 37",
      "rango": "10/05 - 14/05",
      "fechas": "10/05 - 14/05",
      "date_start": "2027-05-10",
      "mes": "MAYO",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 37,
      "week_num": 38,
      "num_sem": "Semana 38",
      "rango": "17/05 - 21/05",
      "fechas": "17/05 - 21/05",
      "date_start": "2027-05-17",
      "mes": "MAYO",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 38,
      "week_num": 39,
      "num_sem": "Semana 39",
      "rango": "24/05 - 28/05",
      "fechas": "24/05 - 28/05",
      "date_start": "2027-05-24",
      "mes": "MAYO",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 39,
      "week_num": 40,
      "num_sem": "Semana 40",
      "rango": "31/05 - 04/06",
      "fechas": "31/05 - 04/06",
      "date_start": "2027-05-31",
      "mes": "JUNIO",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 40,
      "week_num": 41,
      "num_sem": "Semana 41",
      "rango": "07/06 - 11/06",
      "fechas": "07/06 - 11/06",
      "date_start": "2027-06-07",
      "mes": "JUNIO",
      "tipo_sem": "Exámenes",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "VIAJE",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Salida / Convivencia",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "VIAJE",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "Salida / Convivencia",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 41,
      "week_num": 42,
      "num_sem": "Semana 42",
      "rango": "14/06 - 18/06",
      "fechas": "14/06 - 18/06",
      "date_start": "2027-06-14",
      "mes": "JUNIO",
      "tipo_sem": "Evaluación",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        }
      }
    },
    {
      "week_index": 42,
      "week_num": 43,
      "num_sem": "Semana 43",
      "rango": "21/06 - 25/06",
      "fechas": "21/06 - 25/06",
      "date_start": "2027-06-21",
      "mes": "JUNIO",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      }
    },
    {
      "week_index": 43,
      "week_num": 44,
      "num_sem": "Semana 44",
      "rango": "28/06 - 02/07",
      "fechas": "28/06 - 02/07",
      "date_start": "2027-06-28",
      "mes": "JULIO",
      "tipo_sem": "",
      "manises": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      },
      "ribarroja": {
        "1º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "2º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "3º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - A": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "4º ESO - B": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        },
        "1º BACHILLERATO": {
          "tema": "",
          "actividades": "",
          "avisos": "",
          "avisoDado": false,
          "educamos": "",
          "educamosDado": false,
          "imprimir": "",
          "imprimirDado": false,
          "sesion": "No Clase",
          "preparada": false
        }
      }
    }
  ],
  "holidays": {
    "2026-09-14": true,
    "2026-10-12": true,
    "2026-11-01": true,
    "2026-12-06": true,
    "2026-12-07": true,
    "2026-12-08": true,
    "2027-01-06": true,
    "2027-03-17": true,
    "2027-03-18": true,
    "2027-03-19": true,
    "2027-04-05": true,
    "2027-04-12": true,
    "2027-05-01": true
  },
  "calendarEvents": {
    "2026-09-25": {
      "classesHeld": true,
      "notes": "",
      "school": "ambos",
      "title": "Día Lectivo Normal",
      "type": "lectivo"
    }
  },
  "sessionBank": {
    "1º ESO": [
      {
        "id": "t_1eso_0",
        "title": "Tema 0 · Presentación Curso",
        "sessions": [
          {
            "id": "s_1eso_01",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Classroom / Explicar TEAMS\n\nCuestionario Inicial",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_02",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
            "avisos": "TD",
            "educamos": "",
            "imprimir": "Prueba inicial y Lectura comprensiva"
          }
        ]
      },
      {
        "id": "t_1eso_1",
        "title": "Tema 1 · ¿Quiénes somos? (Dignidad y Periódico Humanizante)",
        "sessions": [
          {
            "id": "s_1eso_03",
            "tema": "¿Quiénes somos?",
            "sesion": "1",
            "actividades": "Presentar Rúbrica del Portfolio\n\nPPT - 1\n\n- Contextos dignidad humana - POR",
            "avisos": "- Avisar fecha EXAMEN\n- LM - IA",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_04",
            "tema": "¿Quiénes somos?",
            "sesion": "2",
            "actividades": "PPT - 2\n- Citas bíblicas - POR\n- Lista de problemas medioambientales - POR\n* Corregir Contextos mientras trabajan.",
            "avisos": "",
            "educamos": "Medioambiente",
            "imprimir": ""
          },
          {
            "id": "s_1eso_05",
            "tema": "¿Quiénes somos?",
            "sesion": "3",
            "actividades": "PPT - 3\n- ¿Eres perfecto?",
            "avisos": "",
            "educamos": "Material y búsqueda de noticia",
            "imprimir": ""
          },
          {
            "id": "s_1eso_06",
            "tema": "¿Quiénes somos?",
            "sesion": "4",
            "actividades": "Vídeo - Derechos Humanos\n\nDerechos Humanos - PROY\nContestar a las preguntas",
            "avisos": "",
            "educamos": "Examen",
            "imprimir": "Ficha Derechos Humanos (30 copias)"
          },
          {
            "id": "s_1eso_07",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Examen - ¿Quiénes somos?\n---\nExplicar trabajo\nGrupos Proyecto - Noticias de Esperanza / Periódico Humanizante",
            "avisos": "AVISAR MATERIAL PERIÓDICO HUMANIZANTE\n- 1 Cartulina por grupo\n- Imágenes de las noticias",
            "educamos": "Material Noticias de esperanza / Cartulina",
            "imprimir": "Exámenes ¿Quiénes somos? (30 copias)"
          },
          {
            "id": "s_1eso_08",
            "tema": "¿Quiénes somos?",
            "sesion": "Trabajo",
            "actividades": "Noticias de esperanza / Periódico Humanizante - PROY\n\n- Trabajo en clase",
            "avisos": "Revisión examen",
            "educamos": "Proyecto",
            "imprimir": ""
          },
          {
            "id": "s_1eso_09",
            "tema": "¿Quiénes somos?",
            "sesion": "Trabajo",
            "actividades": "Periódico Humanizante - PROY\n- Trabajo en clase\n\nEXPOSICIÓN",
            "avisos": "",
            "educamos": "Actualizar notas",
            "imprimir": ""
          }
        ]
      },
      {
        "id": "t_1eso_2",
        "title": "Tema 2 · ¿Para qué somos? (Religiones y Tour Espiritual)",
        "sessions": [
          {
            "id": "s_1eso_10",
            "tema": "¿Para qué somos?",
            "sesion": "",
            "actividades": "Religiones - ¿Para qué somos?\n\n- PPT 1\n\n- Cofre del Tesoro",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_11",
            "tema": "¿Para qué somos?",
            "sesion": "",
            "actividades": "Plickers - PPT 1\n\n- PPT 2\n\n- Las preguntas (Pizarra)",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_12",
            "tema": "¿Para qué somos?",
            "sesion": "Trabajo",
            "actividades": "Plickers - PPT 2\n\nTOUR ESPIRITUAL\n\n- Grupos\n- Explicar actividad\n- Rúbricas\n- Materiales",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_13",
            "tema": "¿Para qué somos?",
            "sesion": "Trabajo",
            "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_14",
            "tema": "¿Para qué somos?",
            "sesion": "Trabajo",
            "actividades": "TOUR ESPIRITUAL\n\n- TRABAJO EN CLASE\n\n- EXPOSICIÓN - REVISIÓN",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_15",
            "tema": "¿Para qué somos?",
            "sesion": "Exposición",
            "actividades": "TOUR ESPIRITUAL\n\n- EXPOSICIÓN FINAL Y COEVALUACIÓN",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          }
        ]
      },
      {
        "id": "t_1eso_3",
        "title": "Tema 3 · Dios nos habla (La Biblia)",
        "sessions": [
          {
            "id": "s_1eso_16",
            "tema": "Dios nos habla",
            "sesion": "",
            "actividades": "PPT 1: La Biblia como biblioteca sagrada y palabra de Dios.\n- Rutina de pensamiento: '¿Qué he aprendido?' - POR",
            "avisos": "",
            "educamos": "Rutina ¿Qué he aprendido?",
            "imprimir": ""
          },
          {
            "id": "s_1eso_17",
            "tema": "Dios nos habla",
            "sesion": "",
            "actividades": "Plickers PPT 1.\n\nPPT 2: Lenguajes y géneros literarios en la Biblia: 'El código secreto'.\n- Dinámica de comunicación divina - TD",
            "avisos": "Plickers",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_18",
            "tema": "Dios nos habla",
            "sesion": "",
            "actividades": "Plickers PPT 2.\n\nPPT 3: Dios me habla hoy a través de los acontecimientos y los demás.\n- Rutina del Semáforo - POR",
            "avisos": "Plickers",
            "educamos": "Rutina del Semáforo",
            "imprimir": ""
          }
        ]
      },
      {
        "id": "t_1eso_4",
        "title": "Tema 4 · Historia de Israel (Patriarcas y Éxodo)",
        "sessions": [
          {
            "id": "s_1eso_19",
            "tema": "Historia de Israel",
            "sesion": "",
            "actividades": "La vocación de Abraham: la fe como respuesta y confianza.\n- Actividad de cartografía: Rutas de la Media Luna Fértil - POR",
            "avisos": "",
            "educamos": "Cartografía bíblica",
            "imprimir": "Mapa Media Luna Fértil"
          },
          {
            "id": "s_1eso_20",
            "tema": "Historia de Israel",
            "sesion": "",
            "actividades": "Plickers.\n- Isaac y la renovación de la alianza.\n- Rutina de pensamiento sobre fidelidad y promesas - POR",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_21",
            "tema": "Historia de Israel",
            "sesion": "",
            "actividades": "Plickers.\n- Jacob y Esaú: conflicto fraternal, perdón y la lucha nocturna en Peniel.\n- Rutina de pensamiento - POR",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_22",
            "tema": "Historia de Israel",
            "sesion": "",
            "actividades": "Jacob (II): Las doce tribus de Israel y la identidad del Pueblo Elegido.\n- Rutina de pensamiento genealógica - POR",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_23",
            "tema": "Historia de Israel",
            "sesion": "",
            "actividades": "Plickers.\n- José y sus hermanos: envidia, providencia divina, acogida y reconciliación en Egipto - POR",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1eso_24",
            "tema": "Historia de Israel",
            "sesion": "",
            "actividades": "Plickers.\n- La opresión en Egipto, la vocación de Moisés y la liberación del Éxodo - POR",
            "avisos": "",
            "educamos": "Examen",
            "imprimir": ""
          },
          {
            "id": "s_1eso_25",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Prueba de Síntesis: Dios nos habla e Historia de Israel (Patriarcas y Éxodo)",
            "avisos": "",
            "educamos": "",
            "imprimir": "Exámenes Historia de Israel (30 copias)"
          }
        ]
      }
    ],
    "2º ESO": [
      {
        "id": "t_2eso_0",
        "title": "Tema 0 · Presentación Curso",
        "sessions": [
          {
            "id": "s_2eso_01",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Classroom / TEAMS\n\nCuestionario Inicial",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_2eso_02",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
            "avisos": "TD",
            "educamos": "",
            "imprimir": "Prueba inicial y Lectura comprensiva"
          }
        ]
      },
      {
        "id": "t_2eso_1",
        "title": "Tema 1 · Historia de Israel 2 (Jueces, Reyes, Profetas y Noticiario)",
        "sessions": [
          {
            "id": "s_2eso_03",
            "tema": "Historia de Israel 2",
            "sesion": "",
            "actividades": "PPT - Jueces\n\n- Semáforo - TD",
            "avisos": "- Avisar fecha EXAMEN\n- LM - IA",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_2eso_04",
            "tema": "Historia de Israel 2",
            "sesion": "",
            "actividades": "- Plickers - POR\nPPT - Monarquía",
            "avisos": "Plickers",
            "educamos": "Plickers - Monarquía",
            "imprimir": ""
          },
          {
            "id": "s_2eso_05",
            "tema": "Historia de Israel 4",
            "sesion": "",
            "actividades": "- Plickers - POR\nPPT - División del Reino",
            "avisos": "",
            "educamos": "Plickers División del reino",
            "imprimir": ""
          },
          {
            "id": "s_2eso_06",
            "tema": "Historia de Israel 5",
            "sesion": "",
            "actividades": "- Plickers - POR\nPPT - Profetas y Mesías",
            "avisos": "",
            "educamos": "Examen",
            "imprimir": ""
          },
          {
            "id": "s_2eso_07",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Examen - Historia de Israel 2\n---\nNOTICIERO\n- Explicar\n- Hacer grupos",
            "avisos": "Cartulina",
            "educamos": "",
            "imprimir": "Exámenes Historia de Israel 2 (30 copias)"
          },
          {
            "id": "s_2eso_08",
            "tema": "Historia de Israel 6",
            "sesion": "Trabajo",
            "actividades": "Noticiario de la historia - PROYECTO\n\n- Explicar trabajo\n- Trabajar en clase",
            "avisos": "Revisión examen",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_2eso_09",
            "tema": "Historia de Israel 7",
            "sesion": "Trabajo",
            "actividades": "Noticiario de la historia - PROYECTO\n\n- Trabajar en grupos",
            "avisos": "",
            "educamos": "Proyecto",
            "imprimir": ""
          },
          {
            "id": "s_2eso_10",
            "tema": "Historia de Israel 8",
            "sesion": "Exposición",
            "actividades": "Noticiario de la historia - PROYECTO\n\n- EXPONER",
            "avisos": "PRO",
            "educamos": "",
            "imprimir": ""
          }
        ]
      },
      {
        "id": "t_2eso_2",
        "title": "Tema 2 · Jesús, encuentro y noticia (Expediente Galilea)",
        "sessions": [
          {
            "id": "s_2eso_11",
            "tema": "Jesús, encuentro y noticia",
            "sesion": "",
            "actividades": "PPT 1\n- RP - Antes pensaba, ahora pienso",
            "avisos": "",
            "educamos": "RP - Antes pensaba, ahora pienso",
            "imprimir": ""
          },
          {
            "id": "s_2eso_12",
            "tema": "Jesús, encuentro y noticia",
            "sesion": "",
            "actividades": "PPT 2\n- Semáforo",
            "avisos": "",
            "educamos": "Semáforo",
            "imprimir": ""
          },
          {
            "id": "s_2eso_13",
            "tema": "Jesús, encuentro y noticia",
            "sesion": "",
            "actividades": "PPT 3\n- Semáforo",
            "avisos": "Cartulina",
            "educamos": "Semáforo",
            "imprimir": ""
          },
          {
            "id": "s_2eso_14",
            "tema": "Jesús, encuentro y noticia",
            "sesion": "Trabajo",
            "actividades": "Trabajo - Expediente galilea\n- Explicación trabajo\n- Grupos\n- Trabajo en clase",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_2eso_15",
            "tema": "Jesús, encuentro y noticia",
            "sesion": "Trabajo",
            "actividades": "Trabajo - Expediente galilea\n- Trabajo en clase",
            "avisos": "",
            "educamos": "Exposición",
            "imprimir": ""
          },
          {
            "id": "s_2eso_16",
            "tema": "Jesús, encuentro y noticia",
            "sesion": "Exposición",
            "actividades": "Trabajo - Expediente galilea\n- Trabajo en clase y Exposición final",
            "avisos": "",
            "educamos": "Exposición",
            "imprimir": ""
          },
          {
            "id": "s_2eso_17",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Prueba de Síntesis: Jesús, encuentro y noticia",
            "avisos": "",
            "educamos": "",
            "imprimir": "Exámenes Jesús, encuentro y noticia (30 copias)"
          }
        ]
      },
      {
        "id": "t_2eso_3",
        "title": "Tema 3 · Cinefórum: Maktub y el sentido del sufrimiento",
        "sessions": [
          {
            "id": "s_2eso_18",
            "tema": "Cinefórum: Maktub",
            "sesion": "",
            "actividades": "Debate con post-its: '¿Es justo que a la gente buena le pasen cosas malas?'\n- Proyección: 'Maktub' (Parte 1) - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_2eso_19",
            "tema": "Cinefórum: Maktub",
            "sesion": "",
            "actividades": "Proyección: 'Maktub' (Parte 2).\n- Relación con el relato bíblico de Job (El misterio del sufrimiento inocente) - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_2eso_20",
            "tema": "Cinefórum: Maktub",
            "sesion": "",
            "actividades": "Proyección: 'Maktub' (Parte 3).\n- Análisis del personaje de Manolo y la transformación a través de la entrega - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_2eso_21",
            "tema": "Cinefórum: Maktub",
            "sesion": "",
            "actividades": "Desenlace de 'Maktub'.\n- Trabajo individual con la Ficha 1 de comprensión y reflexión - POR",
            "avisos": "",
            "educamos": "Ficha 1 Maktub",
            "imprimir": "Ficha 1 Maktub (30 copias)"
          },
          {
            "id": "s_2eso_22",
            "tema": "Cinefórum: Maktub",
            "sesion": "",
            "actividades": "Puesta en común de conclusiones de la Ficha 1 de 'Maktub'.\n- Lectura comentada sobre el valor de la vida y la gratitud - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          }
        ]
      }
    ],
    "3º ESO": [
      {
        "id": "t_3eso_0",
        "title": "Tema 0 · Presentación Curso",
        "sessions": [
          {
            "id": "s_3eso_01",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Classroom / TEAMS\n\nCuestionario Inicial",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_02",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Prueba inicial - TD\n\nLectura comprensiva - TD\n\nGRUPOS CLASE (FIJOS)",
            "avisos": "TD",
            "educamos": "",
            "imprimir": "Prueba inicial y Lectura comprensiva"
          }
        ]
      },
      {
        "id": "t_3eso_1",
        "title": "Tema 1 · Búsqueda de sentido (Gabinete Existencial y Ponencia Filosófica)",
        "sessions": [
          {
            "id": "s_3eso_03",
            "tema": "Búsqueda de sentido",
            "sesion": "",
            "actividades": "PPT - 1\n- Vídeo - Curiosamente\n- Ficha 1 - Preguntas fundamentales - POR",
            "avisos": "Aviso - EXAMEN (Fecha)\nIA",
            "educamos": "Preguntas fundamentales",
            "imprimir": "Ficha 1 - Preguntas fundamentales"
          },
          {
            "id": "s_3eso_04",
            "tema": "Búsqueda de sentido",
            "sesion": "",
            "actividades": "PPT - 2\n- Vídeo - Curiosamente\n\n- Ficha 3 - Creencias y certezas - POR",
            "avisos": "",
            "educamos": "Creencias y certezas",
            "imprimir": "Ficha 3 - Creencias y certezas"
          },
          {
            "id": "s_3eso_05",
            "tema": "Búsqueda de sentido",
            "sesion": "",
            "actividades": "PPT - 3\n- Vídeo - Curiosamente\n- Ficha 4 - Tabla de sentidos - POR",
            "avisos": "",
            "educamos": "Tabla de sentidos",
            "imprimir": "Ficha 4 - Tabla de sentidos"
          },
          {
            "id": "s_3eso_06",
            "tema": "Búsqueda de sentido",
            "sesion": "Trabajo",
            "actividades": "Gabinete existencial - PROYECTO\n- Grupos de trabajo (5 personas)\n- Explicación y trabajo en clase",
            "avisos": "",
            "educamos": "Cartulina para clase / Examen",
            "imprimir": ""
          },
          {
            "id": "s_3eso_07",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Examen - Búsqueda de sentido\n---\nSeguir trabajando en el proyecto Gabinete Existencial",
            "avisos": "",
            "educamos": "Proyecto",
            "imprimir": "Exámenes Búsqueda de sentido (30 copias)"
          },
          {
            "id": "s_3eso_08",
            "tema": "Búsqueda de sentido",
            "sesion": "Trabajo",
            "actividades": "Ponencia Filosófica - PROYECTO\n- Trabajo en clase",
            "avisos": "Revisión examen",
            "educamos": "Proyecto",
            "imprimir": ""
          },
          {
            "id": "s_3eso_09",
            "tema": "Búsqueda de sentido",
            "sesion": "Exposición",
            "actividades": "Ponencia Filosófica - PROYECTO\n- Terminar trabajo --> Pasar a cartulina y ENTREGAR",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          }
        ]
      },
      {
        "id": "t_3eso_2",
        "title": "Tema 2 · Las grandes religiones",
        "sessions": [
          {
            "id": "s_3eso_10",
            "tema": "Las grandes religiones",
            "sesion": "",
            "actividades": "• 📖 EXPLICACIÓN: PPT - 1\n• 📂 PORTFOLIO: - Mi religión",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_11",
            "tema": "Las grandes religiones",
            "sesion": "Trabajo",
            "actividades": "• 👥 TRABAJO EN CLASE: Proyecto Las grandes religiones",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_12",
            "tema": "Las grandes religiones",
            "sesion": "Exposición",
            "actividades": "• 🚀 PROYECTO: EXPONER",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          }
        ]
      },
      {
        "id": "t_3eso_3",
        "title": "Tema 3 · Conciencia, Libertad y «Hasta el último hombre»",
        "sessions": [
          {
            "id": "s_3eso_13",
            "tema": "Cinefórum: Hasta el último hombre",
            "sesion": "",
            "actividades": "Proyección: 'Hasta el último hombre' (Parte 1).\n- Presentación del trabajo sobre objeción de conciencia, fe y deber moral - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_14",
            "tema": "Cinefórum: Hasta el último hombre",
            "sesion": "",
            "actividades": "Proyección: 'Hasta el último hombre' (Parte 2).\n- Análisis de los dilemas éticos y presiones ante las convicciones propias - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_15",
            "tema": "Cinefórum: Hasta el último hombre",
            "sesion": "",
            "actividades": "Proyección: 'Hasta el último hombre' (Parte 3).\n- Elaboración individual del dossier de reflexión sobre objeción de conciencia - POR",
            "avisos": "",
            "educamos": "Dossier Hasta el último hombre",
            "imprimir": "Dossier Hasta el último hombre (30 copias)"
          },
          {
            "id": "s_3eso_16",
            "tema": "Conciencia y Libertad",
            "sesion": "",
            "actividades": "S1: 'El sagrario interior'. ¿Qué es la conciencia moral?\n- Tabla comparativa: '¿Actúo por conciencia o por mero gusto?' - POR",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_17",
            "tema": "Conciencia y Libertad",
            "sesion": "",
            "actividades": "Plickers S1.\n- S2: 'El espejo de la libertad': La verdadera libertad orientada al bien - POR + TD",
            "avisos": "Plickers",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_18",
            "tema": "Conciencia y Libertad",
            "sesion": "",
            "actividades": "Plickers S2.\n- S3: 'La anatomía del héroe moral': Virtudes Cardinales y Teologales - POR",
            "avisos": "Plickers",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_19",
            "tema": "Conciencia y Libertad",
            "sesion": "",
            "actividades": "Dilemas éticos prácticos: Resolución y debate grupal sobre la ficha 'El dilema de Lucas' - POR",
            "avisos": "",
            "educamos": "Ficha El dilema de Lucas",
            "imprimir": "Ficha El dilema de Lucas (30 copias)"
          },
          {
            "id": "s_3eso_20",
            "tema": "Situación de Aprendizaje",
            "sesion": "Trabajo",
            "actividades": "Trabajo Final 'Expediente Doss': Recopilación de tareas, alegatos morales y entrega formal - PRO",
            "avisos": "",
            "educamos": "Entrega Expediente Doss",
            "imprimir": ""
          },
          {
            "id": "s_3eso_21",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Prueba de Síntesis: Conciencia moral, libertad auténtica y virtudes éticas",
            "avisos": "",
            "educamos": "",
            "imprimir": "Exámenes Conciencia y Libertad (30 copias)"
          }
        ]
      },
      {
        "id": "t_3eso_4",
        "title": "Tema 4 · Los Novísimos (Escatología y Esperanza)",
        "sessions": [
          {
            "id": "s_3eso_22",
            "tema": "Los Novísimos",
            "sesion": "",
            "actividades": "PPT 1: Las preguntas escatológicas de la humanidad: muerte, finitud y esperanza.\n- Rutina de pensamiento - POR",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_23",
            "tema": "Los Novísimos",
            "sesion": "",
            "actividades": "Plickers PPT 1.\n- PPT 2: El Juicio particular y universal: justicia y misericordia - POR",
            "avisos": "Plickers",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_24",
            "tema": "Los Novísimos",
            "sesion": "",
            "actividades": "Plickers PPT 2.\n- PPT 3: El misterio del Cielo y la comunión de los santos - POR",
            "avisos": "Plickers",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_3eso_25",
            "tema": "Los Novísimos",
            "sesion": "",
            "actividades": "Plickers PPT 3.\n- PPT 4: La resurrección de la carne y la esperanza cristiana - POR",
            "avisos": "Plickers",
            "educamos": "Examen",
            "imprimir": ""
          },
          {
            "id": "s_3eso_26",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Prueba de Síntesis: Los Novísimos",
            "avisos": "",
            "educamos": "",
            "imprimir": "Exámenes Los Novísimos (30 copias)"
          }
        ]
      }
    ],
    "4º ESO": [
      {
        "id": "t_4eso_0",
        "title": "Tema 0 · Presentación Curso",
        "sessions": [
          {
            "id": "s_4eso_01",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCódigo Classroom / Cuestionario Inicial",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_02",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Prueba inicial\n\nLectura comprensiva\n\nGRUPOS CLASE (FIJOS)",
            "avisos": "TD",
            "educamos": "",
            "imprimir": "Prueba inicial y Lectura comprensiva"
          }
        ]
      },
      {
        "id": "t_4eso_1",
        "title": "Tema 1 · Antropología (Platón, Aristóteles y Diagnóstico)",
        "sessions": [
          {
            "id": "s_4eso_03",
            "tema": "Antropología",
            "sesion": "",
            "actividades": "PPT - 1\n\n- Etiquetas - POR",
            "avisos": "- Avisar fecha EXAMEN\n- LM - IA",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_04",
            "tema": "Antropología",
            "sesion": "",
            "actividades": "PPT - Platón\n\n- Cuerpo y Alma - POR",
            "avisos": "",
            "educamos": "Cuerpo y alma",
            "imprimir": ""
          },
          {
            "id": "s_4eso_05",
            "tema": "Antropología",
            "sesion": "",
            "actividades": "PPT - Aristóteles\n- Así soy - POR",
            "avisos": "",
            "educamos": "Así soy / Terminar tareas",
            "imprimir": ""
          },
          {
            "id": "s_4eso_06",
            "tema": "Antropología",
            "sesion": "Trabajo",
            "actividades": "Diagnóstico antropológico\nProyecto",
            "avisos": "",
            "educamos": "Examen / Proyecto",
            "imprimir": ""
          },
          {
            "id": "s_4eso_07",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Examen - Antropología\n\nTerminar / Corregir actividades pendientes",
            "avisos": "",
            "educamos": "",
            "imprimir": "Exámenes Antropología (30 copias)"
          }
        ]
      },
      {
        "id": "t_4eso_2",
        "title": "Tema 2 · Dignidad Humana (Derechos Humanos y Debate Pena de Muerte)",
        "sessions": [
          {
            "id": "s_4eso_08",
            "tema": "Dignidad Humana",
            "sesion": "",
            "actividades": "PPT - Medios y fines\n- ¿Medios o fines? - PROYECTO",
            "avisos": "",
            "educamos": "Medios o fines",
            "imprimir": ""
          },
          {
            "id": "s_4eso_09",
            "tema": "Dignidad Humana",
            "sesion": "",
            "actividades": "PPT - Dignidad cristiana\n- Hijos de Dios - PROYECTO",
            "avisos": "",
            "educamos": "Hijos de Dios",
            "imprimir": ""
          },
          {
            "id": "s_4eso_10",
            "tema": "Dignidad Humana",
            "sesion": "Trabajo",
            "actividades": "Derechos Humanos - PROYECTO\n\nVer vídeo.\nLeer texto y contestar a las preguntas.",
            "avisos": "",
            "educamos": "",
            "imprimir": "Texto y preguntas Derechos Humanos (30 copias)"
          },
          {
            "id": "s_4eso_11",
            "tema": "Dignidad Humana",
            "sesion": "Trabajo",
            "actividades": "Pena de muerte\n\nPreparar Debate",
            "avisos": "",
            "educamos": "",
            "imprimir": "Dossier Debate Pena de muerte (30 copias)"
          },
          {
            "id": "s_4eso_12",
            "tema": "Dignidad Humana",
            "sesion": "Exposición",
            "actividades": "Pena de muerte\n\nHacer debate en clase",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_13",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Examen - Dignidad Humana",
            "avisos": "",
            "educamos": "",
            "imprimir": "Exámenes Dignidad Humana (30 copias)"
          }
        ]
      },
      {
        "id": "t_4eso_3",
        "title": "Tema 3 · Aborto y Bioética (Estatuto del Embrión y Debate)",
        "sessions": [
          {
            "id": "s_4eso_14",
            "tema": "Aborto",
            "sesion": "",
            "actividades": "S1 - El estatuto del embrión - Es una vida con posibilidades\n\nRutina de pensamiento",
            "avisos": "Revisión examen",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_15",
            "tema": "Aborto",
            "sesion": "",
            "actividades": "Plickers - S1\n\nS2 - Conflicto cultural y legal - Legalidad y moralidad. Argumentos a favor y en contra\n\nVídeo - María del Himalaya\n\nRP - Semáforo",
            "avisos": "Plickers",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_16",
            "tema": "Aborto",
            "sesion": "Trabajo",
            "actividades": "Plickers - S2\n\nOrganización del debate formal sobre el inicio de la vida: asignación de posturas, fuentes y argumentos",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_17",
            "tema": "Aborto",
            "sesion": "Exposición",
            "actividades": "Desarrollo del debate académico formal en el aula y reflexión personal escrita",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_18",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Prueba de Síntesis: Bioética y Estatuto de la Vida Humana",
            "avisos": "",
            "educamos": "",
            "imprimir": "Exámenes Bioética (30 copias)"
          }
        ]
      },
      {
        "id": "t_4eso_4",
        "title": "Tema 4 · Identidad Personal, Afectividad y Familia",
        "sessions": [
          {
            "id": "s_4eso_19",
            "tema": "Identidad Personal",
            "sesion": "",
            "actividades": "PPT 1: Autoconocimiento e interdependencia: La 'Ventana de Johari' - POR",
            "avisos": "",
            "educamos": "Ventana de Johari",
            "imprimir": ""
          },
          {
            "id": "s_4eso_20",
            "tema": "Identidad Personal",
            "sesion": "",
            "actividades": "PPT 2: Maduración afectiva y toma de decisiones.\n- Rutina de pensamiento 'El Puente' - POR",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_21",
            "tema": "Identidad Personal",
            "sesion": "Trabajo",
            "actividades": "Elaboración del 'Mapa de Identidad Personal': valores, fortalezas, debilidades y vocación - POR",
            "avisos": "",
            "educamos": "Mapa de Identidad",
            "imprimir": ""
          },
          {
            "id": "s_4eso_22",
            "tema": "Afectividad y Sexualidad",
            "sesion": "",
            "actividades": "PPT 1: La dimensión antropológica de la sexualidad.\n- Kahoot diagnóstico: biología y psicología - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_23",
            "tema": "Afectividad y Sexualidad",
            "sesion": "",
            "actividades": "Plickers PPT 1.\n- Las tres dimensiones del amor: eros, philia y ágape.\n- Vídeo y rutina 'Antes y después' - POR",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_4eso_24",
            "tema": "Amor y Familia",
            "sesion": "",
            "actividades": "PPT 1: Los cinco lenguajes del amor (Test reflexivo).\n- Proyecto familiar y balance de etapa - POR",
            "avisos": "",
            "educamos": "",
            "imprimir": "Test Cinco Lenguajes del Amor (30 copias)"
          }
        ]
      }
    ],
    "1º BACHILLERATO": [
      {
        "id": "t_1bac_0",
        "title": "Tema 0 · Presentación Curso y Proyecto Personal",
        "sessions": [
          {
            "id": "s_1bac_01",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Saludo, preguntas verano...\n\nPresentación clase\n- PPT y dudas\n\nCuestionario Inicial",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1bac_02",
            "tema": "Presentación Curso",
            "sesion": "",
            "actividades": "Prueba inicial\n\nLectura comprensiva\n\n- Proyecto Personal",
            "avisos": "TD",
            "educamos": "",
            "imprimir": "Prueba inicial y Lectura comprensiva (20 copias)"
          },
          {
            "id": "s_1bac_03",
            "tema": "Proyecto Personal",
            "sesion": "",
            "actividades": "Explicación Proyecto Personal\n\nProyecto - Empezamos PPT\n\n- Primera entrada del diario - DIARIO",
            "avisos": "-IA",
            "educamos": "",
            "imprimir": ""
          }
        ]
      },
      {
        "id": "t_1bac_1",
        "title": "Tema 1 · ¿Quién soy? ¿Dónde estoy? (Identidad y Caso de Rescate)",
        "sessions": [
          {
            "id": "s_1bac_04",
            "tema": "¿Quién soy?",
            "sesion": "",
            "actividades": "PPT 1 - Imagen de Dios, hijos de Dios\n- Carta a mi \"yo\" - PRO",
            "avisos": "",
            "educamos": "Carta a mi yo futuro",
            "imprimir": ""
          },
          {
            "id": "s_1bac_05",
            "tema": "¿Quién soy?",
            "sesion": "",
            "actividades": "PPT 2 - Talentos y límites\n- Mis talentos y límites - PRO",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1bac_06",
            "tema": "¿Quién soy?",
            "sesion": "",
            "actividades": "PPT 3 - Creencias nucleares y emociones\n- Creencias y emociones - PRO",
            "avisos": "",
            "educamos": "Creencias y emociones",
            "imprimir": ""
          },
          {
            "id": "s_1bac_07",
            "tema": "¿Quién soy?\n¿Dónde estoy?",
            "sesion": "Trabajo",
            "actividades": "Caso de rescate\n\n- Explicar trabajo\n- Trabajo en clase\n\n2 sesiones para hacerlo.",
            "avisos": "",
            "educamos": "Entrega trabajo Caso de rescate\nRevisión Cuadernos",
            "imprimir": "Ficha Caso de rescate (20 copias)"
          },
          {
            "id": "s_1bac_08",
            "tema": "¿Quién soy?\n¿Dónde estoy?",
            "sesion": "Trabajo",
            "actividades": "Caso de rescate\n- Explicar trabajo\n- Trabajo en clase\n\n2 sesiones para hacerlo.\n---\nRevisión CUADERNOS",
            "avisos": "- Revisión rúbrica autoevaluación - Diario Personal\n7 Entradas",
            "educamos": "Entrega trabajo Caso de rescate\nRevisión Cuadernos",
            "imprimir": ""
          },
          {
            "id": "s_1bac_09",
            "tema": "¿Quién soy?\n¿Dónde estoy?",
            "sesion": "",
            "actividades": "Acabar trabajos pendientes\n\nRevisión CUADERNOS",
            "avisos": "- Revisión rúbrica autoevaluación - Diario Personal\n8 Entradas",
            "educamos": "",
            "imprimir": ""
          }
        ]
      },
      {
        "id": "t_1bac_2",
        "title": "Tema 2 · ¿Hacia dónde voy? (Vocación y Sentido)",
        "sessions": [
          {
            "id": "s_1bac_10",
            "tema": "¿Hacia dónde voy?",
            "sesion": "",
            "actividades": "PPT: '¿Éxito o plenitud?'.\n- Dinámica de discernimiento vital: Redacción del 'Obituario personal' - POR",
            "avisos": "",
            "educamos": "El obituario personal",
            "imprimir": ""
          },
          {
            "id": "s_1bac_11",
            "tema": "¿Hacia dónde voy?",
            "sesion": "",
            "actividades": "¿Quién conduce realmente mi vida? Dinámica de la 'Subasta de valores'.\n- PPT: Conciencia, libertad y condicionamientos culturales - POR + TD",
            "avisos": "",
            "educamos": "",
            "imprimir": "Ficha Subasta de valores (20 copias)"
          },
          {
            "id": "s_1bac_12",
            "tema": "¿Hacia dónde voy?",
            "sesion": "",
            "actividades": "PPT: Vocación, compromiso moral y proyección comunitaria - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          }
        ]
      },
      {
        "id": "t_1bac_3",
        "title": "Tema 3 · Bioética: La Vida Humana",
        "sessions": [
          {
            "id": "s_1bac_13",
            "tema": "Bioética: La Vida Humana",
            "sesion": "",
            "actividades": "PPT 1: El estatuto biológico y ontológico del embrión humano: 'Una vida con posibilidades'.\n- Rutina de pensamiento fundamentada - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1bac_14",
            "tema": "Bioética: La Vida Humana",
            "sesion": "",
            "actividades": "Análisis ético y deontológico: El conflicto entre legalidad y moralidad a partir del texto y veto de Tabaré Vázquez - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": "Texto Tabaré Vázquez (20 copias)"
          },
          {
            "id": "s_1bac_15",
            "tema": "Bioética: La Vida Humana",
            "sesion": "",
            "actividades": "Proyección testimonial: 'María del Himalaya'.\n- Ficha 2: Análisis del proceso existencial, perdón y valor de la vida - POR",
            "avisos": "",
            "educamos": "Ficha 2 María del Himalaya",
            "imprimir": "Ficha 2 María del Himalaya (20 copias)"
          },
          {
            "id": "s_1bac_16",
            "tema": "Bioética: La Vida Humana",
            "sesion": "",
            "actividades": "Conclusión de la Ficha 2.\n- Primera revisión formal del Diario Personal (9 entradas reflexivas) - POR + TD",
            "avisos": "Revisión Diario Personal (9 entradas)",
            "educamos": "",
            "imprimir": ""
          },
          {
            "id": "s_1bac_17",
            "tema": "Bioética: La Vida Humana",
            "sesion": "",
            "actividades": "Puesta en común de argumentos bioéticos, diálogo socrático sobre la cultura de la vida y síntesis - TD",
            "avisos": "",
            "educamos": "Examen Bioética",
            "imprimir": ""
          },
          {
            "id": "s_1bac_18",
            "tema": "EXAMEN",
            "sesion": "Examen",
            "actividades": "Prueba de Síntesis: Bloque de Bioética y Sentido de la Vida",
            "avisos": "",
            "educamos": "",
            "imprimir": "Exámenes Bioética 1º BAC (20 copias)"
          }
        ]
      },
      {
        "id": "t_1bac_4",
        "title": "Tema 4 · Moral Fundamental y Mandamientos en el S. XXI",
        "sessions": [
          {
            "id": "s_1bac_19",
            "tema": "Moral Fundamental: Decálogo",
            "sesion": "",
            "actividades": "Ficha introductoria: La ley moral natural y el sentido liberador del Decálogo - TD",
            "avisos": "",
            "educamos": "",
            "imprimir": "Ficha introductoria Decálogo (20 copias)"
          },
          {
            "id": "s_1bac_20",
            "tema": "Mandamientos en el S. XXI",
            "sesion": "",
            "actividades": "Mandamiento 1: 'Amar a Dios sobre todas las cosas'. Análisis de los nuevos ídolos contemporáneos - Ficha 1 POR",
            "avisos": "",
            "educamos": "Ficha 1 Mandamientos",
            "imprimir": ""
          },
          {
            "id": "s_1bac_21",
            "tema": "Mandamientos en el S. XXI",
            "sesion": "",
            "actividades": "Mandamiento 2: El valor de la palabra dada y la veracidad - Ficha 2 POR",
            "avisos": "",
            "educamos": "Ficha 2 Mandamientos",
            "imprimir": ""
          },
          {
            "id": "s_1bac_22",
            "tema": "Mandamientos en el S. XXI",
            "sesion": "",
            "actividades": "Mandamiento 3: Santificar las fiestas y el tiempo gratuito - Ficha 3 POR",
            "avisos": "",
            "educamos": "Ficha 3 Mandamientos",
            "imprimir": ""
          },
          {
            "id": "s_1bac_23",
            "tema": "Mandamientos en el S. XXI",
            "sesion": "",
            "actividades": "Mandamiento 4: Honrar padre y madre y relaciones intergeneracionales - Ficha 4 POR",
            "avisos": "",
            "educamos": "Ficha 4 Mandamientos",
            "imprimir": ""
          },
          {
            "id": "s_1bac_24",
            "tema": "Proyecto Personal",
            "sesion": "Exposición",
            "actividades": "Revisión final y entrega del Diario Personal y del Proyecto de Vida. Rúbrica de autoevaluación - POR",
            "avisos": "",
            "educamos": "Entrega Diario Personal y Proyecto de Vida",
            "imprimir": ""
          }
        ]
      }
    ]
  },
  "master_temario": {
    "1º ESO": [
      {
        "sesion": "Sesión 1",
        "tema": "Presentación Curso",
        "actividades": "Presentación de la materia y acogida: preguntas de verano, recordar nombres y dinámicas de grupo. Presentación de la asignatura y resolución de dudas iniciales.",
        "notas": "TD • Dinámica inicial"
      },
      {
        "sesion": "Sesión 2",
        "tema": "Presentación Curso",
        "actividades": "Configuración de entorno digital (Teams / Classroom). Realización de la Prueba Inicial de nivel y Cuestionario del Alumno. Presentación del Lema de curso.",
        "notas": "TD • Evaluación diagnóstica y Lema"
      },
      {
        "sesion": "Sesión 3",
        "tema": "¿Quiénes somos?",
        "actividades": "Presentación de la rúbrica del Portfolio. PPT 1: Dignidad humana y sus diferentes contextos en la vida cotidiana.",
        "notas": "POR • Rúbrica Portfolio e inicio evidencias"
      },
      {
        "sesion": "Sesión 4",
        "tema": "¿Quiénes somos?",
        "actividades": "PPT 2: La mirada bíblica sobre la creación y el ser humano. Búsqueda y análisis de citas bíblicas. Lista de problemas medioambientales.",
        "notas": "POR • Ficha citas bíblicas y medioambiente"
      },
      {
        "sesion": "Sesión 5",
        "tema": "¿Quiénes somos?",
        "actividades": "PPT 3: La autoimagen y la presión social: '¿Eres perfecto?'. Reflexión personal y pautas para el material del proyecto grupal.",
        "notas": "POR • Actividad reflexiva y preparación de material"
      },
      {
        "sesion": "Sesión 6",
        "tema": "¿Quiénes somos?",
        "actividades": "Derechos Humanos: Proyección audiovisual sobre la dignidad universal. Guía de preguntas y análisis de vulneraciones.",
        "notas": "PRO • Análisis de Derechos Humanos"
      },
      {
        "sesion": "Sesión 7",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis del Tema 1: ¿Quiénes somos? (Dignidad humana, creación y derechos).",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 8",
        "tema": "Periódico Humanizante",
        "actividades": "Proyecto 'Periódico Humanizante': Explicación de secciones periodísticas, asignación de roles de redacción y diseño inicial.",
        "notas": "PRO • Inicio Proyecto Periódico"
      },
      {
        "sesion": "Sesión 9",
        "tema": "Periódico Humanizante",
        "actividades": "Proyecto 'Periódico Humanizante': Redacción de artículos, noticias con enfoque solidario y diseño maquetado en clase.",
        "notas": "PRO • Redacción y maquetación grupal"
      },
      {
        "sesion": "Sesión 10",
        "tema": "Periódico Humanizante",
        "actividades": "Proyecto 'Periódico Humanizante': Revisión de estilo, corrección de pruebas y montaje final del ejemplar.",
        "notas": "PRO • Cierre y montaje de proyectos"
      },
      {
        "sesion": "Sesión 11",
        "tema": "Periódico Humanizante",
        "actividades": "Presentación y exposición pública de los periódicos en el aula. Rúbrica de coevaluación grupal y balance del proyecto.",
        "notas": "PRO • Exposición y coevaluación"
      },
      {
        "sesion": "Sesión 12",
        "tema": "Tiempo Litúrgico: Adviento",
        "actividades": "Sentido del Adviento y la esperanza: audición de canciones navideñas con mensaje social, análisis lírico y votación.",
        "notas": "TD • Trabajo de audición y reflexión"
      },
      {
        "sesion": "Sesión 13",
        "tema": "¿Para qué somos?",
        "actividades": "PPT 1: El sentido de la vida en las grandes religiones del mundo. Dinámica reflexiva: 'El cofre del tesoro interior'.",
        "notas": "TD • Exposición dialogada y dinámica"
      },
      {
        "sesion": "Sesión 14",
        "tema": "¿Para qué somos?",
        "actividades": "Plickers de repaso PPT 1. PPT 2: Las preguntas existenciales del ser humano. Dinámica en pizarra compartida.",
        "notas": "TD • Plickers y rutina de pizarra"
      },
      {
        "sesion": "Sesión 15",
        "tema": "Tour Espiritual",
        "actividades": "Proyecto 'Tour Espiritual': Explicación de la actividad, conformación de grupos cooperativos, reparto de religiones y rúbrica.",
        "notas": "PRO • Inicio Proyecto Tour Espiritual"
      },
      {
        "sesion": "Sesión 16",
        "tema": "Tour Espiritual",
        "actividades": "Proyecto 'Tour Espiritual': Trabajo de investigación en clase (templos, símbolos, ritos y textos sagrados).",
        "notas": "PRO • Trabajo de investigación grupal"
      },
      {
        "sesion": "Sesión 17",
        "tema": "Tour Espiritual",
        "actividades": "Proyecto 'Tour Espiritual': Maquetación visual de folletos turísticos/espirituales o creación de presentaciones interactivas.",
        "notas": "PRO • Diseño y producción de materiales"
      },
      {
        "sesion": "Sesión 18",
        "tema": "Tour Espiritual",
        "actividades": "Proyecto 'Tour Espiritual': Exposición oral del itinerario espiritual por grupos cooperativos y rúbrica de coevaluación.",
        "notas": "PRO • Exposición y coevaluación final"
      },
      {
        "sesion": "Sesión 19",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis del Tema 2: ¿Para qué somos? (Las religiones, sentido de la trascendencia y espiritualidad).",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 20",
        "tema": "Dios nos habla",
        "actividades": "PPT 1: La Biblia como biblioteca sagrada y palabra de Dios. Rutina de pensamiento: '¿Qué he aprendido?'.",
        "notas": "POR • Rutina de pensamiento para portfolio"
      },
      {
        "sesion": "Sesión 21",
        "tema": "Dios nos habla",
        "actividades": "Plickers PPT 1. PPT 2: Lenguajes y géneros literarios en la Biblia: 'El código secreto'. Dinámica de comunicación divina.",
        "notas": "TD • Plickers y descifrado de textos"
      },
      {
        "sesion": "Sesión 22",
        "tema": "Dios nos habla",
        "actividades": "Plickers PPT 2. PPT 3: Dios me habla hoy a través de los acontecimientos y los demás. Rutina del Semáforo.",
        "notas": "POR • Plickers y rutina del Semáforo"
      },
      {
        "sesion": "Sesión 23",
        "tema": "Historia de Israel",
        "actividades": "La vocación de Abraham: la fe como respuesta y confianza. Actividad de cartografía: Rutas de la Media Luna Fértil.",
        "notas": "POR • Cartografía bíblica y ficha"
      },
      {
        "sesion": "Sesión 24",
        "tema": "Historia de Israel",
        "actividades": "Plickers. Isaac y la renovación de la alianza. Rutina de pensamiento sobre fidelidad y promesas.",
        "notas": "POR • Plickers y rutina de pensamiento"
      },
      {
        "sesion": "Sesión 25",
        "tema": "Historia de Israel",
        "actividades": "Plickers. Jacob y Esaú: conflicto fraternal, perdón y la lucha nocturna en Peniel. Rutina de pensamiento.",
        "notas": "POR • Plickers y ficha de trabajo"
      },
      {
        "sesion": "Sesión 26",
        "tema": "Historia de Israel",
        "actividades": "Jacob (II): Las doce tribus de Israel y la identidad del Pueblo Elegido. Rutina de pensamiento de síntesis.",
        "notas": "POR • Rutina de pensamiento genealógica"
      },
      {
        "sesion": "Sesión 27",
        "tema": "Historia de Israel",
        "actividades": "Plickers. José y sus hermanos: envidia, providencia divina, acogida y reconciliación en Egipto. Rutina reflexiva.",
        "notas": "POR • Plickers y análisis narrativo"
      },
      {
        "sesion": "Sesión 28",
        "tema": "Historia de Israel",
        "actividades": "Plickers. La opresión en Egipto, la vocación de Moisés y la liberación del Éxodo. Rutina de pensamiento.",
        "notas": "POR • Plickers y rutina del Éxodo"
      },
      {
        "sesion": "Sesión 29",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Dios nos habla e Historia de Israel (Patriarcas y Éxodo).",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 30",
        "tema": "Cierre de Curso",
        "actividades": "Cinefórum de clausura, dinámica de agradecimiento grupal y balance del curso escolar.",
        "notas": "TD • Dinámica de clausura"
      }
    ],
    "2º ESO": [
      {
        "sesion": "Sesión 1",
        "tema": "Presentación Curso",
        "actividades": "Presentación y acogida de inicio de curso: preguntas de verano, clima de aula, repaso de normas y resolución de dudas.",
        "notas": "TD • Dinámica inicial"
      },
      {
        "sesion": "Sesión 2",
        "tema": "Presentación Curso",
        "actividades": "Configuración de Teams / Classroom. Prueba inicial diagnóstica, Cuestionario del Alumno y trabajo con el Lema de curso.",
        "notas": "TD • Evaluación diagnóstica"
      },
      {
        "sesion": "Sesión 3",
        "tema": "Historia de Israel II",
        "actividades": "PPT 1: La etapa de los Jueces de Israel. Cuestionario interactivo con Plickers y rutina del Semáforo sobre liderazgo moral.",
        "notas": "Mixto: POR + TD (Plickers POR y Semáforo TD)"
      },
      {
        "sesion": "Sesión 4",
        "tema": "Historia de Israel II",
        "actividades": "PPT 2: La Monarquía en Israel (Saúl, David y Salomón). Consolidación conceptual mediante cuestionario interactivo Plickers.",
        "notas": "POR • Plickers y actividades de portfolio"
      },
      {
        "sesion": "Sesión 5",
        "tema": "Historia de Israel II",
        "actividades": "PPT 3: La División del Reino (Israel y Judá) y la decadencia religiosa. Cuestionario de síntesis Plickers.",
        "notas": "POR • Plickers y actividades de portfolio"
      },
      {
        "sesion": "Sesión 6",
        "tema": "DOMUND",
        "actividades": "PPT y vídeo sobre la misión en el mundo: Salvador y Japón. Actividad: '¿Qué harías si fueras misionero?'.",
        "notas": "POR • Ficha misionera para portfolio"
      },
      {
        "sesion": "Sesión 7",
        "tema": "Historia de Israel II",
        "actividades": "PPT 4: Los Profetas y el anuncio del Mesías: justicia social y esperanza. Plickers de repaso global del tema.",
        "notas": "POR • Plickers y cierre de unidad"
      },
      {
        "sesion": "Sesión 8",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Historia de Israel II (Jueces, Reyes y Profetas).",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 9",
        "tema": "Noticiario de la Historia",
        "actividades": "Proyecto 'Noticiario de la Historia': Presentación de la actividad, reparto de épocas bíblicas, guionaje de noticias y grupos de trabajo.",
        "notas": "PRO • Inicio Proyecto Noticiario"
      },
      {
        "sesion": "Sesión 10",
        "tema": "Noticiario de la Historia",
        "actividades": "Proyecto 'Noticiario de la Historia': Redacción de guiones, preparación de atrezo, ensayos y asignación de portavoces.",
        "notas": "PRO • Trabajo en equipo y redacción"
      },
      {
        "sesion": "Sesión 11",
        "tema": "Noticiario de la Historia",
        "actividades": "Proyecto 'Noticiario de la Historia': Trabajo cooperativo avanzado y ensayo general de retransmisión de noticias.",
        "notas": "PRO • Ensayo y preparación final"
      },
      {
        "sesion": "Sesión 12",
        "tema": "Noticiario de la Historia",
        "actividades": "Grabación o puesta en escena del Noticiario de la Historia en directo. Evaluación por rúbricas y coevaluación entre grupos.",
        "notas": "PRO • Puesta en escena y coevaluación"
      },
      {
        "sesion": "Sesión 13",
        "tema": "Tiempo Litúrgico: Adviento",
        "actividades": "Adviento: Tradiciones navideñas y su sentido espiritual. Audición musical y debate sobre el consumismo vs fraternidad.",
        "notas": "TD • Audición y reflexión crítica"
      },
      {
        "sesion": "Sesión 14",
        "tema": "Jesucristo: Encuentro y noticia",
        "actividades": "PPT 1: El contexto histórico, geográfico y político de la Palestina en tiempos de Jesús. Rutina de pensamiento.",
        "notas": "TD • Rutina de pensamiento e historia"
      },
      {
        "sesion": "Sesión 15",
        "tema": "Jesucristo: Encuentro y noticia",
        "actividades": "Plickers PPT 1. PPT 2: El mensaje central del Reino de Dios y parábolas. Vocabulario bíblico y rutina del Semáforo.",
        "notas": "Mixto: POR + TD (Plickers POR y Semáforo TD)"
      },
      {
        "sesion": "Sesión 16",
        "tema": "Jesucristo: Encuentro y noticia",
        "actividades": "Plickers PPT 2. PPT 3: Los milagros como signos de liberación integral y acogida a los marginados. Rutina de pensamiento.",
        "notas": "POR • Plickers y rutina para portfolio"
      },
      {
        "sesion": "Sesión 17",
        "tema": "Expediente Galilea",
        "actividades": "Proyecto 'Expediente Galilea': Presentación del mural interactivo de investigación histórica sobre Jesús. Equipos y diseño de paneles.",
        "notas": "PRO • Inicio Proyecto Expediente Galilea"
      },
      {
        "sesion": "Sesión 18",
        "tema": "Expediente Galilea",
        "actividades": "Proyecto 'Expediente Galilea': Elaboración de informes históricos, mapas de Galilea, testimonios y fichas de personajes.",
        "notas": "PRO • Elaboración cooperativa de paneles"
      },
      {
        "sesion": "Sesión 19",
        "tema": "Expediente Galilea",
        "actividades": "Proyecto 'Expediente Galilea': Ensamblaje de elementos interactivos (códigos QR, citas, ilustraciones) y revisión de rigor histórico.",
        "notas": "PRO • Ensamblaje interactivo"
      },
      {
        "sesion": "Sesión 20",
        "tema": "Expediente Galilea",
        "actividades": "Proyecto 'Expediente Galilea': Finalización del montaje del mural, entrega del dosier explicativo y preparación de la muestra.",
        "notas": "PRO • Finalización y entrega de murales"
      },
      {
        "sesion": "Sesión 21",
        "tema": "Expediente Galilea",
        "actividades": "Exposición pública interactiva de los murales de 'Expediente Galilea'. Coevaluación intergrupal y valoración general.",
        "notas": "PRO • Exposición oral interactiva"
      },
      {
        "sesion": "Sesión 22",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Jesucristo (Mensaje, contexto histórico, parábolas y trascendencia).",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 23",
        "tema": "Cinefórum: Maktub",
        "actividades": "Debate con post-its: '¿Es justo que a la gente buena le pasen cosas malas?'. Proyección: 'Maktub' (Parte 1).",
        "notas": "TD • Debate inicial y proyección"
      },
      {
        "sesion": "Sesión 24",
        "tema": "Cinefórum: Maktub",
        "actividades": "Proyección: 'Maktub' (Parte 2). Relación con el relato bíblico de Job (1ª parte: El misterio del sufrimiento inocente).",
        "notas": "TD • Relación bíblica y análisis film"
      },
      {
        "sesion": "Sesión 25",
        "tema": "Cinefórum: Maktub",
        "actividades": "Proyección: 'Maktub' (Parte 3). Análisis del personaje de Manolo y la transformación a través de la entrega a los demás.",
        "notas": "TD • Análisis de transformación y valores"
      },
      {
        "sesion": "Sesión 26",
        "tema": "Cinefórum: Maktub",
        "actividades": "Desenlace de 'Maktub'. Trabajo individual con la Ficha 1 de comprensión y reflexión: El sentido del sufrimiento y la esperanza.",
        "notas": "POR • Ficha 1 de reflexión sobre el film"
      },
      {
        "sesion": "Sesión 27",
        "tema": "Cinefórum: Maktub",
        "actividades": "Puesta en común de conclusiones de la Ficha 1 de 'Maktub'. Lectura comentada sobre el valor de la vida y la gratitud.",
        "notas": "TD • Puesta en común y lectura"
      },
      {
        "sesion": "Sesión 28",
        "tema": "Síntesis y Cierre",
        "actividades": "Revisión final de actividades de portfolio, resolución de dudas curriculares y actividades de recuperación y subida de nota.",
        "notas": "TD • Revisión y portfolio"
      },
      {
        "sesion": "Sesión 29",
        "tema": "Cierre de Curso",
        "actividades": "Cinefórum de valores o debate temático sobre la figura histórica de Jesús y su legado cultural y ético.",
        "notas": "TD • Dinámica formativa final"
      },
      {
        "sesion": "Sesión 30",
        "tema": "Espacio de Refuerzo",
        "actividades": "Sesión de balance final, autoevaluación competencial del alumnado y despedida.",
        "notas": "TD • Balance competencial"
      }
    ],
    "3º ESO": [
      {
        "sesion": "Sesión 1",
        "tema": "Presentación Curso",
        "actividades": "Presentación de la asignatura, objetivos formativos y clima de aula: preguntas de verano y resolución de dudas.",
        "notas": "TD • Dinámica inicial"
      },
      {
        "sesion": "Sesión 2",
        "tema": "Presentación Curso",
        "actividades": "Entorno digital (Teams / Classroom), Prueba inicial de competencias y Cuestionario del Alumno. Presentación y trabajo con el Lema de curso.",
        "notas": "TD • Evaluación diagnóstica"
      },
      {
        "sesion": "Sesión 3",
        "tema": "Búsqueda de sentido",
        "actividades": "PPT 1: El interrogante por el sentido de la vida. Análisis de vídeo reflexivo y Ficha 1: 'Preguntas fundamentales'.",
        "notas": "POR • Ficha 1 para portfolio"
      },
      {
        "sesion": "Sesión 4",
        "tema": "Búsqueda de sentido",
        "actividades": "PPT 2: Las respuestas humanas ante el misterio. Vídeo y Ficha 2: 'Creencias, certezas y dudas existenciales'.",
        "notas": "POR • Ficha 2 para portfolio"
      },
      {
        "sesion": "Sesión 5",
        "tema": "Búsqueda de sentido",
        "actividades": "PPT 3: Cosmovisiones contemporáneas (religiosa, humanista, materialista). Vídeo y Ficha 3: 'Tabla de sentidos de vida'.",
        "notas": "POR • Ficha 3 para portfolio"
      },
      {
        "sesion": "Sesión 6",
        "tema": "Ponencia Filosófica",
        "actividades": "Presentación del proyecto de oratoria e investigación 'Ponencia Filosófica'. Criterios de evaluación, rúbricas y formación de grupos cooperativos.",
        "notas": "PRO • Inicio proyecto Ponencia Filosófica"
      },
      {
        "sesion": "Sesión 7",
        "tema": "Ponencia Filosófica",
        "actividades": "Sesión de investigación en aula/informática: recopilación de fuentes, fundamentación de tesis y redacción de argumentos.",
        "notas": "PRO • Trabajo en equipo e investigación"
      },
      {
        "sesion": "Sesión 8",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis del Tema 1: Búsqueda de sentido (Preguntas fundamentales y cosmovisiones).",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 9",
        "tema": "Ponencia Filosófica",
        "actividades": "Finalización de la Ponencia Filosófica: Estructuración del guion de exposición oral, ensayo de tiempos y entrega digital.",
        "notas": "PRO • Ensayo y entrega de ponencias"
      },
      {
        "sesion": "Sesión 10",
        "tema": "Ponencia Filosófica",
        "actividades": "Exposiciones orales de las ponencias filosóficas ante la clase. Rúbricas de coevaluación y debate posterior.",
        "notas": "PRO • Exposición oral y coevaluación"
      },
      {
        "sesion": "Sesión 11",
        "tema": "Cinefórum: Hasta el último hombre",
        "actividades": "Proyección: 'Hasta el último hombre' (Parte 1). Presentación del trabajo sobre objeción de conciencia, fe y deber moral.",
        "notas": "TD • Análisis cinematográfico y debate"
      },
      {
        "sesion": "Sesión 12",
        "tema": "Tiempo Litúrgico: Adviento",
        "actividades": "Adviento y compromiso ético: audición y análisis de música navideña contemporánea, reflexión comunitaria.",
        "notas": "TD • Trabajo de audición y reflexión"
      },
      {
        "sesion": "Sesión 13",
        "tema": "Cinefórum: Hasta el último hombre",
        "actividades": "Proyección: 'Hasta el último hombre' (Parte 2). Análisis de los dilemas éticos y presiones ante las convicciones propias.",
        "notas": "TD • Seguimiento y apuntes de análisis"
      },
      {
        "sesion": "Sesión 14",
        "tema": "Cinefórum: Hasta el último hombre",
        "actividades": "Proyección: 'Hasta el último hombre' (Parte 3). Desenlace del film y puesta en común de las lecciones éticas.",
        "notas": "TD • Puesta en común del film"
      },
      {
        "sesion": "Sesión 15",
        "tema": "Cinefórum: Hasta el último hombre",
        "actividades": "Elaboración individual del dossier de reflexión sobre 'Hasta el último hombre': objeción de conciencia y coherencia testimonial.",
        "notas": "POR • Dossier de reflexión del film"
      },
      {
        "sesion": "Sesión 16",
        "tema": "Conciencia y Libertad",
        "actividades": "S1: 'El sagrario interior'. ¿Qué es la conciencia moral? Tabla comparativa: '¿Actúo por conciencia o por mero gusto?'.",
        "notas": "POR • Tabla comparativa para portfolio"
      },
      {
        "sesion": "Sesión 17",
        "tema": "Conciencia y Libertad",
        "actividades": "Plickers S1. S2: 'El espejo de la libertad': La verdadera libertad orientada al bien (Libertad ≠ hacer lo que me dé la gana).",
        "notas": "Mixto: POR + TD (Plickers POR y actividad TD)"
      },
      {
        "sesion": "Sesión 18",
        "tema": "Conciencia y Libertad",
        "actividades": "Plickers S2. S3: 'La anatomía del héroe moral': Estudio de las Virtudes Cardinales y Teologales como pilares del carácter.",
        "notas": "POR • Ficha de virtudes morales"
      },
      {
        "sesion": "Sesión 19",
        "tema": "Conciencia y Libertad",
        "actividades": "Dilemas éticos prácticos: Resolución y debate grupal sobre la ficha 'El dilema de Lucas' (integridad, lealtad y rectitud).",
        "notas": "POR • Ficha dilema moral para portfolio"
      },
      {
        "sesion": "Sesión 20",
        "tema": "Situación de Aprendizaje",
        "actividades": "Trabajo Final 'Expediente Doss': Fase 1 de recopilación de tareas previas y fundamentación ante acusaciones éticas.",
        "notas": "PRO • Situación de Aprendizaje / Expediente Doss"
      },
      {
        "sesion": "Sesión 21",
        "tema": "Situación de Aprendizaje",
        "actividades": "Trabajo Final 'Expediente Doss': Fase 2 de alegatos morales y Fase 3 de diseño de portada y entrega formal.",
        "notas": "PRO • Finalización y entrega Expediente Doss"
      },
      {
        "sesion": "Sesión 22",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Conciencia moral, libertad auténtica y virtudes éticas.",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 23",
        "tema": "Los Novísimos",
        "actividades": "PPT 1: Las preguntas escatológicas de la humanidad: muerte, finitud y esperanza en la trascendencia. Rutina de pensamiento.",
        "notas": "POR • Rutina de pensamiento escatológica"
      },
      {
        "sesion": "Sesión 24",
        "tema": "Los Novísimos",
        "actividades": "Plickers PPT 1. PPT 2: El Juicio particular y universal: la justicia y la infinita misericordia de Dios. Rutina de pensamiento.",
        "notas": "POR • Plickers y rutina para portfolio"
      },
      {
        "sesion": "Sesión 25",
        "tema": "Los Novísimos",
        "actividades": "Plickers PPT 2. PPT 3: El misterio del Cielo y la comunión de los santos como plenitud de amor eterno.",
        "notas": "POR • Plickers y ficha doctrinal"
      },
      {
        "sesion": "Sesión 26",
        "tema": "Los Novísimos",
        "actividades": "Plickers PPT 3. PPT 4: La resurrección de la carne y la escatología cristiana: esperanza frente a la muerte.",
        "notas": "POR • Plickers y rutina final"
      },
      {
        "sesion": "Sesión 27",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Tema de los Novísimos (Muerte, Juicio, Infierno y Gloria).",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 28",
        "tema": "Cinefórum Ético",
        "actividades": "Proyección y debate de dilemas morales: Análisis audiovisual ('Espías desde el cielo') sobre decisiones extremas y responsabilidad.",
        "notas": "TD • Análisis de dilemas éticos"
      },
      {
        "sesion": "Sesión 29",
        "tema": "Cierre de Curso",
        "actividades": "Comprensión lectora de síntesis filosófica y balance de las situaciones de aprendizaje trabajadas durante el curso.",
        "notas": "TD • Lectura y balance de curso"
      },
      {
        "sesion": "Sesión 30",
        "tema": "Espacio de Refuerzo",
        "actividades": "Dinámica de autoevaluación, balance ético-filosófico del curso y cierre académico.",
        "notas": "TD • Balance competencial"
      }
    ],
    "4º ESO": [
      {
        "sesion": "Sesión 1",
        "tema": "Presentación Curso",
        "actividades": "Presentación de la materia, criterios de evaluación y planteamiento metodológico de proyectos y debates éticos.",
        "notas": "TD • Dinámica inicial"
      },
      {
        "sesion": "Sesión 2",
        "tema": "Presentación Curso",
        "actividades": "Acceso a plataforma digital, Prueba inicial diagnóstica, Cuestionario del Alumno y análisis reflexivo del Lema de curso.",
        "notas": "TD • Evaluación diagnóstica"
      },
      {
        "sesion": "Sesión 3",
        "tema": "Antropología Filosófica",
        "actividades": "PPT 1: ¿Quién es el ser humano? Ficha 1: 'Etiquetas sociales y autoconcepto' - Análisis de condicionamientos.",
        "notas": "POR • Ficha 1 para portfolio"
      },
      {
        "sesion": "Sesión 4",
        "tema": "Antropología Filosófica",
        "actividades": "PPT 2: Platón y el dualismo antropológico (cuerpo y alma, mito de la caverna). Ficha 2: Análisis comparativo y aplicación actual.",
        "notas": "POR • Ficha 2 para portfolio"
      },
      {
        "sesion": "Sesión 5",
        "tema": "Antropología Filosófica",
        "actividades": "PPT 3: Aristóteles y la unión sustancial. Ficha 3: 'Así soy yo' (integración cuerpo, afectos y razón). Entrega del Portfolio 1.",
        "notas": "POR • Ficha 3 y entrega formal Portfolio 1"
      },
      {
        "sesion": "Sesión 6",
        "tema": "Dignidad Humana",
        "actividades": "PPT 1: La persona como fin en sí misma (Kant vs instrumentalización). Actividad grupal: '¿Medios o fines?'.",
        "notas": "PRO • Proyecto sobre dignidad humana"
      },
      {
        "sesion": "Sesión 7",
        "tema": "Dignidad Humana",
        "actividades": "PPT 2: La dignidad en la tradición cristiana: hijos de Dios y fraternidad universal. Actividad práctica en grupos.",
        "notas": "PRO • Trabajo cooperativo de síntesis"
      },
      {
        "sesion": "Sesión 8",
        "tema": "Dignidad Humana",
        "actividades": "Lectura comentada y análisis de artículos de la Declaración Universal de Derechos Humanos y dilemas contemporáneos.",
        "notas": "PRO • Análisis documental"
      },
      {
        "sesion": "Sesión 9",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Antropología Filosófica y Dignidad Humana (Platón, Aristóteles y Derechos Humanos).",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 10",
        "tema": "Proyecto Social",
        "actividades": "Proyecto de Aprendizaje-Servicio: Presentación del 'Proyecto Social', detección de necesidades en el entorno y grupos.",
        "notas": "PRO • Inicio Proyecto Social solidario"
      },
      {
        "sesion": "Sesión 11",
        "tema": "Proyecto Social",
        "actividades": "Planificación operativa de la campaña social: objetivos, público diana, materiales y difusión.",
        "notas": "PRO • Diseño de campaña social"
      },
      {
        "sesion": "Sesión 12",
        "tema": "Proyecto Social",
        "actividades": "Ejecución de actividades de campo o elaboración de cartelería y materiales de sensibilización para la comunidad educativa.",
        "notas": "PRO • Desarrollo de materiales"
      },
      {
        "sesion": "Sesión 13",
        "tema": "Proyecto Social",
        "actividades": "Finalización de la propuesta social, redacción de la memoria del proyecto y entrega formal de resultados.",
        "notas": "PRO • Entrega de memoria del proyecto"
      },
      {
        "sesion": "Sesión 14",
        "tema": "Proyecto Social",
        "actividades": "Exposición oral del Proyecto Social ante la clase: valoración del impacto, aprendizajes adquiridos y coevaluación.",
        "notas": "PRO • Exposición oral y coevaluación"
      },
      {
        "sesion": "Sesión 15",
        "tema": "Bioética: Estatuto del Embrión",
        "actividades": "S1: Fundamentos científicos del inicio de la vida. Genética y desarrollo embrionario: 'Una vida con posibilidades'.",
        "notas": "TD • Análisis científico-filosófico"
      },
      {
        "sesion": "Sesión 16",
        "tema": "Bioética: Legalidad y Moralidad",
        "actividades": "Plickers S1. S2: Conflicto cultural y legislación. Proyección testimonial (María del Himalaya) y rutina de pensamiento (Semáforo).",
        "notas": "Mixto: POR + TD (Plickers POR y Semáforo TD)"
      },
      {
        "sesion": "Sesión 17",
        "tema": "Bioética: Preparación Debate",
        "actividades": "Plickers S2. Organización del debate formal sobre el inicio de la vida: asignación de posturas (a favor/en contra), fuentes y argumentos.",
        "notas": "PRO • Preparación de debate académico"
      },
      {
        "sesion": "Sesión 18",
        "tema": "Bioética: Argumentación Debate",
        "actividades": "Trabajo en equipos de debate: redacción de alegatos iniciales, refutaciones, preguntas cruzadas y conclusiones fundamentadas.",
        "notas": "PRO • Redacción de alegatos y réplicas"
      },
      {
        "sesion": "Sesión 19",
        "tema": "Bioética: Celebración Debate",
        "actividades": "Desarrollo del debate académico formal en el aula por turnos estructurados. Rúbrica de evaluación y entrega de reflexión personal escrita.",
        "notas": "Mixto: PRO + POR (Debate PRO y reflexión POR)"
      },
      {
        "sesion": "Sesión 20",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Bioética y Estatuto de la Vida Humana.",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 21",
        "tema": "Identidad Personal",
        "actividades": "PPT 1: Autoconocimiento e interdependencia: La 'Ventana de Johari' (área pública, ciega, oculta y desconocida).",
        "notas": "POR • Dinámica Johari para portfolio"
      },
      {
        "sesion": "Sesión 22",
        "tema": "Identidad Personal",
        "actividades": "PPT 2: Maduración afectiva y toma de decisiones. Rutina de pensamiento 'El Puente' (antes pensaba / ahora pienso).",
        "notas": "POR • Rutina 'El Puente' para portfolio"
      },
      {
        "sesion": "Sesión 23",
        "tema": "Identidad Personal",
        "actividades": "Elaboración guiada del 'Mapa de Identidad Personal': delimitación de valores, fortalezas, debilidades y vocación.",
        "notas": "POR • Mapa de identidad para portfolio"
      },
      {
        "sesion": "Sesión 24",
        "tema": "Identidad Personal",
        "actividades": "Finalización del Mapa de Identidad Personal, puesta en común voluntaria y conclusiones compartidas en el aula.",
        "notas": "POR • Cierre y entrega Mapa de Identidad"
      },
      {
        "sesion": "Sesión 25",
        "tema": "Afectividad y Sexualidad",
        "actividades": "PPT 1: La dimensión antropológica de la sexualidad. Kahoot diagnóstico: Hombres y mujeres, biología y psicología.",
        "notas": "TD • Kahoot diagnóstico y diálogo"
      },
      {
        "sesion": "Sesión 26",
        "tema": "Afectividad y Sexualidad",
        "actividades": "Plickers PPT 1. Estereotipos culturales, hipersexualización y roles de género. Diálogo abierto sobre respeto mutuo.",
        "notas": "TD • Plickers y coloquio guiado"
      },
      {
        "sesion": "Sesión 27",
        "tema": "Afectividad y Sexualidad",
        "actividades": "Plickers. Las tres dimensiones del amor: eros, philia y ágape. Dimensión unitiva y procreativa del acto conyugal. Vídeo y rutina 'Antes y después'.",
        "notas": "POR • Plickers, vídeo y rutina reflexiva"
      },
      {
        "sesion": "Sesión 28",
        "tema": "Amor y Familia",
        "actividades": "PPT 1: Los cinco lenguajes del amor (Test reflexivo). Fidelidad, madurez afectiva y proyecto familiar en el mundo actual.",
        "notas": "POR • Test de lenguajes del amor"
      },
      {
        "sesion": "Sesión 29",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Afectividad, Sexualidad, Amor y Familia.",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 30",
        "tema": "Cierre de Curso",
        "actividades": "Balance del ciclo de ESO: Compromiso social, discernimiento ético futuro y despedida de etapa escolar.",
        "notas": "TD •泛 Balance competencial"
      }
    ],
    "1º BACHILLERATO": [
      {
        "sesion": "Sesión 1",
        "tema": "Presentación Curso",
        "actividades": "Presentación del curso y metodología: planteamiento del Proyecto Personal de Vida, diario reflexivo y acuerdos de trabajo.",
        "notas": "TD • Planteamiento Proyecto Personal"
      },
      {
        "sesion": "Sesión 2",
        "tema": "Presentación Curso",
        "actividades": "Prueba inicial competencial, Cuestionario de intereses y expectativas del alumno. Reflexión inicial sobre el Lema de curso.",
        "notas": "TD • Evaluación diagnóstica"
      },
      {
        "sesion": "Sesión 3",
        "tema": "Proyecto Personal",
        "actividades": "Metodología del Proyecto Personal: Fotografía inicial ('Selfie interior') y redacción de la 1ª entrada del diario: '¿Dónde estoy?'.",
        "notas": "PRO • Diario reflexivo / Proyecto Personal"
      },
      {
        "sesion": "Sesión 4",
        "tema": "¿Quién soy? ¿Dónde estoy?",
        "actividades": "PPT 1: La dignidad incondicional: Creados a imagen y semejanza de Dios. Actividad: 'Carta a mi yo futuro'.",
        "notas": "PRO • Redacción epistolar para proyecto"
      },
      {
        "sesion": "Sesión 5",
        "tema": "DOMUND",
        "actividades": "PPT y documental sobre cooperación internacional, vocación misionera y entrega comunitaria. Debate sobre compromiso social.",
        "notas": "TD • Análisis y debate ético-social"
      },
      {
        "sesion": "Sesión 6",
        "tema": "¿Quién soy? ¿Dónde estoy?",
        "actividades": "PPT 2: Autoconocimiento profundo: Reconocimiento de talentos, heridas y límites humanos. Actividad: 'Mis talentos y límites'.",
        "notas": "PRO • Desarrollo Proyecto Personal"
      },
      {
        "sesion": "Sesión 7",
        "tema": "¿Quién soy? ¿Dónde estoy?",
        "actividades": "PPT 3: Estructura psicológica y espiritual: Creencias nucleares, valores y gestión de emociones. Actividad: 'Creencias y emociones'.",
        "notas": "PRO • Diario y trabajo personal"
      },
      {
        "sesion": "Sesión 8",
        "tema": "¿Quién soy? ¿Dónde estoy?",
        "actividades": "Elaboración del 'Mapa de Identidad Personal' (PRO PERS): síntesis biográfica, aspiraciones y revisión de rúbrica de autoevaluación.",
        "notas": "PRO • Mapa de identidad personal"
      },
      {
        "sesion": "Sesión 9",
        "tema": "¿Quién soy? ¿Dónde estoy?",
        "actividades": "Finalización y entrega del Mapa de Identidad Personal. Revisión de rúbrica de autoevaluación y actualización de entradas del Diario.",
        "notas": "PRO • Entrega y revisión de diario"
      },
      {
        "sesion": "Sesión 10",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis Bloque 1: Antropología, Dignidad y Mapa de Identidad.",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 11",
        "tema": "¿Hacia dónde voy?",
        "actividades": "PPT: '¿Éxito o plenitud?'. Dinámica de discernimiento vital: Redacción del 'Obituario personal' (qué huella quiero dejar en el mundo).",
        "notas": "POR • Actividad reflexiva: El obituario"
      },
      {
        "sesion": "Sesión 12",
        "tema": "¿Hacia dónde voy?",
        "actividades": "¿Quién conduce realmente mi vida? Dinámica de la 'Subasta de valores'. PPT: Conciencia, libertad y condicionamientos culturales.",
        "notas": "Mixto: POR + TD (Dinámica TD + Ficha reflexiva POR)"
      },
      {
        "sesion": "Sesión 13",
        "tema": "¿Hacia dónde voy?",
        "actividades": "PPT: Vocación, compromiso moral y proyección comunitaria. Pautas para articular la vocación profesional y el servicio a los demás.",
        "notas": "TD • Exposición dialogada"
      },
      {
        "sesion": "Sesión 14",
        "tema": "Bioética: La Vida Humana",
        "actividades": "PPT 1: El estatuto biológico y ontológico del embrión humano: 'Una vida con posibilidades'. Rutina de pensamiento fundamentada.",
        "notas": "TD • Rutina de pensamiento y bioética"
      },
      {
        "sesion": "Sesión 15",
        "tema": "Bioética: La Vida Humana",
        "actividades": "Análisis ético y deontológico: El conflicto entre legalidad y moralidad a partir del texto y veto de Tabaré Vázquez.",
        "notas": "TD • Comentario de texto ético"
      },
      {
        "sesion": "Sesión 16",
        "tema": "Bioética: La Vida Humana",
        "actividades": "Proyección testimonial: 'María del Himalaya'. Ficha 2: Análisis del proceso existencial, perdón y valor de la vida.",
        "notas": "POR • Ficha 2 de análisis ético"
      },
      {
        "sesion": "Sesión 17",
        "tema": "Bioética: La Vida Humana",
        "actividades": "Conclusión de la Ficha 2. Primera revisión formal del Diario Personal (comprobación de las primeras 9 entradas reflexivas).",
        "notas": "Mixto: POR + TD (Ficha POR y revisión Diario TD)"
      },
      {
        "sesion": "Sesión 18",
        "tema": "Bioética: La Vida Humana",
        "actividades": "Puesta en común de argumentos bioéticos, diálogo socrático sobre la cultura de la vida y cierre de actividades del bloque.",
        "notas": "TD • Diálogo socrático y síntesis"
      },
      {
        "sesion": "Sesión 19",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Bloque de Bioética y Sentido de la Vida.",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 20",
        "tema": "Moral Fundamental: Decálogo",
        "actividades": "Ficha introductoria: La ley moral natural y el sentido liberador del Decálogo (los límites como protección de la dignidad).",
        "notas": "TD • Ficha de lectura y análisis moral"
      },
      {
        "sesion": "Sesión 21",
        "tema": "Mandamientos en el S. XXI",
        "actividades": "Mandamiento 1: 'Amar a Dios sobre todas las cosas'. Análisis de los nuevos ídolos contemporáneos (dinero, culto a la imagen, éxito fácil). Ficha 1.",
        "notas": "POR • Ficha 1 para portfolio de evidencias"
      },
      {
        "sesion": "Sesión 22",
        "tema": "Mandamientos en el S. XXI",
        "actividades": "Mandamiento 2: El valor de la palabra dada, el respeto a lo sagrado y la veracidad frente al perjurio y la manipulación. Ficha 2.",
        "notas": "POR • Ficha 2 para portfolio de evidencias"
      },
      {
        "sesion": "Sesión 23",
        "tema": "Mandamientos en el S. XXI",
        "actividades": "Mandamiento 3: Santificar las fiestas. La teología del descanso (shabbat), la alienación laboral y el tiempo gratuito. Ficha 3.",
        "notas": "POR • Ficha 3 para portfolio de evidencias"
      },
      {
        "sesion": "Sesión 24",
        "tema": "Mandamientos en el S. XXI",
        "actividades": "Mandamiento 4: Honrar padre y madre. Relaciones familiares, cuidado de mayores, agradecimiento intergeneracional. Ficha 4.",
        "notas": "POR • Ficha 4 para portfolio de evidencias"
      },
      {
        "sesion": "Sesión 25",
        "tema": "Proyecto Personal",
        "actividades": "Revisión final y entrega del Diario Personal y del Proyecto de Vida. Rúbrica de maduración vocacional y autoevaluación.",
        "notas": "POR • Entrega y evaluación del Diario de Vida"
      },
      {
        "sesion": "Sesión 26",
        "tema": "Evaluación Síntesis",
        "actividades": "Prueba de Síntesis: Moral Fundamental y Los Diez Mandamientos en el siglo XXI.",
        "notas": "EXAMEN • Prueba escrita de evaluación"
      },
      {
        "sesion": "Sesión 27",
        "tema": "Debate y Balance",
        "actividades": "Debate socrático sobre grandes dilemas contemporáneos, recapitulación de aprendizajes y balance formativo del curso.",
        "notas": "TD • Debate socrático de cierre"
      },
      {
        "sesion": "Sesión 28",
        "tema": "Cierre de Curso",
        "actividades": "Conclusiones finales del Proyecto Personal de Vida, compromiso con la sociedad y despedida formativa.",
        "notas": "TD • Síntesis y despedida"
      },
      {
        "sesion": "Sesión 29",
        "tema": "Espacio de Refuerzo",
        "actividades": "Sesión de tutoría personalizada de proyectos y resolución de dudas para pruebas extraordinarias.",
        "notas": "TD • Orientación académica"
      },
      {
        "sesion": "Sesión 30",
        "tema": "Espacio de Refuerzo",
        "actividades": "Cierre del curso académico y balance del desarrollo del Proyecto de Vida.",
        "notas": "TD • Balance competencial"
      }
    ]
  },
  "temarioEdits": {
    "3º ESO|0": {
      "actividades": "Presentación de la asignatura, objetivos formativos y clima de aula: preguntas de verano y resolución de dudas."
    },
    "custom_ribarroja_1º ESO - A_0": {
      "actividades": ""
    }
  },
  "temarioOverrides": {
    "ribarroja|1º BACHILLERATO|2": 0
  },
  "tareas": {
    "currentWeekIndex": 15,
    "weeksData": {
      "0": {
        "state": {
          "m_1eso_a_grades": true,
          "m_1eso_a_mat": true,
          "m_1eso_a_platform": true,
          "m_1eso_a_print": true,
          "m_1eso_b_grades": true,
          "m_1eso_b_mat": true,
          "m_1eso_b_platform": true,
          "m_1eso_b_print": true,
          "m_2eso_a_grades": true,
          "m_2eso_a_mat": true,
          "m_2eso_a_platform": true,
          "m_2eso_a_print": true,
          "m_2eso_b_grades": true,
          "m_2eso_b_mat": true,
          "m_2eso_b_platform": true,
          "m_2eso_b_print": true,
          "m_3eso_a_grades": true,
          "m_3eso_a_mat": true,
          "m_3eso_a_platform": true,
          "m_3eso_a_print": true,
          "m_3eso_b_grades": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_3eso_b_platform": true,
          "m_3eso_b_print": true,
          "m_4eso_a_grades": true,
          "m_4eso_a_mat": true,
          "m_4eso_a_platform": true,
          "m_4eso_a_print": true,
          "m_4eso_b_grades": true,
          "m_4eso_b_mat": true,
          "m_4eso_b_platform": true,
          "m_4eso_b_print": true,
          "r_1bac_grades": true,
          "r_1bac_mat": true,
          "r_1bac_platform": true,
          "r_1bac_print": true,
          "r_1eso_a_grades": true,
          "r_1eso_a_mat": true,
          "r_1eso_a_platform": true,
          "r_1eso_a_print": true,
          "r_1eso_b_grades": true,
          "r_1eso_b_mat": true,
          "r_1eso_b_platform": true,
          "r_1eso_b_print": true,
          "r_2eso_a_grades": true,
          "r_2eso_a_mat": true,
          "r_2eso_a_platform": true,
          "r_2eso_a_print": true,
          "r_2eso_b_grades": true,
          "r_2eso_b_mat": true,
          "r_2eso_b_platform": true,
          "r_2eso_b_print": true,
          "r_3eso_a_grades": true,
          "r_3eso_a_mat": true,
          "r_3eso_a_platform": true,
          "r_3eso_a_print": true,
          "r_3eso_b_grades": true,
          "r_3eso_b_mat": true,
          "r_3eso_b_platform": true,
          "r_3eso_b_print": true,
          "r_4eso_a_grades": true,
          "r_4eso_a_mat": true,
          "r_4eso_a_platform": true,
          "r_4eso_a_print": true,
          "r_4eso_b_grades": true,
          "r_4eso_b_mat": true,
          "r_4eso_b_platform": true,
          "r_4eso_b_print": true
        }
      },
      "1": {
        "state": {
          "m_1eso_a_grades": true,
          "m_1eso_a_mat": true,
          "m_1eso_a_platform": true,
          "m_1eso_a_print": true,
          "m_1eso_b_grades": true,
          "m_1eso_b_mat": true,
          "m_1eso_b_platform": true,
          "m_1eso_b_print": true,
          "m_2eso_a_grades": true,
          "m_2eso_a_mat": true,
          "m_2eso_a_platform": true,
          "m_2eso_a_print": true,
          "m_2eso_b_grades": true,
          "m_2eso_b_mat": true,
          "m_2eso_b_platform": true,
          "m_2eso_b_print": true,
          "m_3eso_a_grades": true,
          "m_3eso_a_mat": true,
          "m_3eso_a_platform": true,
          "m_3eso_a_print": true,
          "m_3eso_b_grades": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_3eso_b_platform": true,
          "m_3eso_b_print": true,
          "m_4eso_a_grades": true,
          "m_4eso_a_mat": true,
          "m_4eso_a_platform": true,
          "m_4eso_a_print": true,
          "m_4eso_b_grades": true,
          "m_4eso_b_mat": true,
          "m_4eso_b_platform": true,
          "m_4eso_b_print": true,
          "r_1bac_grades": true,
          "r_1bac_mat": true,
          "r_1bac_platform": true,
          "r_1bac_print": true,
          "r_1eso_a_grades": true,
          "r_1eso_a_mat": true,
          "r_1eso_a_platform": true,
          "r_1eso_a_print": true,
          "r_1eso_b_grades": true,
          "r_1eso_b_mat": true,
          "r_1eso_b_platform": true,
          "r_1eso_b_print": true,
          "r_2eso_a_grades": true,
          "r_2eso_a_mat": true,
          "r_2eso_a_platform": true,
          "r_2eso_a_print": true,
          "r_2eso_b_grades": true,
          "r_2eso_b_mat": true,
          "r_2eso_b_platform": true,
          "r_2eso_b_print": true,
          "r_3eso_a_grades": true,
          "r_3eso_a_mat": true,
          "r_3eso_a_platform": true,
          "r_3eso_a_print": true,
          "r_3eso_b_grades": true,
          "r_3eso_b_mat": true,
          "r_3eso_b_platform": true,
          "r_3eso_b_print": true,
          "r_4eso_a_grades": true,
          "r_4eso_a_mat": true,
          "r_4eso_a_platform": true,
          "r_4eso_a_print": true,
          "r_4eso_b_grades": true,
          "r_4eso_b_mat": true,
          "r_4eso_b_platform": true,
          "r_4eso_b_print": true
        }
      },
      "2": {
        "state": {
          "m_1eso_a_grades": true,
          "m_1eso_a_mat": true,
          "m_1eso_a_platform": true,
          "m_1eso_a_print": true,
          "m_1eso_b_grades": true,
          "m_1eso_b_mat": true,
          "m_1eso_b_platform": true,
          "m_1eso_b_print": true,
          "m_2eso_a_grades": true,
          "m_2eso_a_mat": true,
          "m_2eso_a_platform": true,
          "m_2eso_a_print": true,
          "m_2eso_b_grades": true,
          "m_2eso_b_mat": true,
          "m_2eso_b_platform": true,
          "m_2eso_b_print": true,
          "m_3eso_a_grades": true,
          "m_3eso_a_mat": true,
          "m_3eso_a_platform": true,
          "m_3eso_a_print": true,
          "m_3eso_b_grades": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_3eso_b_platform": true,
          "m_3eso_b_print": true,
          "m_4eso_a_grades": true,
          "m_4eso_a_mat": true,
          "m_4eso_a_platform": true,
          "m_4eso_a_print": true,
          "m_4eso_b_grades": true,
          "m_4eso_b_mat": true,
          "m_4eso_b_platform": true,
          "m_4eso_b_print": true,
          "r_1bac_grades": true,
          "r_1bac_mat": true,
          "r_1bac_platform": true,
          "r_1bac_print": true,
          "r_1eso_a_grades": true,
          "r_1eso_a_mat": true,
          "r_1eso_a_platform": true,
          "r_1eso_a_print": true,
          "r_1eso_b_grades": true,
          "r_1eso_b_mat": true,
          "r_1eso_b_platform": true,
          "r_1eso_b_print": true,
          "r_2eso_a_grades": true,
          "r_2eso_a_mat": true,
          "r_2eso_a_platform": true,
          "r_2eso_a_print": true,
          "r_2eso_b_grades": true,
          "r_2eso_b_mat": true,
          "r_2eso_b_platform": true,
          "r_2eso_b_print": true,
          "r_3eso_a_grades": true,
          "r_3eso_a_mat": true,
          "r_3eso_a_platform": true,
          "r_3eso_a_print": true,
          "r_3eso_b_grades": true,
          "r_3eso_b_mat": true,
          "r_3eso_b_platform": true,
          "r_3eso_b_print": true,
          "r_4eso_a_grades": true,
          "r_4eso_a_mat": true,
          "r_4eso_a_platform": true,
          "r_4eso_a_print": true,
          "r_4eso_b_grades": true,
          "r_4eso_b_mat": true,
          "r_4eso_b_platform": true,
          "r_4eso_b_print": true
        }
      },
      "3": {
        "state": {
          "m_1eso_a_grades": true,
          "m_1eso_a_mat": true,
          "m_1eso_a_platform": true,
          "m_1eso_a_print": true,
          "m_1eso_b_grades": true,
          "m_1eso_b_mat": true,
          "m_1eso_b_platform": true,
          "m_1eso_b_print": true,
          "m_2eso_a_grades": true,
          "m_2eso_a_mat": true,
          "m_2eso_a_platform": true,
          "m_2eso_a_print": true,
          "m_2eso_b_grades": true,
          "m_2eso_b_mat": true,
          "m_2eso_b_platform": true,
          "m_2eso_b_print": true,
          "m_3eso_a_grades": true,
          "m_3eso_a_mat": true,
          "m_3eso_a_platform": true,
          "m_3eso_a_print": true,
          "m_3eso_b_grades": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_3eso_b_platform": true,
          "m_3eso_b_print": true,
          "m_4eso_a_grades": true,
          "m_4eso_a_mat": true,
          "m_4eso_a_platform": true,
          "m_4eso_a_print": true,
          "m_4eso_b_grades": true,
          "m_4eso_b_mat": true,
          "m_4eso_b_platform": true,
          "m_4eso_b_print": true,
          "r_1bac_grades": true,
          "r_1bac_mat": true,
          "r_1bac_platform": true,
          "r_1bac_print": true,
          "r_1eso_a_grades": true,
          "r_1eso_a_mat": true,
          "r_1eso_a_platform": true,
          "r_1eso_a_print": true,
          "r_1eso_b_grades": true,
          "r_1eso_b_mat": true,
          "r_1eso_b_platform": true,
          "r_1eso_b_print": true,
          "r_2eso_a_grades": true,
          "r_2eso_a_mat": true,
          "r_2eso_a_platform": true,
          "r_2eso_a_print": true,
          "r_2eso_b_grades": true,
          "r_2eso_b_mat": true,
          "r_2eso_b_platform": true,
          "r_2eso_b_print": true,
          "r_3eso_a_grades": true,
          "r_3eso_a_mat": true,
          "r_3eso_a_platform": true,
          "r_3eso_a_print": true,
          "r_3eso_b_grades": true,
          "r_3eso_b_mat": true,
          "r_3eso_b_platform": true,
          "r_3eso_b_print": true,
          "r_4eso_a_grades": true,
          "r_4eso_a_mat": true,
          "r_4eso_a_platform": true,
          "r_4eso_a_print": true,
          "r_4eso_b_grades": true,
          "r_4eso_b_mat": true,
          "r_4eso_b_platform": true,
          "r_4eso_b_print": true
        }
      },
      "4": {
        "state": {
          "m_1eso_a_grades": true,
          "m_1eso_a_mat": true,
          "m_1eso_a_platform": true,
          "m_1eso_a_print": true,
          "m_1eso_b_grades": true,
          "m_1eso_b_mat": true,
          "m_1eso_b_platform": true,
          "m_1eso_b_print": true,
          "m_2eso_a_grades": true,
          "m_2eso_a_mat": true,
          "m_2eso_a_platform": true,
          "m_2eso_a_print": true,
          "m_2eso_b_grades": true,
          "m_2eso_b_mat": true,
          "m_2eso_b_platform": true,
          "m_2eso_b_print": true,
          "m_3eso_a_grades": true,
          "m_3eso_a_mat": true,
          "m_3eso_a_platform": true,
          "m_3eso_a_print": true,
          "m_3eso_b_grades": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_3eso_b_platform": true,
          "m_3eso_b_print": true,
          "m_4eso_a_grades": true,
          "m_4eso_a_mat": true,
          "m_4eso_a_platform": true,
          "m_4eso_a_print": true,
          "m_4eso_b_grades": true,
          "m_4eso_b_mat": true,
          "m_4eso_b_platform": true,
          "m_4eso_b_print": true,
          "r_1bac_grades": true,
          "r_1bac_mat": true,
          "r_1bac_platform": true,
          "r_1bac_print": true,
          "r_1eso_a_grades": true,
          "r_1eso_a_mat": true,
          "r_1eso_a_platform": true,
          "r_1eso_a_print": true,
          "r_1eso_b_grades": true,
          "r_1eso_b_mat": true,
          "r_1eso_b_platform": true,
          "r_1eso_b_print": true,
          "r_2eso_a_grades": true,
          "r_2eso_a_mat": true,
          "r_2eso_a_platform": true,
          "r_2eso_a_print": true,
          "r_2eso_b_grades": true,
          "r_2eso_b_mat": true,
          "r_2eso_b_platform": true,
          "r_2eso_b_print": true,
          "r_3eso_a_grades": true,
          "r_3eso_a_mat": true,
          "r_3eso_a_platform": true,
          "r_3eso_a_print": true,
          "r_3eso_b_grades": true,
          "r_3eso_b_mat": true,
          "r_3eso_b_platform": true,
          "r_3eso_b_print": true,
          "r_4eso_a_grades": true,
          "r_4eso_a_mat": true,
          "r_4eso_a_platform": true,
          "r_4eso_a_print": true,
          "r_4eso_b_grades": true,
          "r_4eso_b_mat": true,
          "r_4eso_b_platform": true,
          "r_4eso_b_print": true
        }
      },
      "5": {
        "state": {
          "m_1eso_a_grades": true,
          "m_1eso_a_mat": true,
          "m_1eso_a_platform": true,
          "m_1eso_a_print": true,
          "m_1eso_b_grades": true,
          "m_1eso_b_mat": true,
          "m_1eso_b_platform": true,
          "m_1eso_b_print": true,
          "m_2eso_a_grades": true,
          "m_2eso_a_mat": true,
          "m_2eso_a_platform": true,
          "m_2eso_a_print": true,
          "m_2eso_b_grades": true,
          "m_2eso_b_mat": true,
          "m_2eso_b_platform": true,
          "m_2eso_b_print": true,
          "m_3eso_a_grades": true,
          "m_3eso_a_mat": true,
          "m_3eso_a_platform": true,
          "m_3eso_a_print": true,
          "m_3eso_b_grades": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_3eso_b_platform": true,
          "m_3eso_b_print": true,
          "m_4eso_a_grades": true,
          "m_4eso_a_mat": true,
          "m_4eso_a_platform": true,
          "m_4eso_a_print": true,
          "m_4eso_b_grades": true,
          "m_4eso_b_mat": true,
          "m_4eso_b_platform": true,
          "m_4eso_b_print": true,
          "r_1bac_grades": true,
          "r_1bac_mat": true,
          "r_1bac_platform": true,
          "r_1bac_print": true,
          "r_1eso_a_grades": true,
          "r_1eso_a_mat": true,
          "r_1eso_a_platform": true,
          "r_1eso_a_print": true,
          "r_1eso_b_grades": true,
          "r_1eso_b_mat": true,
          "r_1eso_b_platform": true,
          "r_1eso_b_print": true,
          "r_2eso_a_grades": true,
          "r_2eso_a_mat": true,
          "r_2eso_a_platform": true,
          "r_2eso_a_print": true,
          "r_2eso_b_grades": true,
          "r_2eso_b_mat": true,
          "r_2eso_b_platform": true,
          "r_2eso_b_print": true,
          "r_3eso_a_grades": true,
          "r_3eso_a_mat": true,
          "r_3eso_a_platform": true,
          "r_3eso_a_print": true,
          "r_3eso_b_grades": true,
          "r_3eso_b_mat": true,
          "r_3eso_b_platform": true,
          "r_3eso_b_print": true,
          "r_4eso_a_grades": true,
          "r_4eso_a_mat": true,
          "r_4eso_a_platform": true,
          "r_4eso_a_print": true,
          "r_4eso_b_grades": true,
          "r_4eso_b_mat": true,
          "r_4eso_b_platform": true,
          "r_4eso_b_print": true
        }
      },
      "6": {
        "notes": {
          "m_1eso_a": "Contextos",
          "m_1eso_b": "Contextos",
          "m_2eso_a": "",
          "m_3eso_a": "Preguntas",
          "m_3eso_b": "Preguntas",
          "m_4eso_a": "Etiquetas",
          "m_4eso_b": "Etiquetas",
          "r_1eso_a": "Contextos",
          "r_1eso_b": "Contextos",
          "r_2eso_a": "",
          "r_3eso_a": "Preguntas",
          "r_3eso_b": "Preguntas",
          "r_4eso_a": "Etiquetas",
          "r_4eso_b": "Etiquetas"
        },
        "state": {
          "m_1eso_a_grades": true,
          "m_1eso_a_mat": true,
          "m_1eso_a_platform": true,
          "m_1eso_a_print": true,
          "m_1eso_b_grades": true,
          "m_1eso_b_mat": true,
          "m_1eso_b_platform": true,
          "m_1eso_b_print": true,
          "m_2eso_a_grades": true,
          "m_2eso_a_mat": true,
          "m_2eso_a_platform": true,
          "m_2eso_a_print": true,
          "m_2eso_b_grades": true,
          "m_2eso_b_mat": true,
          "m_2eso_b_platform": true,
          "m_2eso_b_print": true,
          "m_3eso_a_grades": true,
          "m_3eso_a_mat": true,
          "m_3eso_a_platform": true,
          "m_3eso_a_print": true,
          "m_3eso_b_grades": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_3eso_b_platform": true,
          "m_3eso_b_print": true,
          "m_4eso_a_grades": true,
          "m_4eso_a_mat": true,
          "m_4eso_a_platform": true,
          "m_4eso_a_print": true,
          "m_4eso_b_grades": true,
          "m_4eso_b_mat": true,
          "m_4eso_b_platform": true,
          "m_4eso_b_print": true,
          "r_1bac_grades": true,
          "r_1bac_mat": true,
          "r_1bac_platform": true,
          "r_1bac_print": true,
          "r_1eso_a_grades": true,
          "r_1eso_a_mat": true,
          "r_1eso_a_platform": true,
          "r_1eso_a_print": true,
          "r_1eso_b_grades": true,
          "r_1eso_b_mat": true,
          "r_1eso_b_platform": true,
          "r_1eso_b_print": true,
          "r_2eso_a_grades": true,
          "r_2eso_a_mat": true,
          "r_2eso_a_platform": true,
          "r_2eso_a_print": true,
          "r_2eso_b_grades": true,
          "r_2eso_b_mat": true,
          "r_2eso_b_platform": true,
          "r_2eso_b_print": true,
          "r_3eso_a_grades": true,
          "r_3eso_a_mat": true,
          "r_3eso_a_platform": true,
          "r_3eso_a_print": true,
          "r_3eso_b_grades": true,
          "r_3eso_b_mat": true,
          "r_3eso_b_platform": true,
          "r_3eso_b_print": true,
          "r_4eso_a_grades": true,
          "r_4eso_a_mat": true,
          "r_4eso_a_platform": true,
          "r_4eso_a_print": true,
          "r_4eso_b_grades": true,
          "r_4eso_b_mat": true,
          "r_4eso_b_platform": true,
          "r_4eso_b_print": true
        }
      },
      "7": {
        "overdue": {
          "m_1eso_a_educamos": true,
          "m_1eso_b_educamos": true,
          "m_3eso_b_educamos": true,
          "r_4eso_a_educamos": true
        },
        "state": {
          "m_1eso_a_grades": false,
          "m_1eso_a_mat": true,
          "m_1eso_a_platform": true,
          "m_1eso_a_print": true,
          "m_1eso_b_grades": false,
          "m_1eso_b_mat": true,
          "m_1eso_b_platform": true,
          "m_1eso_b_print": true,
          "m_2eso_a_grades": false,
          "m_2eso_a_mat": true,
          "m_2eso_a_print": true,
          "m_2eso_b_grades": false,
          "m_2eso_b_mat": true,
          "m_2eso_b_print": true,
          "m_3eso_a_grades": false,
          "m_3eso_a_mat": true,
          "m_3eso_a_platform": true,
          "m_3eso_a_print": true,
          "m_3eso_b_grades": false,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_3eso_b_platform": true,
          "m_3eso_b_print": true,
          "m_4eso_a_grades": false,
          "m_4eso_a_mat": true,
          "m_4eso_a_platform": true,
          "m_4eso_a_print": true,
          "m_4eso_b_grades": false,
          "m_4eso_b_mat": true,
          "m_4eso_b_platform": true,
          "m_4eso_b_print": true,
          "r_1bac_grades": false,
          "r_1bac_mat": true,
          "r_1eso_a_grades": false,
          "r_1eso_a_mat": true,
          "r_1eso_b_grades": false,
          "r_1eso_b_mat": true,
          "r_1eso_b_print": true,
          "r_2eso_a_grades": false,
          "r_2eso_a_mat": true,
          "r_2eso_b_grades": false,
          "r_2eso_b_mat": true,
          "r_3eso_a_grades": false,
          "r_3eso_a_mat": true,
          "r_3eso_a_platform": true,
          "r_3eso_b_grades": false,
          "r_3eso_b_mat": true,
          "r_3eso_b_platform": true,
          "r_4eso_a_grades": false,
          "r_4eso_a_mat": true,
          "r_4eso_a_platform": true,
          "r_4eso_a_print": true,
          "r_4eso_b_grades": false,
          "r_4eso_b_mat": true,
          "r_4eso_b_platform": true
        },
        "taskTexts": {
          "m_1eso_a_platform": "DDHH",
          "m_1eso_a_print": "EX V 28",
          "m_1eso_b_platform": "DDHH",
          "m_1eso_b_print": "EX V 28/ C 2",
          "m_2eso_a_print": "EX V 31/ C 2",
          "m_2eso_b_print": "EX V 29/ C 1",
          "m_3eso_a_platform": "Gabinete",
          "m_3eso_a_print": "EX V 29/ C 1",
          "m_3eso_b_platform": "Gabinete",
          "m_3eso_b_print": "EX V 25/ C 3/ CH 1",
          "m_4eso_a_platform": "Diagnóstico antr.",
          "m_4eso_a_print": "EX V 23",
          "m_4eso_b_platform": "Diagnóstico antr.",
          "m_4eso_b_print": "EX V 20",
          "r_1eso_b_print": "DDHH",
          "r_3eso_a_platform": "Gabinete",
          "r_3eso_b_platform": "Gabinete",
          "r_4eso_a_platform": "Diagnóstico antr.",
          "r_4eso_a_print": "Casos - SA",
          "r_4eso_b_platform": "Diagnóstico antr."
        }
      },
      "8": {
        "state": {
          "m_1eso_a_mat": true,
          "m_1eso_b_mat": true,
          "m_2eso_a_mat": true,
          "m_2eso_b_mat": true,
          "m_3eso_a_mat": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_4eso_a_mat": true,
          "m_4eso_b_mat": true,
          "r_1bac_mat": true,
          "r_1bac_print": true,
          "r_1eso_a_mat": true,
          "r_1eso_a_print": true,
          "r_1eso_b_mat": true,
          "r_1eso_b_print": true,
          "r_2eso_a_mat": true,
          "r_2eso_a_print": true,
          "r_2eso_b_mat": true,
          "r_2eso_b_print": true,
          "r_3eso_a_mat": true,
          "r_3eso_b_mat": true,
          "r_4eso_a_mat": true,
          "r_4eso_b_mat": true
        },
        "taskTexts": {
          "r_1bac_print": "Caso de rescate",
          "r_1eso_a_print": "DDHH",
          "r_1eso_b_print": "EX C 30",
          "r_2eso_a_print": "EX V 30",
          "r_2eso_b_print": "EX V 30 / C 4"
        }
      },
      "9": {
        "overdue": {
          "m_2eso_a_educamos": true,
          "m_2eso_b_educamos": true,
          "m_3eso_a_educamos": true,
          "m_3eso_b_educamos": true,
          "r_1eso_a_educamos": true,
          "r_1eso_b_educamos": true
        },
        "state": {
          "m_1eso_a_mat": true,
          "m_1eso_b_mat": true,
          "m_2eso_a_mat": true,
          "m_2eso_b_mat": true,
          "m_3eso_a_mat": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_4eso_a_mat": true,
          "m_4eso_b_mat": true,
          "r_1bac_mat": true,
          "r_1eso_a_mat": true,
          "r_1eso_a_print": true,
          "r_1eso_b_mat": true,
          "r_2eso_a_mat": true,
          "r_2eso_a_print": true,
          "r_2eso_b_mat": true,
          "r_2eso_b_print": true,
          "r_3eso_a_mat": true,
          "r_3eso_b_mat": true,
          "r_4eso_a_mat": true,
          "r_4eso_b_mat": true
        },
        "taskTexts": {
          "r_1eso_a_print": "DDHH",
          "r_2eso_a_print": "Dossier Noticiero",
          "r_2eso_b_print": "Dossier Noticiero"
        }
      },
      "10": {
        "overdue": {
          "r_2eso_a_educamos": true,
          "r_2eso_b_educamos": true
        },
        "state": {
          "m_1eso_a_mat": true,
          "m_1eso_b_mat": true,
          "m_2eso_a_mat": true,
          "m_2eso_b_mat": true,
          "m_3eso_a_mat": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_4eso_a_mat": true,
          "m_4eso_b_mat": true,
          "r_1bac_mat": true,
          "r_1eso_a_mat": true,
          "r_1eso_b_mat": true,
          "r_2eso_a_mat": true,
          "r_2eso_b_mat": true,
          "r_3eso_a_mat": true,
          "r_3eso_a_print": true,
          "r_3eso_b_mat": true,
          "r_3eso_b_print": true,
          "r_4eso_a_mat": true,
          "r_4eso_b_mat": true
        },
        "taskTexts": {
          "r_1eso_a_print": "EX C 30",
          "r_3eso_a_print": "Dossier casos",
          "r_3eso_b_print": "Dossier casos",
          "r_4eso_a_print": "DDHH V 15",
          "r_4eso_b_print": "DDHH V 15"
        }
      },
      "11": {
        "overdue": {
          "m_1eso_a_educamos": true,
          "m_1eso_b_educamos": true,
          "m_2eso_a_educamos": true,
          "m_2eso_b_educamos": true,
          "m_4eso_a_educamos": true,
          "m_4eso_b_educamos": true,
          "r_1bac_educamos": true,
          "r_1eso_a_educamos": true,
          "r_4eso_a_print": true,
          "r_4eso_b_print": true
        },
        "state": {
          "m_1eso_a_mat": true,
          "m_1eso_b_mat": true,
          "m_2eso_a_mat": true,
          "m_2eso_b_mat": true,
          "m_3eso_a_mat": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_4eso_a_mat": true,
          "m_4eso_b_mat": true,
          "r_1bac_mat": true,
          "r_1eso_a_mat": true,
          "r_1eso_b_mat": true,
          "r_2eso_a_mat": true,
          "r_2eso_b_mat": true,
          "r_3eso_a_mat": true,
          "r_3eso_b_mat": true,
          "r_4eso_a_mat": true,
          "r_4eso_b_mat": true
        },
        "taskTexts": {
          "r_4eso_a_print": "Muerte V 15",
          "r_4eso_b_print": "Muerte V 15"
        }
      },
      "12": {
        "overdue": {
          "r_1eso_b_educamos": true,
          "r_2eso_a_educamos": true,
          "r_2eso_b_educamos": true,
          "r_3eso_a_educamos": true,
          "r_3eso_b_educamos": true,
          "r_4eso_b_educamos": true
        },
        "state": {
          "m_1eso_a_mat": true,
          "m_1eso_b_mat": true,
          "m_2eso_a_mat": true,
          "m_2eso_b_mat": true,
          "m_3eso_a_mat": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_4eso_a_mat": true,
          "m_4eso_b_mat": true,
          "r_1bac_mat": true,
          "r_1eso_a_mat": true,
          "r_1eso_b_mat": true,
          "r_2eso_a_mat": true,
          "r_2eso_b_mat": true,
          "r_3eso_a_mat": true,
          "r_3eso_b_mat": true,
          "r_4eso_a_mat": true,
          "r_4eso_b_mat": true
        }
      },
      "13": {
        "overdue": {
          "m_2eso_a_educamos": true,
          "m_2eso_b_educamos": true,
          "r_1eso_a_educamos": true,
          "r_3eso_a_educamos": true,
          "r_3eso_b_educamos": true
        },
        "state": {
          "m_1eso_a_mat": true,
          "m_1eso_b_mat": true,
          "m_2eso_a_mat": true,
          "m_2eso_b_mat": true,
          "m_3eso_a_mat": true,
          "m_3eso_b_mat": true,
          "m_4eso_a_mat": true,
          "m_4eso_b_mat": true,
          "r_1bac_mat": false,
          "r_1eso_a_mat": true,
          "r_1eso_b_mat": true,
          "r_2eso_a_mat": true,
          "r_2eso_b_mat": true,
          "r_3eso_a_mat": true,
          "r_3eso_b_mat": true,
          "r_4eso_a_mat": true,
          "r_4eso_b_mat": true
        }
      },
      "14": {
        "overdue": {
          "m_2eso_a_educamos": true,
          "m_2eso_b_educamos": true,
          "m_3eso_b_neae": true,
          "r_1bac_mat": true,
          "r_2eso_a_educamos": true,
          "r_2eso_b_educamos": true
        },
        "state": {
          "m_2eso_a_mat": true,
          "m_2eso_b_mat": true,
          "r_2eso_a_mat": true,
          "r_2eso_b_mat": true
        }
      },
      "15": {
        "overdue": {
          "m_1eso_a_mat": true,
          "m_1eso_b_mat": true,
          "m_3eso_a_mat": true,
          "m_3eso_b_mat": true,
          "m_3eso_b_neae": true,
          "m_4eso_a_mat": true,
          "m_4eso_b_mat": true,
          "r_1bac_mat": true,
          "r_1eso_a_mat": true,
          "r_1eso_b_mat": true,
          "r_2eso_a_educamos": true,
          "r_2eso_b_educamos": true,
          "r_3eso_a_mat": true,
          "r_3eso_b_mat": true,
          "r_4eso_a_mat": true,
          "r_4eso_b_mat": true
        },
        "state": {
          "m_2eso_a_mat": true,
          "m_2eso_b_mat": true,
          "r_2eso_a_mat": true,
          "r_2eso_b_mat": true
        }
      }
    },
    "neaeProfiles": {
      "m_3eso_b": "Castellano - 3 alumnos\nInglés/chino - 1 alumna"
    },
    "longTermTasks": [
      {
        "id": "lt_1790927405339",
        "name": "Ap. Tema 2",
        "scope": "all"
      },
      {
        "id": "lt_1792317261306",
        "name": "Traducir Tema 2 VAL",
        "scope": "all"
      },
      {
        "id": "lt_1793961597451",
        "name": "Seguimiento Ed",
        "scope": "Riba-roja"
      }
    ],
    "longTermState": {
      "lt_1790927405339_m_1eso_a": true,
      "lt_1790927405339_m_1eso_b": true,
      "lt_1790927405339_m_2eso_a": true,
      "lt_1790927405339_m_2eso_b": true,
      "lt_1790927405339_m_3eso_a": true,
      "lt_1790927405339_m_3eso_b": true,
      "lt_1790927405339_m_4eso_a": true,
      "lt_1790927405339_m_4eso_b": true,
      "lt_1790927405339_r_1bac": true,
      "lt_1790927405339_r_1eso_a": true,
      "lt_1790927405339_r_1eso_b": true,
      "lt_1790927405339_r_2eso_a": true,
      "lt_1790927405339_r_2eso_b": true,
      "lt_1790927405339_r_3eso_a": true,
      "lt_1790927405339_r_3eso_b": true,
      "lt_1790927405339_r_4eso_a": true,
      "lt_1790927405339_r_4eso_b": true,
      "lt_1792317261306_m_1eso_a": true,
      "lt_1792317261306_m_1eso_b": true,
      "lt_1792317261306_m_3eso_a": true,
      "lt_1792317261306_m_3eso_b": true,
      "lt_1792317261306_m_4eso_a": true,
      "lt_1792317261306_m_4eso_b": true,
      "lt_1792317261306_r_1bac": true,
      "lt_1792317261306_r_1eso_a": true,
      "lt_1792317261306_r_1eso_b": true,
      "lt_1792317261306_r_3eso_a": true,
      "lt_1792317261306_r_3eso_b": true,
      "lt_1792317261306_r_4eso_a": true,
      "lt_1792317261306_r_4eso_b": true
    }
  }
};
