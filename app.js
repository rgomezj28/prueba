const modules = [
  {
    key: "comunicaciones",
    name: "Comunicaciones con Personas",
    description: "Registro de personas, comunicaciones y próximas acciones.",
    fields: [
      { key: "tipoRegistro", label: "Tipo de registro", type: "select", options: ["Persona", "Benefactor", "Comunicación", "Actividad"] },
      { key: "nombre", label: "Nombre y Apellido", type: "text" },
      { key: "tipoDocumento", label: "Tipo de documento", type: "select", options: ["Cédula", "RUC", "Pasaporte"] },
      { key: "documento", label: "N° de documento", type: "text", validate: "documento" },
      { key: "telefono", label: "Celular", type: "text", validate: "phone" },
      { key: "ciudad", label: "Ciudad", type: "text", validate: "city" },
      { key: "tipoContacto", label: "Tipo de contacto", type: "select", options: ["Llamada", "Mail", "Visita", "WhatsApp", "Evento", "Redes", "Otro"] },
      { key: "fechaContacto", label: "Fecha de contacto", type: "date" },
      { key: "proximaAccion", label: "Próxima acción", type: "text" },
      { key: "detalle", label: "Detalle", type: "textarea" }
    ]
  },
  {
    key: "benefactores",
    name: "Gestión de Benefactores",
    description: "Compromisos, voluntarios, cobros y aumentos de aportes.",
    fields: [
      { key: "tipoRegistro", label: "Tipo de registro", type: "select", options: ["Compromiso", "Voluntario", "Cobro", "Aumento"] },
      { key: "nombre", label: "Nombre y Apellido", type: "text" },
      { key: "fecha", label: "Fecha", type: "date" },
      { key: "destino", label: "Destino", type: "text" },
      { key: "periodicidad", label: "Periodicidad", type: "select", options: ["Mensual", "Trimestral", "Semestral", "Anual", "Ocasional"] },
      { key: "tipoPago", label: "Tipo de pago", type: "select", options: ["Oficina", "Transferencia", "Débito", "Depósito", "Especie"] },
      { key: "moneda", label: "Moneda", type: "select", options: ["Gs", "USD"] },
      { key: "importe", label: "Importe", type: "number" },
      { key: "observaciones", label: "Observaciones", type: "textarea" }
    ]
  },
  {
    key: "beneficiarios",
    name: "Gestión de Beneficiarios",
    description: "Registro de abuelos y ficha médica básica.",
    fields: [
      { key: "tipoRegistro", label: "Tipo de registro", type: "select", options: ["Abuelo", "Ficha médica"] },
      { key: "nombre", label: "Nombre y Apellido", type: "text" },
      { key: "cedula", label: "Cédula de Identidad", type: "text", validate: "cedula" },
      { key: "sexo", label: "Sexo", type: "select", options: ["Femenino", "Masculino", "Otro"] },
      { key: "fechaNacimiento", label: "Fecha de nacimiento", type: "date" },
      { key: "estado", label: "Estado", type: "select", options: ["Vivo", "Falleció", "Retiro voluntario"] },
      { key: "ingresoHogar", label: "Fecha ingreso al hogar", type: "date" },
      { key: "diagnostico", label: "Diagnóstico", type: "textarea" },
      { key: "medicacion", label: "Medicación", type: "textarea" }
    ]
  },
  {
    key: "administrativos",
    name: "Administrativos",
    description: "Órdenes de pago, donaciones en especie e insumos.",
    fields: [
      { key: "tipoRegistro", label: "Tipo de registro", type: "select", options: ["Orden de pago", "Salida de especie", "Insumo"] },
      { key: "fecha", label: "Fecha", type: "date" },
      { key: "numero", label: "Número", type: "text" },
      { key: "moneda", label: "Moneda", type: "select", options: ["Guaraníes", "USD"] },
      { key: "monto", label: "Monto", type: "number" },
      { key: "destino", label: "Destino", type: "text" },
      { key: "cuenta", label: "Cuenta contable", type: "text" },
      { key: "solicitante", label: "Solicitante", type: "text" },
      { key: "detalle", label: "Detalle", type: "textarea" }
    ]
  },
  {
    key: "notificaciones",
    name: "Notificaciones e Informes",
    description: "Gestión de recordatorios y emisión de reportes operativos.",
    fields: [
      { key: "tipo", label: "Tipo", type: "select", options: ["Cumpleaños beneficiario", "Cumpleaños benefactor", "Tarea captador", "Informe"] },
      { key: "responsable", label: "Responsable", type: "text" },
      { key: "fecha", label: "Fecha", type: "date" },
      { key: "prioridad", label: "Prioridad", type: "select", options: ["Baja", "Media", "Alta"] },
      { key: "estado", label: "Estado", type: "select", options: ["Pendiente", "En proceso", "Finalizada"] },
      { key: "descripcion", label: "Descripción", type: "textarea" }
    ]
  }
];

const users = [
  {
    username: "admin.general",
    password: "Admin2026!",
    displayName: "Administrador General",
    role: "Administrador",
    allowedModules: "all",
    canCreate: true,
    canImport: true,
    canDelete: true,
    ownDataOnly: false
  },
  {
    username: "benefactor.rosa",
    password: "Benef2026!",
    displayName: "Rosa Villalba",
    role: "Benefactor",
    allowedModules: ["benefactores"],
    canCreate: true,
    canImport: true,
    canDelete: false,
    ownDataOnly: false
  },
  {
    username: "persona.ana",
    password: "Pers2026!",
    displayName: "Ana Martínez",
    role: "Persona",
    allowedModules: ["comunicaciones"],
    canCreate: false,
    canImport: false,
    canDelete: false,
    ownDataOnly: true
  },
  {
    username: "captador.mario",
    password: "Capt2026!",
    displayName: "Mario Caballero",
    role: "Captación",
    allowedModules: ["comunicaciones", "notificaciones"],
    canCreate: true,
    canImport: true,
    canDelete: false,
    ownDataOnly: false
  }
];

