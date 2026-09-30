/**
 * Brilliant.org Courses Clone - Application Engine
 * Pure Learning Paths with complete 25-chapter Physics curriculum
 * Clean titles and metadata without Grade, Unit, or Chapter indications
 */

const STATE_KEY = 'brilliant_clone_state';

let appState = {
  completedCourses: {},
  bookmarkedCourses: {},
  notes: {},
  quizScores: {},
  activeCategory: 'All', // 'All' or specific path id (e.g., 'path-physics-unit-a')
  searchQuery: '',
  currentUser: null
};

function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
      appState = { ...appState, ...JSON.parse(saved) };
    }
    if (appState.currentUser && appState.currentUser.email) {
      loadUserProgress(appState.currentUser.email);
    }
  } catch (e) {
    console.error('Failed to load state', e);
  }
}

function loadUserProgress(email) {
  try {
    const userSaved = localStorage.getItem('novalearn_user_progress_' + email);
    if (userSaved) {
      const data = JSON.parse(userSaved);
      appState.completedCourses = data.completedCourses || {};
      appState.quizScores = data.quizScores || {};
      appState.notes = data.notes || {};
    }
  } catch (e) {
    console.error('Failed to load user progress', e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(appState));
    if (appState.currentUser && appState.currentUser.email) {
      localStorage.setItem('novalearn_user_progress_' + appState.currentUser.email, JSON.stringify({
        completedCourses: appState.completedCourses,
        quizScores: appState.quizScores,
        notes: appState.notes
      }));
    }
  } catch (e) {
    console.error('Failed to save state', e);
  }
}

const curriculum = window.NOVALEARN_DATA || { learningPaths: [], chapters: [], units: [] };

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initHeader();
  renderLearningPaths();
  initSubjectFilters();
  initPathSearch();
});

// Navigation & Modals Header Setup
function initHeader() {
  // Brand click
  const logo = document.getElementById('brand-logo-btn');
  if (logo) {
    logo.addEventListener('click', () => {
      filterBySubject('All');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Nav Items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      filterBySubject('All');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  renderNavbarAuth();
}

// -----------------------------------------------------------------------------
// Learning Paths Section & Filters
// -----------------------------------------------------------------------------
function initSubjectFilters() {
  const filterBtns = document.querySelectorAll('.subject-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-subject');
      filterBySubject(cat);
    });
  });
}

window.filterBySubject = function(cat) {
  appState.activeCategory = cat;
  appState.searchQuery = '';
  const searchInput = document.getElementById('path-search-input');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.subject-filter-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-subject') === cat);
  });

  renderLearningPaths();
};

function initPathSearch() {
  const searchInput = document.getElementById('path-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      renderLearningPaths();
    });
  }
}

