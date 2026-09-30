var NOVALEARN_DATA = (typeof window !== 'undefined' ? window : global).NOVALEARN_DATA = {
  "brand": {
    "name": "NovaLeran",
    "tagline": "Interactive Physics & Natural Sciences",
    "url": "https://brilliant.org/courses/"
  },
  "learningPaths": [
    {
      "id": "path-physics-unit-a",
      "title": "Space, Time and Motion",
      "category": "Science",
      "subtitle": "Kinematics, Dynamics, Energy, Momentum, Rigid Bodies, and Relativity",
      "badge": null,
      "icon": "motion",
      "color": "#4f5df5",
      "accent": "#f59e0b",
      "courses": [
        {
          "id": "ch-1",
          "title": "Kinematics",
          "badge": null,
          "gradient": "linear-gradient(135deg, #07152b, #0e2447)",
          "iconType": "graph",
          "desc": "Kinematics describes the motion of points, bodies, and systems of bodies without consideration of the forces that cause them to move. Master the four SUVAT equations and vector decomposition for ballistic trajectories.",
          "mindMap": {
            "core": "Study of motion of points, bodies, and systems of bodies without consideration of the forces that cause them to move.",
            "color": "#38bdf8",
            "branches": [
              {
                "id": "b1",
                "title": "Position & Motion Rates",
                "badge": "1D Kinematics",
                "subconcepts": [
                  {
                    "name": "Displacement vs Distance",
                    "tag": "Vector vs Scalar",
                    "desc": "Displacement \u0394x is the shortest vector from start to finish; distance is total path length.",
                    "formula": "\u0394x = x_f - x_i"
                  },
                  {
                    "name": "Instantaneous Velocity",
                    "tag": "Calculus",
                    "desc": "Time rate of change of displacement evaluated at an infinitesimal instant.",
                    "formula": "v = dx/dt = lim(\u0394t\u21920) \u0394x/\u0394t"
                  },
                  {
                    "name": "Acceleration",
                    "tag": "Rate of Rate",
                    "desc": "Time rate of change of velocity; non-zero whenever speed or direction changes.",
                    "formula": "a = dv/dt = d\u00b2x/dt\u00b2"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "SUVAT Equations (Constant a)",
                "badge": "Uniform Accel",
                "subconcepts": [
                  {
                    "name": "Velocity-Time Relation",
                    "tag": "SUVAT 1",
                    "desc": "Final velocity after accelerating at rate a for time t.",
                    "formula": "v = u + at"
                  },
                  {
                    "name": "Position-Time Relation",
                    "tag": "SUVAT 2",
                    "desc": "Total displacement under constant acceleration.",
                    "formula": "s = ut + \u00bdat\u00b2"
                  },
                  {
                    "name": "Work-Kinematics Form",
                    "tag": "SUVAT 3",
                    "desc": "Relates velocities and displacement without explicit time dependency.",
                    "formula": "v\u00b2 = u\u00b2 + 2as"
                  },
                  {
                    "name": "Mean Speed Form",
                    "tag": "SUVAT 4",
                    "desc": "Displacement as average velocity multiplied by duration.",
                    "formula": "s = \u00bd(u + v)t"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Motion Graphs & Graphical Calculus",
                "badge": "Visual Analytics",
                "subconcepts": [
                  {
                    "name": "Displacement-Time (x-t)",
                    "tag": "Slope = v",
                    "desc": "Gradient equals instantaneous velocity; curvature indicates acceleration.",
                    "formula": "Gradient = dx/dt = v"
                  },
                  {
                    "name": "Velocity-Time (v-t)",
                    "tag": "Slope = a, Area = s",
                    "desc": "Gradient represents acceleration; definite area under curve equals displacement.",
                    "formula": "Area = \u222b v dt = \u0394x"
                  },
                  {
                    "name": "Acceleration-Time (a-t)",
                    "tag": "Area = \u0394v",
                    "desc": "Area under curve yields total change in velocity.",
                    "formula": "Area = \u222b a dt = \u0394v"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "2D Projectile Trajectories",
                "badge": "2D Motion",
                "subconcepts": [
                  {
                    "name": "Orthogonal Independence",
                    "tag": "Vectors",
                    "desc": "Horizontal and vertical motions proceed completely independently of one another.",
                    "formula": "v_x = u cos\u03b8, v_y = u sin\u03b8 - gt"
                  },
                  {
                    "name": "Trajectory Peak & Hangtime",
                    "tag": "Symmetry",
                    "desc": "Vertical velocity vanishes at apex (v_y = 0); total flight time T = 2u sin\u03b8 / g.",
                    "formula": "H_max = (u\u00b2 sin\u00b2\u03b8)/(2g)"
                  },
                  {
                    "name": "Horizontal Range",
                    "tag": "Ballistics",
                    "desc": "Horizontal distance traveled over flat ground; maximized at 45\u00b0 launch.",
                    "formula": "R = (u\u00b2 sin 2\u03b8)/g"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-2",
          "title": "Forces and Newton's laws",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "bar",
          "desc": "Dynamics links kinematics with the causes of motion through Newton's three laws. Forces determine translational acceleration and centripetal acceleration in circular orbits and turns.",
          "mindMap": {
            "core": "Mechanisms and laws governing forces, inertia, momentum exchange, and classical equilibrium.",
            "color": "#6366f1",
            "branches": [
              {
                "id": "b1",
                "title": "Newton's Three Axioms",
                "badge": "Classical Laws",
                "subconcepts": [
                  {
                    "name": "1st Law: Inertia",
                    "tag": "Equilibrium",
                    "desc": "A body remains at rest or in uniform straight motion unless acted upon by a net external force.",
                    "formula": "\u03a3F = 0 \u21d4 a = 0"
                  },
                  {
                    "name": "2nd Law: Momentum Rate",
                    "tag": "Dynamics",
                    "desc": "Net force equals the time rate of change of momentum; simplifies to F = ma for constant mass.",
                    "formula": "\u03a3F = dp/dt = ma"
                  },
                  {
                    "name": "3rd Law: Action-Reaction",
                    "tag": "Pairs",
                    "desc": "Forces always occur in matched collinear pairs equal in magnitude and opposite in direction.",
                    "formula": "F_AB = -F_BA"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Contact & Frictional Forces",
                "badge": "Surface Interactions",
                "subconcepts": [
                  {
                    "name": "Normal Reaction Force",
                    "tag": "Perpendicular",
                    "desc": "Electromagnetic repulsion from surface atoms resisting penetration.",
                    "formula": "N = mg cos\u03b8 (plane)"
                  },
                  {
                    "name": "Static Friction",
                    "tag": "Threshold",
                    "desc": "Opposes initiation of relative sliding motion up to a maximum limit.",
                    "formula": "f_s \u2264 \u03bc_s N"
                  },
                  {
                    "name": "Dynamic/Kinetic Friction",
                    "tag": "Sliding",
                    "desc": "Resistive force during continuous relative sliding.",
                    "formula": "f_k = \u03bc_k N"
                  },
                  {
                    "name": "Fluid Drag & Terminal Velocity",
                    "tag": "Aerodynamics",
                    "desc": "Speed where gravitational pull balances fluid drag force.",
                    "formula": "v_term = \u221a(2mg / (\u03c1 A C_d))"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Free-Body Diagrams & Statics",
                "badge": "Vector Statics",
                "subconcepts": [
                  {
                    "name": "Vector Force Resolution",
                    "tag": "Components",
                    "desc": "Decomposing all forces into orthogonal axes to test translational equilibrium.",
                    "formula": "\u03a3F_x = 0, \u03a3F_y = 0"
                  },
                  {
                    "name": "Inclined Plane Dynamics",
                    "tag": "Incline",
                    "desc": "Gravity components parallel (mg sin\u03b8) and perpendicular (mg cos\u03b8) to slope.",
                    "formula": "a = g(sin\u03b8 - \u03bc_k cos\u03b8)"
                  },
                  {
                    "name": "Tension in Cables & Pulleys",
                    "tag": "Constraints",
                    "desc": "Uniform tension along massless strings over frictionless pivots.",
                    "formula": "T - mg = ma"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-3",
          "title": "Work, energy and power",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "square",
          "desc": "Work transfers energy from one system to another. The principle of conservation of energy states that energy cannot be created or destroyed, only transformed.",
          "mindMap": {
            "core": "Mechanics of work, conservative versus non-conservative forces, and energy transformation rates.",
            "color": "#f59e0b",
            "branches": [
              {
                "id": "b1",
                "title": "Work Done by Forces",
                "badge": "Mechanical Transfer",
                "subconcepts": [
                  {
                    "name": "Constant Force Work",
                    "tag": "Dot Product",
                    "desc": "Scalar product of force vector and displacement vector.",
                    "formula": "W = F \u00b7 d = F d cos\u03b8"
                  },
                  {
                    "name": "Variable Force Integration",
                    "tag": "Calculus",
                    "desc": "Area under the force-displacement curve represents total work.",
                    "formula": "W = \u222b F(x) dx"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Mechanical Energy Forms",
                "badge": "Kinetic & Potential",
                "subconcepts": [
                  {
                    "name": "Translational Kinetic Energy",
                    "tag": "Motion",
                    "desc": "Energy possessed by virtue of translational velocity.",
                    "formula": "E_k = \u00bd m v\u00b2"
                  },
                  {
                    "name": "Gravitational Potential Energy",
                    "tag": "Field",
                    "desc": "Work done against gravity within a uniform field.",
                    "formula": "E_p = m g h"
                  },
                  {
                    "name": "Elastic Strain Energy",
                    "tag": "Hooke",
                    "desc": "Work stored in compressing or extending a linear spring.",
                    "formula": "E_el = \u00bd k (\u0394x)\u00b2"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Conservation & Work-Energy Theorem",
                "badge": "Conservation",
                "subconcepts": [
                  {
                    "name": "Work-Energy Theorem",
                    "tag": "Net Work",
                    "desc": "Net work done by all forces equals the change in kinetic energy.",
                    "formula": "W_net = \u0394E_k = \u00bdmv\u00b2 - \u00bdmu\u00b2"
                  },
                  {
                    "name": "Conservation of Mechanical Energy",
                    "tag": "Isolated",
                    "desc": "In the absence of dissipative friction, total mechanical energy remains constant.",
                    "formula": "E_k1 + E_p1 = E_k2 + E_p2"
                  },
                  {
                    "name": "Dissipative Thermal Losses",
                    "tag": "Non-conservative",
                    "desc": "Mechanical energy degraded into microscopic thermal entropy.",
                    "formula": "\u0394E_mech = -f_k \u00b7 d"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Power & Efficiency",
                "badge": "Rate of Transfer",
                "subconcepts": [
                  {
                    "name": "Instantaneous Power",
                    "tag": "Rate",
                    "desc": "Rate of work done per unit time; also force times velocity.",
                    "formula": "P = dW/dt = F \u00b7 v"
                  },
                  {
                    "name": "System Efficiency",
                    "tag": "Performance",
                    "desc": "Ratio of useful energy output to total energy input.",
                    "formula": "\u03b7 = (P_out / P_in) \u00d7 100%"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-4",
          "title": "Linear momentum",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "circle",
          "desc": "Linear momentum is a vector quantity p = mv. For isolated systems, total momentum is strictly conserved across all collisions and explosions.",
          "mindMap": {
            "core": "Momentum conservation, impulse dynamics, and collision classifications in isolated systems.",
            "color": "#ec4899",
            "branches": [
              {
                "id": "b1",
                "title": "Momentum & Impulse",
                "badge": "Dynamics",
                "subconcepts": [
                  {
                    "name": "Linear Momentum Vector",
                    "tag": "Quantity of Motion",
                    "desc": "Vector quantity in the direction of velocity.",
                    "formula": "p = m v"
                  },
                  {
                    "name": "Impulse-Momentum Theorem",
                    "tag": "Force-Time",
                    "desc": "Area under force-time graph equals the momentum change.",
                    "formula": "J = \u222b F dt = \u0394p"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Conservation of Linear Momentum",
                "badge": "Invariance",
                "subconcepts": [
                  {
                    "name": "Isolated System Principle",
                    "tag": "No Ext Force",
                    "desc": "When net external force is zero, total momentum is strictly conserved.",
                    "formula": "\u03a3F_ext = 0 \u21d2 \u03a3p_initial = \u03a3p_final"
                  },
                  {
                    "name": "Recoil & Propulsion",
                    "tag": "Thrust",
                    "desc": "Explosions and rocket propulsion conserve net momentum starting from rest.",
                    "formula": "m_1 v_1 + m_2 v_2 = 0"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Collision Classifications",
                "badge": "Energetics",
                "subconcepts": [
                  {
                    "name": "Elastic Collisions",
                    "tag": "Kinetic Conserved",
                    "desc": "Both total momentum and total kinetic energy are conserved.",
                    "formula": "\u0394E_k = 0, e = 1"
                  },
                  {
                    "name": "Inelastic Collisions",
                    "tag": "Energy Dissipated",
                    "desc": "Kinetic energy converts to heat/sound/deformation.",
                    "formula": "\u0394E_k < 0, 0 < e < 1"
                  },
                  {
                    "name": "Completely Inelastic",
                    "tag": "Coalescence",
                    "desc": "Bodies stick together moving with common final velocity.",
                    "formula": "v_f = (m_1 u_1 + m_2 u_2) / (m_1 + m_2)"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "2D Collisions & Vector Resolution",
                "badge": "Planar Vectors",
                "subconcepts": [
                  {
                    "name": "Component Conservation",
                    "tag": "x & y Axes",
                    "desc": "Momentum is conserved independently along both x and y directions.",
                    "formula": "\u03a3p_ix = \u03a3p_fx, \u03a3p_iy = \u03a3p_fy"
                  },
                  {
                    "name": "Glancing Scattering",
                    "tag": "Angles",
                    "desc": "Analyzing billiard and particle scattering with trigonometry.",
                    "formula": "m_1 u_1 = m_1 v_1 cos\u03b8_1 + m_2 v_2 cos\u03b8_2"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-5",
          "title": "Rigid body mechanics",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "orbit",
          "desc": "Rotational dynamics extends translational mechanics to extended bodies using torque, rotational inertia (moment of inertia), and conserved angular momentum.",
          "mindMap": {
            "core": "Rotational kinematics, torque, moment of inertia, and angular momentum conservation.",
            "color": "#0284c7",
            "branches": [
              {
                "id": "b1",
                "title": "Rotational Kinematics",
                "badge": "Angular Motion",
                "subconcepts": [
                  {
                    "name": "Angular Variables",
                    "tag": "Radians",
                    "desc": "Angular displacement \u03b8, velocity \u03c9, and acceleration \u03b1.",
                    "formula": "\u03c9 = d\u03b8/dt, \u03b1 = d\u03c9/dt"
                  },
                  {
                    "name": "Linear-Angular Links",
                    "tag": "Radius",
                    "desc": "Coupling between arc length, tangential velocity, and angular rate.",
                    "formula": "s = r\u03b8, v_t = r\u03c9, a_t = r\u03b1"
                  },
                  {
                    "name": "Centripetal Acceleration",
                    "tag": "Radial",
                    "desc": "Inward acceleration maintaining circular motion.",
                    "formula": "a_c = v\u00b2/r = \u03c9\u00b2r"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Torque & Moment of Inertia",
                "badge": "Rotational Inertia",
                "subconcepts": [
                  {
                    "name": "Torque Vector",
                    "tag": "Moment of Force",
                    "desc": "Rotational turning effect about an axle.",
                    "formula": "\u03c4 = r \u00d7 F = r F sin\u03b8"
                  },
                  {
                    "name": "Moment of Inertia",
                    "tag": "Mass Distribution",
                    "desc": "Resistance of rigid body to rotational acceleration.",
                    "formula": "I = \u03a3 m_i r_i\u00b2 = \u222b r\u00b2 dm"
                  },
                  {
                    "name": "Newton's 2nd Law for Rotation",
                    "tag": "\u03c4 = I\u03b1",
                    "desc": "Net torque equals moment of inertia times angular acceleration.",
                    "formula": "\u03a3\u03c4 = I \u03b1"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Rotational Energy & Momentum",
                "badge": "Conservation",
                "subconcepts": [
                  {
                    "name": "Rotational Kinetic Energy",
                    "tag": "Rolling",
                    "desc": "Kinetic energy stored in spinning mass.",
                    "formula": "E_rot = \u00bd I \u03c9\u00b2"
                  },
                  {
                    "name": "Rolling Without Slipping",
                    "tag": "Combined Motion",
                    "desc": "Simultaneous translation and rotation.",
                    "formula": "E_tot = \u00bdmv\u00b2 + \u00bdI\u03c9\u00b2"
                  },
                  {
                    "name": "Angular Momentum Conservation",
                    "tag": "Spin",
                    "desc": "Total angular momentum is conserved when net external torque is zero.",
                    "formula": "L = I \u03c9 = const (when \u03a3\u03c4_ext = 0)"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-6",
          "title": "Relativity",
          "badge": null,
          "gradient": "linear-gradient(135deg, #8b5cf6, #3b82f6)",
          "iconType": "sine",
          "desc": "Special relativity reshapes our fundamental concepts of space and time. Light's speed c is invariant in all inertial frames, leading to time dilation, length contraction, and mass-energy equivalence E=mc\u00b2.",
          "mindMap": {
            "core": "Special relativity postulates, spacetime coordinates, time dilation, and relativistic mass-energy.",
            "color": "#9333ea",
            "branches": [
              {
                "id": "b1",
                "title": "Einstein's Postulates",
                "badge": "Foundations",
                "subconcepts": [
                  {
                    "name": "Principle of Relativity",
                    "tag": "Postulate 1",
                    "desc": "The laws of physics are identical in all inertial reference frames.",
                    "formula": "Frames S and S' equivalent"
                  },
                  {
                    "name": "Invariance of c",
                    "tag": "Postulate 2",
                    "desc": "The speed of light in vacuum is constant for all observers regardless of motion.",
                    "formula": "c = 2.998 \u00d7 10\u2078 m/s"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Relativistic Kinematics",
                "badge": "Lorentz Transformation",
                "subconcepts": [
                  {
                    "name": "Lorentz Factor",
                    "tag": "Scaling",
                    "desc": "Relativistic dilation multiplier approaching infinity as v \u2192 c.",
                    "formula": "\u03b3 = 1 / \u221a(1 - v\u00b2/c\u00b2)"
                  },
                  {
                    "name": "Time Dilation",
                    "tag": "Moving Clocks",
                    "desc": "Clocks moving relative to an observer run slower.",
                    "formula": "\u0394t = \u03b3 \u0394t\u2080"
                  },
                  {
                    "name": "Length Contraction",
                    "tag": "Moving Rods",
                    "desc": "Spatial length contracts along the direction of motion.",
                    "formula": "L = L\u2080 / \u03b3"
                  },
                  {
                    "name": "Relativity of Simultaneity",
                    "tag": "Events",
                    "desc": "Events simultaneous in one frame are not simultaneous in another.",
                    "formula": "\u0394t' = \u03b3(\u0394t - v\u0394x/c\u00b2)"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Relativistic Dynamics & Energy",
                "badge": "Mass-Energy",
                "subconcepts": [
                  {
                    "name": "Relativistic Momentum",
                    "tag": "p = \u03b3mv",
                    "desc": "Momentum grows unbounded preventing massive bodies from reaching c.",
                    "formula": "p = \u03b3 m v"
                  },
                  {
                    "name": "Rest Energy Equivalence",
                    "tag": "E = mc\u00b2",
                    "desc": "Inherent mass contains equivalent latent energy.",
                    "formula": "E\u2080 = m c\u00b2"
                  },
                  {
                    "name": "Total Energy-Momentum Invariant",
                    "tag": "Invariant",
                    "desc": "Relates total energy, momentum, and rest mass.",
                    "formula": "E\u00b2 = (pc)\u00b2 + (mc\u00b2)\u00b2"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "id": "path-physics-unit-b",
      "title": "The Particulate Nature of Matter",
      "category": "Science",
      "subtitle": "Thermal Transfers, Greenhouse Effect, Gas Laws, Thermodynamics, and Circuits",
      "badge": null,
      "icon": "thermal",
      "color": "#f59e0b",
      "accent": "#ef4444",
      "courses": [
        {
          "id": "ch-7",
          "title": "Thermal energy transfers",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "triangle",
          "desc": "Temperature is a measure of the average random translational kinetic energy of molecules. Phase changes occur at constant temperature as latent heat alters intermolecular potential energies.",
          "mindMap": {
            "core": "Microscopic thermal agitation, internal energy, heat capacities, and conduction/convection/radiation.",
            "color": "#ef4444",
            "branches": [
              {
                "id": "b1",
                "title": "Temperature & Internal Energy",
                "badge": "Thermal Equilibrium",
                "subconcepts": [
                  {
                    "name": "Internal Energy U",
                    "tag": "Microscopic",
                    "desc": "Sum of random microscopic kinetic and inter-molecular potential energies.",
                    "formula": "U = E_k,micro + E_p,micro"
                  },
                  {
                    "name": "Kelvin Temperature Scale",
                    "tag": "Absolute Zero",
                    "desc": "Proportional to average translational kinetic energy per particle.",
                    "formula": "T(K) = \u03b8(\u00b0C) + 273.15"
                  },
                  {
                    "name": "Zeroth Law of Thermodynamics",
                    "tag": "Equilibrium",
                    "desc": "Defines temperature equality and thermal equilibrium.",
                    "formula": "T_A = T_B, T_B = T_C \u21d2 T_A = T_C"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Heat Transport Mechanisms",
                "badge": "Thermal Flux",
                "subconcepts": [
                  {
                    "name": "Thermal Conduction",
                    "tag": "Fourier",
                    "desc": "Energy transfer via atomic lattice vibrations and free electrons.",
                    "formula": "Q/t = k A \u0394T / L"
                  },
                  {
                    "name": "Convection",
                    "tag": "Fluids",
                    "desc": "Bulk fluid circulation driven by thermal density changes under gravity.",
                    "formula": "Buoyancy: \u03c1_hot < \u03c1_cold"
                  },
                  {
                    "name": "Thermal Radiation",
                    "tag": "EM Waves",
                    "desc": "Electromagnetic blackbody emission needing no intervening medium.",
                    "formula": "P = e \u03c3 A T\u2074"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Heat Capacities & Latent Heats",
                "badge": "Calorimetry",
                "subconcepts": [
                  {
                    "name": "Specific Heat Capacity c",
                    "tag": "Sensible Heat",
                    "desc": "Energy required to raise 1 kg of a substance by 1 Kelvin.",
                    "formula": "Q = m c \u0394T"
                  },
                  {
                    "name": "Specific Latent Heat L",
                    "tag": "Phase Change",
                    "desc": "Energy to change phase of 1 kg at constant temperature.",
                    "formula": "Q = m L_f (fusion), Q = m L_v (vap)"
                  },
                  {
                    "name": "Calorimetry Conservation",
                    "tag": "Exchange",
                    "desc": "In an insulated calorimeter, heat lost equals heat gained.",
                    "formula": "\u03a3Q_lost = \u03a3Q_gained"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-8",
          "title": "The greenhouse effect",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "circle",
          "desc": "The Earth maintains thermal equilibrium by radiating absorbed solar shortwave radiation back into space as longwave infrared radiation, partially trapped by greenhouse gases.",
          "mindMap": {
            "core": "Radiative equilibrium, Stefan-Boltzmann law, planetary albedo, and atmospheric infrared trapping.",
            "color": "#10b981",
            "branches": [
              {
                "id": "b1",
                "title": "Solar Radiation & Blackbody Laws",
                "badge": "Radiant Energy",
                "subconcepts": [
                  {
                    "name": "Solar Constant",
                    "tag": "Flux",
                    "desc": "Solar radiant energy incident per second on 1 m\u00b2 at Earth's distance.",
                    "formula": "S \u2248 1361 W/m\u00b2"
                  },
                  {
                    "name": "Stefan-Boltzmann Law",
                    "tag": "Total Emission",
                    "desc": "Total emissive power proportional to fourth power of absolute temperature.",
                    "formula": "P = \u03c3 A T\u2074 (\u03c3 = 5.67\u00d710\u207b\u2078)"
                  },
                  {
                    "name": "Wien's Displacement Law",
                    "tag": "Peak Wavelength",
                    "desc": "Peak emission wavelength inversely proportional to temperature.",
                    "formula": "\u03bb_max T = 2.898 \u00d7 10\u207b\u00b3 m\u00b7K"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Planetary Energy Balance",
                "badge": "Equilibrium",
                "subconcepts": [
                  {
                    "name": "Planetary Albedo \u03b1",
                    "tag": "Reflection",
                    "desc": "Fraction of incident solar light reflected directly back to space.",
                    "formula": "\u03b1 \u2248 0.30 (Earth average)"
                  },
                  {
                    "name": "Effective Radiative Temp",
                    "tag": "No-Atmosphere",
                    "desc": "Equilibrium temperature of Earth radiating as a naked blackbody.",
                    "formula": "T_eff = [(1-\u03b1)S / (4\u03c3)]^(1/4) \u2248 255 K"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Greenhouse Gas Mechanism",
                "badge": "Infrared Trapping",
                "subconcepts": [
                  {
                    "name": "Shortwave vs Longwave",
                    "tag": "Spectral Shift",
                    "desc": "Atmosphere is transparent to visible solar light but opaque to terrestrial IR.",
                    "formula": "\u03bb_solar ~ 0.5 \u03bcm, \u03bb_earth ~ 10 \u03bcm"
                  },
                  {
                    "name": "Resonant Molecular Absorption",
                    "tag": "Vibrational Modes",
                    "desc": "Dipole oscillations in CO\u2082, H\u2082O, CH\u2084 absorb and re-emit infrared rays in all directions.",
                    "formula": "Downward re-emission warms surface"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-9",
          "title": "The gas laws",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "cube",
          "desc": "The kinetic theory of gases models gas pressure as the macroscopic outcome of trillions of elastic molecular collisions against container walls, directly linking pV to average kinetic energy.",
          "mindMap": {
            "core": "Microscopic molecular collisions, kinetic theory of gases, and ideal macroscopic state equations.",
            "color": "#14b8a6",
            "branches": [
              {
                "id": "b1",
                "title": "Empirical Gas Laws",
                "badge": "PVT Relations",
                "subconcepts": [
                  {
                    "name": "Boyle's Law",
                    "tag": "Isothermal",
                    "desc": "Pressure varies inversely with volume at constant temperature.",
                    "formula": "P \u221d 1/V (PV = const)"
                  },
                  {
                    "name": "Charles's Law",
                    "tag": "Isobaric",
                    "desc": "Volume varies directly with absolute temperature at constant pressure.",
                    "formula": "V \u221d T (V/T = const)"
                  },
                  {
                    "name": "Gay-Lussac's Law",
                    "tag": "Isochoric",
                    "desc": "Pressure varies directly with absolute temperature at constant volume.",
                    "formula": "P \u221d T (P/T = const)"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Ideal Gas State Equation",
                "badge": "State Equation",
                "subconcepts": [
                  {
                    "name": "Molar Formulation",
                    "tag": "PV = nRT",
                    "desc": "Relates pressure, volume, moles, and absolute temperature.",
                    "formula": "P V = n R T (R = 8.314 J/(mol\u00b7K))"
                  },
                  {
                    "name": "Molecular Formulation",
                    "tag": "PV = N k_B T",
                    "desc": "Written in terms of total molecule count and Boltzmann's constant.",
                    "formula": "P V = N k_B T (k_B = R/N_A)"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Kinetic Molecular Theory",
                "badge": "Microscopic Foundation",
                "subconcepts": [
                  {
                    "name": "Pressure from Collisions",
                    "tag": "Momentum Transfer",
                    "desc": "Macroscopic pressure emerges from molecular elastic momentum changes.",
                    "formula": "P = \u2153 \u03c1 \u27e8v\u00b2\u27e9 = \u2153 (Nm/V) \u27e8v\u00b2\u27e9"
                  },
                  {
                    "name": "Average Kinetic Energy",
                    "tag": "Temperature Measure",
                    "desc": "Mean translational kinetic energy depends solely on absolute temperature.",
                    "formula": "\u27e8E_k\u27e9 = 3/2 k_B T"
                  },
                  {
                    "name": "Root-Mean-Square Speed",
                    "tag": "v_rms",
                    "desc": "Effective average speed of gas molecules in thermal equilibrium.",
                    "formula": "v_rms = \u221a(3 k_B T / m) = \u221a(3 R T / M)"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-10",
          "title": "Thermodynamics",
          "badge": null,
          "gradient": "linear-gradient(135deg, #f59e0b, #ef4444)",
          "iconType": "square",
          "desc": "Thermodynamics governs heat engines and energy conversion. The First Law states energy conservation \u0394U = Q - W, while the Second Law dictates that total entropy of isolated systems always increases.",
          "mindMap": {
            "core": "First and second laws of thermodynamics, cyclic heat engines, Carnot efficiency, and entropy.",
            "color": "#f97316",
            "branches": [
              {
                "id": "b1",
                "title": "First Law & Boundary Work",
                "badge": "Energy Conservation",
                "subconcepts": [
                  {
                    "name": "First Law of Thermodynamics",
                    "tag": "\u0394U = Q - W",
                    "desc": "Change in internal energy equals heat added minus work done by the system.",
                    "formula": "\u0394U = Q - W"
                  },
                  {
                    "name": "Boundary Expansion Work",
                    "tag": "P-V Area",
                    "desc": "Work performed during volume expansion against external pressure.",
                    "formula": "W = \u222b P dV"
                  },
                  {
                    "name": "Monatomic Internal Energy",
                    "tag": "U(T)",
                    "desc": "Internal energy is purely a function of absolute temperature.",
                    "formula": "U = 3/2 n R T"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Thermodynamic State Processes",
                "badge": "P-V Paths",
                "subconcepts": [
                  {
                    "name": "Isothermal Process",
                    "tag": "\u0394T = 0",
                    "desc": "Constant temperature: \u0394U = 0, work equals heat input.",
                    "formula": "W = n R T ln(V_f / V_i), Q = W"
                  },
                  {
                    "name": "Isobaric Process",
                    "tag": "\u0394P = 0",
                    "desc": "Constant pressure expansion: work is rectangular area P\u0394V.",
                    "formula": "W = P \u0394V"
                  },
                  {
                    "name": "Isochoric Process",
                    "tag": "\u0394V = 0",
                    "desc": "Constant volume: zero work done, all heat goes to internal energy.",
                    "formula": "W = 0, Q = \u0394U"
                  },
                  {
                    "name": "Adiabatic Process",
                    "tag": "Q = 0",
                    "desc": "No heat exchange; expansion cools the gas at the expense of internal energy.",
                    "formula": "P V^\u03b3 = const, W = -\u0394U"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Heat Engines & Carnot Cycle",
                "badge": "Efficiency Limit",
                "subconcepts": [
                  {
                    "name": "Thermal Engine Cycle",
                    "tag": "P-V Loop",
                    "desc": "Enclosed loop area on P-V diagram equals net work produced per cycle.",
                    "formula": "W_net = Q_H - Q_C"
                  },
                  {
                    "name": "Thermal Efficiency",
                    "tag": "Output / Input",
                    "desc": "Fraction of absorbed high-temperature heat converted into work.",
                    "formula": "\u03b7 = W_net / Q_H = 1 - Q_C / Q_H"
                  },
                  {
                    "name": "Carnot Limit",
                    "tag": "Reversible Upper Bound",
                    "desc": "Maximum theoretical efficiency attainable between two thermal reservoirs.",
                    "formula": "\u03b7_Carnot = 1 - T_C / T_H"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Second Law & Entropy",
                "badge": "Arrow of Time",
                "subconcepts": [
                  {
                    "name": "Entropy Formulation",
                    "tag": "Clausius",
                    "desc": "Measure of molecular disorder and irreversible energy degradation.",
                    "formula": "\u0394S = \u222b dQ_rev / T"
                  },
                  {
                    "name": "Universal Entropy Increase",
                    "tag": "2nd Law",
                    "desc": "Total entropy of an isolated system never decreases over time.",
                    "formula": "\u0394S_universe \u2265 0"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-11",
          "title": "Current and circuits",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "chip",
          "desc": "Electric circuits transport electrical energy via moving electrons. Ohm's law, Kirchhoff's laws, internal resistance, and potential dividers form the foundation for electronic circuit analysis.",
          "mindMap": {
            "core": "Electric charge transport, Ohm's law, Kirchhoff's network rules, and circuit power distribution.",
            "color": "#3b82f6",
            "branches": [
              {
                "id": "b1",
                "title": "Current, Potential & Resistance",
                "badge": "Ohmic Fundamentals",
                "subconcepts": [
                  {
                    "name": "Electric Current",
                    "tag": "Charge Flow",
                    "desc": "Net rate of charge passage across conductor cross-section.",
                    "formula": "I = \u0394q / \u0394t"
                  },
                  {
                    "name": "Drift Velocity",
                    "tag": "Microscopic Drift",
                    "desc": "Slow average net drift speed of charge carriers in an electric field.",
                    "formula": "I = n A v_d q"
                  },
                  {
                    "name": "Ohm's Law & Resistance",
                    "tag": "V = IR",
                    "desc": "Current is proportional to potential difference across ohmic conductors.",
                    "formula": "R = V / I"
                  },
                  {
                    "name": "Resistivity Formula",
                    "tag": "Geometry & Material",
                    "desc": "Resistance scales with length and inversely with cross-sectional area.",
                    "formula": "R = \u03c1 L / A"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Kirchhoff's Network Laws",
                "badge": "Conservation Laws",
                "subconcepts": [
                  {
                    "name": "Junction Rule (KCL)",
                    "tag": "Charge Conservation",
                    "desc": "Total current entering any junction must equal total current leaving.",
                    "formula": "\u03a3I_in = \u03a3I_out"
                  },
                  {
                    "name": "Loop Rule (KVL)",
                    "tag": "Energy Conservation",
                    "desc": "Sum of all potential differences and EMFs around any closed loop is zero.",
                    "formula": "\u03a3\u2130 = \u03a3(I R)"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Resistor Networks & Dividers",
                "badge": "Circuits",
                "subconcepts": [
                  {
                    "name": "Series Combination",
                    "tag": "Same Current",
                    "desc": "Resistances add linearly; total resistance increases.",
                    "formula": "R_eq = R\u2081 + R\u2082 + R\u2083"
                  },
                  {
                    "name": "Parallel Combination",
                    "tag": "Same Voltage",
                    "desc": "Reciprocals add; total equivalent resistance is lower than the lowest branch.",
                    "formula": "1/R_eq = 1/R\u2081 + 1/R\u2082"
                  },
                  {
                    "name": "Potential Divider",
                    "tag": "Voltage Scaling",
                    "desc": "Splits input voltage proportional to resistance for sensors and taps.",
                    "formula": "V_out = V_in \u00b7 [R\u2082 / (R\u2081 + R\u2082)]"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "EMF, Internal Resistance & Power",
                "badge": "Real Sources",
                "subconcepts": [
                  {
                    "name": "Terminal Potential Difference",
                    "tag": "Internal Drop",
                    "desc": "Terminal voltage drops under load due to internal cell resistance r.",
                    "formula": "V_terminal = \u2130 - I r"
                  },
                  {
                    "name": "Joule Heating Power",
                    "tag": "Dissipation",
                    "desc": "Rate of electrical energy conversion into heat.",
                    "formula": "P = I V = I\u00b2 R = V\u00b2 / R"
                  },
                  {
                    "name": "Maximum Power Transfer",
                    "tag": "Load Matching",
                    "desc": "Power delivered to load is maximized when load resistance equals internal resistance.",
                    "formula": "P_max when R_load = r"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "id": "path-physics-unit-c",
      "title": "Wave Behaviour",
      "category": "Science",
      "subtitle": "Simple Harmonic Motion, Wave Model, Superposition, Standing Waves, Doppler",
      "badge": null,
      "icon": "waves",
      "color": "#10b981",
      "accent": "#38bdf8",
      "courses": [
        {
          "id": "ch-12",
          "title": "Simple harmonic motion",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "sine",
          "desc": "SHM occurs whenever a restoring force proportional to displacement pulls an oscillator toward equilibrium. Total energy remains constant as energy shifts back and forth between kinetic and potential forms.",
          "mindMap": {
            "core": "Simple harmonic motion dynamics, restorative force kinematics, and resonant systems.",
            "color": "#06b6d4",
            "branches": [
              {
                "id": "b1",
                "title": "Defining Conditions of SHM",
                "badge": "Linear Restoring",
                "subconcepts": [
                  {
                    "name": "Defining Equation",
                    "tag": "a = -\u03c9\u00b2x",
                    "desc": "Acceleration is directly proportional and opposite to displacement from equilibrium.",
                    "formula": "a = -\u03c9\u00b2 x"
                  },
                  {
                    "name": "Angular Frequency",
                    "tag": "Cycles",
                    "desc": "Rate of phase rotation related to period and frequency.",
                    "formula": "\u03c9 = 2\u03c0f = 2\u03c0 / T"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Kinematic Solutions of SHM",
                "badge": "Harmonic Functions",
                "subconcepts": [
                  {
                    "name": "Displacement Function",
                    "tag": "Cosine",
                    "desc": "Sinusoidal oscillation about equilibrium center.",
                    "formula": "x(t) = A cos(\u03c9t)"
                  },
                  {
                    "name": "Velocity Function",
                    "tag": "Phase Shift \u03c0/2",
                    "desc": "Derivative of displacement; leads displacement by 90\u00b0.",
                    "formula": "v(t) = \u00b1\u03c9 \u221a(A\u00b2 - x\u00b2)"
                  },
                  {
                    "name": "Peak Kinematic Values",
                    "tag": "Extrema",
                    "desc": "Maximum speed occurs at center; maximum acceleration at endpoints.",
                    "formula": "v_max = \u03c9 A, a_max = \u03c9\u00b2 A"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Classic Harmonic Oscillators",
                "badge": "Physical Systems",
                "subconcepts": [
                  {
                    "name": "Mass-Spring System",
                    "tag": "Inertia vs Stiffness",
                    "desc": "Period depends only on oscillating mass and spring constant k.",
                    "formula": "T = 2\u03c0 \u221a(m / k)"
                  },
                  {
                    "name": "Simple Gravity Pendulum",
                    "tag": "Small Angles",
                    "desc": "Period depends only on length and local gravitational acceleration.",
                    "formula": "T = 2\u03c0 \u221a(L / g)"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Energy Interchange & Resonance",
                "badge": "Energetics",
                "subconcepts": [
                  {
                    "name": "Total Energy Conservation",
                    "tag": "E = Ek + Ep",
                    "desc": "Continuous lossless interchange between kinetic and elastic/gravitational potential energy.",
                    "formula": "E_total = \u00bd m \u03c9\u00b2 A\u00b2 = \u00bd k A\u00b2"
                  },
                  {
                    "name": "Damped Oscillations",
                    "tag": "Energy Dissipation",
                    "desc": "Frictional resistance decreases amplitude over time (light, critical, overdamped).",
                    "formula": "A(t) = A\u2080 e^(-\u03b3t)"
                  },
                  {
                    "name": "Resonance Phenomenon",
                    "tag": "Driving Frequency",
                    "desc": "Dramatic surge in amplitude when driving frequency matches natural resonant frequency.",
                    "formula": "f_drive \u2248 f_natural \u21d2 Max Amplitude"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-13",
          "title": "The wave model",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "sine",
          "desc": "Waves transmit energy through space without permanently displacing matter. Transverse waves (including light) oscillate perpendicular to travel and can be polarised; longitudinal waves oscillate parallel.",
          "mindMap": {
            "core": "Mechanics of wave energy propagation, transverse/longitudinal modes, and inverse-square intensity.",
            "color": "#0ea5e9",
            "branches": [
              {
                "id": "b1",
                "title": "Wave Propagation Fundamentals",
                "badge": "Disturbance Transfer",
                "subconcepts": [
                  {
                    "name": "Energy Without Mass Transfer",
                    "tag": "Propagation",
                    "desc": "Disturbance carries energy and momentum through a medium while particles oscillate locally.",
                    "formula": "Net particle displacement = 0"
                  },
                  {
                    "name": "Universal Wave Equation",
                    "tag": "v = f\u03bb",
                    "desc": "Speed equals frequency multiplied by spatial wavelength.",
                    "formula": "v = f \u03bb = \u03bb / T"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Transverse vs Longitudinal Modes",
                "badge": "Polarity",
                "subconcepts": [
                  {
                    "name": "Transverse Waves",
                    "tag": "Perpendicular",
                    "desc": "Particle oscillations are perpendicular to energy propagation (e.g. Light, S-waves).",
                    "formula": "Can be polarized"
                  },
                  {
                    "name": "Longitudinal Waves",
                    "tag": "Parallel",
                    "desc": "Oscillations parallel to wave motion creating compressions and rarefactions (e.g. Sound, P-waves).",
                    "formula": "Cannot be polarized"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Wavefronts, Rays & Phase",
                "badge": "Spatial Geometry",
                "subconcepts": [
                  {
                    "name": "Wavefront Geometry",
                    "tag": "Surfaces",
                    "desc": "Locus of points oscillating with identical phase; rays are perpendicular to wavefronts.",
                    "formula": "Ray \u22a5 Wavefront"
                  },
                  {
                    "name": "Phase Difference",
                    "tag": "Cycle Fraction",
                    "desc": "Angular phase lead/lag between two points separated by distance \u0394x.",
                    "formula": "\u0394\u03d5 = (2\u03c0 / \u03bb) \u0394x"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Wave Power & Intensity",
                "badge": "Inverse Square",
                "subconcepts": [
                  {
                    "name": "Wave Intensity Definition",
                    "tag": "Power Density",
                    "desc": "Power incident perpendicularly per unit surface area.",
                    "formula": "I = P / A"
                  },
                  {
                    "name": "Inverse-Square Falloff",
                    "tag": "Spherical Radiation",
                    "desc": "Intensity drops with squared distance from an isotropic point source.",
                    "formula": "I \u221d 1 / r\u00b2 (A = 4\u03c0r\u00b2)"
                  },
                  {
                    "name": "Amplitude Relation",
                    "tag": "I \u221d A\u00b2",
                    "desc": "Wave energy density scales with the square of wave amplitude.",
                    "formula": "I \u221d A\u00b2"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-14",
          "title": "Wave phenomena",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "triangle",
          "desc": "When waves encounter obstacles or overlap, they exhibit refraction, total internal reflection, diffraction, and interference patterns, proving light's wave nature.",
          "mindMap": {
            "core": "Classical wave boundary phenomena: reflection, refraction, single/double slit diffraction, and polarization.",
            "color": "#8b5cf6",
            "branches": [
              {
                "id": "b1",
                "title": "Reflection & Refraction",
                "badge": "Boundary Laws",
                "subconcepts": [
                  {
                    "name": "Law of Reflection",
                    "tag": "Specular",
                    "desc": "Angle of incidence equals angle of reflection measured from surface normal.",
                    "formula": "\u03b8_i = \u03b8_r"
                  },
                  {
                    "name": "Snell's Law of Refraction",
                    "tag": "Optical Density",
                    "desc": "Wave bending at interface caused by change in propagation speed.",
                    "formula": "n\u2081 sin\u03b8\u2081 = n\u2082 sin\u03b8\u2082 (n = c/v)"
                  },
                  {
                    "name": "Total Internal Reflection",
                    "tag": "Critical Angle",
                    "desc": "Light trapped in dense medium when incident angle exceeds critical angle.",
                    "formula": "sin\u03b8_c = n\u2082 / n\u2081 (n\u2081 > n\u2082)"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Diffraction Effects",
                "badge": "Wave Bending",
                "subconcepts": [
                  {
                    "name": "Huygens' Principle",
                    "tag": "Secondary Wavelets",
                    "desc": "Every point on a wavefront acts as a source of spherical secondary wavelets.",
                    "formula": "Diffraction greatest when \u03bb ~ slit width b"
                  },
                  {
                    "name": "Single Slit Diffraction Minimum",
                    "tag": "First Dark Fringe",
                    "desc": "Angular position of first diffraction intensity zero.",
                    "formula": "\u03b8 = \u03bb / b"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Interference & Superposition",
                "badge": "Double Slit",
                "subconcepts": [
                  {
                    "name": "Linear Superposition",
                    "tag": "Summation",
                    "desc": "Net wave displacement equals the algebraic sum of individual component displacements.",
                    "formula": "y_net = y\u2081 + y\u2082"
                  },
                  {
                    "name": "Young's Double Slit Fringes",
                    "tag": "Interference",
                    "desc": "Fringe spacing produced by two coherent sources separated by distance d.",
                    "formula": "s = \u03bb D / d"
                  },
                  {
                    "name": "Diffraction Gratings",
                    "tag": "Sharp Maxima",
                    "desc": "Thousands of parallel slits creating crisp spectral lines.",
                    "formula": "d sin\u03b8 = n \u03bb"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Polarization",
                "badge": "Transverse Vector",
                "subconcepts": [
                  {
                    "name": "Malus's Law",
                    "tag": "Polaroid Analyzer",
                    "desc": "Transmitted intensity of polarized light through an analyzer oriented at angle \u03b8.",
                    "formula": "I = I\u2080 cos\u00b2\u03b8"
                  },
                  {
                    "name": "Brewster's Angle",
                    "tag": "Complete Polarization",
                    "desc": "Angle where reflected light is 100% linearly polarized.",
                    "formula": "tan\u03b8_B = n\u2082 / n\u2081"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-15",
          "title": "Standing waves and resonance",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "sine",
          "desc": "Standing waves trap energy between boundaries, forming static nodes (zero displacement) and antinodes (maximum displacement). Resonance occurs when driving frequency matches natural frequency.",
          "mindMap": {
            "core": "Standing waves, boundary condition quantization, nodes/antinodes, and resonance in pipes and strings.",
            "color": "#6366f1",
            "branches": [
              {
                "id": "b1",
                "title": "Standing Wave Formation",
                "badge": "Superposition",
                "subconcepts": [
                  {
                    "name": "Counter-Propagating Superposition",
                    "tag": "No Net Flow",
                    "desc": "Interference of two identical waves traveling in opposite directions.",
                    "formula": "y = 2A sin(kx) cos(\u03c9t)"
                  },
                  {
                    "name": "Comparison with Traveling Waves",
                    "tag": "Differences",
                    "desc": "Standing waves store energy locally without forward transport; phase is uniform between nodes.",
                    "formula": "Phase flips by \u03c0 at nodes"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Nodes & Antinodes",
                "badge": "Interference Points",
                "subconcepts": [
                  {
                    "name": "Displacement Nodes",
                    "tag": "Zero Amplitude",
                    "desc": "Points of continuous destructive interference remaining stationary at all times.",
                    "formula": "x_node = n(\u03bb/2)"
                  },
                  {
                    "name": "Displacement Antinodes",
                    "tag": "Max Amplitude",
                    "desc": "Points oscillating with maximum amplitude 2A midway between nodes.",
                    "formula": "Distance node-to-antinode = \u03bb/4"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Resonant Boundary Harmonics",
                "badge": "Quantized Modes",
                "subconcepts": [
                  {
                    "name": "Fixed String / Open-Open Pipe",
                    "tag": "All Harmonics",
                    "desc": "Both ends constrained (nodes on string, antinodes in open pipe): integer multiples of fundamental.",
                    "formula": "\u03bb_n = 2L / n, f_n = n f\u2081 (n = 1,2,3...)"
                  },
                  {
                    "name": "Closed-Open Pipe Resonator",
                    "tag": "Odd Harmonics",
                    "desc": "Closed end is displacement node, open end is antinode: produces only odd harmonics.",
                    "formula": "\u03bb_n = 4L / n, f_n = n f\u2081 (n = 1,3,5...)"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Acoustic Resonance Applications",
                "badge": "Instruments",
                "subconcepts": [
                  {
                    "name": "String Tension Wave Speed",
                    "tag": "Speed",
                    "desc": "Speed of transverse wave on string of tension T and mass per unit length \u03bc.",
                    "formula": "v = \u221a(T / \u03bc)"
                  },
                  {
                    "name": "Resonance Chamber Tuning",
                    "tag": "Acoustics",
                    "desc": "Adjusting pipe or string length to match driving source for maximum acoustic amplification.",
                    "formula": "f\u2081 = v / (2L)"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-16",
          "title": "The Doppler effect",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "circle",
          "desc": "Relative motion between a wave source and observer changes observed frequency: higher frequency when approaching (blue shift), lower frequency when receding (redshift).",
          "mindMap": {
            "core": "Doppler effect in acoustic media and relativistic electromagnetic radiation, with cosmic applications.",
            "color": "#d946ef",
            "branches": [
              {
                "id": "b1",
                "title": "Acoustic Doppler (Sound in Medium)",
                "badge": "Pressure Waves",
                "subconcepts": [
                  {
                    "name": "Moving Source Approaching",
                    "tag": "Compressed Waves",
                    "desc": "Wavefronts bunch together ahead of the source producing higher perceived frequency.",
                    "formula": "f' = f [v / (v - v_s)]"
                  },
                  {
                    "name": "Moving Source Receding",
                    "tag": "Stretched Waves",
                    "desc": "Wavefronts spread apart behind the source producing lower perceived frequency.",
                    "formula": "f' = f [v / (v + v_s)]"
                  },
                  {
                    "name": "Moving Observer",
                    "tag": "Relative Interception",
                    "desc": "Observer intercepts wavefronts at altered relative speed.",
                    "formula": "f' = f [(v \u00b1 v_o) / v]"
                  },
                  {
                    "name": "Shock Waves & Mach Cone",
                    "tag": "Supersonic",
                    "desc": "Constructive wave superposition when source speed exceeds wave speed in medium.",
                    "formula": "sin\u03b8_Mach = v_sound / v_source"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Optical Relativistic Doppler",
                "badge": "Light & EM",
                "subconcepts": [
                  {
                    "name": "Low-Speed Approximation",
                    "tag": "v << c",
                    "desc": "Fractional frequency shift equals fractional velocity.",
                    "formula": "\u0394f / f \u2248 \u0394\u03bb / \u03bb \u2248 v / c"
                  },
                  {
                    "name": "Exact Relativistic Equation",
                    "tag": "Lorentz Invariant",
                    "desc": "Incorporates time dilation for high-velocity relativistic sources.",
                    "formula": "f' = f \u221a((1 - v/c) / (1 + v/c))"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Cosmological & Radar Applications",
                "badge": "Astrophysics",
                "subconcepts": [
                  {
                    "name": "Cosmological Redshift",
                    "tag": "Expanding Space",
                    "desc": "Spectral lines from distant galaxies shift toward red proving universe expansion.",
                    "formula": "z = \u0394\u03bb / \u03bb_0 = v / c"
                  },
                  {
                    "name": "Hubble's Law",
                    "tag": "Expansion Rate",
                    "desc": "Recession velocity scales directly with cosmological distance.",
                    "formula": "v = H\u2080 d"
                  },
                  {
                    "name": "Doppler Radar & Echocardiography",
                    "tag": "Medical / Radar",
                    "desc": "Bouncing microwaves or ultrasound off moving targets to measure instantaneous velocity.",
                    "formula": "v = (c \u0394f) / (2 f\u2080)"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "id": "path-physics-unit-d",
      "title": "Fields",
      "category": "Science",
      "subtitle": "Gravitation, Electric & Magnetic Fields, Particle Trajectories, Induction",
      "badge": null,
      "icon": "fields",
      "color": "#38bdf8",
      "accent": "#4f5df5",
      "courses": [
        {
          "id": "ch-17",
          "title": "Gravitation",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "orbit",
          "desc": "Every mass in the universe attracts every other mass. The gravitational field is conservative, enabling stable planetary orbits, geostationary satellites, and escape velocities.",
          "mindMap": {
            "core": "Newton's universal gravitation, conservative gravitational fields, potential energy, and Keplerian orbits.",
            "color": "#3b82f6",
            "branches": [
              {
                "id": "b1",
                "title": "Universal Gravitation Law",
                "badge": "Inverse Square",
                "subconcepts": [
                  {
                    "name": "Newton's Gravitational Law",
                    "tag": "Universal Force",
                    "desc": "Attractive central force between any two point masses.",
                    "formula": "F = G m\u2081 m\u2082 / r\u00b2"
                  },
                  {
                    "name": "Gravitational Field Strength",
                    "tag": "Acceleration g",
                    "desc": "Gravitational force per unit test mass at distance r from primary mass M.",
                    "formula": "g = F / m = G M / r\u00b2"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Gravitational Potential & Escape",
                "badge": "Potential Well",
                "subconcepts": [
                  {
                    "name": "Gravitational Potential V_g",
                    "tag": "Work from Infinity",
                    "desc": "Work done per unit mass bringing a test mass from infinity to distance r.",
                    "formula": "V_g = -G M / r"
                  },
                  {
                    "name": "Gravitational Potential Energy",
                    "tag": "Negative Well",
                    "desc": "Negative scalar energy representing bound gravitational state.",
                    "formula": "E_p = -G M m / r"
                  },
                  {
                    "name": "Escape Velocity",
                    "tag": "Kinetic Threshold",
                    "desc": "Minimum launch speed to escape to infinity with zero residual kinetic energy.",
                    "formula": "v_esc = \u221a(2 G M / R)"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Keplerian Orbital Mechanics",
                "badge": "Celestial Orbits",
                "subconcepts": [
                  {
                    "name": "Orbital Speed Balance",
                    "tag": "Centripetal Balance",
                    "desc": "Gravitational attraction provides exact required centripetal acceleration.",
                    "formula": "v_orb = \u221a(G M / r)"
                  },
                  {
                    "name": "Kepler's Third Law",
                    "tag": "T\u00b2 \u221d r\u00b3",
                    "desc": "Square of orbital period is proportional to cube of orbital radius.",
                    "formula": "T\u00b2 = (4\u03c0\u00b2 / GM) r\u00b3"
                  },
                  {
                    "name": "Total Orbital Energy",
                    "tag": "Bound State",
                    "desc": "Total orbital energy is negative and equals half the potential energy.",
                    "formula": "E_total = -G M m / (2r)"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-18",
          "title": "Electric and magnetic fields",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "bar",
          "desc": "Electric charges create electric fields that exert forces on other charges. Moving charges generate magnetic fields, which in turn deflect moving charges via the Lorentz force perpendicular to velocity.",
          "mindMap": {
            "core": "Coulomb electrostatic interactions, electric potential landscapes, and magnetic dipole flux fields.",
            "color": "#ec4899",
            "branches": [
              {
                "id": "b1",
                "title": "Coulomb's Law & Electric Fields",
                "badge": "Electrostatics",
                "subconcepts": [
                  {
                    "name": "Coulomb's Force Law",
                    "tag": "Point Charges",
                    "desc": "Electrostatic force between two stationary point charges.",
                    "formula": "F = (1 / 4\u03c0\u03b5\u2080) (q\u2081 q\u2082 / r\u00b2)"
                  },
                  {
                    "name": "Electric Field Strength E",
                    "tag": "Force per Charge",
                    "desc": "Vector force experienced per unit positive test charge.",
                    "formula": "E = F / q = q / (4\u03c0\u03b5\u2080 r\u00b2)"
                  },
                  {
                    "name": "Permittivity of Free Space",
                    "tag": "\u03b5\u2080 Constant",
                    "desc": "Electric permittivity determining vacuum electrostatic coupling.",
                    "formula": "\u03b5\u2080 = 8.854 \u00d7 10\u207b\u00b9\u00b2 F/m"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Electric Potential & Uniform Fields",
                "badge": "Voltage Landscape",
                "subconcepts": [
                  {
                    "name": "Electric Potential V",
                    "tag": "Scalar Potential",
                    "desc": "Work done per unit charge bringing a positive test charge from infinity.",
                    "formula": "V = q / (4\u03c0\u03b5\u2080 r)"
                  },
                  {
                    "name": "Potential Gradient Relation",
                    "tag": "E = -dV/dr",
                    "desc": "Electric field vector points in the direction of steepest potential decrease.",
                    "formula": "E = -dV / dr"
                  },
                  {
                    "name": "Uniform Parallel Plates",
                    "tag": "Capacitor Field",
                    "desc": "Homogeneous electric field established between oppositely charged plates.",
                    "formula": "E = V / d"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Magnetic Fields & Flux Density",
                "badge": "Magnetostatics",
                "subconcepts": [
                  {
                    "name": "Magnetic Flux Density B",
                    "tag": "Tesla",
                    "desc": "Measure of magnetic field strength determining forces on moving charges.",
                    "formula": "Measured in Tesla (T = N/(A\u00b7m))"
                  },
                  {
                    "name": "Long Straight Conductor",
                    "tag": "Biot-Savart",
                    "desc": "Concentric cylindrical magnetic field lines surrounding current I.",
                    "formula": "B = (\u03bc\u2080 I) / (2\u03c0 r)"
                  },
                  {
                    "name": "Solenoid Core Field",
                    "tag": "Uniform Interior",
                    "desc": "Dense uniform magnetic field inside a helical current-carrying coil.",
                    "formula": "B = \u03bc\u2080 n I (n = N/L)"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-19",
          "title": "Motion in electric and magnetic fields",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "cube",
          "desc": "Uniform electric fields create parabolic trajectories (constant acceleration), while uniform magnetic fields bend charges into circular arcs. Crossed E and B fields act as velocity selectors in mass spectrometers.",
          "mindMap": {
            "core": "Lorentz force dynamics, cyclotron particle orbits, velocity selectors, and mass spectrometry.",
            "color": "#06b6d4",
            "branches": [
              {
                "id": "b1",
                "title": "Motion in Uniform Electric Fields",
                "badge": "Parabolic Deflection",
                "subconcepts": [
                  {
                    "name": "Constant Electric Force",
                    "tag": "F = qE",
                    "desc": "Produces constant linear acceleration in the direction of field lines.",
                    "formula": "a = qE / m"
                  },
                  {
                    "name": "Parabolic Trajectory",
                    "tag": "Cathode Ray",
                    "desc": "Analogous to projectile motion: uniform horizontal speed with transverse acceleration.",
                    "formula": "y = \u00bd (qE/m) (x/v_x)\u00b2"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Magnetic Lorentz Force & Orbits",
                "badge": "Circular Orbits",
                "subconcepts": [
                  {
                    "name": "Lorentz Magnetic Force",
                    "tag": "q(v \u00d7 B)",
                    "desc": "Acts perpendicular to both velocity and magnetic field; does zero work.",
                    "formula": "F_B = q v B sin\u03b8"
                  },
                  {
                    "name": "Cyclotron Radius",
                    "tag": "Centripetal",
                    "desc": "Radius of circular orbit traced by a charged particle perpendicular to B.",
                    "formula": "r = (m v) / (q B)"
                  },
                  {
                    "name": "Cyclotron Frequency",
                    "tag": "Isochronous",
                    "desc": "Orbital frequency is independent of particle speed or orbit radius.",
                    "formula": "f = (q B) / (2\u03c0 m)"
                  },
                  {
                    "name": "Helical Particle Drift",
                    "tag": "3D Motion",
                    "desc": "Velocity component parallel to B is constant; perpendicular component rotates.",
                    "formula": "Pitch p = v_\u2225 \u00b7 (2\u03c0m / qB)"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Crossed Fields & Analyzers",
                "badge": "Particle Accelerators",
                "subconcepts": [
                  {
                    "name": "Wien Velocity Selector",
                    "tag": "Crossed E & B",
                    "desc": "Perpendicular electric and magnetic forces cancel for a unique speed.",
                    "formula": "qE = qvB \u21d2 v = E / B"
                  },
                  {
                    "name": "Thomson Specific Charge",
                    "tag": "e/m",
                    "desc": "Historical discovery of the electron's charge-to-mass ratio.",
                    "formula": "e/m = E / (B\u00b2 r)"
                  },
                  {
                    "name": "Bainbridge Mass Spectrometer",
                    "tag": "Isotope Separation",
                    "desc": "Separates ions by mass using uniform deflection magnetic field.",
                    "formula": "m = (q B r) / v"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-20",
          "title": "Electromagnetic induction",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "square",
          "desc": "Changing magnetic flux through a conducting loop induces an electromotive force. Lenz's law guarantees that induced currents oppose the change that created them, enabling power generators and transformers.",
          "mindMap": {
            "core": "Faraday induction, magnetic flux linkage, Lenz's law, and alternating current transformers.",
            "color": "#10b981",
            "branches": [
              {
                "id": "b1",
                "title": "Magnetic Flux & Linkage",
                "badge": "Surface Integral",
                "subconcepts": [
                  {
                    "name": "Magnetic Flux \u03a6",
                    "tag": "Weber",
                    "desc": "Dot product of magnetic flux density and oriented surface area.",
                    "formula": "\u03a6 = B A cos\u03b8 (1 Wb = 1 T\u00b7m\u00b2)"
                  },
                  {
                    "name": "Flux Linkage N\u03a6",
                    "tag": "Multi-turn",
                    "desc": "Total magnetic flux threading through N turns of an inductive coil.",
                    "formula": "Flux Linkage = N \u03a6"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Faraday's & Lenz's Induction Laws",
                "badge": "Induced EMF",
                "subconcepts": [
                  {
                    "name": "Faraday's Law",
                    "tag": "Rate of Change",
                    "desc": "Induced EMF equals the time rate of change of magnetic flux linkage.",
                    "formula": "\u2130 = -d(N\u03a6) / dt"
                  },
                  {
                    "name": "Lenz's Law",
                    "tag": "Energy Conservation",
                    "desc": "Induced current flows in a direction that opposes the flux change causing it.",
                    "formula": "Negative sign in Faraday's Law"
                  },
                  {
                    "name": "Motional EMF",
                    "tag": "Cutting Lines",
                    "desc": "EMF induced across a conductor of length L moving at speed v across B.",
                    "formula": "\u2130 = B L v"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "AC Generation & Transformers",
                "badge": "Grid Transmission",
                "subconcepts": [
                  {
                    "name": "AC Alternator",
                    "tag": "Sinusoidal EMF",
                    "desc": "Coil rotating at angular velocity \u03c9 produces sinusoidal alternating current.",
                    "formula": "\u2130(t) = N B A \u03c9 sin(\u03c9t)"
                  },
                  {
                    "name": "Ideal Transformer Law",
                    "tag": "Mutual Induction",
                    "desc": "Voltage scales with turn ratio while conserving input and output power.",
                    "formula": "V_p / V_s = N_p / N_s = I_s / I_p"
                  },
                  {
                    "name": "Joule Transmission Losses",
                    "tag": "High Voltage",
                    "desc": "Stepping up voltage minimizes line current and reduces I\u00b2R resistive losses.",
                    "formula": "P_loss = I\u00b2 R_wire"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "id": "path-physics-unit-e",
      "title": "Nuclear & Quantum Physics",
      "category": "Science",
      "subtitle": "Atomic Structure, Quantum Physics, Radioactivity, Fission, Fusion and Stars",
      "badge": null,
      "icon": "atom",
      "color": "#ec4899",
      "accent": "#f59e0b",
      "courses": [
        {
          "id": "ch-21",
          "title": "Atomic physics",
          "badge": null,
          "gradient": "#1f2a44",
          "iconType": "nucleus",
          "desc": "Alpha particle back-scattering proved atoms possess a tiny, dense, positively charged nucleus. Bohr quantized electron angular momentum, explaining discrete spectral lines as photon emission during orbital transitions.",
          "mindMap": {
            "core": "Discovery of the atomic nucleus, Bohr's quantized energy orbits, and discrete spectral transitions.",
            "color": "#6366f1",
            "branches": [
              {
                "id": "b1",
                "title": "Rutherford Nuclear Discovery",
                "badge": "Scattering",
                "subconcepts": [
                  {
                    "name": "Geiger-Marsden Alpha Experiment",
                    "tag": "Gold Foil",
                    "desc": "Large-angle alpha particle deflections proved atomic mass is concentrated in a tiny nucleus.",
                    "formula": "Nucleus radius r ~ 10\u207b\u00b9\u2075 m vs Atom 10\u207b\u00b9\u2070 m"
                  },
                  {
                    "name": "Classical Planetary Model Failure",
                    "tag": "EM Collapse",
                    "desc": "Accelerating orbital electrons must radiate continuously and spiral into the nucleus.",
                    "formula": "Classical lifetime ~ 10\u207b\u00b9\u00b9 s"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Bohr's Quantized Atom",
                "badge": "Quantization",
                "subconcepts": [
                  {
                    "name": "Quantized Angular Momentum",
                    "tag": "Bohr Postulate",
                    "desc": "Electrons inhabit non-radiating stationary orbits where orbital angular momentum is an integer multiple of \u0127.",
                    "formula": "L = m v r = n \u0127 (\u0127 = h / 2\u03c0)"
                  },
                  {
                    "name": "Hydrogen Energy Levels",
                    "tag": "Discrete Rydberg",
                    "desc": "Quantized negative binding energy levels in the Coulomb potential.",
                    "formula": "E_n = -13.6 eV / n\u00b2 (n = 1, 2, 3...)"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Emission & Absorption Spectra",
                "badge": "Photon Transitions",
                "subconcepts": [
                  {
                    "name": "Photon Transition Rule",
                    "tag": "\u0394E = hf",
                    "desc": "Electrons jump between levels emitting or absorbing a single photon.",
                    "formula": "\u0394E = E_initial - E_final = h f = h c / \u03bb"
                  },
                  {
                    "name": "Spectral Series of Hydrogen",
                    "tag": "Lyman, Balmer, Paschen",
                    "desc": "Balmer series transitions down to n=2 produce visible emission lines.",
                    "formula": "1/\u03bb = R_H (1/n_f\u00b2 - 1/n_i\u00b2)"
                  },
                  {
                    "name": "Fraunhofer Absorption Lines",
                    "tag": "Stellar Chemistry",
                    "desc": "Cool stellar atmospheres absorb specific frequencies revealing elemental compositions.",
                    "formula": "Dark lines at characteristic \u03bb"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-22",
          "title": "Quantum physics",
          "badge": null,
          "gradient": "linear-gradient(135deg, #8b5cf6, #ec4899)",
          "iconType": "sine",
          "desc": "Light behaves as quantized photons in interactions with matter. Conversely, material particles such as electrons possess wave properties with de Broglie wavelength \u03bb = h/p, demonstrating universal wave-particle duality.",
          "mindMap": {
            "core": "Photoelectric effect, de Broglie matter waves, Heisenberg uncertainty, and probabilistic wave mechanics.",
            "color": "#ec4899",
            "branches": [
              {
                "id": "b1",
                "title": "The Photoelectric Effect",
                "badge": "Photon Quanta",
                "subconcepts": [
                  {
                    "name": "Einstein Photon Hypothesis",
                    "tag": "Light Quanta",
                    "desc": "Electromagnetic energy is quantized into discrete localized energy packets.",
                    "formula": "E = h f"
                  },
                  {
                    "name": "Work Function & Threshold",
                    "tag": "Binding",
                    "desc": "Minimum energy needed to liberate an electron from metal surface.",
                    "formula": "\u03a6 = h f_0"
                  },
                  {
                    "name": "Einstein Photoelectric Equation",
                    "tag": "Kinetic Max",
                    "desc": "Conservation of energy for single photon-electron collision.",
                    "formula": "h f = \u03a6 + E_k,max = \u03a6 + e V_s"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Wave-Particle Duality",
                "badge": "Matter Waves",
                "subconcepts": [
                  {
                    "name": "De Broglie Matter Wavelength",
                    "tag": "Momentum Coupling",
                    "desc": "All moving matter exhibits wave characteristics inversely proportional to momentum.",
                    "formula": "\u03bb = h / p = h / (m v)"
                  },
                  {
                    "name": "Electron Diffraction",
                    "tag": "Davisson-Germer",
                    "desc": "Electrons scattered from nickel crystal create circular interference fringes.",
                    "formula": "2d sin\u03b8 = n \u03bb"
                  },
                  {
                    "name": "Photon Momentum",
                    "tag": "Radiation Pressure",
                    "desc": "Massless photons carry momentum proportional to their wave frequency.",
                    "formula": "p = h / \u03bb = E / c"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Heisenberg Uncertainty Principle",
                "badge": "Quantum Limits",
                "subconcepts": [
                  {
                    "name": "Position-Momentum Limit",
                    "tag": "Conjugate Pairs",
                    "desc": "Fundamental quantum impossibility of simultaneously measuring exact position and momentum.",
                    "formula": "\u0394x \u0394p \u2265 \u0127 / 2"
                  },
                  {
                    "name": "Energy-Time Limit",
                    "tag": "Virtual Fluctuations",
                    "desc": "Allows temporary energy conservation violation for virtual quantum states.",
                    "formula": "\u0394E \u0394t \u2265 \u0127 / 2"
                  },
                  {
                    "name": "Quantum Tunneling",
                    "tag": "Barrier Penetration",
                    "desc": "Wavefunction leakage allows particles to traverse classically forbidden barriers.",
                    "formula": "T \u221d e^(-2\u03baL)"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Wavefunctions & Probability",
                "badge": "Schr\u00f6dinger",
                "subconcepts": [
                  {
                    "name": "Born Probability Interpretation",
                    "tag": "Probability Density",
                    "desc": "Square of the complex wavefunction amplitude gives the probability of finding the particle.",
                    "formula": "P(x) dx = |\u03c8(x)|\u00b2 dx"
                  },
                  {
                    "name": "Particle in a Box",
                    "tag": "Infinite Well",
                    "desc": "Quantized standing wave solutions inside a one-dimensional potential well.",
                    "formula": "E_n = (n\u00b2 h\u00b2) / (8 m L\u00b2)"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-23",
          "title": "Nuclear physics",
          "badge": null,
          "gradient": "linear-gradient(135deg, #10b981, #06b6d4)",
          "iconType": "nucleus",
          "desc": "Nuclear forces bind protons and neutrons despite electrostatic repulsion. The mass defect converts into binding energy via E=mc\u00b2. Unstable isotopes decay spontaneously emitting \u03b1, \u03b2, and \u03b3 radiation following exponential statistics.",
          "mindMap": {
            "core": "Nuclear strong force, binding energy per nucleon, radioactive decay transmutations, and half-life kinetics.",
            "color": "#06b6d4",
            "branches": [
              {
                "id": "b1",
                "title": "Nuclear Structure & Strong Force",
                "badge": "Nuclides",
                "subconcepts": [
                  {
                    "name": "Nucleon Constitution",
                    "tag": "Z & N",
                    "desc": "Atomic number Z (protons), neutron number N, total nucleon mass number A = Z + N.",
                    "formula": "Nuclide: ^A_Z X"
                  },
                  {
                    "name": "Nuclear Density Scaling",
                    "tag": "Constant Density",
                    "desc": "Nuclear volume scales linearly with mass number A.",
                    "formula": "R \u2248 R\u2080 A^(1/3) (R\u2080 \u2248 1.2 fm)"
                  },
                  {
                    "name": "Strong Nuclear Force",
                    "tag": "Binding Glue",
                    "desc": "Short-range powerful attractive force between all nucleons overcoming proton Coulomb repulsion.",
                    "formula": "Range ~ 1 to 3 fm; repulsive < 0.7 fm"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Mass Defect & Binding Energy",
                "badge": "E = mc\u00b2",
                "subconcepts": [
                  {
                    "name": "Nuclear Mass Defect \u0394m",
                    "tag": "Missing Mass",
                    "desc": "Mass of assembled nucleus is strictly less than the sum of its individual constituent nucleons.",
                    "formula": "\u0394m = (Z m_p + N m_n) - m_nucleus"
                  },
                  {
                    "name": "Nuclear Binding Energy",
                    "tag": "Disassembly Work",
                    "desc": "Energy released when nucleons coalesce into a bound nucleus.",
                    "formula": "E_b = \u0394m c\u00b2 (1 u = 931.5 MeV)"
                  },
                  {
                    "name": "Binding Energy per Nucleon Curve",
                    "tag": "Stability Peak",
                    "desc": "Peaks near Iron-56 (8.8 MeV/nucleon); explains energy release in fusion and fission.",
                    "formula": "Max stability at ^56_26 Fe"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Radioactive Decay Modes",
                "badge": "Spontaneous Decay",
                "subconcepts": [
                  {
                    "name": "Alpha Decay (\u03b1)",
                    "tag": "Helium-4 Nucleus",
                    "desc": "Emission of \u2074\u2082He\u00b2\u207a particle; reduces A by 4 and Z by 2.",
                    "formula": "^A_Z X \u2192 ^(A-4)_(Z-2)Y + \u2074\u2082He"
                  },
                  {
                    "name": "Beta-Minus Decay (\u03b2\u207b)",
                    "tag": "Neutron Transmutation",
                    "desc": "Neutron transforms into proton, electron, and electron antineutrino via weak interaction.",
                    "formula": "n \u2192 p + e\u207b + \u03bd\u0304_e"
                  },
                  {
                    "name": "Beta-Plus Decay (\u03b2\u207a)",
                    "tag": "Positron Emission",
                    "desc": "Proton transforms into neutron, positron, and electron neutrino.",
                    "formula": "p \u2192 n + e\u207a + \u03bd_e"
                  },
                  {
                    "name": "Gamma Emission (\u03b3)",
                    "tag": "Nuclear De-excitation",
                    "desc": "Excited nucleus releases high-energy photon without changing A or Z.",
                    "formula": "^A_Z X* \u2192 ^A_Z X + \u03b3"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Radioactive Decay Kinetics",
                "badge": "Half-Life",
                "subconcepts": [
                  {
                    "name": "Exponential Decay Law",
                    "tag": "Statistical Decay",
                    "desc": "Rate of decay is proportional to number of radioactive nuclei remaining.",
                    "formula": "N(t) = N\u2080 e^(-\u03bbt)"
                  },
                  {
                    "name": "Radioactive Activity A",
                    "tag": "Becquerels",
                    "desc": "Number of disintegrations occurring per second.",
                    "formula": "A = -dN/dt = \u03bb N (1 Bq = 1 decay/s)"
                  },
                  {
                    "name": "Half-Life T_\u00bd",
                    "tag": "Time to Halve",
                    "desc": "Time required for half the original radioactive nuclei to decay.",
                    "formula": "T_\u00bd = (ln 2) / \u03bb \u2248 0.693 / \u03bb"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-24",
          "title": "Nuclear fission",
          "badge": null,
          "gradient": "linear-gradient(135deg, #f59e0b, #e11d48)",
          "iconType": "cube",
          "desc": "Heavy unstable nuclei like Uranium-235 capture thermal neutrons and split into lighter fragments with higher binding energy per nucleon, releasing roughly 200 MeV per event and sustaining controlled chain reactions.",
          "mindMap": {
            "core": "Induced neutron-induced fission, liquid-drop deformation, criticality factors, and reactor control.",
            "color": "#f59e0b",
            "branches": [
              {
                "id": "b1",
                "title": "Induced Fission Mechanism",
                "badge": "Neutron Capture",
                "subconcepts": [
                  {
                    "name": "Thermal Neutron Capture",
                    "tag": "Compound Nucleus",
                    "desc": "Slow thermal neutron absorbed by Uranium-235 creates excited Uranium-236.",
                    "formula": "\u00b2\u00b3\u2075_92 U + \u00b9_0 n \u2192 \u00b2\u00b3\u2076_92 U* \u2192 Fission"
                  },
                  {
                    "name": "Liquid Drop Splitting",
                    "tag": "Deformation",
                    "desc": "Nuclear surface tension fails against Coulomb repulsion, cleaving into asymmetric daughter nuclei.",
                    "formula": "e.g. \u00b9\u2074\u00b9_56 Ba + \u2079\u00b2_36 Kr + 3 \u00b9_0 n"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Fission Energy Release",
                "badge": "200 MeV Event",
                "subconcepts": [
                  {
                    "name": "Energy Yield per Fission",
                    "tag": "Mass to Energy",
                    "desc": "Daughter nuclei have higher binding energy per nucleon; difference is released primarily as kinetic energy.",
                    "formula": "Q \u2248 200 MeV per fission event"
                  },
                  {
                    "name": "Prompt Prompt Emission",
                    "tag": "Neutrons & Gammas",
                    "desc": "Average 2.5 prompt neutrons and gamma rays emitted instantaneously within 10\u207b\u00b9\u2074 s.",
                    "formula": "Carries ~10% of total energy"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Chain Reactions & Criticality",
                "badge": "Multiplication k",
                "subconcepts": [
                  {
                    "name": "Multiplication Factor k",
                    "tag": "Neutron Budget",
                    "desc": "Ratio of neutrons in generation n+1 to generation n.",
                    "formula": "k = (neutrons produced) / (neutrons lost)"
                  },
                  {
                    "name": "Criticality Regimes",
                    "tag": "Steady vs Runaway",
                    "desc": "Subcritical (k < 1), Critical (k = 1, steady power), Supercritical (k > 1, prompt runaway).",
                    "formula": "Power stable at k = 1.000"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Nuclear Reactor Engineering",
                "badge": "Reactor Core",
                "subconcepts": [
                  {
                    "name": "Moderator Function",
                    "tag": "Thermalization",
                    "desc": "Light nuclei (heavy water, graphite) slow fast 2 MeV neutrons to 0.025 eV thermal speeds via elastic collisions.",
                    "formula": "Thermal energy E ~ 0.025 eV"
                  },
                  {
                    "name": "Control Rods",
                    "tag": "Absorption",
                    "desc": "Neutron poisons (boron, cadmium) inserted into core to maintain k = 1.",
                    "formula": "Captures excess neutrons without fissioning"
                  },
                  {
                    "name": "Coolant & Heat Exchanger",
                    "tag": "Thermal Cycle",
                    "desc": "Transfers core thermal energy to generate high-pressure steam for turbines.",
                    "formula": "Primary & secondary closed loops"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "ch-25",
          "title": "Nuclear fusion and stars",
          "badge": null,
          "gradient": "linear-gradient(135deg, #ec4899, #f59e0b)",
          "iconType": "star",
          "desc": "Stars are cosmic thermonuclear reactors powered by nuclear fusion of hydrogen into helium. The Hertzsprung-Russell diagram charts stellar luminosity against surface temperature, revealing the life cycles of stars from main sequence to white dwarfs, neutron stars, or black holes.",
          "mindMap": {
            "core": "Thermonuclear fusion, proton-proton chain, stellar hydrostatic equilibrium, and life cycle evolution.",
            "color": "#f59e0b",
            "branches": [
              {
                "id": "b1",
                "title": "Thermonuclear Fusion Physics",
                "badge": "Coulomb Tunneling",
                "subconcepts": [
                  {
                    "name": "Overcoming Coulomb Repulsion",
                    "tag": "Extreme Core",
                    "desc": "Positively charged protons require core temperatures > 10\u2077 K and high density to overcome electrostatic barrier.",
                    "formula": "T_core ~ 1.5 \u00d7 10\u2077 K"
                  },
                  {
                    "name": "Quantum Tunneling in Fusion",
                    "tag": "Wave Penetration",
                    "desc": "Protons tunnel through the Coulomb barrier at energies far below classical thresholds.",
                    "formula": "Gamow peak energy window"
                  },
                  {
                    "name": "Proton-Proton (p-p) Chain",
                    "tag": "Solar Hydrogen Fusion",
                    "desc": "Net conversion of four protons into one Helium-4 nucleus with energy release.",
                    "formula": "4 \u00b9_1 H \u2192 \u2074_2 He + 2 e\u207a + 2 \u03bd_e + 26.7 MeV"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Stellar Hydrostatic Balance",
                "badge": "Equilibrium",
                "subconcepts": [
                  {
                    "name": "Hydrostatic Equilibrium",
                    "tag": "Gravity vs Pressure",
                    "desc": "Inward gravitational weight is balanced at every radius by outward thermal and radiation pressure.",
                    "formula": "dP/dr = -G M(r) \u03c1(r) / r\u00b2"
                  },
                  {
                    "name": "Solar Layers",
                    "tag": "Internal Architecture",
                    "desc": "Thermonuclear core, radiative zone, convection zone, photosphere.",
                    "formula": "Main sequence lifespan ~ M / L \u221d M^(-2.5)"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Stellar Life Cycles & Remnants",
                "badge": "Stellar Evolution",
                "subconcepts": [
                  {
                    "name": "Low-Mass Stars (< 8 M_\u2299)",
                    "tag": "White Dwarf",
                    "desc": "Main sequence \u2192 Red giant \u2192 Planetary nebula \u2192 White dwarf supported by electron degeneracy pressure.",
                    "formula": "Chandrasekhar limit M_wd \u2264 1.44 M_\u2299"
                  },
                  {
                    "name": "High-Mass Stars (> 8 M_\u2299)",
                    "tag": "Supernova",
                    "desc": "Iron core collapse triggers Type II supernova leaving neutron star or black hole.",
                    "formula": "Neutron degeneracy / Event horizon"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Hertzsprung-Russell (H-R) Diagram",
                "badge": "Astrophysical Classification",
                "subconcepts": [
                  {
                    "name": "Luminosity vs Temperature",
                    "tag": "H-R Plot",
                    "desc": "Logarithmic plot of stellar luminosity versus decreasing surface effective temperature.",
                    "formula": "L = 4\u03c0 R\u00b2 \u03c3 T\u2074"
                  },
                  {
                    "name": "Spectral Classification",
                    "tag": "O B A F G K M",
                    "desc": "Surface temperature sequence from hot blue O stars (30,000 K) to cool red M stars (3,000 K).",
                    "formula": "Sun: G2V (5778 K)"
                  },
                  {
                    "name": "Main Sequence Band",
                    "tag": "Core Hydrogen",
                    "desc": "Diagonal band where stars fuse hydrogen in their cores; mass determines position.",
                    "formula": "L \u221d M^(3.5)"
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ],
  "units": [
    {
      "id": "unit-a",
      "name": "Space, time and motion",
      "shortName": "Space, Time & Motion",
      "page": 1,
      "badge": null,
      "description": "Classical and relativistic mechanics covering kinematics, dynamics, energy, momentum, rotation, and spacetime.",
      "pathCategory": "Motion & Forces",
      "color": "#4f5df5"
    },
    {
      "id": "unit-b",
      "name": "The particulate nature of matter",
      "shortName": "Particulate Matter",
      "page": 155,
      "badge": null,
      "description": "Thermal physics, atmospheric radiation, ideal gases, thermodynamics, and electrical circuits.",
      "pathCategory": "Energy & Work",
      "color": "#f59e0b"
    },
    {
      "id": "unit-c",
      "name": "Wave behaviour",
      "shortName": "Wave Behaviour",
      "page": 263,
      "badge": null,
      "description": "Simple harmonic motion, wave mechanics, superposition, interference, standing waves, and Doppler shift.",
      "pathCategory": "Waves & Sound",
      "color": "#10b981"
    },
    {
      "id": "unit-d",
      "name": "Fields",
      "shortName": "Fields",
      "page": 357,
      "badge": null,
      "description": "Gravitational, electrostatic, and magnetic fields, charge trajectories, and electromagnetic induction.",
      "pathCategory": "Electricity",
      "color": "#38bdf8"
    },
    {
      "id": "unit-e",
      "name": "Nuclear and quantum physics",
      "shortName": "Nuclear & Quantum",
      "page": 449,
      "badge": null,
      "description": "Atomic structure, photon quantization, matter waves, nuclear radioactivity, fission, fusion, and stellar astrophysics.",
      "pathCategory": "Light & Optics",
      "color": "#ec4899"
    }
  ],
  "chapters": [
    {
      "id": "ch-1",
      "num": 1,
      "title": "Kinematics",
      "unitId": "unit-a",
      "startPage": 2,
      "endPage": 28,
      "pathCategory": "Motion & Forces",
      "badge": null,
      "duration": "45 min",
      "sections": [
        {
          "num": "1.1",
          "title": "Displacement, distance, speed and velocity",
          "page": 3,
          "desc": "Scalar vs vector quantities, instantaneous vs average rates of position change."
        },
        {
          "num": "1.2",
          "title": "Uniformly accelerated motion: the equations of kinematics",
          "page": 7,
          "desc": "Derivation and application of the SUVAT equations for 1D constant acceleration."
        },
        {
          "num": "1.3",
          "title": "Graphs of motion",
          "page": 16,
          "desc": "Displacement-time, velocity-time, and acceleration-time graphs, gradients, and areas under curves."
        },
        {
          "num": "1.4",
          "title": "Projectile motion",
          "page": 20,
          "desc": "Independent horizontal and vertical components of 2D trajectories under gravity."
        }
      ],
      "summary": "Kinematics describes the motion of points, bodies, and systems of bodies without consideration of the forces that cause them to move. Master the four SUVAT equations and vector decomposition for ballistic trajectories.",
      "keyFormulas": [
        {
          "tex": "v = u + at",
          "name": "Final Velocity"
        },
        {
          "tex": "s = ut + \\frac{1}{2}at^2",
          "name": "Displacement Equation"
        },
        {
          "tex": "v^2 = u^2 + 2as",
          "name": "Torricelli Equation"
        },
        {
          "tex": "s = \\frac{(u + v)t}{2}",
          "name": "Average Velocity Displacement"
        },
        {
          "tex": "y(t) = (u\\sin\\theta)t - \\frac{1}{2}gt^2",
          "name": "Projectile Vertical Motion"
        }
      ],
      "simulationType": "projectile-sim",
      "quiz": [
        {
          "question": "A ball is launched horizontally at 15 m/s from a cliff of height 20 m. Neglecting air resistance, what is its vertical velocity just before impact? (take g = 9.8 m/s\u00b2)",
          "options": [
            "15.0 m/s",
            "19.8 m/s",
            "24.8 m/s",
            "39.2 m/s"
          ],
          "correct": 1,
          "explanation": "Using v_y\u00b2 = u_y\u00b2 + 2gh with u_y = 0: v_y = \u221a(2 * 9.8 * 20) = \u221a392 \u2248 19.8 m/s."
        },
        {
          "question": "What does the gradient of a displacement-time graph represent?",
          "options": [
            "Acceleration",
            "Instantaneous Velocity",
            "Displacement",
            "Jerk"
          ],
          "correct": 1,
          "explanation": "The derivative ds/dt is velocity, so the tangent gradient is instantaneous velocity."
        },
        {
          "question": "At what launch angle above the horizontal is the maximum range achieved over level ground in a vacuum?",
          "options": [
            "30\u00b0",
            "45\u00b0",
            "60\u00b0",
            "90\u00b0"
          ],
          "correct": 1,
          "explanation": "Range R = (u\u00b2 sin 2\u03b8)/g. Maximum occurs when sin 2\u03b8 = 1, i.e., 2\u03b8 = 90\u00b0 or \u03b8 = 45\u00b0."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Study of motion of points, bodies, and systems of bodies without consideration of the forces that cause them to move.",
        "color": "#38bdf8",
        "branches": [
          {
            "id": "b1",
            "title": "Position & Motion Rates",
            "badge": "1D Kinematics",
            "subconcepts": [
              {
                "name": "Displacement vs Distance",
                "tag": "Vector vs Scalar",
                "desc": "Displacement \u0394x is the shortest vector from start to finish; distance is total path length.",
                "formula": "\u0394x = x_f - x_i"
              },
              {
                "name": "Instantaneous Velocity",
                "tag": "Calculus",
                "desc": "Time rate of change of displacement evaluated at an infinitesimal instant.",
                "formula": "v = dx/dt = lim(\u0394t\u21920) \u0394x/\u0394t"
              },
              {
                "name": "Acceleration",
                "tag": "Rate of Rate",
                "desc": "Time rate of change of velocity; non-zero whenever speed or direction changes.",
                "formula": "a = dv/dt = d\u00b2x/dt\u00b2"
              }
            ]
          },
          {
            "id": "b2",
            "title": "SUVAT Equations (Constant a)",
            "badge": "Uniform Accel",
            "subconcepts": [
              {
                "name": "Velocity-Time Relation",
                "tag": "SUVAT 1",
                "desc": "Final velocity after accelerating at rate a for time t.",
                "formula": "v = u + at"
              },
              {
                "name": "Position-Time Relation",
                "tag": "SUVAT 2",
                "desc": "Total displacement under constant acceleration.",
                "formula": "s = ut + \u00bdat\u00b2"
              },
              {
                "name": "Work-Kinematics Form",
                "tag": "SUVAT 3",
                "desc": "Relates velocities and displacement without explicit time dependency.",
                "formula": "v\u00b2 = u\u00b2 + 2as"
              },
              {
                "name": "Mean Speed Form",
                "tag": "SUVAT 4",
                "desc": "Displacement as average velocity multiplied by duration.",
                "formula": "s = \u00bd(u + v)t"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Motion Graphs & Graphical Calculus",
            "badge": "Visual Analytics",
            "subconcepts": [
              {
                "name": "Displacement-Time (x-t)",
                "tag": "Slope = v",
                "desc": "Gradient equals instantaneous velocity; curvature indicates acceleration.",
                "formula": "Gradient = dx/dt = v"
              },
              {
                "name": "Velocity-Time (v-t)",
                "tag": "Slope = a, Area = s",
                "desc": "Gradient represents acceleration; definite area under curve equals displacement.",
                "formula": "Area = \u222b v dt = \u0394x"
              },
              {
                "name": "Acceleration-Time (a-t)",
                "tag": "Area = \u0394v",
                "desc": "Area under curve yields total change in velocity.",
                "formula": "Area = \u222b a dt = \u0394v"
              }
            ]
          },
          {
            "id": "b4",
            "title": "2D Projectile Trajectories",
            "badge": "2D Motion",
            "subconcepts": [
              {
                "name": "Orthogonal Independence",
                "tag": "Vectors",
                "desc": "Horizontal and vertical motions proceed completely independently of one another.",
                "formula": "v_x = u cos\u03b8, v_y = u sin\u03b8 - gt"
              },
              {
                "name": "Trajectory Peak & Hangtime",
                "tag": "Symmetry",
                "desc": "Vertical velocity vanishes at apex (v_y = 0); total flight time T = 2u sin\u03b8 / g.",
                "formula": "H_max = (u\u00b2 sin\u00b2\u03b8)/(2g)"
              },
              {
                "name": "Horizontal Range",
                "tag": "Ballistics",
                "desc": "Horizontal distance traveled over flat ground; maximized at 45\u00b0 launch.",
                "formula": "R = (u\u00b2 sin 2\u03b8)/g"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-2",
      "num": 2,
      "title": "Forces and Newton's laws",
      "unitId": "unit-a",
      "startPage": 29,
      "endPage": 60,
      "pathCategory": "Motion & Forces",
      "badge": null,
      "duration": "50 min",
      "sections": [
        {
          "num": "2.1",
          "title": "Forces and their direction",
          "page": 30,
          "desc": "Free-body force diagrams, contact forces, normal reaction, tension, friction, and buoyancy."
        },
        {
          "num": "2.2",
          "title": "Newton's laws of motion",
          "page": 39,
          "desc": "Inertia (1st law), momentum change F=ma (2nd law), and action-reaction pairs (3rd law)."
        },
        {
          "num": "2.3",
          "title": "Circular motion",
          "page": 52,
          "desc": "Centripetal acceleration and centripetal force in uniform circular motion."
        }
      ],
      "summary": "Dynamics links kinematics with the causes of motion through Newton's three laws. Forces determine translational acceleration and centripetal acceleration in circular orbits and turns.",
      "keyFormulas": [
        {
          "tex": "\\Sigma \\vec{F} = m\\vec{a} = \\frac{d\\vec{p}}{dt}",
          "name": "Newton's 2nd Law"
        },
        {
          "tex": "F_f \\le \\mu_s R, \\quad F_k = \\mu_k R",
          "name": "Friction Laws"
        },
        {
          "tex": "a_c = \\frac{v^2}{r} = \\omega^2 r",
          "name": "Centripetal Acceleration"
        },
        {
          "tex": "F_c = \\frac{mv^2}{r} = m\\omega^2 r",
          "name": "Centripetal Force"
        }
      ],
      "simulationType": "forces-sim",
      "quiz": [
        {
          "question": "According to Newton's third law, the reaction force to the gravitational pull of the Earth on a falling book is:",
          "options": [
            "The upward air resistance on the book",
            "The normal force of the ground on the book",
            "The gravitational pull of the book on the Earth",
            "The weight of the book"
          ],
          "correct": 2,
          "explanation": "Action-reaction pairs act on opposite bodies and are of the exact same type. If Earth pulls book, book pulls Earth."
        },
        {
          "question": "If a car negotiates a flat curve of radius 50 m at 20 m/s without skidding, what is the minimum coefficient of static friction required?",
          "options": [
            "0.40",
            "0.65",
            "0.82",
            "0.98"
          ],
          "correct": 2,
          "explanation": "F_c = mv\u00b2/r \u2264 \u03bc_s mg => \u03bc_s \u2265 v\u00b2/(gr) = 400 / (9.8 * 50) = 400/490 \u2248 0.816 \u2248 0.82."
        },
        {
          "question": "An object moves in uniform circular motion with constant speed v. Is its acceleration zero?",
          "options": [
            "Yes, because speed is constant",
            "No, its direction of velocity continuously changes",
            "Yes, because net work done is zero",
            "Only if the radius is infinite"
          ],
          "correct": 1,
          "explanation": "Velocity is a vector. Changing direction requires continuous centripetal acceleration a_c = v\u00b2/r directed towards the center."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Mechanisms and laws governing forces, inertia, momentum exchange, and classical equilibrium.",
        "color": "#6366f1",
        "branches": [
          {
            "id": "b1",
            "title": "Newton's Three Axioms",
            "badge": "Classical Laws",
            "subconcepts": [
              {
                "name": "1st Law: Inertia",
                "tag": "Equilibrium",
                "desc": "A body remains at rest or in uniform straight motion unless acted upon by a net external force.",
                "formula": "\u03a3F = 0 \u21d4 a = 0"
              },
              {
                "name": "2nd Law: Momentum Rate",
                "tag": "Dynamics",
                "desc": "Net force equals the time rate of change of momentum; simplifies to F = ma for constant mass.",
                "formula": "\u03a3F = dp/dt = ma"
              },
              {
                "name": "3rd Law: Action-Reaction",
                "tag": "Pairs",
                "desc": "Forces always occur in matched collinear pairs equal in magnitude and opposite in direction.",
                "formula": "F_AB = -F_BA"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Contact & Frictional Forces",
            "badge": "Surface Interactions",
            "subconcepts": [
              {
                "name": "Normal Reaction Force",
                "tag": "Perpendicular",
                "desc": "Electromagnetic repulsion from surface atoms resisting penetration.",
                "formula": "N = mg cos\u03b8 (plane)"
              },
              {
                "name": "Static Friction",
                "tag": "Threshold",
                "desc": "Opposes initiation of relative sliding motion up to a maximum limit.",
                "formula": "f_s \u2264 \u03bc_s N"
              },
              {
                "name": "Dynamic/Kinetic Friction",
                "tag": "Sliding",
                "desc": "Resistive force during continuous relative sliding.",
                "formula": "f_k = \u03bc_k N"
              },
              {
                "name": "Fluid Drag & Terminal Velocity",
                "tag": "Aerodynamics",
                "desc": "Speed where gravitational pull balances fluid drag force.",
                "formula": "v_term = \u221a(2mg / (\u03c1 A C_d))"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Free-Body Diagrams & Statics",
            "badge": "Vector Statics",
            "subconcepts": [
              {
                "name": "Vector Force Resolution",
                "tag": "Components",
                "desc": "Decomposing all forces into orthogonal axes to test translational equilibrium.",
                "formula": "\u03a3F_x = 0, \u03a3F_y = 0"
              },
              {
                "name": "Inclined Plane Dynamics",
                "tag": "Incline",
                "desc": "Gravity components parallel (mg sin\u03b8) and perpendicular (mg cos\u03b8) to slope.",
                "formula": "a = g(sin\u03b8 - \u03bc_k cos\u03b8)"
              },
              {
                "name": "Tension in Cables & Pulleys",
                "tag": "Constraints",
                "desc": "Uniform tension along massless strings over frictionless pivots.",
                "formula": "T - mg = ma"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-3",
      "num": 3,
      "title": "Work, energy and power",
      "unitId": "unit-a",
      "startPage": 61,
      "endPage": 83,
      "pathCategory": "Energy & Work",
      "badge": null,
      "duration": "45 min",
      "sections": [
        {
          "num": "3.1",
          "title": "Work",
          "page": 62,
          "desc": "Mechanical work defined as force times displacement in the direction of the force."
        },
        {
          "num": "3.2",
          "title": "Conservation of energy",
          "page": 70,
          "desc": "Total mechanical energy conservation, kinetic energy, gravitational and elastic potential energies."
        },
        {
          "num": "3.3",
          "title": "Power and efficiency",
          "page": 78,
          "desc": "Rate of energy transfer, P = Fv, and ratio of useful work output to total input."
        },
        {
          "num": "3.4",
          "title": "Energy transfers",
          "page": 80,
          "desc": "Sankey diagrams, dissipation, degradation of thermal energy."
        }
      ],
      "summary": "Work transfers energy from one system to another. The principle of conservation of energy states that energy cannot be created or destroyed, only transformed.",
      "keyFormulas": [
        {
          "tex": "W = F s \\cos\\theta = \\int \\vec{F}\\cdot d\\vec{s}",
          "name": "Work Done"
        },
        {
          "tex": "E_k = \\frac{1}{2}mv^2, \\quad E_p = mgh",
          "name": "Kinetic and Gravitational PE"
        },
        {
          "tex": "E_{elastic} = \\frac{1}{2}k x^2",
          "name": "Spring Potential Energy"
        },
        {
          "tex": "P = \\frac{\\Delta W}{\\Delta t} = \\vec{F}\\cdot \\vec{v}",
          "name": "Mechanical Power"
        },
        {
          "tex": "\\eta = \\frac{\\text{Useful energy out}}{\\text{Total energy in}} \\times 100\\%",
          "name": "Efficiency"
        }
      ],
      "simulationType": "energy-sim",
      "quiz": [
        {
          "question": "A force of 40 N acts at 60\u00b0 to the horizontal pulling a block 10 m across a smooth floor. The work done is:",
          "options": [
            "400 J",
            "200 J",
            "346 J",
            "0 J"
          ],
          "correct": 1,
          "explanation": "W = F * s * cos(60\u00b0) = 40 * 10 * 0.5 = 200 J."
        },
        {
          "question": "A car engine delivers 60 kW of power while driving at a steady 30 m/s. The resistive force opposing the car is:",
          "options": [
            "1800 kN",
            "2000 N",
            "500 N",
            "180 N"
          ],
          "correct": 1,
          "explanation": "P = F * v => F = P / v = 60,000 W / 30 m/s = 2000 N."
        },
        {
          "question": "If the speed of an object doubles, its kinetic energy increases by a factor of:",
          "options": [
            "2",
            "4",
            "8",
            "\u221a2"
          ],
          "correct": 1,
          "explanation": "E_k is proportional to v\u00b2. Doubling v quadruples v\u00b2 (2\u00b2 = 4)."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Mechanics of work, conservative versus non-conservative forces, and energy transformation rates.",
        "color": "#f59e0b",
        "branches": [
          {
            "id": "b1",
            "title": "Work Done by Forces",
            "badge": "Mechanical Transfer",
            "subconcepts": [
              {
                "name": "Constant Force Work",
                "tag": "Dot Product",
                "desc": "Scalar product of force vector and displacement vector.",
                "formula": "W = F \u00b7 d = F d cos\u03b8"
              },
              {
                "name": "Variable Force Integration",
                "tag": "Calculus",
                "desc": "Area under the force-displacement curve represents total work.",
                "formula": "W = \u222b F(x) dx"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Mechanical Energy Forms",
            "badge": "Kinetic & Potential",
            "subconcepts": [
              {
                "name": "Translational Kinetic Energy",
                "tag": "Motion",
                "desc": "Energy possessed by virtue of translational velocity.",
                "formula": "E_k = \u00bd m v\u00b2"
              },
              {
                "name": "Gravitational Potential Energy",
                "tag": "Field",
                "desc": "Work done against gravity within a uniform field.",
                "formula": "E_p = m g h"
              },
              {
                "name": "Elastic Strain Energy",
                "tag": "Hooke",
                "desc": "Work stored in compressing or extending a linear spring.",
                "formula": "E_el = \u00bd k (\u0394x)\u00b2"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Conservation & Work-Energy Theorem",
            "badge": "Conservation",
            "subconcepts": [
              {
                "name": "Work-Energy Theorem",
                "tag": "Net Work",
                "desc": "Net work done by all forces equals the change in kinetic energy.",
                "formula": "W_net = \u0394E_k = \u00bdmv\u00b2 - \u00bdmu\u00b2"
              },
              {
                "name": "Conservation of Mechanical Energy",
                "tag": "Isolated",
                "desc": "In the absence of dissipative friction, total mechanical energy remains constant.",
                "formula": "E_k1 + E_p1 = E_k2 + E_p2"
              },
              {
                "name": "Dissipative Thermal Losses",
                "tag": "Non-conservative",
                "desc": "Mechanical energy degraded into microscopic thermal entropy.",
                "formula": "\u0394E_mech = -f_k \u00b7 d"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Power & Efficiency",
            "badge": "Rate of Transfer",
            "subconcepts": [
              {
                "name": "Instantaneous Power",
                "tag": "Rate",
                "desc": "Rate of work done per unit time; also force times velocity.",
                "formula": "P = dW/dt = F \u00b7 v"
              },
              {
                "name": "System Efficiency",
                "tag": "Performance",
                "desc": "Ratio of useful energy output to total energy input.",
                "formula": "\u03b7 = (P_out / P_in) \u00d7 100%"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-4",
      "num": 4,
      "title": "Linear momentum",
      "unitId": "unit-a",
      "startPage": 84,
      "endPage": 101,
      "pathCategory": "Motion & Forces",
      "badge": null,
      "duration": "40 min",
      "sections": [
        {
          "num": "4.1",
          "title": "Newton's second law in terms of momentum",
          "page": 85,
          "desc": "Net force defined as the rate of change of linear momentum."
        },
        {
          "num": "4.2",
          "title": "Impulse and force-time graphs",
          "page": 87,
          "desc": "Impulse J = F\u0394t equals change in momentum, area under F-t curve."
        },
        {
          "num": "4.3",
          "title": "Conservation of momentum",
          "page": 90,
          "desc": "Total momentum is conserved in isolated systems with no external forces."
        },
        {
          "num": "4.4",
          "title": "Kinetic energy and momentum",
          "page": 93,
          "desc": "Elastic vs inelastic collisions; Ek = p\u00b2/(2m)."
        },
        {
          "num": "4.5",
          "title": "Two-dimensional collisions",
          "page": 97,
          "desc": "Vector resolution of momentum in x and y planes."
        }
      ],
      "summary": "Linear momentum is a vector quantity p = mv. For isolated systems, total momentum is strictly conserved across all collisions and explosions.",
      "keyFormulas": [
        {
          "tex": "\\vec{p} = m\\vec{v}, \\quad \\vec{J} = \\int \\vec{F}\\,dt = \\Delta\\vec{p}",
          "name": "Momentum & Impulse"
        },
        {
          "tex": "\\Sigma \\vec{p}_{initial} = \\Sigma \\vec{p}_{final}",
          "name": "Conservation of Momentum"
        },
        {
          "tex": "E_k = \\frac{p^2}{2m}",
          "name": "Kinetic Energy & Momentum"
        }
      ],
      "simulationType": "collision-sim",
      "quiz": [
        {
          "question": "A 0.5 kg ball traveling at 10 m/s hits a wall and rebounds elastically at 10 m/s in 0.05 s. What is the average force exerted by the wall?",
          "options": [
            "100 N",
            "200 N",
            "50 N",
            "0 N"
          ],
          "correct": 1,
          "explanation": "\u0394p = m(v - u) = 0.5 * (-10 - 10) = -10 kg m/s. F = |\u0394p|/\u0394t = 10 / 0.05 = 200 N."
        },
        {
          "question": "In an inelastic collision, which of the following is true?",
          "options": [
            "Both momentum and kinetic energy are conserved",
            "Momentum is conserved, but kinetic energy is not",
            "Kinetic energy is conserved, but momentum is not",
            "Neither is conserved"
          ],
          "correct": 1,
          "explanation": "Linear momentum is always conserved in isolated collisions. Inelastic collisions dissipate kinetic energy into thermal/deformation energy."
        },
        {
          "question": "The area under a force-time graph represents:",
          "options": [
            "Work done",
            "Acceleration",
            "Impulse (Change in momentum)",
            "Power"
          ],
          "correct": 2,
          "explanation": "Integral of F dt is defined as Impulse J = \u0394p."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Momentum conservation, impulse dynamics, and collision classifications in isolated systems.",
        "color": "#ec4899",
        "branches": [
          {
            "id": "b1",
            "title": "Momentum & Impulse",
            "badge": "Dynamics",
            "subconcepts": [
              {
                "name": "Linear Momentum Vector",
                "tag": "Quantity of Motion",
                "desc": "Vector quantity in the direction of velocity.",
                "formula": "p = m v"
              },
              {
                "name": "Impulse-Momentum Theorem",
                "tag": "Force-Time",
                "desc": "Area under force-time graph equals the momentum change.",
                "formula": "J = \u222b F dt = \u0394p"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Conservation of Linear Momentum",
            "badge": "Invariance",
            "subconcepts": [
              {
                "name": "Isolated System Principle",
                "tag": "No Ext Force",
                "desc": "When net external force is zero, total momentum is strictly conserved.",
                "formula": "\u03a3F_ext = 0 \u21d2 \u03a3p_initial = \u03a3p_final"
              },
              {
                "name": "Recoil & Propulsion",
                "tag": "Thrust",
                "desc": "Explosions and rocket propulsion conserve net momentum starting from rest.",
                "formula": "m_1 v_1 + m_2 v_2 = 0"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Collision Classifications",
            "badge": "Energetics",
            "subconcepts": [
              {
                "name": "Elastic Collisions",
                "tag": "Kinetic Conserved",
                "desc": "Both total momentum and total kinetic energy are conserved.",
                "formula": "\u0394E_k = 0, e = 1"
              },
              {
                "name": "Inelastic Collisions",
                "tag": "Energy Dissipated",
                "desc": "Kinetic energy converts to heat/sound/deformation.",
                "formula": "\u0394E_k < 0, 0 < e < 1"
              },
              {
                "name": "Completely Inelastic",
                "tag": "Coalescence",
                "desc": "Bodies stick together moving with common final velocity.",
                "formula": "v_f = (m_1 u_1 + m_2 u_2) / (m_1 + m_2)"
              }
            ]
          },
          {
            "id": "b4",
            "title": "2D Collisions & Vector Resolution",
            "badge": "Planar Vectors",
            "subconcepts": [
              {
                "name": "Component Conservation",
                "tag": "x & y Axes",
                "desc": "Momentum is conserved independently along both x and y directions.",
                "formula": "\u03a3p_ix = \u03a3p_fx, \u03a3p_iy = \u03a3p_fy"
              },
              {
                "name": "Glancing Scattering",
                "tag": "Angles",
                "desc": "Analyzing billiard and particle scattering with trigonometry.",
                "formula": "m_1 u_1 = m_1 v_1 cos\u03b8_1 + m_2 v_2 cos\u03b8_2"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-5",
      "num": 5,
      "title": "Rigid body mechanics",
      "unitId": "unit-a",
      "startPage": 102,
      "endPage": 124,
      "pathCategory": "Motion & Forces",
      "badge": null,
      "duration": "55 min",
      "sections": [
        {
          "num": "5.1",
          "title": "Kinematics of rotational motion",
          "page": 103,
          "desc": "Angular displacement, angular velocity, and angular acceleration relationships."
        },
        {
          "num": "5.2",
          "title": "Rotational equilibrium and Newton's second law",
          "page": 106,
          "desc": "Torque \u03c4 = rF sin\u03b8, moment of inertia I, rotational dynamics \u03c4 = I\u03b1."
        },
        {
          "num": "5.3",
          "title": "Angular momentum",
          "page": 119,
          "desc": "Angular momentum L = I\u03c9 and conservation of angular momentum."
        }
      ],
      "summary": "Rotational dynamics extends translational mechanics to extended bodies using torque, rotational inertia (moment of inertia), and conserved angular momentum.",
      "keyFormulas": [
        {
          "tex": "\\tau = r F \\sin\\theta, \\quad \\Sigma\\tau = I\\alpha",
          "name": "Torque and Rotational 2nd Law"
        },
        {
          "tex": "I = \\Sigma m_i r_i^2 = \\int r^2 dm",
          "name": "Moment of Inertia"
        },
        {
          "tex": "L = I\\omega, \\quad \\Sigma L_i = \\Sigma L_f",
          "name": "Conservation of Angular Momentum"
        },
        {
          "tex": "E_{k,rot} = \\frac{1}{2}I\\omega^2",
          "name": "Rotational Kinetic Energy"
        }
      ],
      "simulationType": "rotation-sim",
      "quiz": [
        {
          "question": "A spinning ice skater pulls her outstretched arms inward. What happens to her moment of inertia and angular velocity?",
          "options": [
            "I increases, \u03c9 decreases",
            "I decreases, \u03c9 increases",
            "Both remain constant",
            "I decreases, \u03c9 remains constant"
          ],
          "correct": 1,
          "explanation": "Mass is distributed closer to the axis of rotation, decreasing I. By conservation of L = I\u03c9, \u03c9 must increase."
        },
        {
          "question": "What is the rotational analogue of mass in translational mechanics?",
          "options": [
            "Torque",
            "Angular momentum",
            "Moment of inertia",
            "Angular acceleration"
          ],
          "correct": 2,
          "explanation": "Moment of inertia I measures a body's resistance to rotational acceleration, analogous to mass m."
        },
        {
          "question": "For a rigid body in static equilibrium, what two conditions must be satisfied?",
          "options": [
            "\u03a3F = 0 and \u03a3\u03c4 = 0",
            "\u03a3p = 0 and \u03a3E = 0",
            "\u03a3v = 0 and \u03a3a = 0",
            "\u03a3W = 0 and \u03a3Q = 0"
          ],
          "correct": 0,
          "explanation": "Translational equilibrium requires net force \u03a3F = 0, and rotational equilibrium requires net torque \u03a3\u03c4 = 0."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Rotational kinematics, torque, moment of inertia, and angular momentum conservation.",
        "color": "#0284c7",
        "branches": [
          {
            "id": "b1",
            "title": "Rotational Kinematics",
            "badge": "Angular Motion",
            "subconcepts": [
              {
                "name": "Angular Variables",
                "tag": "Radians",
                "desc": "Angular displacement \u03b8, velocity \u03c9, and acceleration \u03b1.",
                "formula": "\u03c9 = d\u03b8/dt, \u03b1 = d\u03c9/dt"
              },
              {
                "name": "Linear-Angular Links",
                "tag": "Radius",
                "desc": "Coupling between arc length, tangential velocity, and angular rate.",
                "formula": "s = r\u03b8, v_t = r\u03c9, a_t = r\u03b1"
              },
              {
                "name": "Centripetal Acceleration",
                "tag": "Radial",
                "desc": "Inward acceleration maintaining circular motion.",
                "formula": "a_c = v\u00b2/r = \u03c9\u00b2r"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Torque & Moment of Inertia",
            "badge": "Rotational Inertia",
            "subconcepts": [
              {
                "name": "Torque Vector",
                "tag": "Moment of Force",
                "desc": "Rotational turning effect about an axle.",
                "formula": "\u03c4 = r \u00d7 F = r F sin\u03b8"
              },
              {
                "name": "Moment of Inertia",
                "tag": "Mass Distribution",
                "desc": "Resistance of rigid body to rotational acceleration.",
                "formula": "I = \u03a3 m_i r_i\u00b2 = \u222b r\u00b2 dm"
              },
              {
                "name": "Newton's 2nd Law for Rotation",
                "tag": "\u03c4 = I\u03b1",
                "desc": "Net torque equals moment of inertia times angular acceleration.",
                "formula": "\u03a3\u03c4 = I \u03b1"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Rotational Energy & Momentum",
            "badge": "Conservation",
            "subconcepts": [
              {
                "name": "Rotational Kinetic Energy",
                "tag": "Rolling",
                "desc": "Kinetic energy stored in spinning mass.",
                "formula": "E_rot = \u00bd I \u03c9\u00b2"
              },
              {
                "name": "Rolling Without Slipping",
                "tag": "Combined Motion",
                "desc": "Simultaneous translation and rotation.",
                "formula": "E_tot = \u00bdmv\u00b2 + \u00bdI\u03c9\u00b2"
              },
              {
                "name": "Angular Momentum Conservation",
                "tag": "Spin",
                "desc": "Total angular momentum is conserved when net external torque is zero.",
                "formula": "L = I \u03c9 = const (when \u03a3\u03c4_ext = 0)"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-6",
      "num": 6,
      "title": "Relativity",
      "unitId": "unit-a",
      "startPage": 125,
      "endPage": 154,
      "pathCategory": "Motion & Forces",
      "badge": null,
      "duration": "60 min",
      "sections": [
        {
          "num": "6.1",
          "title": "Reference frames and Lorentz transformations",
          "page": 126,
          "desc": "Inertial reference frames, Galilean failure, Einstein's postulates, and Lorentz coordinate transformations."
        },
        {
          "num": "6.2",
          "title": "Effects of relativity",
          "page": 134,
          "desc": "Time dilation, length contraction, relativistic velocity addition, muon decay confirmation."
        },
        {
          "num": "6.3",
          "title": "Spacetime diagrams",
          "page": 143,
          "desc": "Minkowski diagrams, worldlines, simultaneity, light cones, and invariant spacetime intervals."
        }
      ],
      "summary": "Special relativity reshapes our fundamental concepts of space and time. Light's speed c is invariant in all inertial frames, leading to time dilation, length contraction, and mass-energy equivalence E=mc\u00b2.",
      "keyFormulas": [
        {
          "tex": "\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}",
          "name": "Lorentz Factor"
        },
        {
          "tex": "\\Delta t = \\gamma \\Delta t_0",
          "name": "Time Dilation"
        },
        {
          "tex": "L = \\frac{L_0}{\\gamma}",
          "name": "Length Contraction"
        },
        {
          "tex": "E^2 = (pc)^2 + (m_0 c^2)^2",
          "name": "Relativistic Energy-Momentum"
        }
      ],
      "simulationType": "relativity-sim",
      "quiz": [
        {
          "question": "A spaceship travels past Earth at v = 0.8c. For an observer on Earth, a clock on the spaceship ticks 1 hour. How much proper time \u0394t\u2080 elapsed on the spaceship?",
          "options": [
            "1.67 hours",
            "0.60 hours",
            "1.00 hour",
            "0.80 hours"
          ],
          "correct": 1,
          "explanation": "\u03b3 = 1/\u221a(1 - 0.64) = 1/0.6 = 5/3. Since \u0394t = \u03b3\u0394t\u2080, proper time \u0394t\u2080 = \u0394t / \u03b3 = 1 / (5/3) = 0.60 hours."
        },
        {
          "question": "What is proper length L\u2080 of an object?",
          "options": [
            "The length measured in any moving frame",
            "The length measured in the rest frame of the object",
            "The maximum possible length of the universe",
            "The contracted length at light speed"
          ],
          "correct": 1,
          "explanation": "Proper length is measured by an observer at rest relative to the object."
        },
        {
          "question": "Which experimental observation provided direct real-world evidence for relativistic time dilation?",
          "options": [
            "Photoelectric effect",
            "Atmospheric muon detection at sea level",
            "Young's double slit experiment",
            "Cavendish torsion balance"
          ],
          "correct": 1,
          "explanation": "Muons created in the upper atmosphere have a short half-life (2.2 \u03bcs), yet reach Earth's surface in large numbers due to time dilation."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Special relativity postulates, spacetime coordinates, time dilation, and relativistic mass-energy.",
        "color": "#9333ea",
        "branches": [
          {
            "id": "b1",
            "title": "Einstein's Postulates",
            "badge": "Foundations",
            "subconcepts": [
              {
                "name": "Principle of Relativity",
                "tag": "Postulate 1",
                "desc": "The laws of physics are identical in all inertial reference frames.",
                "formula": "Frames S and S' equivalent"
              },
              {
                "name": "Invariance of c",
                "tag": "Postulate 2",
                "desc": "The speed of light in vacuum is constant for all observers regardless of motion.",
                "formula": "c = 2.998 \u00d7 10\u2078 m/s"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Relativistic Kinematics",
            "badge": "Lorentz Transformation",
            "subconcepts": [
              {
                "name": "Lorentz Factor",
                "tag": "Scaling",
                "desc": "Relativistic dilation multiplier approaching infinity as v \u2192 c.",
                "formula": "\u03b3 = 1 / \u221a(1 - v\u00b2/c\u00b2)"
              },
              {
                "name": "Time Dilation",
                "tag": "Moving Clocks",
                "desc": "Clocks moving relative to an observer run slower.",
                "formula": "\u0394t = \u03b3 \u0394t\u2080"
              },
              {
                "name": "Length Contraction",
                "tag": "Moving Rods",
                "desc": "Spatial length contracts along the direction of motion.",
                "formula": "L = L\u2080 / \u03b3"
              },
              {
                "name": "Relativity of Simultaneity",
                "tag": "Events",
                "desc": "Events simultaneous in one frame are not simultaneous in another.",
                "formula": "\u0394t' = \u03b3(\u0394t - v\u0394x/c\u00b2)"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Relativistic Dynamics & Energy",
            "badge": "Mass-Energy",
            "subconcepts": [
              {
                "name": "Relativistic Momentum",
                "tag": "p = \u03b3mv",
                "desc": "Momentum grows unbounded preventing massive bodies from reaching c.",
                "formula": "p = \u03b3 m v"
              },
              {
                "name": "Rest Energy Equivalence",
                "tag": "E = mc\u00b2",
                "desc": "Inherent mass contains equivalent latent energy.",
                "formula": "E\u2080 = m c\u00b2"
              },
              {
                "name": "Total Energy-Momentum Invariant",
                "tag": "Invariant",
                "desc": "Relates total energy, momentum, and rest mass.",
                "formula": "E\u00b2 = (pc)\u00b2 + (mc\u00b2)\u00b2"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-7",
      "num": 7,
      "title": "Thermal energy transfers",
      "unitId": "unit-b",
      "startPage": 156,
      "endPage": 176,
      "pathCategory": "Energy & Work",
      "badge": null,
      "duration": "45 min",
      "sections": [
        {
          "num": "7.1",
          "title": "Particles, temperature and energy",
          "page": 157,
          "desc": "Microscopic molecular kinetic energy and macroscopic Kelvin temperature."
        },
        {
          "num": "7.2",
          "title": "Specific heat capacity and change of phase",
          "page": 161,
          "desc": "Q = mc\u0394T, latent heats of fusion and vaporisation, heating curves."
        },
        {
          "num": "7.3",
          "title": "Thermal energy transfer",
          "page": 168,
          "desc": "Conduction, convection, thermal radiation, and Stefan-Boltzmann emission."
        }
      ],
      "summary": "Temperature is a measure of the average random translational kinetic energy of molecules. Phase changes occur at constant temperature as latent heat alters intermolecular potential energies.",
      "keyFormulas": [
        {
          "tex": "Q = mc\\Delta T",
          "name": "Specific Heat Capacity"
        },
        {
          "tex": "Q = mL",
          "name": "Specific Latent Heat"
        },
        {
          "tex": "P = e \\sigma A T^4",
          "name": "Stefan-Boltzmann Law"
        }
      ],
      "simulationType": "thermal-sim",
      "quiz": [
        {
          "question": "Why does temperature remain constant during a pure substance's phase change?",
          "options": [
            "Heat energy is no longer being supplied",
            "Energy input is breaking intermolecular bonds rather than increasing kinetic energy",
            "Molecules stop vibrating",
            "Specific heat becomes zero"
          ],
          "correct": 1,
          "explanation": "Thermal energy increases molecular potential energy to overcome bonding, leaving average kinetic energy (temperature) unchanged."
        },
        {
          "question": "If the absolute temperature of a black body is doubled, its radiated power increases by a factor of:",
          "options": [
            "2",
            "4",
            "8",
            "16"
          ],
          "correct": 3,
          "explanation": "By Stefan-Boltzmann law P \u221d T\u2074. When T doubles, P increases by 2\u2074 = 16."
        },
        {
          "question": "How much energy is needed to raise 2 kg of water (c = 4186 J/kg K) from 20\u00b0C to 50\u00b0C?",
          "options": [
            "125 kJ",
            "251 kJ",
            "334 kJ",
            "418 kJ"
          ],
          "correct": 1,
          "explanation": "Q = mc\u0394T = 2 * 4186 * 30 = 251,160 J \u2248 251 kJ."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Microscopic thermal agitation, internal energy, heat capacities, and conduction/convection/radiation.",
        "color": "#ef4444",
        "branches": [
          {
            "id": "b1",
            "title": "Temperature & Internal Energy",
            "badge": "Thermal Equilibrium",
            "subconcepts": [
              {
                "name": "Internal Energy U",
                "tag": "Microscopic",
                "desc": "Sum of random microscopic kinetic and inter-molecular potential energies.",
                "formula": "U = E_k,micro + E_p,micro"
              },
              {
                "name": "Kelvin Temperature Scale",
                "tag": "Absolute Zero",
                "desc": "Proportional to average translational kinetic energy per particle.",
                "formula": "T(K) = \u03b8(\u00b0C) + 273.15"
              },
              {
                "name": "Zeroth Law of Thermodynamics",
                "tag": "Equilibrium",
                "desc": "Defines temperature equality and thermal equilibrium.",
                "formula": "T_A = T_B, T_B = T_C \u21d2 T_A = T_C"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Heat Transport Mechanisms",
            "badge": "Thermal Flux",
            "subconcepts": [
              {
                "name": "Thermal Conduction",
                "tag": "Fourier",
                "desc": "Energy transfer via atomic lattice vibrations and free electrons.",
                "formula": "Q/t = k A \u0394T / L"
              },
              {
                "name": "Convection",
                "tag": "Fluids",
                "desc": "Bulk fluid circulation driven by thermal density changes under gravity.",
                "formula": "Buoyancy: \u03c1_hot < \u03c1_cold"
              },
              {
                "name": "Thermal Radiation",
                "tag": "EM Waves",
                "desc": "Electromagnetic blackbody emission needing no intervening medium.",
                "formula": "P = e \u03c3 A T\u2074"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Heat Capacities & Latent Heats",
            "badge": "Calorimetry",
            "subconcepts": [
              {
                "name": "Specific Heat Capacity c",
                "tag": "Sensible Heat",
                "desc": "Energy required to raise 1 kg of a substance by 1 Kelvin.",
                "formula": "Q = m c \u0394T"
              },
              {
                "name": "Specific Latent Heat L",
                "tag": "Phase Change",
                "desc": "Energy to change phase of 1 kg at constant temperature.",
                "formula": "Q = m L_f (fusion), Q = m L_v (vap)"
              },
              {
                "name": "Calorimetry Conservation",
                "tag": "Exchange",
                "desc": "In an insulated calorimeter, heat lost equals heat gained.",
                "formula": "\u03a3Q_lost = \u03a3Q_gained"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-8",
      "num": 8,
      "title": "The greenhouse effect",
      "unitId": "unit-b",
      "startPage": 177,
      "endPage": 187,
      "pathCategory": "Energy & Work",
      "badge": null,
      "duration": "35 min",
      "sections": [
        {
          "num": "8.1",
          "title": "Radiation from real bodies",
          "page": 178,
          "desc": "Black-body spectrum, Wien's displacement law, emissivity e, and solar constant."
        },
        {
          "num": "8.2",
          "title": "Energy balance of the earth",
          "page": 180,
          "desc": "Albedo \u03b1, atmospheric greenhouse gas absorption (CO\u2082, H\u2082O, CH\u2084), and climate radiative balance."
        }
      ],
      "summary": "The Earth maintains thermal equilibrium by radiating absorbed solar shortwave radiation back into space as longwave infrared radiation, partially trapped by greenhouse gases.",
      "keyFormulas": [
        {
          "tex": "\\lambda_{max} T = 2.898 \\times 10^{-3} \\text{ m K}",
          "name": "Wien's Displacement Law"
        },
        {
          "tex": "S = \\frac{L}{4\\pi d^2} \\approx 1361 \\text{ W/m}^2",
          "name": "Solar Constant"
        },
        {
          "tex": "\\alpha = \\frac{\\text{Reflected Power}}{\\text{Incident Power}}",
          "name": "Albedo"
        }
      ],
      "simulationType": "greenhouse-sim",
      "quiz": [
        {
          "question": "The Sun's surface temperature is about 5800 K. What is the peak emission wavelength according to Wien's law?",
          "options": [
            "500 nm",
            "1000 nm",
            "250 nm",
            "700 nm"
          ],
          "correct": 0,
          "explanation": "\u03bb_max = 2.898 x 10^-3 / 5800 \u2248 5.0 x 10^-7 m = 500 nm (green-visible light)."
        },
        {
          "question": "Which gas is primarily responsible for absorbing longwave terrestrial infrared radiation in Earth's atmosphere?",
          "options": [
            "Nitrogen (N\u2082)",
            "Oxygen (O\u2082)",
            "Carbon dioxide (CO\u2082) and Water vapour (H\u2082O)",
            "Argon (Ar)"
          ],
          "correct": 2,
          "explanation": "Polyatomic molecules like CO\u2082, H\u2082O, and CH\u2084 have vibrational dipoles that absorb IR photons."
        },
        {
          "question": "If Earth's average albedo were to increase from 0.30 to 0.40, the equilibrium surface temperature would:",
          "options": [
            "Increase",
            "Decrease",
            "Remain exactly unchanged",
            "Double"
          ],
          "correct": 1,
          "explanation": "A higher albedo reflects more solar energy back to space, reducing net heat absorbed and lowering surface temperature."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Radiative equilibrium, Stefan-Boltzmann law, planetary albedo, and atmospheric infrared trapping.",
        "color": "#10b981",
        "branches": [
          {
            "id": "b1",
            "title": "Solar Radiation & Blackbody Laws",
            "badge": "Radiant Energy",
            "subconcepts": [
              {
                "name": "Solar Constant",
                "tag": "Flux",
                "desc": "Solar radiant energy incident per second on 1 m\u00b2 at Earth's distance.",
                "formula": "S \u2248 1361 W/m\u00b2"
              },
              {
                "name": "Stefan-Boltzmann Law",
                "tag": "Total Emission",
                "desc": "Total emissive power proportional to fourth power of absolute temperature.",
                "formula": "P = \u03c3 A T\u2074 (\u03c3 = 5.67\u00d710\u207b\u2078)"
              },
              {
                "name": "Wien's Displacement Law",
                "tag": "Peak Wavelength",
                "desc": "Peak emission wavelength inversely proportional to temperature.",
                "formula": "\u03bb_max T = 2.898 \u00d7 10\u207b\u00b3 m\u00b7K"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Planetary Energy Balance",
            "badge": "Equilibrium",
            "subconcepts": [
              {
                "name": "Planetary Albedo \u03b1",
                "tag": "Reflection",
                "desc": "Fraction of incident solar light reflected directly back to space.",
                "formula": "\u03b1 \u2248 0.30 (Earth average)"
              },
              {
                "name": "Effective Radiative Temp",
                "tag": "No-Atmosphere",
                "desc": "Equilibrium temperature of Earth radiating as a naked blackbody.",
                "formula": "T_eff = [(1-\u03b1)S / (4\u03c3)]^(1/4) \u2248 255 K"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Greenhouse Gas Mechanism",
            "badge": "Infrared Trapping",
            "subconcepts": [
              {
                "name": "Shortwave vs Longwave",
                "tag": "Spectral Shift",
                "desc": "Atmosphere is transparent to visible solar light but opaque to terrestrial IR.",
                "formula": "\u03bb_solar ~ 0.5 \u03bcm, \u03bb_earth ~ 10 \u03bcm"
              },
              {
                "name": "Resonant Molecular Absorption",
                "tag": "Vibrational Modes",
                "desc": "Dipole oscillations in CO\u2082, H\u2082O, CH\u2084 absorb and re-emit infrared rays in all directions.",
                "formula": "Downward re-emission warms surface"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-9",
      "num": 9,
      "title": "The gas laws",
      "unitId": "unit-b",
      "startPage": 188,
      "endPage": 204,
      "pathCategory": "Energy & Work",
      "badge": null,
      "duration": "45 min",
      "sections": [
        {
          "num": "9.1",
          "title": "Moles, molar mass and the Avogadro constant",
          "page": 189,
          "desc": "Chemical amount in moles, N_A = 6.02 x 10\u00b2\u00b3 mol\u207b\u00b9, atomic mass units."
        },
        {
          "num": "9.2",
          "title": "Ideal gases",
          "page": 191,
          "desc": "Boyle's, Charles's, and Gay-Lussac's laws combined into pV = nRT."
        },
        {
          "num": "9.3",
          "title": "The Boltzmann equation",
          "page": 199,
          "desc": "Kinetic model of ideal gases, mean molecular kinetic energy E = (3/2)k_B T."
        }
      ],
      "summary": "The kinetic theory of gases models gas pressure as the macroscopic outcome of trillions of elastic molecular collisions against container walls, directly linking pV to average kinetic energy.",
      "keyFormulas": [
        {
          "tex": "pV = nRT = N k_B T",
          "name": "Ideal Gas Equation"
        },
        {
          "tex": "\\bar{E}_k = \\frac{3}{2} k_B T = \\frac{1}{2}m \\bar{c^2}",
          "name": "Molecular Kinetic Energy"
        },
        {
          "tex": "c_{rms} = \\sqrt{\\frac{3k_B T}{m}} = \\sqrt{\\frac{3RT}{M}}",
          "name": "RMS Molecular Speed"
        }
      ],
      "simulationType": "gas-sim",
      "quiz": [
        {
          "question": "An ideal gas in a sealed rigid container at 27\u00b0C is heated to 327\u00b0C. What happens to its pressure?",
          "options": [
            "It increases by a factor of 12",
            "It doubles",
            "It quadruples",
            "It halves"
          ],
          "correct": 1,
          "explanation": "Remember to use Kelvin: T1 = 300 K, T2 = 600 K. Since V is constant, p2/p1 = 600/300 = 2 (pressure doubles)."
        },
        {
          "question": "What is the average kinetic energy of helium atoms at 300 K? (k_B = 1.38 x 10^-23 J/K)",
          "options": [
            "4.14 x 10^-21 J",
            "6.21 x 10^-21 J",
            "2.07 x 10^-21 J",
            "8.28 x 10^-21 J"
          ],
          "correct": 1,
          "explanation": "Ek = 3/2 k_B T = 1.5 * 1.38e-23 * 300 = 6.21 x 10^-21 J."
        },
        {
          "question": "Which of the following is an assumption of the kinetic molecular theory for an ideal gas?",
          "options": [
            "Molecules exert strong attractive intermolecular forces",
            "Collisions between molecules are perfectly elastic",
            "Molecules take up significant volume compared to container",
            "Particles lose energy on wall collisions"
          ],
          "correct": 1,
          "explanation": "Ideal gas collisions are assumed point-like, instantaneous, and perfectly elastic with zero intermolecular potential forces."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Microscopic molecular collisions, kinetic theory of gases, and ideal macroscopic state equations.",
        "color": "#14b8a6",
        "branches": [
          {
            "id": "b1",
            "title": "Empirical Gas Laws",
            "badge": "PVT Relations",
            "subconcepts": [
              {
                "name": "Boyle's Law",
                "tag": "Isothermal",
                "desc": "Pressure varies inversely with volume at constant temperature.",
                "formula": "P \u221d 1/V (PV = const)"
              },
              {
                "name": "Charles's Law",
                "tag": "Isobaric",
                "desc": "Volume varies directly with absolute temperature at constant pressure.",
                "formula": "V \u221d T (V/T = const)"
              },
              {
                "name": "Gay-Lussac's Law",
                "tag": "Isochoric",
                "desc": "Pressure varies directly with absolute temperature at constant volume.",
                "formula": "P \u221d T (P/T = const)"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Ideal Gas State Equation",
            "badge": "State Equation",
            "subconcepts": [
              {
                "name": "Molar Formulation",
                "tag": "PV = nRT",
                "desc": "Relates pressure, volume, moles, and absolute temperature.",
                "formula": "P V = n R T (R = 8.314 J/(mol\u00b7K))"
              },
              {
                "name": "Molecular Formulation",
                "tag": "PV = N k_B T",
                "desc": "Written in terms of total molecule count and Boltzmann's constant.",
                "formula": "P V = N k_B T (k_B = R/N_A)"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Kinetic Molecular Theory",
            "badge": "Microscopic Foundation",
            "subconcepts": [
              {
                "name": "Pressure from Collisions",
                "tag": "Momentum Transfer",
                "desc": "Macroscopic pressure emerges from molecular elastic momentum changes.",
                "formula": "P = \u2153 \u03c1 \u27e8v\u00b2\u27e9 = \u2153 (Nm/V) \u27e8v\u00b2\u27e9"
              },
              {
                "name": "Average Kinetic Energy",
                "tag": "Temperature Measure",
                "desc": "Mean translational kinetic energy depends solely on absolute temperature.",
                "formula": "\u27e8E_k\u27e9 = 3/2 k_B T"
              },
              {
                "name": "Root-Mean-Square Speed",
                "tag": "v_rms",
                "desc": "Effective average speed of gas molecules in thermal equilibrium.",
                "formula": "v_rms = \u221a(3 k_B T / m) = \u221a(3 R T / M)"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-10",
      "num": 10,
      "title": "Thermodynamics",
      "unitId": "unit-b",
      "startPage": 205,
      "endPage": 230,
      "pathCategory": "Energy & Work",
      "badge": null,
      "duration": "55 min",
      "sections": [
        {
          "num": "10.1",
          "title": "Internal energy",
          "page": 206,
          "desc": "Sum of total random kinetic and intermolecular potential energies of particles."
        },
        {
          "num": "10.2",
          "title": "The first law of thermodynamics",
          "page": 211,
          "desc": "\u0394U = Q - W, isothermal, isobaric, isochoric, and adiabatic processes."
        },
        {
          "num": "10.3",
          "title": "The second law of thermodynamics",
          "page": 218,
          "desc": "Entropy, Clausius statement, Kelvin-Planck statement, irreversibility of natural processes."
        },
        {
          "num": "10.4",
          "title": "Heat engines",
          "page": 224,
          "desc": "Carnot cycles, thermal efficiency \u03b7 = 1 - T_C/T_H, refrigerators and heat pumps."
        }
      ],
      "summary": "Thermodynamics governs heat engines and energy conversion. The First Law states energy conservation \u0394U = Q - W, while the Second Law dictates that total entropy of isolated systems always increases.",
      "keyFormulas": [
        {
          "tex": "Q = \\Delta U + W, \\quad W = p\\Delta V",
          "name": "First Law of Thermodynamics"
        },
        {
          "tex": "\\Delta S = \\frac{Q_{rev}}{T}, \\quad \\Delta S_{total} \\ge 0",
          "name": "Second Law & Entropy"
        },
        {
          "tex": "\\eta_{Carnot} = 1 - \\frac{T_C}{T_H}",
          "name": "Maximum Carnot Efficiency"
        }
      ],
      "simulationType": "engine-sim",
      "quiz": [
        {
          "question": "In an adiabatic compression of an ideal gas, which of the following is true?",
          "options": [
            "Q = 0 and temperature rises",
            "\u0394U = 0 and temperature remains constant",
            "W = 0 and pressure is constant",
            "Q > 0 and entropy decreases"
          ],
          "correct": 0,
          "explanation": "Adiabatic means no heat exchange (Q = 0). Compression does work on gas (W_by < 0), so \u0394U = -W > 0, increasing internal energy and temperature."
        },
        {
          "question": "A heat engine operates between reservoirs at 600 K and 300 K. What is the theoretical maximum thermal efficiency?",
          "options": [
            "25%",
            "50%",
            "67%",
            "100%"
          ],
          "correct": 1,
          "explanation": "Carnot efficiency \u03b7 = 1 - (300/600) = 0.50 = 50%."
        },
        {
          "question": "What physical property does the area inside a closed cycle on a p-V indicator diagram represent?",
          "options": [
            "Change in internal energy",
            "Net work done per cycle",
            "Total heat added only",
            "Total entropy change"
          ],
          "correct": 1,
          "explanation": "The cyclic integral \u222e p dV equals the net mechanical work delivered by the gas per cycle."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "First and second laws of thermodynamics, cyclic heat engines, Carnot efficiency, and entropy.",
        "color": "#f97316",
        "branches": [
          {
            "id": "b1",
            "title": "First Law & Boundary Work",
            "badge": "Energy Conservation",
            "subconcepts": [
              {
                "name": "First Law of Thermodynamics",
                "tag": "\u0394U = Q - W",
                "desc": "Change in internal energy equals heat added minus work done by the system.",
                "formula": "\u0394U = Q - W"
              },
              {
                "name": "Boundary Expansion Work",
                "tag": "P-V Area",
                "desc": "Work performed during volume expansion against external pressure.",
                "formula": "W = \u222b P dV"
              },
              {
                "name": "Monatomic Internal Energy",
                "tag": "U(T)",
                "desc": "Internal energy is purely a function of absolute temperature.",
                "formula": "U = 3/2 n R T"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Thermodynamic State Processes",
            "badge": "P-V Paths",
            "subconcepts": [
              {
                "name": "Isothermal Process",
                "tag": "\u0394T = 0",
                "desc": "Constant temperature: \u0394U = 0, work equals heat input.",
                "formula": "W = n R T ln(V_f / V_i), Q = W"
              },
              {
                "name": "Isobaric Process",
                "tag": "\u0394P = 0",
                "desc": "Constant pressure expansion: work is rectangular area P\u0394V.",
                "formula": "W = P \u0394V"
              },
              {
                "name": "Isochoric Process",
                "tag": "\u0394V = 0",
                "desc": "Constant volume: zero work done, all heat goes to internal energy.",
                "formula": "W = 0, Q = \u0394U"
              },
              {
                "name": "Adiabatic Process",
                "tag": "Q = 0",
                "desc": "No heat exchange; expansion cools the gas at the expense of internal energy.",
                "formula": "P V^\u03b3 = const, W = -\u0394U"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Heat Engines & Carnot Cycle",
            "badge": "Efficiency Limit",
            "subconcepts": [
              {
                "name": "Thermal Engine Cycle",
                "tag": "P-V Loop",
                "desc": "Enclosed loop area on P-V diagram equals net work produced per cycle.",
                "formula": "W_net = Q_H - Q_C"
              },
              {
                "name": "Thermal Efficiency",
                "tag": "Output / Input",
                "desc": "Fraction of absorbed high-temperature heat converted into work.",
                "formula": "\u03b7 = W_net / Q_H = 1 - Q_C / Q_H"
              },
              {
                "name": "Carnot Limit",
                "tag": "Reversible Upper Bound",
                "desc": "Maximum theoretical efficiency attainable between two thermal reservoirs.",
                "formula": "\u03b7_Carnot = 1 - T_C / T_H"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Second Law & Entropy",
            "badge": "Arrow of Time",
            "subconcepts": [
              {
                "name": "Entropy Formulation",
                "tag": "Clausius",
                "desc": "Measure of molecular disorder and irreversible energy degradation.",
                "formula": "\u0394S = \u222b dQ_rev / T"
              },
              {
                "name": "Universal Entropy Increase",
                "tag": "2nd Law",
                "desc": "Total entropy of an isolated system never decreases over time.",
                "formula": "\u0394S_universe \u2265 0"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-11",
      "num": 11,
      "title": "Current and circuits",
      "unitId": "unit-b",
      "startPage": 231,
      "endPage": 262,
      "pathCategory": "Electricity",
      "badge": null,
      "duration": "50 min",
      "sections": [
        {
          "num": "11.1",
          "title": "Potential difference, current and resistance",
          "page": 232,
          "desc": "Electric charge Q=It, drift speed v=I/(nAe), Ohm's law V=IR, resistivity \u03c1."
        },
        {
          "num": "11.2",
          "title": "Voltage, power and emf",
          "page": 238,
          "desc": "Electromotive force \u03b5, terminal p.d., internal resistance r, Joule heating P=IV=I\u00b2R."
        },
        {
          "num": "11.3",
          "title": "Resistors in electrical circuits",
          "page": 241,
          "desc": "Kirchhoff's current law (junctions) and voltage law (loops), series and parallel combinations."
        },
        {
          "num": "11.4",
          "title": "Terminal potential difference and the potential divider",
          "page": 254,
          "desc": "V = \u03b5 - Ir, potential divider equation, LDRs, thermistors, and sensor circuits."
        }
      ],
      "summary": "Electric circuits transport electrical energy via moving electrons. Ohm's law, Kirchhoff's laws, internal resistance, and potential dividers form the foundation for electronic circuit analysis.",
      "keyFormulas": [
        {
          "tex": "I = \\frac{\\Delta q}{\\Delta t} = n A v q",
          "name": "Current & Drift Velocity"
        },
        {
          "tex": "V = I R, \\quad R = \\frac{\\rho L}{A}",
          "name": "Ohm's Law & Resistivity"
        },
        {
          "tex": "\\mathcal{E} = I(R + r) = V_{term} + Ir",
          "name": "EMF and Internal Resistance"
        },
        {
          "tex": "V_{out} = V_{in}\\frac{R_2}{R_1 + R_2}",
          "name": "Potential Divider"
        }
      ],
      "simulationType": "circuits-sim",
      "quiz": [
        {
          "question": "A battery of emf 12 V and internal resistance 2 \u03a9 is connected to a 4 \u03a9 resistor. What is the terminal potential difference?",
          "options": [
            "12 V",
            "8 V",
            "6 V",
            "4 V"
          ],
          "correct": 1,
          "explanation": "Current I = \u03b5/(R + r) = 12 / (4 + 2) = 2 A. Terminal pd V = \u03b5 - Ir = 12 - (2 * 2) = 8 V (or I * R = 2 * 4 = 8 V)."
        },
        {
          "question": "Two 10 \u03a9 resistors connected in parallel yield an equivalent resistance of:",
          "options": [
            "20 \u03a9",
            "10 \u03a9",
            "5 \u03a9",
            "2.5 \u03a9"
          ],
          "correct": 2,
          "explanation": "1/R_eq = 1/10 + 1/10 = 2/10 => R_eq = 5 \u03a9."
        },
        {
          "question": "If the length of a copper wire is doubled while its volume remains constant, its electrical resistance:",
          "options": [
            "Doubles",
            "Halves",
            "Quadruples",
            "Remains unchanged"
          ],
          "correct": 2,
          "explanation": "Volume V = A * L = constant. If L doubles, A halves. Since R = \u03c1L/A, R becomes (2L)/(A/2) = 4R."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Electric charge transport, Ohm's law, Kirchhoff's network rules, and circuit power distribution.",
        "color": "#3b82f6",
        "branches": [
          {
            "id": "b1",
            "title": "Current, Potential & Resistance",
            "badge": "Ohmic Fundamentals",
            "subconcepts": [
              {
                "name": "Electric Current",
                "tag": "Charge Flow",
                "desc": "Net rate of charge passage across conductor cross-section.",
                "formula": "I = \u0394q / \u0394t"
              },
              {
                "name": "Drift Velocity",
                "tag": "Microscopic Drift",
                "desc": "Slow average net drift speed of charge carriers in an electric field.",
                "formula": "I = n A v_d q"
              },
              {
                "name": "Ohm's Law & Resistance",
                "tag": "V = IR",
                "desc": "Current is proportional to potential difference across ohmic conductors.",
                "formula": "R = V / I"
              },
              {
                "name": "Resistivity Formula",
                "tag": "Geometry & Material",
                "desc": "Resistance scales with length and inversely with cross-sectional area.",
                "formula": "R = \u03c1 L / A"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Kirchhoff's Network Laws",
            "badge": "Conservation Laws",
            "subconcepts": [
              {
                "name": "Junction Rule (KCL)",
                "tag": "Charge Conservation",
                "desc": "Total current entering any junction must equal total current leaving.",
                "formula": "\u03a3I_in = \u03a3I_out"
              },
              {
                "name": "Loop Rule (KVL)",
                "tag": "Energy Conservation",
                "desc": "Sum of all potential differences and EMFs around any closed loop is zero.",
                "formula": "\u03a3\u2130 = \u03a3(I R)"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Resistor Networks & Dividers",
            "badge": "Circuits",
            "subconcepts": [
              {
                "name": "Series Combination",
                "tag": "Same Current",
                "desc": "Resistances add linearly; total resistance increases.",
                "formula": "R_eq = R\u2081 + R\u2082 + R\u2083"
              },
              {
                "name": "Parallel Combination",
                "tag": "Same Voltage",
                "desc": "Reciprocals add; total equivalent resistance is lower than the lowest branch.",
                "formula": "1/R_eq = 1/R\u2081 + 1/R\u2082"
              },
              {
                "name": "Potential Divider",
                "tag": "Voltage Scaling",
                "desc": "Splits input voltage proportional to resistance for sensors and taps.",
                "formula": "V_out = V_in \u00b7 [R\u2082 / (R\u2081 + R\u2082)]"
              }
            ]
          },
          {
            "id": "b4",
            "title": "EMF, Internal Resistance & Power",
            "badge": "Real Sources",
            "subconcepts": [
              {
                "name": "Terminal Potential Difference",
                "tag": "Internal Drop",
                "desc": "Terminal voltage drops under load due to internal cell resistance r.",
                "formula": "V_terminal = \u2130 - I r"
              },
              {
                "name": "Joule Heating Power",
                "tag": "Dissipation",
                "desc": "Rate of electrical energy conversion into heat.",
                "formula": "P = I V = I\u00b2 R = V\u00b2 / R"
              },
              {
                "name": "Maximum Power Transfer",
                "tag": "Load Matching",
                "desc": "Power delivered to load is maximized when load resistance equals internal resistance.",
                "formula": "P_max when R_load = r"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-12",
      "num": 12,
      "title": "Simple harmonic motion",
      "unitId": "unit-c",
      "startPage": 264,
      "endPage": 285,
      "pathCategory": "Waves & Sound",
      "badge": null,
      "duration": "45 min",
      "sections": [
        {
          "num": "12.1",
          "title": "Simple harmonic oscillations",
          "page": 265,
          "desc": "Definition: restoring acceleration proportional to negative displacement a = -\u03c9\u00b2x."
        },
        {
          "num": "12.2",
          "title": "Details of simple harmonic motion",
          "page": 273,
          "desc": "Kinematics equations: displacement x=x\u2080sin(\u03c9t), velocity v=\u00b1\u03c9\u221a(x\u2080\u00b2-x\u00b2)."
        },
        {
          "num": "12.3",
          "title": "Energy in simple harmonic motion",
          "page": 279,
          "desc": "Continuous interchange of kinetic energy Ek and potential energy Ep; constant total energy."
        },
        {
          "num": "12.4",
          "title": "More about energy in SHM",
          "page": 281,
          "desc": "Energy graphs with respect to displacement and time."
        }
      ],
      "summary": "SHM occurs whenever a restoring force proportional to displacement pulls an oscillator toward equilibrium. Total energy remains constant as energy shifts back and forth between kinetic and potential forms.",
      "keyFormulas": [
        {
          "tex": "a = -\\omega^2 x",
          "name": "Defining SHM Equation"
        },
        {
          "tex": "x = x_0 \\cos(\\omega t), \\quad v = -x_0 \\omega \\sin(\\omega t)",
          "name": "SHM Kinematics"
        },
        {
          "tex": "v = \\pm \\omega \\sqrt{x_0^2 - x^2}",
          "name": "Velocity vs Position"
        },
        {
          "tex": "E_{total} = \\frac{1}{2}m\\omega^2 x_0^2",
          "name": "Total Oscillator Energy"
        },
        {
          "tex": "T = 2\\pi \\sqrt{\\frac{m}{k}} \\quad \\text{and} \\quad T = 2\\pi \\sqrt{\\frac{L}{g}}",
          "name": "Periods of Mass-Spring and Pendulum"
        }
      ],
      "simulationType": "shm-sim",
      "quiz": [
        {
          "question": "At which point in a simple harmonic oscillation is the speed of the mass greatest?",
          "options": [
            "At maximum positive displacement",
            "At maximum negative displacement",
            "At the equilibrium position (x = 0)",
            "Speed is constant everywhere"
          ],
          "correct": 2,
          "explanation": "At x = 0, all energy is kinetic, so velocity is at its maximum v_max = \u03c9x\u2080."
        },
        {
          "question": "If the amplitude of an SHM oscillator is doubled, what happens to its total mechanical energy?",
          "options": [
            "It doubles",
            "It quadruples",
            "It halves",
            "It stays the same"
          ],
          "correct": 1,
          "explanation": "E_total = 1/2 m \u03c9\u00b2 x\u2080\u00b2. Energy is proportional to the square of amplitude (2\u00b2 = 4)."
        },
        {
          "question": "What is the phase difference between displacement and acceleration in SHM?",
          "options": [
            "0 rad",
            "\u03c0/2 rad (90\u00b0)",
            "\u03c0 rad (180\u00b0)",
            "2\u03c0 rad"
          ],
          "correct": 2,
          "explanation": "Because a = -\u03c9\u00b2x, acceleration is directly anti-phase with displacement (phase difference \u03c0 radians)."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Simple harmonic motion dynamics, restorative force kinematics, and resonant systems.",
        "color": "#06b6d4",
        "branches": [
          {
            "id": "b1",
            "title": "Defining Conditions of SHM",
            "badge": "Linear Restoring",
            "subconcepts": [
              {
                "name": "Defining Equation",
                "tag": "a = -\u03c9\u00b2x",
                "desc": "Acceleration is directly proportional and opposite to displacement from equilibrium.",
                "formula": "a = -\u03c9\u00b2 x"
              },
              {
                "name": "Angular Frequency",
                "tag": "Cycles",
                "desc": "Rate of phase rotation related to period and frequency.",
                "formula": "\u03c9 = 2\u03c0f = 2\u03c0 / T"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Kinematic Solutions of SHM",
            "badge": "Harmonic Functions",
            "subconcepts": [
              {
                "name": "Displacement Function",
                "tag": "Cosine",
                "desc": "Sinusoidal oscillation about equilibrium center.",
                "formula": "x(t) = A cos(\u03c9t)"
              },
              {
                "name": "Velocity Function",
                "tag": "Phase Shift \u03c0/2",
                "desc": "Derivative of displacement; leads displacement by 90\u00b0.",
                "formula": "v(t) = \u00b1\u03c9 \u221a(A\u00b2 - x\u00b2)"
              },
              {
                "name": "Peak Kinematic Values",
                "tag": "Extrema",
                "desc": "Maximum speed occurs at center; maximum acceleration at endpoints.",
                "formula": "v_max = \u03c9 A, a_max = \u03c9\u00b2 A"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Classic Harmonic Oscillators",
            "badge": "Physical Systems",
            "subconcepts": [
              {
                "name": "Mass-Spring System",
                "tag": "Inertia vs Stiffness",
                "desc": "Period depends only on oscillating mass and spring constant k.",
                "formula": "T = 2\u03c0 \u221a(m / k)"
              },
              {
                "name": "Simple Gravity Pendulum",
                "tag": "Small Angles",
                "desc": "Period depends only on length and local gravitational acceleration.",
                "formula": "T = 2\u03c0 \u221a(L / g)"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Energy Interchange & Resonance",
            "badge": "Energetics",
            "subconcepts": [
              {
                "name": "Total Energy Conservation",
                "tag": "E = Ek + Ep",
                "desc": "Continuous lossless interchange between kinetic and elastic/gravitational potential energy.",
                "formula": "E_total = \u00bd m \u03c9\u00b2 A\u00b2 = \u00bd k A\u00b2"
              },
              {
                "name": "Damped Oscillations",
                "tag": "Energy Dissipation",
                "desc": "Frictional resistance decreases amplitude over time (light, critical, overdamped).",
                "formula": "A(t) = A\u2080 e^(-\u03b3t)"
              },
              {
                "name": "Resonance Phenomenon",
                "tag": "Driving Frequency",
                "desc": "Dramatic surge in amplitude when driving frequency matches natural resonant frequency.",
                "formula": "f_drive \u2248 f_natural \u21d2 Max Amplitude"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-13",
      "num": 13,
      "title": "The wave model",
      "unitId": "unit-c",
      "startPage": 286,
      "endPage": 300,
      "pathCategory": "Waves & Sound",
      "badge": null,
      "duration": "40 min",
      "sections": [
        {
          "num": "13.1",
          "title": "Mechanical pulses and waves",
          "page": 287,
          "desc": "Energy transfer without bulk net matter transfer, wave pulses."
        },
        {
          "num": "13.2",
          "title": "Transverse and longitudinal waves",
          "page": 290,
          "desc": "Oscillation perpendicular vs parallel to wave propagation direction."
        },
        {
          "num": "13.3",
          "title": "Electromagnetic waves",
          "page": 298,
          "desc": "Full spectrum from radio to gamma rays; speed of light c = 3.0 x 10\u2078 m/s."
        },
        {
          "num": "13.4",
          "title": "Waves extension",
          "page": 299,
          "desc": "Polarisation of transverse waves, Malus's law I = I\u2080 cos\u00b2\u03b8."
        }
      ],
      "summary": "Waves transmit energy through space without permanently displacing matter. Transverse waves (including light) oscillate perpendicular to travel and can be polarised; longitudinal waves oscillate parallel.",
      "keyFormulas": [
        {
          "tex": "v = f \\lambda = \\frac{\\lambda}{T}",
          "name": "Wave Equation"
        },
        {
          "tex": "I \\propto A^2, \\quad I \\propto \\frac{1}{r^2}",
          "name": "Intensity Relationships"
        },
        {
          "tex": "I = I_0 \\cos^2\\theta",
          "name": "Malus's Law"
        }
      ],
      "simulationType": "wave-sim",
      "quiz": [
        {
          "question": "Which of the following waves CANNOT be polarised?",
          "options": [
            "Visible light",
            "Sound waves in air",
            "Microwaves",
            "X-rays"
          ],
          "correct": 1,
          "explanation": "Only transverse waves can be polarised. Sound in air is longitudinal (compressions and rarefactions)."
        },
        {
          "question": "An unpolarised light beam of intensity I\u2080 passes through a perfect linear polariser. The transmitted intensity is:",
          "options": [
            "I\u2080",
            "I\u2080 / 2",
            "I\u2080 / 4",
            "0"
          ],
          "correct": 1,
          "explanation": "A polariser cuts average unpolarised light intensity by half (average of cos\u00b2\u03b8 is 1/2)."
        },
        {
          "question": "A sound wave of frequency 680 Hz travels at 340 m/s in air. Its wavelength is:",
          "options": [
            "2.0 m",
            "1.0 m",
            "0.5 m",
            "0.25 m"
          ],
          "correct": 2,
          "explanation": "\u03bb = v / f = 340 / 680 = 0.5 m."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Mechanics of wave energy propagation, transverse/longitudinal modes, and inverse-square intensity.",
        "color": "#0ea5e9",
        "branches": [
          {
            "id": "b1",
            "title": "Wave Propagation Fundamentals",
            "badge": "Disturbance Transfer",
            "subconcepts": [
              {
                "name": "Energy Without Mass Transfer",
                "tag": "Propagation",
                "desc": "Disturbance carries energy and momentum through a medium while particles oscillate locally.",
                "formula": "Net particle displacement = 0"
              },
              {
                "name": "Universal Wave Equation",
                "tag": "v = f\u03bb",
                "desc": "Speed equals frequency multiplied by spatial wavelength.",
                "formula": "v = f \u03bb = \u03bb / T"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Transverse vs Longitudinal Modes",
            "badge": "Polarity",
            "subconcepts": [
              {
                "name": "Transverse Waves",
                "tag": "Perpendicular",
                "desc": "Particle oscillations are perpendicular to energy propagation (e.g. Light, S-waves).",
                "formula": "Can be polarized"
              },
              {
                "name": "Longitudinal Waves",
                "tag": "Parallel",
                "desc": "Oscillations parallel to wave motion creating compressions and rarefactions (e.g. Sound, P-waves).",
                "formula": "Cannot be polarized"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Wavefronts, Rays & Phase",
            "badge": "Spatial Geometry",
            "subconcepts": [
              {
                "name": "Wavefront Geometry",
                "tag": "Surfaces",
                "desc": "Locus of points oscillating with identical phase; rays are perpendicular to wavefronts.",
                "formula": "Ray \u22a5 Wavefront"
              },
              {
                "name": "Phase Difference",
                "tag": "Cycle Fraction",
                "desc": "Angular phase lead/lag between two points separated by distance \u0394x.",
                "formula": "\u0394\u03d5 = (2\u03c0 / \u03bb) \u0394x"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Wave Power & Intensity",
            "badge": "Inverse Square",
            "subconcepts": [
              {
                "name": "Wave Intensity Definition",
                "tag": "Power Density",
                "desc": "Power incident perpendicularly per unit surface area.",
                "formula": "I = P / A"
              },
              {
                "name": "Inverse-Square Falloff",
                "tag": "Spherical Radiation",
                "desc": "Intensity drops with squared distance from an isotropic point source.",
                "formula": "I \u221d 1 / r\u00b2 (A = 4\u03c0r\u00b2)"
              },
              {
                "name": "Amplitude Relation",
                "tag": "I \u221d A\u00b2",
                "desc": "Wave energy density scales with the square of wave amplitude.",
                "formula": "I \u221d A\u00b2"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-14",
      "num": 14,
      "title": "Wave phenomena",
      "unitId": "unit-c",
      "startPage": 301,
      "endPage": 328,
      "pathCategory": "Waves & Sound",
      "badge": null,
      "duration": "50 min",
      "sections": [
        {
          "num": "14.1",
          "title": "Reflection and refraction",
          "page": 302,
          "desc": "Snell's law n\u2081 sin\u03b8\u2081 = n\u2082 sin\u03b8\u2082, critical angle and total internal reflection."
        },
        {
          "num": "14.2",
          "title": "The principle of superposition",
          "page": 308,
          "desc": "Constructive and destructive wave addition, path difference conditions."
        },
        {
          "num": "14.3",
          "title": "Diffraction and interference",
          "page": 311,
          "desc": "Wave spreading through apertures, Young's double-slit experiment s = \u03bbD/d."
        },
        {
          "num": "14.4",
          "title": "Single-slit diffraction",
          "page": 318,
          "desc": "First diffraction minimum angle \u03b8 = \u03bb/b."
        },
        {
          "num": "14.5",
          "title": "Multiple slits",
          "page": 322,
          "desc": "Diffraction gratings d sin\u03b8 = n\u03bb, Rayleigh criterion for optical resolution."
        }
      ],
      "summary": "When waves encounter obstacles or overlap, they exhibit refraction, total internal reflection, diffraction, and interference patterns, proving light's wave nature.",
      "keyFormulas": [
        {
          "tex": "\\frac{n_1}{n_2} = \\frac{\\sin\\theta_2}{\\sin\\theta_1} = \\frac{v_2}{v_1}",
          "name": "Snell's Law"
        },
        {
          "tex": "\\sin\\theta_c = \\frac{n_2}{n_1}",
          "name": "Critical Angle for TIR"
        },
        {
          "tex": "s = \\frac{\\lambda D}{d}",
          "name": "Double-Slit Fringe Spacing"
        },
        {
          "tex": "\\theta = \\frac{\\lambda}{b}",
          "name": "Single-Slit First Minimum"
        },
        {
          "tex": "d\\sin\\theta = n\\lambda",
          "name": "Diffraction Grating Equation"
        }
      ],
      "simulationType": "optics-sim",
      "quiz": [
        {
          "question": "Light in glass (n = 1.50) approaches an interface with air (n = 1.00). What is the critical angle for total internal reflection?",
          "options": [
            "41.8\u00b0",
            "48.6\u00b0",
            "60.0\u00b0",
            "30.0\u00b0"
          ],
          "correct": 0,
          "explanation": "sin \u03b8_c = 1 / 1.50 = 0.6667 => \u03b8_c = arcsin(0.6667) \u2248 41.8\u00b0."
        },
        {
          "question": "In a Young's double-slit experiment, if the distance between the two slits d is doubled, the fringe separation s will:",
          "options": [
            "Double",
            "Halve",
            "Quadruple",
            "Remain the same"
          ],
          "correct": 1,
          "explanation": "Fringe spacing s = \u03bbD/d. Doubling d halves the fringe separation."
        },
        {
          "question": "For destructive interference between two coherent waves of wavelength \u03bb, the path difference must be:",
          "options": [
            "n\u03bb (integer multiples)",
            "(n + 1/2)\u03bb (half-integer multiples)",
            "n\u03bb / 4",
            "Independent of wavelength"
          ],
          "correct": 1,
          "explanation": "Destructive interference occurs when waves arrive 180\u00b0 out of phase, requiring a path difference of (n + 1/2)\u03bb."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Classical wave boundary phenomena: reflection, refraction, single/double slit diffraction, and polarization.",
        "color": "#8b5cf6",
        "branches": [
          {
            "id": "b1",
            "title": "Reflection & Refraction",
            "badge": "Boundary Laws",
            "subconcepts": [
              {
                "name": "Law of Reflection",
                "tag": "Specular",
                "desc": "Angle of incidence equals angle of reflection measured from surface normal.",
                "formula": "\u03b8_i = \u03b8_r"
              },
              {
                "name": "Snell's Law of Refraction",
                "tag": "Optical Density",
                "desc": "Wave bending at interface caused by change in propagation speed.",
                "formula": "n\u2081 sin\u03b8\u2081 = n\u2082 sin\u03b8\u2082 (n = c/v)"
              },
              {
                "name": "Total Internal Reflection",
                "tag": "Critical Angle",
                "desc": "Light trapped in dense medium when incident angle exceeds critical angle.",
                "formula": "sin\u03b8_c = n\u2082 / n\u2081 (n\u2081 > n\u2082)"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Diffraction Effects",
            "badge": "Wave Bending",
            "subconcepts": [
              {
                "name": "Huygens' Principle",
                "tag": "Secondary Wavelets",
                "desc": "Every point on a wavefront acts as a source of spherical secondary wavelets.",
                "formula": "Diffraction greatest when \u03bb ~ slit width b"
              },
              {
                "name": "Single Slit Diffraction Minimum",
                "tag": "First Dark Fringe",
                "desc": "Angular position of first diffraction intensity zero.",
                "formula": "\u03b8 = \u03bb / b"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Interference & Superposition",
            "badge": "Double Slit",
            "subconcepts": [
              {
                "name": "Linear Superposition",
                "tag": "Summation",
                "desc": "Net wave displacement equals the algebraic sum of individual component displacements.",
                "formula": "y_net = y\u2081 + y\u2082"
              },
              {
                "name": "Young's Double Slit Fringes",
                "tag": "Interference",
                "desc": "Fringe spacing produced by two coherent sources separated by distance d.",
                "formula": "s = \u03bb D / d"
              },
              {
                "name": "Diffraction Gratings",
                "tag": "Sharp Maxima",
                "desc": "Thousands of parallel slits creating crisp spectral lines.",
                "formula": "d sin\u03b8 = n \u03bb"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Polarization",
            "badge": "Transverse Vector",
            "subconcepts": [
              {
                "name": "Malus's Law",
                "tag": "Polaroid Analyzer",
                "desc": "Transmitted intensity of polarized light through an analyzer oriented at angle \u03b8.",
                "formula": "I = I\u2080 cos\u00b2\u03b8"
              },
              {
                "name": "Brewster's Angle",
                "tag": "Complete Polarization",
                "desc": "Angle where reflected light is 100% linearly polarized.",
                "formula": "tan\u03b8_B = n\u2082 / n\u2081"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-15",
      "num": 15,
      "title": "Standing waves and resonance",
      "unitId": "unit-c",
      "startPage": 329,
      "endPage": 345,
      "pathCategory": "Waves & Sound",
      "badge": null,
      "duration": "45 min",
      "sections": [
        {
          "num": "15.1",
          "title": "Standing waves",
          "page": 330,
          "desc": "Superposition of two identical counter-propagating waves, nodes and antinodes."
        },
        {
          "num": "15.2",
          "title": "Standing waves on strings",
          "page": 331,
          "desc": "Fixed boundary conditions, fundamental frequency and harmonic series f_n = n(v/2L)."
        },
        {
          "num": "15.3",
          "title": "Standing waves in pipes",
          "page": 334,
          "desc": "Open pipes (all harmonics) vs closed-ended pipes (odd harmonics only)."
        },
        {
          "num": "15.4",
          "title": "Resonance and damping",
          "page": 340,
          "desc": "Forced oscillations, resonant frequency peak, light/critical/heavy damping, Q factor."
        }
      ],
      "summary": "Standing waves trap energy between boundaries, forming static nodes (zero displacement) and antinodes (maximum displacement). Resonance occurs when driving frequency matches natural frequency.",
      "keyFormulas": [
        {
          "tex": "f_n = n \\frac{v}{2L} \\quad (n=1,2,3...) ",
          "name": "Strings & Open Pipes"
        },
        {
          "tex": "f_n = n \\frac{v}{4L} \\quad (n=1,3,5...) ",
          "name": "Closed Pipes (Odd Harmonics)"
        },
        {
          "tex": "Q = 2\\pi \\frac{\\text{Energy stored}}{\\text{Energy lost per cycle}}",
          "name": "Resonance Quality Factor"
        }
      ],
      "simulationType": "standing-wave-sim",
      "quiz": [
        {
          "question": "A closed pipe of length 0.85 m has its fundamental frequency at speed of sound 340 m/s. What is f\u2081?",
          "options": [
            "100 Hz",
            "200 Hz",
            "300 Hz",
            "400 Hz"
          ],
          "correct": 0,
          "explanation": "For closed pipe, fundamental \u03bb\u2081 = 4L = 4 * 0.85 = 3.4 m. f\u2081 = v / \u03bb\u2081 = 340 / 3.4 = 100 Hz."
        },
        {
          "question": "What is the distance between two consecutive nodes in any standing wave?",
          "options": [
            "\u03bb",
            "\u03bb / 2",
            "\u03bb / 4",
            "2\u03bb"
          ],
          "correct": 1,
          "explanation": "Distance between adjacent nodes is half a wavelength (\u03bb/2)."
        },
        {
          "question": "At resonance, the amplitude of forced oscillation is maximized when the driving frequency is:",
          "options": [
            "Zero",
            "Close to the natural frequency of the system",
            "Infinitely high",
            "Twice the damping frequency"
          ],
          "correct": 1,
          "explanation": "Resonance occurs when driving frequency equals the system's natural frequency."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Standing waves, boundary condition quantization, nodes/antinodes, and resonance in pipes and strings.",
        "color": "#6366f1",
        "branches": [
          {
            "id": "b1",
            "title": "Standing Wave Formation",
            "badge": "Superposition",
            "subconcepts": [
              {
                "name": "Counter-Propagating Superposition",
                "tag": "No Net Flow",
                "desc": "Interference of two identical waves traveling in opposite directions.",
                "formula": "y = 2A sin(kx) cos(\u03c9t)"
              },
              {
                "name": "Comparison with Traveling Waves",
                "tag": "Differences",
                "desc": "Standing waves store energy locally without forward transport; phase is uniform between nodes.",
                "formula": "Phase flips by \u03c0 at nodes"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Nodes & Antinodes",
            "badge": "Interference Points",
            "subconcepts": [
              {
                "name": "Displacement Nodes",
                "tag": "Zero Amplitude",
                "desc": "Points of continuous destructive interference remaining stationary at all times.",
                "formula": "x_node = n(\u03bb/2)"
              },
              {
                "name": "Displacement Antinodes",
                "tag": "Max Amplitude",
                "desc": "Points oscillating with maximum amplitude 2A midway between nodes.",
                "formula": "Distance node-to-antinode = \u03bb/4"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Resonant Boundary Harmonics",
            "badge": "Quantized Modes",
            "subconcepts": [
              {
                "name": "Fixed String / Open-Open Pipe",
                "tag": "All Harmonics",
                "desc": "Both ends constrained (nodes on string, antinodes in open pipe): integer multiples of fundamental.",
                "formula": "\u03bb_n = 2L / n, f_n = n f\u2081 (n = 1,2,3...)"
              },
              {
                "name": "Closed-Open Pipe Resonator",
                "tag": "Odd Harmonics",
                "desc": "Closed end is displacement node, open end is antinode: produces only odd harmonics.",
                "formula": "\u03bb_n = 4L / n, f_n = n f\u2081 (n = 1,3,5...)"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Acoustic Resonance Applications",
            "badge": "Instruments",
            "subconcepts": [
              {
                "name": "String Tension Wave Speed",
                "tag": "Speed",
                "desc": "Speed of transverse wave on string of tension T and mass per unit length \u03bc.",
                "formula": "v = \u221a(T / \u03bc)"
              },
              {
                "name": "Resonance Chamber Tuning",
                "tag": "Acoustics",
                "desc": "Adjusting pipe or string length to match driving source for maximum acoustic amplification.",
                "formula": "f\u2081 = v / (2L)"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-16",
      "num": 16,
      "title": "The Doppler effect",
      "unitId": "unit-c",
      "startPage": 346,
      "endPage": 356,
      "pathCategory": "Waves & Sound",
      "badge": null,
      "duration": "35 min",
      "sections": [
        {
          "num": "16.1",
          "title": "The Doppler effect at low speeds",
          "page": 347,
          "desc": "Frequency shift due to relative source-observer motion, moving source vs moving observer."
        },
        {
          "num": "16.2",
          "title": "The Doppler effect for sound",
          "page": 351,
          "desc": "Acoustic equations, astronomical light redshift \u0394f/f \u2248 v/c, cosmic expansion."
        }
      ],
      "summary": "Relative motion between a wave source and observer changes observed frequency: higher frequency when approaching (blue shift), lower frequency when receding (redshift).",
      "keyFormulas": [
        {
          "tex": "f' = f \\left(\\frac{v}{v \\pm v_s}\\right)",
          "name": "Moving Sound Source"
        },
        {
          "tex": "f' = f \\left(\\frac{v \\pm u_0}{v}\\right)",
          "name": "Moving Observer"
        },
        {
          "tex": "\\frac{\\Delta f}{f} = \\frac{\\Delta \\lambda}{\\lambda} \\approx \\frac{v}{c}",
          "name": "Cosmological Redshift"
        }
      ],
      "simulationType": "doppler-sim",
      "quiz": [
        {
          "question": "As an ambulance with its siren blaring drives directly away from you, the pitch you hear is:",
          "options": [
            "Higher than when stationary",
            "Lower than when stationary",
            "The same",
            "Infinitely high"
          ],
          "correct": 1,
          "explanation": "When receding, wave crests are stretched further apart, lowering the received frequency (pitch)."
        },
        {
          "question": "Light from a distant galaxy is redshifted. This indicates that the galaxy is:",
          "options": [
            "Moving towards Earth",
            "Moving away from Earth",
            "Undergoing gravitational collapse",
            "Cooling down"
          ],
          "correct": 1,
          "explanation": "Redshift means observed wavelength is longer (frequency lower), demonstrating the galaxy is moving away from us."
        },
        {
          "question": "An emergency siren emits 400 Hz. Speed of sound is 340 m/s. The vehicle approaches at 34 m/s. The observed frequency is:",
          "options": [
            "360 Hz",
            "400 Hz",
            "444 Hz",
            "480 Hz"
          ],
          "correct": 2,
          "explanation": "f' = f * v / (v - v_s) = 400 * 340 / (340 - 34) = 400 * 340 / 306 \u2248 444.4 Hz."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Doppler effect in acoustic media and relativistic electromagnetic radiation, with cosmic applications.",
        "color": "#d946ef",
        "branches": [
          {
            "id": "b1",
            "title": "Acoustic Doppler (Sound in Medium)",
            "badge": "Pressure Waves",
            "subconcepts": [
              {
                "name": "Moving Source Approaching",
                "tag": "Compressed Waves",
                "desc": "Wavefronts bunch together ahead of the source producing higher perceived frequency.",
                "formula": "f' = f [v / (v - v_s)]"
              },
              {
                "name": "Moving Source Receding",
                "tag": "Stretched Waves",
                "desc": "Wavefronts spread apart behind the source producing lower perceived frequency.",
                "formula": "f' = f [v / (v + v_s)]"
              },
              {
                "name": "Moving Observer",
                "tag": "Relative Interception",
                "desc": "Observer intercepts wavefronts at altered relative speed.",
                "formula": "f' = f [(v \u00b1 v_o) / v]"
              },
              {
                "name": "Shock Waves & Mach Cone",
                "tag": "Supersonic",
                "desc": "Constructive wave superposition when source speed exceeds wave speed in medium.",
                "formula": "sin\u03b8_Mach = v_sound / v_source"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Optical Relativistic Doppler",
            "badge": "Light & EM",
            "subconcepts": [
              {
                "name": "Low-Speed Approximation",
                "tag": "v << c",
                "desc": "Fractional frequency shift equals fractional velocity.",
                "formula": "\u0394f / f \u2248 \u0394\u03bb / \u03bb \u2248 v / c"
              },
              {
                "name": "Exact Relativistic Equation",
                "tag": "Lorentz Invariant",
                "desc": "Incorporates time dilation for high-velocity relativistic sources.",
                "formula": "f' = f \u221a((1 - v/c) / (1 + v/c))"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Cosmological & Radar Applications",
            "badge": "Astrophysics",
            "subconcepts": [
              {
                "name": "Cosmological Redshift",
                "tag": "Expanding Space",
                "desc": "Spectral lines from distant galaxies shift toward red proving universe expansion.",
                "formula": "z = \u0394\u03bb / \u03bb_0 = v / c"
              },
              {
                "name": "Hubble's Law",
                "tag": "Expansion Rate",
                "desc": "Recession velocity scales directly with cosmological distance.",
                "formula": "v = H\u2080 d"
              },
              {
                "name": "Doppler Radar & Echocardiography",
                "tag": "Medical / Radar",
                "desc": "Bouncing microwaves or ultrasound off moving targets to measure instantaneous velocity.",
                "formula": "v = (c \u0394f) / (2 f\u2080)"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-17",
      "num": 17,
      "title": "Gravitation",
      "unitId": "unit-d",
      "startPage": 358,
      "endPage": 383,
      "pathCategory": "Electricity",
      "badge": null,
      "duration": "50 min",
      "sections": [
        {
          "num": "17.1",
          "title": "Newton's law of gravitation",
          "page": 359,
          "desc": "Universal inverse-square law F = G m\u2081m\u2082 / r\u00b2, gravitational field strength g = F/m."
        },
        {
          "num": "17.2",
          "title": "Gravitational potential and energy",
          "page": 366,
          "desc": "Potential V = -GM/r, potential energy Ep = -GMm/r, zero reference at infinity."
        },
        {
          "num": "17.3",
          "title": "Motion in a gravitational field",
          "page": 373,
          "desc": "Orbital speed v = \u221a(GM/r), Kepler's third law T\u00b2 \u221d r\u00b3, escape velocity v_esc = \u221a(2GM/r)."
        }
      ],
      "summary": "Every mass in the universe attracts every other mass. The gravitational field is conservative, enabling stable planetary orbits, geostationary satellites, and escape velocities.",
      "keyFormulas": [
        {
          "tex": "F_g = G\\frac{m_1 m_2}{r^2}",
          "name": "Newton's Universal Gravitation"
        },
        {
          "tex": "g = \\frac{GM}{r^2}, \\quad V_g = -\\frac{GM}{r}",
          "name": "Field Strength & Potential"
        },
        {
          "tex": "v_{orbit} = \\sqrt{\\frac{GM}{r}}, \\quad v_{esc} = \\sqrt{\\frac{2GM}{r}}",
          "name": "Orbital & Escape Speeds"
        },
        {
          "tex": "T^2 = \\frac{4\\pi^2}{GM} r^3",
          "name": "Kepler's Third Law"
        }
      ],
      "simulationType": "orbit-sim",
      "quiz": [
        {
          "question": "If the distance between two masses is tripled, the gravitational attraction between them becomes:",
          "options": [
            "1/3 as strong",
            "1/6 as strong",
            "1/9 as strong",
            "3 times stronger"
          ],
          "correct": 2,
          "explanation": "By inverse-square law: F \u221d 1/r\u00b2. Tripling r divides force by 3\u00b2 = 9."
        },
        {
          "question": "Why is gravitational potential defined to be negative everywhere in space?",
          "options": [
            "Gravity is an attractive force and potential is set to zero at infinity",
            "Mass is always negative in relativistic equations",
            "Gravitational force does negative work on falling objects",
            "It is purely a historical convention without physical meaning"
          ],
          "correct": 0,
          "explanation": "Zero potential is chosen at r = \u221e. An attractive field pulls objects inward, requiring work to separate them back to infinity."
        },
        {
          "question": "What is the ratio of escape velocity from Earth's surface to orbital velocity in low Earth orbit?",
          "options": [
            "1.0",
            "\u221a2 \u2248 1.414",
            "2.0",
            "4.0"
          ],
          "correct": 1,
          "explanation": "v_esc = \u221a(2GM/r) and v_orbit = \u221a(GM/r), so v_esc / v_orbit = \u221a2."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Newton's universal gravitation, conservative gravitational fields, potential energy, and Keplerian orbits.",
        "color": "#3b82f6",
        "branches": [
          {
            "id": "b1",
            "title": "Universal Gravitation Law",
            "badge": "Inverse Square",
            "subconcepts": [
              {
                "name": "Newton's Gravitational Law",
                "tag": "Universal Force",
                "desc": "Attractive central force between any two point masses.",
                "formula": "F = G m\u2081 m\u2082 / r\u00b2"
              },
              {
                "name": "Gravitational Field Strength",
                "tag": "Acceleration g",
                "desc": "Gravitational force per unit test mass at distance r from primary mass M.",
                "formula": "g = F / m = G M / r\u00b2"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Gravitational Potential & Escape",
            "badge": "Potential Well",
            "subconcepts": [
              {
                "name": "Gravitational Potential V_g",
                "tag": "Work from Infinity",
                "desc": "Work done per unit mass bringing a test mass from infinity to distance r.",
                "formula": "V_g = -G M / r"
              },
              {
                "name": "Gravitational Potential Energy",
                "tag": "Negative Well",
                "desc": "Negative scalar energy representing bound gravitational state.",
                "formula": "E_p = -G M m / r"
              },
              {
                "name": "Escape Velocity",
                "tag": "Kinetic Threshold",
                "desc": "Minimum launch speed to escape to infinity with zero residual kinetic energy.",
                "formula": "v_esc = \u221a(2 G M / R)"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Keplerian Orbital Mechanics",
            "badge": "Celestial Orbits",
            "subconcepts": [
              {
                "name": "Orbital Speed Balance",
                "tag": "Centripetal Balance",
                "desc": "Gravitational attraction provides exact required centripetal acceleration.",
                "formula": "v_orb = \u221a(G M / r)"
              },
              {
                "name": "Kepler's Third Law",
                "tag": "T\u00b2 \u221d r\u00b3",
                "desc": "Square of orbital period is proportional to cube of orbital radius.",
                "formula": "T\u00b2 = (4\u03c0\u00b2 / GM) r\u00b3"
              },
              {
                "name": "Total Orbital Energy",
                "tag": "Bound State",
                "desc": "Total orbital energy is negative and equals half the potential energy.",
                "formula": "E_total = -G M m / (2r)"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-18",
      "num": 18,
      "title": "Electric and magnetic fields",
      "unitId": "unit-d",
      "startPage": 384,
      "endPage": 415,
      "pathCategory": "Electricity",
      "badge": null,
      "duration": "55 min",
      "sections": [
        {
          "num": "18.1",
          "title": "Electric charge, force and field",
          "page": 385,
          "desc": "Coulomb's law F = k q\u2081q\u2082 / r\u00b2, electric field strength E = F/q, field line patterns."
        },
        {
          "num": "18.2",
          "title": "Magnetic field and force",
          "page": 395,
          "desc": "Magnetic flux density B, Lorentz magnetic force F = qvB sin\u03b8, motor effect F = BIL sin\u03b8."
        },
        {
          "num": "18.3",
          "title": "Electric potential and electric potential energy",
          "page": 406,
          "desc": "Potential V = kq/r, uniform field E = -\u0394V/\u0394x, electronvolt (eV) energy unit."
        }
      ],
      "summary": "Electric charges create electric fields that exert forces on other charges. Moving charges generate magnetic fields, which in turn deflect moving charges via the Lorentz force perpendicular to velocity.",
      "keyFormulas": [
        {
          "tex": "F = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r^2}",
          "name": "Coulomb's Law"
        },
        {
          "tex": "\\vec{E} = \\frac{\\vec{F}}{q}, \\quad V = \\frac{1}{4\\pi\\varepsilon_0}\\frac{q}{r}",
          "name": "Electric Field & Potential"
        },
        {
          "tex": "\\vec{F}_B = q(\\vec{v} \\times \\vec{B}), \\quad F = q v B \\sin\\theta",
          "name": "Magnetic Lorentz Force"
        },
        {
          "tex": "F = B I L \\sin\\theta",
          "name": "Magnetic Force on Wire"
        }
      ],
      "simulationType": "fields-sim",
      "quiz": [
        {
          "question": "A proton moves east into a magnetic field directed vertically downwards into the ground. What is the direction of the magnetic force?",
          "options": [
            "East",
            "West",
            "North",
            "South"
          ],
          "correct": 2,
          "explanation": "Using the right-hand rule (index finger East, middle finger Downward), thumb points North."
        },
        {
          "question": "How much work is done moving a 2 C charge between two points with a potential difference of 50 V?",
          "options": [
            "25 J",
            "50 J",
            "100 J",
            "200 J"
          ],
          "correct": 2,
          "explanation": "W = q\u0394V = 2 C * 50 V = 100 J."
        },
        {
          "question": "Why does a static magnetic field do no work on a moving charged particle?",
          "options": [
            "The magnetic force is always zero for charged particles",
            "The magnetic force is always perpendicular to instantaneous velocity",
            "The magnetic field has no energy",
            "Electrons resist magnetic fields"
          ],
          "correct": 1,
          "explanation": "F = q(v x B). Force is orthogonal to displacement d = v dt, so W = F \u00b7 d = 0."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Coulomb electrostatic interactions, electric potential landscapes, and magnetic dipole flux fields.",
        "color": "#ec4899",
        "branches": [
          {
            "id": "b1",
            "title": "Coulomb's Law & Electric Fields",
            "badge": "Electrostatics",
            "subconcepts": [
              {
                "name": "Coulomb's Force Law",
                "tag": "Point Charges",
                "desc": "Electrostatic force between two stationary point charges.",
                "formula": "F = (1 / 4\u03c0\u03b5\u2080) (q\u2081 q\u2082 / r\u00b2)"
              },
              {
                "name": "Electric Field Strength E",
                "tag": "Force per Charge",
                "desc": "Vector force experienced per unit positive test charge.",
                "formula": "E = F / q = q / (4\u03c0\u03b5\u2080 r\u00b2)"
              },
              {
                "name": "Permittivity of Free Space",
                "tag": "\u03b5\u2080 Constant",
                "desc": "Electric permittivity determining vacuum electrostatic coupling.",
                "formula": "\u03b5\u2080 = 8.854 \u00d7 10\u207b\u00b9\u00b2 F/m"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Electric Potential & Uniform Fields",
            "badge": "Voltage Landscape",
            "subconcepts": [
              {
                "name": "Electric Potential V",
                "tag": "Scalar Potential",
                "desc": "Work done per unit charge bringing a positive test charge from infinity.",
                "formula": "V = q / (4\u03c0\u03b5\u2080 r)"
              },
              {
                "name": "Potential Gradient Relation",
                "tag": "E = -dV/dr",
                "desc": "Electric field vector points in the direction of steepest potential decrease.",
                "formula": "E = -dV / dr"
              },
              {
                "name": "Uniform Parallel Plates",
                "tag": "Capacitor Field",
                "desc": "Homogeneous electric field established between oppositely charged plates.",
                "formula": "E = V / d"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Magnetic Fields & Flux Density",
            "badge": "Magnetostatics",
            "subconcepts": [
              {
                "name": "Magnetic Flux Density B",
                "tag": "Tesla",
                "desc": "Measure of magnetic field strength determining forces on moving charges.",
                "formula": "Measured in Tesla (T = N/(A\u00b7m))"
              },
              {
                "name": "Long Straight Conductor",
                "tag": "Biot-Savart",
                "desc": "Concentric cylindrical magnetic field lines surrounding current I.",
                "formula": "B = (\u03bc\u2080 I) / (2\u03c0 r)"
              },
              {
                "name": "Solenoid Core Field",
                "tag": "Uniform Interior",
                "desc": "Dense uniform magnetic field inside a helical current-carrying coil.",
                "formula": "B = \u03bc\u2080 n I (n = N/L)"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-19",
      "num": 19,
      "title": "Motion in electric and magnetic fields",
      "unitId": "unit-d",
      "startPage": 416,
      "endPage": 427,
      "pathCategory": "Electricity",
      "badge": null,
      "duration": "45 min",
      "sections": [
        {
          "num": "19.1",
          "title": "Motion in an electric field",
          "page": 417,
          "desc": "Parabolic deflection of charges between parallel plates, cathode ray tubes."
        },
        {
          "num": "19.2",
          "title": "Motion in a magnetic field",
          "page": 421,
          "desc": "Circular trajectories r = mv/(qB), velocity selectors v = E/B, mass spectrometers, cyclotrons."
        }
      ],
      "summary": "Uniform electric fields create parabolic trajectories (constant acceleration), while uniform magnetic fields bend charges into circular arcs. Crossed E and B fields act as velocity selectors in mass spectrometers.",
      "keyFormulas": [
        {
          "tex": "r = \\frac{m v}{q B}",
          "name": "Cyclotron Radius"
        },
        {
          "tex": "v_{selector} = \\frac{E}{B}",
          "name": "Wien Velocity Selector"
        },
        {
          "tex": "\\frac{q}{m} = \\frac{v}{r B}",
          "name": "Specific Charge Determination"
        }
      ],
      "simulationType": "cyclotron-sim",
      "quiz": [
        {
          "question": "In a velocity selector with crossed E = 10,000 V/m and B = 0.05 T, what velocity will allow particles to pass undeflected?",
          "options": [
            "200,000 m/s",
            "50,000 m/s",
            "500 m/s",
            "2,000 m/s"
          ],
          "correct": 0,
          "explanation": "v = E / B = 10,000 / 0.05 = 200,000 m/s."
        },
        {
          "question": "What path does an electron follow when fired perpendicularly into a uniform electric field between parallel plates?",
          "options": [
            "Circular arc",
            "Parabolic trajectory",
            "Straight line with increasing speed",
            "Hyperbolic curve"
          ],
          "correct": 1,
          "explanation": "Constant transverse electrostatic force F_y = eE gives constant acceleration a_y, exactly analogous to projectile motion under gravity."
        },
        {
          "question": "In a cyclotron, what happens to the orbital period T of a charged particle as its speed increases (non-relativistically)?",
          "options": [
            "T increases",
            "T decreases",
            "T remains constant: T = 2\u03c0m/(qB)",
            "T fluctuates wildly"
          ],
          "correct": 2,
          "explanation": "T = 2\u03c0r/v = 2\u03c0m/(qB), which is independent of orbital radius and velocity for v << c."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Lorentz force dynamics, cyclotron particle orbits, velocity selectors, and mass spectrometry.",
        "color": "#06b6d4",
        "branches": [
          {
            "id": "b1",
            "title": "Motion in Uniform Electric Fields",
            "badge": "Parabolic Deflection",
            "subconcepts": [
              {
                "name": "Constant Electric Force",
                "tag": "F = qE",
                "desc": "Produces constant linear acceleration in the direction of field lines.",
                "formula": "a = qE / m"
              },
              {
                "name": "Parabolic Trajectory",
                "tag": "Cathode Ray",
                "desc": "Analogous to projectile motion: uniform horizontal speed with transverse acceleration.",
                "formula": "y = \u00bd (qE/m) (x/v_x)\u00b2"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Magnetic Lorentz Force & Orbits",
            "badge": "Circular Orbits",
            "subconcepts": [
              {
                "name": "Lorentz Magnetic Force",
                "tag": "q(v \u00d7 B)",
                "desc": "Acts perpendicular to both velocity and magnetic field; does zero work.",
                "formula": "F_B = q v B sin\u03b8"
              },
              {
                "name": "Cyclotron Radius",
                "tag": "Centripetal",
                "desc": "Radius of circular orbit traced by a charged particle perpendicular to B.",
                "formula": "r = (m v) / (q B)"
              },
              {
                "name": "Cyclotron Frequency",
                "tag": "Isochronous",
                "desc": "Orbital frequency is independent of particle speed or orbit radius.",
                "formula": "f = (q B) / (2\u03c0 m)"
              },
              {
                "name": "Helical Particle Drift",
                "tag": "3D Motion",
                "desc": "Velocity component parallel to B is constant; perpendicular component rotates.",
                "formula": "Pitch p = v_\u2225 \u00b7 (2\u03c0m / qB)"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Crossed Fields & Analyzers",
            "badge": "Particle Accelerators",
            "subconcepts": [
              {
                "name": "Wien Velocity Selector",
                "tag": "Crossed E & B",
                "desc": "Perpendicular electric and magnetic forces cancel for a unique speed.",
                "formula": "qE = qvB \u21d2 v = E / B"
              },
              {
                "name": "Thomson Specific Charge",
                "tag": "e/m",
                "desc": "Historical discovery of the electron's charge-to-mass ratio.",
                "formula": "e/m = E / (B\u00b2 r)"
              },
              {
                "name": "Bainbridge Mass Spectrometer",
                "tag": "Isotope Separation",
                "desc": "Separates ions by mass using uniform deflection magnetic field.",
                "formula": "m = (q B r) / v"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-20",
      "num": 20,
      "title": "Electromagnetic induction",
      "unitId": "unit-d",
      "startPage": 428,
      "endPage": 448,
      "pathCategory": "Electricity",
      "badge": null,
      "duration": "55 min",
      "sections": [
        {
          "num": "20.1",
          "title": "Electromagnetic induction",
          "page": 429,
          "desc": "Magnetic flux \u03a6 = BA cos\u03b8, Faraday's law of induction, Lenz's law of conservation."
        },
        {
          "num": "20.2",
          "title": "Generators and alternating current",
          "page": 443,
          "desc": "AC generators, root-mean-square values V_rms = V\u2080/\u221a2, transformers Vp/Vs = Np/Ns."
        }
      ],
      "summary": "Changing magnetic flux through a conducting loop induces an electromotive force. Lenz's law guarantees that induced currents oppose the change that created them, enabling power generators and transformers.",
      "keyFormulas": [
        {
          "tex": "\\Phi = B A \\cos\\theta",
          "name": "Magnetic Flux"
        },
        {
          "tex": "\\mathcal{E} = -N \\frac{\\Delta\\Phi}{\\Delta t}",
          "name": "Faraday's Law of Induction"
        },
        {
          "tex": "I_{rms} = \\frac{I_0}{\\sqrt{2}}, \\quad V_{rms} = \\frac{V_0}{\\sqrt{2}}",
          "name": "RMS AC Values"
        },
        {
          "tex": "\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}",
          "name": "Ideal Transformer Equation"
        }
      ],
      "simulationType": "induction-sim",
      "quiz": [
        {
          "question": "A 200-turn coil with area 0.02 m\u00b2 experiences a magnetic field change from 0.1 T to 0.5 T in 0.04 s. What is the induced EMF?",
          "options": [
            "10 V",
            "20 V",
            "40 V",
            "80 V"
          ],
          "correct": 2,
          "explanation": "\u0394\u03a6 = A * \u0394B = 0.02 * 0.4 = 0.008 Wb. \u03b5 = N * \u0394\u03a6/\u0394t = 200 * 0.008 / 0.04 = 40 V."
        },
        {
          "question": "What fundamental conservation law is embodied by Lenz's law?",
          "options": [
            "Conservation of charge",
            "Conservation of momentum",
            "Conservation of energy",
            "Conservation of baryon number"
          ],
          "correct": 2,
          "explanation": "Lenz's law ensures mechanical work must be done to generate electrical energy; otherwise free energy would arise."
        },
        {
          "question": "A household AC voltage has an rms value of 230 V. What is the peak voltage V\u2080?",
          "options": [
            "163 V",
            "230 V",
            "325 V",
            "460 V"
          ],
          "correct": 2,
          "explanation": "V\u2080 = V_rms * \u221a2 = 230 * 1.414 \u2248 325 V."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Faraday induction, magnetic flux linkage, Lenz's law, and alternating current transformers.",
        "color": "#10b981",
        "branches": [
          {
            "id": "b1",
            "title": "Magnetic Flux & Linkage",
            "badge": "Surface Integral",
            "subconcepts": [
              {
                "name": "Magnetic Flux \u03a6",
                "tag": "Weber",
                "desc": "Dot product of magnetic flux density and oriented surface area.",
                "formula": "\u03a6 = B A cos\u03b8 (1 Wb = 1 T\u00b7m\u00b2)"
              },
              {
                "name": "Flux Linkage N\u03a6",
                "tag": "Multi-turn",
                "desc": "Total magnetic flux threading through N turns of an inductive coil.",
                "formula": "Flux Linkage = N \u03a6"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Faraday's & Lenz's Induction Laws",
            "badge": "Induced EMF",
            "subconcepts": [
              {
                "name": "Faraday's Law",
                "tag": "Rate of Change",
                "desc": "Induced EMF equals the time rate of change of magnetic flux linkage.",
                "formula": "\u2130 = -d(N\u03a6) / dt"
              },
              {
                "name": "Lenz's Law",
                "tag": "Energy Conservation",
                "desc": "Induced current flows in a direction that opposes the flux change causing it.",
                "formula": "Negative sign in Faraday's Law"
              },
              {
                "name": "Motional EMF",
                "tag": "Cutting Lines",
                "desc": "EMF induced across a conductor of length L moving at speed v across B.",
                "formula": "\u2130 = B L v"
              }
            ]
          },
          {
            "id": "b3",
            "title": "AC Generation & Transformers",
            "badge": "Grid Transmission",
            "subconcepts": [
              {
                "name": "AC Alternator",
                "tag": "Sinusoidal EMF",
                "desc": "Coil rotating at angular velocity \u03c9 produces sinusoidal alternating current.",
                "formula": "\u2130(t) = N B A \u03c9 sin(\u03c9t)"
              },
              {
                "name": "Ideal Transformer Law",
                "tag": "Mutual Induction",
                "desc": "Voltage scales with turn ratio while conserving input and output power.",
                "formula": "V_p / V_s = N_p / N_s = I_s / I_p"
              },
              {
                "name": "Joule Transmission Losses",
                "tag": "High Voltage",
                "desc": "Stepping up voltage minimizes line current and reduces I\u00b2R resistive losses.",
                "formula": "P_loss = I\u00b2 R_wire"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-21",
      "num": 21,
      "title": "Atomic physics",
      "unitId": "unit-e",
      "startPage": 450,
      "endPage": 461,
      "pathCategory": "Light & Optics",
      "badge": null,
      "duration": "45 min",
      "sections": [
        {
          "num": "21.1",
          "title": "The structure of the atom",
          "page": 451,
          "desc": "Geiger-Marsden alpha scattering experiment, Rutherford nuclear model, discrete emission/absorption spectra."
        },
        {
          "num": "21.2",
          "title": "Quantisation of angular momentum",
          "page": 457,
          "desc": "Bohr model of hydrogen atom, quantized orbits mvr = nh/(2\u03c0), energy levels E_n = -13.6 eV / n\u00b2."
        }
      ],
      "summary": "Alpha particle back-scattering proved atoms possess a tiny, dense, positively charged nucleus. Bohr quantized electron angular momentum, explaining discrete spectral lines as photon emission during orbital transitions.",
      "keyFormulas": [
        {
          "tex": "L = m v r = n \\frac{h}{2\\pi} = n\\hbar",
          "name": "Bohr Angular Momentum Quantization"
        },
        {
          "tex": "E_n = -\\frac{13.6\\text{ eV}}{n^2}",
          "name": "Hydrogen Energy Levels"
        },
        {
          "tex": "hf = E_2 - E_1 = \\frac{hc}{\\lambda}",
          "name": "Photon Transition Energy"
        }
      ],
      "simulationType": "bohr-sim",
      "quiz": [
        {
          "question": "What key conclusion did Rutherford deduce from the fact that a small fraction of alpha particles deflected by more than 90\u00b0?",
          "options": [
            "The atom is a solid sphere of positive charge",
            "Most of the atomic mass and positive charge is concentrated in a tiny nucleus",
            "Electrons are located inside the nucleus",
            "Neutrons repel alpha particles"
          ],
          "correct": 1,
          "explanation": "Only an intensely concentrated positive charge in a minute volume could generate sufficient electrostatic repulsion to bounce back energetic alphas."
        },
        {
          "question": "An electron in hydrogen drops from n = 3 (-1.51 eV) to n = 2 (-3.40 eV). What is the emitted photon energy?",
          "options": [
            "1.89 eV",
            "3.40 eV",
            "4.91 eV",
            "0.54 eV"
          ],
          "correct": 0,
          "explanation": "\u0394E = E3 - E2 = -1.51 - (-3.40) = 1.89 eV (the red H-alpha Balmer line)."
        },
        {
          "question": "According to the Bohr model, orbital radius r_n scales with principal quantum number n as:",
          "options": [
            "r_n \u221d n",
            "r_n \u221d n\u00b2",
            "r_n \u221d 1/n",
            "r_n \u221d \u221an"
          ],
          "correct": 1,
          "explanation": "r_n = n\u00b2 a\u2080, where a\u2080 \u2248 0.529 \u00c5 is the Bohr radius."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Discovery of the atomic nucleus, Bohr's quantized energy orbits, and discrete spectral transitions.",
        "color": "#6366f1",
        "branches": [
          {
            "id": "b1",
            "title": "Rutherford Nuclear Discovery",
            "badge": "Scattering",
            "subconcepts": [
              {
                "name": "Geiger-Marsden Alpha Experiment",
                "tag": "Gold Foil",
                "desc": "Large-angle alpha particle deflections proved atomic mass is concentrated in a tiny nucleus.",
                "formula": "Nucleus radius r ~ 10\u207b\u00b9\u2075 m vs Atom 10\u207b\u00b9\u2070 m"
              },
              {
                "name": "Classical Planetary Model Failure",
                "tag": "EM Collapse",
                "desc": "Accelerating orbital electrons must radiate continuously and spiral into the nucleus.",
                "formula": "Classical lifetime ~ 10\u207b\u00b9\u00b9 s"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Bohr's Quantized Atom",
            "badge": "Quantization",
            "subconcepts": [
              {
                "name": "Quantized Angular Momentum",
                "tag": "Bohr Postulate",
                "desc": "Electrons inhabit non-radiating stationary orbits where orbital angular momentum is an integer multiple of \u0127.",
                "formula": "L = m v r = n \u0127 (\u0127 = h / 2\u03c0)"
              },
              {
                "name": "Hydrogen Energy Levels",
                "tag": "Discrete Rydberg",
                "desc": "Quantized negative binding energy levels in the Coulomb potential.",
                "formula": "E_n = -13.6 eV / n\u00b2 (n = 1, 2, 3...)"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Emission & Absorption Spectra",
            "badge": "Photon Transitions",
            "subconcepts": [
              {
                "name": "Photon Transition Rule",
                "tag": "\u0394E = hf",
                "desc": "Electrons jump between levels emitting or absorbing a single photon.",
                "formula": "\u0394E = E_initial - E_final = h f = h c / \u03bb"
              },
              {
                "name": "Spectral Series of Hydrogen",
                "tag": "Lyman, Balmer, Paschen",
                "desc": "Balmer series transitions down to n=2 produce visible emission lines.",
                "formula": "1/\u03bb = R_H (1/n_f\u00b2 - 1/n_i\u00b2)"
              },
              {
                "name": "Fraunhofer Absorption Lines",
                "tag": "Stellar Chemistry",
                "desc": "Cool stellar atmospheres absorb specific frequencies revealing elemental compositions.",
                "formula": "Dark lines at characteristic \u03bb"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-22",
      "num": 22,
      "title": "Quantum physics",
      "unitId": "unit-e",
      "startPage": 462,
      "endPage": 477,
      "pathCategory": "Light & Optics",
      "badge": null,
      "duration": "50 min",
      "sections": [
        {
          "num": "22.1",
          "title": "Photons and the photoelectric effect",
          "page": 463,
          "desc": "Einstein photoelectric equation hf = \u03a6 + E_k,max, threshold frequency f\u2080, stopping voltage V_s."
        },
        {
          "num": "22.2",
          "title": "Matter waves",
          "page": 473,
          "desc": "de Broglie hypothesis \u03bb = h/p, electron diffraction experiments (Davisson-Germer), Heisenberg uncertainty principle."
        }
      ],
      "summary": "Light behaves as quantized photons in interactions with matter. Conversely, material particles such as electrons possess wave properties with de Broglie wavelength \u03bb = h/p, demonstrating universal wave-particle duality.",
      "keyFormulas": [
        {
          "tex": "E = hf = \\frac{hc}{\\lambda}",
          "name": "Photon Energy"
        },
        {
          "tex": "hf = \\Phi + e V_s = \\Phi + \\frac{1}{2}m v_{max}^2",
          "name": "Einstein Photoelectric Equation"
        },
        {
          "tex": "\\lambda = \\frac{h}{p} = \\frac{h}{mv}",
          "name": "de Broglie Wavelength"
        },
        {
          "tex": "\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}",
          "name": "Heisenberg Uncertainty Principle"
        }
      ],
      "simulationType": "photoelectric-sim",
      "quiz": [
        {
          "question": "In a photoelectric experiment, doubling the intensity of light above the threshold frequency causes:",
          "options": [
            "Maximum kinetic energy of photoelectrons to double",
            "Rate of photoelectron emission to double",
            "Stopping potential to double",
            "Work function to halve"
          ],
          "correct": 1,
          "explanation": "Intensity is photon flux. More photons eject proportionally more photoelectrons per second, but individual photon energy hf is unchanged."
        },
        {
          "question": "What is the de Broglie wavelength of an electron (m = 9.11 x 10^-31 kg) accelerated through 100 V (p \u2248 5.4 x 10^-24 kg m/s)?",
          "options": [
            "0.123 nm",
            "1.23 nm",
            "12.3 nm",
            "0.0123 nm"
          ],
          "correct": 0,
          "explanation": "\u03bb = h / p = 6.63 x 10^-34 / 5.4 x 10^-24 \u2248 1.23 x 10^-10 m = 0.123 nm (comparable to atomic lattice spacing)."
        },
        {
          "question": "Which phenomenon definitively demonstrated that electrons exhibit wave properties?",
          "options": [
            "Compton scattering",
            "Electron diffraction through thin graphite crystal",
            "Millikan oil drop experiment",
            "Cavendish torsion experiment"
          ],
          "correct": 1,
          "explanation": "Davisson and Germer observed diffraction rings from electrons passing through crystalline lattices, validating de Broglie waves."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Photoelectric effect, de Broglie matter waves, Heisenberg uncertainty, and probabilistic wave mechanics.",
        "color": "#ec4899",
        "branches": [
          {
            "id": "b1",
            "title": "The Photoelectric Effect",
            "badge": "Photon Quanta",
            "subconcepts": [
              {
                "name": "Einstein Photon Hypothesis",
                "tag": "Light Quanta",
                "desc": "Electromagnetic energy is quantized into discrete localized energy packets.",
                "formula": "E = h f"
              },
              {
                "name": "Work Function & Threshold",
                "tag": "Binding",
                "desc": "Minimum energy needed to liberate an electron from metal surface.",
                "formula": "\u03a6 = h f_0"
              },
              {
                "name": "Einstein Photoelectric Equation",
                "tag": "Kinetic Max",
                "desc": "Conservation of energy for single photon-electron collision.",
                "formula": "h f = \u03a6 + E_k,max = \u03a6 + e V_s"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Wave-Particle Duality",
            "badge": "Matter Waves",
            "subconcepts": [
              {
                "name": "De Broglie Matter Wavelength",
                "tag": "Momentum Coupling",
                "desc": "All moving matter exhibits wave characteristics inversely proportional to momentum.",
                "formula": "\u03bb = h / p = h / (m v)"
              },
              {
                "name": "Electron Diffraction",
                "tag": "Davisson-Germer",
                "desc": "Electrons scattered from nickel crystal create circular interference fringes.",
                "formula": "2d sin\u03b8 = n \u03bb"
              },
              {
                "name": "Photon Momentum",
                "tag": "Radiation Pressure",
                "desc": "Massless photons carry momentum proportional to their wave frequency.",
                "formula": "p = h / \u03bb = E / c"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Heisenberg Uncertainty Principle",
            "badge": "Quantum Limits",
            "subconcepts": [
              {
                "name": "Position-Momentum Limit",
                "tag": "Conjugate Pairs",
                "desc": "Fundamental quantum impossibility of simultaneously measuring exact position and momentum.",
                "formula": "\u0394x \u0394p \u2265 \u0127 / 2"
              },
              {
                "name": "Energy-Time Limit",
                "tag": "Virtual Fluctuations",
                "desc": "Allows temporary energy conservation violation for virtual quantum states.",
                "formula": "\u0394E \u0394t \u2265 \u0127 / 2"
              },
              {
                "name": "Quantum Tunneling",
                "tag": "Barrier Penetration",
                "desc": "Wavefunction leakage allows particles to traverse classically forbidden barriers.",
                "formula": "T \u221d e^(-2\u03baL)"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Wavefunctions & Probability",
            "badge": "Schr\u00f6dinger",
            "subconcepts": [
              {
                "name": "Born Probability Interpretation",
                "tag": "Probability Density",
                "desc": "Square of the complex wavefunction amplitude gives the probability of finding the particle.",
                "formula": "P(x) dx = |\u03c8(x)|\u00b2 dx"
              },
              {
                "name": "Particle in a Box",
                "tag": "Infinite Well",
                "desc": "Quantized standing wave solutions inside a one-dimensional potential well.",
                "formula": "E_n = (n\u00b2 h\u00b2) / (8 m L\u00b2)"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-23",
      "num": 23,
      "title": "Nuclear physics",
      "unitId": "unit-e",
      "startPage": 478,
      "endPage": 505,
      "pathCategory": "Light & Optics",
      "badge": null,
      "duration": "55 min",
      "sections": [
        {
          "num": "23.1",
          "title": "Mass defect and binding energy",
          "page": 479,
          "desc": "Mass deficit \u0394m, nuclear binding energy E = \u0394m c\u00b2, binding energy per nucleon curve, peak at Iron-56."
        },
        {
          "num": "23.2",
          "title": "Radioactivity",
          "page": 486,
          "desc": "Alpha (\u03b1), beta-minus (\u03b2\u207b), beta-plus (\u03b2\u207a), and gamma (\u03b3) decays, neutrino discovery, ionizing power and penetration."
        },
        {
          "num": "23.3",
          "title": "Nuclear properties and the radioactive decay law",
          "page": 494,
          "desc": "Nuclear radius R = R\u2080 A^(1/3), exponential decay N(t) = N\u2080 e^(-\u03bbt), activity A = \u03bbN, half-life T_1/2 = ln2/\u03bb."
        }
      ],
      "summary": "Nuclear forces bind protons and neutrons despite electrostatic repulsion. The mass defect converts into binding energy via E=mc\u00b2. Unstable isotopes decay spontaneously emitting \u03b1, \u03b2, and \u03b3 radiation following exponential statistics.",
      "keyFormulas": [
        {
          "tex": "\\Delta m = [Z m_p + (A - Z)m_n] - M_{nucleus}",
          "name": "Mass Defect"
        },
        {
          "tex": "E_b = \\Delta m\\,c^2 = \\Delta m\\text{ (u)} \\times 931.5 \\text{ MeV}",
          "name": "Binding Energy"
        },
        {
          "tex": "R = R_0 A^{1/3} \\quad (R_0 \\approx 1.2 \\text{ fm})",
          "name": "Nuclear Radius"
        },
        {
          "tex": "N(t) = N_0 e^{-\\lambda t}, \\quad A(t) = \\lambda N = A_0 e^{-\\lambda t}",
          "name": "Radioactive Decay Law"
        },
        {
          "tex": "T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}",
          "name": "Half-Life Relation"
        }
      ],
      "simulationType": "nuclear-sim",
      "quiz": [
        {
          "question": "Which nuclide has the highest binding energy per nucleon, making it the most stable against fission and fusion?",
          "options": [
            "Hydrogen-1 (\u00b9H)",
            "Helium-4 (\u2074He)",
            "Iron-56 (\u2075\u2076Fe)",
            "Uranium-238 (\u00b2\u00b3\u2078U)"
          ],
          "correct": 2,
          "explanation": "Iron-56 (and Nickel-62) sits at the peak of the binding energy per nucleon curve at approximately 8.8 MeV/nucleon."
        },
        {
          "question": "A radioactive sample has an initial activity of 800 Bq. After 6 hours, its activity is 100 Bq. What is its half-life?",
          "options": [
            "1 hour",
            "2 hours",
            "3 hours",
            "4 hours"
          ],
          "correct": 1,
          "explanation": "Activity drops from 800 -> 400 -> 200 -> 100 in 3 half-lives. 3 * T_1/2 = 6 hours => T_1/2 = 2 hours."
        },
        {
          "question": "In beta-minus (\u03b2\u207b) decay, what fundamental transformation occurs inside the nucleus?",
          "options": [
            "A proton turns into a neutron, positron, and neutrino",
            "A neutron turns into a proton, electron, and antineutrino",
            "An alpha particle is expelled",
            "A photon of high energy is emitted"
          ],
          "correct": 1,
          "explanation": "Down quark converts to up quark: n -> p + e\u207b + \u03bd\u0305_e."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Nuclear strong force, binding energy per nucleon, radioactive decay transmutations, and half-life kinetics.",
        "color": "#06b6d4",
        "branches": [
          {
            "id": "b1",
            "title": "Nuclear Structure & Strong Force",
            "badge": "Nuclides",
            "subconcepts": [
              {
                "name": "Nucleon Constitution",
                "tag": "Z & N",
                "desc": "Atomic number Z (protons), neutron number N, total nucleon mass number A = Z + N.",
                "formula": "Nuclide: ^A_Z X"
              },
              {
                "name": "Nuclear Density Scaling",
                "tag": "Constant Density",
                "desc": "Nuclear volume scales linearly with mass number A.",
                "formula": "R \u2248 R\u2080 A^(1/3) (R\u2080 \u2248 1.2 fm)"
              },
              {
                "name": "Strong Nuclear Force",
                "tag": "Binding Glue",
                "desc": "Short-range powerful attractive force between all nucleons overcoming proton Coulomb repulsion.",
                "formula": "Range ~ 1 to 3 fm; repulsive < 0.7 fm"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Mass Defect & Binding Energy",
            "badge": "E = mc\u00b2",
            "subconcepts": [
              {
                "name": "Nuclear Mass Defect \u0394m",
                "tag": "Missing Mass",
                "desc": "Mass of assembled nucleus is strictly less than the sum of its individual constituent nucleons.",
                "formula": "\u0394m = (Z m_p + N m_n) - m_nucleus"
              },
              {
                "name": "Nuclear Binding Energy",
                "tag": "Disassembly Work",
                "desc": "Energy released when nucleons coalesce into a bound nucleus.",
                "formula": "E_b = \u0394m c\u00b2 (1 u = 931.5 MeV)"
              },
              {
                "name": "Binding Energy per Nucleon Curve",
                "tag": "Stability Peak",
                "desc": "Peaks near Iron-56 (8.8 MeV/nucleon); explains energy release in fusion and fission.",
                "formula": "Max stability at ^56_26 Fe"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Radioactive Decay Modes",
            "badge": "Spontaneous Decay",
            "subconcepts": [
              {
                "name": "Alpha Decay (\u03b1)",
                "tag": "Helium-4 Nucleus",
                "desc": "Emission of \u2074\u2082He\u00b2\u207a particle; reduces A by 4 and Z by 2.",
                "formula": "^A_Z X \u2192 ^(A-4)_(Z-2)Y + \u2074\u2082He"
              },
              {
                "name": "Beta-Minus Decay (\u03b2\u207b)",
                "tag": "Neutron Transmutation",
                "desc": "Neutron transforms into proton, electron, and electron antineutrino via weak interaction.",
                "formula": "n \u2192 p + e\u207b + \u03bd\u0304_e"
              },
              {
                "name": "Beta-Plus Decay (\u03b2\u207a)",
                "tag": "Positron Emission",
                "desc": "Proton transforms into neutron, positron, and electron neutrino.",
                "formula": "p \u2192 n + e\u207a + \u03bd_e"
              },
              {
                "name": "Gamma Emission (\u03b3)",
                "tag": "Nuclear De-excitation",
                "desc": "Excited nucleus releases high-energy photon without changing A or Z.",
                "formula": "^A_Z X* \u2192 ^A_Z X + \u03b3"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Radioactive Decay Kinetics",
            "badge": "Half-Life",
            "subconcepts": [
              {
                "name": "Exponential Decay Law",
                "tag": "Statistical Decay",
                "desc": "Rate of decay is proportional to number of radioactive nuclei remaining.",
                "formula": "N(t) = N\u2080 e^(-\u03bbt)"
              },
              {
                "name": "Radioactive Activity A",
                "tag": "Becquerels",
                "desc": "Number of disintegrations occurring per second.",
                "formula": "A = -dN/dt = \u03bb N (1 Bq = 1 decay/s)"
              },
              {
                "name": "Half-Life T_\u00bd",
                "tag": "Time to Halve",
                "desc": "Time required for half the original radioactive nuclei to decay.",
                "formula": "T_\u00bd = (ln 2) / \u03bb \u2248 0.693 / \u03bb"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-24",
      "num": 24,
      "title": "Nuclear fission",
      "unitId": "unit-e",
      "startPage": 506,
      "endPage": 513,
      "pathCategory": "Light & Optics",
      "badge": null,
      "duration": "40 min",
      "sections": [
        {
          "num": "24.1",
          "title": "Nuclear fission",
          "page": 507,
          "desc": "Induced fission of Uranium-235 by thermal neutrons, fission fragments, prompt neutrons, chain reaction criticality, nuclear reactors (moderators, control rods, heat exchangers)."
        }
      ],
      "summary": "Heavy unstable nuclei like Uranium-235 capture thermal neutrons and split into lighter fragments with higher binding energy per nucleon, releasing roughly 200 MeV per event and sustaining controlled chain reactions.",
      "keyFormulas": [
        {
          "tex": "^{235}_{92}\\text{U} + ^1_0\\text{n} \\rightarrow ^{236}_{92}\\text{U}^* \\rightarrow ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3 ^1_0\\text{n} + 200\\text{ MeV}",
          "name": "Typical U-235 Fission"
        },
        {
          "tex": "k = \\frac{\\text{Neutrons in generation } n+1}{\\text{Neutrons in generation } n}",
          "name": "Multiplication Factor (k=1 Critical)"
        }
      ],
      "simulationType": "fission-sim",
      "quiz": [
        {
          "question": "What is the primary function of a moderator (such as heavy water or graphite) in a nuclear fission reactor?",
          "options": [
            "To absorb excess neutrons to prevent meltdown",
            "To slow down fast fission neutrons to thermal speeds for efficient capture",
            "To shield workers from gamma radiation",
            "To cool the steam turbine"
          ],
          "correct": 1,
          "explanation": "Fast neutrons have a low cross-section for U-235 capture. Elastic collisions with light moderator nuclei slow them to thermal energies (\u2248 0.025 eV)."
        },
        {
          "question": "Control rods in a reactor core are made of materials like Boron or Cadmium because they:",
          "options": [
            "Fission easily at low temperatures",
            "Readily absorb neutrons without fissioning",
            "Accelerate thermal neutrons",
            "Reflect neutrons back into the fuel"
          ],
          "correct": 1,
          "explanation": "Cadmium and boron have very high neutron capture cross-sections, allowing fine control over criticality k."
        },
        {
          "question": "Why is energy released during the fission of a heavy nucleus like U-235?",
          "options": [
            "The total mass increases",
            "The fission products have higher binding energy per nucleon than the parent nucleus",
            "Protons are converted into energy",
            "The nuclear force turns into gravity"
          ],
          "correct": 1,
          "explanation": "Because binding energy per nucleon increases from ~7.6 MeV in Uranium to ~8.5 MeV in mid-mass fragments, mass is lost as \u0394m c\u00b2."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Induced neutron-induced fission, liquid-drop deformation, criticality factors, and reactor control.",
        "color": "#f59e0b",
        "branches": [
          {
            "id": "b1",
            "title": "Induced Fission Mechanism",
            "badge": "Neutron Capture",
            "subconcepts": [
              {
                "name": "Thermal Neutron Capture",
                "tag": "Compound Nucleus",
                "desc": "Slow thermal neutron absorbed by Uranium-235 creates excited Uranium-236.",
                "formula": "\u00b2\u00b3\u2075_92 U + \u00b9_0 n \u2192 \u00b2\u00b3\u2076_92 U* \u2192 Fission"
              },
              {
                "name": "Liquid Drop Splitting",
                "tag": "Deformation",
                "desc": "Nuclear surface tension fails against Coulomb repulsion, cleaving into asymmetric daughter nuclei.",
                "formula": "e.g. \u00b9\u2074\u00b9_56 Ba + \u2079\u00b2_36 Kr + 3 \u00b9_0 n"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Fission Energy Release",
            "badge": "200 MeV Event",
            "subconcepts": [
              {
                "name": "Energy Yield per Fission",
                "tag": "Mass to Energy",
                "desc": "Daughter nuclei have higher binding energy per nucleon; difference is released primarily as kinetic energy.",
                "formula": "Q \u2248 200 MeV per fission event"
              },
              {
                "name": "Prompt Prompt Emission",
                "tag": "Neutrons & Gammas",
                "desc": "Average 2.5 prompt neutrons and gamma rays emitted instantaneously within 10\u207b\u00b9\u2074 s.",
                "formula": "Carries ~10% of total energy"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Chain Reactions & Criticality",
            "badge": "Multiplication k",
            "subconcepts": [
              {
                "name": "Multiplication Factor k",
                "tag": "Neutron Budget",
                "desc": "Ratio of neutrons in generation n+1 to generation n.",
                "formula": "k = (neutrons produced) / (neutrons lost)"
              },
              {
                "name": "Criticality Regimes",
                "tag": "Steady vs Runaway",
                "desc": "Subcritical (k < 1), Critical (k = 1, steady power), Supercritical (k > 1, prompt runaway).",
                "formula": "Power stable at k = 1.000"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Nuclear Reactor Engineering",
            "badge": "Reactor Core",
            "subconcepts": [
              {
                "name": "Moderator Function",
                "tag": "Thermalization",
                "desc": "Light nuclei (heavy water, graphite) slow fast 2 MeV neutrons to 0.025 eV thermal speeds via elastic collisions.",
                "formula": "Thermal energy E ~ 0.025 eV"
              },
              {
                "name": "Control Rods",
                "tag": "Absorption",
                "desc": "Neutron poisons (boron, cadmium) inserted into core to maintain k = 1.",
                "formula": "Captures excess neutrons without fissioning"
              },
              {
                "name": "Coolant & Heat Exchanger",
                "tag": "Thermal Cycle",
                "desc": "Transfers core thermal energy to generate high-pressure steam for turbines.",
                "formula": "Primary & secondary closed loops"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "ch-25",
      "num": 25,
      "title": "Nuclear fusion and stars",
      "unitId": "unit-e",
      "startPage": 514,
      "endPage": 550,
      "pathCategory": "Light & Optics",
      "badge": null,
      "duration": "60 min",
      "sections": [
        {
          "num": "25.1",
          "title": "Nuclear fusion",
          "page": 515,
          "desc": "Proton-proton chain, CNO cycle, Lawson criterion for thermonuclear confinement, Coulomb barrier overcoming."
        },
        {
          "num": "25.2",
          "title": "Stellar properties and the Hertzsprung-Russell diagram",
          "page": 516,
          "desc": "Stellar luminosity L = 4\u03c0R\u00b2\u03c3T\u2074, apparent brightness b = L/(4\u03c0d\u00b2), stellar parallax d = 1/p, H-R diagram classification (Main Sequence, Red Giants, White Dwarfs, Supergiants)."
        },
        {
          "num": "25.3",
          "title": "Stellar evolution extension",
          "page": 523,
          "desc": "Hydrostatic equilibrium, Chandrasekhar mass limit (1.4 M_\u2609), Oppenheimer-Volkoff limit, planetary nebulae, supernovae, neutron stars, pulsars, and black holes."
        }
      ],
      "summary": "Stars are cosmic thermonuclear reactors powered by nuclear fusion of hydrogen into helium. The Hertzsprung-Russell diagram charts stellar luminosity against surface temperature, revealing the life cycles of stars from main sequence to white dwarfs, neutron stars, or black holes.",
      "keyFormulas": [
        {
          "tex": "4 ^1_1\\text{H} \\rightarrow ^4_2\\text{He} + 2 e^+ + 2\\nu_e + 26.7 \\text{ MeV}",
          "name": "Proton-Proton Chain"
        },
        {
          "tex": "L = 4\\pi R^2 \\sigma T^4",
          "name": "Stellar Luminosity (Stefan-Boltzmann)"
        },
        {
          "tex": "b = \\frac{L}{4\\pi d^2}",
          "name": "Apparent Brightness & Inverse Square"
        },
        {
          "tex": "d = \\frac{1}{p} \\quad (d\\text{ in parsecs, } p\\text{ in arcseconds})",
          "name": "Parallax Distance"
        },
        {
          "tex": "M_{Ch} \\approx 1.4 M_\\odot",
          "name": "Chandrasekhar Mass Limit"
        }
      ],
      "simulationType": "hr-diagram-sim",
      "quiz": [
        {
          "question": "What is the primary energy generation mechanism inside main sequence stars like our Sun?",
          "options": [
            "Nuclear fission of Uranium",
            "Proton-proton chain hydrogen fusion into Helium",
            "Gravitational contraction only",
            "Combustion of methane"
          ],
          "correct": 1,
          "explanation": "Main sequence stars convert four hydrogen nuclei into helium-4 via the p-p chain or CNO cycle, releasing 26.7 MeV per helium."
        },
        {
          "question": "A star on the Hertzsprung-Russell diagram has high luminosity but low surface temperature (around 3000 K). It is classified as:",
          "options": [
            "White dwarf",
            "Main sequence dwarf",
            "Red Giant or Supergiant",
            "Neutron star"
          ],
          "correct": 2,
          "explanation": "L = 4\u03c0R\u00b2\u03c3T\u2074. To have huge luminosity despite low surface temperature T, the star's radius R must be enormous\u2014making it a Red Giant or Supergiant."
        },
        {
          "question": "What happens to the core remnant of a dying star if its mass exceeds the Chandrasekhar limit of 1.4 solar masses?",
          "options": [
            "It remains a stable carbon-oxygen White Dwarf",
            "Electron degeneracy pressure fails, collapsing into a Neutron Star or Black Hole",
            "It bounces into a Main Sequence star",
            "It cools directly into dark matter"
          ],
          "correct": 1,
          "explanation": "Electron degeneracy pressure cannot support cores > 1.4 M_\u2609, collapsing the remnant into a neutron star (supported by neutron degeneracy) or a black hole."
        }
      ],
      "subject": "Science",
      "mindMap": {
        "core": "Thermonuclear fusion, proton-proton chain, stellar hydrostatic equilibrium, and life cycle evolution.",
        "color": "#f59e0b",
        "branches": [
          {
            "id": "b1",
            "title": "Thermonuclear Fusion Physics",
            "badge": "Coulomb Tunneling",
            "subconcepts": [
              {
                "name": "Overcoming Coulomb Repulsion",
                "tag": "Extreme Core",
                "desc": "Positively charged protons require core temperatures > 10\u2077 K and high density to overcome electrostatic barrier.",
                "formula": "T_core ~ 1.5 \u00d7 10\u2077 K"
              },
              {
                "name": "Quantum Tunneling in Fusion",
                "tag": "Wave Penetration",
                "desc": "Protons tunnel through the Coulomb barrier at energies far below classical thresholds.",
                "formula": "Gamow peak energy window"
              },
              {
                "name": "Proton-Proton (p-p) Chain",
                "tag": "Solar Hydrogen Fusion",
                "desc": "Net conversion of four protons into one Helium-4 nucleus with energy release.",
                "formula": "4 \u00b9_1 H \u2192 \u2074_2 He + 2 e\u207a + 2 \u03bd_e + 26.7 MeV"
              }
            ]
          },
          {
            "id": "b2",
            "title": "Stellar Hydrostatic Balance",
            "badge": "Equilibrium",
            "subconcepts": [
              {
                "name": "Hydrostatic Equilibrium",
                "tag": "Gravity vs Pressure",
                "desc": "Inward gravitational weight is balanced at every radius by outward thermal and radiation pressure.",
                "formula": "dP/dr = -G M(r) \u03c1(r) / r\u00b2"
              },
              {
                "name": "Solar Layers",
                "tag": "Internal Architecture",
                "desc": "Thermonuclear core, radiative zone, convection zone, photosphere.",
                "formula": "Main sequence lifespan ~ M / L \u221d M^(-2.5)"
              }
            ]
          },
          {
            "id": "b3",
            "title": "Stellar Life Cycles & Remnants",
            "badge": "Stellar Evolution",
            "subconcepts": [
              {
                "name": "Low-Mass Stars (< 8 M_\u2299)",
                "tag": "White Dwarf",
                "desc": "Main sequence \u2192 Red giant \u2192 Planetary nebula \u2192 White dwarf supported by electron degeneracy pressure.",
                "formula": "Chandrasekhar limit M_wd \u2264 1.44 M_\u2299"
              },
              {
                "name": "High-Mass Stars (> 8 M_\u2299)",
                "tag": "Supernova",
                "desc": "Iron core collapse triggers Type II supernova leaving neutron star or black hole.",
                "formula": "Neutron degeneracy / Event horizon"
              }
            ]
          },
          {
            "id": "b4",
            "title": "Hertzsprung-Russell (H-R) Diagram",
            "badge": "Astrophysical Classification",
            "subconcepts": [
              {
                "name": "Luminosity vs Temperature",
                "tag": "H-R Plot",
                "desc": "Logarithmic plot of stellar luminosity versus decreasing surface effective temperature.",
                "formula": "L = 4\u03c0 R\u00b2 \u03c3 T\u2074"
              },
              {
                "name": "Spectral Classification",
                "tag": "O B A F G K M",
                "desc": "Surface temperature sequence from hot blue O stars (30,000 K) to cool red M stars (3,000 K).",
                "formula": "Sun: G2V (5778 K)"
              },
              {
                "name": "Main Sequence Band",
                "tag": "Core Hydrogen",
                "desc": "Diagonal band where stars fuse hydrogen in their cores; mass determines position.",
                "formula": "L \u221d M^(3.5)"
              }
            ]
          }
        ]
      }
    }
  ],
  "physicsChaptersCount": 25,
  "stats": {
    "totalUnits": 5,
    "totalPhysicsChapters": 25,
    "totalCourses": 25,
    "totalPages": 551,
    "totalSections": 78,
    "totalFormulas": 94
  }
};