const seededRecords = {
  comunicaciones: [
    {
      recordId: "com-001",
      ownerUsername: "persona.ana",
      ownerName: "Ana Martínez",
      tipoRegistro: "Persona",
      nombre: "Ana Martínez",
      documento: "4287712",
      telefono: "0981 441221",
      ciudad: "Asunción",
      tipoContacto: "Llamada",
      fechaContacto: "2026-03-11",
      proximaAccion: "Actualizar datos de contacto",
      detalle: "Solicitó ajuste de número secundario.",
      createdAt: "2026-03-11T09:24:00"
    },
    {
      recordId: "com-002",
      ownerUsername: "captador.mario",
      ownerName: "Mario Caballero",
      tipoRegistro: "Comunicación",
      nombre: "Carlos Arce",
      documento: "3190098",
      telefono: "0971 100230",
      ciudad: "Luque",
      tipoContacto: "WhatsApp",
      fechaContacto: "2026-03-09",
      proximaAccion: "Agendar visita",
      detalle: "Confirmó disponibilidad para la próxima semana.",
      createdAt: "2026-03-09T14:10:00"
    },
    {
      recordId: "com-003",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Benefactor",
      nombre: "Lourdes Cabañas",
      documento: "5327811",
      telefono: "0983 773118",
      ciudad: "San Lorenzo",
      tipoContacto: "Mail",
      fechaContacto: "2026-03-06",
      proximaAccion: "Compartir reporte de impacto",
      detalle: "Solicitó seguimiento trimestral de resultados.",
      createdAt: "2026-03-06T16:45:00"
    },
    {
      recordId: "com-004",
      ownerUsername: "captador.mario",
      ownerName: "Mario Caballero",
      tipoRegistro: "Actividad",
      nombre: "Grupo Vida Plena",
      documento: "-",
      telefono: "0984 998112",
      ciudad: "Fernando de la Mora",
      tipoContacto: "Evento",
      fechaContacto: "2026-03-03",
      proximaAccion: "Definir logística",
      detalle: "Coordinación de jornada comunitaria.",
      createdAt: "2026-03-03T10:32:00"
    }
  ],
  benefactores: [
    {
      recordId: "ben-001",
      ownerUsername: "benefactor.rosa",
      ownerName: "Rosa Villalba",
      tipoRegistro: "Compromiso",
      nombre: "Rosa Villalba",
      fecha: "2026-03-12",
      destino: "Medicamentos",
      periodicidad: "Mensual",
      tipoPago: "Transferencia",
      moneda: "Gs",
      importe: "350000",
      observaciones: "Aporte sostenido confirmado por 12 meses.",
      createdAt: "2026-03-12T08:15:00"
    },
    {
      recordId: "ben-002",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Cobro",
      nombre: "Jorge Alcaraz",
      fecha: "2026-03-08",
      destino: "Alimentos",
      periodicidad: "Mensual",
      tipoPago: "Débito",
      moneda: "Gs",
      importe: "500000",
      observaciones: "Cobro procesado sin diferencias.",
      createdAt: "2026-03-08T11:26:00"
    },
    {
      recordId: "ben-003",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Voluntario",
      nombre: "Andrea Duarte",
      fecha: "2026-03-04",
      destino: "Acompañamiento",
      periodicidad: "Ocasional",
      tipoPago: "Especie",
      moneda: "Gs",
      importe: "0",
      observaciones: "Apoyo de 2 jornadas semanales.",
      createdAt: "2026-03-04T13:00:00"
    },
    {
      recordId: "ben-004",
      ownerUsername: "benefactor.rosa",
      ownerName: "Rosa Villalba",
      tipoRegistro: "Aumento",
      nombre: "Rosa Villalba",
      fecha: "2026-03-02",
      destino: "Mantenimiento",
      periodicidad: "Mensual",
      tipoPago: "Transferencia",
      moneda: "USD",
      importe: "120",
      observaciones: "Incremento aprobado desde marzo.",
      createdAt: "2026-03-02T17:14:00"
    }
  ],
  beneficiarios: [
    {
      recordId: "bfi-001",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Abuelo",
      nombre: "Elena Fernández",
      cedula: "1567091",
      sexo: "Femenino",
      fechaNacimiento: "1942-08-17",
      estado: "Vivo",
      ingresoHogar: "2021-05-20",
      diagnostico: "Control de hipertensión",
      medicacion: "Losartán 50mg",
      createdAt: "2026-03-10T09:00:00"
    },
    {
      recordId: "bfi-002",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Ficha médica",
      nombre: "Roberto Acosta",
      cedula: "1329076",
      sexo: "Masculino",
      fechaNacimiento: "1939-01-09",
      estado: "Vivo",
      ingresoHogar: "2019-11-03",
      diagnostico: "Diabetes tipo II",
      medicacion: "Metformina 850mg",
      createdAt: "2026-03-08T10:41:00"
    },
    {
      recordId: "bfi-003",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Abuelo",
      nombre: "Julio Gómez",
      cedula: "2011765",
      sexo: "Masculino",
      fechaNacimiento: "1944-03-25",
      estado: "Vivo",
      ingresoHogar: "2022-02-14",
      diagnostico: "Artritis en seguimiento",
      medicacion: "Paracetamol 500mg",
      createdAt: "2026-03-05T15:20:00"
    },
    {
      recordId: "bfi-004",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Ficha médica",
      nombre: "Nilda Cristaldo",
      cedula: "1784412",
      sexo: "Femenino",
      fechaNacimiento: "1941-12-02",
      estado: "Vivo",
      ingresoHogar: "2018-07-09",
      diagnostico: "Control cardiológico",
      medicacion: "Atenolol 25mg",
      createdAt: "2026-03-01T12:18:00"
    }
  ],
  administrativos: [
    {
      recordId: "adm-001",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Orden de pago",
      fecha: "2026-03-13",
      numero: "OP-2026-117",
      moneda: "Guaraníes",
      monto: "2100000",
      destino: "Servicios médicos",
      cuenta: "5.1.03",
      solicitante: "Coord. Salud",
      detalle: "Pago a proveedor de estudios clínicos.",
      createdAt: "2026-03-13T09:11:00"
    },
    {
      recordId: "adm-002",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Salida de especie",
      fecha: "2026-03-07",
      numero: "SE-2026-042",
      moneda: "Guaraníes",
      monto: "0",
      destino: "Ropa de cama",
      cuenta: "3.2.08",
      solicitante: "Depósito",
      detalle: "Entrega interna de stock para habitaciones.",
      createdAt: "2026-03-07T16:50:00"
    },
    {
      recordId: "adm-003",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Insumo",
      fecha: "2026-03-05",
      numero: "IN-2026-199",
      moneda: "Guaraníes",
      monto: "780000",
      destino: "Limpieza",
      cuenta: "4.4.01",
      solicitante: "Administración",
      detalle: "Reposición mensual de productos.",
      createdAt: "2026-03-05T11:05:00"
    },
    {
      recordId: "adm-004",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipoRegistro: "Orden de pago",
      fecha: "2026-03-01",
      numero: "OP-2026-098",
      moneda: "USD",
      monto: "240",
      destino: "Mantenimiento eléctrico",
      cuenta: "5.2.02",
      solicitante: "Infraestructura",
      detalle: "Reparación del tablero principal.",
      createdAt: "2026-03-01T08:39:00"
    }
  ],
  notificaciones: [
    {
      recordId: "not-001",
      ownerUsername: "captador.mario",
      ownerName: "Mario Caballero",
      tipo: "Informe",
      responsable: "Andrea Cáceres",
      fecha: "2026-03-14",
      prioridad: "Alta",
      estado: "En proceso",
      descripcion: "Consolidación semanal de indicadores de gestión.",
      createdAt: "2026-03-14T10:10:00"
    },
    {
      recordId: "not-002",
      ownerUsername: "captador.mario",
      ownerName: "Mario Caballero",
      tipo: "Tarea captador",
      responsable: "Luis Medina",
      fecha: "2026-03-12",
      prioridad: "Media",
      estado: "Pendiente",
      descripcion: "Seguimiento de cartera con vencimiento próximo.",
      createdAt: "2026-03-12T15:40:00"
    },
    {
      recordId: "not-003",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipo: "Cumpleaños beneficiario",
      responsable: "Mariana Ruiz",
      fecha: "2026-03-18",
      prioridad: "Baja",
      estado: "Pendiente",
      descripcion: "Preparación de actividad de integración.",
      createdAt: "2026-03-11T13:25:00"
    },
    {
      recordId: "not-004",
      ownerUsername: "admin.general",
      ownerName: "Administrador General",
      tipo: "Cumpleaños benefactor",
      responsable: "Paola Duarte",
      fecha: "2026-03-16",
      prioridad: "Media",
      estado: "Finalizada",
      descripcion: "Envío de mensaje institucional y agradecimiento.",
      createdAt: "2026-03-10T09:47:00"
    }
  ]
};