function renderLearningPaths() {
  const container = document.getElementById('learning-paths-list');
  if (!container) return;

  const paths = curriculum.learningPaths || [];
  
  // Filter paths by active subject category or path ID
  let filteredPaths = appState.activeCategory === 'All'
    ? paths
    : paths.filter(p => p.id === appState.activeCategory || p.category === appState.activeCategory);

  // If search query active, filter courses inside paths
  if (appState.searchQuery) {
    const q = appState.searchQuery;
    filteredPaths = filteredPaths.map(p => {
      const matchingCourses = p.courses.filter(c => {
        const titleMatch = c.title.toLowerCase().includes(q);
        const descMatch = (c.desc || '').toLowerCase().includes(q);
        return titleMatch || descMatch;
      });
      return { ...p, courses: matchingCourses };
    }).filter(p => p.courses.length > 0);
  }

  if (filteredPaths.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: var(--bg-container); border-radius: 16px; border: 1px dashed var(--border-subtle); margin-top: 20px;">
        <h3 style="font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 8px;">No Courses Found</h3>
        <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 20px;">Try searching for "Relativity", "Kinematics", "Nuclear", "Thermodynamics", or "Optics".</p>
        <button class="action-start-btn" style="margin: 0 auto;" onclick="filterBySubject('All')">Clear Search &amp; Show All</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredPaths.map(path => {
    const pathCourses = path.courses || [];
    const doneCount = pathCourses.filter(c => appState.completedCourses[c.id]).length;
    const pathPct = pathCourses.length ? Math.round((doneCount / pathCourses.length) * 100) : 0;

    return `
    <div class="path-section" id="${path.id}">
      <div class="path-section-header">
        <div class="path-section-icon" style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-subtle);">
          ${renderPathHeaderIcon(path.icon, path.color)}
        </div>
        <div class="path-section-text" style="flex: 1;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
            <div>
              <h3 class="path-section-title">${path.title}</h3>
              <p class="path-section-desc">${path.subtitle}</p>
            </div>
            <div style="min-width: 180px; text-align: right;">
              <div style="font-size: 12px; font-weight: 700; color: #38bdf8; margin-bottom: 4px;">
                ${doneCount}/${pathCourses.length} Chapters (${pathPct}%)
              </div>
              <div class="path-progress-track" style="height: 6px;">
                <div class="path-progress-fill" style="width: ${pathPct}%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="path-track-container">
        ${path.courses.map(c => {
          const isDone = !!appState.completedCourses[c.id];
          return `
            <a class="course-tile" data-course-id="${c.id}" href="chapter.html?id=${c.id}">
              <div class="tile-box" style="${isDone ? 'border-color: #22c55e;' : ''}">
                <div class="tile-icon-wrap" style="background: ${getCourseGradient(c)};">
                  ${renderTileIcon(c)}
                </div>
              </div>
              <span class="tile-title">${c.title}</span>
              ${isDone ? `<span style="font-size: 11px; color: #22c55e; font-weight: 700;">✓ Completed</span>` : ''}
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;
  }).join('');
}

function renderPathHeaderIcon(type, color) {
  if (type === 'motion') {
    return `
      <svg width="26" height="26" fill="none" stroke="${color || '#4f5df5'}" stroke-width="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  } else if (type === 'thermal') {
    return `
      <svg width="26" height="26" fill="none" stroke="${color || '#f59e0b'}" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 2c1.5 3 4 4.5 4 8a4 4 0 01-8 0c0-3.5 2.5-5 4-8z" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  } else if (type === 'waves') {
    return `
      <svg width="26" height="26" fill="none" stroke="${color || '#10b981'}" stroke-width="2" viewBox="0 0 24 24">
        <path d="M2 12c3-6 5-6 8 0s5 6 8 0 5-6 8 0" stroke-linecap="round"/>
      </svg>
    `;
  } else if (type === 'fields') {
    return `
      <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
        <div style="position: absolute; width: 28px; height: 28px; border: 2px dashed ${color || '#38bdf8'}; border-radius: 50%;"></div>
        <div style="width: 10px; height: 10px; border-radius: 50%; background: ${color || '#38bdf8'};"></div>
      </div>
    `;
  } else {
    // atom / quantum
    return `
      <div style="position: relative; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
        <div style="position: absolute; width: 32px; height: 16px; border: 2px solid #f59e0b; border-radius: 50%; transform: rotate(30deg);"></div>
        <div style="position: absolute; width: 32px; height: 16px; border: 2px solid #f59e0b; border-radius: 50%; transform: rotate(-30deg);"></div>
        <div style="position: absolute; width: 8px; height: 8px; border-radius: 50%; background: #ec4899; box-shadow: 0 0 8px #ec4899;"></div>
      </div>
    `;
  }
}

function getCourseGradient(course) {
  const grads = {
    'ch-1': 'linear-gradient(135deg, #07152b, #0e2447)',
    'ch-2': 'linear-gradient(135deg, #312e81, #6366f1)',
    'ch-3': 'linear-gradient(135deg, #78350f, #d97706)',
    'ch-4': 'linear-gradient(135deg, #831843, #ec4899)',
    'ch-5': 'linear-gradient(135deg, #0f172a, #0284c7)',
    'ch-6': 'linear-gradient(135deg, #581c87, #9333ea)',
    'ch-7': 'linear-gradient(135deg, #7f1d1d, #ef4444)',
    'ch-8': 'linear-gradient(135deg, #064e3b, #10b981)',
    'ch-9': 'linear-gradient(135deg, #134e4a, #14b8a6)',
    'ch-10': 'linear-gradient(135deg, #9a3412, #f97316)',
    'ch-11': 'linear-gradient(135deg, #1e1b4b, #3b82f6)',
    'ch-12': 'linear-gradient(135deg, #164e63, #06b6d4)',
    'ch-13': 'linear-gradient(135deg, #1e3a8a, #0ea5e9)',
    'ch-14': 'linear-gradient(135deg, #4c1d95, #8b5cf6)',
    'ch-15': 'linear-gradient(135deg, #3730a3, #6366f1)',
    'ch-16': 'linear-gradient(135deg, #701a75, #d946ef)',
    'ch-17': 'linear-gradient(135deg, #09090b, #3b82f6)',
    'ch-18': 'linear-gradient(135deg, #312e81, #ec4899)',
    'ch-19': 'linear-gradient(135deg, #1e1b4b, #06b6d4)',
    'ch-20': 'linear-gradient(135deg, #78350f, #10b981)',
    'ch-21': 'linear-gradient(135deg, #1e293b, #6366f1)',
    'ch-22': 'linear-gradient(135deg, #581c87, #ec4899)',
    'ch-23': 'linear-gradient(135deg, #064e3b, #06b6d4)',
    'ch-24': 'linear-gradient(135deg, #7f1d1d, #f59e0b)',
    'ch-25': 'linear-gradient(135deg, #831843, #f59e0b)'
  };
  const id = typeof course === 'object' && course ? course.id : course;
  return grads[id] || (course && course.gradient && course.gradient !== '#1f2a44' ? course.gradient : 'linear-gradient(135deg, #1e293b, #3b82f6)');
}

function renderTileIcon(courseOrType) {
  const id = typeof courseOrType === 'object' && courseOrType ? courseOrType.id : courseOrType;

  // Chapter-specific physics SVG icons
  const chapterIcons = {
    // 1. Kinematics: x-t displacement graph with curved trajectory, tangent line & glowing point (matching reference)
    'ch-1': `<svg width="100%" height="100%" viewBox="0 0 40 40" class="kinematics-svg full-bleed-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Full-bleed background grid lines across entire square box -->
      <path d="M15 0 L 15 34 M 22 0 L 22 34 M 29 0 L 29 34" stroke="#172e54" stroke-width="0.8"/>
      <path d="M0 14 L 40 14 M 0 23 L 40 23" stroke="#172e54" stroke-width="0.8"/>

      <!-- Coordinate Axes -->
      <!-- Vertical x-axis (displacement) -->
      <path d="M7 34 L 7 4" stroke="#2563eb" stroke-width="1.8" stroke-linecap="round"/>
      <polygon points="5,6 7,2 9,6" fill="#2563eb"/>
      <text x="3" y="5" font-style="italic" fill="#93c5fd" font-size="5" font-family="'Times New Roman', serif" font-weight="bold">x</text>

      <!-- Horizontal t-axis (time) -->
      <path d="M7 34 L 37 34" stroke="#2563eb" stroke-width="1.8" stroke-linecap="round"/>
      <polygon points="36,32 40,34 36,36" fill="#2563eb"/>
      <text x="37" y="31" font-style="italic" fill="#93c5fd" font-size="5" font-family="'Times New Roman', serif" font-weight="bold">t</text>

      <!-- Axis numbers (0, 16, 4) from reference -->
      <text x="2" y="35.5" fill="#64748b" font-size="3.2" font-family="sans-serif">0</text>
      <text x="1" y="15" fill="#64748b" font-size="3.2" font-family="sans-serif">16</text>
      <text x="35" y="38" fill="#64748b" font-size="3.2" font-family="sans-serif">4</text>

      <!-- Straight tangent line (dx/dt instantaneous velocity in periwinkle) -->
      <path d="M 15 34 L 35 11" stroke="#8da9ed" stroke-width="2.0" stroke-linecap="round"/>

      <!-- Quadratic displacement curve x(t) = t^2 -->
      <path d="M 7 34 C 16 34, 24 25, 36 6" stroke="#2563eb" stroke-width="2.6" stroke-linecap="round"/>

      <!-- Instantaneous Point with Cyan Glow -->
      <circle cx="24.5" cy="22.5" r="5" fill="#00f0ff" opacity="0.25"/>
      <circle cx="24.5" cy="22.5" r="3.2" fill="#06b6d4" opacity="0.6"/>
      <circle cx="24.5" cy="22.5" r="2" fill="#22d3ee"/>
      <circle cx="24.5" cy="22.5" r="1" fill="#ffffff"/>
    </svg>`,

    // 2. Forces and Newton's laws: mass block with balanced & net force vectors
    'ch-2': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11" y="11" width="10" height="10" rx="2" fill="rgba(99, 102, 241, 0.35)" stroke="#a5b4fc" stroke-width="1.8"/>
      <text x="16" y="18" fill="#ffffff" font-size="8" font-family="sans-serif" font-weight="800" text-anchor="middle" dominant-baseline="middle">m</text>
      <path d="M21 16 L 28 16" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/>
      <polygon points="27,13.5 30.5,16 27,18.5" fill="#22c55e"/>
      <path d="M11 16 L 4 16" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"/>
      <polygon points="5,13.5 1.5,16 5,18.5" fill="#f43f5e"/>
      <path d="M16 11 L 16 4" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/>
      <polygon points="13.5,5 16,1.5 18.5,5" fill="#38bdf8"/>
      <path d="M16 21 L 16 28" stroke="#c084fc" stroke-width="1.8" stroke-linecap="round"/>
      <polygon points="13.5,27 16,30.5 18.5,27" fill="#c084fc"/>
    </svg>`,

    // 3. Work, energy and power: power flash and energetic pulse
    'ch-3': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 3 L 8 16 L 15 16 L 13 29 L 24 14 L 17 14 Z" fill="#f59e0b" stroke="#fef08a" stroke-width="1.2" stroke-linejoin="round"/>
      <circle cx="16" cy="16" r="13" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1.5" stroke-dasharray="2 3"/>
      <path d="M5 16 L 7 16 M25 16 L 27 16 M16 5 L 16 7 M16 25 L 16 27" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,

    // 4. Linear momentum: elastic collision between two spheres with impact impulse
    'ch-4': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="16" r="5" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5"/>
      <circle cx="24" cy="16" r="5" fill="#ec4899" stroke="#fbcfe8" stroke-width="1.5"/>
      <path d="M13 16 L 15 16" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
      <path d="M19 16 L 17 16" stroke="#fbcfe8" stroke-width="2" stroke-linecap="round"/>
      <path d="M16 10 L 16 22" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
      <path d="M14 12 L 18 20 M 18 12 L 14 20" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M4 8 L 9 8" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round"/>
      <polygon points="8,6.5 10.5,8 8,9.5" fill="#60a5fa"/>
      <path d="M28 8 L 23 8" stroke="#f472b6" stroke-width="1.5" stroke-linecap="round"/>
      <polygon points="24,6.5 21.5,8 24,9.5" fill="#f472b6"/>
    </svg>`,

    // 5. Rigid body mechanics: spinning flywheel disc with angular torque
    'ch-5': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3 L 16 29" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="16" cy="16" rx="12" ry="5.5" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="16" cy="16" r="3" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <path d="M8 17 C 8 20, 24 20, 24 17" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
      <polygon points="23,15.5 25.5,18 24,15" fill="#f59e0b"/>
      <path d="M6 7 L 10 7 M 8 5 L 8 9" stroke="#38bdf8" stroke-width="1.2"/>
    </svg>`,

    // 6. Relativity: relativistic Minkowski spacetime light cone & photon
    'ch-6': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6 L 26 26" stroke="#a78bfa" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M26 6 L 6 26" stroke="#a78bfa" stroke-width="1.8" stroke-linecap="round"/>
      <ellipse cx="16" cy="6" rx="10" ry="3" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="2 2"/>
      <ellipse cx="16" cy="26" rx="10" ry="3" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="2 2"/>
      <circle cx="16" cy="16" r="4" fill="#fef08a" stroke="#f59e0b" stroke-width="1.5"/>
      <circle cx="16" cy="16" r="7.5" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1" stroke-dasharray="2 2"/>
    </svg>`,

    // 7. Thermal energy transfers: thermodynamic flame core with conduction rays
    'ch-7': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4 C 13 10, 8 13, 8 19 C 8 25, 11.5 28, 16 28 C 20.5 28, 24 25, 24 19 C 24 14, 20 11, 16 4 Z" fill="#ef4444" stroke="#f87171" stroke-width="1.2"/>
      <path d="M16 12 C 14 16, 11 18, 11 21 C 11 24, 13 26, 16 26 C 19 26, 21 24, 21 21 C 21 17, 18 15, 16 12 Z" fill="#fef08a"/>
      <path d="M4 14 C 3 12, 5 10, 4 8" stroke="#f87171" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M28 14 C 27 12, 29 10, 28 8" stroke="#f87171" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,

    // 8. The greenhouse effect: Earth surface, atmospheric layer, and trapped infrared rays
    'ch-8': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 27 C 8 20, 24 20, 28 27" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" fill="rgba(16, 185, 129, 0.25)"/>
      <path d="M3 13 C 9 6, 23 6, 29 13" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 2"/>
      <path d="M8 4 L 14 14" stroke="#fde047" stroke-width="1.8" stroke-linecap="round"/>
      <polygon points="12,13 15,15 14,12" fill="#fde047"/>
      <path d="M15 19 L 20 10 L 24 20" stroke="#f43f5e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <polygon points="22.5,18 24.5,21 25.5,18" fill="#f43f5e"/>
    </svg>`,

    // 9. The gas laws: cylinder with movable piston compressing gas molecules (PV = nRT)
    'ch-9': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 6 L 7 26 C 7 27 8 28 9 28 L 23 28 C 24 28 25 27 25 26 L 25 6" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <rect x="8" y="11" width="16" height="4" rx="1.5" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
      <path d="M16 11 L 16 3" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="12" cy="19" r="1.8" fill="#f59e0b"/>
      <path d="M13.5 19 L 16 18" stroke="#f59e0b" stroke-width="1" stroke-linecap="round"/>
      <circle cx="20" cy="22" r="1.8" fill="#f59e0b"/>
      <path d="M18.5 22 L 17 23.5" stroke="#f59e0b" stroke-width="1" stroke-linecap="round"/>
      <circle cx="14" cy="25" r="1.8" fill="#f59e0b"/>
    </svg>`,

    // 10. Thermodynamics: Carnot engine heat engine cycle with work output
    'ch-10': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3 L 16 9" stroke="#ef4444" stroke-width="2" stroke-linecap="round"/>
      <polygon points="14,7 16,9.5 18,7" fill="#ef4444"/>
      <circle cx="16" cy="16" r="7" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 2"/>
      <path d="M23 16 L 29 16" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/>
      <polygon points="27,14 29.5,16 27,18" fill="#22c55e"/>
      <text x="26" y="12" fill="#22c55e" font-size="7" font-family="sans-serif" font-weight="bold">W</text>
      <path d="M16 23 L 16 29" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
      <polygon points="14,27 16,29.5 18,27" fill="#38bdf8"/>
    </svg>`,

    // 11. Current and circuits: complete circuit schematic with battery cell and resistor
    'ch-11': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10 L 6 24 C 6 25 7 26 8 26 L 24 26 C 25 26 26 25 26 24 L 26 10 C 26 9 25 8 24 8 L 19 8" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M6 10 C 6 9 7 8 8 8 L 13 8" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M13 5 L 13 11" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/>
      <path d="M16 3 L 16 13" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M19 5 L 19 11" stroke="#22c55e" stroke-width="2" stroke-linecap="round"/>
      <path d="M11 26 L 12.5 24 L 14.5 28 L 16.5 24 L 18.5 28 L 20 26" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    // 12. Simple harmonic motion: oscillating pendulum swinging through equilibrium
    'ch-12': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="5" r="2.5" fill="#94a3b8"/>
      <path d="M16 7 L 16 26" stroke="#64748b" stroke-width="1.2" stroke-dasharray="2 2"/>
      <path d="M16 5 L 23 21" stroke="#cbd5e1" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="23" cy="21" r="4.5" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
      <path d="M9 23 C 12 26, 20 26, 24 23" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"/>
      <polygon points="8,21.5 9,24 10.5,22" fill="#f59e0b"/>
    </svg>`,

    // 13. The wave model: propagating sine wave with wavelength peak marker
    'ch-13': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 16 L 29 16" stroke="#475569" stroke-width="1.2" stroke-dasharray="2 2"/>
      <path d="M3 16 C 6 4, 10 4, 13 16 C 16 28, 20 28, 23 16 C 26 4, 29 8, 30 11" stroke="#06b6d4" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M8 5 L 22 5" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M8 3.5 L 8 6.5 M22 3.5 L 22 6.5" stroke="#f59e0b" stroke-width="1.5"/>
      <circle cx="8" cy="5.5" r="1.8" fill="#ffffff"/>
      <circle cx="22" cy="18" r="1.8" fill="#ffffff"/>
    </svg>`,

    // 14. Wave phenomena: optical dispersion prism bending and splitting light
    'ch-14': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,5 6,26 26,26" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="1.8"/>
      <path d="M3 20 L 11 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
      <path d="M11 17 L 19 16" stroke="#fde047" stroke-width="1.8"/>
      <path d="M19 16 L 29 13" stroke="#f43f5e" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M19 16 L 29 17" stroke="#22c55e" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M19 16 L 29 21" stroke="#3b82f6" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`,

    // 15. Standing waves and resonance: standing wave harmonic with nodes and antinodes
    'ch-15': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16 Q 10 6 16 16 Q 22 26 28 16" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round"/>
      <path d="M4 16 Q 10 26 16 16 Q 22 6 28 16" stroke="#c084fc" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 2"/>
      <circle cx="4" cy="16" r="2.5" fill="#f59e0b"/>
      <circle cx="16" cy="16" r="2.5" fill="#f59e0b"/>
      <circle cx="28" cy="16" r="2.5" fill="#f59e0b"/>
      <path d="M10 11 L 10 21 M22 11 L 22 21" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round"/>
    </svg>`,

    // 16. The Doppler effect: asymmetric compressed wavefronts from moving source
    'ch-16': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="16" r="12" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="16" cy="16" r="8" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="19" cy="16" r="4.5" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="21" cy="16" r="2.5" fill="#ffffff"/>
      <path d="M23 16 L 28 16" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
      <polygon points="27,14 30,16 27,18" fill="#38bdf8"/>
    </svg>`,

    // 17. Gravitation: celestial planetary body in elliptical gravitational orbit
    'ch-17': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="16" rx="12" ry="6" transform="rotate(-25 16 16)" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="3 2"/>
      <circle cx="16" cy="16" r="6" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5"/>
      <circle cx="14" cy="14" r="2" fill="rgba(255, 255, 255, 0.4)"/>
      <circle cx="26" cy="11" r="2.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
      <path d="M25 12 L 20 14" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,

    // 18. Electric and magnetic fields: dipole charges with curved electric flux field lines
    'ch-18': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="16" r="4.5" fill="#ef4444" stroke="#fca5a5" stroke-width="1.2"/>
      <path d="M6 16 L 10 16 M8 14 L 8 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="24" cy="16" r="4.5" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.2"/>
      <path d="M22 16 L 26 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M12.5 16 L 19.5 16" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round"/>
      <polygon points="16,14.5 18,16 16,17.5" fill="#cbd5e1"/>
      <path d="M9 12 C 12 5, 20 5, 23 12" stroke="#a855f7" stroke-width="1.5" fill="none"/>
      <polygon points="16,5.5 18,7 16,8.5" fill="#a855f7"/>
      <path d="M9 20 C 12 27, 20 27, 23 20" stroke="#a855f7" stroke-width="1.5" fill="none"/>
      <polygon points="16,24.5 18,26 16,27.5" fill="#a855f7"/>
    </svg>`,

    // 19. Motion in electric and magnetic fields: charged particle spiraling in helical magnetic trajectory
    'ch-19': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8 L 9 12 M 9 8 L 5 12 M23 8 L 27 12 M 27 8 L 23 12 M5 20 L 9 24 M 9 20 L 5 24 M23 20 L 27 24 M 27 20 L 23 24" stroke="#475569" stroke-width="1.2"/>
      <path d="M8 24 C 4 16, 12 8, 16 12 C 20 16, 12 24, 18 24 C 24 24, 28 14, 26 8" stroke="#38bdf8" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="26" cy="8" r="3" fill="#f59e0b" stroke="#ffffff" stroke-width="1.2"/>
    </svg>`,

    // 20. Electromagnetic induction: Faraday solenoid coil with induced EMF current
    'ch-20': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="10" cy="16" rx="4" ry="10" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <ellipse cx="16" cy="16" rx="4" ry="10" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <ellipse cx="22" cy="16" rx="4" ry="10" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <path d="M3 16 L 28 16" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
      <polygon points="26,13.5 29.5,16 26,18.5" fill="#38bdf8"/>
      <path d="M15 7 L 18 10 L 16 11 L 18 14" stroke="#22c55e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    // 21. Atomic physics: Rutherford-Bohr atom orbital shells with emitted photon transition
    'ch-21': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" stroke="#6366f1" stroke-width="1.4" stroke-dasharray="3 2"/>
      <circle cx="16" cy="16" r="7" stroke="#818cf8" stroke-width="1.4"/>
      <circle cx="16" cy="16" r="3.5" fill="#ef4444" stroke="#fca5a5" stroke-width="1"/>
      <circle cx="16" cy="4" r="2.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
      <circle cx="23" cy="16" r="2.2" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
      <path d="M19 12 C 22 10, 24 13, 27 11" stroke="#fde047" stroke-width="1.8" stroke-linecap="round"/>
      <polygon points="25.5,9.5 28,10.5 26,12.5" fill="#fde047"/>
    </svg>`,

    // 22. Quantum physics: Schrödinger localized wave packet & probability envelope
    'ch-22': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 16 C 10 8, 16 8, 22 16 M 4 16 C 10 24, 16 24, 22 16" stroke="rgba(236, 72, 153, 0.4)" stroke-width="1.5" stroke-dasharray="2 2"/>
      <path d="M3 16 Q 7 13 9 16 Q 11 20 13 16 Q 15 7 17 16 Q 19 25 21 16 Q 23 12 25 16 Q 27 18 29 16" stroke="#ec4899" stroke-width="2" stroke-linecap="round"/>
      <circle cx="17" cy="7" r="2" fill="#fef08a"/>
    </svg>`,

    // 23. Nuclear physics: bound nucleon cluster (protons & neutrons) with alpha decay
    'ch-23': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="15" r="3.2" fill="#ef4444"/>
      <circle cx="18" cy="14" r="3.2" fill="#3b82f6"/>
      <circle cx="15" cy="18" r="3.2" fill="#ef4444"/>
      <circle cx="12" cy="20" r="3.2" fill="#3b82f6"/>
      <circle cx="17" cy="20" r="3.2" fill="#ef4444"/>
      <circle cx="15" cy="17" r="8" stroke="rgba(16, 185, 129, 0.5)" stroke-width="1.5" stroke-dasharray="3 2"/>
      <path d="M21 11 L 27 6" stroke="#f59e0b" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="28" cy="5" r="2.2" fill="#10b981" stroke="#ffffff" stroke-width="1"/>
    </svg>`,

    // 24. Nuclear fission: heavy nucleus splitting with emitted prompt neutrons
    'ch-24': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3" cy="16" r="2" fill="#38bdf8"/>
      <path d="M5 16 L 9 16" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="17" cy="10" r="5" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
      <circle cx="17" cy="22" r="5" fill="#f59e0b" stroke="#fed7aa" stroke-width="1.5"/>
      <path d="M14 16 L 20 16" stroke="#ffffff" stroke-width="2"/>
      <circle cx="27" cy="8" r="2" fill="#38bdf8"/>
      <path d="M21 11 L 25 9" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="29" cy="16" r="2" fill="#38bdf8"/>
      <path d="M22 16 L 27 16" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="27" cy="24" r="2" fill="#38bdf8"/>
      <path d="M21 21 L 25 23" stroke="#38bdf8" stroke-width="1.5"/>
    </svg>`,

    // 25. Nuclear fusion and stars: radiant star corona with thermonuclear hydrogen fusion core
    'ch-25': `<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2 L 16 6 M 16 26 L 16 30 M 2 16 L 6 16 M 26 16 L 30 16" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
      <path d="M6 6 L 9 9 M 23 23 L 26 26 M 6 26 L 9 23 M 23 9 L 26 6" stroke="#f59e0b" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="16" cy="16" r="8" fill="#f59e0b" stroke="#fef08a" stroke-width="1.5"/>
      <circle cx="14" cy="15" r="2.2" fill="#ffffff"/>
      <circle cx="18" cy="17" r="2.2" fill="#ffffff"/>
      <path d="M14 15 L 18 17" stroke="#ef4444" stroke-width="1.5"/>
    </svg>`
  };

  if (chapterIcons[id]) {
    return chapterIcons[id];
  }

  // Fallbacks for generic iconType
  const type = typeof courseOrType === 'object' && courseOrType ? courseOrType.iconType : courseOrType;
  switch (type) {
    case 'orbit':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/><circle cx="12" cy="12" r="3" fill="#38bdf8"/></svg>`;
    case 'nucleus':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" fill="#10b981"/><circle cx="12" cy="12" r="8" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2 2"/></svg>`;
    case 'star':
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z"/></svg>`;
    case 'sine':
      return `<svg width="28" height="28" fill="none" stroke="#38bdf8" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12c3-8 5-8 8 0s5 8 8 0" stroke-linecap="round"/></svg>`;
    default:
      return `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><circle cx="12" cy="12" r="6"/></svg>`;
  }
}

// -----------------------------------------------------------------------------
// Interactive Course Modal Reader
// -----------------------------------------------------------------------------
function openCourseModal(courseId) {
  const course = (curriculum.chapters || []).find(c => c.id === courseId);
  if (!course) return;

  const isCompleted = !!appState.completedCourses[course.id];
  let overlay = document.getElementById('brilliant-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'brilliant-modal-overlay';
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }

  // Clean title without Chapter prefix
  const cleanTitle = course.title.replace(/^Chapter\s+\d+:\s*/i, '');

  overlay.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-head">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div class="tile-icon-wrap" style="width: 44px; height: 44px; min-width: 44px; border-radius: 12px; background: ${getCourseGradient(course)};">
            ${renderTileIcon(course)}
          </div>
          <div>
            <div style="font-size: 12px; font-weight: 700; color: var(--brilliant-sky); text-transform: uppercase; margin-bottom: 2px;">
              ${course.subject || 'Physics'}
            </div>
            <h2 style="font-size: 22px; font-weight: 800; color: #fff; margin: 0;">
              ${cleanTitle}
            </h2>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 12px;">
          <button id="modal-complete-toggle" class="action-start-btn" style="background: ${isCompleted ? '#22c55e' : 'var(--brilliant-blue)'};">
            ${isCompleted ? '✓ Completed' : 'Mark as Complete'}
          </button>
          <button id="modal-close-x" style="background: none; border: none; color: #fff; font-size: 22px; cursor: pointer; padding: 4px;">✕</button>
        </div>
      </div>

      <div class="modal-tabs-bar">
        <button class="tab-btn active" data-tab="syllabus">Syllabus & Lessons</button>
        <button class="tab-btn" data-tab="formulas">Formula Sheet</button>
        <button class="tab-btn" data-tab="sim">Interactive Lab</button>
        <button class="tab-btn" data-tab="quiz">Practice Quiz (${course.quiz ? course.quiz.length : 0} Qs)</button>
        <button class="tab-btn" data-tab="notes">Notes</button>
      </div>

      <div class="modal-content-area" id="modal-tab-content">
        <!-- Rendered by tab switcher -->
      </div>
    </div>
  `;

  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Event handlers
  document.getElementById('modal-close-x')?.addEventListener('click', closeCourseModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCourseModal();
  });

  const completeBtn = document.getElementById('modal-complete-toggle');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const cur = !!appState.completedCourses[course.id];
      appState.completedCourses[course.id] = !cur;
      if (!cur) {
        showToast('Chapter Completed!', 'Marked as completed in curriculum.');
      }
      saveState();
      completeBtn.textContent = !cur ? '✓ Completed' : 'Mark as Complete';
      completeBtn.style.background = !cur ? '#22c55e' : 'var(--brilliant-blue)';
      renderLearningPaths();
    });
  }

  // Tabs
  overlay.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      overlay.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderModalTabContent(tab.getAttribute('data-tab'), course);
    });
  });

  renderModalTabContent('syllabus', course);
}

function closeCourseModal() {
  const overlay = document.getElementById('brilliant-modal-overlay');
  if (overlay) {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function renderModalTabContent(tab, course) {
  const container = document.getElementById('modal-tab-content');
  if (!container) return;

  const cleanTitle = course.title.replace(/^Chapter\s+\d+:\s*/i, '');

  if (tab === 'syllabus') {
    container.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 8px;">Concept Overview</h4>
        <div style="font-size: 14px; color: #cbd5e1; line-height: 1.6; background: #081624; border: 1px solid var(--border-subtle); padding: 18px 20px; border-radius: 12px;">
          ${course.summary}
        </div>
      </div>

      <h4 style="font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 12px;">Interactive Lesson Topics</h4>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${(course.sections || []).map(s => `
          <div style="background: #0e1c2b; border: 1px solid var(--border-subtle); border-radius: 10px; padding: 16px 20px; display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;">
            <div>
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                <span style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px;">
                  ${s.num}
                </span>
                <span style="font-size: 15px; font-weight: 600; color: #fff;">${s.title}</span>
              </div>
              <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">${s.desc}</p>
            </div>
            <span style="font-size: 11px; font-family: monospace; color: var(--text-muted); background: #081624; border: 1px solid var(--border-subtle); padding: 4px 8px; border-radius: 6px; flex-shrink: 0;">
              p. ${s.page}
            </span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'formulas') {
    container.innerHTML = `
      <div style="margin-bottom: 16px;">
        <h4 style="font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 4px;">Core Mathematical Relations</h4>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">Formal equations and invariant quantities for ${cleanTitle}.</p>
      </div>

      <div class="formula-grid">
        ${(course.keyFormulas || []).map(f => `
          <div class="formula-box">
            <div class="formula-label">${f.name}</div>
            <div class="formula-equation">${f.tex}</div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tab === 'sim') {
    renderCourseSimulation(course, container);
  } else if (tab === 'quiz') {
    renderCourseQuiz(course, container);
  } else if (tab === 'notes') {
    renderCourseNotes(course, container);
  }
}

