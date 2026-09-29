const fs = require('fs');

// Load existing 25 physics chapters
eval(fs.readFileSync('curriculum-data.js', 'utf8'));
const physicsChapters = NOVALEARN_DATA.chapters.filter(c => typeof c.num === 'number');

// Define gradient/icon mapping for physics chapters (no grade, no chapter number in title)
const iconStyles = {
  1: { badge: "NEW", gradient: "linear-gradient(135deg, #4f5df5, #f59e0b)", iconType: "cube" },
  2: { badge: "CORE", gradient: "#1f2a44", iconType: "bar" },
  3: { badge: null, gradient: "#1f2a44", iconType: "square" },
  4: { badge: null, gradient: "#1f2a44", iconType: "circle" },
  5: { badge: "ADVANCED", gradient: "#1f2a44", iconType: "orbit" },
  6: { badge: "RELATIVITY", gradient: "linear-gradient(135deg, #8b5cf6, #3b82f6)", iconType: "sine" },
  7: { badge: "CORE", gradient: "#1f2a44", iconType: "triangle" },
  8: { badge: "CLIMATE", gradient: "#1f2a44", iconType: "circle" },
  9: { badge: null, gradient: "#1f2a44", iconType: "cube" },
  10: { badge: "THERMO", gradient: "linear-gradient(135deg, #f59e0b, #ef4444)", iconType: "square" },
  11: { badge: "CIRCUITS", gradient: "#1f2a44", iconType: "chip" },
  12: { badge: "CORE", gradient: "#1f2a44", iconType: "sine" },
  13: { badge: null, gradient: "#1f2a44", iconType: "sine" },
  14: { badge: "OPTICS", gradient: "#1f2a44", iconType: "triangle" },
  15: { badge: "HARMONICS", gradient: "#1f2a44", iconType: "sine" },
  16: { badge: "DOPPLER", gradient: "#1f2a44", iconType: "circle" },
  17: { badge: "ORBITS", gradient: "#1f2a44", iconType: "orbit" },
  18: { badge: "FIELDS", gradient: "#1f2a44", iconType: "bar" },
  19: { badge: "PARTICLES", gradient: "#1f2a44", iconType: "cube" },
  20: { badge: "INDUCTION", gradient: "#1f2a44", iconType: "square" },
  21: { badge: "ATOMIC", gradient: "#1f2a44", iconType: "nucleus" },
  22: { badge: "QUANTUM", gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)", iconType: "sine" },
  23: { badge: "HOT", gradient: "linear-gradient(135deg, #10b981, #06b6d4)", iconType: "nucleus" },
  24: { badge: "FISSION", gradient: "linear-gradient(135deg, #f59e0b, #e11d48)", iconType: "cube" },
  25: { badge: "FEATURED", gradient: "linear-gradient(135deg, #ec4899, #f59e0b)", iconType: "star" }
};

// Clean titles and remove any unit/grade/chapter indications
physicsChapters.forEach(c => {
  c.title = c.title.replace(/^Chapter\s+\d+:\s*/i, '');
  delete c.difficulty; // remove grade/difficulty indication
  delete c.unit;
});

const unitACourses = physicsChapters.filter(c => c.unitId === 'unit-a').map(c => ({
  id: c.id,
  title: c.title,
  badge: iconStyles[c.num]?.badge || null,
  gradient: iconStyles[c.num]?.gradient || '#1f2a44',
  iconType: iconStyles[c.num]?.iconType || 'cube',
  desc: c.summary
}));

const unitBCourses = physicsChapters.filter(c => c.unitId === 'unit-b').map(c => ({
  id: c.id,
  title: c.title,
  badge: iconStyles[c.num]?.badge || null,
  gradient: iconStyles[c.num]?.gradient || '#1f2a44',
  iconType: iconStyles[c.num]?.iconType || 'triangle',
  desc: c.summary
}));

const unitCCourses = physicsChapters.filter(c => c.unitId === 'unit-c').map(c => ({
  id: c.id,
  title: c.title,
  badge: iconStyles[c.num]?.badge || null,
  gradient: iconStyles[c.num]?.gradient || '#1f2a44',
  iconType: iconStyles[c.num]?.iconType || 'sine',
  desc: c.summary
}));