const DASHBOARD_VIEW = "dashboard";
const BACKUP_SETTINGS_KEY = "sgi_backup_settings";
const BACKUP_HISTORY_KEY = "sgi_backup_history";
const DEMO_SEED_VERSION = "2026-03-17";
const DEMO_SEED_VERSION_KEY = "sistema_demo_seed_version";

let currentUser = null;
let activeModuleKey = modules[0].key;
let activeView = DASHBOARD_VIEW;
let backupTimerId = null;

const moduleMenu = document.getElementById("moduleMenu");
const dashboardSection = document.getElementById("dashboardSection");
const moduleSection = document.getElementById("moduleSection");
const dashboardWelcome = document.getElementById("dashboardWelcome");
const heroFocus = document.getElementById("heroFocus");
const heroLastMovement = document.getElementById("heroLastMovement");
const dashboardTotalRecords = document.getElementById("dashboardTotalRecords");
const dashboardPendingItems = document.getElementById("dashboardPendingItems");
const dashboardCoverage = document.getElementById("dashboardCoverage");
const dashboardBackupLast = document.getElementById("dashboardBackupLast");
const dashboardModuleCards = document.getElementById("dashboardModuleCards");
const recentActivity = document.getElementById("recentActivity");
const priorityList = document.getElementById("priorityList");
const backupForm = document.getElementById("backupForm");
const backupFrequency = document.getElementById("backupFrequency");
const backupStatus = document.getElementById("backupStatus");
const backupNextRun = document.getElementById("backupNextRun");
const backupLastRun = document.getElementById("backupLastRun");
const backupHistory = document.getElementById("backupHistory");
const runBackupNowButton = document.getElementById("runBackupNow");
const downloadBackupButton = document.getElementById("downloadBackup");
const moduleTitle = document.getElementById("moduleTitle");
const moduleDescription = document.getElementById("moduleDescription");
const recordForm = document.getElementById("recordForm");
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");
const statTotal = document.getElementById("statTotal");
const statLast = document.getElementById("statLast");
const statModules = document.getElementById("statModules");
const exportExcelButton = document.getElementById("exportExcelButton");
const importFile = document.getElementById("importFile");
const importButton = document.getElementById("importButton");
const loginOverlay = document.getElementById("loginOverlay");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const userBadge = document.getElementById("userBadge");
const logoutButton = document.getElementById("logoutButton");

function storageKey(moduleKey) {
  return `sistema_registros_${moduleKey}`;
}