// -----------------------------------------------------------------------------
// Interactive Simulators (HR Diagram, Nuclear Decay, Projectile, Waves, Python)
// -----------------------------------------------------------------------------
function renderCourseSimulation(course, container) {
  if (course.num === 25 || course.id === 'ch-25') {
    container.innerHTML = `
      <div class="sim-panel">
        <h4 style="font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 4px;">Interactive Hertzsprung-Russell (H-R) Diagram</h4>
        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">Map of stellar luminosity vs surface temperature with spectral classes O, B, A, F, G, K, M.</p>
        <canvas id="hr-canvas" class="sim-viewport"></canvas>
        <div class="sim-toolbar">
          <label style="font-size: 13px; font-weight: 600;">Stellar Mass:</label>
          <input type="range" id="hr-mass-slider" min="0.1" max="25" step="0.1" value="1.0" style="width: 140px; accent-color: #f59e0b;">
          <span id="hr-mass-val" style="font-family: monospace; font-size: 13px; color: #f59e0b;">1.0 M☉</span>
          <button class="action-start-btn" id="hr-play-lifecycle" style="padding: 6px 14px; font-size: 12px;">▶ Animate Lifecycle</button>
        </div>
      </div>
    `;
    setTimeout(initHRCanvas, 50);
  } else if (course.num === 23 || course.num === 24) {
    container.innerHTML = `
      <div class="sim-panel">
        <h4 style="font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 4px;">Binding Energy & Half-Life Decay Simulator</h4>
        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">Fe-56 stability curve and exponential decay law N(t) = N₀e^(-λt).</p>
        <canvas id="nuclear-canvas" class="sim-viewport"></canvas>
        <div class="sim-toolbar">
          <label style="font-size: 13px; font-weight: 600;">Half-Life (T½):</label>
          <input type="range" id="nuclear-half-slider" min="1" max="10" step="0.5" value="3" style="width: 120px; accent-color: #10b981;">
          <span id="nuclear-half-val" style="font-family: monospace; font-size: 13px; color: #10b981;">3.0 s</span>
          <button class="action-start-btn" id="nuclear-start-decay" style="padding: 6px 14px; font-size: 12px;">▶ Start Decay</button>
        </div>
      </div>
    `;
    setTimeout(initNuclearCanvas, 50);
  } else {
    // Default Wave/Field simulator
    container.innerHTML = `
      <div class="sim-panel">
        <h4 style="font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 4px;">Wave & Resonance Oscilloscope</h4>
        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">Sinusoidal wave superposition and harmonic oscillations.</p>
        <canvas id="wave-canvas" class="sim-viewport"></canvas>
        <div class="sim-toolbar">
          <label style="font-size: 13px;">Frequency:</label>
          <input type="range" id="wave-f-slider" min="1" max="10" step="0.5" value="2.5" style="width: 110px; accent-color: #38bdf8;">
          <span id="wave-f-val" style="font-family: monospace; font-size: 13px; color: #38bdf8;">2.5 Hz</span>
        </div>
      </div>
    `;
    setTimeout(initWaveCanvas, 50);
  }
}