const unitDCourses = physicsChapters.filter(c => c.unitId === 'unit-d').map(c => ({
  id: c.id,
  title: c.title,
  badge: iconStyles[c.num]?.badge || null,
  gradient: iconStyles[c.num]?.gradient || '#1f2a44',
  iconType: iconStyles[c.num]?.iconType || 'orbit',
  desc: c.summary
}));

const unitECourses = physicsChapters.filter(c => c.unitId === 'unit-e').map(c => ({
  id: c.id,
  title: c.title,
  badge: iconStyles[c.num]?.badge || null,
  gradient: iconStyles[c.num]?.gradient || '#1f2a44',
  iconType: iconStyles[c.num]?.iconType || 'star',
  desc: c.summary
}));

// Clean units data without "Unit A/B/C/D/E" prefix
const cleanedUnits = (NOVALEARN_DATA.units || []).map(u => ({
  ...u,
  name: u.name.replace(/^Unit\s+[A-E]:\s*/i, ''),
  shortName: u.shortName.replace(/^Unit\s+[A-E]:\s*/i, '')
}));

const learningPaths = [
  {
    id: "path-physics-unit-a",
    title: "Space, Time and Motion",
    category: "Science",
    subtitle: "Kinematics, Dynamics, Energy, Momentum, Rigid Bodies, and Relativity",
    badge: "MECHANICS",
    icon: "motion",
    color: "#4f5df5",
    accent: "#f59e0b",
    courses: unitACourses
  },
  {
    id: "path-physics-unit-b",
    title: "The Particulate Nature of Matter",
    category: "Science",
    subtitle: "Thermal Transfers, Greenhouse Effect, Gas Laws, Thermodynamics, and Circuits",
    badge: "THERMAL",
    icon: "thermal",
    color: "#f59e0b",
    accent: "#ef4444",
    courses: unitBCourses
  },
  {
    id: "path-physics-unit-c",
    title: "Wave Behaviour",
    category: "Science",
    subtitle: "Simple Harmonic Motion, Wave Model, Superposition, Standing Waves, Doppler",
    badge: "WAVES",
    icon: "waves",
    color: "#10b981",
    accent: "#38bdf8",
    courses: unitCCourses
  },
  {
    id: "path-physics-unit-d",
    title: "Fields",
    category: "Science",
    subtitle: "Gravitation, Electric & Magnetic Fields, Particle Trajectories, Induction",
    badge: "FIELDS",
    icon: "fields",
    color: "#38bdf8",
    accent: "#4f5df5",
    courses: unitDCourses
  },
  {
    id: "path-physics-unit-e",
    title: "Nuclear & Quantum Physics",
    category: "Science",
    subtitle: "Atomic Structure, Quantum Physics, Radioactivity, Fission, Fusion and Stars",
    badge: "QUANTUM",
    icon: "atom",
    color: "#ec4899",
    accent: "#f59e0b",
    courses: unitECourses
  }
];

const fullCurriculum = {
  brand: {
    name: "NovaLeran",
    tagline: "Interactive Physics & Natural Sciences",
    url: "https://brilliant.org/courses/"
  },
  learningPaths: learningPaths,
  units: cleanedUnits,
  chapters: physicsChapters,
  physicsChaptersCount: physicsChapters.length,
  stats: {
    totalUnits: cleanedUnits.length,
    totalPhysicsChapters: physicsChapters.length,
    totalCourses: physicsChapters.length,
    totalPages: 551,
    totalSections: physicsChapters.reduce((acc, c) => acc + (c.sections ? c.sections.length : 0), 0),
    totalFormulas: physicsChapters.reduce((acc, c) => acc + (c.keyFormulas ? c.keyFormulas.length : 0), 0)
  }
};

const fileContent = "var NOVALEARN_DATA = (typeof window !== 'undefined' ? window : global).NOVALEARN_DATA = " + JSON.stringify(fullCurriculum, null, 2) + ";\n";
fs.writeFileSync('curriculum-data.js', fileContent, 'utf8');

console.log('Successfully updated curriculum-data.js with only Physics paths and chapters!');