function createRecordId(prefix = "rec") {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

function normalizeField(text) {
  return String(text || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDateField(value) {
  if (!value) return "-";
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return value;
  return `${match[3]}/${match[2]}/${match[1]}`;
}

function formatDateTime(value, fallback = "Sin datos") {
  if (!value) {
    return fallback;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  return date.toLocaleString("es-PY", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function getModule(moduleKey) {
  return modules.find((item) => item.key === moduleKey);
}

function getAccessModules() {
  if (!currentUser) {
    return [];
  }

  if (currentUser.allowedModules === "all") {
    return modules;
  }

  return modules.filter((module) => currentUser.allowedModules.includes(module.key));
}

function hasModuleAccess(moduleKey) {
  return getAccessModules().some((module) => module.key === moduleKey);
}

function migrateRecords(moduleKey, records) {
  let hasChanges = false;
  const migrated = records.map((record) => {
    const copy = { ...record };

    if (!copy.recordId) {
      copy.recordId = createRecordId(moduleKey.slice(0, 3));
      hasChanges = true;
    }

    if (!copy.ownerUsername) {
      copy.ownerUsername = "admin.general";
      copy.ownerName = "Administrador General";
      hasChanges = true;
    }

    if (!copy.createdAt) {
      copy.createdAt = new Date().toISOString();
      hasChanges = true;
    }

    return copy;
  });

  if (hasChanges) {
    localStorage.setItem(storageKey(moduleKey), JSON.stringify(migrated));
  }

  return migrated;
}

function getRecords(moduleKey) {
  const data = localStorage.getItem(storageKey(moduleKey));
  let parsed = [];

  if (data) {
    try {
      const decoded = JSON.parse(data);
      parsed = Array.isArray(decoded) ? decoded : [];
    } catch {
      localStorage.removeItem(storageKey(moduleKey));
      parsed = [];
    }
  }

  return migrateRecords(moduleKey, parsed);
}

function saveRecords(moduleKey, records) {
  localStorage.setItem(storageKey(moduleKey), JSON.stringify(records));
}

function getVisibleRecords(moduleKey) {
  const records = getRecords(moduleKey);

  if (!currentUser) {
    return [];
  }

  if (!currentUser.ownDataOnly) {
    return records;
  }

  return records.filter((record) => record.ownerUsername === currentUser.username);
}

function getAccessibleModuleData() {
  return getAccessModules().map((module) => ({
    module,
    records: getVisibleRecords(module.key)
  }));
}

function getAllVisibleEntries() {
  return getAccessibleModuleData()
    .flatMap(({ module, records }) => records.map((record) => ({ module, record })))
    .sort((a, b) => new Date(b.record.createdAt) - new Date(a.record.createdAt));
}

function seedDataIfEmpty() {
  const storedVersion = localStorage.getItem(DEMO_SEED_VERSION_KEY);
  const shouldMergeSeed = storedVersion !== DEMO_SEED_VERSION;

  modules.forEach((module) => {
    const existing = getRecords(module.key);
    const seedRows = (seededRecords[module.key] || []).map((record) => ({ ...record }));

    if (!seedRows.length) {
      return;
    }

    if (!existing.length) {
      saveRecords(module.key, seedRows);
      return;
    }

    if (!shouldMergeSeed) {
      return;
    }

    const existingIds = new Set(existing.map((record) => record.recordId));
    const missingSeedRows = seedRows.filter((record) => !existingIds.has(record.recordId));
    if (missingSeedRows.length) {
      saveRecords(module.key, [...missingSeedRows, ...existing]);
    }
  });

  localStorage.setItem(DEMO_SEED_VERSION_KEY, DEMO_SEED_VERSION);
}

function runImportSmokeTest() {
  const module = getModule("comunicaciones");
  if (!module) {
    return;
  }

  const backupUser = currentUser;
  const testUser = users.find((user) => user.username === "admin.general") || users[0];
  currentUser = testUser;

  try {
    const jsonText = JSON.stringify([
      {
        tipoRegistro: "Comunicación",
        nombre: "Prueba Import JSON",
        documento: "9000001",
        telefono: "0991 100100",
        ciudad: "Asunción",
        tipoContacto: "Mail",
        fechaContacto: "2026-03-17",
        proximaAccion: "Validación parser",
        detalle: "Registro de prueba para parser JSON"
      }
    ]);

    const csvText = [
      "tipoRegistro,nombre,documento,telefono,ciudad,tipoContacto,fechaContacto,proximaAccion,detalle",
      "Comunicación,Prueba Import CSV,9000002,0991 200200,Luque,WhatsApp,2026-03-17,Validación parser,Registro de prueba para parser CSV"
    ].join("\n");

    const importedFromJson = parseJsonContent(module, jsonText);
    const importedFromCsv = parseCsvContent(module, csvText);
    if (!importedFromJson.length || !importedFromCsv.length) {
      throw new Error("No se pudo validar la carga de prueba JSON/CSV.");
    }
  } catch (error) {
    console.error("Fallo en verificación de carga JSON/CSV:", error);
  } finally {
    currentUser = backupUser;
  }
}

function updateStats(module) {
  const records = getVisibleRecords(module.key);
  statTotal.textContent = records.length;
  statModules.textContent = getAccessModules().length;
  statLast.textContent = records.length ? formatDateTime(records[0].createdAt, "Sin movimientos") : "Sin movimientos";
}

function buildExcelReport(module, records) {
  const headers = ["Fecha", ...module.fields.map((field) => field.label)];

  const rowsHtml = records
    .map((record) => {
      const cells = [formatDateTime(record.createdAt), ...module.fields.map((field) => record[field.key] || "-")];
      return `<tr>${cells.map((value) => `<td>${escapeHtml(value)}</td>`).join("")}</tr>`;
    })
    .join("");

  return `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="UTF-8"></head>
      <body>
        <table border="1">
          <thead><tr>${headers.map((item) => `<th>${escapeHtml(item)}</th>`).join("")}</tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </body>
    </html>
  `;
}

function downloadBlob(filename, type, content) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function downloadExcel(module) {
  const records = getVisibleRecords(module.key);
  if (!records.length) {
    alert("No hay registros para exportar.");
    return;
  }

  const content = buildExcelReport(module, records);
  const date = new Date().toISOString().slice(0, 10);
  downloadBlob(`informe_${module.key}_${currentUser.username}_${date}.xls`, "application/vnd.ms-excel;charset=utf-8;", content);
}

function parseCsvLine(line) {
  const values = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        value += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      values.push(value.trim());
      value = "";
    } else {
      value += char;
    }
  }

  values.push(value.trim());
  return values;
}

function convertRowsToRecords(module, rows) {
  const fieldMap = {};
  module.fields.forEach((field) => {
    fieldMap[normalizeField(field.key)] = field.key;
    fieldMap[normalizeField(field.label)] = field.key;
  });

  return rows
    .map((row) => {
      const mapped = {};
      Object.entries(row).forEach(([key, value]) => {
        const normalized = normalizeField(key);
        const fieldKey = fieldMap[normalized];
        if (fieldKey) {
          mapped[fieldKey] = String(value || "").trim();
        }
      });

      if (!Object.keys(mapped).length) {
        return null;
      }

      mapped.recordId = createRecordId(module.key.slice(0, 3));
      mapped.ownerUsername = currentUser.username;
      mapped.ownerName = currentUser.displayName;
      mapped.createdAt = new Date().toISOString();
      return mapped;
    })
    .filter(Boolean);
}

function parseJsonContent(module, text) {
  const payload = JSON.parse(text);
  if (!Array.isArray(payload)) {
    throw new Error("El archivo JSON debe contener una lista de objetos.");
  }

  return convertRowsToRecords(module, payload);
}

function parseCsvContent(module, text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  if (lines.length < 2) {
    throw new Error("El archivo CSV no contiene filas suficientes.");
  }

  const headers = parseCsvLine(lines[0]);
  const rows = lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });

    return row;
  });

  return convertRowsToRecords(module, rows);
}