// H-R Canvas
function initHRCanvas() {
  const canvas = document.getElementById('hr-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth - 48;
  canvas.height = 340;

  const stars = [
    { name: 'Sun', temp: 5778, lum: 1.0, color: '#fbbf24', radius: 6 },
    { name: 'Sirius B', temp: 25200, lum: 0.056, color: '#c7d2fe', radius: 4 },
    { name: 'Betelgeuse', temp: 3500, lum: 126000, color: '#ef4444', radius: 14 },
    { name: 'Rigel', temp: 12100, lum: 120000, color: '#60a5fa', radius: 13 },
    { name: 'Aldebaran', temp: 3900, lum: 439, color: '#f97316', radius: 10 }
  ];

  let progress = 0;
  let animating = false;

  function tX(t) {
    const lMin = Math.log10(2500), lMax = Math.log10(40000);
    return 60 + ((lMax - Math.log10(t)) / (lMax - lMin)) * (canvas.width - 120);
  }
  function lY(l) {
    const lMin = -4, lMax = 6;
    return 40 + ((lMax - Math.log10(l)) / (lMax - lMin)) * (canvas.height - 80);
  }

  function draw() {
    ctx.fillStyle = '#020b15';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Main sequence curve
    ctx.fillStyle = 'rgba(47, 111, 238, 0.15)';
    ctx.beginPath();
    ctx.moveTo(tX(35000), lY(50000));
    ctx.lineTo(tX(8000), lY(10));
    ctx.lineTo(tX(3000), lY(0.001));
    ctx.lineTo(tX(3000), lY(0.01));
    ctx.lineTo(tX(10000), lY(50));
    ctx.lineTo(tX(35000), lY(200000));
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.fillText('MAIN SEQUENCE', tX(7000), lY(2));
    ctx.fillText('SUPERGIANTS', tX(8000), lY(100000));
    ctx.fillText('WHITE DWARFS', tX(20000), lY(0.01));

    stars.forEach(s => {
      const x = tX(s.temp);
      const y = lY(s.lum);
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(x, y, s.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = '10px Inter';
      ctx.fillText(s.name, x + 8, y + 3);
    });

    if (animating) {
      progress += 0.01;
      if (progress > 1) { progress = 0; animating = false; }
      const curT = 5778 - progress * 2500;
      const curL = 1 + progress * 2000;
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(tX(curT), lY(curL), 7, 0, Math.PI * 2);
      ctx.fill();
      requestAnimationFrame(draw);
    }
  }

  draw();

  document.getElementById('hr-play-lifecycle')?.addEventListener('click', () => {
    animating = true;
    progress = 0;
    draw();
  });
}

// Nuclear Decay Canvas
function initNuclearCanvas() {
  const canvas = document.getElementById('nuclear-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth - 48;
  canvas.height = 340;

  let t_half = 3.0;
  let decayTime = 0;
  let decaying = false;

  function draw() {
    ctx.fillStyle = '#020b15';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let t = 0; t <= 15; t += 0.2) {
      const x = 50 + (t / 15) * (canvas.width - 80);
      const y = (canvas.height - 40) - Math.pow(0.5, t / t_half) * (canvas.height - 70);
      if (t === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    const curY = (canvas.height - 40) - Math.pow(0.5, decayTime / t_half) * (canvas.height - 70);
    const curX = 50 + (decayTime / 15) * (canvas.width - 80);
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(curX, curY, 6, 0, Math.PI * 2);
    ctx.fill();

    if (decaying) {
      decayTime += 0.05;
      if (decayTime > 15) { decayTime = 0; decaying = false; }
      requestAnimationFrame(draw);
    }
  }

  draw();
  document.getElementById('nuclear-start-decay')?.addEventListener('click', () => {
    decaying = true;
    decayTime = 0;
    draw();
  });
}

// Wave Canvas
function initWaveCanvas() {
  const canvas = document.getElementById('wave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth - 48;
  canvas.height = 340;
  let offset = 0;

  function draw() {
    ctx.fillStyle = '#020b15';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x < canvas.width; x += 2) {
      const y = canvas.height / 2 + 50 * Math.sin((x * 0.03) - offset);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    offset += 0.05;
    requestAnimationFrame(draw);
  }
  draw();
}

// -----------------------------------------------------------------------------
// Course Quiz & Notes
// -----------------------------------------------------------------------------
function renderCourseQuiz(course, container) {
  const quizzes = course.quiz || [];
  if (quizzes.length === 0) {
    container.innerHTML = `<p style="color: var(--text-secondary);">Practice quiz coming soon for this module.</p>`;
    return;
  }

  container.innerHTML = `
    <h4 style="font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 12px;">Checkpoint Quiz</h4>
    <div id="quiz-list">
      ${quizzes.map((q, idx) => `
        <div class="quiz-card" data-idx="${idx}">
          <div style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 10px;">
            ${idx + 1}. ${q.question}
          </div>
          <div>
            ${q.options.map((opt, oIdx) => `
              <button class="quiz-choice" data-q="${idx}" data-o="${oIdx}">
                ${String.fromCharCode(65 + oIdx)}. ${opt}
              </button>
            `).join('')}
          </div>
          <div class="quiz-exp" id="qexp-${idx}" style="display: none; margin-top: 10px; font-size: 13px; color: #38bdf8; background: rgba(56,189,248,0.1); padding: 8px 12px; border-radius: 6px;">
            <b>Explanation:</b> ${q.explanation}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.quiz-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      const qIdx = parseInt(btn.getAttribute('data-q'));
      const oIdx = parseInt(btn.getAttribute('data-o'));
      const correct = quizzes[qIdx].correct;

      const card = container.querySelector(`.quiz-card[data-idx="${qIdx}"]`);
      card.querySelectorAll('.quiz-choice').forEach((b, idx) => {
        b.classList.remove('correct', 'wrong');
        if (idx === correct) b.classList.add('correct');
        else if (idx === oIdx && oIdx !== correct) b.classList.add('wrong');
      });

      const exp = document.getElementById(`qexp-${qIdx}`);
      if (exp) exp.style.display = 'block';

      if (oIdx === correct) {
        saveState();
        showToast('Correct Answer!', 'Well done! Concept mastered.');
      }
    });
  });
}

function renderCourseNotes(course, container) {
  const existing = appState.notes[course.id] || '';
  const cleanTitle = course.title.replace(/^Chapter\s+\d+:\s*/i, '');

  container.innerHTML = `
    <h4 style="font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 8px;">My Study Notes for ${cleanTitle}</h4>
    <textarea id="notes-text" style="width: 100%; height: 240px; background: #081624; border: 1px solid var(--border-subtle); border-radius: 10px; padding: 14px; color: #fff; font-size: 14px; outline: none;" placeholder="Write your revision notes here...">${existing}</textarea>
    <button id="save-notes-btn" class="action-start-btn" style="margin-top: 12px;">Save Notes</button>
  `;
  document.getElementById('save-notes-btn')?.addEventListener('click', () => {
    const val = document.getElementById('notes-text')?.value || '';
    appState.notes[course.id] = val;
    saveState();
    showToast('Saved', 'Notes saved to browser');
  });
}

// -----------------------------------------------------------------------------
// Google Identity Services (GIS) Setup & JWT Parsing
window.GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com'; // Replace with real Google OAuth 2.0 Client ID

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

window.handleGoogleCredentialResponse = function(response) {
  if (!response || !response.credential) return;
  const payload = parseJwt(response.credential);
  if (payload) {
    const name = payload.name || payload.given_name || 'Google Scholar';
    const email = payload.email || 'scholar@google.com';
    const picture = payload.picture || null;
    appState.currentUser = { name, email, picture, provider: 'Google' };
    saveState();
    renderNavbarAuth();
    closeGenericModal();
    showToast('Signed in with Google', `Welcome back, ${name}!`);
  }
};

function initGoogleAuth() {
  if (window.google && window.google.accounts && window.google.accounts.id) {
    try {
      window.google.accounts.id.initialize({
        client_id: window.GOOGLE_CLIENT_ID,
        callback: window.handleGoogleCredentialResponse,
        auto_select: false
      });
    } catch (err) {
      console.log('Google Auth initialization notice:', err);
    }
  }
}

window.renderGoogleSignInButton = function(containerId = 'g_id_signin_container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const isRealClientId = window.GOOGLE_CLIENT_ID && !window.GOOGLE_CLIENT_ID.includes('YOUR_GOOGLE_CLIENT_ID');

  if (window.google && window.google.accounts && window.google.accounts.id && isRealClientId) {
    initGoogleAuth();
    container.innerHTML = '';
    window.google.accounts.id.renderButton(
      container,
      { theme: 'outline', size: 'large', width: 240, text: 'continue_with' }
    );
  } else {
    // Google Sign-In button for preview/dev mode
    container.innerHTML = `
      <button type="button" class="social-auth-btn" style="flex: 1;" onclick="quickSocialLogin('Google')">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path fill="#ea4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"/>
          <path fill="#4285f4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
          <path fill="#fbbc05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z"/>
          <path fill="#34a853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"/>
        </svg>
        <span>Google</span>
      </button>
    `;
  }
};

function getInitials(name) {
  if (!name) return 'NL';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderNavbarAuth() {
  const container = document.getElementById('header-auth-container');
  if (!container) return;

  if (!appState.currentUser) {
    container.innerHTML = `
      <button class="nav-signin-btn" onclick="openAuthModal('signin')">Sign In</button>
    `;
  } else {
    const user = appState.currentUser;
    const initials = getInitials(user.name);
    const completed = Object.values(appState.completedCourses).filter(Boolean).length;
    const total = (curriculum.chapters || []).length || 25;
    const percent = Math.round((completed / total) * 100);

    container.innerHTML = `
      <!-- Header Progress Bar Widget -->
      <div class="header-progress-widget" onclick="openProfileModal()" title="View Curriculum Progress (${completed}/${total} chapters)">
        <div class="header-progress-info">
          <span class="header-progress-label">Progress</span>
          <span class="header-progress-val">${completed}/${total} (${percent}%)</span>
        </div>
        <div class="header-progress-track">
          <div class="header-progress-fill" style="width: ${percent}%;"></div>
        </div>
      </div>

      <div class="user-menu-wrapper">
        <button class="user-menu-btn" id="user-menu-btn" onclick="toggleAuthDropdown(event)">
          <div class="avatar-btn" style="width: 30px; height: 30px; font-size: 12px; border: none; flex-shrink: 0;">
            ${user.picture ? `<img src="${escapeHtml(user.picture)}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">` : initials}
          </div>
          <span class="user-menu-name">${escapeHtml(user.name)}</span>
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="auth-dropdown" id="auth-dropdown">
          <div class="dropdown-user-info">
            <div class="avatar-btn" style="width: 44px; height: 44px; font-size: 16px; border: none; flex-shrink: 0;">
              ${user.picture ? `<img src="${escapeHtml(user.picture)}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">` : initials}
            </div>
            <div style="overflow: hidden;">
              <div style="font-weight: 800; color: #fff; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${escapeHtml(user.name)}
              </div>
              <div style="font-size: 12px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${escapeHtml(user.email)}
              </div>
            </div>
          </div>

          <!-- Progress summary inside dropdown -->
          <div style="padding: 10px 12px; background: rgba(255,255,255,0.03); border-radius: 8px; margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #fff; margin-bottom: 4px;">
              <span>Curriculum Progress</span>
              <span style="color: #38bdf8;">${percent}%</span>
            </div>
            <div class="header-progress-track">
              <div class="header-progress-fill" style="width: ${percent}%;"></div>
            </div>
          </div>

          <button class="dropdown-item" onclick="openProfileModal(); hideAuthDropdown();">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            My Learning Profile
          </button>

          <button class="dropdown-item" onclick="openTodayModal(); hideAuthDropdown();">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Daily Physics Challenge
          </button>

          <div style="height: 1px; background: rgba(255,255,255,0.08); margin: 8px 0;"></div>

          <button class="dropdown-item danger" onclick="handleSignOut()">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
            Sign Out
          </button>
        </div>
      </div>
    `;
  }
}

window.toggleAuthDropdown = function(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById('auth-dropdown');
  if (dd) dd.classList.toggle('show');
};

window.hideAuthDropdown = function() {
  const dd = document.getElementById('auth-dropdown');
  if (dd) dd.classList.remove('show');
};

document.addEventListener('click', (e) => {
  const wrapper = document.querySelector('.user-menu-wrapper');
  if (wrapper && !wrapper.contains(e.target)) {
    hideAuthDropdown();
  }
});

window.handleSignOut = function() {
  hideAuthDropdown();
  appState.currentUser = null;
  saveState();
  renderNavbarAuth();
  showToast('Signed Out', 'You have been signed out successfully.');
};

window.currentAuthTab = 'signin';

window.openAuthModal = function(initialTab = 'signin') {
  createGenericModal(`
    <div style="padding: 24px 20px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, #3b82f6, #4f5df5); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 12px; box-shadow: 0 4px 16px rgba(59,130,246,0.3);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
            <path d="M12 2L3 7.5v9L12 22l9-5.5v-9L12 2z"/>
          </svg>
        </div>
        <h3 id="auth-modal-title" style="font-size: 22px; font-weight: 800; color: #fff; margin: 0 0 4px;">Welcome to NovaLearn</h3>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">Master physics through interactive visual learning</p>
      </div>

      <div class="auth-tabs">
        <button class="auth-tab-btn ${initialTab === 'signin' ? 'active' : ''}" id="tab-btn-signin" onclick="switchAuthTab('signin')">Sign In</button>
        <button class="auth-tab-btn ${initialTab === 'signup' ? 'active' : ''}" id="tab-btn-signup" onclick="switchAuthTab('signup')">Create Account</button>
      </div>

      <form id="auth-form" onsubmit="handleAuthSubmit(event)">
        <div class="auth-form-group" id="group-name" style="display: ${initialTab === 'signup' ? 'block' : 'none'};">
          <label>Full Name</label>
          <input type="text" id="auth-name-input" class="auth-input" placeholder="e.g. Alex Newton">
        </div>

        <div class="auth-form-group">
          <label>Email Address</label>
          <input type="email" id="auth-email-input" class="auth-input" placeholder="alex@physics.edu" required>
        </div>

        <div class="auth-form-group">
          <label>Password</label>
          <input type="password" id="auth-pass-input" class="auth-input" placeholder="••••••••" required>
        </div>

        <button type="submit" id="auth-submit-btn" class="nav-signup-btn" style="width: 100%; padding: 12px; border-radius: 10px; font-size: 15px; margin-top: 8px;">
          ${initialTab === 'signin' ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <div style="display: flex; align-items: center; gap: 12px; margin: 20px 0;">
        <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.1);"></div>
        <span style="font-size: 12px; color: var(--text-muted); font-weight: 600;">OR CONTINUE WITH</span>
        <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.1);"></div>
      </div>

      <div class="social-login-row">
        <div id="g_id_signin_container" style="flex: 1; display: flex; align-items: center; justify-content: center;"></div>
        <button type="button" class="social-auth-btn" style="flex: 1;" onclick="quickSocialLogin('GitHub')">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          GitHub
        </button>
      </div>

      <div style="margin-top: 16px; text-align: center;">
        <button type="button" onclick="quickSocialLogin('Demo')" style="background: none; border: none; color: #38bdf8; font-size: 13px; font-weight: 700; cursor: pointer; text-decoration: underline;">
          ⚡ Quick Demo Login (Alex Newton)
        </button>
      </div>
    </div>
  `, 460);

  setTimeout(() => renderGoogleSignInButton('g_id_signin_container'), 50);
};

window.switchAuthTab = function(tab) {
  window.currentAuthTab = tab;
  const btnSignin = document.getElementById('tab-btn-signin');
  const btnSignup = document.getElementById('tab-btn-signup');
  const groupName = document.getElementById('group-name');
  const submitBtn = document.getElementById('auth-submit-btn');

  if (tab === 'signin') {
    if (btnSignin) btnSignin.classList.add('active');
    if (btnSignup) btnSignup.classList.remove('active');
    if (groupName) groupName.style.display = 'none';
    if (submitBtn) submitBtn.innerText = 'Sign In';
  } else {
    if (btnSignup) btnSignup.classList.add('active');
    if (btnSignin) btnSignin.classList.remove('active');
    if (groupName) groupName.style.display = 'block';
    if (submitBtn) submitBtn.innerText = 'Create Account';
  }
};

window.handleAuthSubmit = function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('auth-email-input');
  const nameInput = document.getElementById('auth-name-input');

  const email = emailInput ? emailInput.value.trim() : '';
  let name = nameInput ? nameInput.value.trim() : '';

  if (!name) {
    name = email.split('@')[0] || 'Scholar';
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  appState.currentUser = { name, email };
  saveState();
  renderNavbarAuth();
  closeGenericModal();
  showToast('Welcome!', `Signed in as ${name}`);
};

window.quickSocialLogin = function(provider) {
  let name = 'Alex Newton';
  let email = 'alex.newton@physics.edu';

  if (provider === 'Google') {
    name = 'Alex Newton';
    email = 'alex.newton@gmail.com';
  } else if (provider === 'GitHub') {
    name = 'Alex Newton';
    email = 'alex@github.com';
  }

  appState.currentUser = { name, email };
  saveState();
  renderNavbarAuth();
  closeGenericModal();
  showToast(`Signed In via ${provider}`, `Welcome back, ${name}!`);
};

// -----------------------------------------------------------------------------
// Modals (Profile, Today)
// -----------------------------------------------------------------------------
function openProfileModal() {
  const user = appState.currentUser || { name: 'NovaLeran Scholar', email: 'Physics & Natural Sciences' };
  const initials = getInitials(user.name);
  const completed = Object.values(appState.completedCourses).filter(Boolean).length;
  const total = (curriculum.chapters || []).length || 25;
  const percent = Math.round((completed / total) * 100);

  const paths = curriculum.learningPaths || [];
  const pathBreakdownHtml = paths.map(p => {
    const courses = p.courses || [];
    const done = courses.filter(c => appState.completedCourses[c.id]).length;
    const pct = courses.length ? Math.round((done / courses.length) * 100) : 0;
    return `
      <div style="margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #fff; margin-bottom: 4px;">
          <span>${escapeHtml(p.title)}</span>
          <span style="color: #38bdf8;">${done}/${courses.length} (${pct}%)</span>
        </div>
        <div style="height: 6px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden;">
          <div style="width: ${pct}%; height: 100%; background: linear-gradient(90deg, #4f5df5, #38bdf8); border-radius: 999px;"></div>
        </div>
      </div>
    `;
  }).join('');

  createGenericModal(`
    <div style="padding: 24px;">
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(135deg, #4f5df5, #f59e0b); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; color: #fff; flex-shrink: 0; overflow: hidden;">
          ${user.picture ? `<img src="${escapeHtml(user.picture)}" style="width:100%;height:100%;object-fit:cover;">` : initials}
        </div>
        <div>
          <h3 style="font-size: 20px; font-weight: 800; color: #fff; margin: 0;">${escapeHtml(user.name)}</h3>
          <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">${escapeHtml(user.email)}</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;">
        <div style="background: #081624; border: 1px solid var(--border-subtle); border-radius: 10px; padding: 16px; text-align: center;">
          <div style="font-size: 24px; font-weight: 800; color: #38bdf8;">${completed} / ${total}</div>
          <div style="font-size: 11px; color: var(--text-muted); font-weight: 700; margin-top: 4px;">COMPLETED CHAPTERS</div>
        </div>
        <div style="background: #081624; border: 1px solid var(--border-subtle); border-radius: 10px; padding: 16px; text-align: center;">
          <div style="font-size: 24px; font-weight: 800; color: #22c55e;">${percent}%</div>
          <div style="font-size: 11px; color: var(--text-muted); font-weight: 700; margin-top: 4px;">CURRICULUM PROGRESS</div>
        </div>
      </div>

      <div style="background: #081624; border: 1px solid var(--border-subtle); border-radius: 10px; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">
          Overall Physics Curriculum
        </div>
        <div style="height: 8px; background: rgba(255, 255, 255, 0.1); border-radius: 4px; overflow: hidden; margin-bottom: 20px;">
          <div style="width: ${percent}%; height: 100%; background: linear-gradient(90deg, #4f5df5, #22c55e); border-radius: 4px; transition: width 0.3s ease;"></div>
        </div>

        <div style="font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">
          Learning Paths Progress Breakdown
        </div>
        ${pathBreakdownHtml}
      </div>
    </div>
  `, 520);
}

function openTodayModal() {
  createGenericModal(`
    <div style="text-align: center; padding: 24px;">
      <div style="font-size: 40px; margin-bottom: 12px;">✨</div>
      <h3 style="font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 6px;">Daily Challenge</h3>
      <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 20px;">Solve today's physics challenge from Nuclear Fusion &amp; Stars to test your problem-solving skills!</p>
      <button class="action-start-btn" style="width: 100%; justify-content: center;" onclick="closeGenericModal(); openCourseModal('ch-25');">Start Daily Challenge</button>
    </div>
  `, 440);
}

function createGenericModal(contentHtml, maxWidth = 500) {
  let overlay = document.getElementById('brilliant-generic-modal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'brilliant-generic-modal';
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);
  }

  overlay.innerHTML = `
    <div class="modal-dialog" style="max-width: ${maxWidth}px;">
      <div style="display: flex; justify-content: flex-end; padding: 12px 16px;">
        <button onclick="closeGenericModal()" style="background: none; border: none; color: #fff; font-size: 20px; cursor: pointer;">✕</button>
      </div>
      <div style="overflow-y: auto;">${contentHtml}</div>
    </div>
  `;

  overlay.style.display = 'flex';
  overlay.onclick = (e) => { if (e.target === overlay) closeGenericModal(); };
}

window.closeGenericModal = function() {
  const overlay = document.getElementById('brilliant-generic-modal');
  if (overlay) overlay.style.display = 'none';
};

function showToast(title, msg) {
  let toast = document.getElementById('brilliant-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'brilliant-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0e1c2b;
      border: 1px solid #22c55e;
      border-radius: 12px;
      padding: 14px 20px;
      box-shadow: var(--shadow-lg);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 2px;
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<div style="font-weight: 700; color: #22c55e; font-size: 14px;">${title}</div><div style="color: #cbd5e1; font-size: 13px;">${msg}</div>`;
  toast.style.display = 'flex';
  setTimeout(() => { toast.style.display = 'none'; }, 3000);
}
