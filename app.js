// ============================================================================
// PROGRAMACIÓN DOCENTE UNIFICADA 26·27 — LÓGICA PRINCIPAL (PLANNER + TAREAS)
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY_UNIFIED = "programacion_unificada_v1";
  const STORAGE_KEY_PLANNER = "idoceo_planner_state_v3";
  const STORAGE_KEY_TAREAS_WEEKS = "docente_weeks_data_v7";
  const STORAGE_KEY_TAREAS_NEAE = "docente_neae_profiles_v6";
  const STORAGE_KEY_TAREAS_LT_TASKS = "docente_lt_tasks_v1";
  const STORAGE_KEY_TAREAS_LT_STATE = "docente_lt_state_v1";

  const ALL_GROUPS = [
    { id: "r_1eso_a", school: "ribarroja", center: "Riba-roja", course: "1º ESO - A", shortName: "1º ESO A", level: "1º ESO" },
    { id: "r_1eso_b", school: "ribarroja", center: "Riba-roja", course: "1º ESO - B", shortName: "1º ESO B", level: "1º ESO" },
    { id: "r_2eso_a", school: "ribarroja", center: "Riba-roja", course: "2º ESO - A", shortName: "2º ESO A", level: "2º ESO" },
    { id: "r_2eso_b", school: "ribarroja", center: "Riba-roja", course: "2º ESO - B", shortName: "2º ESO B", level: "2º ESO" },
    { id: "r_3eso_a", school: "ribarroja", center: "Riba-roja", course: "3º ESO - A", shortName: "3º ESO A", level: "3º ESO" },
    { id: "r_3eso_b", school: "ribarroja", center: "Riba-roja", course: "3º ESO - B", shortName: "3º ESO B", level: "3º ESO" },
    { id: "r_4eso_a", school: "ribarroja", center: "Riba-roja", course: "4º ESO - A", shortName: "4º ESO A", level: "4º ESO" },
    { id: "r_4eso_b", school: "ribarroja", center: "Riba-roja", course: "4º ESO - B", shortName: "4º ESO B", level: "4º ESO" },
    { id: "r_1bac",   school: "ribarroja", center: "Riba-roja", course: "1º BACHILLERATO", shortName: "1º BAC", level: "1º BACHILLERATO" },

    { id: "m_1eso_a", school: "manises",   center: "Manises",   course: "1º ESO - A", shortName: "1º ESO A", level: "1º ESO" },
    { id: "m_1eso_b", school: "manises",   center: "Manises",   course: "1º ESO - B", shortName: "1º ESO B", level: "1º ESO" },
    { id: "m_2eso_a", school: "manises",   center: "Manises",   course: "2º ESO - A", shortName: "2º ESO A", level: "2º ESO" },
    { id: "m_2eso_b", school: "manises",   center: "Manises",   course: "2º ESO - B", shortName: "2º ESO B", level: "2º ESO" },
    { id: "m_3eso_a", school: "manises",   center: "Manises",   course: "3º ESO - A", shortName: "3º ESO A", level: "3º ESO" },
    { id: "m_3eso_b", school: "manises",   center: "Manises",   course: "3º ESO - B", shortName: "3º ESO B", level: "3º ESO" },
    { id: "m_4eso_a", school: "manises",   center: "Manises",   course: "4º ESO - A", shortName: "4º ESO A", level: "4º ESO" },
    { id: "m_4eso_b", school: "manises",   center: "Manises",   course: "4º ESO - B", shortName: "4º ESO B", level: "4º ESO" }
  ];

  const COURSE_LEVELS = ["1º ESO", "2º ESO", "3º ESO", "4º ESO", "1º BACHILLERATO"];

  const SCHOOL_MONTHS = [
    { key: "2026-09", year: 2026, month: 9,  name: "Septiembre 2026", mesUpper: "SEPTIEMBRE" },
    { key: "2026-10", year: 2026, month: 10, name: "Octubre 2026",    mesUpper: "OCTUBRE" },
    { key: "2026-11", year: 2026, month: 11, name: "Noviembre 2026",  mesUpper: "NOVIEMBRE" },
    { key: "2026-12", year: 2026, month: 12, name: "Diciembre 2026",  mesUpper: "DICIEMBRE" },
    { key: "2027-01", year: 2027, month: 1,  name: "Enero 2027",      mesUpper: "ENERO" },
    { key: "2027-02", year: 2027, month: 2,  name: "Febrero 2027",    mesUpper: "FEBRERO" },
    { key: "2027-03", year: 2027, month: 3,  name: "Marzo 2027",      mesUpper: "MARZO" },
    { key: "2027-04", year: 2027, month: 4,  name: "Abril 2027",      mesUpper: "ABRIL" },
    { key: "2027-05", year: 2027, month: 5,  name: "Mayo 2027",       mesUpper: "MAYO" },
    { key: "2027-06", year: 2027, month: 6,  name: "Junio 2027",      mesUpper: "JUNIO" }
  ];

  const DAY_NAMES_SHORT = ["LUN", "MAR", "MIÉ", "JUE", "VIE"];
  const MONTH_NAMES_SHORT = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

  const DAY_MARK_CATEGORIES = {
    examenes:       { id: "examenes",       icon: "📝", label: "Exámenes",       defaultTitle: "Semana de Exámenes",    short: "Exámenes" },
    evaluacion:     { id: "evaluacion",     icon: "📊", label: "Evaluación",     defaultTitle: "Evaluación",            short: "Evaluación" },
    recuperaciones: { id: "recuperaciones", icon: "🔁", label: "Recuperaciones", defaultTitle: "Semana Recuperaciones", short: "Recup." },
    claustro:       { id: "claustro",       icon: "🏛️", label: "Claustro",       defaultTitle: "Claustro / Reunión",    short: "Claustro" },
    otro:           { id: "otro",           icon: "📌", label: "Otro aviso",     defaultTitle: "Aviso importante",      short: "Aviso" }
  };

  // Estado Global Reactivo
  const state = {
    activeModule: "planner",          // 'planner' | 'tareas'
    plannerView: "semanal",           // 'semanal' | 'replicar' | 'banco' | 'calendario'
    tareasView: "semanal",            // 'semanal' | 'largo'
    currentWeekIndex: 9,              // 0..43 (Semana 10 por defecto o semana actual)
    searchQuery: "",

    // Filtros vista Replicar Clases (Matriz)
    matrixScope: "month",             // 'month' | 'trim1' | 'trim2' | 'trim3' | 'all'
    matrixMonthKey: "2026-11",
    matrixLevelFilter: "all",
    matrixSchoolFilter: "ambos",

    // Filtros vista Banco de Sesiones
    bankSelectedLevel: "1º ESO",

    // Filtros vista Calendario Escolar
    calendarMonthKey: "2026-11",

    // Filtros vista Tareas
    tareasFilter: "all",              // 'all' | 'Riba-roja' | 'Manises' | 'neae' | 'pending'
    tareasHideDone: false,

    // Portapapeles de Replicación
    clipboard: null,                  // { tema, actividades, avisos, educamos, imprimir, sesion, sourceLabel, sourceLevel, sourceSchool, sourceCourse, sourceWeekIdx }
    clipboardPasteMode: "ask",        // 'ask' | 'cascade_forward' | 'overwrite'

    // Datos Persistentes Sincronizados
    weeks: [],
    holidays: {},
    calendarEvents: {},
    dayMarks: {},
    sessionBank: {},
    reserveSessions: [],
    tareas: {
      weeksData: {},
      neaeProfiles: {},
      longTermTasks: [],
      longTermState: {}
    },
    lastUpdated: 0
  };

  const undoStack = [];
  const redoStack = [];
  const MAX_HISTORY = 35;

  let activeEditTarget = null;        // { weekIdx, school, course, prepared }
  let activeConflictContext = null;
  let activeCalendarModalDate = null;
  let activeCalMarkCategory = "";
  let activeCalMarkCreatorArmed = false;
  let activeBankDeployContext = null;
  let activeBankEditContext = null;
  let activePostponeContext = null;
  let pendingDeleteMatrixSession = null; // { school, course, weekIdx }

  // ==========================================================================
  // UTILIDADES GENERALES Y FECHAS
  // ==========================================================================

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function escapeHTML(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function showToast(msg) {
    const el = document.getElementById("app-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("visible");
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove("visible"), 2600);
  }

  function formatCourseShort(course) {
    if (!course) return "";
    return course.replace(" - ", " ").replace("BACHILLERATO", "BAC");
  }

  function getCourseLevel(course) {
    if (!course) return "";
    if (course.includes("BACH")) return "1º BACHILLERATO";
    const m = course.match(/^(\dº\s*ESO)/i);
    return m ? m[1].toUpperCase() : course;
  }

  function getGroupBySchoolCourse(school, course) {
    return ALL_GROUPS.find(g => g.school === school && g.course === course) || null;
  }

  function getGroupById(groupId) {
    return ALL_GROUPS.find(g => g.id === groupId) || null;
  }

  function getNowCalendarInfo() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const todayStr = `${y}-${m}-${d}`;
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let currentIdx = 9;
    for (let i = 0; i < state.weeks.length; i++) {
      const startStr = state.weeks[i].date_start;
      const nextStartStr = (i < state.weeks.length - 1) ? state.weeks[i + 1].date_start : "2099-12-31";
      if (todayStr >= startStr && todayStr < nextStartStr) {
        currentIdx = i;
        break;
      }
    }
    const nextIdx = Math.min(currentIdx + 1, state.weeks.length - 1);
    return { todayStr, currentMinutes, currentIdx, nextIdx };
  }

  function ensureSessionObject(weekIdx, school, course) {
    if (!state.weeks[weekIdx]) return null;
    if (!state.weeks[weekIdx][school]) state.weeks[weekIdx][school] = {};
    if (!state.weeks[weekIdx][school][course]) {
      state.weeks[weekIdx][school][course] = {
        tema: "",
        actividades: "",
        avisos: "",
        avisoDado: false,
        educamos: "",
        educamosDado: false,
        imprimir: "",
        imprimirDado: false,
        sesion: "",
        preparada: false
      };
    }
    const s = state.weeks[weekIdx][school][course];
    if (s.imprimir === undefined) s.imprimir = "";
    if (s.imprimirDado === undefined) s.imprimirDado = false;
    if (s.educamos === undefined) s.educamos = "";
    if (s.educamosDado === undefined) s.educamosDado = false;
    if (s.avisos === undefined) s.avisos = "";
    if (s.avisoDado === undefined) s.avisoDado = false;
    return s;
  }

  function hasSessionContent(s) {
    if (!s) return false;
    const t = (s.tema || "").trim();
    const a = (s.actividades || "").trim();
    const av = (s.avisos || "").trim();
    const ed = (s.educamos || "").trim();
    const imp = (s.imprimir || "").trim();
    const ses = (s.sesion || "").trim();
    if (ses === "No Clase" || ses === "Festivo") {
      return !!(t || a || av || ed || imp);
    }
    return !!(t || a || av || ed || imp || ses);
  }

  function ensureTareasWeekData(weekIdx) {
    const key = String(weekIdx);
    if (!state.tareas.weeksData[key]) {
      state.tareas.weeksData[key] = { state: {}, overdue: {}, notes: {}, taskTexts: {} };
    }
    const w = state.tareas.weeksData[key];
    if (!w.state) w.state = {};
    if (!w.overdue) w.overdue = {};
    if (!w.notes) w.notes = {};
    if (!w.taskTexts) w.taskTexts = {};
    return w;
  }

  // Calcula los 5 días (Lunes..Viernes) de una semana escolar
  function getDatesForWeek(weekIdx) {
    const week = state.weeks[weekIdx];
    if (!week || !week.date_start) return [];
    const [sy, sm, sd] = week.date_start.split("-").map(Number);
    const startObj = new Date(sy, sm - 1, sd);
    const dow = startObj.getDay(); // 1=Lun, 2=Mar...
    const mondayOffset = (dow === 0) ? -6 : (1 - dow);
    const monday = new Date(sy, sm - 1, sd + mondayOffset);

    const days = [];
    for (let i = 0; i < 5; i++) {
      const d = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
      const y = d.getFullYear();
      const m = d.getMonth() + 1;
      const dayNum = d.getDate();
      const dateStr = `${y}-${String(m).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
      const isIntensiva = (m === 9 || m === 6);
      days.push({
        dayIndex: i, // 0=Lun, 1=Mar, 2=Mié, 3=Jue, 4=Vie
        dayName: DAY_NAMES_SHORT[i],
        dateNum: dayNum,
        monthNum: m,
        monthName: MONTH_NAMES_SHORT[m - 1],
        dateStr,
        isIntensiva,
        school: (i === 0 || i === 2) ? "ribarroja" : ((i === 1 || i === 3) ? "manises" : "libre")
      });
    }
    return days;
  }

  // Devuelve el día (0..3) y fecha exacta en que un grupo concreto tiene clase en la semana weekIdx
  function getGroupScheduleInWeek(school, course, weekIdx) {
    const days = getDatesForWeek(weekIdx);
    for (const day of days) {
      if (day.school !== school) continue;
      const mode = day.isIntensiva ? "intensiva" : "ordinaria";
      const slots = (window.SCHEDULE_TEMPLATES[school] &&
                     window.SCHEDULE_TEMPLATES[school][mode] &&
                     window.SCHEDULE_TEMPLATES[school][mode][day.dayIndex]) || [];
      const found = slots.find(s => s.type === "class" && s.course === course);
      if (found) {
        return {
          dayIndex: day.dayIndex,
          dayName: day.dayName,
          dateNum: day.dateNum,
          monthName: day.monthName,
          dateStr: day.dateStr,
          time: found.time,
          isIntensiva: day.isIntensiva
        };
      }
    }
    return null;
  }

  // Determina si un grupo concreto NO tiene clase un día/semana por No Lectivo o Evento Especial
  function getGroupTeachingStatus(school, course, weekIdx) {
    const sched = getGroupScheduleInWeek(school, course, weekIdx);
    const week = state.weeks[weekIdx];
    const session = (week && week[school] && week[school][course]) || {};

    if (!sched) {
      return { isLectivo: true, reason: "", dateStr: "", sched: null };
    }

    const dateStr = sched.dateStr;
    const isHoliday = !!(state.holidays && state.holidays[dateStr]);
    const calEv = state.calendarEvents && state.calendarEvents[dateStr];

    if (isHoliday) {
      const title = (calEv && calEv.title) ? calEv.title : "Día No Lectivo";
      return { isLectivo: false, type: "no_lectivo", reason: title, dateStr, sched };
    }

    if (calEv) {
      if (calEv.type === "no_lectivo" || calEv.type === "festivo" || calEv.type === "vacaciones" || calEv.classesHeld === false) {
        return { isLectivo: false, type: "no_lectivo", reason: calEv.title || "Día No Lectivo", dateStr, sched };
      }
      if (calEv.type === "evento" || calEv.type === "extraescolar" || calEv.type === "inusual" || calEv.classesHeld === "partial") {
        const susp = Array.isArray(calEv.suspendedGroups) ? calEv.suspendedGroups : [];
        if (susp.includes(course) || susp.includes(`${school}|${course}`)) {
          return { isLectivo: false, type: "evento", reason: calEv.title || "Evento especial", dateStr, sched };
        }
      }
    }

    if (week && week.tipo_sem === "Vacaciones") {
      return { isLectivo: false, type: "no_lectivo", reason: "Vacaciones escolares", dateStr, sched };
    }

    if (session.sesion === "Festivo" || session.sesion === "No Clase" || session.sesion === "Salida / Convivencia") {
      return { isLectivo: false, type: "evento", reason: session.tema || session.sesion, dateStr, sched };
    }

    return { isLectivo: true, type: "lectivo", reason: "", dateStr, sched };
  }

  // ==========================================================================
  // HITOS DE PROGRAMACIÓN DEL DÍA (EXÁMENES, EVALUACIÓN, RECUP., CLAUSTRO)
  // ==========================================================================

  function normalizeDayMarksList(raw) {
    if (!raw) return [];
    const list = Array.isArray(raw) ? raw : (typeof raw === "object" ? Object.values(raw) : []);
    return list.filter(m => m && (m.title || m.category)).map(m => ({
      id: m.id || ("dm_" + Math.random().toString(36).slice(2, 8)),
      category: DAY_MARK_CATEGORIES[m.category] ? m.category : "otro",
      title: String(m.title || DAY_MARK_CATEGORIES[m.category]?.defaultTitle || "Aviso").trim()
    }));
  }

  function getDayMarks(dateStr) {
    if (!dateStr || !state.dayMarks) return [];
    return normalizeDayMarksList(state.dayMarks[dateStr]);
  }

  function getWeekDatesFromDateStr(dateStr) {
    if (!dateStr || !dateStr.includes("-")) return [];
    const [y, m, d] = dateStr.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    const dow = dt.getDay();
    if (dow === 0 || dow === 6) return [{ dateStr, dayIndex: -1, dayName: "", dateNum: d }];
    const monOffset = 1 - dow;
    const out = [];
    for (let i = 0; i < 5; i++) {
      const cur = new Date(y, m - 1, d + monOffset + i);
      const cy = cur.getFullYear();
      const cm = cur.getMonth() + 1;
      const cd = cur.getDate();
      out.push({
        dayIndex: i,
        dayName: DAY_NAMES_SHORT[i],
        dateNum: cd,
        dateStr: `${cy}-${String(cm).padStart(2, "0")}-${String(cd).padStart(2, "0")}`
      });
    }
    return out;
  }

  function getTargetDatesForMarkScope(baseDateStr, scope) {
    if (scope === "day") return [baseDateStr];
    const weekDays = getWeekDatesFromDateStr(baseDateStr);
    if (weekDays.length <= 1) return [baseDateStr];
    if (scope === "ribarroja_week") {
      return weekDays.filter(d => d.dayIndex === 0 || d.dayIndex === 2).map(d => d.dateStr);
    }
    if (scope === "manises_week") {
      return weekDays.filter(d => d.dayIndex === 1 || d.dayIndex === 3).map(d => d.dateStr);
    }
    return weekDays.map(d => d.dateStr); // "week" (Lun-Vie)
  }

  function getWeekMarksSummary(weekIdx) {
    const days = getDatesForWeek(weekIdx);
    const grouped = new Map();
    days.forEach(day => {
      const marks = getDayMarks(day.dateStr);
      marks.forEach(m => {
        const key = `${m.category}::${m.title.toLowerCase()}`;
        if (!grouped.has(key)) {
          grouped.set(key, {
            category: m.category,
            title: m.title,
            firstDateStr: day.dateStr,
            days: []
          });
        }
        grouped.get(key).days.push({
          dayIndex: day.dayIndex,
          dayName: day.dayName,
          dateNum: day.dateNum,
          dateStr: day.dateStr
        });
      });
    });

    const dayLetters = ["L", "M", "X", "J", "V"];
    return Array.from(grouped.values()).map(item => {
      const idxList = item.days.map(d => d.dayIndex);
      let rangeTag = "";
      if (idxList.length === 5) {
        rangeTag = "L-V";
      } else if (idxList.length === 1) {
        const d0 = item.days[0];
        rangeTag = `${d0.dayName} ${d0.dateNum}`;
      } else {
        rangeTag = idxList.map(i => dayLetters[i] || "").join(",");
      }
      return { ...item, rangeTag };
    });
  }

  function addDayMarkWithScope(baseDateStr, category, title, scope) {
    const cat = DAY_MARK_CATEGORIES[category] ? category : "otro";
    const cleanTitle = (title || "").trim() || DAY_MARK_CATEGORIES[cat].defaultTitle;
    const dates = getTargetDatesForMarkScope(baseDateStr, scope || "day");

    pushUndoSnapshot();
    if (!state.dayMarks) state.dayMarks = {};
    let addedCount = 0;

    dates.forEach((ds, idx) => {
      const curList = getDayMarks(ds);
      const dup = curList.some(m => m.category === cat && m.title.toLowerCase() === cleanTitle.toLowerCase());
      if (!dup) {
        curList.push({
          id: `dm_${Date.now()}_${idx}_${Math.random().toString(36).slice(2, 6)}`,
          category: cat,
          title: cleanTitle
        });
        state.dayMarks[ds] = curList;
        addedCount++;
      }
    });

    persistAll(false);
    renderWorkspace();
    return addedCount;
  }

  function removeDayMarkFromDay(dateStr, markId) {
    if (!state.dayMarks || !state.dayMarks[dateStr]) return;
    pushUndoSnapshot();
    const filtered = getDayMarks(dateStr).filter(m => m.id !== markId);
    if (filtered.length === 0) {
      delete state.dayMarks[dateStr];
    } else {
      state.dayMarks[dateStr] = filtered;
    }
    persistAll(false);
    renderWorkspace();
  }

  function removeDayMarkAcrossWeek(dateStr, category, title) {
    const weekDays = getWeekDatesFromDateStr(dateStr);
    pushUndoSnapshot();
    let removed = 0;
    weekDays.forEach(d => {
      const list = getDayMarks(d.dateStr);
      const next = list.filter(m => !(m.category === category && m.title.toLowerCase() === (title || "").toLowerCase()));
      if (next.length !== list.length) {
        removed += (list.length - next.length);
        if (next.length === 0) delete state.dayMarks[d.dateStr];
        else state.dayMarks[d.dateStr] = next;
      }
    });
    persistAll(false);
    renderWorkspace();
    return removed;
  }

  // ==========================================================================
  // HISTORIAL UNDO / REDO Y CAJÓN DE RESERVA (CERO PÉRDIDA DE INFORMACIÓN)
  // ==========================================================================

  function createSnapshot() {
    return JSON.stringify({
      weeks: state.weeks,
      holidays: state.holidays,
      calendarEvents: state.calendarEvents,
      dayMarks: state.dayMarks,
      sessionBank: state.sessionBank,
      reserveSessions: state.reserveSessions,
      tareas: state.tareas
    });
  }

  function pushUndoSnapshot() {
    const snap = createSnapshot();
    if (undoStack.length > 0 && undoStack[undoStack.length - 1] === snap) return;
    undoStack.push(snap);
    if (undoStack.length > MAX_HISTORY) undoStack.shift();
    redoStack.length = 0;
    updateTopbarBadges();
  }

  function restoreSnapshot(snapStr) {
    try {
      const parsed = JSON.parse(snapStr);
      state.weeks = parsed.weeks || state.weeks;
      state.holidays = parsed.holidays || {};
      state.calendarEvents = parsed.calendarEvents || {};
      state.dayMarks = parsed.dayMarks || {};
      state.sessionBank = parsed.sessionBank || state.sessionBank;
      state.reserveSessions = parsed.reserveSessions || [];
      state.tareas = parsed.tareas || state.tareas;
      persistAll(false);
      renderWorkspace();
      updateTopbarBadges();
    } catch (e) {
      console.error("Error restaurando snapshot:", e);
    }
  }

  function undo() {
    if (undoStack.length === 0) return;
    redoStack.push(createSnapshot());
    const prev = undoStack.pop();
    restoreSnapshot(prev);
    showToast("↩️ Cambio deshecho");
  }

  function redo() {
    if (redoStack.length === 0) return;
    undoStack.push(createSnapshot());
    const next = redoStack.pop();
    restoreSnapshot(next);
    showToast("↪️ Cambio rehecho");
  }

  function addSessionToReserve(school, course, weekIdx, sessionObj, reason) {
    if (!hasSessionContent(sessionObj)) return;
    state.reserveSessions.unshift({
      id: "res_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
      savedAt: new Date().toLocaleString("es-ES"),
      school,
      course,
      weekIdx,
      weekLabel: (state.weeks[weekIdx] && state.weeks[weekIdx].num_sem) || `Semana ${weekIdx + 1}`,
      reason: reason || "Resguardada automáticamente",
      session: deepClone(sessionObj)
    });
    updateTopbarBadges();
  }

  // ==========================================================================
  // PERSISTENCIA LOCAL + SINCRONIZACIÓN FIREBASE EN TIEMPO REAL
  // ==========================================================================

  function loadInitialState() {
    const base = deepClone(window.INITIAL_APP_DATA);
    state.weeks = base.weeks;
    state.holidays = base.holidays || {};
    state.calendarEvents = base.calendarEvents || {};
    state.dayMarks = base.dayMarks || {};
    state.sessionBank = base.sessionBank || {};
    state.tareas = base.tareas || { weeksData: {}, neaeProfiles: {}, longTermTasks: [], longTermState: {} };

    // 1. Intentar cargar estado unificado local si es más reciente
    try {
      const rawUni = localStorage.getItem(STORAGE_KEY_UNIFIED);
      if (rawUni) {
        const parsed = JSON.parse(rawUni);
        if (Array.isArray(parsed.weeks) && parsed.weeks.length === 44) state.weeks = parsed.weeks;
        if (parsed.holidays) state.holidays = parsed.holidays;
        if (parsed.calendarEvents) state.calendarEvents = parsed.calendarEvents;
        if (parsed.dayMarks) state.dayMarks = parsed.dayMarks;
        if (parsed.sessionBank) state.sessionBank = parsed.sessionBank;
        if (Array.isArray(parsed.reserveSessions)) state.reserveSessions = parsed.reserveSessions;
        if (parsed.tareas) state.tareas = parsed.tareas;
        if (typeof parsed.currentWeekIndex === "number") state.currentWeekIndex = parsed.currentWeekIndex;
        state.lastUpdated = parsed.lastUpdated || 0;
      }
    } catch (e) {
      console.warn("Error leyendo almacenamiento unificado:", e);
    }

    // Normalizar todas las sesiones de las 44 semanas
    for (let w = 0; w < state.weeks.length; w++) {
      for (const g of ALL_GROUPS) {
        ensureSessionObject(w, g.school, g.course);
      }
    }

    // Seleccionar la semana actual del calendario real al iniciar
    const { currentIdx } = getNowCalendarInfo();
    state.currentWeekIndex = currentIdx;
    const curWeek = state.weeks[currentIdx];
    if (curWeek && curWeek.date_start) {
      const mKey = curWeek.date_start.slice(0, 7);
      if (SCHOOL_MONTHS.some(m => m.key === mKey)) {
        state.matrixMonthKey = mKey;
        state.calendarMonthKey = mKey;
      }
    }
  }

  let saveTimer = null;
  function persistAll(recordUndo = false) {
    if (recordUndo) {
      // Snapshot se guarda antes de mutar cuando se usa pushUndoSnapshot()
    }
    state.lastUpdated = Date.now();

    try {
      // 1. Guardar estado unificado
      localStorage.setItem(STORAGE_KEY_UNIFIED, JSON.stringify({
        weeks: state.weeks,
        holidays: state.holidays,
        calendarEvents: state.calendarEvents,
        dayMarks: state.dayMarks,
        sessionBank: state.sessionBank,
        reserveSessions: state.reserveSessions,
        tareas: state.tareas,
        currentWeekIndex: state.currentWeekIndex,
        lastUpdated: state.lastUpdated
      }));

      // 2. Mantener compatibilidad directa con claves de Planner y Control de Clases
      localStorage.setItem(STORAGE_KEY_PLANNER, JSON.stringify({
        weeks: state.weeks,
        holidays: state.holidays,
        calendarEvents: state.calendarEvents,
        dayMarks: state.dayMarks,
        reserveSessions: state.reserveSessions,
        lastUpdated: state.lastUpdated
      }));
      localStorage.setItem(STORAGE_KEY_TAREAS_WEEKS, JSON.stringify(state.tareas.weeksData));
      localStorage.setItem(STORAGE_KEY_TAREAS_NEAE, JSON.stringify(state.tareas.neaeProfiles));
      localStorage.setItem(STORAGE_KEY_TAREAS_LT_TASKS, JSON.stringify(state.tareas.longTermTasks));
      localStorage.setItem(STORAGE_KEY_TAREAS_LT_STATE, JSON.stringify(state.tareas.longTermState));
    } catch (e) {
      console.warn("Error guardando en localStorage:", e);
    }

    updateTopbarBadges();

    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      CloudSync.pushAll();
    }, 450);
  }

  // ==========================================================================
  // CABECERA Y NAVEGACIÓN GLOBAL
  // ==========================================================================

  function updateTopbarBadges() {
    // 1. Título y rango de semana actual
    const w = state.weeks[state.currentWeekIndex] || state.weeks[0];
    const titleEl = document.getElementById("top-week-title");
    const rangeEl = document.getElementById("top-week-range");
    const { currentIdx, nextIdx } = getNowCalendarInfo();

    if (titleEl && w) titleEl.textContent = w.num_sem;
    if (rangeEl && w) {
      let suffix = "";
      if (state.currentWeekIndex === currentIdx) suffix = " · Hoy";
      else if (state.currentWeekIndex === nextIdx) suffix = " · Próx";
      rangeEl.textContent = `${w.rango}${suffix}`;
    }

    const btnCur = document.getElementById("btn-go-current-week");
    const btnNext = document.getElementById("btn-go-next-week");
    if (btnCur) btnCur.classList.toggle("is-active-shortcut", state.currentWeekIndex === currentIdx);
    if (btnNext) btnNext.classList.toggle("is-active-shortcut", state.currentWeekIndex === nextIdx);

    // Mostrar u ocultar navegador de semana según la vista
    const weekNav = document.getElementById("shared-week-nav");
    if (weekNav) {
      const showWeekNav = (state.activeModule === "planner" && (state.plannerView === "semanal" || state.plannerView === "replicar")) ||
                          (state.activeModule === "tareas" && state.tareasView === "semanal");
      weekNav.style.display = showWeekNav ? "" : "none";
    }

    // 2. Botones Undo / Redo y Cajón de Reserva
    const btnUndo = document.getElementById("btn-undo");
    const btnRedo = document.getElementById("btn-redo");
    if (btnUndo) btnUndo.disabled = (undoStack.length === 0);
    if (btnRedo) btnRedo.disabled = (redoStack.length === 0);

    const resBadge = document.getElementById("reserve-count-badge");
    if (resBadge) resBadge.textContent = String(state.reserveSessions.length);

    // 3. Barra de portapapeles de replicación
    const clipBar = document.getElementById("replication-clipboard-bar");
    const clipDesc = document.getElementById("clip-source-desc");
    if (clipBar && clipDesc) {
      if (state.clipboard) {
        clipBar.classList.add("active");
        clipDesc.textContent = `${state.clipboard.tema || "(Sin título)"} — [${state.clipboard.sourceLabel}]`;
      } else {
        clipBar.classList.remove("active");
      }
    }

    // 4. Indicador de tareas / impresiones pendientes
    const dotTareas = document.getElementById("badge-tareas-pending");
    if (dotTareas) {
      const anyPending = ALL_GROUPS.some(g => isGroupPendingInTareas(g.id, state.currentWeekIndex));
      dotTareas.classList.toggle("visible", anyPending);
    }
  }

  // ==========================================================================
  // GESTOR DE PERSISTENCIA Y ESTABILIDAD DE SCROLL (CERO SALTOS DE PANTALLA)
  // ==========================================================================

  const ViewScrollMemory = {
    positions: {},

    getViewKey() {
      if (state.activeModule === "planner") {
        return `planner_${state.plannerView}`;
      }
      return `tareas_${state.tareasView}`;
    },

    captureFromElement(targetEl) {
      if (!targetEl) return;
      const key = this.getViewKey();
      if (!this.positions[key]) this.positions[key] = {};
      this.positions[key].top = targetEl.scrollTop;
      this.positions[key].left = targetEl.scrollLeft;
    },

    capture(customKey) {
      const key = customKey || this.getViewKey();
      const ws = document.getElementById("main-workspace");
      if (!ws) return;
      const scrollEl = ws.querySelector(".week-view-wrapper, .matrix-table-scroll, .bank-content-scroll, .cal-grid-scroll, .bank-view-container, .calendar-view-container, .tareas-table-scroll") || ws;

      this.positions[key] = {
        top: scrollEl ? scrollEl.scrollTop : 0,
        left: scrollEl ? scrollEl.scrollLeft : 0,
        wsTop: ws.scrollTop,
        wsLeft: ws.scrollLeft,
        winX: window.scrollX || 0,
        winY: window.scrollY || 0
      };
    },

    restore(customKey) {
      const key = customKey || this.getViewKey();
      const saved = this.positions[key];
      if (!saved) return;

      const apply = () => {
        const ws = document.getElementById("main-workspace");
        if (!ws) return;
        const scrollEl = ws.querySelector(".week-view-wrapper, .matrix-table-scroll, .bank-content-scroll, .cal-grid-scroll, .bank-view-container, .calendar-view-container, .tareas-table-scroll") || ws;
        if (scrollEl) {
          scrollEl.scrollTop = saved.top;
          scrollEl.scrollLeft = saved.left;
        }
        if (ws) {
          ws.scrollTop = saved.wsTop;
          ws.scrollLeft = saved.wsLeft;
        }
        if (saved.winX || saved.winY) {
          window.scrollTo(saved.winX, saved.winY);
        }
      };

      apply();
      requestAnimationFrame(() => {
        apply();
        setTimeout(apply, 30);
        setTimeout(apply, 90);
      });
    }
  };

  // Escuchar cualquier evento de scroll en toda la web para registrar en vivo la posición exacta
  window.addEventListener("scroll", (e) => {
    if (e.target && e.target.classList && (
      e.target.classList.contains("week-view-wrapper") ||
      e.target.classList.contains("matrix-table-scroll") ||
      e.target.classList.contains("bank-content-scroll") ||
      e.target.classList.contains("cal-grid-scroll") ||
      e.target.classList.contains("bank-view-container") ||
      e.target.classList.contains("calendar-view-container") ||
      e.target.classList.contains("tareas-table-scroll")
    )) {
      ViewScrollMemory.captureFromElement(e.target);
    }
  }, true);

  function switchModule(mod) {
    if (state.activeModule === mod) return;
    ViewScrollMemory.capture();
    state.activeModule = mod;
    document.getElementById("btn-mod-planner").classList.toggle("active", mod === "planner");
    document.getElementById("btn-mod-tareas").classList.toggle("active", mod === "tareas");
    document.getElementById("tabs-planner").style.display = (mod === "planner") ? "" : "none";
    document.getElementById("tabs-tareas").style.display = (mod === "tareas") ? "" : "none";
    updateTopbarBadges();
    renderWorkspace({ skipCapture: true });
  }

  function switchPlannerView(view) {
    if (state.plannerView === view) return;
    ViewScrollMemory.capture();
    state.plannerView = view;
    ["semanal", "replicar", "banco", "calendario"].forEach(v => {
      const btn = document.getElementById(`tab-planner-${v}`);
      if (btn) btn.classList.toggle("active", v === view);
    });
    updateTopbarBadges();
    renderWorkspace({ skipCapture: true });
  }

  function switchTareasView(view) {
    if (state.tareasView === view) return;
    ViewScrollMemory.capture();
    state.tareasView = view;
    ["semanal", "largo"].forEach(v => {
      const btn = document.getElementById(`tab-tareas-${v}`);
      if (btn) btn.classList.toggle("active", v === view);
    });
    updateTopbarBadges();
    renderWorkspace({ skipCapture: true });
  }

  function selectWeek(idx) {
    if (idx < 0 || idx >= state.weeks.length) return;
    if (idx > state.currentWeekIndex) {
      for (let w = state.currentWeekIndex + 1; w <= idx; w++) {
        syncTareasOverdueForWeek(w);
      }
    }
    state.currentWeekIndex = idx;
    state.tareas.currentWeekIndex = idx;
    const wk = state.weeks[idx];
    if (wk && wk.date_start) {
      const mKey = wk.date_start.slice(0, 7);
      if (SCHOOL_MONTHS.some(m => m.key === mKey)) {
        state.matrixMonthKey = mKey;
      }
    }
    closeModal("modal-week-picker");
    persistAll(false);
    renderWorkspace();
  }

  function navigateWeek(delta) {
    const next = state.currentWeekIndex + delta;
    if (next >= 0 && next < state.weeks.length) {
      selectWeek(next);
    }
  }

  function goToCurrentCalendarWeek() {
    const { currentIdx } = getNowCalendarInfo();
    selectWeek(currentIdx);
  }

  function goToNextCalendarWeek() {
    const { nextIdx } = getNowCalendarInfo();
    selectWeek(nextIdx);
  }

  function onGlobalSearch(q) {
    state.searchQuery = (q || "").trim().toLowerCase();
    renderWorkspace();
  }

  // ==========================================================================
  // RENDERIZADO DE LA VISTA 1: PLANNER SEMANAL (FRANJAS ALINEADAS)
  // ==========================================================================

  function getFranjaDefinitions(isIntensiva) {
    if (isIntensiva) {
      return [
        { index: 0, label: "08:00", duration: 55 },
        { index: 1, label: "09:00", duration: 55 },
        { index: 2, label: "09:50", duration: 55 },
        { index: 3, label: "10:45", duration: 55 },
        { index: 4, label: "11:25", duration: 55 },
        { index: 5, label: "12:20", duration: 55 },
        { index: 6, label: "13:15", duration: 55 }
      ];
    }
    return [
      { index: 0, label: "08:00", duration: 55 },
      { index: 1, label: "09:00", duration: 55 },
      { index: 2, label: "09:50", duration: 55 },
      { index: 3, label: "10:45", duration: 55 },
      { index: 4, label: "11:25", duration: 55 },
      { index: 5, label: "12:20", duration: 55 },
      { index: 6, label: "13:15", duration: 95 },
      { index: 7, label: "15:00", duration: 55 },
      { index: 8, label: "15:55", duration: 55 }
    ];
  }

  function getFranjaForSlot(slotTime) {
    if (slotTime === "09:00 - 14:00") return { franja: 1, span: 5, isSpan: true, type: "viernes" };
    if (slotTime === "15:00 - 16:50") return { franja: 7, span: 2, isSpan: true, type: "mie_tarde" };
    if (slotTime === "10:45 - 11:00") return { franja: 3, sub: "lectura" };
    if (slotTime === "11:00 - 11:25") return { franja: 3, sub: "recreo" };

    const parts = slotTime.split(" - ");
    const [sh, sm] = parts[0].split(":").map(Number);
    const sMin = sh * 60 + sm;

    if (sMin < 515) return { franja: 0 };
    if (sMin < 575) return { franja: 1 };
    if (sMin < 620) return { franja: 2 };
    if (sMin < 680) return { franja: 3 };
    if (sMin < 730) return { franja: 4 };
    if (sMin < 785) return { franja: 5 };
    if (sMin < 880) return { franja: 6 };
    if (sMin < 940) return { franja: 7 };
    return { franja: 8 };
  }

  function getSlotIcon(label) {
    const l = (label || "").toUpperCase();
    if (l.includes("PATIO") || l.includes("RECREO")) return { icon: "🥪", cls: "patio" };
    if (l.includes("COMEDOR")) return { icon: "🍽️", cls: "comedor" };
    if (l.includes("GUÀRDIA") || l.includes("GUARDIA")) return { icon: "🛡️", cls: "guardia" };
    if (l.includes("LECTURA")) return { icon: "📖", cls: "lectura" };
    if (l.includes("REUNIÓN") || l.includes("REUNION")) return { icon: "👥", cls: "reunion" };
    if (l.includes("FORMATIVA")) return { icon: "💡", cls: "formativa" };
    return { icon: "☕", cls: "libre" };
  }

  function autoResizeTextarea(el, minH) {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.max(el.scrollHeight, minH) + "px";
  }

  function syncWeekFranjaHeights() {
    const wrap = document.querySelector(".week-view-wrapper");
    if (!wrap) return;
    const key = ViewScrollMemory.getViewKey();
    const saved = ViewScrollMemory.positions[key];
    const prevScrollY = (saved && saved.top !== undefined) ? saved.top : wrap.scrollTop;
    const prevScrollX = (saved && saved.left !== undefined) ? saved.left : wrap.scrollLeft;

    wrap.querySelectorAll(".inline-content").forEach(el => {
      const minH = el.classList.contains("static-slot-textarea") ? 26 : 68;
      autoResizeTextarea(el, minH);
    });
    wrap.querySelectorAll(".meta-textarea").forEach(el => autoResizeTextarea(el, 18));

    const days = getDatesForWeek(state.currentWeekIndex);
    const isIntensiva = !!(days[0] && days[0].isIntensiva);
    const franjaDefs = getFranjaDefinitions(isIntensiva);
    const numFranjas = franjaDefs.length;
    const scale = 4.2;

    const franjaHeights = franjaDefs.map(f => Math.max(Math.round(f.duration * scale), 42));
    const allSlots = Array.from(wrap.querySelectorAll(".session-card, .static-slot-block"));

    allSlots.forEach(el => {
      const fIdx = parseInt(el.dataset.franja, 10);
      if (isNaN(fIdx) || fIdx < 0 || fIdx >= numFranjas) return;
      if (el.classList.contains("session-card")) {
        const topBar = el.querySelector(".card-top-bar");
        const titleRow = el.querySelector(".card-title-row");
        const contentEl = el.querySelector(".inline-content");
        const metaRows = Array.from(el.querySelectorAll(".inline-meta-row"));
        const suspBanner = el.querySelector(".card-suspended-banner");
        const topH = topBar ? Math.max(26, topBar.offsetHeight) : 28;
        const titleH = titleRow ? Math.max(24, titleRow.offsetHeight) : 26;
        const cH = contentEl ? Math.max(68, contentEl.scrollHeight) : 68;
        const mH = metaRows.reduce((acc, r) => acc + Math.max(22, r.offsetHeight || 24) + 3, 0);
        const sH = suspBanner ? Math.max(24, suspBanner.offsetHeight) : 0;
        const needed = topH + titleH + sH + cH + mH + 18;
        if (needed > franjaHeights[fIdx]) franjaHeights[fIdx] = needed;
      } else if (el.classList.contains("static-slot-block")) {
        const contentEl = el.querySelector(".static-slot-textarea");
        if (contentEl) {
          const sH = Math.max(26, contentEl.scrollHeight);
          const needed = 20 + sH + 12;
          if (needed > franjaHeights[fIdx]) franjaHeights[fIdx] = needed;
        }
      }
    });

    const franjaTops = [0];
    for (let i = 0; i < numFranjas - 1; i++) {
      franjaTops.push(franjaTops[i] + franjaHeights[i]);
    }
    const totalGridHeight = franjaTops[numFranjas - 1] + franjaHeights[numFranjas - 1] + 16;

    wrap.querySelectorAll(".day-body-column").forEach(col => {
      col.style.height = totalGridHeight + "px";
    });
    const axisCol = wrap.querySelector(".time-axis-column");
    if (axisCol) axisCol.style.height = totalGridHeight + "px";

    allSlots.forEach(el => {
      const fIdx = parseInt(el.dataset.franja, 10);
      if (isNaN(fIdx) || fIdx < 0 || fIdx >= numFranjas) return;
      const fTop = franjaTops[fIdx];
      const fHeight = franjaHeights[fIdx];
      const sub = el.dataset.sub;

      if (!el.dataset.span) {
        if (sub === "lectura") {
          el.style.top = fTop + "px";
          el.style.height = "34px";
        } else if (sub === "recreo") {
          el.style.top = (fTop + 36) + "px";
          el.style.height = Math.max(fHeight - 40, 34) + "px";
        } else {
          el.style.top = fTop + "px";
          el.style.height = (fHeight - 4) + "px";
        }
      } else if (el.dataset.spanType === "mie_tarde") {
        el.style.top = fTop + "px";
        el.style.height = ((franjaHeights[7] || 0) + (franjaHeights[8] || 0) - 4) + "px";
      } else if (el.dataset.spanType === "viernes") {
        const top1 = franjaTops[1] || 0;
        const endF = Math.min(6, numFranjas - 1);
        const bottom = franjaTops[endF] + franjaHeights[endF];
        el.style.top = top1 + "px";
        el.style.height = Math.max(bottom - top1 - 4, 140) + "px";
      }
    });

    const hourLines = wrap.querySelectorAll(".grid-hour-line");
    franjaDefs.forEach((f, i) => {
      if (hourLines[i]) hourLines[i].style.top = franjaTops[i] + "px";
    });
    if (hourLines[numFranjas]) {
      hourLines[numFranjas].style.top = (franjaTops[numFranjas - 1] + franjaHeights[numFranjas - 1]) + "px";
    }

    const timeLabels = wrap.querySelectorAll(".time-axis-hour");
    franjaDefs.forEach((f, i) => {
      if (timeLabels[i]) {
        timeLabels[i].style.top = franjaTops[i] + "px";
        timeLabels[i].textContent = f.label;
      }
    });
    if (timeLabels[numFranjas]) {
      timeLabels[numFranjas].style.top = (franjaTops[numFranjas - 1] + franjaHeights[numFranjas - 1]) + "px";
      timeLabels[numFranjas].textContent = isIntensiva ? "14:20" : "16:50";
    }

    wrap.scrollTop = prevScrollY;
    wrap.scrollLeft = prevScrollX;
  }

  function renderPlannerWeeklyView(container) {
    const weekIdx = state.currentWeekIndex;
    const week = state.weeks[weekIdx];
    const days = getDatesForWeek(weekIdx);
    const isIntensiva = !!(days[0] && days[0].isIntensiva);
    const franjaDefs = getFranjaDefinitions(isIntensiva);
    const numFranjas = franjaDefs.length;
    const { todayStr } = getNowCalendarInfo();

    const wrap = document.createElement("div");
    wrap.className = "week-view-wrapper";

    // 1. Cabecera Sticky de los 5 días
    const headerRow = document.createElement("div");
    headerRow.className = "week-header-row";

    const corner = document.createElement("div");
    corner.className = "sticky-header-cell time-axis-corner";
    corner.innerHTML = `<span style="font-size:10px;font-weight:900;color:var(--primary);">S${weekIdx + 1}</span><span style="font-size:8.5px;font-weight:700;color:var(--text-muted);">HORA</span>`;
    headerRow.appendChild(corner);

    days.forEach(day => {
      const isToday = (day.dateStr === todayStr);
      const isNoLectivo = !!(state.holidays && state.holidays[day.dateStr]) ||
        (state.calendarEvents[day.dateStr] && (state.calendarEvents[day.dateStr].type === "no_lectivo" || state.calendarEvents[day.dateStr].type === "festivo" || state.calendarEvents[day.dateStr].classesHeld === false));
      const calEv = state.calendarEvents[day.dateStr];
      const hasSpecialEvent = !!(calEv && calEv.type === "evento");
      const dayMarks = getDayMarks(day.dateStr);

      const hCell = document.createElement("div");
      hCell.className = `sticky-header-cell ${day.school}` + (isNoLectivo ? " is-festivo" : "") + (isToday ? " is-today" : "");

      const schoolLabel = day.school === "ribarroja" ? "Riba-roja" : (day.school === "manises" ? "Manises" : "Planificación");

      hCell.innerHTML = `
        <div class="header-day-top">
          <span class="header-day-name">${day.dayName} ${day.dateNum} ${day.monthName}</span>
          <div class="header-day-controls">
            <span class="header-school-badge ${isNoLectivo ? 'festivo' : day.school}">${isNoLectivo ? 'No lectivo' : schoolLabel}</span>
            ${day.school !== "libre" ? `
              <button type="button" class="day-hdr-icon-btn ${isNoLectivo ? 'active-festivo' : ''}" onclick="App.toggleDayNoLectivo('${day.dateStr}')" title="${isNoLectivo ? 'Día No Lectivo (clic para marcar como Lectivo)' : 'Marcar día completo como No Lectivo'}">🏖️</button>
              <button type="button" class="day-hdr-icon-btn ${hasSpecialEvent ? 'active-evento' : ''}" onclick="App.openCalendarDayModal('${day.dateStr}')" title="Configurar Evento Especial (para uno, varios o todos los grupos del día)">🎪</button>
            ` : ""}
            <button type="button" class="day-hdr-icon-btn ${dayMarks.length > 0 ? 'active-marks' : ''}" onclick="App.openCalendarDayModal('${day.dateStr}')" title="Añadir o editar Hitos de Programación (Exámenes, Evaluación, Recup., Claustro)">📌</button>
          </div>
        </div>
        ${isNoLectivo ? `<div class="header-status-sub festivo">🏖️ ${escapeHTML((calEv && calEv.title) || 'Día No Lectivo')}</div>` : ""}
        ${!isNoLectivo && hasSpecialEvent ? `<div class="header-status-sub evento">🎪 ${escapeHTML(calEv.title || 'Evento especial')}</div>` : ""}
        ${dayMarks.length > 0 ? `
          <div class="week-hdr-marks">
            ${dayMarks.map(m => {
              const catMeta = DAY_MARK_CATEGORIES[m.category] || DAY_MARK_CATEGORIES.otro;
              return `<button type="button" class="day-mark-pill cat-${escapeHTML(m.category)}" onclick="App.openCalendarDayModal('${day.dateStr}')" title="${escapeHTML(catMeta.label)}: ${escapeHTML(m.title)}">${catMeta.icon} ${escapeHTML(m.title)}</button>`;
            }).join("")}
          </div>
        ` : ""}
      `;
      headerRow.appendChild(hCell);
    });
    wrap.appendChild(headerRow);

    // 2. Rejilla de cuerpo
    const bodyGrid = document.createElement("div");
    bodyGrid.className = "week-body-grid";

    const timeAxis = document.createElement("div");
    timeAxis.className = "time-axis-column";
    for (let i = 0; i <= numFranjas; i++) {
      const lbl = document.createElement("div");
      lbl.className = "time-axis-hour" + (i === 0 ? " hour-08" : "");
      timeAxis.appendChild(lbl);
    }
    bodyGrid.appendChild(timeAxis);

    for (let i = 0; i <= numFranjas; i++) {
      const line = document.createElement("div");
      line.className = "grid-hour-line";
      bodyGrid.appendChild(line);
    }

    days.forEach(day => {
      const dayCol = document.createElement("div");
      const isNoLectivo = !!(state.holidays && state.holidays[day.dateStr]);
      dayCol.className = `day-body-column ${day.school}` + (isNoLectivo ? " is-festivo" : "");

      let slots = [];
      if (day.school === "ribarroja" || day.school === "manises") {
        const mode = day.isIntensiva ? "intensiva" : "ordinaria";
        slots = (window.SCHEDULE_TEMPLATES[day.school] &&
                 window.SCHEDULE_TEMPLATES[day.school][mode] &&
                 window.SCHEDULE_TEMPLATES[day.school][mode][day.dayIndex]) || [];
      } else if (day.dayIndex === 4) {
        slots = [{ time: "09:00 - 14:00", label: "TIEMPO LIBRE / PLANIFICACIÓN", type: "activity" }];
      }

      slots.forEach(slot => {
        const fInfo = getFranjaForSlot(slot.time);

        if (slot.type === "class") {
          const school = day.school;
          const course = slot.course;
          const session = ensureSessionObject(weekIdx, school, course);
          const teachStatus = getGroupTeachingStatus(school, course, weekIdx);
          const isPrep = !!session.preparada;

          // Filtro de búsqueda si está activo
          if (state.searchQuery) {
            const hay = `${course} ${session.tema} ${session.actividades} ${session.avisos} ${session.educamos} ${session.imprimir}`.toLowerCase();
            if (!hay.includes(state.searchQuery)) {
              // Mostrar atenuada si no coincide con búsqueda
            }
          }

          const card = document.createElement("div");
          card.className = `session-card ${school}` + (!teachStatus.isLectivo ? " is-suspended-session" : "");
          card.dataset.franja = fInfo.franja;
          if (fInfo.sub) card.dataset.sub = fInfo.sub;
          if (fInfo.span) card.dataset.span = fInfo.span;
          if (fInfo.type) card.dataset.spanType = fInfo.type;

          if (state.searchQuery) {
            const hay = `${course} ${session.tema} ${session.actividades} ${session.avisos} ${session.educamos} ${session.imprimir}`.toLowerCase();
            if (!hay.includes(state.searchQuery)) card.style.opacity = "0.28";
          }

          const topBar = document.createElement("div");
          topBar.className = "card-top-bar";
          topBar.innerHTML = `
            <div class="card-top-left">
              <span class="card-course-badge">${escapeHTML(formatCourseShort(course))}</span>
              <span class="card-time-text">${slot.time}</span>
              <button type="button" class="prep-icon-btn ${isPrep ? 'is-prep' : 'is-unprep'}" onclick="App.togglePrepared('${school}','${course}',${weekIdx})" title="${isPrep ? 'Sesión preparada (clic para desmarcar)' : 'Marcar sesión como preparada'}">
                ${isPrep ? "✓" : "○"}
              </button>
            </div>
            <div class="card-top-actions">
              <button type="button" class="card-btn" onclick="App.copySessionToClipboard('${school}','${course}',${weekIdx})" title="Copiar esta clase para replicar (📋)">📋</button>
              ${state.clipboard ? `<button type="button" class="card-btn paste-highlight" onclick="App.pasteFromClipboard('${school}','${course}',${weekIdx})" title="Pegar aquí la clase del portapapeles (📥)">📥</button>` : ""}
              <button type="button" class="card-btn" onclick="App.shiftCourseCascadeManual('${school}','${course}',${weekIdx},-1)" title="Retroceder en cascada (-1 semana)">⏪</button>
              <button type="button" class="card-btn" onclick="App.shiftCourseCascadeManual('${school}','${course}',${weekIdx},1)" title="Desplazar en cascada (+1 semana)">⏩</button>
              <button type="button" class="card-btn" onclick="App.openEditSessionModal('${school}','${course}',${weekIdx})" title="Editar en ventana amplia (✏️)">✏️</button>
            </div>
          `;
          card.appendChild(topBar);

          // Si el grupo no tiene clase ese día (No lectivo o Evento especial), mostrar aviso y botón manual para desplazar si hay contenido
          if (!teachStatus.isLectivo) {
            const suspBanner = document.createElement("div");
            suspBanner.className = "card-suspended-banner";
            const hasCls = !!(session.tema.trim() || session.actividades.trim());
            suspBanner.innerHTML = `
              <span>🚫 ${escapeHTML(teachStatus.reason)}</span>
              ${hasCls ? `<button type="button" class="btn-manual-push-class" onclick="App.shiftCourseCascadeManual('${school}','${course}',${weekIdx},1)" title="Mover manualmente esta clase y las siguientes +1 semana lectiva">⏩ Desplazar +1 sem</button>` : ""}
            `;
            card.appendChild(suspBanner);
          }

          const body = document.createElement("div");
          body.className = "card-editable-body";

          // Fila Título + Tipo + Botón Aplazar pendiente
          const titleRow = document.createElement("div");
          titleRow.className = "card-title-row";

          const titleInput = document.createElement("input");
          titleInput.type = "text";
          titleInput.className = "inline-field inline-title";
          titleInput.placeholder = "Título / Tema...";
          titleInput.value = session.tema || "";
          titleInput.oninput = (e) => {
            session.tema = e.target.value;
            persistAll(false);
          };
          titleRow.appendChild(titleInput);

          if (session.sesion) {
            const pill = document.createElement("span");
            const sLow = session.sesion.toLowerCase();
            let pCls = "trabajo";
            if (sLow.includes("examen")) pCls = "examen";
            else if (sLow.includes("exposic")) pCls = "exposicion";
            pill.className = `session-type-pill ${pCls}`;
            pill.textContent = session.sesion;
            titleRow.appendChild(pill);
          }

          const btnPostpone = document.createElement("button");
          btnPostpone.type = "button";
          btnPostpone.className = "btn-postpone-inline";
          btnPostpone.title = "Pasar parte pendiente a la siguiente sesión o aplazar (⏩)";
          btnPostpone.textContent = "⏩";
          btnPostpone.onclick = () => openPostponeModal(school, course, weekIdx);
          titleRow.appendChild(btnPostpone);

          body.appendChild(titleRow);

          // Textarea Actividades
          const actArea = document.createElement("textarea");
          actArea.className = "inline-field inline-content";
          actArea.placeholder = "Explicación, PPT, fichas, actividades...";
          actArea.value = session.actividades || "";
          actArea.oninput = (e) => {
            session.actividades = e.target.value;
            autoResizeTextarea(e.target, 68);
            syncWeekFranjaHeights();
            persistAll(false);
          };
          body.appendChild(actArea);

          // Bloque de 3 filas sincronizadas: Avisos, Educamos, Imprimir
          const metaStack = document.createElement("div");
          metaStack.className = "card-meta-stack";

          // 1. AVISOS
          metaStack.appendChild(buildInlineMetaRow({
            type: "avisos",
            iconPending: "📢",
            iconDone: "✅",
            placeholder: "Avisos de clase...",
            textValue: session.avisos || "",
            isDone: !!session.avisoDado,
            tooltipBtn: "Marcar aviso como comunicado en clase",
            onToggle: () => {
              pushUndoSnapshot();
              session.avisoDado = !session.avisoDado;
              persistAll(false);
              renderWorkspace();
            },
            onTextChange: (val) => {
              session.avisos = val;
              persistAll(false);
            }
          }));

          // 2. EDUCAMOS (Sincronizado en vivo con Tareas de esta misma semana)
          metaStack.appendChild(buildInlineMetaRow({
            type: "educamos",
            iconPending: "🏫",
            iconDone: "✅",
            placeholder: "Educamos (sincronizado con Tareas)...",
            textValue: session.educamos || "",
            isDone: !!session.educamosDado,
            tooltipBtn: "Avisos Educamos (sincronizado con Tareas)",
            onToggle: () => {
              pushUndoSnapshot();
              session.educamosDado = !session.educamosDado;
              persistAll(false);
              renderWorkspace();
            },
            onTextChange: (val) => {
              session.educamos = val;
              persistAll(false);
            }
          }));

          // 3. IMPRIMIR (Sincronizado con Tareas -> se activa como pendiente la semana anterior)
          metaStack.appendChild(buildInlineMetaRow({
            type: "imprimir",
            iconPending: "🖨️",
            iconDone: "✅",
            placeholder: "Imprimir (se avisa en Tareas la sem. ant.)...",
            textValue: session.imprimir || "",
            isDone: !!session.imprimirDado,
            tooltipBtn: "Impresiones listas para esta clase (vinculado a Tareas la semana anterior)",
            onToggle: () => {
              pushUndoSnapshot();
              session.imprimirDado = !session.imprimirDado;
              persistAll(false);
              renderWorkspace();
            },
            onTextChange: (val) => {
              session.imprimir = val;
              persistAll(false);
            }
          }));

          body.appendChild(metaStack);
          card.appendChild(body);
          dayCol.appendChild(card);
        } else {
          // Bloque estático (Patio, Comedor, Guardia, Lectura, Tiempo libre)
          const sInfo = getSlotIcon(slot.label);
          const staticCard = document.createElement("div");
          staticCard.className = `static-slot-block ${day.school} ${sInfo.cls}`;
          staticCard.dataset.franja = fInfo.franja;
          if (fInfo.sub) staticCard.dataset.sub = fInfo.sub;
          if (fInfo.span) staticCard.dataset.span = fInfo.span;
          if (fInfo.type) staticCard.dataset.spanType = fInfo.type;

          const slotKey = `${day.dayIndex}__${slot.time}`;
          const noteVal = (week.slot_notes && week.slot_notes[slotKey]) || "";

          const headerDiv = document.createElement("div");
          headerDiv.className = "static-slot-header";
          headerDiv.innerHTML = `
            <span class="slot-label">${sInfo.icon} ${escapeHTML(slot.label)}</span>
            <span class="slot-time">${slot.time}</span>
          `;
          staticCard.appendChild(headerDiv);

          const isLectura = sInfo.cls === "lectura" || fInfo.sub === "lectura" || (slot.label && slot.label.toUpperCase().includes("LECTURA"));
          if (!isLectura) {
            const noteArea = document.createElement("textarea");
            noteArea.className = "inline-field inline-content static-slot-textarea";
            noteArea.placeholder = "Anotaciones, guardia, tareas...";
            noteArea.value = noteVal;
            noteArea.rows = 1;
            noteArea.oninput = (e) => {
              App.onSlotNoteEdit(weekIdx, slotKey, e.target.value);
              autoResizeTextarea(e.target, 26);
              syncWeekFranjaHeights();
            };
            staticCard.appendChild(noteArea);
          }

          dayCol.appendChild(staticCard);
        }
      });

      bodyGrid.appendChild(dayCol);
    });

    wrap.appendChild(bodyGrid);
    container.appendChild(wrap);
    requestAnimationFrame(() => syncWeekFranjaHeights());
  }

  function buildInlineMetaRow({ type, iconPending, iconDone, placeholder, textValue, isDone, tooltipBtn, onToggle, onTextChange }) {
    const row = document.createElement("div");
    const hasTxt = !!(textValue && textValue.trim());
    row.className = `inline-meta-row type-${type}` + (hasTxt ? " has-text" : "") + (isDone && hasTxt ? " is-done" : "");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "meta-toggle-btn";
    btn.title = tooltipBtn;
    btn.textContent = (isDone && hasTxt) ? iconDone : iconPending;
    btn.onclick = onToggle;

    const ta = document.createElement("textarea");
    ta.className = "meta-textarea";
    ta.rows = 1;
    ta.placeholder = placeholder;
    ta.value = textValue;
    ta.oninput = (e) => {
      onTextChange(e.target.value);
      row.classList.toggle("has-text", !!e.target.value.trim());
      autoResizeTextarea(e.target, 18);
      syncWeekFranjaHeights();
    };

    row.appendChild(btn);
    row.appendChild(ta);
    return row;
  }

  // ==========================================================================
  // MOTOR DE REPLICACIÓN, CASCADA (+1 / -1) Y SEGURIDAD DE DATOS
  // ==========================================================================

  function cloneCleanSession(src) {
    return {
      tema: src.tema || "",
      actividades: src.actividades || "",
      avisos: src.avisos || "",
      avisoDado: false,
      educamos: src.educamos || "",
      educamosDado: false,
      imprimir: src.imprimir || "",
      imprimirDado: false,
      sesion: src.sesion || "",
      preparada: !!src.preparada
    };
  }

  function copySessionToClipboard(school, course, weekIdx) {
    const s = ensureSessionObject(weekIdx, school, course);
    const schName = school === "ribarroja" ? "Riba-roja" : "Manises";
    state.clipboard = {
      tema: s.tema || "",
      actividades: s.actividades || "",
      avisos: s.avisos || "",
      educamos: s.educamos || "",
      imprimir: s.imprimir || "",
      sesion: s.sesion || "",
      preparada: !!s.preparada,
      sourceLabel: `${formatCourseShort(course)} (${schName}) · Sem. ${weekIdx + 1}`,
      sourceLevel: getCourseLevel(course),
      sourceSchool: school,
      sourceCourse: course,
      sourceWeekIdx: weekIdx
    };
    updateTopbarBadges();
    renderWorkspace();
    showToast(`📋 Copiada: ${s.tema || "Sesión"} (${formatCourseShort(course)} · Sem. ${weekIdx + 1})`);
  }

  function clearClipboard() {
    state.clipboard = null;
    updateTopbarBadges();
    renderWorkspace();
  }

  function setClipboardPasteMode(mode) {
    state.clipboardPasteMode = mode;
  }

  // Busca la próxima semana lectiva libre en la dirección indicada (+1 o -1)
  function findEmptyTeachingSlot(school, course, startWeekIdx, direction) {
    let w = startWeekIdx;
    while (w >= 0 && w < state.weeks.length) {
      const tStatus = getGroupTeachingStatus(school, course, w);
      if (tStatus.isLectivo) {
        const s = ensureSessionObject(w, school, course);
        if (!hasSessionContent(s)) return w;
      }
      w += direction;
    }
    return -1;
  }

  // Desplaza en cascada las sesiones lectivas de un curso (+1 hacia adelante o -1 hacia atrás)
  // Saltando automáticamente las semanas no lectivas o con evento especial de ese grupo
  function executeCourseCascade(school, course, fromWeekIdx, direction, insertedSessionOrNull) {
    pushUndoSnapshot();

    // Obtener índices de todas las semanas lectivas (o que ya tienen contenido) desde fromWeekIdx
    const teachingWeeks = [];
    if (direction === 1) {
      for (let w = fromWeekIdx; w < state.weeks.length; w++) {
        const st = getGroupTeachingStatus(school, course, w);
        const cur = ensureSessionObject(w, school, course);
        if (st.isLectivo || w === fromWeekIdx || hasSessionContent(cur)) {
          if (st.isLectivo || w === fromWeekIdx) {
            teachingWeeks.push(w);
          }
        }
      }
    } else {
      for (let w = fromWeekIdx; w >= 0; w--) {
        const st = getGroupTeachingStatus(school, course, w);
        if (st.isLectivo || w === fromWeekIdx) {
          teachingWeeks.push(w); // orden descendente: fromWeekIdx, fromWeekIdx-1...
        }
      }
    }

    if (teachingWeeks.length === 0) return;

    // Buscar hasta el primer hueco libre en esa secuencia de semanas lectivas
    let stopIdxInList = teachingWeeks.findIndex((wIdx, pos) => {
      if (pos === 0) return false;
      return !hasSessionContent(ensureSessionObject(wIdx, school, course));
    });

    if (stopIdxInList === -1) {
      // No hay hueco libre antes del final/principio del curso: guardar última en Cajón de Reserva
      stopIdxInList = teachingWeeks.length - 1;
      const edgeW = teachingWeeks[stopIdxInList];
      const edgeSession = ensureSessionObject(edgeW, school, course);
      if (hasSessionContent(edgeSession)) {
        addSessionToReserve(school, course, edgeW, edgeSession, `Desplazada en cascada (${direction > 0 ? "+1" : "-1"}) al límite del calendario`);
      }
    }

    // Desplazar a lo largo de las semanas lectivas hasta stopIdxInList
    for (let i = stopIdxInList; i > 0; i--) {
      const targetW = teachingWeeks[i];
      const prevW = teachingWeeks[i - 1];
      state.weeks[targetW][school][course] = cloneCleanSession(ensureSessionObject(prevW, school, course));
    }

    // En el origen (teachingWeeks[0] === fromWeekIdx), insertar la nueva o dejar vacío
    if (insertedSessionOrNull) {
      state.weeks[fromWeekIdx][school][course] = cloneCleanSession(insertedSessionOrNull);
    } else {
      state.weeks[fromWeekIdx][school][course] = {
        tema: "", actividades: "", avisos: "", avisoDado: false,
        educamos: "", educamosDado: false, imprimir: "", imprimirDado: false,
        sesion: "", preparada: false
      };
    }

    persistAll(false);
    renderWorkspace();
  }

  function shiftCourseCascadeManual(school, course, weekIdx, direction) {
    const cur = ensureSessionObject(weekIdx, school, course);
    if (direction === 1) {
      if (!hasSessionContent(cur)) {
        showToast("ℹ️ Esta sesión ya está vacía");
        return;
      }
      executeCourseCascade(school, course, weekIdx, 1, null);
      showToast(`⏩ Clases de ${formatCourseShort(course)} desplazadas +1 semana lectiva`);
    } else {
      // Retroceder -1 semana: traer las clases posteriores una semana antes o mover hacia atrás
      const prevFree = findEmptyTeachingSlot(school, course, weekIdx - 1, -1);
      if (prevFree !== -1 && hasSessionContent(cur)) {
        executeCourseCascade(school, course, weekIdx, -1, null);
        showToast(`⏪ Clase desplazada hacia atrás (-1 sem)`);
      } else {
        // Tirar de las clases futuras hacia esta semana
        pushUndoSnapshot();
        if (hasSessionContent(cur)) {
          addSessionToReserve(school, course, weekIdx, cur, "Guardada en Reserva al adelantar programación (-1 sem)");
        }
        const futureTeaching = [];
        for (let w = weekIdx; w < state.weeks.length; w++) {
          const st = getGroupTeachingStatus(school, course, w);
          if (st.isLectivo || w === weekIdx) futureTeaching.push(w);
        }
        for (let i = 0; i < futureTeaching.length - 1; i++) {
          const wCurr = futureTeaching[i];
          const wNext = futureTeaching[i + 1];
          state.weeks[wCurr][school][course] = cloneCleanSession(ensureSessionObject(wNext, school, course));
        }
        const lastW = futureTeaching[futureTeaching.length - 1];
        state.weeks[lastW][school][course] = {
          tema: "", actividades: "", avisos: "", avisoDado: false,
          educamos: "", educamosDado: false, imprimir: "", imprimirDado: false,
          sesion: "", preparada: false
        };
        persistAll(false);
        renderWorkspace();
        showToast(`⏪ Programación de ${formatCourseShort(course)} adelantada (-1 semana)`);
      }
    }
  }

  function pasteFromClipboard(targetSchool, targetCourse, targetWeekIdx) {
    if (!state.clipboard) {
      showToast("⚠️ Primero copia una clase con el botón 📋");
      return;
    }

    const existing = ensureSessionObject(targetWeekIdx, targetSchool, targetCourse);
    const occupied = hasSessionContent(existing);

    if (!occupied) {
      pushUndoSnapshot();
      state.weeks[targetWeekIdx][targetSchool][targetCourse] = cloneCleanSession(state.clipboard);
      persistAll(false);
      renderWorkspace();
      showToast(`✓ Clase pegada en ${formatCourseShort(targetCourse)} · Sem. ${targetWeekIdx + 1}`);
      return;
    }

    // Si está ocupada, respetar el modo seleccionado o abrir modal seguro
    if (state.clipboardPasteMode === "cascade_forward") {
      executeCourseCascade(targetSchool, targetCourse, targetWeekIdx, 1, state.clipboard);
      showToast(`⏩ Insertada en cascada (+1) en ${formatCourseShort(targetCourse)} · Sem. ${targetWeekIdx + 1}`);
      return;
    }
    if (state.clipboardPasteMode === "overwrite") {
      pushUndoSnapshot();
      addSessionToReserve(targetSchool, targetCourse, targetWeekIdx, existing, "Sobrescrita al pegar clase");
      state.weeks[targetWeekIdx][targetSchool][targetCourse] = cloneCleanSession(state.clipboard);
      persistAll(false);
      renderWorkspace();
      showToast(`🔄 Clase sustituida en ${formatCourseShort(targetCourse)} (anterior guardada en Reserva 📦)`);
      return;
    }

    openPasteConflictModal(state.clipboard, targetSchool, targetCourse, targetWeekIdx);
  }

  function pasteToAllSameLevelInCurrentWeek() {
    if (!state.clipboard) return;
    const lvl = state.clipboard.sourceLevel;
    const wIdx = state.currentWeekIndex;
    const targets = ALL_GROUPS.filter(g => g.level === lvl && !(g.school === state.clipboard.sourceSchool && g.course === state.clipboard.sourceCourse && wIdx === state.clipboard.sourceWeekIdx));

    pushUndoSnapshot();
    let count = 0;
    targets.forEach(g => {
      const existing = ensureSessionObject(wIdx, g.school, g.course);
      if (hasSessionContent(existing)) {
        if (state.clipboardPasteMode === "cascade_forward") {
          executeCourseCascade(g.school, g.course, wIdx, 1, state.clipboard);
        } else {
          addSessionToReserve(g.school, g.course, wIdx, existing, `Sobrescrita al replicar nivel ${lvl} en Sem. ${wIdx + 1}`);
          state.weeks[wIdx][g.school][g.course] = cloneCleanSession(state.clipboard);
        }
      } else {
        state.weeks[wIdx][g.school][g.course] = cloneCleanSession(state.clipboard);
      }
      count++;
    });

    persistAll(false);
    renderWorkspace();
    showToast(`⚡ Clase replicada en ${count} grupos de ${lvl} (Semana ${wIdx + 1})`);
  }

  function openPasteConflictModal(clipObj, targetSchool, targetCourse, targetWeekIdx) {
    activeConflictContext = { clipObj: deepClone(clipObj), targetSchool, targetCourse, targetWeekIdx };
    const existing = ensureSessionObject(targetWeekIdx, targetSchool, targetCourse);
    const schName = targetSchool === "ribarroja" ? "🔴 Riba-roja" : "🔵 Manises";
    const body = document.getElementById("paste-conflict-body");
    if (!body) return;

    const freeFwd = findEmptyTeachingSlot(targetSchool, targetCourse, targetWeekIdx + 1, 1);
    const freeBwd = findEmptyTeachingSlot(targetSchool, targetCourse, targetWeekIdx - 1, -1);

    body.innerHTML = `
      <div style="font-size:12px;color:var(--text-secondary);">
        Destino: <strong>${schName} · ${escapeHTML(formatCourseShort(targetCourse))} · Semana ${targetWeekIdx + 1}</strong> (${escapeHTML(state.weeks[targetWeekIdx].rango)})
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div style="padding:10px;border-radius:8px;background:#fffbeb;border:1px solid #fde68a;">
          <div style="font-size:10px;font-weight:800;color:#b45309;text-transform:uppercase;">⚠️ Clase actual en el destino</div>
          <div style="font-size:12px;font-weight:800;margin-top:3px;">${escapeHTML(existing.tema || "(Sin título)")}</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:3px;white-space:pre-line;">${escapeHTML((existing.actividades || "").slice(0, 120))}</div>
        </div>
        <div style="padding:10px;border-radius:8px;background:#eff6ff;border:1px solid #bfdbfe;">
          <div style="font-size:10px;font-weight:800;color:#1d4ed8;text-transform:uppercase;">📋 Clase que vas a pegar</div>
          <div style="font-size:12px;font-weight:800;margin-top:3px;">${escapeHTML(clipObj.tema || "(Sin título)")}</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:3px;white-space:pre-line;">${escapeHTML((clipObj.actividades || "").slice(0, 120))}</div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;margin-top:4px;">
        <button type="button" class="conflict-option-btn" onclick="App.resolvePasteConflict('cascade_forward')">
          <span style="font-size:18px;">⏩</span>
          <div>
            <div style="font-weight:800;font-size:12.5px;">1. Insertar aquí y desplazar en cascada hacia adelante (+1 semana lectiva)</div>
            <div style="font-size:11px;color:var(--text-secondary);">Mueve la clase actual y las siguientes +1 semana lectiva (saltando festivos/eventos). ${freeFwd !== -1 ? `Hueco libre en Sem. ${freeFwd + 1}.` : "Si desborda la Sem. 44, se guarda en Reserva 📦."}</div>
          </div>
        </button>

        <button type="button" class="conflict-option-btn" onclick="App.resolvePasteConflict('cascade_backward')">
          <span style="font-size:18px;">⏪</span>
          <div>
            <div style="font-weight:800;font-size:12.5px;">2. Insertar aquí y desplazar en cascada hacia atrás (-1 semana lectiva)</div>
            <div style="font-size:11px;color:var(--text-secondary);">Mueve la clase actual y las anteriores -1 semana lectiva. ${freeBwd !== -1 ? `Hueco libre en Sem. ${freeBwd + 1}.` : "Si desborda la Sem. 1, se guarda en Reserva 📦."}</div>
          </div>
        </button>

        <button type="button" class="conflict-option-btn" onclick="App.resolvePasteConflict('overwrite')">
          <span style="font-size:18px;">🔄</span>
          <div>
            <div style="font-weight:800;font-size:12.5px;">3. Sustituir clase actual (resguardando la anterior en el Cajón de Reserva 📦)</div>
            <div style="font-size:11px;color:var(--text-secondary);">Reemplaza esta sesión sin mover las demás semanas. La sesión previa se envía automáticamente a tu Cajón de Reserva.</div>
          </div>
        </button>

        ${clipObj.sourceSchool && clipObj.sourceCourse !== undefined && clipObj.sourceWeekIdx !== undefined ? `
          <button type="button" class="conflict-option-btn" onclick="App.resolvePasteConflict('swap')">
            <span style="font-size:18px;">⇄</span>
            <div>
              <div style="font-weight:800;font-size:12.5px;">4. Intercambiar ambas clases (${escapeHTML(clipObj.sourceLabel)} ⇄ Sem. ${targetWeekIdx + 1})</div>
              <div style="font-size:11px;color:var(--text-secondary);">Permuta el contenido entre el origen y este destino sin perder ninguna de las dos.</div>
            </div>
          </button>
        ` : ""}
      </div>
    `;

    openModal("modal-paste-conflict");
  }

  function resolvePasteConflict(action) {
    if (!activeConflictContext) return;
    const { clipObj, targetSchool, targetCourse, targetWeekIdx } = activeConflictContext;
    closeModal("modal-paste-conflict");

    if (action === "cascade_forward") {
      executeCourseCascade(targetSchool, targetCourse, targetWeekIdx, 1, clipObj);
      showToast(`⏩ Insertada y desplazada en cascada (+1) en ${formatCourseShort(targetCourse)}`);
    } else if (action === "cascade_backward") {
      executeCourseCascade(targetSchool, targetCourse, targetWeekIdx, -1, clipObj);
      showToast(`⏪ Insertada y desplazada hacia atrás (-1) en ${formatCourseShort(targetCourse)}`);
    } else if (action === "overwrite") {
      pushUndoSnapshot();
      const old = ensureSessionObject(targetWeekIdx, targetSchool, targetCourse);
      addSessionToReserve(targetSchool, targetCourse, targetWeekIdx, old, "Sustituida al pegar sesión");
      state.weeks[targetWeekIdx][targetSchool][targetCourse] = cloneCleanSession(clipObj);
      persistAll(false);
      renderWorkspace();
      showToast(`🔄 Clase sustituida (anterior resguardada en Cajón de Reserva 📦)`);
    } else if (action === "swap") {
      pushUndoSnapshot();
      const dst = cloneCleanSession(ensureSessionObject(targetWeekIdx, targetSchool, targetCourse));
      state.weeks[targetWeekIdx][targetSchool][targetCourse] = cloneCleanSession(clipObj);
      state.weeks[clipObj.sourceWeekIdx][clipObj.sourceSchool][clipObj.sourceCourse] = dst;
      persistAll(false);
      renderWorkspace();
      showToast(`⇄ Clases intercambiadas correctamente`);
    }
    activeConflictContext = null;
  }

  // ==========================================================================
  // RENDERIZADO DE LA VISTA 2: REPLICAR CLASES (MATRIZ GLOBAL / MENSUAL)
  // ==========================================================================

  function getFilteredWeeksForMatrix() {
    const scope = state.matrixScope || "month";
    if (scope === "all") {
      return state.weeks.map((w, i) => ({ week: w, idx: i }));
    }
    if (scope === "trim1") {
      return state.weeks.map((w, i) => ({ week: w, idx: i })).filter(x => x.idx >= 0 && x.idx <= 15);
    }
    if (scope === "trim2") {
      return state.weeks.map((w, i) => ({ week: w, idx: i })).filter(x => x.idx >= 16 && x.idx <= 29);
    }
    if (scope === "trim3") {
      return state.weeks.map((w, i) => ({ week: w, idx: i })).filter(x => x.idx >= 30);
    }

    // Por mes (visión mensual de todos los grupos)
    const mObj = SCHOOL_MONTHS.find(m => m.key === state.matrixMonthKey) || SCHOOL_MONTHS[2];
    return state.weeks
      .map((w, i) => ({ week: w, idx: i }))
      .filter(({ week }) => {
        if ((week.mes || "").toUpperCase() === mObj.mesUpper) return true;
        if (week.date_start && week.date_start.startsWith(mObj.key)) return true;
        return false;
      });
  }

  function renderPlannerMatrixView(container) {
    const wrap = document.createElement("div");
    wrap.className = "matrix-view-container";

    // 1. Barra de Filtros de Matriz y Replicación
    const toolbar = document.createElement("div");
    toolbar.className = "subview-toolbar";

    const monthOpts = SCHOOL_MONTHS.map(m =>
      `<option value="${m.key}" ${m.key === state.matrixMonthKey ? "selected" : ""}>🗓️ ${m.name}</option>`
    ).join("");

    toolbar.innerHTML = `
      <div class="toolbar-cluster">
        <div class="filter-pill-group" role="group" aria-label="Alcance temporal">
          <button type="button" class="filter-pill-btn ${state.matrixScope === 'month' ? 'active' : ''}" onclick="App.setMatrixScope('month')">Mes</button>
          <button type="button" class="filter-pill-btn ${state.matrixScope === 'trim1' ? 'active' : ''}" onclick="App.setMatrixScope('trim1')">1º Trim</button>
          <button type="button" class="filter-pill-btn ${state.matrixScope === 'trim2' ? 'active' : ''}" onclick="App.setMatrixScope('trim2')">2º Trim</button>
          <button type="button" class="filter-pill-btn ${state.matrixScope === 'trim3' ? 'active' : ''}" onclick="App.setMatrixScope('trim3')">3º Trim</button>
          <button type="button" class="filter-pill-btn ${state.matrixScope === 'all' ? 'active' : ''}" onclick="App.setMatrixScope('all')">Curso Completo (44 sem)</button>
        </div>

        ${state.matrixScope === "month" ? `
          <div style="display:inline-flex;align-items:center;gap:4px;">
            <button type="button" class="corporate-btn" style="padding-inline:7px;" onclick="App.stepMatrixMonth(-1)" title="Mes anterior">◀</button>
            <select class="corporate-select" onchange="App.setMatrixMonth(this.value)">${monthOpts}</select>
            <button type="button" class="corporate-btn" style="padding-inline:7px;" onclick="App.stepMatrixMonth(1)" title="Mes siguiente">▶</button>
          </div>
        ` : ""}
      </div>

      <div class="toolbar-cluster">
        <div class="filter-pill-group" role="group" aria-label="Filtrar por nivel">
          <button type="button" class="filter-pill-btn ${state.matrixLevelFilter === 'all' ? 'active' : ''}" onclick="App.setMatrixLevelFilter('all')">Todos los niveles</button>
          ${COURSE_LEVELS.map(lvl => `
            <button type="button" class="filter-pill-btn ${state.matrixLevelFilter === lvl ? 'active' : ''}" onclick="App.setMatrixLevelFilter('${lvl}')">${lvl.replace("BACHILLERATO", "BAC")}</button>
          `).join("")}
        </div>

        <div class="filter-pill-group" role="group" aria-label="Filtrar por centro">
          <button type="button" class="filter-pill-btn ${state.matrixSchoolFilter === 'ambos' ? 'active' : ''}" onclick="App.setMatrixSchoolFilter('ambos')">Ambos</button>
          <button type="button" class="filter-pill-btn ${state.matrixSchoolFilter === 'ribarroja' ? 'active' : ''}" onclick="App.setMatrixSchoolFilter('ribarroja')">🔴 Riba-roja</button>
          <button type="button" class="filter-pill-btn ${state.matrixSchoolFilter === 'manises' ? 'active' : ''}" onclick="App.setMatrixSchoolFilter('manises')">🔵 Manises</button>
        </div>
      </div>
    `;
    wrap.appendChild(toolbar);

    // 2. Cuadrícula de Grupos x Semanas
    const tableScroll = document.createElement("div");
    tableScroll.className = "matrix-table-scroll";

    const visibleWeeks = getFilteredWeeksForMatrix();
    const table = document.createElement("table");
    table.className = "replicate-matrix-table";

    // Cabecera de columnas (Semanas)
    const thead = document.createElement("thead");
    let thHtml = `<tr><th class="sticky-group-col">GRUPO / CENTRO</th>`;
    visibleWeeks.forEach(({ week, idx }) => {
      const isCur = (idx === state.currentWeekIndex);
      const weekMarks = getWeekMarksSummary(idx);
      const weekMarksHtml = weekMarks.length > 0 ? `
        <div class="matrix-week-marks">
          ${weekMarks.map(wm => {
            const catMeta = DAY_MARK_CATEGORIES[wm.category] || DAY_MARK_CATEGORIES.otro;
            return `<button type="button" class="day-mark-pill compact cat-${escapeHTML(wm.category)}" onclick="App.openCalendarDayModal('${wm.firstDateStr}')" title="${escapeHTML(catMeta.label)}: ${escapeHTML(wm.title)} (${escapeHTML(wm.rangeTag)})">${catMeta.icon} ${escapeHTML(wm.title)} (${escapeHTML(wm.rangeTag)})</button>`;
          }).join("")}
        </div>
      ` : "";
      thHtml += `
        <th class="${isCur ? 'is-current-week-col' : ''}">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
            <div>
              <div style="font-size:11.5px;font-weight:800;color:var(--text-main);">${escapeHTML(week.num_sem)}</div>
              <div style="font-size:10px;color:var(--text-secondary);font-weight:600;">${escapeHTML(week.rango)}</div>
            </div>
            <div style="display:flex;gap:3px;">
              ${state.clipboard ? `
                <button type="button" class="matrix-mini-btn btn-paste-here" style="font-size:9.5px;padding:2px 5px;" onclick="App.pasteToLevelInWeek(${idx})" title="Pegar clase copiada en todos los grupos visibles de ${state.clipboard.sourceLevel} en ${week.num_sem}">⚡ Nivel</button>
              ` : ""}
              <button type="button" class="matrix-mini-btn" style="color:var(--text-main);background:#ffffff;border:1px solid var(--border-medium);" onclick="App.selectWeek(${idx});App.switchPlannerView('semanal');" title="Abrir ${week.num_sem} en vista Semanal">📅</button>
            </div>
          </div>
          ${weekMarksHtml}
        </th>
      `;
    });
    thHtml += `</tr>`;
    thead.innerHTML = thHtml;
    table.appendChild(thead);

    // Filas agrupadas por Nivel Escolar para máxima claridad al replicar
    const tbody = document.createElement("tbody");

    COURSE_LEVELS.forEach(lvl => {
      if (state.matrixLevelFilter !== "all" && state.matrixLevelFilter !== lvl) return;

      const groupsOfLevel = ALL_GROUPS.filter(g => {
        if (g.level !== lvl) return false;
        if (state.matrixSchoolFilter !== "ambos" && g.school !== state.matrixSchoolFilter) return false;
        return true;
      });
      if (groupsOfLevel.length === 0) return;

      // Fila separadora de Nivel
      const divTr = document.createElement("tr");
      divTr.className = "level-divider-row";
      divTr.innerHTML = `<th colspan="${visibleWeeks.length + 1}"><span class="level-divider-sticky-label">🎓 NIVEL ${escapeHTML(lvl)} (${groupsOfLevel.length} grupos)</span></th>`;
      tbody.appendChild(divTr);

      groupsOfLevel.forEach(grp => {
        const tr = document.createElement("tr");
        const schBadge = grp.school === "ribarroja"
          ? `<span class="header-school-badge ribarroja">🔴 Riba-roja</span>`
          : `<span class="header-school-badge manises">🔵 Manises</span>`;

        const rowTh = document.createElement("th");
        rowTh.className = "sticky-group-row-hdr";
        rowTh.innerHTML = `
          <div style="display:flex;flex-direction:column;gap:4px;">
            <div style="font-size:12px;font-weight:800;color:var(--text-main);">${escapeHTML(grp.shortName)}</div>
            <div>${schBadge}</div>
          </div>
        `;
        tr.appendChild(rowTh);

        visibleWeeks.forEach(({ idx: wIdx }) => {
          const td = document.createElement("td");
          const session = ensureSessionObject(wIdx, grp.school, grp.course);
          const teachStatus = getGroupTeachingStatus(grp.school, grp.course, wIdx);
          const cellMarks = teachStatus.dateStr ? getDayMarks(teachStatus.dateStr) : [];
          const isSourceCopied = !!(state.clipboard &&
            state.clipboard.sourceSchool === grp.school &&
            state.clipboard.sourceCourse === grp.course &&
            state.clipboard.sourceWeekIdx === wIdx);

          td.className = "matrix-td" +
            (!teachStatus.isLectivo ? " is-suspended-td" : "") +
            (cellMarks.length > 0 ? ` has-day-mark mark-${cellMarks[0].category}` : "") +
            (isSourceCopied ? " is-copied-source" : "");

          // Soporte Drag & Drop
          td.draggable = hasSessionContent(session);
          td.ondragstart = (ev) => {
            copySessionToClipboard(grp.school, grp.course, wIdx);
            ev.dataTransfer.setData("text/plain", `${grp.school}|${grp.course}|${wIdx}`);
          };
          td.ondragover = (ev) => ev.preventDefault();
          td.ondrop = (ev) => {
            ev.preventDefault();
            pasteFromClipboard(grp.school, grp.course, wIdx);
          };

          const dateLabel = teachStatus.sched
            ? `${teachStatus.sched.dayName} ${teachStatus.sched.dateNum} ${teachStatus.sched.monthName}`
            : `Sem. ${wIdx + 1}`;

          const hasContent = hasSessionContent(session);

          if (state.searchQuery) {
            const hay = `${grp.shortName} ${session.tema} ${session.actividades} ${session.avisos} ${session.educamos} ${session.imprimir}`.toLowerCase();
            if (!hay.includes(state.searchQuery)) td.style.opacity = "0.25";
          }

          const cellMarksHtml = (cellMarks.length > 0 && teachStatus.dateStr) ? `
            <div class="matrix-cell-marks">
              ${cellMarks.map(m => {
                const catMeta = DAY_MARK_CATEGORIES[m.category] || DAY_MARK_CATEGORIES.otro;
                return `<button type="button" class="day-mark-pill compact cat-${escapeHTML(m.category)}" onclick="App.openCalendarDayModal('${teachStatus.dateStr}')" title="${escapeHTML(catMeta.label)}: ${escapeHTML(m.title)}">${catMeta.icon} ${escapeHTML(m.title)}</button>`;
              }).join("")}
            </div>
          ` : "";

          td.innerHTML = `
            <div class="matrix-cell-card">
              <div class="matrix-cell-top">
                <span class="matrix-date-tag">${escapeHTML(dateLabel)} ${session.preparada ? "✅" : ""}</span>
                <div class="matrix-cell-actions">
                  <button type="button" class="matrix-mini-btn" onclick="App.copySessionToClipboard('${grp.school}','${grp.course}',${wIdx})" title="Copiar esta clase (📋)">📋</button>
                  ${state.clipboard ? `<button type="button" class="matrix-mini-btn btn-paste-here" onclick="App.pasteFromClipboard('${grp.school}','${grp.course}',${wIdx})" title="Pegar aquí la clase copiada (📥)">📥</button>` : ""}
                  <button type="button" class="matrix-mini-btn" onclick="App.shiftCourseCascadeManual('${grp.school}','${grp.course}',${wIdx},-1)" title="Cascada -1 semana">⏪</button>
                  <button type="button" class="matrix-mini-btn" onclick="App.shiftCourseCascadeManual('${grp.school}','${grp.course}',${wIdx},1)" title="Cascada +1 semana">⏩</button>
                  <button type="button" class="matrix-mini-btn" onclick="App.openEditSessionModal('${grp.school}','${grp.course}',${wIdx})" title="Editar sesión (✏️)">✏️</button>
                  ${hasContent || session.preparada ? `<button type="button" class="matrix-mini-btn btn-delete-session" onclick="App.requestDeleteMatrixSession('${grp.school}','${grp.course}',${wIdx})" title="Eliminar sesión (🗑️)">🗑️</button>` : ""}
                </div>
              </div>
              ${cellMarksHtml}

              ${!teachStatus.isLectivo ? `
                <div style="display:flex;align-items:center;justify-content:space-between;gap:4px;padding:2px 5px;border-radius:4px;background:#fef3c7;color:#92400e;font-size:9.5px;font-weight:800;">
                  <span>🚫 ${escapeHTML(teachStatus.reason)}</span>
                  ${hasContent ? `<button type="button" class="btn-manual-push-class" onclick="App.shiftCourseCascadeManual('${grp.school}','${grp.course}',${wIdx},1)" title="Empujar manualmente +1 semana lectiva">⏩ +1</button>` : ""}
                </div>
              ` : ""}

              ${hasContent ? `
                <div class="matrix-tema-title">
                  ${session.sesion ? `<span class="session-type-pill ${session.sesion.toLowerCase().includes('examen') ? 'examen' : 'trabajo'}" style="margin-right:4px;">${escapeHTML(session.sesion)}</span>` : ""}
                  ${escapeHTML(session.tema || "(Sin tema)")}
                </div>
                <div class="matrix-act-snippet">${escapeHTML(session.actividades || "")}</div>
                <div class="matrix-meta-pills">
                  ${session.avisos && session.avisos.trim() ? `<span class="mini-meta-tag aviso" title="${escapeHTML(session.avisos)}">${session.avisoDado ? "✅" : "📢"} ${escapeHTML(session.avisos)}</span>` : ""}
                  ${session.educamos && session.educamos.trim() ? `<span class="mini-meta-tag educamos" title="${escapeHTML(session.educamos)}">${session.educamosDado ? "✅" : "🏫"} ${escapeHTML(session.educamos)}</span>` : ""}
                  ${session.imprimir && session.imprimir.trim() ? `<span class="mini-meta-tag imprimir" title="${escapeHTML(session.imprimir)}">${session.imprimirDado ? "✅" : "🖨️"} ${escapeHTML(session.imprimir)}</span>` : ""}
                </div>
              ` : `
                <div style="color:var(--text-muted);font-size:10.5px;font-style:italic;margin:auto 0;text-align:center;">
                  ${state.clipboard ? `<button type="button" class="corporate-btn" style="height:24px;font-size:10.5px;border-style:dashed;" onclick="App.pasteFromClipboard('${grp.school}','${grp.course}',${wIdx})">📥 Pegar clase aquí</button>` : "— Vacío —"}
                </div>
              `}
            </div>
          `;
          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });
    });

    table.appendChild(tbody);
    tableScroll.appendChild(table);
    wrap.appendChild(tableScroll);
    container.appendChild(wrap);
  }

  function pasteToLevelInWeek(weekIdx) {
    if (!state.clipboard) return;
    const prevW = state.currentWeekIndex;
    state.currentWeekIndex = weekIdx;
    pasteToAllSameLevelInCurrentWeek();
    state.currentWeekIndex = prevW;
  }

  function requestDeleteMatrixSession(school, course, weekIdx) {
    const sess = ensureSessionObject(weekIdx, school, course);
    if (!hasSessionContent(sess) && !sess.preparada) {
      showToast("ℹ️ Esta sesión ya está vacía");
      return;
    }

    pendingDeleteMatrixSession = { school, course, weekIdx };
    const schName = school === "ribarroja" ? "🔴 Riba-roja" : "🔵 Manises";
    const wk = state.weeks[weekIdx] || {};
    const body = document.getElementById("confirm-delete-session-body");
    if (body) {
      body.innerHTML = `
        <div style="font-size:12.5px;color:var(--text-main);">
          ¿Seguro que quieres eliminar esta sesión de <strong>${escapeHTML(formatCourseShort(course))} (${schName})</strong>?
        </div>
        <div style="padding:10px 12px;border-radius:8px;background:var(--danger-soft);border:1px solid var(--danger-border);">
          <div style="font-size:10.5px;font-weight:800;color:#be123c;text-transform:uppercase;">
            ${escapeHTML(wk.num_sem || `Semana ${weekIdx + 1}`)} · ${escapeHTML(wk.rango || "")}
          </div>
          <div style="font-size:13px;font-weight:800;color:var(--text-main);margin-top:3px;">
            ${escapeHTML(sess.tema || "(Sin título)")}
          </div>
          ${sess.actividades ? `<div style="font-size:11.5px;color:var(--text-secondary);margin-top:4px;white-space:pre-line;">${escapeHTML(sess.actividades.slice(0, 160))}${sess.actividades.length > 160 ? "…" : ""}</div>` : ""}
        </div>
        <div style="font-size:11.5px;color:var(--text-secondary);">
          La casilla quedará vacía. Como respaldo de seguridad, se guardará una copia en tu <strong>Cajón de Reserva 📦</strong> (y podrás usar <strong>↩️ Deshacer</strong>).
        </div>
      `;
    }

    const dlg = document.getElementById("confirm-delete-session-dialog");
    if (dlg && typeof dlg.showModal === "function") {
      dlg.showModal();
    } else if (confirm(`¿Eliminar la sesión "${sess.tema || "Sin título"}" de ${formatCourseShort(course)} (${wk.num_sem || `Sem. ${weekIdx + 1}`})?`)) {
      confirmDeleteMatrixSession();
    } else {
      pendingDeleteMatrixSession = null;
    }
  }

  function cancelDeleteMatrixSession() {
    pendingDeleteMatrixSession = null;
    const dlg = document.getElementById("confirm-delete-session-dialog");
    if (dlg && typeof dlg.close === "function" && dlg.open) {
      dlg.close("cancel");
    }
  }

  function confirmDeleteMatrixSession() {
    if (!pendingDeleteMatrixSession) return;
    const { school, course, weekIdx } = pendingDeleteMatrixSession;
    pendingDeleteMatrixSession = null;

    const dlg = document.getElementById("confirm-delete-session-dialog");
    if (dlg && typeof dlg.close === "function" && dlg.open) {
      dlg.close("confirm");
    }

    const existing = ensureSessionObject(weekIdx, school, course);
    pushUndoSnapshot();
    if (hasSessionContent(existing)) {
      addSessionToReserve(school, course, weekIdx, existing, "Eliminada desde Replicar Clases");
    }
    state.weeks[weekIdx][school][course] = {
      tema: "", actividades: "", avisos: "", avisoDado: false,
      educamos: "", educamosDado: false, imprimir: "", imprimirDado: false,
      sesion: "", preparada: false
    };

    if (
      state.clipboard &&
      state.clipboard.sourceSchool === school &&
      state.clipboard.sourceCourse === course &&
      state.clipboard.sourceWeekIdx === weekIdx
    ) {
      state.clipboard = null;
      updateTopbarBadges();
    }

    persistAll(false);
    renderWorkspace();
    showToast(`🗑️ Sesión eliminada en ${formatCourseShort(course)} (copia en Reserva 📦)`);
  }

  // ==========================================================================
  // RENDERIZADO DE LA VISTA 3: BANCO DE SESIONES (POR CURSO Y TEMA)
  // ==========================================================================

  function ensureLevelBank(level) {
    if (!state.sessionBank[level]) {
      state.sessionBank[level] = deepClone((window.INITIAL_APP_DATA.sessionBank && window.INITIAL_APP_DATA.sessionBank[level]) || []);
    }
    return state.sessionBank[level];
  }

  function renderPlannerBankView(container) {
    const level = state.bankSelectedLevel || "1º ESO";
    const temasList = ensureLevelBank(level);

    const wrap = document.createElement("div");
    wrap.className = "bank-view-container";

    // 1. Barra superior del Banco de Sesiones
    const toolbar = document.createElement("div");
    toolbar.className = "subview-toolbar";
    toolbar.innerHTML = `
      <div class="toolbar-cluster">
        <div class="filter-pill-group" role="tablist" aria-label="Seleccionar nivel del Banco de Sesiones">
          ${COURSE_LEVELS.map(lvl => {
            const tArr = ensureLevelBank(lvl);
            const totalS = tArr.reduce((acc, t) => acc + (t.sessions ? t.sessions.length : 0), 0);
            return `
              <button type="button" class="filter-pill-btn ${lvl === level ? 'active' : ''}" onclick="App.setBankLevel('${lvl}')">
                🎓 ${escapeHTML(lvl.replace("BACHILLERATO", "BAC"))} <span style="opacity:0.75;">(${totalS})</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>

      <div class="toolbar-cluster">
        <button type="button" class="corporate-btn primary" onclick="App.openBankEditTemaModal('${level}', null)">
          ➕ Nuevo Tema / Unidad
        </button>
        <button type="button" class="corporate-btn" onclick="App.openBankDeployCourseModal('${level}')" title="Programar toda la secuencia del curso en uno o varios grupos saltando días no lectivos">
          🚀 Programar Curso en Grupos...
        </button>
      </div>
    `;
    wrap.appendChild(toolbar);

    // 2. Cuerpo con Temas y Sesiones
    const scroll = document.createElement("div");
    scroll.className = "bank-content-scroll";

    let globalSessionNum = 0;

    temasList.forEach((temaObj, tIdx) => {
      const sessions = temaObj.sessions || [];
      if (state.searchQuery) {
        const matchTema = temaObj.title.toLowerCase().includes(state.searchQuery) ||
          sessions.some(s => `${s.tema} ${s.actividades} ${s.avisos} ${s.educamos} ${s.imprimir}`.toLowerCase().includes(state.searchQuery));
        if (!matchTema) return;
      }

      const block = document.createElement("section");
      block.className = "tema-card-block";

      const hdr = document.createElement("div");
      hdr.className = "tema-card-header";
      hdr.innerHTML = `
        <div class="tema-header-left">
          <span class="tema-title-text">📂 ${escapeHTML(temaObj.title)}</span>
          <span class="tema-count-pill">${sessions.length} ${sessions.length === 1 ? "sesión" : "sesiones"}</span>
        </div>
        <div class="tema-header-actions">
          <button type="button" class="corporate-btn primary" onclick="App.openBankDeployTemaModal('${level}', ${tIdx})" title="Copiar este Tema entero a uno o varios grupos (saltando automáticamente días no lectivos y eventos especiales)">
            📦 Copiar Tema Completo a Grupos...
          </button>
          <button type="button" class="corporate-btn" onclick="App.openBankEditSessionModal('${level}', ${tIdx}, null)" title="Añadir nueva sesión a este Tema">
            ➕ Sesión
          </button>
          <button type="button" class="corporate-btn" style="padding-inline:7px;" onclick="App.moveBankTema('${level}', ${tIdx}, -1)" ${tIdx === 0 ? "disabled" : ""} title="Subir tema">⬆️</button>
          <button type="button" class="corporate-btn" style="padding-inline:7px;" onclick="App.moveBankTema('${level}', ${tIdx}, 1)" ${tIdx === temasList.length - 1 ? "disabled" : ""} title="Bajar tema">⬇️</button>
          <button type="button" class="corporate-btn" style="padding-inline:7px;" onclick="App.openBankEditTemaModal('${level}', ${tIdx})" title="Renombrar tema">✏️</button>
          <button type="button" class="corporate-btn" style="padding-inline:7px;color:var(--danger);" onclick="App.deleteBankTema('${level}', ${tIdx})" title="Eliminar tema">🗑️</button>
        </div>
      `;
      block.appendChild(hdr);

      const grid = document.createElement("div");
      grid.className = "tema-sessions-grid";

      sessions.forEach((sObj, sIdx) => {
        globalSessionNum++;
        const sCard = document.createElement("div");
        sCard.className = "bank-session-card";
        sCard.innerHTML = `
          <div class="bank-session-top">
            <div style="display:flex;align-items:center;gap:6px;">
              <span class="bank-session-num">S${globalSessionNum}</span>
              ${sObj.sesion ? `<span class="session-type-pill ${sObj.sesion.toLowerCase().includes('examen') ? 'examen' : 'trabajo'}">${escapeHTML(sObj.sesion)}</span>` : ""}
            </div>
            <div class="bank-session-actions">
              <button type="button" class="matrix-mini-btn" onclick="App.copyBankSessionToClipboard('${level}', ${tIdx}, ${sIdx})" title="Copiar al portapapeles de replicación (📋)">📋</button>
              <button type="button" class="matrix-mini-btn btn-paste-here" onclick="App.openBankDeploySingleSessionModal('${level}', ${tIdx}, ${sIdx})" title="Enviar esta sesión directamente a uno o varios grupos">🚀 Enviar</button>
              <button type="button" class="matrix-mini-btn" onclick="App.moveBankSession('${level}', ${tIdx}, ${sIdx}, -1)" title="Mover sesión antes">◀</button>
              <button type="button" class="matrix-mini-btn" onclick="App.moveBankSession('${level}', ${tIdx}, ${sIdx}, 1)" title="Mover sesión después">▶</button>
              <button type="button" class="matrix-mini-btn" onclick="App.openBankEditSessionModal('${level}', ${tIdx}, ${sIdx})" title="Editar sesión del banco">✏️</button>
              <button type="button" class="matrix-mini-btn" onclick="App.duplicateBankSession('${level}', ${tIdx}, ${sIdx})" title="Duplicar sesión">📄</button>
              <button type="button" class="matrix-mini-btn" style="color:var(--danger);" onclick="App.deleteBankSession('${level}', ${tIdx}, ${sIdx})" title="Eliminar sesión del banco">🗑️</button>
            </div>
          </div>
          <div class="bank-session-tema">${escapeHTML(sObj.tema || "(Sin título)")}</div>
          <div class="bank-session-act">${escapeHTML(sObj.actividades || "")}</div>
          <div class="matrix-meta-pills">
            ${sObj.avisos ? `<span class="mini-meta-tag aviso">📢 ${escapeHTML(sObj.avisos)}</span>` : ""}
            ${sObj.educamos ? `<span class="mini-meta-tag educamos">🏫 ${escapeHTML(sObj.educamos)}</span>` : ""}
            ${sObj.imprimir ? `<span class="mini-meta-tag imprimir">🖨️ ${escapeHTML(sObj.imprimir)}</span>` : ""}
          </div>
        `;
        grid.appendChild(sCard);
      });

      block.appendChild(grid);
      scroll.appendChild(block);
    });

    wrap.appendChild(scroll);
    container.appendChild(wrap);
  }

  function copyBankSessionToClipboard(level, tIdx, sIdx) {
    const temas = ensureLevelBank(level);
    const s = temas[tIdx] && temas[tIdx].sessions[sIdx];
    if (!s) return;
    state.clipboard = {
      tema: s.tema || "",
      actividades: s.actividades || "",
      avisos: s.avisos || "",
      educamos: s.educamos || "",
      imprimir: s.imprimir || "",
      sesion: s.sesion || "",
      preparada: true,
      sourceLabel: `Banco ${level} · ${temas[tIdx].title}`,
      sourceLevel: level
    };
    updateTopbarBadges();
    showToast(`📋 Sesión del Banco copiada. Puedes pegarla en Semanal o Replicar Clases.`);
  }

  // ==========================================================================
  // RENDERIZADO DE LA VISTA 4: CALENDARIO ESCOLAR MENSUAL
  // (Únicamente: Lectivo/No lectivo + Evento especial para 1, varios o todos los grupos)
  // ==========================================================================

  function getDayGroupsFromSchedule(dateStr) {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dow = new Date(y, m - 1, d).getDay(); // 0=Dom, 1=Lun..5=Vie, 6=Sáb
    if (dow < 1 || dow > 4) return { school: null, dayIndex: dow - 1, groups: [] };
    const dayIndex = dow - 1; // 0=Lun, 1=Mar, 2=Mié, 3=Jue
    const school = (dayIndex === 0 || dayIndex === 2) ? "ribarroja" : "manises";
    const mode = (m === 9 || m === 6) ? "intensiva" : "ordinaria";
    const slots = (window.SCHEDULE_TEMPLATES[school] &&
                   window.SCHEDULE_TEMPLATES[school][mode] &&
                   window.SCHEDULE_TEMPLATES[school][mode][dayIndex]) || [];
    const groups = slots.filter(s => s.type === "class").map(s => ({
      course: s.course,
      time: s.time
    }));
    return { school, dayIndex, groups };
  }

  function findWeekIndexByDate(dateStr) {
    for (let i = 0; i < state.weeks.length; i++) {
      const days = getDatesForWeek(i);
      if (days.some(d => d.dateStr === dateStr)) return i;
    }
    return -1;
  }

  function renderPlannerCalendarView(container) {
    const mObj = SCHOOL_MONTHS.find(m => m.key === state.calendarMonthKey) || SCHOOL_MONTHS[2];
    const { year, month } = mObj;

    const wrap = document.createElement("div");
    wrap.className = "calendar-view-container";

    // Barra superior mensual
    const toolbar = document.createElement("div");
    toolbar.className = "subview-toolbar";
    const monthOpts = SCHOOL_MONTHS.map(m =>
      `<option value="${m.key}" ${m.key === state.calendarMonthKey ? "selected" : ""}>🗓️ ${m.name}</option>`
    ).join("");

    toolbar.innerHTML = `
      <div class="toolbar-cluster">
        <button type="button" class="corporate-btn" onclick="App.stepCalendarMonth(-1)">◀ Mes anterior</button>
        <select class="corporate-select" onchange="App.setCalendarMonth(this.value)">${monthOpts}</select>
        <button type="button" class="corporate-btn" onclick="App.stepCalendarMonth(1)">Mes siguiente ▶</button>
      </div>
      <div class="toolbar-cluster" style="font-size:11.5px;color:var(--text-secondary);">
        <span>💡 Usa <strong>🟢 Lectivo / 🏖️ No lectivo</strong> para festivos, y <strong>🎪 Evento / 📌 Hito</strong> para añadir Exámenes, Evaluaciones, Recup. o Claustros sin suspender clase.</span>
      </div>
    `;
    wrap.appendChild(toolbar);

    const scroll = document.createElement("div");
    scroll.className = "cal-grid-scroll";

    // Cabeceras Lunes a Domingo en barra fija superior durante scroll vertical
    const headers = [
      { name: "LUNES", sub: "🔴 Riba-roja", cls: "ribarroja" },
      { name: "MARTES", sub: "🔵 Manises", cls: "manises" },
      { name: "MIÉRCOLES", sub: "🔴 Riba-roja", cls: "ribarroja" },
      { name: "JUEVES", sub: "🔵 Manises", cls: "manises" },
      { name: "VIERNES", sub: "☕ Planificación", cls: "" },
      { name: "SÁB", sub: "", cls: "" },
      { name: "DOM", sub: "", cls: "" }
    ];
    const stickyBar = document.createElement("div");
    stickyBar.className = "cal-weekday-sticky-bar";
    headers.forEach(h => {
      const hEl = document.createElement("div");
      hEl.className = `cal-weekday-hdr ${h.cls}`;
      hEl.innerHTML = `<span>${h.name}</span><span style="font-size:9.5px;opacity:0.85;">${h.sub}</span>`;
      stickyBar.appendChild(hEl);
    });
    scroll.appendChild(stickyBar);

    const grid = document.createElement("div");
    grid.className = "cal-month-grid";

    const firstDow = new Date(year, month - 1, 1).getDay();
    const startCol = (firstDow === 0) ? 7 : firstDow;
    for (let p = 1; p < startCol; p++) {
      const empty = document.createElement("div");
      empty.className = "cal-day-card other-month";
      grid.appendChild(empty);
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const dow = new Date(year, month - 1, d).getDay();
      const isWeekend = (dow === 0 || dow === 6);
      const wIdx = findWeekIndexByDate(dateStr);
      const { school, groups } = getDayGroupsFromSchedule(dateStr);

      const daySchool = (dow === 1 || dow === 3) ? "ribarroja" :
                        (dow === 2 || dow === 4) ? "manises" :
                        (dow === 5) ? "planificacion" : "";

      const isNoLectivo = !!(state.holidays && state.holidays[dateStr]) ||
        (state.calendarEvents[dateStr] && (state.calendarEvents[dateStr].type === "no_lectivo" || state.calendarEvents[dateStr].type === "festivo" || state.calendarEvents[dateStr].classesHeld === false));
      const calEv = state.calendarEvents[dateStr];
      const hasSpecialEvent = !!(calEv && calEv.type === "evento");
      const suspendedList = (calEv && Array.isArray(calEv.suspendedGroups)) ? calEv.suspendedGroups : [];
      const dayMarks = !isWeekend ? getDayMarks(dateStr) : [];

      const card = document.createElement("div");
      card.className = "cal-day-card" +
        (daySchool && !isWeekend ? ` school-${daySchool}` : "") +
        (isWeekend ? " weekend" : "") +
        (isNoLectivo && !isWeekend ? " is-no-lectivo" : "") +
        (hasSpecialEvent && !isNoLectivo ? " has-special-event" : "") +
        (dayMarks.length > 0 && !isWeekend ? ` has-day-marks mark-${dayMarks[0].category}` : "");

      let bodyHtml = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
          <div style="display:flex;align-items:center;gap:4px;">
            ${!isWeekend && dow === 5 ? `<button type="button" class="cal-friday-mark-btn" onclick="App.openCalendarDayModal('${dateStr}')" title="Añadir hito de programación (Exámenes, Evaluación, Claustro...)">📌 Hito</button>` : ""}
            ${wIdx !== -1 ? `<button type="button" class="cal-week-tag" onclick="App.selectWeek(${wIdx});App.switchPlannerView('semanal');" title="Abrir Semana ${wIdx + 1} en vista Semanal">Sem. ${wIdx + 1}</button>` : ""}
          </div>
        </div>
      `;

      const renderMarksStripHtml = (marksList) => {
        if (!marksList || marksList.length === 0) return "";
        return `
          <div class="cal-marks-strip">
            ${marksList.map(m => {
              const catMeta = DAY_MARK_CATEGORIES[m.category] || DAY_MARK_CATEGORIES.otro;
              return `<button type="button" class="day-mark-pill compact cat-${escapeHTML(m.category)}" onclick="App.openCalendarDayModal('${dateStr}')" title="${escapeHTML(catMeta.label)}: ${escapeHTML(m.title)}">${catMeta.icon} ${escapeHTML(m.title)}</button>`;
            }).join("")}
          </div>
        `;
      };

      if (!isWeekend && school) {
        // Los 2 únicos botones solicitados: 1) Lectivo/No lectivo y 2) Evento / Hito
        bodyHtml += `
          <div class="cal-two-actions-row">
            <button type="button" class="cal-action-btn ${isNoLectivo ? 'is-no-lectivo' : 'is-lectivo'}" onclick="App.toggleDayNoLectivo('${dateStr}')">
              ${isNoLectivo ? "🏖️ No lectivo" : "🟢 Lectivo"}
            </button>
            <button type="button" class="cal-action-btn ${(hasSpecialEvent || dayMarks.length > 0) ? 'has-evento' : ''}" onclick="App.openCalendarDayModal('${dateStr}')">
              ${dayMarks.length > 0 && !hasSpecialEvent ? `📌 Hitos (${dayMarks.length})` : "🎪 Evento / 📌"}
            </button>
          </div>
        `;

        if (isNoLectivo) {
          bodyHtml += `<div class="cal-event-pill" style="background:#fef3c7;border-color:#fde68a;color:#92400e;">🏖️ ${escapeHTML((calEv && calEv.title) || "Día No Lectivo")}</div>`;
        } else if (hasSpecialEvent) {
          bodyHtml += `<div class="cal-event-pill">🎪 ${escapeHTML(calEv.title || "Evento especial")}</div>`;
        }

        bodyHtml += renderMarksStripHtml(dayMarks);

        // Chips de los grupos de ese día (tachados en rojo si no tienen clase)
        bodyHtml += `<div class="cal-groups-wrap">`;
        groups.forEach(g => {
          const isSusp = isNoLectivo || (hasSpecialEvent && suspendedList.includes(g.course));
          bodyHtml += `<span class="cal-grp-chip ${isSusp ? 'suspended' : ''}" title="${escapeHTML(g.course)} (${g.time})">${isSusp ? "🚫 " : ""}${escapeHTML(formatCourseShort(g.course))}</span>`;
        });
        bodyHtml += `</div>`;
      } else if (dow === 5) {
        bodyHtml += renderMarksStripHtml(dayMarks);
        bodyHtml += `<div style="font-size:10.5px;color:var(--text-muted);margin-top:auto;">☕ Planificación docente</div>`;
      }

      card.innerHTML = bodyHtml;
      grid.appendChild(card);
    }

    scroll.appendChild(grid);
    wrap.appendChild(scroll);
    container.appendChild(wrap);
  }

  function toggleDayNoLectivo(dateStr) {
    pushUndoSnapshot();
    const isCurrentlyNoLectivo = !!(state.holidays && state.holidays[dateStr]) ||
      (state.calendarEvents[dateStr] && (state.calendarEvents[dateStr].type === "no_lectivo" || state.calendarEvents[dateStr].type === "festivo" || state.calendarEvents[dateStr].classesHeld === false));

    if (isCurrentlyNoLectivo) {
      delete state.holidays[dateStr];
      delete state.calendarEvents[dateStr];
      showToast(`🟢 ${dateStr} marcado como Día Lectivo`);
    } else {
      const { school, groups } = getDayGroupsFromSchedule(dateStr);
      state.holidays[dateStr] = true;
      state.calendarEvents[dateStr] = {
        school: school || "ambos",
        type: "no_lectivo",
        title: "Día No Lectivo",
        classesHeld: false,
        suspendedGroups: groups.map(g => g.course)
      };
      showToast(`🏖️ ${dateStr} marcado como Día No Lectivo`);
    }
    persistAll(false);
    renderWorkspace();
  }

  // ==========================================================================
  // APARTADO 2: TAREAS (CONTROL SEMANAL, IMPRIMIR SEM. ANTERIOR, EDUCAMOS, NEAE)
  // ==========================================================================

  function hasNeaeProfile(groupId) {
    const txt = state.tareas.neaeProfiles && state.tareas.neaeProfiles[groupId];
    return !!(txt && txt.trim().length > 0);
  }

  function isWeekActiveInTareas(weekIdx) {
    if (weekIdx === state.currentWeekIndex) return true;
    const d = state.tareas.weeksData[String(weekIdx)];
    if (!d) return false;
    const hasDone = d.state && Object.values(d.state).some(v => v === true);
    const hasNotes = d.notes && Object.values(d.notes).some(n => n && n.trim().length > 0);
    const hasTexts = d.taskTexts && Object.values(d.taskTexts).some(t => t && t.trim().length > 0);
    return !!(hasDone || hasNotes || hasTexts);
  }

  function syncTareasOverdueForWeek(weekIdx) {
    if (weekIdx <= 0) return;
    const prevIdx = weekIdx - 1;
    if (!isWeekActiveInTareas(prevIdx)) return;

    const prevW = ensureTareasWeekData(prevIdx);
    const currW = ensureTareasWeekData(weekIdx);

    ALL_GROUPS.forEach(grp => {
      // 1. Tareas estándar (mat, print, platform, grades)
      ["mat", "print", "platform", "grades"].forEach(t => {
        const key = `${grp.id}_${t}`;
        const hadTask = (t === "mat") || !!(prevW.taskTexts && prevW.taskTexts[key] && prevW.taskTexts[key].trim());
        if (!hadTask) {
          delete currW.overdue[key];
          return;
        }
        const prevDone = !!(prevW.state && prevW.state[key]);
        if (!prevDone && !currW.state[key]) {
          currW.overdue[key] = true;
        } else if (prevDone && currW.overdue[key] && !currW.state[key]) {
          delete currW.overdue[key];
        }
      });

      // 2. NEAE
      if (hasNeaeProfile(grp.id)) {
        const key = `${grp.id}_neae`;
        const prevDone = !!(prevW.state && prevW.state[key]);
        if (!prevDone && !currW.state[key]) {
          currW.overdue[key] = true;
        } else if (prevDone && currW.overdue[key] && !currW.state[key]) {
          delete currW.overdue[key];
        }
      }

      // 3. Educamos de la semana previa
      const prevSess = ensureSessionObject(prevIdx, grp.school, grp.course);
      const currSess = ensureSessionObject(weekIdx, grp.school, grp.course);
      const eduKey = `${grp.id}_educamos`;
      if (prevSess && prevSess.educamos && prevSess.educamos.trim()) {
        if (!prevSess.educamosDado && (!currSess || !currSess.educamosDado)) {
          currW.overdue[eduKey] = true;
        } else if (prevSess.educamosDado) {
          delete currW.overdue[eduKey];
        }
      }
    });
  }

  // Evalúa el estado de IMPRIMIR para un grupo en la semana weekIdx:
  // REGLA CLAVE DEL USUARIO: Lo que se pone en "Imprimir" de una clase (en Sem. W+1)
  // se marca como pendiente de imprimir la semana de antes (en Sem. W).
  // Además, si en la propia Sem. W quedó algo de "Imprimir" sin marcar, avisa como urgente.
  // Determina a qué semana de clase del Planner se vincula la columna de Fotocopias/Impresión:
  // - Si la clase de esta semana (W) tiene impresión pendiente de marcar, muestra W.
  // - Si la clase de la próxima semana (W+1) tiene impresión programada, la muestra en W (la semana anterior a la clase).
  // - Si W ya tenía impresión marcada como hecha (y W+1 está vacía), muestra W.
  // - Si ambas están vacías y el docente escribe desde Tareas en la semana W, vincula con la clase de la semana W.
  function resolvePrintTargetWeek(grp, weekIdx) {
    const currSess = ensureSessionObject(weekIdx, grp.school, grp.course);
    const nextW = Math.min(weekIdx + 1, state.weeks.length - 1);
    const nextSess = (nextW > weekIdx) ? ensureSessionObject(nextW, grp.school, grp.course) : null;

    const hasCurr = !!(currSess && currSess.imprimir && currSess.imprimir.trim());
    const currDone = !!(currSess && currSess.imprimirDado);
    const hasNext = !!(nextSess && nextSess.imprimir && nextSess.imprimir.trim());

    if (hasCurr && !currDone) return weekIdx;
    if (hasNext) return nextW;
    if (hasCurr) return weekIdx;
    return weekIdx;
  }

  function getGroupPrintStatusForTareas(grp, weekIdx) {
    const nextWeekIdx = weekIdx + 1;
    const nextSess = (nextWeekIdx < state.weeks.length)
      ? ensureSessionObject(nextWeekIdx, grp.school, grp.course)
      : null;
    const currSess = ensureSessionObject(weekIdx, grp.school, grp.course);

    const hasNextWeekPrint = !!(nextSess && nextSess.imprimir && nextSess.imprimir.trim());
    const nextWeekDone = !!(nextSess && nextSess.imprimirDado);

    const hasCurrWeekUnprinted = !!(currSess && currSess.imprimir && currSess.imprimir.trim() && !currSess.imprimirDado);
    const hasCurrWeekPrinted = !!(currSess && currSess.imprimir && currSess.imprimir.trim() && currSess.imprimirDado);

    return {
      hasNextWeekPrint,
      nextWeekIdx,
      nextWeekText: hasNextWeekPrint ? nextSess.imprimir.trim() : "",
      nextWeekTema: (nextSess && nextSess.tema) ? nextSess.tema.trim() : "",
      nextWeekDone,
      hasCurrWeekUnprinted,
      hasCurrWeekPrinted,
      currWeekText: (currSess && currSess.imprimir) ? currSess.imprimir.trim() : "",
      isPendingAny: (hasNextWeekPrint && !nextWeekDone) || hasCurrWeekUnprinted
    };
  }

  function isGroupInLongTermTask(task, grpOrId) {
    const grp = typeof grpOrId === "string" ? getGroupById(grpOrId) : grpOrId;
    if (!grp || !task) return false;
    if (!task.scope || task.scope === "all") return true;
    if (task.scope === "Riba-roja") return grp.center === "Riba-roja";
    if (task.scope === "Manises") return grp.center === "Manises";
    if (task.scope === "manual") return Array.isArray(task.groups) && task.groups.includes(grp.id);
    if (task.scope === grp.level) return true;
    return false;
  }

  function isGroupPendingInTareas(groupId, weekIdx) {
    const grp = getGroupById(groupId);
    if (!grp) return false;

    if (state.activeModule === "tareas" && state.tareasView === "largo") {
      const tasks = state.tareas.longTermTasks || [];
      const ltState = state.tareas.longTermState || {};
      for (const t of tasks) {
        if (isGroupInLongTermTask(t, grp) && !ltState[`${t.id}_${groupId}`]) {
          return true;
        }
      }
      return false;
    }

    const teachStatus = getGroupTeachingStatus(grp.school, grp.course, weekIdx);
    const wData = ensureTareasWeekData(weekIdx);
    const pStatus = getGroupPrintStatusForTareas(grp, weekIdx);

    // 1. Impresiones pendientes (de la clase de la próxima semana o de esta)
    if (pStatus.isPendingAny) return true;

    // 2. Material Base y Adaptación NEAE (si es día lectivo para el grupo)
    if (teachStatus.isLectivo) {
      if (!wData.state[`${groupId}_mat`]) return true;
      if (hasNeaeProfile(groupId) && !wData.state[`${groupId}_neae`]) return true;
    }

    // 3. Avisos de clase y Avisos Educamos vinculados a la clase de esta semana
    const currSess = ensureSessionObject(weekIdx, grp.school, grp.course);
    if (currSess && currSess.avisos && currSess.avisos.trim() && !currSess.avisoDado) {
      return true;
    }
    if (currSess && currSess.educamos && currSess.educamos.trim() && !currSess.educamosDado) {
      return true;
    }

    // 4. Plataformas y Cuaderno / Notas (desvinculadas de las clases)
    for (const t of ["platform", "grades"]) {
      const key = `${groupId}_${t}`;
      if (wData.taskTexts[key] && wData.taskTexts[key].trim() && !wData.state[key]) {
        return true;
      }
    }

    return false;
  }

  function getFilteredTareasGroups(weekIdx, isLongTerm = false) {
    const wData = ensureTareasWeekData(weekIdx);
    return ALL_GROUPS.filter(g => {
      if (state.tareasFilter === "Riba-roja" && g.center !== "Riba-roja") return false;
      if (state.tareasFilter === "Manises" && g.center !== "Manises") return false;
      if (!isLongTerm && state.tareasFilter === "neae" && !hasNeaeProfile(g.id)) return false;
      if (state.tareasFilter === "pending" && !isGroupPendingInTareas(g.id, weekIdx)) return false;
      if (state.tareasHideDone && !isGroupPendingInTareas(g.id, weekIdx)) return false;
      if (state.searchQuery) {
        const sess = ensureSessionObject(weekIdx, g.school, g.course);
        const pSt = getGroupPrintStatusForTareas(g, weekIdx);
        const hay = `${g.shortName} ${sess.tema} ${sess.avisos} ${sess.educamos} ${pSt.nextWeekText} ${pSt.currWeekText} ${wData.notes[g.id] || ""}`.toLowerCase();
        if (!hay.includes(state.searchQuery)) return false;
      }
      return true;
    });
  }

  function renderNeaeCellContent(groupId, weekIdx) {
    if (!hasNeaeProfile(groupId)) {
      return `<span class="neae-static-empty" title="Sin alumnos NEAE configurados en este grupo">—</span>`;
    }
    const wData = ensureTareasWeekData(weekIdx);
    const key = `${groupId}_neae`;
    const isDone = !!wData.state[key];
    const isOverdue = !!wData.overdue[key] && !isDone;

    let btnClass = "status-btn";
    let labelHtml = "";
    if (isDone) {
      btnClass += " checked";
      labelHtml = `<span>✓ Adaptado</span>`;
    } else if (isOverdue) {
      btnClass += " overdue";
      labelHtml = `<span class="overdue-tag">⚠️ ATRASADO</span><span>Saldar NEAE</span>`;
    } else {
      btnClass += " neae-pending";
      labelHtml = `<span>Adaptar NEAE</span>`;
    }

    return `
      <button type="button" class="${btnClass}" onclick="App.toggleTareasCheck('${groupId}','neae')">
        ${labelHtml}
      </button>
    `;
  }

  // Renderiza el botón inferior de una celda vinculada con la clase del Planner (Impresión, Avisos, Educamos)
  function renderPlannerLinkedButtonContent(groupId, fieldType, targetWeekIdx, viewWeekIdx) {
    const grp = getGroupById(groupId);
    if (!grp) return "";
    const sess = ensureSessionObject(targetWeekIdx, grp.school, grp.course);
    const wData = ensureTareasWeekData(viewWeekIdx);

    let textVal = "";
    let isDone = false;
    let isOverdue = false;
    let idleHint = "";
    let pendingLabel = "";
    let doneLabel = "";
    let overdueActionLabel = "";

    const inputId = `input-linked-${groupId}-${fieldType}`;

    if (fieldType === "imprimir") {
      textVal = (sess && sess.imprimir) ? sess.imprimir.trim() : "";
      isDone = !!(sess && sess.imprimirDado);
      isOverdue = !!(wData.overdue && wData.overdue[`${groupId}_print`]) && !isDone;
      idleHint = "imprimir";
      const weekSuffix = (targetWeekIdx !== viewWeekIdx) ? ` (Sem. ${targetWeekIdx + 1})` : "";
      pendingLabel = `Fotocopiar${weekSuffix}`;
      doneLabel = `✓ Impreso${weekSuffix}`;
      overdueActionLabel = "Saldar copia";
    } else if (fieldType === "avisos") {
      textVal = (sess && sess.avisos) ? sess.avisos.trim() : "";
      isDone = !!(sess && sess.avisoDado);
      isOverdue = !!(wData.overdue && wData.overdue[`${groupId}_avisos`]) && !isDone;
      idleHint = "avisar en clase";
      pendingLabel = "Dar aviso";
      doneLabel = "✓ Dicho";
      overdueActionLabel = "Saldar aviso";
    } else if (fieldType === "educamos") {
      textVal = (sess && sess.educamos) ? sess.educamos.trim() : "";
      isDone = !!(sess && sess.educamosDado);
      isOverdue = !!(wData.overdue && wData.overdue[`${groupId}_educamos`]) && !isDone;
      idleHint = "avisar en Educamos";
      pendingLabel = "Avisar Educamos";
      doneLabel = "✓ Enviado";
      overdueActionLabel = "Saldar Educamos";
    }

    if (!textVal) {
      return `
        <div class="task-btn-idle" onclick="document.getElementById('${inputId}')?.focus()" title="Escribe arriba qué ${idleHint} para activar el botón (sincronizado con la clase en el Planner)">
          —
        </div>
      `;
    }

    let btnClass = "status-btn";
    let labelHtml = "";
    if (isDone) {
      btnClass += " checked";
      labelHtml = `<span>${doneLabel}</span>`;
    } else if (isOverdue) {
      btnClass += " overdue";
      labelHtml = `<span class="overdue-tag">⚠️ ATRASADO</span><span>${overdueActionLabel}</span>`;
    } else {
      labelHtml = `<span>${pendingLabel}</span>`;
    }

    return `
      <button type="button" class="${btnClass}" onclick="App.togglePlannerLinkedTaskDone('${groupId}','${fieldType}',${targetWeekIdx})">
        ${labelHtml}
      </button>
    `;
  }

  function renderPlannerLinkedTaskCell(grp, fieldType, viewWeekIdx) {
    const targetWeekIdx = (fieldType === "imprimir")
      ? resolvePrintTargetWeek(grp, viewWeekIdx)
      : viewWeekIdx;
    const sess = ensureSessionObject(targetWeekIdx, grp.school, grp.course);

    let textVal = "";
    let placeholder = "";
    let titleTip = "";

    if (fieldType === "imprimir") {
      textVal = (sess && sess.imprimir) || "";
      placeholder = (targetWeekIdx !== viewWeekIdx)
        ? `Fotocopiar (Sem. ${targetWeekIdx + 1})...`
        : "Fotocopiar...";
      titleTip = `Vinculado con el apartado Imprimir de ${grp.shortName} en la Semana ${targetWeekIdx + 1}`;
    } else if (fieldType === "avisos") {
      textVal = (sess && sess.avisos) || "";
      placeholder = "Avisos clase...";
      titleTip = `Vinculado con los Avisos de clase de ${grp.shortName} en la Semana ${targetWeekIdx + 1}`;
    } else if (fieldType === "educamos") {
      textVal = (sess && sess.educamos) || "";
      placeholder = "Avisar Educamos...";
      titleTip = `Vinculado con Educamos de ${grp.shortName} en la Semana ${targetWeekIdx + 1}`;
    }

    const hasContentClass = textVal.trim().length > 0 ? " has-content" : "";
    const inputId = `input-linked-${grp.id}-${fieldType}`;
    const wrapId = `btn-wrap-linked-${grp.id}-${fieldType}`;

    return `
      <td class="weekly-task-col">
        <div class="task-cell-box">
          <input
            type="text"
            id="${inputId}"
            data-target-week="${targetWeekIdx}"
            class="task-inline-input${hasContentClass}"
            placeholder="${placeholder}"
            value="${escapeHTML(textVal)}"
            title="${escapeHTML(titleTip)}"
            oninput="App.onPlannerLinkedTaskInput('${grp.id}','${fieldType}',${targetWeekIdx},this.value)"
          />
          <div id="${wrapId}" class="task-btn-wrap">
            ${renderPlannerLinkedButtonContent(grp.id, fieldType, targetWeekIdx, viewWeekIdx)}
          </div>
        </div>
      </td>
    `;
  }

  // Renderiza el botón inferior de una celda semanal desvinculada de las clases (Plataformas, Cuaderno/Notas)
  function renderUnlinkedTaskButtonContent(groupId, taskType, platformLabel, weekIdx) {
    const wData = ensureTareasWeekData(weekIdx);
    const key = `${groupId}_${taskType}`;
    const textVal = (wData.taskTexts && wData.taskTexts[key]) ? wData.taskTexts[key].trim() : "";
    const inputId = `input-unlinked-${key}`;

    if (!textVal) {
      const hint = taskType === "platform" ? "subir" : "evaluar";
      return `
        <div class="task-btn-idle" onclick="document.getElementById('${inputId}')?.focus()" title="Escribe arriba qué ${hint} para activar el botón de pendiente">
          —
        </div>
      `;
    }

    const isDone = !!(wData.state && wData.state[key]);
    const isOverdue = !!(wData.overdue && wData.overdue[key]) && !isDone;

    let btnClass = "status-btn";
    let labelHtml = "";
    if (isDone) {
      btnClass += " checked";
      const doneText = taskType === "platform" ? `✓ En ${platformLabel}` : "✓ Al día";
      labelHtml = `<span>${doneText}</span>`;
    } else if (isOverdue) {
      btnClass += " overdue";
      labelHtml = `<span class="overdue-tag">⚠️ ATRASADO</span><span>Saldar deuda</span>`;
    } else {
      const pendText = taskType === "platform" ? `Subir ${platformLabel}` : "Poner notas";
      labelHtml = `<span>${pendText}</span>`;
    }

    return `
      <button type="button" class="${btnClass}" onclick="App.toggleTareasCheck('${groupId}','${taskType}')">
        ${labelHtml}
      </button>
    `;
  }

  function renderUnlinkedConditionalTaskCell(grp, taskType, platformLabel, weekIdx) {
    const wData = ensureTareasWeekData(weekIdx);
    const key = `${grp.id}_${taskType}`;
    const textVal = (wData.taskTexts && wData.taskTexts[key]) || "";
    const hasContentClass = textVal.trim().length > 0 ? " has-content" : "";
    const placeholder = taskType === "platform" ? `Subir ${platformLabel}...` : "Poner notas...";
    const inputId = `input-unlinked-${key}`;
    const wrapId = `btn-wrap-unlinked-${key}`;

    return `
      <td class="weekly-task-col">
        <div class="task-cell-box">
          <input
            type="text"
            id="${inputId}"
            class="task-inline-input${hasContentClass}"
            placeholder="${placeholder}"
            value="${escapeHTML(textVal)}"
            title="Tarea semanal personal (desvinculada de las clases)"
            oninput="App.onStandardTaskTextInput('${grp.id}','${taskType}',this.value)"
          />
          <div id="${wrapId}" class="task-btn-wrap">
            ${renderUnlinkedTaskButtonContent(grp.id, taskType, platformLabel, weekIdx)}
          </div>
        </div>
      </td>
    `;
  }

  function updateTareasColumnStatusTags() {
    if (state.activeModule !== "tareas" || state.tareasView !== "semanal") return;
    const weekIdx = state.currentWeekIndex;
    const wData = ensureTareasWeekData(weekIdx);
    const targetGroups = getFilteredTareasGroups(weekIdx, false);

    const checkColDone = (colType) => {
      if (targetGroups.length === 0) return false;
      if (colType === "mat") {
        return targetGroups.every(g => !!wData.state[`${g.id}_mat`]);
      }
      if (colType === "neae") {
        const neaeGroups = targetGroups.filter(g => hasNeaeProfile(g.id));
        if (neaeGroups.length === 0) return false;
        return neaeGroups.every(g => !!wData.state[`${g.id}_neae`]);
      }
      if (colType === "print") {
        const active = targetGroups.filter(g => {
          const tW = resolvePrintTargetWeek(g, weekIdx);
          const s = ensureSessionObject(tW, g.school, g.course);
          return !!(s && s.imprimir && s.imprimir.trim());
        });
        if (active.length === 0) return false;
        return active.every(g => {
          const tW = resolvePrintTargetWeek(g, weekIdx);
          const s = ensureSessionObject(tW, g.school, g.course);
          return !!(s && s.imprimirDado);
        });
      }
      if (colType === "avisos") {
        const active = targetGroups.filter(g => {
          const s = ensureSessionObject(weekIdx, g.school, g.course);
          return !!(s && s.avisos && s.avisos.trim());
        });
        if (active.length === 0) return false;
        return active.every(g => {
          const s = ensureSessionObject(weekIdx, g.school, g.course);
          return !!(s && s.avisoDado);
        });
      }
      if (colType === "educamos") {
        const active = targetGroups.filter(g => {
          const s = ensureSessionObject(weekIdx, g.school, g.course);
          return !!(s && s.educamos && s.educamos.trim());
        });
        if (active.length === 0) return false;
        return active.every(g => {
          const s = ensureSessionObject(weekIdx, g.school, g.course);
          return !!(s && s.educamosDado);
        });
      }
      if (colType === "platform" || colType === "grades") {
        const active = targetGroups.filter(g => {
          const k = `${g.id}_${colType}`;
          return !!(wData.taskTexts && wData.taskTexts[k] && wData.taskTexts[k].trim());
        });
        if (active.length === 0) return false;
        return active.every(g => !!wData.state[`${g.id}_${colType}`]);
      }
      return false;
    };

    ["mat", "neae", "print", "avisos", "educamos", "platform", "grades"].forEach(col => {
      const el = document.getElementById(`colStatus-${col}`);
      if (!el) return;
      const done = checkColDone(col);
      el.textContent = done ? "✓ LISTA" : "";
      el.classList.toggle("active", done);
    });
  }

  function renderTareasWeeklyView(container) {
    const weekIdx = state.currentWeekIndex;
    const wData = ensureTareasWeekData(weekIdx);

    const wrap = document.createElement("div");
    wrap.className = "tareas-view-container";

    // 1. Barra de Filtros y Acciones de Tareas Semanales
    const pendingCount = ALL_GROUPS.filter(g => isGroupPendingInTareas(g.id, weekIdx)).length;
    const toolbar = document.createElement("div");
    toolbar.className = "subview-toolbar";
    toolbar.innerHTML = `
      <div class="toolbar-cluster">
        <div class="filter-pill-group" role="group" aria-label="Filtrar grupos en Tareas">
          <button type="button" class="filter-pill-btn ${state.tareasFilter === 'all' ? 'active' : ''}" onclick="App.setTareasFilter('all')">Todos (17)</button>
          <button type="button" class="filter-pill-btn ${state.tareasFilter === 'Riba-roja' ? 'active' : ''}" onclick="App.setTareasFilter('Riba-roja')">🔴 Riba-roja (9)</button>
          <button type="button" class="filter-pill-btn ${state.tareasFilter === 'Manises' ? 'active' : ''}" onclick="App.setTareasFilter('Manises')">🔵 Manises (8)</button>
          <button type="button" class="filter-pill-btn ${state.tareasFilter === 'neae' ? 'active' : ''}" onclick="App.setTareasFilter('neae')">🟣 NEAE</button>
          <button type="button" class="filter-pill-btn ${state.tareasFilter === 'pending' ? 'active' : ''}" onclick="App.setTareasFilter('pending')">⏳ Pendientes (${pendingCount})</button>
        </div>

        <button type="button" class="corporate-btn ${state.tareasHideDone ? 'primary' : ''}" onclick="App.toggleTareasHideDone()">
          ${state.tareasHideDone ? "👁️ Ver todos" : "⏳ Ocultar hechos"}
        </button>
      </div>

      <div class="toolbar-cluster" style="font-size:11px;color:var(--text-secondary);">
        <span>🔗 <strong>Fotocopias, Avisos y Educamos</strong> están sincronizados en tiempo real con la clase correspondiente del Planner.</span>
      </div>
    `;
    wrap.appendChild(toolbar);

    // 2. Tabla de Control Semanal con el estilo de columnas clásico armonizado
    const scroll = document.createElement("div");
    scroll.className = "tareas-table-scroll";

    const table = document.createElement("table");
    table.className = "corporate-tasks-table";

    table.innerHTML = `
      <thead>
        <tr>
          <th class="col-center">CENTRO</th>
          <th class="col-group">GRUPO Y NECESIDADES NEAE</th>

          <th class="weekly-task-col">
            <div class="th-content">
              <div class="th-title-line">
                <span>1. MAT. BASE</span>
                <span id="colStatus-mat" class="col-status-tag"></span>
              </div>
              <button type="button" class="th-action-btn" onclick="App.bulkToggleTareasColumn('mat')">✓ Todos</button>
            </div>
          </th>

          <th class="weekly-task-col th-neae">
            <div class="th-content">
              <div class="th-title-line">
                <span>2. ADAPT. NEAE</span>
                <span id="colStatus-neae" class="col-status-tag"></span>
              </div>
              <button type="button" class="th-action-btn" onclick="App.bulkToggleTareasColumn('neae')">✓ Todos</button>
            </div>
          </th>

          <th class="weekly-task-col">
            <div class="th-content">
              <div class="th-title-line">
                <span>3. FOTOCOPIAS</span>
                <span id="colStatus-print" class="col-status-tag"></span>
              </div>
              <button type="button" class="th-action-btn" onclick="App.bulkToggleTareasColumn('print')">✓ Todos</button>
            </div>
          </th>

          <th class="weekly-task-col">
            <div class="th-content">
              <div class="th-title-line">
                <span>4. AVISOS CLASE</span>
                <span id="colStatus-avisos" class="col-status-tag"></span>
              </div>
              <button type="button" class="th-action-btn" onclick="App.bulkToggleTareasColumn('avisos')">✓ Todos</button>
            </div>
          </th>

          <th class="weekly-task-col">
            <div class="th-content">
              <div class="th-title-line">
                <span>5. AVISOS EDUCAMOS</span>
                <span id="colStatus-educamos" class="col-status-tag"></span>
              </div>
              <button type="button" class="th-action-btn" onclick="App.bulkToggleTareasColumn('educamos')">✓ Todos</button>
            </div>
          </th>

          <th class="weekly-task-col">
            <div class="th-content">
              <div class="th-title-line">
                <span>6. PLATAFORMAS</span>
                <span id="colStatus-platform" class="col-status-tag"></span>
              </div>
              <button type="button" class="th-action-btn" onclick="App.bulkToggleTareasColumn('platform')">✓ Todos</button>
            </div>
          </th>

          <th class="weekly-task-col">
            <div class="th-content">
              <div class="th-title-line">
                <span>7. CUADERNO / NOTAS</span>
                <span id="colStatus-grades" class="col-status-tag"></span>
              </div>
              <button type="button" class="th-action-btn" onclick="App.bulkToggleTareasColumn('grades')">✓ Todos</button>
            </div>
          </th>

          <th class="note-cell">NOTAS / CASOS PUNTUALES</th>
        </tr>
      </thead>
    `;

    const tbody = document.createElement("tbody");
    const visibleGroups = getFilteredTareasGroups(weekIdx, false);

    if (visibleGroups.length === 0) {
      const emptyTr = document.createElement("tr");
      emptyTr.innerHTML = `
        <td colspan="10" style="text-align:center; padding:38px 20px; background:#f0fdf4; color:#15803d; font-weight:700;">
          🎉 ¡Todo al día! No quedan tareas pendientes con el filtro seleccionado.
        </td>
      `;
      tbody.appendChild(emptyTr);
    } else {
      visibleGroups.forEach(grp => {
        const tr = document.createElement("tr");
        const badgeClass = grp.school === "ribarroja" ? "badge-ribarroja" : "badge-manises";
        const daysLabel = grp.school === "ribarroja" ? "L/X" : "M/J";
        const platformLabel = grp.school === "ribarroja" ? "Teams" : "Classroom";
        const neaeVal = (state.tareas.neaeProfiles && state.tareas.neaeProfiles[grp.id]) || "";
        const noteVal = wData.notes[grp.id] || "";

        // 1. Material Base
        const matKey = `${grp.id}_mat`;
        const matDone = !!wData.state[matKey];
        const matOver = !!wData.overdue[matKey] && !matDone;
        let matBtnCls = "status-btn";
        let matLabel = `<span>Crear Base</span>`;
        if (matDone) {
          matBtnCls += " checked";
          matLabel = `<span>✓ Listo</span>`;
        } else if (matOver) {
          matBtnCls += " overdue";
          matLabel = `<span class="overdue-tag">⚠️ ATRASADO</span><span>Saldar deuda</span>`;
        }

        tr.innerHTML = `
          <td class="col-center">
            <span class="center-badge ${badgeClass}">${grp.center} (${daysLabel})</span>
          </td>
          <td class="col-group">
            <div class="group-name-header">
              <span class="group-name">${escapeHTML(grp.shortName)}</span>
            </div>
            <textarea
              class="neae-textarea"
              placeholder="Necesidades NEAE (ej. 2 Dislexia, 1 TDAH)..."
              oninput="App.onNeaeTextareaInput('${grp.id}', this.value)"
            >${escapeHTML(neaeVal)}</textarea>
          </td>

          <td class="weekly-task-col">
            <button type="button" class="${matBtnCls}" onclick="App.toggleTareasCheck('${grp.id}','mat')">
              ${matLabel}
            </button>
          </td>

          <td id="neae-cell-${grp.id}" class="weekly-task-col td-neae">
            ${renderNeaeCellContent(grp.id, weekIdx)}
          </td>

          ${renderPlannerLinkedTaskCell(grp, "imprimir", weekIdx)}
          ${renderPlannerLinkedTaskCell(grp, "avisos", weekIdx)}
          ${renderPlannerLinkedTaskCell(grp, "educamos", weekIdx)}

          ${renderUnlinkedConditionalTaskCell(grp, "platform", platformLabel, weekIdx)}
          ${renderUnlinkedConditionalTaskCell(grp, "grades", platformLabel, weekIdx)}

          <td class="note-cell">
            <input
              type="text"
              class="note-input"
              placeholder="Notas puntuales..."
              value="${escapeHTML(noteVal)}"
              oninput="App.onTareasNoteInput('${grp.id}', this.value)"
            />
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    table.appendChild(tbody);
    scroll.appendChild(table);
    wrap.appendChild(scroll);
    container.appendChild(wrap);
    updateTareasColumnStatusTags();
  }

  function onNeaeTextareaInput(groupId, val) {
    if (!val || !val.trim()) {
      delete state.tareas.neaeProfiles[groupId];
    } else {
      state.tareas.neaeProfiles[groupId] = val;
    }
    const cell = document.getElementById(`neae-cell-${groupId}`);
    if (cell) {
      cell.innerHTML = renderNeaeCellContent(groupId, state.currentWeekIndex);
    }
    persistAll(false);
    updateTareasColumnStatusTags();
    updateTopbarBadges();
  }

  function onPlannerLinkedTaskInput(groupId, fieldType, targetWeekIdx, val) {
    const grp = getGroupById(groupId);
    if (!grp) return;
    const sess = ensureSessionObject(targetWeekIdx, grp.school, grp.course);
    const wData = ensureTareasWeekData(state.currentWeekIndex);
    const hasTxt = !!(val && val.trim());

    if (fieldType === "imprimir") {
      sess.imprimir = val;
      if (!hasTxt) {
        sess.imprimirDado = false;
        delete wData.overdue[`${groupId}_print`];
      }
    } else if (fieldType === "avisos") {
      sess.avisos = val;
      if (!hasTxt) {
        sess.avisoDado = false;
        delete wData.overdue[`${groupId}_avisos`];
      }
    } else if (fieldType === "educamos") {
      sess.educamos = val;
      if (!hasTxt) {
        sess.educamosDado = false;
        delete wData.overdue[`${groupId}_educamos`];
      }
    }

    const inputEl = document.getElementById(`input-linked-${groupId}-${fieldType}`);
    if (inputEl) {
      inputEl.classList.toggle("has-content", hasTxt);
    }
    const wrapEl = document.getElementById(`btn-wrap-linked-${groupId}-${fieldType}`);
    if (wrapEl) {
      wrapEl.innerHTML = renderPlannerLinkedButtonContent(groupId, fieldType, targetWeekIdx, state.currentWeekIndex);
    }

    persistAll(false);
    updateTareasColumnStatusTags();
    updateTopbarBadges();
  }

  function togglePlannerLinkedTaskDone(groupId, fieldType, targetWeekIdx) {
    const grp = getGroupById(groupId);
    if (!grp) return;
    pushUndoSnapshot();
    const sess = ensureSessionObject(targetWeekIdx, grp.school, grp.course);
    const wData = ensureTareasWeekData(state.currentWeekIndex);

    if (fieldType === "imprimir") {
      const overKey = `${groupId}_print`;
      if (wData.overdue[overKey]) {
        delete wData.overdue[overKey];
        sess.imprimirDado = true;
      } else {
        sess.imprimirDado = !sess.imprimirDado;
      }
    } else if (fieldType === "avisos") {
      const overKey = `${groupId}_avisos`;
      if (wData.overdue[overKey]) {
        delete wData.overdue[overKey];
        sess.avisoDado = true;
      } else {
        sess.avisoDado = !sess.avisoDado;
      }
    } else if (fieldType === "educamos") {
      const overKey = `${groupId}_educamos`;
      if (wData.overdue[overKey]) {
        delete wData.overdue[overKey];
        sess.educamosDado = true;
      } else {
        sess.educamosDado = !sess.educamosDado;
      }
    }

    persistAll(false);
    renderWorkspace();
  }

  function onStandardTaskTextInput(groupId, taskType, val) {
    const weekIdx = state.currentWeekIndex;
    const wData = ensureTareasWeekData(weekIdx);
    const key = `${groupId}_${taskType}`;
    const hasTxt = !!(val && val.trim());

    if (!hasTxt) {
      delete wData.taskTexts[key];
      delete wData.state[key];
      delete wData.overdue[key];
    } else {
      wData.taskTexts[key] = val;
    }

    const inputEl = document.getElementById(`input-unlinked-${key}`);
    if (inputEl) {
      inputEl.classList.toggle("has-content", hasTxt);
    }
    const grp = getGroupById(groupId);
    const platformLabel = (grp && grp.school === "ribarroja") ? "Teams" : "Classroom";
    const wrapEl = document.getElementById(`btn-wrap-unlinked-${key}`);
    if (wrapEl) {
      wrapEl.innerHTML = renderUnlinkedTaskButtonContent(groupId, taskType, platformLabel, weekIdx);
    }

    persistAll(false);
    updateTareasColumnStatusTags();
    updateTopbarBadges();
  }

  function toggleTareasCheck(groupId, taskType) {
    pushUndoSnapshot();
    const wData = ensureTareasWeekData(state.currentWeekIndex);
    const key = `${groupId}_${taskType}`;
    if (wData.overdue[key]) {
      delete wData.overdue[key];
      wData.state[key] = true;
    } else {
      wData.state[key] = !wData.state[key];
    }
    persistAll(false);
    renderWorkspace();
  }

  function togglePlannerPrintFromTareas(school, course, targetWeekIdx) {
    pushUndoSnapshot();
    const sess = ensureSessionObject(targetWeekIdx, school, course);
    if (!sess) return;
    sess.imprimirDado = !sess.imprimirDado;
    persistAll(false);
    renderWorkspace();
  }

  function promptSetNextWeekPrint(school, course, targetWeekIdx) {
    const sess = ensureSessionObject(targetWeekIdx, school, course);
    const cur = (sess && sess.imprimir) || "";
    const val = prompt(`🖨️ ¿Qué necesitas tener impreso para ${formatCourseShort(course)} en la Semana ${targetWeekIdx + 1}?`, cur);
    if (val === null) return;
    pushUndoSnapshot();
    sess.imprimir = val.trim();
    if (!val.trim()) sess.imprimirDado = false;
    persistAll(false);
    renderWorkspace();
  }

  function toggleEducamosFromTareas(groupId, weekIdx) {
    togglePlannerLinkedTaskDone(groupId, "educamos", weekIdx);
  }

  function promptConfigurableTaskText(groupId, taskType) {
    const wData = ensureTareasWeekData(state.currentWeekIndex);
    const key = `${groupId}_${taskType}`;
    const cur = wData.taskTexts[key] || "";
    const label = taskType === "platform" ? "Plataformas Digitales" : "Cuaderno / Notas";
    const val = prompt(`Tarea de ${label} para esta semana (deja vacío para eliminar):`, cur);
    if (val === null) return;
    pushUndoSnapshot();
    onStandardTaskTextInput(groupId, taskType, val);
    renderWorkspace();
  }

  function onTareasNoteInput(groupId, value) {
    const wData = ensureTareasWeekData(state.currentWeekIndex);
    wData.notes[groupId] = value;
    persistAll(false);
  }

  function bulkToggleTareasColumn(colType) {
    const weekIdx = state.currentWeekIndex;
    const wData = ensureTareasWeekData(weekIdx);
    const targetGroups = getFilteredTareasGroups(weekIdx, false);
    if (targetGroups.length === 0) return;

    pushUndoSnapshot();

    if (colType === "mat") {
      const allDone = targetGroups.every(g => !!wData.state[`${g.id}_mat`]);
      targetGroups.forEach(g => {
        wData.state[`${g.id}_mat`] = !allDone;
        if (!allDone) delete wData.overdue[`${g.id}_mat`];
      });
    } else if (colType === "neae") {
      const applicable = targetGroups.filter(g => hasNeaeProfile(g.id));
      if (applicable.length === 0) return;
      const allDone = applicable.every(g => !!wData.state[`${g.id}_neae`]);
      applicable.forEach(g => {
        wData.state[`${g.id}_neae`] = !allDone;
        if (!allDone) delete wData.overdue[`${g.id}_neae`];
      });
    } else if (colType === "print") {
      const applicable = targetGroups.filter(g => {
        const tW = resolvePrintTargetWeek(g, weekIdx);
        const s = ensureSessionObject(tW, g.school, g.course);
        return !!(s && s.imprimir && s.imprimir.trim());
      });
      if (applicable.length === 0) return;
      const allDone = applicable.every(g => {
        const tW = resolvePrintTargetWeek(g, weekIdx);
        return !!ensureSessionObject(tW, g.school, g.course).imprimirDado;
      });
      applicable.forEach(g => {
        const tW = resolvePrintTargetWeek(g, weekIdx);
        ensureSessionObject(tW, g.school, g.course).imprimirDado = !allDone;
        if (!allDone) delete wData.overdue[`${g.id}_print`];
      });
    } else if (colType === "avisos") {
      const applicable = targetGroups.filter(g => {
        const s = ensureSessionObject(weekIdx, g.school, g.course);
        return !!(s && s.avisos && s.avisos.trim());
      });
      if (applicable.length === 0) return;
      const allDone = applicable.every(g => !!ensureSessionObject(weekIdx, g.school, g.course).avisoDado);
      applicable.forEach(g => {
        ensureSessionObject(weekIdx, g.school, g.course).avisoDado = !allDone;
        if (!allDone) delete wData.overdue[`${g.id}_avisos`];
      });
    } else if (colType === "educamos") {
      const applicable = targetGroups.filter(g => {
        const s = ensureSessionObject(weekIdx, g.school, g.course);
        return !!(s && s.educamos && s.educamos.trim());
      });
      if (applicable.length === 0) return;
      const allDone = applicable.every(g => !!ensureSessionObject(weekIdx, g.school, g.course).educamosDado);
      applicable.forEach(g => {
        ensureSessionObject(weekIdx, g.school, g.course).educamosDado = !allDone;
        if (!allDone) delete wData.overdue[`${g.id}_educamos`];
      });
    } else if (colType === "platform" || colType === "grades") {
      const applicable = targetGroups.filter(g => {
        const k = `${g.id}_${colType}`;
        return !!(wData.taskTexts && wData.taskTexts[k] && wData.taskTexts[k].trim());
      });
      if (applicable.length === 0) return;
      const allDone = applicable.every(g => !!wData.state[`${g.id}_${colType}`]);
      applicable.forEach(g => {
        const k = `${g.id}_${colType}`;
        wData.state[k] = !allDone;
        if (!allDone) delete wData.overdue[k];
      });
    }

    persistAll(false);
    renderWorkspace();
  }

  // Vista 2 de Tareas: Trabajo a Largo Plazo (Columnas estrechas de 140px estilo hoja clásica)
  function renderTareasLongTermView(container) {
    const weekIdx = state.currentWeekIndex;
    const wrap = document.createElement("div");
    wrap.className = "tareas-view-container";

    const pendingCount = ALL_GROUPS.filter(g => isGroupPendingInTareas(g.id, weekIdx)).length;

    const toolbar = document.createElement("div");
    toolbar.className = "subview-toolbar";
    toolbar.innerHTML = `
      <div class="toolbar-cluster">
        <div class="filter-pill-group" role="group" aria-label="Filtrar grupos en Largo Plazo">
          <button type="button" class="filter-pill-btn ${state.tareasFilter === 'all' ? 'active' : ''}" onclick="App.setTareasFilter('all')">Todos (17)</button>
          <button type="button" class="filter-pill-btn ${state.tareasFilter === 'Riba-roja' ? 'active' : ''}" onclick="App.setTareasFilter('Riba-roja')">🔴 Riba-roja (9)</button>
          <button type="button" class="filter-pill-btn ${state.tareasFilter === 'Manises' ? 'active' : ''}" onclick="App.setTareasFilter('Manises')">🔵 Manises (8)</button>
          <button type="button" class="filter-pill-btn ${state.tareasFilter === 'pending' ? 'active' : ''}" onclick="App.setTareasFilter('pending')">⏳ Pendientes (${pendingCount})</button>
        </div>

        <button type="button" class="corporate-btn ${state.tareasHideDone ? 'primary' : ''}" onclick="App.toggleTareasHideDone()">
          ${state.tareasHideDone ? "👁️ Ver todos" : "⏳ Ocultar hechos"}
        </button>
      </div>
      <div class="toolbar-cluster">
        <button type="button" class="corporate-btn primary" onclick="App.openNewLongTermTaskModal()">+ Tarea</button>
      </div>
    `;
    wrap.appendChild(toolbar);

    const scroll = document.createElement("div");
    scroll.className = "tareas-table-scroll";

    const tasks = state.tareas.longTermTasks || [];
    const ltState = state.tareas.longTermState || {};

    const table = document.createElement("table");
    table.className = "corporate-tasks-table tareas-long-term-table";

    let headHtml = `
      <tr>
        <th class="col-center">CENTRO</th>
        <th class="col-group">GRUPO</th>
    `;

    if (tasks.length === 0) {
      headHtml += `
        <th style="font-weight: 500; font-style: italic; color: #94a3b8; text-transform: none; padding-inline-start: 18px; inline-size: 340px; text-align: left;">
          No hay tareas a largo plazo creadas. Pulsa en "+ Tarea".
        </th>
        <th class="col-filler"></th>
      `;
    } else {
      tasks.forEach((t, idx) => {
        headHtml += `
          <th class="col-lt-task">
            <div class="th-content">
              <span title="${escapeHTML(t.name)}" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-inline-size: 124px;">${escapeHTML(t.name)}</span>
              <div class="th-actions-row">
                <button type="button" class="th-action-btn" onclick="App.toggleLongTermColumn('${t.id}')" title="Marcar/Desmarcar visibles">✓ Todos</button>
                <button type="button" class="th-action-btn th-delete-btn" onclick="App.deleteLongTermTask(${idx})" title="Eliminar columna">🗑️</button>
              </div>
            </div>
          </th>
        `;
      });
      headHtml += `<th class="col-filler"></th>`;
    }
    headHtml += `</tr>`;

    const visibleGroups = getFilteredTareasGroups(weekIdx, true);
    let rowsHtml = "";

    if (visibleGroups.length === 0) {
      const colSpan = Math.max(4, tasks.length + 3);
      rowsHtml = `
        <tr>
          <td colspan="${colSpan}" style="text-align:center; padding: 38px 20px; background:#f0fdf4; color:#15803d; font-weight:700;">
            🎉 ¡Todo al día! No queda ninguna tarea a largo plazo pendiente en los cursos filtrados.
          </td>
        </tr>
      `;
    } else {
      visibleGroups.forEach(grp => {
        const badgeClass = grp.school === "ribarroja" ? "badge-ribarroja" : "badge-manises";
        const daysLabel = grp.school === "ribarroja" ? "L/X" : "M/J";

        let cellsHtml = `
          <td class="col-center">
            <span class="center-badge ${badgeClass}">${grp.center} (${daysLabel})</span>
          </td>
          <td class="col-group">
            <div class="group-name" style="margin-block-end:0;">${escapeHTML(grp.shortName)}</div>
          </td>
        `;

        if (tasks.length === 0) {
          cellsHtml += `<td style="color:#cbd5e1; padding-inline-start: 18px;">—</td><td class="col-filler"></td>`;
        } else {
          tasks.forEach(t => {
            const applies = isGroupInLongTermTask(t, grp);
            if (!applies) {
              cellsHtml += `<td class="col-lt-task"><span class="neae-static-empty">—</span></td>`;
            } else {
              const k = `${t.id}_${grp.id}`;
              const done = !!ltState[k];
              cellsHtml += `
                <td class="col-lt-task">
                  <button type="button" class="status-btn ${done ? 'checked' : ''}" onclick="App.toggleLongTermCheck('${t.id}','${grp.id}')">
                    <span>${done ? "✓ Hecho" : "Pendiente"}</span>
                  </button>
                </td>
              `;
            }
          });
          cellsHtml += `<td class="col-filler"></td>`;
        }

        rowsHtml += `<tr>${cellsHtml}</tr>`;
      });
    }

    table.innerHTML = `<thead>${headHtml}</thead><tbody>${rowsHtml}</tbody>`;
    scroll.appendChild(table);
    wrap.appendChild(scroll);
    container.appendChild(wrap);
  }

  function openNewLongTermTaskModal() {
    const body = document.getElementById("new-lt-task-body");
    if (!body) {
      addNewLongTermTaskPrompt();
      return;
    }
    const ribaGroups = ALL_GROUPS.filter(g => g.center === "Riba-roja");
    const maniGroups = ALL_GROUPS.filter(g => g.center === "Manises");

    body.innerHTML = `
      <div class="form-field-group">
        <label class="form-field-label" for="lt-f-name">Nombre de la Columna / Tarea</label>
        <input type="text" id="lt-f-name" class="form-input" placeholder="Ej: Seguimiento Ed, Notas Ed Rev, Rúbrica 1º Trim..." autocomplete="off" />
      </div>

      <div class="form-field-group">
        <label class="form-field-label">Aplicar a los grupos</label>
        <div class="modal-form-row-2col">
          <label style="display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;border:1px solid var(--border-medium);background:#f8fafc;cursor:pointer;font-weight:700;">
            <input type="radio" name="ltScopeOption" value="all" checked onchange="App.toggleLtManualGroupsBox(false)" />
            <span>Todos los cursos (17)</span>
          </label>
          <label style="display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;border:1px solid var(--border-medium);background:#f8fafc;cursor:pointer;font-weight:700;">
            <input type="radio" name="ltScopeOption" value="Riba-roja" onchange="App.toggleLtManualGroupsBox(false)" />
            <span>🔴 Riba-roja (9)</span>
          </label>
          <label style="display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;border:1px solid var(--border-medium);background:#f8fafc;cursor:pointer;font-weight:700;">
            <input type="radio" name="ltScopeOption" value="Manises" onchange="App.toggleLtManualGroupsBox(false)" />
            <span>🔵 Manises (8)</span>
          </label>
          <label style="display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;border:1px solid var(--border-medium);background:#f8fafc;cursor:pointer;font-weight:700;">
            <input type="radio" name="ltScopeOption" value="manual" onchange="App.toggleLtManualGroupsBox(true)" />
            <span>Selección manual...</span>
          </label>
        </div>

        <div id="lt-manual-groups-box" class="modal-form-row-2col" style="display:none; margin-top:8px; padding:10px; border:1px solid var(--border-medium); border-radius:8px; background:#f8fafc; max-block-size:210px; overflow-y:auto;">
          <div style="display:flex;flex-direction:column;gap:5px;">
            <span class="center-badge badge-ribarroja" style="inline-size:fit-content;margin-bottom:2px;">🔴 Riba-roja (9)</span>
            ${ribaGroups.map(g => `
              <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;cursor:pointer;">
                <input type="checkbox" class="lt-manual-grp-cb" value="${g.id}" checked />
                <span>${escapeHTML(g.shortName)}</span>
              </label>
            `).join("")}
          </div>
          <div style="display:flex;flex-direction:column;gap:5px;">
            <span class="center-badge badge-manises" style="inline-size:fit-content;margin-bottom:2px;">🔵 Manises (8)</span>
            ${maniGroups.map(g => `
              <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:600;cursor:pointer;">
                <input type="checkbox" class="lt-manual-grp-cb" value="${g.id}" checked />
                <span>${escapeHTML(g.shortName)}</span>
              </label>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    openModal("modal-new-lt-task");
    setTimeout(() => document.getElementById("lt-f-name")?.focus(), 40);
  }

  function toggleLtManualGroupsBox(show) {
    const box = document.getElementById("lt-manual-groups-box");
    if (box) box.style.display = show ? "grid" : "none";
  }

  function saveNewLongTermTaskModal() {
    const nameInput = document.getElementById("lt-f-name");
    const name = (nameInput && nameInput.value.trim()) || "";
    if (!name) {
      showToast("⚠️ Escribe un nombre para la columna / tarea");
      nameInput?.focus();
      return;
    }

    const scopeRadio = document.querySelector('input[name="ltScopeOption"]:checked');
    const scope = scopeRadio ? scopeRadio.value : "all";
    let groups = [];
    if (scope === "manual") {
      groups = Array.from(document.querySelectorAll(".lt-manual-grp-cb"))
        .filter(cb => cb.checked)
        .map(cb => cb.value);
      if (groups.length === 0) {
        showToast("⚠️ Selecciona al menos un grupo");
        return;
      }
    }

    pushUndoSnapshot();
    state.tareas.longTermTasks.push({
      id: "lt_" + Date.now(),
      name,
      scope,
      groups
    });
    closeModal("modal-new-lt-task");
    persistAll(false);
    renderWorkspace();
    showToast(`📌 Columna "${name}" añadida`);
  }

  function addNewLongTermTaskPrompt() {
    openNewLongTermTaskModal();
  }

  function toggleLongTermColumn(taskId) {
    const task = (state.tareas.longTermTasks || []).find(t => t.id === taskId);
    if (!task) return;
    const visibleGroups = getFilteredTareasGroups(state.currentWeekIndex, true)
      .filter(g => isGroupInLongTermTask(task, g));
    if (visibleGroups.length === 0) return;

    pushUndoSnapshot();
    const allDone = visibleGroups.every(g => !!state.tareas.longTermState[`${taskId}_${g.id}`]);
    visibleGroups.forEach(g => {
      state.tareas.longTermState[`${taskId}_${g.id}`] = !allDone;
    });
    persistAll(false);
    renderWorkspace();
  }

  function deleteLongTermTask(idx) {
    const t = state.tareas.longTermTasks[idx];
    if (!t || !confirm(`¿Eliminar la columna "${t.name}"?`)) return;
    pushUndoSnapshot();
    state.tareas.longTermTasks.splice(idx, 1);
    persistAll(false);
    renderWorkspace();
  }

  function toggleLongTermCheck(taskId, groupId) {
    pushUndoSnapshot();
    const k = `${taskId}_${groupId}`;
    state.tareas.longTermState[k] = !state.tareas.longTermState[k];
    persistAll(false);
    renderWorkspace();
  }

  function updateNeaeProfile(groupId, val) {
    onNeaeTextareaInput(groupId, val);
  }

  // ==========================================================================
  // MODALES Y ACCIONES INTERACTIVAS
  // ==========================================================================

  function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add("open");
  }

  function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove("open");
  }

  // 1. Selector de las 44 Semanas
  function openWeekPickerModal() {
    const body = document.getElementById("week-picker-body");
    if (!body) return;
    const { currentIdx, nextIdx } = getNowCalendarInfo();

    body.innerHTML = state.weeks.map((w, idx) => {
      const isActive = (idx === state.currentWeekIndex);
      const isTodayW = (idx === currentIdx);
      const isNextW = (idx === nextIdx);
      return `
        <button type="button" class="conflict-option-btn" style="flex-direction:column;gap:3px;padding:8px 10px;border-color:${isActive ? 'var(--primary)' : 'var(--border-medium)'};background:${isActive ? 'var(--primary-soft)' : '#fff'};" onclick="App.selectWeek(${idx})">
          <div style="display:flex;align-items:center;justify-content:space-between;inline-size:100%;">
            <span style="font-weight:800;font-size:12px;">${escapeHTML(w.num_sem)}</span>
            ${isTodayW ? `<span class="mini-meta-tag educamos">📍 Hoy</span>` : (isNextW ? `<span class="mini-meta-tag imprimir">⏩ Próx</span>` : "")}
          </div>
          <div style="font-size:11px;color:var(--text-secondary);">${escapeHTML(w.rango)}</div>
          <div style="font-size:9.5px;color:var(--text-muted);text-transform:uppercase;">${escapeHTML(w.mes)} ${w.tipo_sem ? "· " + escapeHTML(w.tipo_sem) : ""}</div>
        </button>
      `;
    }).join("");

    openModal("modal-week-picker");
  }

  // 2. Modal de Edición Completa de Sesión
  function openEditSessionModal(school, course, weekIdx) {
    const s = ensureSessionObject(weekIdx, school, course);
    activeEditTarget = { school, course, weekIdx, prepared: !!s.preparada };

    const schName = school === "ribarroja" ? "🔴 Riba-roja" : "🔵 Manises";
    document.getElementById("edit-session-modal-title").textContent = `✏️ ${formatCourseShort(course)} (${schName}) · ${state.weeks[weekIdx].num_sem} (${state.weeks[weekIdx].rango})`;
    document.getElementById("edit-f-tema").value = s.tema || "";
    document.getElementById("edit-f-sesion").value = s.sesion || "";
    document.getElementById("edit-f-actividades").value = s.actividades || "";
    document.getElementById("edit-f-avisos").value = s.avisos || "";
    document.getElementById("edit-f-aviso-dado").checked = !!s.avisoDado;
    document.getElementById("edit-f-educamos").value = s.educamos || "";
    document.getElementById("edit-f-educamos-dado").checked = !!s.educamosDado;
    document.getElementById("edit-f-imprimir").value = s.imprimir || "";
    document.getElementById("edit-f-imprimir-dado").checked = !!s.imprimirDado;

    updateModalPrepButtonUI();
    openModal("modal-edit-session");
  }

  function updateModalPrepButtonUI() {
    const btn = document.getElementById("edit-f-prep-btn");
    if (!btn || !activeEditTarget) return;
    btn.classList.toggle("primary", activeEditTarget.prepared);
    btn.textContent = activeEditTarget.prepared ? "✓ Preparada" : "○ Pendiente";
  }

  function toggleModalPrepared() {
    if (!activeEditTarget) return;
    activeEditTarget.prepared = !activeEditTarget.prepared;
    updateModalPrepButtonUI();
  }

  function insertSnippetInModal(snippet) {
    const ta = document.getElementById("edit-f-actividades");
    if (!ta) return;
    const prefix = ta.value && !ta.value.endsWith("\n") ? "\n" : "";
    ta.value = ta.value + prefix + snippet;
    ta.focus();
  }

  function saveEditSessionModal() {
    if (!activeEditTarget) return;
    pushUndoSnapshot();
    const { school, course, weekIdx, prepared } = activeEditTarget;
    const s = ensureSessionObject(weekIdx, school, course);
    s.tema = document.getElementById("edit-f-tema").value;
    s.sesion = document.getElementById("edit-f-sesion").value;
    s.actividades = document.getElementById("edit-f-actividades").value;
    s.avisos = document.getElementById("edit-f-avisos").value;
    s.avisoDado = document.getElementById("edit-f-aviso-dado").checked;
    s.educamos = document.getElementById("edit-f-educamos").value;
    s.educamosDado = document.getElementById("edit-f-educamos-dado").checked;
    s.imprimir = document.getElementById("edit-f-imprimir").value;
    s.imprimirDado = document.getElementById("edit-f-imprimir-dado").checked;
    s.preparada = prepared;

    closeModal("modal-edit-session");
    persistAll(false);
    renderWorkspace();
    showToast("💾 Sesión guardada");
  }

  function shiftSingleCourseCascadeFromModal(dir) {
    if (!activeEditTarget) return;
    const { school, course, weekIdx } = activeEditTarget;
    closeModal("modal-edit-session");
    shiftCourseCascadeManual(school, course, weekIdx, dir);
  }

  function sendModalSessionToReserveAndClear() {
    if (!activeEditTarget) return;
    const { school, course, weekIdx } = activeEditTarget;
    const s = ensureSessionObject(weekIdx, school, course);
    if (!hasSessionContent(s)) {
      closeModal("modal-edit-session");
      return;
    }
    pushUndoSnapshot();
    addSessionToReserve(school, course, weekIdx, s, "Enviada manualmente al Cajón de Reserva");
    state.weeks[weekIdx][school][course] = {
      tema: "", actividades: "", avisos: "", avisoDado: false,
      educamos: "", educamosDado: false, imprimir: "", imprimirDado: false,
      sesion: "", preparada: false
    };
    closeModal("modal-edit-session");
    persistAll(false);
    renderWorkspace();
    showToast("📦 Sesión guardada en el Cajón de Reserva y hueco vaciado");
  }

  // 3. Modal Simplificado del Calendario Escolar (Solo Lectivo/No lectivo + Evento especial por grupos)
  function renderCalendarMarksModalSection(dateStr) {
    const dayMarks = getDayMarks(dateStr);
    const curCat = activeCalMarkCategory || "examenes";
    const catMetaCur = DAY_MARK_CATEGORIES[curCat] || DAY_MARK_CATEGORIES.examenes;

    return `
      <div class="cal-modal-section-card">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">
          <label class="form-field-label" style="margin:0;">📌 Hitos de Programación (No suspenden clase)</label>
          <span style="font-size:10.5px;color:var(--text-secondary);">Visibles en Semanal, Replicar y Calendario</span>
        </div>

        <div class="cal-mark-cat-row" role="group" aria-label="Categoría del hito">
          ${Object.values(DAY_MARK_CATEGORIES).map(cat => `
            <button type="button" id="cal-mark-cat-${cat.id}" class="cal-mark-cat-btn ${curCat === cat.id ? `active cat-${cat.id}` : ''}" aria-pressed="${curCat === cat.id ? 'true' : 'false'}" onclick="App.selectCalMarkCategory('${cat.id}')">
              ${cat.icon} ${escapeHTML(cat.label)}
            </button>
          `).join("")}
        </div>

        <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
          <input type="text" id="cal-mark-title-input" class="form-input" style="flex:1 1 180px;" aria-label="Título o descripción del hito" placeholder="Ej. ${escapeHTML(catMetaCur.defaultTitle)}..." oninput="this.dataset.userTyped='1'" />
          <select id="cal-mark-scope-select" class="form-select" style="flex:0 1 185px;" aria-label="Alcance del hito en días">
            <option value="day">Solo este día (${escapeHTML(dateStr)})</option>
            <option value="week">Toda la semana (L-V)</option>
            <option value="ribarroja_week">Solo Riba-roja (L/X)</option>
            <option value="manises_week">Solo Manises (M/J)</option>
          </select>
          <button type="button" class="corporate-btn primary" onclick="App.addMarkFromCalendarModal()">+ Añadir</button>
        </div>

        ${dayMarks.length > 0 ? `
          <div class="cal-mark-active-list">
            ${dayMarks.map(m => {
              const cm = DAY_MARK_CATEGORIES[m.category] || DAY_MARK_CATEGORIES.otro;
              return `
                <div class="cal-mark-active-item">
                  <span class="day-mark-pill cat-${escapeHTML(m.category)}">${cm.icon} ${escapeHTML(m.title)}</span>
                  <div style="display:flex;gap:4px;align-items:center;">
                    <button type="button" class="corporate-btn" style="padding:2px 7px;font-size:10.5px;" onclick="App.removeMarkInModal('${escapeHTML(dateStr)}','${escapeHTML(m.id)}')" title="Quitar solo este día">✕ Día</button>
                    <button type="button" class="corporate-btn" style="padding:2px 7px;font-size:10.5px;color:#b91c1c;" onclick="App.removeMarkWeekInModal('${escapeHTML(dateStr)}','${escapeHTML(m.id)}')" title="Quitar este hito de toda la semana">🗑️ Sem.</button>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        ` : `<div style="font-size:11px;color:var(--text-muted);">Sin hitos en este día todavía. Elige una categoría o escribe uno y pulsa "+ Añadir".</div>`}
      </div>
    `;
  }

  function openCalendarDayModal(dateStr) {
    activeCalendarModalDate = dateStr;
    activeCalMarkCategory = activeCalMarkCategory || "examenes";
    activeCalMarkCreatorArmed = false;

    const { groups } = getDayGroupsFromSchedule(dateStr);
    const isNoLectivo = !!(state.holidays && state.holidays[dateStr]) ||
      (state.calendarEvents[dateStr] && (state.calendarEvents[dateStr].type === "no_lectivo" || state.calendarEvents[dateStr].type === "festivo" || state.calendarEvents[dateStr].classesHeld === false));
    const calEv = state.calendarEvents[dateStr] || {};
    const currentSuspended = isNoLectivo
      ? groups.map(g => g.course)
      : (Array.isArray(calEv.suspendedGroups) ? [...calEv.suspendedGroups] : []);

    document.getElementById("cal-modal-date-title").textContent = `🗓️ Configurar Día ${dateStr}`;
    const body = document.getElementById("cal-modal-body");

    const modeVal = isNoLectivo ? "no_lectivo" : (calEv.type === "evento" ? "evento" : "lectivo");
    const isFridayNoGroups = groups.length === 0;

    body.innerHTML = `
      ${renderCalendarMarksModalSection(dateStr)}

      ${!isFridayNoGroups ? `
        <div class="form-field-group">
          <label class="form-field-label">Estado Lectivo / Suspensión de Clases</label>
          <div class="modal-form-row-3col">
            <button type="button" id="cal-opt-lectivo" class="conflict-option-btn" style="justify-content:center;font-weight:800;${modeVal === 'lectivo' ? 'border-color:var(--success);background:var(--success-soft);' : ''}" onclick="App.setCalModalMode('lectivo')">
              🟢 Lectivo Normal
            </button>
            <button type="button" id="cal-opt-nolectivo" class="conflict-option-btn" style="justify-content:center;font-weight:800;${modeVal === 'no_lectivo' ? 'border-color:#f59e0b;background:#fef3c7;' : ''}" onclick="App.setCalModalMode('no_lectivo')">
              🏖️ No Lectivo
            </button>
            <button type="button" id="cal-opt-evento" class="conflict-option-btn" style="justify-content:center;font-weight:800;${modeVal === 'evento' ? 'border-color:#a855f7;background:#f3e8ff;' : ''}" onclick="App.setCalModalMode('evento')">
              🎪 Evento Especial
            </button>
          </div>
        </div>

        <div id="cal-evento-details-box" style="display:${modeVal === 'lectivo' ? 'none' : 'flex'};flex-direction:column;gap:12px;">
          <div class="form-field-group">
            <label class="form-field-label" for="cal-f-title">Motivo / Nombre del Festivo o Evento Especial</label>
            <input type="text" id="cal-f-title" class="form-input" placeholder="Ej. Convivencia, DOMUND, Excursión, Festivo..." value="${escapeHTML(calEv.title || '')}" />
          </div>

          <div id="cal-groups-selector-wrap" class="form-field-group" style="display:${modeVal === 'evento' ? 'flex' : 'none'};">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;">
              <label class="form-field-label">¿Qué grupos de este día NO tienen clase por el evento?</label>
              <div style="display:flex;gap:4px;flex-wrap:wrap;">
                <button type="button" class="filter-pill-btn" onclick="App.setAllCalModalGroups(true)">Suspender todos</button>
                <button type="button" class="filter-pill-btn" onclick="App.setAllCalModalGroups(false)">Ninguno</button>
              </div>
            </div>
            <div id="cal-groups-chips-list" class="modal-form-row-2col" style="margin-top:4px;">
              ${groups.map(g => {
                const checked = currentSuspended.includes(g.course);
                return `
                  <label style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:6px;border:1px solid var(--border-medium);background:#fff;cursor:pointer;">
                    <input type="checkbox" class="cal-grp-checkbox" value="${escapeHTML(g.course)}" ${checked ? "checked" : ""} />
                    <div>
                      <div style="font-weight:800;font-size:11.5px;">${escapeHTML(formatCourseShort(g.course))}</div>
                      <div style="font-size:10px;color:var(--text-muted);">${g.time}</div>
                    </div>
                  </label>
                `;
              }).join("")}
            </div>
          </div>
        </div>
      ` : `
        <div style="padding:8px 10px;border-radius:var(--radius-sm);background:#f8fafc;border:1px solid var(--border-subtle);font-size:11.5px;color:var(--text-secondary);">
          ☕ <strong>Viernes de planificación docente:</strong> no hay sesiones de clase que suspender, pero puedes añadir hitos arriba para verlos en el Calendario, Semanal y Replicar Clases.
        </div>
      `}
    `;

    body.dataset.mode = modeVal;
    openModal("modal-calendar-event");
  }

  function selectCalMarkCategory(catId) {
    if (!DAY_MARK_CATEGORIES[catId]) return;
    activeCalMarkCategory = catId;
    activeCalMarkCreatorArmed = true;

    Object.keys(DAY_MARK_CATEGORIES).forEach(cid => {
      const btn = document.getElementById(`cal-mark-cat-${cid}`);
      if (!btn) return;
      const isSelected = (cid === catId);
      btn.className = `cal-mark-cat-btn ${isSelected ? `active cat-${cid}` : ""}`;
      if (typeof btn.setAttribute === "function") {
        btn.setAttribute("aria-pressed", isSelected ? "true" : "false");
      }
    });

    const input = document.getElementById("cal-mark-title-input");
    if (input) {
      input.placeholder = `Ej. ${DAY_MARK_CATEGORIES[catId].defaultTitle}...`;
      const allDefaults = Object.values(DAY_MARK_CATEGORIES).map(c => c.defaultTitle);
      if (!input.value.trim() || (!input.dataset.userTyped && allDefaults.includes(input.value.trim()))) {
        input.value = DAY_MARK_CATEGORIES[catId].defaultTitle;
        input.dataset.userTyped = "";
      }
      input.focus();
    }
  }

  function addMarkFromCalendarModal() {
    if (!activeCalendarModalDate) return;
    const cat = activeCalMarkCategory || "examenes";
    const input = document.getElementById("cal-mark-title-input");
    const scopeSel = document.getElementById("cal-mark-scope-select");
    const titleVal = (input && input.value.trim()) || DAY_MARK_CATEGORIES[cat].defaultTitle;
    const scopeVal = (scopeSel && scopeSel.value) || "day";

    const added = addDayMarkWithScope(activeCalendarModalDate, cat, titleVal, scopeVal);
    activeCalMarkCreatorArmed = false;
    openCalendarDayModal(activeCalendarModalDate);
    if (added > 0) {
      showToast(`📌 Hito añadido en ${added} ${added === 1 ? "día" : "días"}`);
    } else {
      showToast("ℹ️ Ese hito ya estaba anotado en los días seleccionados");
    }
  }

  function removeMarkInModal(dateStr, markId) {
    removeDayMarkFromDay(dateStr, markId);
    if (activeCalendarModalDate) {
      openCalendarDayModal(activeCalendarModalDate);
    }
    showToast("🗑️ Hito eliminado del día");
  }

  function removeMarkWeekInModal(dateStr, categoryOrMarkId, title) {
    let cat = categoryOrMarkId;
    let resolvedTitle = title;
    if (resolvedTitle === undefined) {
      const targetMark = getDayMarks(dateStr).find(m => m.id === categoryOrMarkId);
      if (!targetMark) return;
      cat = targetMark.category;
      resolvedTitle = targetMark.title;
    }
    const removed = removeDayMarkAcrossWeek(dateStr, cat, resolvedTitle);
    if (activeCalendarModalDate) {
      openCalendarDayModal(activeCalendarModalDate);
    }
    showToast(`🗑️ Hito eliminado de ${removed} ${removed === 1 ? "día" : "días"} de la semana`);
  }

  function setCalModalMode(mode) {
    const body = document.getElementById("cal-modal-body");
    if (!body) return;
    body.dataset.mode = mode;

    const bL = document.getElementById("cal-opt-lectivo");
    const bN = document.getElementById("cal-opt-nolectivo");
    const bE = document.getElementById("cal-opt-evento");
    if (bL) bL.style.background = mode === "lectivo" ? "var(--success-soft)" : "#fff";
    if (bN) bN.style.background = mode === "no_lectivo" ? "#fef3c7" : "#fff";
    if (bE) bE.style.background = mode === "evento" ? "#f3e8ff" : "#fff";

    const details = document.getElementById("cal-evento-details-box");
    const grpWrap = document.getElementById("cal-groups-selector-wrap");
    if (details) details.style.display = mode === "lectivo" ? "none" : "flex";
    if (grpWrap) grpWrap.style.display = mode === "evento" ? "flex" : "none";

    if (mode === "evento") {
      const checks = Array.from(document.querySelectorAll(".cal-grp-checkbox"));
      if (checks.every(c => !c.checked)) {
        checks.forEach(c => { c.checked = true; });
      }
    }
  }

  function setAllCalModalGroups(suspendAll) {
    document.querySelectorAll(".cal-grp-checkbox").forEach(cb => {
      cb.checked = !!suspendAll;
    });
  }

  function saveCalendarDayConfig() {
    if (!activeCalendarModalDate) return;
    const dateStr = activeCalendarModalDate;
    const body = document.getElementById("cal-modal-body");
    const mode = (body && body.dataset.mode) || "lectivo";
    const titleInput = document.getElementById("cal-f-title");
    const titleVal = (titleInput && titleInput.value.trim()) || "";
    const { school, groups } = getDayGroupsFromSchedule(dateStr);

    // Si el usuario escribió o armó un hito sin pulsar "+ Añadir", guardarlo también
    const markTitleInput = document.getElementById("cal-mark-title-input");
    const markScopeSel = document.getElementById("cal-mark-scope-select");
    const pendingMarkTitle = (markTitleInput && markTitleInput.value.trim()) || "";
    const shouldSavePendingMark = !!pendingMarkTitle && (activeCalMarkCreatorArmed || markTitleInput.dataset.userTyped === "1");

    if (groups.length === 0) {
      if (shouldSavePendingMark) {
        addDayMarkWithScope(dateStr, activeCalMarkCategory || "otro", pendingMarkTitle, (markScopeSel && markScopeSel.value) || "day");
      }
      activeCalMarkCreatorArmed = false;
      closeModal("modal-calendar-event");
      showToast("📌 Hitos guardados");
      return;
    }

    pushUndoSnapshot();

    if (mode === "lectivo") {
      delete state.holidays[dateStr];
      delete state.calendarEvents[dateStr];
    } else if (mode === "no_lectivo") {
      state.holidays[dateStr] = true;
      state.calendarEvents[dateStr] = {
        school: school || "ambos",
        type: "no_lectivo",
        title: titleVal || "Día No Lectivo",
        classesHeld: false,
        suspendedGroups: groups.map(g => g.course)
      };
    } else if (mode === "evento") {
      delete state.holidays[dateStr];
      const suspended = Array.from(document.querySelectorAll(".cal-grp-checkbox"))
        .filter(cb => cb.checked)
        .map(cb => cb.value);

      state.calendarEvents[dateStr] = {
        school: school || "ambos",
        type: "evento",
        title: titleVal || "Evento especial",
        classesHeld: suspended.length === groups.length ? false : "partial",
        suspendedGroups: suspended
      };
    }

    if (shouldSavePendingMark) {
      const cat = DAY_MARK_CATEGORIES[activeCalMarkCategory] ? activeCalMarkCategory : "otro";
      const dates = getTargetDatesForMarkScope(dateStr, (markScopeSel && markScopeSel.value) || "day");
      if (!state.dayMarks) state.dayMarks = {};
      dates.forEach((ds, idx) => {
        const curList = getDayMarks(ds);
        if (!curList.some(m => m.category === cat && m.title.toLowerCase() === pendingMarkTitle.toLowerCase())) {
          curList.push({
            id: `dm_${Date.now()}_${idx}_${Math.random().toString(36).slice(2, 6)}`,
            category: cat,
            title: pendingMarkTitle
          });
          state.dayMarks[ds] = curList;
        }
      });
      showToast("📌 Configuración del día e hito guardados");
    } else if (mode === "lectivo") {
      showToast(`🟢 ${dateStr} establecido como Día Lectivo normal`);
    } else if (mode === "no_lectivo") {
      showToast(`🏖️ ${dateStr} marcado como No Lectivo`);
    } else if (mode === "evento") {
      const suspLen = (state.calendarEvents[dateStr] && state.calendarEvents[dateStr].suspendedGroups.length) || 0;
      showToast(`🎪 Evento especial guardado en ${dateStr} (${suspLen} grupos sin clase)`);
    }

    activeCalMarkCreatorArmed = false;
    closeModal("modal-calendar-event");
    persistAll(false);
    renderWorkspace();
  }

  function clearCalendarDayConfig() {
    if (!activeCalendarModalDate) return;
    pushUndoSnapshot();
    delete state.holidays[activeCalendarModalDate];
    delete state.calendarEvents[activeCalendarModalDate];
    closeModal("modal-calendar-event");
    persistAll(false);
    renderWorkspace();
    showToast("🟢 Día restablecido como lectivo normal");
  }

  // 4. Banco de Sesiones: Programar un Tema Completo, una Sesión o el Curso entero
  // Saltando automáticamente los días que cada grupo destino no tenga clase (No lectivo o Evento especial)
  function openBankDeployTemaModal(level, tIdx) {
    const temas = ensureLevelBank(level);
    const temaObj = temas[tIdx];
    if (!temaObj) return;
    openBankDeployDialog({
      mode: "tema",
      level,
      title: `📦 Copiar Tema Completo: ${temaObj.title}`,
      sessionsToDeploy: deepClone(temaObj.sessions || [])
    });
  }

  function openBankDeploySingleSessionModal(level, tIdx, sIdx) {
    const temas = ensureLevelBank(level);
    const sObj = temas[tIdx] && temas[tIdx].sessions[sIdx];
    if (!sObj) return;
    openBankDeployDialog({
      mode: "single",
      level,
      title: `🚀 Enviar Sesión a Grupos: ${sObj.tema || "Sesión"}`,
      sessionsToDeploy: [deepClone(sObj)]
    });
  }

  function openBankDeployCourseModal(level) {
    const temas = ensureLevelBank(level);
    const allSessions = [];
    temas.forEach(t => {
      (t.sessions || []).forEach(s => allSessions.push(deepClone(s)));
    });
    openBankDeployDialog({
      mode: "course",
      level,
      title: `🚀 Programar Secuencia Completa de ${level} (${allSessions.length} sesiones)`,
      sessionsToDeploy: allSessions
    });
  }

  function openBankDeployDialog(ctx) {
    activeBankDeployContext = ctx;
    document.getElementById("bank-deploy-title").textContent = ctx.title;
    const body = document.getElementById("bank-deploy-body");
    const levelGroups = ALL_GROUPS.filter(g => g.level === ctx.level);
    const defaultStartWeek = ctx.mode === "course" ? 2 : state.currentWeekIndex;

    const weekOptions = state.weeks.map((w, i) =>
      `<option value="${i}" ${i === defaultStartWeek ? "selected" : ""}>${w.num_sem} (${w.rango} · ${w.mes})</option>`
    ).join("");

    body.innerHTML = `
      <div class="form-field-group">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;">
          <label class="form-field-label">1. Selecciona los grupos destino (${escapeHTML(ctx.level)})</label>
          <div style="display:flex;gap:4px;flex-wrap:wrap;">
            <button type="button" class="filter-pill-btn" onclick="App.selectBankDeployGroups('all')">Todos</button>
            <button type="button" class="filter-pill-btn" onclick="App.selectBankDeployGroups('ribarroja')">Solo Riba-roja</button>
            <button type="button" class="filter-pill-btn" onclick="App.selectBankDeployGroups('manises')">Solo Manises</button>
          </div>
        </div>
        <div class="modal-form-row-2col" style="margin-top:4px;">
          ${levelGroups.map(g => `
            <label style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;border:1px solid var(--border-medium);background:#fff;cursor:pointer;">
              <input type="checkbox" class="bank-deploy-grp-cb" data-school="${g.school}" value="${g.id}" checked onchange="App.updateBankDeployPreview()" />
              <span class="header-school-badge ${g.school}">${g.center}</span>
              <strong style="font-size:12px;">${escapeHTML(g.shortName)}</strong>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="modal-form-row-2col">
        <div class="form-field-group">
          <label class="form-field-label" for="bank-deploy-start-week">2. Semana de inicio</label>
          <select id="bank-deploy-start-week" class="form-select" onchange="App.updateBankDeployPreview()">
            ${weekOptions}
          </select>
        </div>

        <div class="form-field-group">
          <label class="form-field-label" for="bank-deploy-conflict-mode">3. Si ya hay clases en esas semanas</label>
          <select id="bank-deploy-conflict-mode" class="form-select" onchange="App.updateBankDeployPreview()">
            <option value="overwrite_reserve">🔄 Sustituir (guardando previas en Reserva 📦)</option>
            <option value="cascade_forward">⏩ Desplazar existentes en cascada (+1 sem)</option>
            <option value="only_empty">🛡️ Rellenar solo semanas lectivas vacías</option>
          </select>
        </div>
      </div>

      <div style="padding:10px 12px;border-radius:8px;background:var(--primary-soft);border:1px solid var(--primary-border);font-size:11.5px;">
        <div style="font-weight:800;color:var(--primary);margin-bottom:4px;">
          🧭 Salto Inteligente de Días No Lectivos y Eventos Especiales Activado
        </div>
        <div id="bank-deploy-preview-box" style="color:var(--text-secondary);line-height:1.4;max-block-size:135px;overflow-y:auto;"></div>
      </div>
    `;

    openModal("modal-bank-deploy");
    updateBankDeployPreview();
  }

  function selectBankDeployGroups(filter) {
    document.querySelectorAll(".bank-deploy-grp-cb").forEach(cb => {
      if (filter === "all") cb.checked = true;
      else cb.checked = (cb.dataset.school === filter);
    });
    updateBankDeployPreview();
  }

  // Calcula exactamente en qué semanas caerán las sesiones de un grupo saltando días no lectivos / eventos
  function computeGroupPlacementPlan(grp, startWeekIdx, sessionsList, conflictMode) {
    const placements = [];
    const skippedWeeks = [];
    let w = startWeekIdx;
    let sPointer = 0;

    while (w < state.weeks.length && sPointer < sessionsList.length) {
      const tStatus = getGroupTeachingStatus(grp.school, grp.course, w);
      if (!tStatus.isLectivo) {
        skippedWeeks.push({ weekIdx: w, reason: tStatus.reason });
        w++;
        continue;
      }
      if (conflictMode === "only_empty") {
        const cur = ensureSessionObject(w, grp.school, grp.course);
        if (hasSessionContent(cur)) {
          w++;
          continue;
        }
      }
      placements.push({ weekIdx: w, session: sessionsList[sPointer] });
      sPointer++;
      w++;
    }
    return { placements, skippedWeeks };
  }

  function updateBankDeployPreview() {
    if (!activeBankDeployContext) return;
    const previewEl = document.getElementById("bank-deploy-preview-box");
    const startSel = document.getElementById("bank-deploy-start-week");
    const modeSel = document.getElementById("bank-deploy-conflict-mode");
    if (!previewEl || !startSel || !modeSel) return;

    const startW = parseInt(startSel.value, 10);
    const conflictMode = modeSel.value;
    const selectedIds = Array.from(document.querySelectorAll(".bank-deploy-grp-cb"))
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    if (selectedIds.length === 0) {
      previewEl.innerHTML = `<em>Selecciona al menos un grupo para ver la previsualización.</em>`;
      return;
    }

    const lines = selectedIds.map(gid => {
      const grp = getGroupById(gid);
      const { placements, skippedWeeks } = computeGroupPlacementPlan(grp, startW, activeBankDeployContext.sessionsToDeploy, conflictMode);
      if (placements.length === 0) {
        return `<div>• <strong>${escapeHTML(grp.shortName)} (${grp.center})</strong>: Sin semanas lectivas disponibles desde Sem. ${startW + 1}.</div>`;
      }
      const firstW = placements[0].weekIdx + 1;
      const lastW = placements[placements.length - 1].weekIdx + 1;
      const skipTxt = skippedWeeks.length > 0
        ? ` <span style="color:#b45309;font-weight:700;">(Salta ${skippedWeeks.length}: ${skippedWeeks.map(sk => `S${sk.weekIdx + 1} ${escapeHTML(sk.reason)}`).join(", ")})</span>`
        : ` <span style="color:var(--success);">(Sin festivos intermedios)</span>`;
      return `<div>• <strong>${escapeHTML(grp.shortName)} (${grp.center})</strong>: ${placements.length} sesiones → <strong>Sem. ${firstW} a Sem. ${lastW}</strong>${skipTxt}</div>`;
    });

    previewEl.innerHTML = lines.join("");
  }

  function confirmBankDeploy() {
    if (!activeBankDeployContext) return;
    const startW = parseInt(document.getElementById("bank-deploy-start-week").value, 10);
    const conflictMode = document.getElementById("bank-deploy-conflict-mode").value;
    const selectedIds = Array.from(document.querySelectorAll(".bank-deploy-grp-cb"))
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    if (selectedIds.length === 0) {
      showToast("⚠️ Selecciona al menos un grupo destino");
      return;
    }

    pushUndoSnapshot();

    selectedIds.forEach(gid => {
      const grp = getGroupById(gid);
      const { placements } = computeGroupPlacementPlan(grp, startW, activeBankDeployContext.sessionsToDeploy, conflictMode);

      placements.forEach(({ weekIdx, session }) => {
        const cur = ensureSessionObject(weekIdx, grp.school, grp.course);
        if (hasSessionContent(cur)) {
          if (conflictMode === "cascade_forward") {
            executeCourseCascade(grp.school, grp.course, weekIdx, 1, session);
            return;
          } else if (conflictMode === "overwrite_reserve") {
            addSessionToReserve(grp.school, grp.course, weekIdx, cur, `Reemplazada al programar desde Banco de Sesiones`);
          }
        }
        state.weeks[weekIdx][grp.school][grp.course] = cloneCleanSession(session);
        state.weeks[weekIdx][grp.school][grp.course].preparada = true;
      });
    });

    closeModal("modal-bank-deploy");
    persistAll(false);
    renderWorkspace();
    showToast(`🚀 Programación aplicada en ${selectedIds.length} ${selectedIds.length === 1 ? "grupo" : "grupos"} (saltando días no lectivos)`);
  }

  // 5. CRUD del Banco de Sesiones (Crear, Editar, Eliminar y Reordenar Temas y Sesiones)
  function openBankEditTemaModal(level, tIdx) {
    const temas = ensureLevelBank(level);
    const isNew = (tIdx === null || tIdx === undefined);
    const curTitle = isNew ? "" : (temas[tIdx] && temas[tIdx].title) || "";

    activeBankEditContext = { type: "tema", level, tIdx };
    document.getElementById("bank-edit-title").textContent = isNew ? `➕ Nuevo Tema en ${level}` : `✏️ Editar Tema en ${level}`;
    document.getElementById("bank-edit-body").innerHTML = `
      <div class="form-field-group">
        <label class="form-field-label" for="bank-f-tema-title">Título del Tema / Unidad</label>
        <input type="text" id="bank-f-tema-title" class="form-input" placeholder="Ej. Tema 3 · Dios nos habla" value="${escapeHTML(curTitle)}" />
      </div>
    `;
    openModal("modal-bank-edit");
  }

  function openBankEditSessionModal(level, tIdx, sIdx) {
    const temas = ensureLevelBank(level);
    const isNew = (sIdx === null || sIdx === undefined);
    const s = isNew
      ? { tema: "", sesion: "", actividades: "", avisos: "", educamos: "", imprimir: "" }
      : (temas[tIdx] && temas[tIdx].sessions[sIdx]) || {};

    activeBankEditContext = { type: "session", level, tIdx, sIdx };
    document.getElementById("bank-edit-title").textContent = isNew ? `➕ Nueva Sesión en ${temas[tIdx].title}` : `✏️ Editar Sesión del Banco (${level})`;
    document.getElementById("bank-edit-body").innerHTML = `
      <div class="modal-form-row-2col-asym">
        <div class="form-field-group">
          <label class="form-field-label" for="bank-f-s-tema">Título / Subtema de la Sesión</label>
          <input type="text" id="bank-f-s-tema" class="form-input" value="${escapeHTML(s.tema || '')}" placeholder="Ej. ¿Quiénes somos?" />
        </div>
        <div class="form-field-group">
          <label class="form-field-label" for="bank-f-s-tipo">Tipo</label>
          <select id="bank-f-s-tipo" class="form-select">
            <option value="" ${!s.sesion ? "selected" : ""}>Clase normal</option>
            <option value="Examen" ${s.sesion === "Examen" ? "selected" : ""}>📝 Examen</option>
            <option value="Trabajo" ${s.sesion === "Trabajo" ? "selected" : ""}>🚀 Proyecto / Trabajo</option>
            <option value="Exposición" ${s.sesion === "Exposición" ? "selected" : ""}>🎙️ Exposición</option>
          </select>
        </div>
      </div>
      <div class="form-field-group">
        <label class="form-field-label" for="bank-f-s-act">Contenido y Actividades</label>
        <textarea id="bank-f-s-act" class="form-textarea" style="min-block-size:110px;">${escapeHTML(s.actividades || '')}</textarea>
      </div>
      <div class="modal-form-row-3col">
        <div class="form-field-group">
          <label class="form-field-label" for="bank-f-s-av">📢 Avisos</label>
          <textarea id="bank-f-s-av" class="form-textarea" style="min-block-size:56px;">${escapeHTML(s.avisos || '')}</textarea>
        </div>
        <div class="form-field-group">
          <label class="form-field-label" for="bank-f-s-ed">🏫 Educamos</label>
          <textarea id="bank-f-s-ed" class="form-textarea" style="min-block-size:56px;">${escapeHTML(s.educamos || '')}</textarea>
        </div>
        <div class="form-field-group">
          <label class="form-field-label" for="bank-f-s-imp">🖨️ Imprimir</label>
          <textarea id="bank-f-s-imp" class="form-textarea" style="min-block-size:56px;">${escapeHTML(s.imprimir || '')}</textarea>
        </div>
      </div>
    `;
    openModal("modal-bank-edit");
  }

  function saveBankEditModal() {
    if (!activeBankEditContext) return;
    const { type, level, tIdx, sIdx } = activeBankEditContext;
    const temas = ensureLevelBank(level);

    pushUndoSnapshot();

    if (type === "tema") {
      const titleVal = document.getElementById("bank-f-tema-title").value.trim() || "Nuevo Tema";
      if (tIdx === null || tIdx === undefined) {
        temas.push({ id: "t_" + Date.now(), title: titleVal, sessions: [] });
      } else if (temas[tIdx]) {
        temas[tIdx].title = titleVal;
      }
    } else if (type === "session") {
      const newS = {
        id: "s_" + Date.now(),
        tema: document.getElementById("bank-f-s-tema").value.trim(),
        sesion: document.getElementById("bank-f-s-tipo").value,
        actividades: document.getElementById("bank-f-s-act").value,
        avisos: document.getElementById("bank-f-s-av").value.trim(),
        educamos: document.getElementById("bank-f-s-ed").value.trim(),
        imprimir: document.getElementById("bank-f-s-imp").value.trim()
      };
      if (!temas[tIdx].sessions) temas[tIdx].sessions = [];
      if (sIdx === null || sIdx === undefined) {
        temas[tIdx].sessions.push(newS);
      } else {
        temas[tIdx].sessions[sIdx] = newS;
      }
    }

    closeModal("modal-bank-edit");
    persistAll(false);
    renderWorkspace();
    showToast("💾 Banco de Sesiones actualizado");
  }

  function moveBankTema(level, tIdx, delta) {
    const temas = ensureLevelBank(level);
    const target = tIdx + delta;
    if (target < 0 || target >= temas.length) return;
    pushUndoSnapshot();
    const tmp = temas[tIdx];
    temas[tIdx] = temas[target];
    temas[target] = tmp;
    persistAll(false);
    renderWorkspace();
  }

  function deleteBankTema(level, tIdx) {
    const temas = ensureLevelBank(level);
    if (!temas[tIdx] || !confirm(`¿Eliminar el tema "${temas[tIdx].title}" y sus sesiones del Banco?`)) return;
    pushUndoSnapshot();
    temas.splice(tIdx, 1);
    persistAll(false);
    renderWorkspace();
  }

  function moveBankSession(level, tIdx, sIdx, delta) {
    const temas = ensureLevelBank(level);
    const list = temas[tIdx] && temas[tIdx].sessions;
    if (!list) return;
    const target = sIdx + delta;
    if (target < 0 || target >= list.length) return;
    pushUndoSnapshot();
    const tmp = list[sIdx];
    list[sIdx] = list[target];
    list[target] = tmp;
    persistAll(false);
    renderWorkspace();
  }

  function duplicateBankSession(level, tIdx, sIdx) {
    const temas = ensureLevelBank(level);
    const list = temas[tIdx] && temas[tIdx].sessions;
    if (!list || !list[sIdx]) return;
    pushUndoSnapshot();
    const copy = deepClone(list[sIdx]);
    copy.id = "s_" + Date.now();
    list.splice(sIdx + 1, 0, copy);
    persistAll(false);
    renderWorkspace();
    showToast("📄 Sesión duplicada en el Banco");
  }

  function deleteBankSession(level, tIdx, sIdx) {
    const temas = ensureLevelBank(level);
    const list = temas[tIdx] && temas[tIdx].sessions;
    if (!list || !list[sIdx] || !confirm("¿Eliminar esta sesión del Banco?")) return;
    pushUndoSnapshot();
    list.splice(sIdx, 1);
    persistAll(false);
    renderWorkspace();
  }

  // 6. Modal para Aplazar Contenido Pendiente (⏩)
  function openPostponeModal(school, course, weekIdx) {
    const sess = ensureSessionObject(weekIdx, school, course);
    activePostponeContext = { school, course, weekIdx };

    let nextTeachW = weekIdx + 1;
    while (nextTeachW < state.weeks.length && !getGroupTeachingStatus(school, course, nextTeachW).isLectivo) {
      nextTeachW++;
    }
    const targetWIdx = Math.min(nextTeachW, state.weeks.length - 1);

    const body = document.getElementById("postpone-modal-body");
    body.innerHTML = `
      <div style="font-size:12px;color:var(--text-secondary);">
        Origen: <strong>${escapeHTML(formatCourseShort(course))} · Semana ${weekIdx + 1}</strong> → Siguiente semana lectiva: <strong>Semana ${targetWIdx + 1}</strong> (${escapeHTML(state.weeks[targetWIdx].rango)})
      </div>

      <div class="form-field-group">
        <label class="form-field-label" for="postpone-f-text">Texto que quedó pendiente para añadir al inicio de la Semana ${targetWIdx + 1}</label>
        <textarea id="postpone-f-text" class="form-textarea" style="min-block-size:90px;">${escapeHTML(sess.actividades || '')}</textarea>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;">
        <button type="button" class="conflict-option-btn" onclick="App.confirmPostponeAction('append_pending', ${targetWIdx})">
          <span style="font-size:18px;">📌</span>
          <div>
            <div style="font-weight:800;font-size:12.5px;">Añadir como «📌 PENDIENTE (Sem. ${weekIdx + 1})» en la Semana ${targetWIdx + 1}</div>
            <div style="font-size:11px;color:var(--text-secondary);">Conserva lo que ya hubiera en la Semana ${targetWIdx + 1} y añade este bloque al principio.</div>
          </div>
        </button>

        <button type="button" class="conflict-option-btn" onclick="App.confirmPostponeAction('cascade_all', ${targetWIdx})">
          <span style="font-size:18px;">⏩</span>
          <div>
            <div style="font-weight:800;font-size:12.5px;">Desplazar toda la sesión en cascada (+1 semana lectiva)</div>
            <div style="font-size:11px;color:var(--text-secondary);">Empuja esta sesión y las siguientes una semana lectiva hacia adelante.</div>
          </div>
        </button>
      </div>
    `;
    openModal("modal-postpone-content");
  }

  function confirmPostponeAction(mode, targetWIdx) {
    if (!activePostponeContext) return;
    const { school, course, weekIdx } = activePostponeContext;
    const textVal = (document.getElementById("postpone-f-text").value || "").trim();
    closeModal("modal-postpone-content");

    if (mode === "cascade_all") {
      shiftCourseCascadeManual(school, course, weekIdx, 1);
      return;
    }

    if (!textVal) return;
    pushUndoSnapshot();
    const nextSess = ensureSessionObject(targetWIdx, school, course);
    const currSess = ensureSessionObject(weekIdx, school, course);
    const header = `📌 PENDIENTE (Sem. ${weekIdx + 1}):\n${textVal}`;
    nextSess.actividades = nextSess.actividades && nextSess.actividades.trim()
      ? `${header}\n────────────────────\n${nextSess.actividades}`
      : header;
    if (!nextSess.tema && currSess.tema) nextSess.tema = currSess.tema;

    persistAll(false);
    renderWorkspace();
    showToast(`📌 Contenido pendiente añadido a Semana ${targetWIdx + 1}`);
  }

  // 7. Cajón de Reserva
  function openReserveModal() {
    const body = document.getElementById("reserve-drawer-body");
    if (!body) return;

    if (state.reserveSessions.length === 0) {
      body.innerHTML = `<div style="padding:24px;text-align:center;color:var(--text-muted);">📦 El Cajón de Reserva está vacío. Cualquier clase sustituida o desplazada fuera del calendario se guardará aquí automáticamente para no perder jamás información.</div>`;
    } else {
      body.innerHTML = state.reserveSessions.map((item, idx) => `
        <div style="padding:10px 12px;border-radius:8px;border:1px solid var(--border-medium);background:var(--bg-subtle);display:flex;align-items:flex-start;justify-content:space-between;gap:10px;flex-wrap:wrap;">
          <div style="min-inline-size:0;flex:1;">
            <div style="font-size:10.5px;color:var(--text-muted);font-weight:700;">
              ${escapeHTML(item.savedAt)} · ${escapeHTML(formatCourseShort(item.course))} (${item.school === 'ribarroja' ? 'Riba-roja' : 'Manises'}) · ${escapeHTML(item.weekLabel)}
            </div>
            <div style="font-size:12.5px;font-weight:800;margin-top:2px;">${escapeHTML(item.session.tema || "(Sin título)")}</div>
            <div style="font-size:11px;color:var(--text-secondary);white-space:pre-line;margin-top:2px;">${escapeHTML(item.session.actividades || "")}</div>
            <div style="font-size:10px;color:#b45309;margin-top:3px;">Motivo: ${escapeHTML(item.reason)}</div>
          </div>
          <div style="display:flex;gap:4px;flex-shrink:0;">
            <button type="button" class="corporate-btn primary" onclick="App.restoreReserveToClipboard(${idx})">📋 Copiar</button>
            <button type="button" class="corporate-btn" style="color:var(--danger);" onclick="App.deleteReserveItem(${idx})">🗑️</button>
          </div>
        </div>
      `).join("");
    }
    openModal("modal-reserve-drawer");
  }

  function restoreReserveToClipboard(idx) {
    const item = state.reserveSessions[idx];
    if (!item) return;
    state.clipboard = {
      ...cloneCleanSession(item.session),
      sourceLabel: `Reserva · ${formatCourseShort(item.course)}`,
      sourceLevel: getCourseLevel(item.course)
    };
    closeModal("modal-reserve-drawer");
    updateTopbarBadges();
    renderWorkspace();
    showToast("📋 Clase restaurada al portapapeles. Pégala en cualquier grupo o semana.");
  }

  function deleteReserveItem(idx) {
    state.reserveSessions.splice(idx, 1);
    persistAll(false);
    openReserveModal();
  }

  // 8. Exportar e Importar Backup JSON Unificado
  function exportFullBackup() {
    const payload = {
      app: "Programacion_Docente_Unificada_26_27",
      exportedAt: new Date().toISOString(),
      weeks: state.weeks,
      holidays: state.holidays,
      calendarEvents: state.calendarEvents,
      dayMarks: state.dayMarks,
      sessionBank: state.sessionBank,
      reserveSessions: state.reserveSessions,
      tareas: state.tareas
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `backup_programacion_26_27_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("💾 Copia de seguridad JSON descargada");
  }

  function importFullBackup(ev) {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        pushUndoSnapshot();
        if (Array.isArray(data.weeks) && data.weeks.length === 44) state.weeks = data.weeks;
        if (data.holidays) state.holidays = data.holidays;
        if (data.calendarEvents) state.calendarEvents = data.calendarEvents;
        if (data.dayMarks !== undefined) state.dayMarks = data.dayMarks || {};
        if (data.sessionBank) state.sessionBank = data.sessionBank;
        if (Array.isArray(data.reserveSessions)) state.reserveSessions = data.reserveSessions;
        if (data.tareas) state.tareas = data.tareas;
        persistAll(false);
        renderWorkspace();
        showToast("📥 Copia de seguridad restaurada correctamente");
      } catch (err) {
        alert("El archivo JSON no tiene un formato válido.");
      }
    };
    reader.readAsText(file);
    ev.target.value = "";
  }

  // ==========================================================================
  // SINCRONIZACIÓN EN TIEMPO REAL CON FIREBASE (/planner_anual y /control_clases)
  // ==========================================================================

  const CloudSync = {
    db: null,
    auth: null,
    plannerRef: null,
    tareasRef: null,
    status: "offline",
    userEmail: null,
    ignoreRemoteUntil: 0,

    init() {
      try {
        if (!window.firebase) return;
        const firebaseConfig = {
          apiKey: "AIzaSyA2uP8iU2u8_A9v8T4X9y9p9L8M7N6O5P4",
          authDomain: "mi-planner-clases.firebaseapp.com",
          databaseURL: "https://mi-planner-clases-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "mi-planner-clases",
          storageBucket: "mi-planner-clases.appspot.com"
        };
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        this.db = firebase.database();
        this.plannerRef = this.db.ref("planner_anual");
        this.tareasRef = this.db.ref("control_clases");
        this.setStatus("online");

        this.plannerRef.on("value", (snap) => {
          if (Date.now() < this.ignoreRemoteUntil) return;
          const val = snap.val();
          if (!val || !val.lastUpdated) return;
          if (val.lastUpdated > state.lastUpdated) {
            if (Array.isArray(val.weeks) && val.weeks.length === 44) state.weeks = val.weeks;
            if (val.holidays) state.holidays = val.holidays;
            if (val.calendarEvents) state.calendarEvents = val.calendarEvents;
            if (val.dayMarks !== undefined) state.dayMarks = val.dayMarks || {};
            if (val.sessionBank) state.sessionBank = val.sessionBank;
            state.lastUpdated = val.lastUpdated;
            renderWorkspace();
            updateTopbarBadges();
          }
        });

        this.tareasRef.on("value", (snap) => {
          if (Date.now() < this.ignoreRemoteUntil) return;
          const val = snap.val();
          if (!val || !val.lastUpdated) return;
          if (val.lastUpdated > state.lastUpdated) {
            if (val.weeksData) {
              if (Array.isArray(val.weeksData)) {
                val.weeksData.forEach((item, i) => {
                  if (item) state.tareas.weeksData[String(i)] = item;
                });
              } else {
                state.tareas.weeksData = val.weeksData;
              }
            }
            if (val.neaeProfiles) state.tareas.neaeProfiles = val.neaeProfiles;
            if (Array.isArray(val.longTermTasks)) state.tareas.longTermTasks = val.longTermTasks;
            if (val.longTermState) state.tareas.longTermState = val.longTermState;
            renderWorkspace();
            updateTopbarBadges();
          }
        });
      } catch (e) {
        console.warn("Firebase en modo local:", e);
        this.setStatus("offline");
      }
    },

    setStatus(st) {
      this.status = st;
      const dot = document.getElementById("cloud-status-dot");
      if (!dot) return;
      dot.className = "cloud-dot " + (st === "online" ? "online" : (st === "syncing" ? "syncing" : ""));
    },

    pushAll() {
      if (!this.plannerRef || !this.tareasRef) return;
      try {
        this.setStatus("syncing");
        this.ignoreRemoteUntil = Date.now() + 1800;
        const ts = Date.now();
        this.plannerRef.update({
          weeks: state.weeks,
          holidays: state.holidays,
          calendarEvents: state.calendarEvents,
          dayMarks: state.dayMarks,
          sessionBank: state.sessionBank,
          lastUpdated: ts
        });
        this.tareasRef.update({
          currentWeekIndex: state.currentWeekIndex,
          weeksData: state.tareas.weeksData,
          neaeProfiles: state.tareas.neaeProfiles,
          longTermTasks: state.tareas.longTermTasks,
          longTermState: state.tareas.longTermState,
          lastUpdated: ts
        }).then(() => {
          this.setStatus("online");
        }).catch(() => {
          this.setStatus("offline");
        });
      } catch (e) {
        this.setStatus("offline");
      }
    }
  };

  function openCloudModal() {
    const body = document.getElementById("cloud-modal-body");
    body.innerHTML = `
      <div style="padding:12px;border-radius:8px;background:var(--bg-subtle);border:1px solid var(--border-medium);">
        <div style="font-size:11px;color:var(--text-muted);">Base de datos Realtime Database:</div>
        <div style="font-weight:800;font-size:12.5px;margin-top:2px;">mi-planner-clases (/planner_anual + /control_clases)</div>
        <div style="margin-top:8px;font-weight:700;color:${CloudSync.status === 'online' ? 'var(--success)' : 'var(--warning)'};">
          ${CloudSync.status === "online" ? "🟢 Sincronizado en tiempo real" : "🟠 Guardado en almacenamiento local"}
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;">
        <button type="button" class="corporate-btn primary" style="justify-content:center;height:34px;" onclick="App.forceCloudPushNow()">
          🔄 Forzar Sincronización a la Nube Ahora
        </button>
        <button type="button" class="corporate-btn" style="justify-content:center;height:34px;" onclick="App.exportFullBackup()">
          💾 Descargar Copia de Seguridad JSON Completa
        </button>
      </div>
    `;
    openModal("modal-cloud-sync");
  }

  // ==========================================================================
  // RENDERIZADOR PRINCIPAL DEL ESPACIO DE TRABAJO (PERSISTENCIA TOTAL DE SCROLL)
  // ==========================================================================

  function renderWorkspace(options = {}) {
    const ws = document.getElementById("main-workspace");
    if (!ws) return;

    if (!options.skipCapture) {
      ViewScrollMemory.capture();
    }

    ws.innerHTML = "";

    if (state.activeModule === "planner") {
      if (state.plannerView === "semanal") {
        renderPlannerWeeklyView(ws);
      } else if (state.plannerView === "replicar") {
        renderPlannerMatrixView(ws);
      } else if (state.plannerView === "banco") {
        renderPlannerBankView(ws);
      } else if (state.plannerView === "calendario") {
        renderPlannerCalendarView(ws);
      }
    } else {
      if (state.tareasView === "semanal") {
        renderTareasWeeklyView(ws);
      } else {
        renderTareasLongTermView(ws);
      }
    }

    ViewScrollMemory.restore();
  }

  // ==========================================================================
  // API PÚBLICA DE LA APLICACIÓN (window.App)
  // ==========================================================================

  window.App = {
    switchModule,
    switchPlannerView,
    switchTareasView,
    selectWeek,
    navigateWeek,
    goToCurrentCalendarWeek,
    goToNextCalendarWeek,
    onGlobalSearch,
    undo,
    redo,
    openModal,
    closeModal,
    openWeekPickerModal,

    // Semanal y sesiones
    togglePrepared(school, course, weekIdx) {
      pushUndoSnapshot();
      const s = ensureSessionObject(weekIdx, school, course);
      s.preparada = !s.preparada;
      persistAll(false);
      renderWorkspace();
    },
    onSlotNoteEdit(weekIdx, slotKey, val) {
      const w = state.weeks[weekIdx];
      if (!w.slot_notes) w.slot_notes = {};
      w.slot_notes[slotKey] = val;
      persistAll(false);
    },
    openEditSessionModal,
    toggleModalPrepared,
    insertSnippetInModal,
    saveEditSessionModal,
    shiftSingleCourseCascadeFromModal,
    sendModalSessionToReserveAndClear,

    // Replicación, Portapapeles y Matriz
    copySessionToClipboard,
    pasteFromClipboard,
    clearClipboard,
    setClipboardPasteMode,
    pasteToAllSameLevelInCurrentWeek,
    pasteToLevelInWeek,
    requestDeleteMatrixSession,
    cancelDeleteMatrixSession,
    confirmDeleteMatrixSession,
    shiftCourseCascadeManual,
    resolvePasteConflict,
    setMatrixScope(sc) { state.matrixScope = sc; renderWorkspace(); },
    setMatrixMonth(mKey) { state.matrixMonthKey = mKey; renderWorkspace(); },
    stepMatrixMonth(delta) {
      const i = SCHOOL_MONTHS.findIndex(m => m.key === state.matrixMonthKey);
      const next = i + delta;
      if (next >= 0 && next < SCHOOL_MONTHS.length) {
        state.matrixMonthKey = SCHOOL_MONTHS[next].key;
        renderWorkspace();
      }
    },
    setMatrixLevelFilter(lvl) { state.matrixLevelFilter = lvl; renderWorkspace(); },
    setMatrixSchoolFilter(sch) { state.matrixSchoolFilter = sch; renderWorkspace(); },

    // Banco de Sesiones
    setBankLevel(lvl) { state.bankSelectedLevel = lvl; renderWorkspace(); },
    copyBankSessionToClipboard,
    openBankDeployTemaModal,
    openBankDeploySingleSessionModal,
    openBankDeployCourseModal,
    selectBankDeployGroups,
    updateBankDeployPreview,
    confirmBankDeploy,
    openBankEditTemaModal,
    openBankEditSessionModal,
    saveBankEditModal,
    moveBankTema,
    deleteBankTema,
    moveBankSession,
    duplicateBankSession,
    deleteBankSession,

    // Calendario Escolar
    setCalendarMonth(mKey) { state.calendarMonthKey = mKey; renderWorkspace(); },
    stepCalendarMonth(delta) {
      const i = SCHOOL_MONTHS.findIndex(m => m.key === state.calendarMonthKey);
      const next = i + delta;
      if (next >= 0 && next < SCHOOL_MONTHS.length) {
        state.calendarMonthKey = SCHOOL_MONTHS[next].key;
        renderWorkspace();
      }
    },
    toggleDayNoLectivo,
    openCalendarDayModal,
    setCalModalMode,
    setAllCalModalGroups,
    saveCalendarDayConfig,
    clearCalendarDayConfig,
    selectCalMarkCategory,
    addMarkFromCalendarModal,
    removeMarkInModal,
    removeMarkWeekInModal,

    // Aplazar contenido y Reserva
    confirmPostponeAction,
    openReserveModal,
    restoreReserveToClipboard,
    deleteReserveItem,

    // Tareas
    setTareasFilter(f) { state.tareasFilter = f; renderWorkspace(); },
    toggleTareasHideDone() { state.tareasHideDone = !state.tareasHideDone; renderWorkspace(); },
    onNeaeTextareaInput,
    onPlannerLinkedTaskInput,
    togglePlannerLinkedTaskDone,
    onStandardTaskTextInput,
    toggleTareasCheck,
    togglePlannerPrintFromTareas,
    promptSetNextWeekPrint,
    toggleEducamosFromTareas,
    promptConfigurableTaskText,
    onTareasNoteInput,
    bulkToggleTareasColumn,
    openNewLongTermTaskModal,
    toggleLtManualGroupsBox,
    saveNewLongTermTaskModal,
    addNewLongTermTaskPrompt,
    toggleLongTermColumn,
    deleteLongTermTask,
    toggleLongTermCheck,
    updateNeaeProfile,

    // Cloud & Backups
    exportFullBackup,
    importFullBackup,
    openCloudModal,
    forceCloudPushNow() {
      CloudSync.pushAll();
      showToast("☁️ Sincronización enviada a Firebase");
    }
  };

  // ==========================================================================
  // ARRANQUE DE LA APLICACIÓN Y ATAJOS DE TECLADO
  // ==========================================================================

  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "z") {
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
      e.preventDefault();
      if (e.shiftKey) redo();
      else undo();
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "y") {
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
      e.preventDefault();
      redo();
    } else if (e.key === "Escape") {
      const openDialog = document.querySelector("dialog[open]");
      if (openDialog) {
        return;
      }
      const openModals = document.querySelectorAll(".modal-backdrop.open");
      if (openModals && openModals.length > 0) {
        openModals.forEach(m => m.classList.remove("open"));
        activeConflictContext = null;
        return;
      }
      if (state.clipboard) {
        e.preventDefault();
        clearClipboard();
        showToast("✕ Copia/pega cancelado");
      }
    }
  });

  window.addEventListener("resize", () => {
    if (state.activeModule === "planner" && state.plannerView === "semanal") {
      syncWeekFranjaHeights();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const delDlg = document.getElementById("confirm-delete-session-dialog");
    if (delDlg && typeof delDlg.addEventListener === "function") {
      delDlg.addEventListener("close", () => {
        if (delDlg.returnValue !== "confirm") {
          pendingDeleteMatrixSession = null;
        }
        delDlg.returnValue = "";
      });
    }
    loadInitialState();
    updateTopbarBadges();
    renderWorkspace();
    CloudSync.init();
  });
})();