async function importRecordsFromFile(module) {
  if (!currentUser?.canImport) {
    return;
  }

  const file = importFile.files?.[0];
  if (!file) {
    alert("Selecciona un archivo JSON o CSV para continuar.");
    return;
  }

  const text = await file.text();
  const extension = file.name.split(".").pop()?.toLowerCase();

  let imported = [];
  if (extension === "json") {
    imported = parseJsonContent(module, text);
  } else if (extension === "csv") {
    imported = parseCsvContent(module, text);
  } else {
    alert("Formato no compatible. Usa archivos JSON o CSV.");
    return;
  }

  if (!imported.length) {
    alert("No se encontraron filas validas para este modulo.");
    return;
  }

  const current = getRecords(module.key);
  saveRecords(module.key, [...imported, ...current]);
  importFile.value = "";
  render();
}

function createField(field) {
  const wrapper = document.createElement("div");
  wrapper.className = "field";

  const label = document.createElement("label");
  label.htmlFor = field.key;
  label.textContent = field.label;

  let input;
  if (field.type === "select") {
    input = document.createElement("select");
    field.options.forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      input.appendChild(option);
    });
  } else if (field.type === "textarea") {
    input = document.createElement("textarea");
  } else {
    input = document.createElement("input");
    input.type = field.type;
  }

  input.id = field.key;
  input.name = field.key;

  if (field.validate === "phone") {
    input.inputMode = "tel";
    input.placeholder = "Ej: 0981 123 456";
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9\s\-\+\(\)]/g, "");
    });
  } else if (field.validate === "city") {
    input.placeholder = "Ej: Asunción";
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[0-9]/g, "");
    });
  } else if (field.validate === "cedula") {
    input.inputMode = "numeric";
    input.placeholder = "Ej: 1234567";
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9]/g, "");
    });
  } else if (field.validate === "documento") {
    input.inputMode = "numeric";
    input.placeholder = "Ej: 1234567";
    input.dataset.docMode = "numerico";
    input.addEventListener("input", () => {
      if (input.dataset.docMode !== "alfanumerico") {
        input.value = input.value.replace(/[^0-9]/g, "");
      }
    });
  }

  wrapper.appendChild(label);
  wrapper.appendChild(input);
  return wrapper;
}

function getViewDescription(module) {
  if (!module) {
    return "Vista ejecutiva con indicadores de gestion, actividad y control de respaldo.";
  }

  return currentUser.ownDataOnly ? `${module.description} Acceso personal habilitado.` : module.description;
}

function renderMenu() {
  moduleMenu.innerHTML = "";

  const dashboardButton = document.createElement("button");
  dashboardButton.className = `menu-btn ${activeView === DASHBOARD_VIEW ? "active" : ""}`;
  dashboardButton.type = "button";
  dashboardButton.innerHTML = '<span class="menu-btn-title">Dashboard SGI</span><span class="menu-btn-text">KPIs, actividad reciente, alertas y backup.</span>';
  dashboardButton.addEventListener("click", () => {
    activeView = DASHBOARD_VIEW;
    render();
  });
  moduleMenu.appendChild(dashboardButton);

  getAccessModules().forEach((item) => {
    const button = document.createElement("button");
    button.className = `menu-btn ${activeView === item.key ? "active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span class="menu-btn-title">${escapeHtml(item.name)}</span><span class="menu-btn-text">${escapeHtml(item.description)}</span>`;
    button.addEventListener("click", () => {
      activeView = item.key;
      activeModuleKey = item.key;
      render();
    });
    moduleMenu.appendChild(button);
  });
}

function renderForm(module) {
  recordForm.innerHTML = "";

  if (!currentUser.canCreate) {
    const readOnlyMessage = document.createElement("div");
    readOnlyMessage.className = "empty";
    readOnlyMessage.textContent = "Tu perfil es de solo consulta para este modulo.";
    recordForm.appendChild(readOnlyMessage);
    return;
  }

  module.fields.forEach((field) => {
    recordForm.appendChild(createField(field));
  });

  // Cross-field: tipoDocumento selector drives documento validation rules
  const tipoDocEl = recordForm.querySelector("#tipoDocumento");
  const documentoEl = recordForm.querySelector("#documento");
  if (tipoDocEl && documentoEl) {
    const applyDocRule = () => {
      const tipo = tipoDocEl.value;
      if (tipo === "Cédula") {
        documentoEl.inputMode = "numeric";
        documentoEl.placeholder = "Solo números. Ej: 1234567";
        documentoEl.dataset.docMode = "numerico";
      } else if (tipo === "RUC") {
        documentoEl.inputMode = "text";
        documentoEl.placeholder = "Ej: 80012345-1";
        documentoEl.dataset.docMode = "alfanumerico";
      } else {
        documentoEl.inputMode = "text";
        documentoEl.placeholder = "Ej: AB123456";
        documentoEl.dataset.docMode = "alfanumerico";
      }
    };
    tipoDocEl.addEventListener("change", applyDocRule);
    applyDocRule();
  }

  const actions = document.createElement("div");
  actions.className = "actions";

  const saveButton = document.createElement("button");
  saveButton.type = "submit";
  saveButton.className = "primary";
  saveButton.textContent = "Guardar registro";

  const clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.className = "secondary";
  clearButton.textContent = "Limpiar formulario";
  clearButton.addEventListener("click", () => recordForm.reset());

  actions.appendChild(saveButton);
  actions.appendChild(clearButton);
  recordForm.appendChild(actions);

  recordForm.onsubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(recordForm).entries());
    data.recordId = createRecordId(module.key.slice(0, 3));
    data.ownerUsername = currentUser.username;
    data.ownerName = currentUser.displayName;
    data.createdAt = new Date().toISOString();

    const records = getRecords(module.key);
    records.unshift(data);
    saveRecords(module.key, records);

    recordForm.reset();
    render();
  };
}

