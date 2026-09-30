/**
 * NovaLeran - Interactive Chapter Mind Map Engine
 * Dynamic visual concept graphs & hierarchical tree views for all 25 Physics chapters
 */

(function() {
  'use strict';

  // --- State ---
  let currentChapter = null;
  let allChapters = [];
  let graphNodes = [];
  let graphEdges = [];
  let selectedNode = null;
  let hoveredNode = null;
  let draggedNode = null;
  let isPanning = false;
  let panStartX = 0;
  let panStartY = 0;
  let camera = { x: 0, y: 0, zoom: 1 };
  let animFrameId = null;
  let particles = [];
  let currentViewMode = 'graph'; // 'graph' | 'tree'
  let isPhysicsRunning = true;
  let touchStartDist = 0;

  // Colors for branches
  const BRANCH_COLORS = [
    '#38bdf8', // Cyan / Sky
    '#818cf8', // Indigo / Lavender
    '#34d399', // Emerald
    '#f59e0b', // Amber
    '#ec4899', // Pink
    '#06b6d4', // Teal
    '#a855f7'  // Purple
  ];

  // --- Initialization ---
  document.addEventListener('DOMContentLoaded', () => {
    initApp();
  });

  function initApp() {
    const data = window.NOVALEARN_DATA;
    if (!data || !data.chapters) {
      console.error('NovaLeran curriculum data not found.');
      return;
    }

    allChapters = (data.chapters || []).filter(c => c.id === 'ch-25');
    if (allChapters.length === 0) allChapters = data.chapters;

    // Get chapter from URL parameter (defaulting to ch-25)
    const urlParams = new URLSearchParams(window.location.search);
    let chapterId = urlParams.get('id') || 'ch-25';

    currentChapter = (data.chapters || []).find(c => c.id === chapterId) || allChapters[0];

    // Setup UI
    setupHeaderControls();
    setupCanvas();
    setupEventListeners();
    setupInspector();

    // Load & render current chapter
    loadChapter(currentChapter);
  }

  // --- Setup UI Controls ---
  function setupHeaderControls() {
    const selectEl = document.getElementById('chapter-select-dropdown');
    if (selectEl) {
      selectEl.innerHTML = '';
      const units = [
        { name: 'Nuclear Physics & Stars', ids: ['ch-25'] }
      ];

      units.forEach(u => {
        const optGroup = document.createElement('optgroup');
        optGroup.label = u.name;
        u.ids.forEach(cid => {
          const ch = allChapters.find(c => c.id === cid);
          if (ch) {
            const opt = document.createElement('option');
            opt.value = ch.id;
            opt.textContent = `${ch.num ? ch.num + '. ' : ''}${ch.title.replace(/^Chapter\s+\d+:\s*/i, '')}`;
            if (ch.id === currentChapter.id) opt.selected = true;
            optGroup.appendChild(opt);
          }
        });
        selectEl.appendChild(optGroup);
      });

      selectEl.addEventListener('change', (e) => {
        const newId = e.target.value;
        const targetCh = allChapters.find(c => c.id === newId);
        if (targetCh) {
          // Update URL without full reload
          const newUrl = `${window.location.pathname}?id=${targetCh.id}`;
          window.history.pushState({ id: targetCh.id }, '', newUrl);
          loadChapter(targetCh);
        }
      });
    }

    // View switch buttons
    const btnGraph = document.getElementById('btn-view-graph');
    const btnTree = document.getElementById('btn-view-tree');
    if (btnGraph && btnTree) {
      btnGraph.addEventListener('click', () => switchViewMode('graph'));
      btnTree.addEventListener('click', () => switchViewMode('tree'));
    }

    // Zoom & Reset controls
    document.getElementById('btn-zoom-in')?.addEventListener('click', () => zoomBy(1.2));
    document.getElementById('btn-zoom-out')?.addEventListener('click', () => zoomBy(0.8));
    document.getElementById('btn-zoom-reset')?.addEventListener('click', () => resetCamera(true));
    document.getElementById('btn-toggle-physics')?.addEventListener('click', togglePhysics);

    // Inspector toggle on mobile
    const toggleInspectorBtn = document.getElementById('btn-toggle-inspector');
    if (toggleInspectorBtn) {
      toggleInspectorBtn.addEventListener('click', () => {
        const panel = document.getElementById('mm-inspector-panel');
        if (panel) panel.classList.toggle('open');
      });
    }
  }

  function switchViewMode(mode) {
    currentViewMode = mode;
    const btnGraph = document.getElementById('btn-view-graph');
    const btnTree = document.getElementById('btn-view-tree');
    const canvasContainer = document.getElementById('mm-canvas-container');
    const treeContainer = document.getElementById('mm-tree-container');

    if (mode === 'graph') {
      btnGraph?.classList.add('active');
      btnTree?.classList.remove('active');
      if (canvasContainer) canvasContainer.style.display = 'block';
      if (treeContainer) treeContainer.style.display = 'none';
      startAnimation();
    } else {
      btnTree?.classList.add('active');
      btnGraph?.classList.remove('active');
      if (canvasContainer) canvasContainer.style.display = 'none';
      if (treeContainer) treeContainer.style.display = 'block';
      renderTreeView();
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
    }
  }

  // --- Chapter Loader & Graph Builder ---
  function loadChapter(chapter) {
    currentChapter = chapter;
    document.title = `${chapter.title.replace(/^Chapter\s+\d+:\s*/i, '')} - Mind Map | NovaLeran`;

    // Update Header Badges
    const badgeEl = document.getElementById('chapter-header-badge');
    const titleEl = document.getElementById('chapter-header-title');
    const metaEl = document.getElementById('chapter-header-meta');
    const selectEl = document.getElementById('chapter-select-dropdown');

    if (selectEl) selectEl.value = chapter.id;
    if (badgeEl) badgeEl.textContent = `Chapter ${chapter.num || ''}`;
    if (titleEl) titleEl.textContent = chapter.title.replace(/^Chapter\s+\d+:\s*/i, '');

    const mindMap = chapter.mindMap || {
      core: chapter.summary || 'Fundamental physics concepts and core equations.',
      color: '#38bdf8',
      branches: []
    };

    const branches = mindMap.branches || [];
    const totalConcepts = branches.reduce((sum, b) => sum + (b.subconcepts ? b.subconcepts.length : 0), 0);

    if (metaEl) {
      metaEl.innerHTML = `
        <span style="color:#38bdf8; font-weight:700;">${branches.length}</span> Branches &nbsp;•&nbsp; 
        <span style="color:#818cf8; font-weight:700;">${totalConcepts}</span> Key Concepts &nbsp;•&nbsp;
        <span style="color:#34d399; font-weight:700;">${chapter.duration || '60 min'}</span>
      `;
    }

    // Build Graph Nodes & Edges
    buildGraphData(chapter, mindMap);

    // Reset camera & inspector
    resetCamera(false);
    selectedNode = graphNodes[0] || null;
    updateInspector(selectedNode);

    // Render tree view if active
    if (currentViewMode === 'tree') {
      renderTreeView();
    } else {
      startAnimation();
    }
  }

  function buildGraphData(chapter, mindMap) {
    graphNodes = [];
    graphEdges = [];
    particles = [];

    const branches = mindMap.branches || [];
    const cleanTitle = chapter.title.replace(/^Chapter\s+\d+:\s*/i, '');

    // 1. Root Node (Center)
    const rootNode = {
      id: 'root',
      type: 'root',
      title: cleanTitle,
      subtitle: 'Core Concept',
      core: mindMap.core,
      color: mindMap.color || '#38bdf8',
      radius: 46,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      mass: 8,
      chapter: chapter
    };
    graphNodes.push(rootNode);

    // 2. Branch Nodes & Concept Nodes
    const branchCount = branches.length;
    const baseRadius = branchCount <= 3 ? 200 : 250;

    branches.forEach((branch, bIdx) => {
      const branchColor = BRANCH_COLORS[bIdx % BRANCH_COLORS.length];
      const angle = (bIdx / branchCount) * Math.PI * 2 - Math.PI / 2;
      const bx = Math.cos(angle) * baseRadius;
      const by = Math.sin(angle) * baseRadius;

      const branchNode = {
        id: `branch-${branch.id || bIdx}`,
        type: 'branch',
        title: branch.title,
        badge: branch.badge || `Part ${bIdx + 1}`,
        color: branchColor,
        radius: 34,
        x: bx + (Math.random() - 0.5) * 20,
        y: by + (Math.random() - 0.5) * 20,
        vx: 0,
        vy: 0,
        mass: 4,
        branchData: branch,
        targetAngle: angle,
        targetDist: baseRadius
      };
      graphNodes.push(branchNode);

      // Edge from Root to Branch
      graphEdges.push({
        source: rootNode,
        target: branchNode,
        color: branchColor,
        length: baseRadius,
        width: 3.5,
        type: 'root-branch'
      });

      // 3. Sub-concept Nodes
      const subconcepts = branch.subconcepts || [];
      const subCount = subconcepts.length;
      const subRadius = 140;

      subconcepts.forEach((sub, sIdx) => {
        const spreadAngle = subCount > 1 ? 0.7 : 0;
        const subAngleOffset = subCount > 1 
          ? (sIdx - (subCount - 1) / 2) * (spreadAngle / (subCount - 1))
          : 0;
        const subAngle = angle + subAngleOffset;
        const sx = bx + Math.cos(subAngle) * subRadius;
        const sy = by + Math.sin(subAngle) * subRadius;

        const conceptNode = {
          id: `concept-${branch.id || bIdx}-${sIdx}`,
          type: 'concept',
          title: sub.name,
          tag: sub.tag,
          desc: sub.desc,
          formula: sub.formula,
          color: branchColor,
          radius: 24,
          x: sx + (Math.random() - 0.5) * 10,
          y: sy + (Math.random() - 0.5) * 10,
          vx: 0,
          vy: 0,
          mass: 2,
          branchTitle: branch.title,
          subData: sub,
          parentBranch: branchNode
        };
        graphNodes.push(conceptNode);

        // Edge from Branch to Sub-concept
        graphEdges.push({
          source: branchNode,
          target: conceptNode,
          color: branchColor,
          length: subRadius,
          width: 2,
          type: 'branch-concept'
        });
      });
    });

    // Create moving energy particles along edges
    graphEdges.forEach((edge, idx) => {
      particles.push({
        edge: edge,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.003,
        size: 3 + Math.random() * 2
      });
    });
  }

  // --- Canvas Rendering & Physics ---
  let canvas = null;
  let ctx = null;

  function setupCanvas() {
    canvas = document.getElementById('mm-graph-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  function resizeCanvas() {
    if (!canvas || !ctx) return;
    const container = canvas.parentElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);
  }

  function resetCamera(animate = true) {
    if (!canvas) return;
    const container = canvas.parentElement;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const targetZoom = w < 600 ? 0.72 : (w < 900 ? 0.88 : 1.05);
    const targetX = w / 2;
    const targetY = h / 2;

    if (!animate) {
      camera.x = targetX;
      camera.y = targetY;
      camera.zoom = targetZoom;
    } else {
      camera.x = targetX;
      camera.y = targetY;
      camera.zoom = targetZoom;
    }
  }

  function zoomBy(factor) {
    if (!canvas) return;
    const container = canvas.parentElement;
    const cx = container.clientWidth / 2;
    const cy = container.clientHeight / 2;

    const newZoom = Math.max(0.4, Math.min(2.5, camera.zoom * factor));
    camera.x = cx - (cx - camera.x) * (newZoom / camera.zoom);
    camera.y = cy - (cy - camera.y) * (newZoom / camera.zoom);
    camera.zoom = newZoom;
  }

  function togglePhysics() {
    isPhysicsRunning = !isPhysicsRunning;
    const btn = document.getElementById('btn-toggle-physics');
    if (btn) {
      btn.style.color = isPhysicsRunning ? '#38bdf8' : '#94a3b8';
    }
  }

  function startAnimation() {
    if (animFrameId) cancelAnimationFrame(animFrameId);

    function frame() {
      if (currentViewMode === 'graph') {
        updatePhysics();
        drawGraph();
        animFrameId = requestAnimationFrame(frame);
      }
    }
    animFrameId = requestAnimationFrame(frame);
  }

  function updatePhysics() {
    if (!isPhysicsRunning) return;

    // 1. Repulsion between all node pairs
    for (let i = 0; i < graphNodes.length; i++) {
      for (let j = i + 1; j < graphNodes.length; j++) {
        const n1 = graphNodes[i];
        const n2 = graphNodes[j];

        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const distSq = dx * dx + dy * dy || 1;
        const dist = Math.sqrt(distSq);

        const minDist = n1.radius + n2.radius + 30;
        const force = (minDist * minDist * 40) / distSq;

        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;

        if (n1 !== draggedNode && n1.type !== 'root') {
          n1.vx -= fx / n1.mass;
          n1.vy -= fy / n1.mass;
        }
        if (n2 !== draggedNode && n2.type !== 'root') {
          n2.vx += fx / n2.mass;
          n2.vy += fy / n2.mass;
        }
      }
    }

    // 2. Spring attraction along edges
    graphEdges.forEach(edge => {
      const dx = edge.target.x - edge.source.x;
      const dy = edge.target.y - edge.source.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      const delta = dist - edge.length;
      const springStrength = edge.type === 'root-branch' ? 0.03 : 0.04;
      const force = delta * springStrength;

      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;

      if (edge.source !== draggedNode && edge.source.type !== 'root') {
        edge.source.vx += fx / edge.source.mass;
        edge.source.vy += fy / edge.source.mass;
      }
      if (edge.target !== draggedNode && edge.target.type !== 'root') {
        edge.target.vx -= fx / edge.target.mass;
        edge.target.vy -= fy / edge.target.mass;
      }
    });

    // 3. Radial orbital anchoring for branch nodes
    graphNodes.forEach(node => {
      if (node.type === 'branch' && node !== draggedNode) {
        const targetX = Math.cos(node.targetAngle) * node.targetDist;
        const targetY = Math.sin(node.targetAngle) * node.targetDist;
        node.vx += (targetX - node.x) * 0.02;
        node.vy += (targetY - node.y) * 0.02;
      }
    });

    // 4. Center anchoring for root node
    const root = graphNodes[0];
    if (root && root !== draggedNode) {
      root.x += (0 - root.x) * 0.1;
      root.y += (0 - root.y) * 0.1;
      root.vx = 0;
      root.vy = 0;
    }

    // 5. Apply velocities with friction damping
    graphNodes.forEach(node => {
      if (node !== draggedNode) {
        node.vx *= 0.85;
        node.vy *= 0.85;
        node.x += node.vx;
        node.y += node.vy;
      }
    });

    // 6. Update energy particles
    particles.forEach(p => {
      p.progress += p.speed;
      if (p.progress > 1) p.progress = 0;
    });
  }

  function drawGraph() {
    if (!ctx || !canvas) return;

    const width = canvas.parentElement.clientWidth;
    const height = canvas.parentElement.clientHeight;

    ctx.clearRect(0, 0, width, height);

    // Save camera transform
    ctx.save();
    ctx.translate(camera.x, camera.y);
    ctx.scale(camera.zoom, camera.zoom);

    // Draw Background Grid Dots
    drawBackgroundGrid();

    // 1. Draw Edges with curved cubic beziers
    graphEdges.forEach(edge => {
      const isConnectedToSelected = selectedNode && 
        (edge.source === selectedNode || edge.target === selectedNode || 
         (selectedNode.type === 'branch' && edge.target.parentBranch === selectedNode));

      ctx.beginPath();
      ctx.moveTo(edge.source.x, edge.source.y);

      // Curved control point
      const midX = (edge.source.x + edge.target.x) / 2;
      const midY = (edge.source.y + edge.target.y) / 2;
      const perpX = -(edge.target.y - edge.source.y) * 0.1;
      const perpY = (edge.target.x - edge.source.x) * 0.1;

      ctx.quadraticCurveTo(midX + perpX, midY + perpY, edge.target.x, edge.target.y);

      if (isConnectedToSelected) {
        ctx.strokeStyle = edge.color;
        ctx.lineWidth = edge.width + 2;
        ctx.shadowColor = edge.color;
        ctx.shadowBlur = 10;
      } else {
        ctx.strokeStyle = edge.type === 'root-branch' ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = edge.width;
        ctx.shadowBlur = 0;
      }

      ctx.stroke();
      ctx.shadowBlur = 0;
    });

    // 2. Draw Moving Energy Particles along Edges
    particles.forEach(p => {
      const sx = p.edge.source.x;
      const sy = p.edge.source.y;
      const tx = p.edge.target.x;
      const ty = p.edge.target.y;

      const px = sx + (tx - sx) * p.progress;
      const py = sy + (ty - sy) * p.progress;

      ctx.beginPath();
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.edge.color;
      ctx.shadowColor = p.edge.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // 3. Draw Nodes
    graphNodes.forEach(node => {
      drawNode(node);
    });

    ctx.restore();
  }

  function drawBackgroundGrid() {
    const gridSize = 40;
    const range = 1200;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let x = -range; x <= range; x += gridSize) {
      for (let y = -range; y <= range; y += gridSize) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function drawNode(node) {
    const isSelected = selectedNode === node;
    const isHovered = hoveredNode === node;

    ctx.save();
    ctx.translate(node.x, node.y);

    // Glow Halo on select or hover
    if (isSelected || isHovered) {
      ctx.beginPath();
      ctx.arc(0, 0, node.radius + (isSelected ? 10 : 6), 0, Math.PI * 2);
      ctx.fillStyle = isSelected ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.1)';
      ctx.fill();
    }

    if (node.type === 'root') {
      // --- ROOT NODE (Central Circle) ---
      const grad = ctx.createRadialGradient(0, 0, 10, 0, 0, node.radius);
      grad.addColorStop(0, '#0f2744');
      grad.addColorStop(1, '#061322');

      ctx.beginPath();
      ctx.arc(0, 0, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.lineWidth = isSelected ? 3.5 : 2.5;
      ctx.strokeStyle = node.color;
      ctx.shadowColor = node.color;
      ctx.shadowBlur = isSelected ? 16 : 8;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Central Icon / Emblem
      ctx.fillStyle = '#ffffff';
      ctx.font = '800 13px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Truncate title cleanly
      wrapText(ctx, node.title, 0, -2, node.radius * 1.6, 14);

    } else if (node.type === 'branch') {
      // --- BRANCH NODE (Pill Shape / Rounded Hex) ---
      const w = 110;
      const h = 42;

      ctx.beginPath();
      roundRect(ctx, -w / 2, -h / 2, w, h, 12);
      ctx.fillStyle = '#0a1a2c';
      ctx.fill();

      ctx.lineWidth = isSelected ? 3 : 2;
      ctx.strokeStyle = node.color;
      if (isSelected || isHovered) {
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 12;
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Badge
      ctx.fillStyle = node.color;
      ctx.font = '700 9px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText((node.badge || '').toUpperCase(), 0, -8);

      // Title
      ctx.fillStyle = '#ffffff';
      ctx.font = '600 11px -apple-system, BlinkMacSystemFont, sans-serif';
      let titleStr = node.title;
      if (titleStr.length > 15) titleStr = titleStr.substring(0, 14) + '…';
      ctx.fillText(titleStr, 0, 8);

    } else {
      // --- CONCEPT LEAF NODE (Compact Card) ---
      const w = 96;
      const h = 32;

      ctx.beginPath();
      roundRect(ctx, -w / 2, -h / 2, w, h, 8);
      ctx.fillStyle = isSelected ? '#122b46' : '#081624';
      ctx.fill();

      ctx.lineWidth = isSelected ? 2 : 1;
      ctx.strokeStyle = isSelected ? node.color : 'rgba(255, 255, 255, 0.15)';
      ctx.stroke();

      // Mini colored accent bar on the left
      ctx.beginPath();
      roundRect(ctx, -w / 2, -h / 2, 4, h, 2);
      ctx.fillStyle = node.color;
      ctx.fill();

      // Concept Title
      ctx.fillStyle = isSelected ? '#ffffff' : '#cbd5e1';
      ctx.font = '500 10.5px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      let text = node.title;
      if (text.length > 14) text = text.substring(0, 13) + '…';
      ctx.fillText(text, 2, 0);
    }

    ctx.restore();
  }

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    const lines = [];

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        lines.push(line);
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    const startY = y - ((lines.length - 1) * lineHeight) / 2;
    for (let k = 0; k < lines.length; k++) {
      ctx.fillText(lines[k].trim(), x, startY + k * lineHeight);
    }
  }

  // --- Interaction & Event Handling ---
  function setupEventListeners() {
    if (!canvas) return;

    // Mouse Events
    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });

    // Touch Events
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd, { passive: false });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === '+' || e.key === '=') zoomBy(1.15);
      if (e.key === '-' || e.key === '_') zoomBy(0.85);
      if (e.key === 'r' || e.key === 'R') resetCamera(true);
      if (e.key === 'Escape') {
        selectedNode = null;
        updateInspector(null);
      }
    });

    // Popstate for browser back/forward
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.id) {
        const targetCh = allChapters.find(c => c.id === e.state.id);
        if (targetCh) loadChapter(targetCh);
      }
    });
  }

  function getCanvasCoords(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = (clientX - rect.left - camera.x) / camera.zoom;
    const y = (clientY - rect.top - camera.y) / camera.zoom;
    return { x, y };
  }

  function getNodeAt(x, y) {
    for (let i = graphNodes.length - 1; i >= 0; i--) {
      const node = graphNodes[i];
      const dx = x - node.x;
      const dy = y - node.y;
      const hitRadius = node.radius + 8;
      if (dx * dx + dy * dy <= hitRadius * hitRadius) {
        return node;
      }
    }
    return null;
  }

  function onPointerDown(e) {
    const { x, y } = getCanvasCoords(e.clientX, e.clientY);
    const hit = getNodeAt(x, y);

    if (hit) {
      draggedNode = hit;
      selectedNode = hit;
      updateInspector(hit);
    } else {
      isPanning = true;
      panStartX = e.clientX - camera.x;
      panStartY = e.clientY - camera.y;
    }
  }

  function onPointerMove(e) {
    if (draggedNode) {
      const { x, y } = getCanvasCoords(e.clientX, e.clientY);
      draggedNode.x = x;
      draggedNode.y = y;
      draggedNode.vx = 0;
      draggedNode.vy = 0;
    } else if (isPanning) {
      camera.x = e.clientX - panStartX;
      camera.y = e.clientY - panStartY;
    } else if (canvas) {
      const { x, y } = getCanvasCoords(e.clientX, e.clientY);
      const hit = getNodeAt(x, y);
      if (hit !== hoveredNode) {
        hoveredNode = hit;
        canvas.style.cursor = hit ? 'pointer' : 'grab';
      }
    }
  }

  function onPointerUp() {
    draggedNode = null;
    isPanning = false;
    if (canvas) canvas.style.cursor = 'grab';
  }

  function onWheel(e) {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    zoomBy(factor);
  }

  // Touch support
  function onTouchStart(e) {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const { x, y } = getCanvasCoords(touch.clientX, touch.clientY);
      const hit = getNodeAt(x, y);

      if (hit) {
        draggedNode = hit;
        selectedNode = hit;
        updateInspector(hit);
      } else {
        isPanning = true;
        panStartX = touch.clientX - camera.x;
        panStartY = touch.clientY - camera.y;
      }
    } else if (e.touches.length === 2) {
      // Pinch to zoom
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartDist = Math.sqrt(dx * dx + dy * dy);
    }
  }

  function onTouchMove(e) {
    e.preventDefault();
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      if (draggedNode) {
        const { x, y } = getCanvasCoords(touch.clientX, touch.clientY);
        draggedNode.x = x;
        draggedNode.y = y;
      } else if (isPanning) {
        camera.x = touch.clientX - panStartX;
        camera.y = touch.clientY - panStartY;
      }
    } else if (e.touches.length === 2 && touchStartDist > 0) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const factor = dist / touchStartDist;
      touchStartDist = dist;
      zoomBy(factor);
    }
  }

  function onTouchEnd() {
    draggedNode = null;
    isPanning = false;
    touchStartDist = 0;
  }

  // --- Hierarchical Tree View Mode ---
  function renderTreeView() {
    const container = document.getElementById('mm-tree-container');
    if (!container || !currentChapter) return;

    const mindMap = currentChapter.mindMap || { core: '', color: '#38bdf8', branches: [] };
    const branches = mindMap.branches || [];

    container.innerHTML = `
      <div style="max-width: 900px; margin: 0 auto; padding: 24px;">
        <!-- Core Node Banner -->
        <div style="background: linear-gradient(135deg, #091a2d, #0d2847); border: 2px solid #38bdf8; border-radius: 16px; padding: 24px; margin-bottom: 28px; box-shadow: 0 8px 30px rgba(0,0,0,0.4);">
          <div style="font-size: 11px; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">
            Central Concept Framework
          </div>
          <h2 style="font-size: 24px; font-weight: 800; color: #fff; margin: 0 0 10px 0;">
            ${currentChapter.title.replace(/^Chapter\s+\d+:\s*/i, '')}
          </h2>
          <p style="font-size: 14px; color: #cbd5e1; line-height: 1.6; margin: 0;">
            ${mindMap.core}
          </p>
        </div>

        <!-- Branches Accordion / Tree List -->
        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${branches.map((b, bIdx) => {
            const bColor = BRANCH_COLORS[bIdx % BRANCH_COLORS.length];
            const subs = b.subconcepts || [];

            return `
              <div class="mm-tree-branch-card" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 14px; overflow: hidden; transition: all 0.2s ease;">
                <div style="padding: 16px 20px; background: rgba(255, 255, 255, 0.03); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; gap: 12px;">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 12px; height: 12px; border-radius: 50%; background: ${bColor}; box-shadow: 0 0 10px ${bColor};"></span>
                    <h3 style="font-size: 17px; font-weight: 700; color: #fff; margin: 0;">${b.title}</h3>
                  </div>
                  <span style="font-size: 11px; font-weight: 700; color: ${bColor}; background: rgba(255,255,255,0.06); padding: 3px 10px; border-radius: 20px;">
                    ${b.badge || `Part ${bIdx + 1}`} (${subs.length})
                  </span>
                </div>

                <div style="padding: 16px 20px; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px;">
                  ${subs.map(s => `
                    <div class="mm-tree-concept-item" onclick="window.selectTreeConcept('${currentChapter.id}', '${b.id}', '${s.name}')" style="background: #081624; border: 1px solid var(--border-subtle); border-radius: 10px; padding: 14px; cursor: pointer; transition: all 0.2s ease;">
                      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
                        <span style="font-size: 14px; font-weight: 700; color: #fff;">${s.name}</span>
                        ${s.tag ? `<span style="font-size: 10px; font-weight: 700; color: ${bColor}; background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px;">${s.tag}</span>` : ''}
                      </div>
                      <p style="font-size: 12px; color: #94a3b8; line-height: 1.4; margin: 0 0 8px 0;">${s.desc}</p>
                      ${s.formula ? `
                        <div style="font-family: monospace; font-size: 11px; color: #38bdf8; background: #030d17; padding: 4px 8px; border-radius: 6px; display: inline-block;">
                          ${s.formula}
                        </div>
                      ` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  window.selectTreeConcept = function(chId, branchId, conceptName) {
    const node = graphNodes.find(n => n.type === 'concept' && n.title === conceptName);
    if (node) {
      selectedNode = node;
      updateInspector(node);
      const panel = document.getElementById('mm-inspector-panel');
      if (panel) panel.classList.add('open');
    }
  };

  // --- Inspector Panel ---
  function setupInspector() {
    // Initial blank or default
  }

  function updateInspector(node) {
    const container = document.getElementById('mm-inspector-content');
    if (!container) return;

    if (!node) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: #64748b;">
          <div style="font-size: 32px; margin-bottom: 12px;">🧠</div>
          <h4 style="font-size: 14px; font-weight: 700; color: #94a3b8; margin: 0 0 6px 0;">Concept Inspector</h4>
          <p style="font-size: 12px; line-height: 1.5; margin: 0;">Click or tap any node on the graph to explore formulas, breakdowns, and relationships.</p>
        </div>
      `;
      return;
    }

    if (node.type === 'root') {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <div style="font-size: 10px; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">Central Theme</div>
            <h3 style="font-size: 18px; font-weight: 800; color: #fff; margin: 0 0 8px 0;">${node.title}</h3>
            <div style="font-size: 13px; color: #cbd5e1; line-height: 1.6; background: #081624; border: 1px solid var(--border-subtle); padding: 14px; border-radius: 10px;">
              ${node.core || currentChapter.summary || 'Essential core framework for this physics module.'}
            </div>
          </div>

          <div>
            <div style="font-size: 10px; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px;">Chapter Modules (${(currentChapter.mindMap?.branches || []).length})</div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
              ${(currentChapter.mindMap?.branches || []).map((b, i) => `
                <div class="mm-legend-item" onclick="window.focusBranchNode('${b.id || i}')" style="display: flex; align-items: center; justify-content: space-between; background: #081624; border: 1px solid var(--border-subtle); padding: 8px 12px; border-radius: 8px; cursor: pointer;">
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: ${BRANCH_COLORS[i % BRANCH_COLORS.length]};"></span>
                    <span style="font-size: 12px; font-weight: 600; color: #fff;">${b.title}</span>
                  </div>
                  <span style="font-size: 10px; color: #64748b;">${(b.subconcepts || []).length} ideas</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (node.type === 'branch') {
      const subs = node.branchData?.subconcepts || [];
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="width: 10px; height: 10px; border-radius: 50%; background: ${node.color}; box-shadow: 0 0 8px ${node.color};"></span>
              <span style="font-size: 10px; font-weight: 800; color: ${node.color}; text-transform: uppercase;">${node.badge || 'Branch'}</span>
            </div>
            <h3 style="font-size: 18px; font-weight: 800; color: #fff; margin: 0 0 10px 0;">${node.title}</h3>
          </div>

          <div>
            <div style="font-size: 10px; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px;">Key Concepts in this Branch</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${subs.map(s => `
                <div onclick="window.focusConceptNode('${s.name}')" style="background: #081624; border: 1px solid var(--border-subtle); padding: 10px 12px; border-radius: 8px; cursor: pointer; transition: all 0.15s ease;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span style="font-size: 12.5px; font-weight: 700; color: #fff;">${s.name}</span>
                    ${s.tag ? `<span style="font-size: 9.5px; color: ${node.color};">${s.tag}</span>` : ''}
                  </div>
                  <p style="font-size: 11.5px; color: #94a3b8; line-height: 1.35; margin: 0;">${s.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (node.type === 'concept') {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
              <span style="font-size: 10px; font-weight: 800; color: ${node.color}; text-transform: uppercase;">${node.branchTitle || 'Concept'}</span>
              ${node.tag ? `
                <span style="color: #64748b;">•</span>
                <span style="font-size: 10px; font-weight: 700; color: #94a3b8;">${node.tag}</span>
              ` : ''}
            </div>
            <h3 style="font-size: 18px; font-weight: 800; color: #fff; margin: 0 0 10px 0;">${node.title}</h3>
          </div>

          <div>
            <div style="font-size: 10px; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">Explanation</div>
            <div style="font-size: 13px; color: #cbd5e1; line-height: 1.6; background: #081624; border: 1px solid var(--border-subtle); padding: 12px 14px; border-radius: 10px;">
              ${node.desc || 'Fundamental physical relation.'}
            </div>
          </div>

          ${node.formula ? `
            <div>
              <div style="font-size: 10px; font-weight: 800; color: #f59e0b; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">Formula</div>
              <div style="font-family: monospace; font-size: 13px; font-weight: 700; color: #38bdf8; background: #030d17; border: 1px solid rgba(56, 189, 248, 0.3); padding: 10px 14px; border-radius: 8px; overflow-x: auto;">
                ${node.formula}
              </div>
            </div>
          ` : ''}

          <div style="margin-top: 8px;">
            <button onclick="window.markConceptMastered('${node.id}')" class="action-start-btn" style="width: 100%; justify-content: center; font-size: 13px; padding: 10px 14px;">
              ⭐ Mark Concept Mastered
            </button>
          </div>
        </div>
      `;
    }
  }

  window.focusBranchNode = function(branchId) {
    const target = graphNodes.find(n => n.type === 'branch' && (n.id.includes(branchId) || n.branchData?.id === branchId));
    if (target) {
      selectedNode = target;
      updateInspector(target);
      camera.x = canvas.parentElement.clientWidth / 2 - target.x * camera.zoom;
      camera.y = canvas.parentElement.clientHeight / 2 - target.y * camera.zoom;
    }
  };

  window.focusConceptNode = function(title) {
    const target = graphNodes.find(n => n.type === 'concept' && n.title === title);
    if (target) {
      selectedNode = target;
      updateInspector(target);
      camera.x = canvas.parentElement.clientWidth / 2 - target.x * camera.zoom;
      camera.y = canvas.parentElement.clientHeight / 2 - target.y * camera.zoom;
    }
  };

  window.markConceptMastered = function(nodeId) {
    const btn = event?.target;
    if (btn) {
      btn.style.background = '#22c55e';
      btn.textContent = '✓ Mastered';
    }
  };

})();