function renderTable(module) {
  const records = getVisibleRecords(module.key);
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

  const headers = ["Fecha"];
  module.fields.slice(0, 5).forEach((field) => headers.push(field.label));

  const trHead = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    trHead.appendChild(th);
  });

  const thActions = document.createElement("th");
  thActions.textContent = "Acciones";
  trHead.appendChild(thActions);
  tableHead.appendChild(trHead);

  if (!records.length) {
    const emptyRow = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = headers.length + 1;
    td.className = "empty";
    td.textContent = "No hay registros cargados para este modulo.";
    emptyRow.appendChild(td);
    tableBody.appendChild(emptyRow);
    return;
  }

  records.forEach((record) => {
    const row = document.createElement("tr");
    const dateCell = document.createElement("td");
    dateCell.textContent = formatDateTime(record.createdAt);
    row.appendChild(dateCell);

    module.fields.slice(0, 5).forEach((field) => {
      const td = document.createElement("td");
      td.textContent = field.type === "date" ? formatDateField(record[field.key]) : (record[field.key] || "-");
      row.appendChild(td);
    });

    const actionTd = document.createElement("td");
    if (currentUser.canDelete) {
      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "secondary";
      deleteButton.textContent = "Eliminar";
      deleteButton.addEventListener("click", () => {
        const updated = getRecords(module.key).filter((item) => item.recordId !== record.recordId);
        saveRecords(module.key, updated);
        render();
      });
      actionTd.appendChild(deleteButton);
    } else {
      actionTd.textContent = "-";
    }

    row.appendChild(actionTd);
    tableBody.appendChild(row);
  });
}

function applyRoleUI(module) {
  exportExcelButton.disabled = false;
  const canImport = currentUser.canImport;
  importFile.disabled = !canImport;
  importButton.disabled = !canImport;
  importButton.textContent = canImport ? "Cargar archivo" : "Carga no disponible";

  if (!currentUser.canCreate) {
    recordForm.setAttribute("aria-disabled", "true");
  } else {
    recordForm.removeAttribute("aria-disabled");
  }

  moduleDescription.textContent = getViewDescription(module);
}

function ensureActiveModule() {
  const allowed = getAccessModules();
  if (!allowed.length) {
    activeModuleKey = null;
    return null;
  }

  if (!activeModuleKey || !hasModuleAccess(activeModuleKey)) {
    activeModuleKey = allowed[0].key;
  }

  return getModule(activeModuleKey);
}

function computePendingItems() {
  return getAccessibleModuleData().reduce((total, { module, records }) => {
    if (module.key === "notificaciones") {
      return total + records.filter((record) => record.estado !== "Finalizada").length;
    }

    if (module.key === "comunicaciones") {
      return total + records.filter((record) => record.proximaAccion).length;
    }

    return total;
  }, 0);
}

function buildPriorityItems() {
  const priorities = [];

  getAccessibleModuleData().forEach(({ module, records }) => {
    records.forEach((record) => {
      if (module.key === "notificaciones" && record.estado !== "Finalizada") {
        priorities.push({
          level: record.prioridad === "Alta" ? "high" : record.prioridad === "Media" ? "medium" : "low",
          title: record.tipo || module.name,
          detail: record.descripcion || "Seguimiento operativo en curso.",
          meta: `${module.name} · ${record.responsable || record.ownerName || "Sin responsable"} · ${record.fecha ? formatDateField(record.fecha) : formatDateTime(record.createdAt)}`
        });
      }

      if (module.key === "comunicaciones" && record.proximaAccion) {
        priorities.push({
          level: "medium",
          title: record.nombre || "Seguimiento pendiente",
          detail: record.proximaAccion,
          meta: `${module.name} · ${record.tipoContacto || "Contacto"} · ${record.fechaContacto ? formatDateField(record.fechaContacto) : formatDateTime(record.createdAt)}`
        });
      }
    });
  });

  return priorities.slice(0, 6);
}

function getBackupSettings() {
  const raw = localStorage.getItem(BACKUP_SETTINGS_KEY);
  if (!raw) {
    return { frequency: "off", nextRunAt: null, lastRunAt: null };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      frequency: parsed.frequency || "off",
      nextRunAt: parsed.nextRunAt || null,
      lastRunAt: parsed.lastRunAt || null
    };
  } catch {
    return { frequency: "off", nextRunAt: null, lastRunAt: null };
  }
}

function saveBackupSettings(settings) {
  localStorage.setItem(BACKUP_SETTINGS_KEY, JSON.stringify(settings));
}

function getBackupHistoryItems() {
  const raw = localStorage.getItem(BACKUP_HISTORY_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveBackupHistoryItems(items) {
  localStorage.setItem(BACKUP_HISTORY_KEY, JSON.stringify(items.slice(0, 8)));
}

function getFrequencyDescriptor(frequency) {
  switch (frequency) {
    case "demo30":
      return { label: "Cada 30 segundos (demo)", intervalMs: 30 * 1000 };
    case "daily":
      return { label: "Diario", intervalMs: 24 * 60 * 60 * 1000 };
    case "weekly":
      return { label: "Semanal", intervalMs: 7 * 24 * 60 * 60 * 1000 };
    default:
      return { label: "Sin programar", intervalMs: null };
  }
}

function getNextRunAt(frequency, baseDate = Date.now()) {
  const descriptor = getFrequencyDescriptor(frequency);
  if (!descriptor.intervalMs) {
    return null;
  }

  return new Date(baseDate + descriptor.intervalMs).toISOString();
}

function buildBackupPayload() {
  return {
    generatedAt: new Date().toISOString(),
    generatedBy: currentUser ? currentUser.displayName : "Sistema",
    modules: modules.map((module) => ({
      key: module.key,
      name: module.name,
      records: getRecords(module.key)
    }))
  };
}

function createBackupSnapshot(sourceLabel = "Manual") {
  const payload = buildBackupPayload();
  const settings = getBackupSettings();
  const historyItems = getBackupHistoryItems();
  historyItems.unshift({
    id: createRecordId("bkp"),
    source: sourceLabel,
    generatedAt: payload.generatedAt,
    recordCount: payload.modules.reduce((sum, module) => sum + module.records.length, 0),
    payload
  });
  saveBackupHistoryItems(historyItems);
  saveBackupSettings({
    ...settings,
    lastRunAt: payload.generatedAt,
    nextRunAt: settings.frequency === "off" ? null : getNextRunAt(settings.frequency, Date.now())
  });
  scheduleBackupTimer();
}

function downloadLatestBackup() {
  const latest = getBackupHistoryItems()[0];
  if (!latest) {
    alert("Todavia no existe un backup generado.");
    return;
  }

  const filename = `sgi_backup_${latest.generatedAt.slice(0, 19).replaceAll(":", "-")}.json`;
  downloadBlob(filename, "application/json;charset=utf-8;", JSON.stringify(latest.payload, null, 2));
}

function scheduleBackupTimer() {
  if (backupTimerId) {
    clearTimeout(backupTimerId);
    backupTimerId = null;
  }

  const settings = getBackupSettings();
  if (!settings.nextRunAt) {
    return;
  }

  const delay = new Date(settings.nextRunAt).getTime() - Date.now();
  if (delay <= 0) {
    createBackupSnapshot("Programado");
    return;
  }

  backupTimerId = window.setTimeout(() => {
    createBackupSnapshot("Programado");
  }, delay);
}

function renderBackupPanel() {
  const settings = getBackupSettings();
  const descriptor = getFrequencyDescriptor(settings.frequency);
  const historyItems = getBackupHistoryItems();
  const latest = historyItems[0];

  backupFrequency.value = settings.frequency;
  backupStatus.textContent = descriptor.label;
  backupStatus.className = `status-pill ${settings.frequency === "off" ? "" : latest ? "ok" : "warning"}`.trim();
  backupNextRun.textContent = formatDateTime(settings.nextRunAt, settings.frequency === "off" ? "No definida" : "Pendiente");
  backupLastRun.textContent = formatDateTime(settings.lastRunAt, "Aun no ejecutado");
  dashboardBackupLast.textContent = formatDateTime(settings.lastRunAt, "Sin respaldo");
  downloadBackupButton.disabled = !latest;

  backupHistory.innerHTML = "";
  if (!historyItems.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty";
    emptyState.textContent = "Sin backups registrados. Puedes generar uno ahora o dejarlo programado para la demo.";
    backupHistory.appendChild(emptyState);
    return;
  }

  historyItems.slice(0, 4).forEach((item) => {
    const article = document.createElement("article");
    article.className = "backup-history-item";
    article.innerHTML = `
      <strong>${escapeHtml(item.source)} · ${escapeHtml(formatDateTime(item.generatedAt))}</strong>
      <p>${escapeHtml(`${item.recordCount} registros incluidos en el respaldo`)}</p>
    `;
    backupHistory.appendChild(article);
  });
}

let moduleDistributionChartInstance = null;
let taskStatusChartInstance = null;

function renderModuleDistributionChart() {
  const chartCanvas = document.getElementById("moduleDistributionChart");
  
  if (!chartCanvas) return;

  const allModuleData = modules.map((module) => ({
    module,
    records: getRecords(module.key)
  }));

  const labels = allModuleData.map((item) => item.module.name);
  const data = allModuleData.map((item) => item.records.length);
  const backgroundColors = [
    "#38A169",
    "#68D391",
    "#48BB78",
    "#2F855A",
    "#22543D",
  ];

  if (moduleDistributionChartInstance) {
    moduleDistributionChartInstance.destroy();
  }

  moduleDistributionChartInstance = new Chart(chartCanvas, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColors.slice(0, labels.length),
        borderColor: "#ffffff",
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: { size: 12, weight: "600" },
            color: "#2d3748",
            padding: 16,
          }
        }
      }
    }
  });
}

function renderTaskStatusChart() {
  const chartCanvas = document.getElementById("taskStatusChart");
  
  if (!chartCanvas) return;

  const allModuleData = modules.map((module) => ({
    module,
    records: getRecords(module.key)
  }));

  const allRecords = allModuleData.flatMap((item) => item.records);
  const highCount = allRecords.filter((r) => r.prioridad === "Alta").length;
  const mediumCount = allRecords.filter((r) => r.prioridad === "Media").length;
  const lowCount = allRecords.filter((r) => r.prioridad === "Baja").length;

  const labels = ["Alta", "Media", "Baja"];
  const data = [highCount, mediumCount, lowCount];
  const backgroundColors = ["#e53e3e", "#f6ad55", "#48bb78"];

  if (taskStatusChartInstance) {
    taskStatusChartInstance.destroy();
  }

  taskStatusChartInstance = new Chart(chartCanvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Cantidad de tareas",
        data: data,
        backgroundColor: backgroundColors,
        borderRadius: 6,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "x",
      plugins: {
        legend: {
          display: false,
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            color: "#4a5568",
            font: { size: 11 }
          },
          grid: {
            color: "rgba(200, 200, 200, 0.1)",
            drawBorder: false,
          }
        },
        x: {
          ticks: {
            color: "#2d3748",
            font: { size: 12, weight: "600" }
          },
          grid: {
            display: false,
          }
        }
      }
    }
  });
}

function renderDashboard() {
  const moduleData = getAccessibleModuleData();
  const allEntries = getAllVisibleEntries();
  const totalRecords = allEntries.length;
  const pendingItems = computePendingItems();
  const modulesWithData = moduleData.filter(({ records }) => records.length).length;
  const coverage = moduleData.length ? Math.round((modulesWithData / moduleData.length) * 100) : 0;
  const lastEntry = allEntries[0];
  const priorityItems = buildPriorityItems();

  dashboardWelcome.textContent = currentUser
    ? `${currentUser.displayName} ingresa a una vista inicial con indicadores ejecutivos, actividad reciente y control de respaldo.`
    : "Resumen listo para presentar indicadores, actividad reciente, prioridades y respaldo del sistema.";
  dashboardTotalRecords.textContent = String(totalRecords);
  dashboardPendingItems.textContent = String(pendingItems);
  dashboardCoverage.textContent = `${coverage}%`;
  heroFocus.textContent = `${pendingItems} alertas por revisar`;
  heroLastMovement.textContent = lastEntry ? `${lastEntry.module.name} · ${formatDateTime(lastEntry.record.createdAt)}` : "Sin actividad";

  dashboardModuleCards.innerHTML = "";
  moduleData.forEach(({ module, records }) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "module-card";
    card.innerHTML = `
      <h4>${escapeHtml(module.name)}</h4>
      <p>${escapeHtml(module.description)}</p>
      <strong>${records.length}</strong>
      <span class="activity-meta">Registros visibles</span>
    `;
    card.addEventListener("click", () => {
      activeView = module.key;
      activeModuleKey = module.key;
      render();
    });
    dashboardModuleCards.appendChild(card);
  });

  recentActivity.innerHTML = "";
  if (!allEntries.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty";
    emptyState.textContent = "Sin actividad reciente para mostrar.";
    recentActivity.appendChild(emptyState);
  } else {
    allEntries.slice(0, 5).forEach(({ module, record }) => {
      const article = document.createElement("article");
      article.className = "activity-item";
      article.innerHTML = `
        <strong>${escapeHtml(record.nombre || record.tipo || record.tipoRegistro || module.name)}</strong>
        <p>${escapeHtml(module.name)}</p>
        <span class="activity-meta">${escapeHtml(formatDateTime(record.createdAt))} · ${escapeHtml(record.ownerName || "Sistema")}</span>
      `;
      recentActivity.appendChild(article);
    });
  }

  priorityList.innerHTML = "";
  if (!priorityItems.length) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty";
    emptyState.textContent = "No hay alertas operativas pendientes.";
    priorityList.appendChild(emptyState);
  } else {
    priorityItems.forEach((item) => {
      const article = document.createElement("article");
      article.className = `priority-item ${item.level}`;
      article.innerHTML = `
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.detail)}</p>
        <span class="priority-meta">${escapeHtml(item.meta)}</span>
      `;
      priorityList.appendChild(article);
    });
  }

  renderBackupPanel();
  renderModuleDistributionChart();
  renderTaskStatusChart();
}

function renderModuleView(module) {
  moduleTitle.textContent = module.name;
  moduleDescription.textContent = getViewDescription(module);
  renderForm(module);
  renderTable(module);
  updateStats(module);
  applyRoleUI(module);
}

function render() {
  if (!currentUser) {
    return;
  }

  userBadge.textContent = `${currentUser.displayName} · ${currentUser.role}`;
  renderMenu();

  if (activeView === DASHBOARD_VIEW) {
    // Show section BEFORE rendering charts so Chart.js can measure canvas dimensions
    dashboardSection.classList.remove("hidden-section");
    moduleSection.classList.add("hidden-section");
    renderDashboard();
    // Force resize after browser layout paint to ensure correct chart dimensions
    requestAnimationFrame(() => {
      if (moduleDistributionChartInstance) moduleDistributionChartInstance.resize();
      if (taskStatusChartInstance) taskStatusChartInstance.resize();
    });
    return;
  }

  const module = ensureActiveModule();
  if (!module) {
    dashboardSection.classList.remove("hidden-section");
    moduleSection.classList.add("hidden-section");
    renderDashboard();
    requestAnimationFrame(() => {
      if (moduleDistributionChartInstance) moduleDistributionChartInstance.resize();
      if (taskStatusChartInstance) taskStatusChartInstance.resize();
    });
    return;
  }

  dashboardSection.classList.add("hidden-section");
  moduleSection.classList.remove("hidden-section");
  renderModuleView(module);
}

function setSession(user) {
  currentUser = user;
  activeView = DASHBOARD_VIEW;
  sessionStorage.setItem("sistema_active_user", user.username);
  loginOverlay.classList.add("hidden");
  // Delay render so the browser completes layout before Chart.js measures canvas dimensions
  setTimeout(render, 50);
}

function clearSession() {
  currentUser = null;
  activeView = DASHBOARD_VIEW;
  sessionStorage.removeItem("sistema_active_user");
  userBadge.textContent = "Sin sesión";
  moduleMenu.innerHTML = "";
  recordForm.innerHTML = "";
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";
  statTotal.textContent = "0";
  statLast.textContent = "-";
  statModules.textContent = "0";
  dashboardTotalRecords.textContent = "0";
  dashboardPendingItems.textContent = "0";
  dashboardCoverage.textContent = "0%";
  dashboardBackupLast.textContent = "Sin respaldo";
  loginMessage.textContent = "";
  loginForm.reset();
  dashboardSection.classList.remove("hidden-section");
  moduleSection.classList.add("hidden-section");
  loginOverlay.classList.remove("hidden");
}

function restoreSession() {
  const username = sessionStorage.getItem("sistema_active_user");
  if (!username) {
    return;
  }

  const user = users.find((item) => item.username === username);
  if (user) {
    setSession(user);
  }
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "").trim();

  const user = users.find((item) => item.username === username && item.password === password);
  if (!user) {
    loginMessage.textContent = "Usuario o contraseña incorrectos.";
    return;
  }

  loginMessage.textContent = "";
  setSession(user);
});

logoutButton.addEventListener("click", clearSession);

exportExcelButton.addEventListener("click", () => {
  const module = ensureActiveModule();
  if (!module) {
    return;
  }

  downloadExcel(module);
});

importButton.addEventListener("click", async () => {
  const module = ensureActiveModule();
  if (!module) {
    return;
  }

  try {
    await importRecordsFromFile(module);
  } catch (error) {
    alert(error.message || "No se pudo procesar el archivo.");
  }
});

backupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const frequency = backupFrequency.value;
  const settings = {
    frequency,
    lastRunAt: getBackupSettings().lastRunAt,
    nextRunAt: frequency === "off" ? null : getNextRunAt(frequency)
  };

  saveBackupSettings(settings);
  scheduleBackupTimer();
  renderBackupPanel();
});

runBackupNowButton.addEventListener("click", () => {
  createBackupSnapshot("Manual");
  render();
});

downloadBackupButton.addEventListener("click", downloadLatestBackup);

seedDataIfEmpty();
runImportSmokeTest();
scheduleBackupTimer();
restoreSession();
if (!currentUser) {
  clearSession();
}
