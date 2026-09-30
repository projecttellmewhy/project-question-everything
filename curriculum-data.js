const curriculum = {
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
                    "desc": "Displacement Δx is the shortest vector from start to finish; distance is total path length.",
                    "formula": "Δx = x_f - x_i"
                  },
                  {
                    "name": "Instantaneous Velocity",
                    "tag": "Calculus",
                    "desc": "Time rate of change of displacement evaluated at an infinitesimal instant.",
                    "formula": "v = dx/dt = lim(Δt→0) Δx/Δt"
                  },
                  {
                    "name": "Acceleration",
                    "tag": "Rate of Rate",
                    "desc": "Time rate of change of velocity; non-zero whenever speed or direction changes.",
                    "formula": "a = dv/dt = d²x/dt²"
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
                    "formula": "s = ut + ½at²"
                  },
                  {
                    "name": "Work-Kinematics Form",
                    "tag": "SUVAT 3",
                    "desc": "Relates velocities and displacement without explicit time dependency.",
                    "formula": "v² = u² + 2as"
                  },
                  {
                    "name": "Mean Speed Form",
                    "tag": "SUVAT 4",
                    "desc": "Displacement as average velocity multiplied by duration.",
                    "formula": "s = ½(u + v)t"
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
                    "formula": "Area = ∫ v dt = Δx"
                  },
                  {
                    "name": "Acceleration-Time (a-t)",
                    "tag": "Area = Δv",
                    "desc": "Area under curve yields total change in velocity.",
                    "formula": "Area = ∫ a dt = Δv"
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
                    "formula": "v_x = u cosθ, v_y = u sinθ - gt"
                  },
                  {
                    "name": "Trajectory Peak & Hangtime",
                    "tag": "Symmetry",
                    "desc": "Vertical velocity vanishes at apex (v_y = 0); total flight time T = 2u sinθ / g.",
                    "formula": "H_max = (u² sin²θ)/(2g)"
                  },
                  {
                    "name": "Horizontal Range",
                    "tag": "Ballistics",
                    "desc": "Horizontal distance traveled over flat ground; maximized at 45° launch.",
                    "formula": "R = (u² sin 2θ)/g"
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
                    "formula": "ΣF = 0 ⇔ a = 0"
                  },
                  {
                    "name": "2nd Law: Momentum Rate",
                    "tag": "Dynamics",
                    "desc": "Net force equals the time rate of change of momentum; simplifies to F = ma for constant mass.",
                    "formula": "ΣF = dp/dt = ma"
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
                    "formula": "N = mg cosθ (plane)"
                  },
                  {
                    "name": "Static Friction",
                    "tag": "Threshold",
                    "desc": "Opposes initiation of relative sliding motion up to a maximum limit.",
                    "formula": "f_s ≤ μ_s N"
                  },
                  {
                    "name": "Dynamic/Kinetic Friction",
                    "tag": "Sliding",
                    "desc": "Resistive force during continuous relative sliding.",
                    "formula": "f_k = μ_k N"
                  },
                  {
                    "name": "Fluid Drag & Terminal Velocity",
                    "tag": "Aerodynamics",
                    "desc": "Speed where gravitational pull balances fluid drag force.",
                    "formula": "v_term = √(2mg / (ρ A C_d))"
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
                    "formula": "ΣF_x = 0, ΣF_y = 0"
                  },
                  {
                    "name": "Inclined Plane Dynamics",
                    "tag": "Incline",
                    "desc": "Gravity components parallel (mg sinθ) and perpendicular (mg cosθ) to slope.",
                    "formula": "a = g(sinθ - μ_k cosθ)"
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
                    "formula": "W = F · d = F d cosθ"
                  },
                  {
                    "name": "Variable Force Integration",
                    "tag": "Calculus",
                    "desc": "Area under the force-displacement curve represents total work.",
                    "formula": "W = ∫ F(x) dx"
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
                    "formula": "E_k = ½ m v²"
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
                    "formula": "E_el = ½ k (Δx)²"
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
                    "formula": "W_net = ΔE_k = ½mv² - ½mu²"
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
                    "formula": "ΔE_mech = -f_k · d"
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
                    "formula": "P = dW/dt = F · v"
                  },
                  {
                    "name": "System Efficiency",
                    "tag": "Performance",
                    "desc": "Ratio of useful energy output to total energy input.",
                    "formula": "η = (P_out / P_in) × 100%"
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
                    "formula": "J = ∫ F dt = Δp"
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
                    "formula": "ΣF_ext = 0 ⇒ Σp_initial = Σp_final"
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
                    "formula": "ΔE_k = 0, e = 1"
                  },
                  {
                    "name": "Inelastic Collisions",
                    "tag": "Energy Dissipated",
                    "desc": "Kinetic energy converts to heat/sound/deformation.",
                    "formula": "ΔE_k < 0, 0 < e < 1"
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
                    "formula": "Σp_ix = Σp_fx, Σp_iy = Σp_fy"
                  },
                  {
                    "name": "Glancing Scattering",
                    "tag": "Angles",
                    "desc": "Analyzing billiard and particle scattering with trigonometry.",
                    "formula": "m_1 u_1 = m_1 v_1 cosθ_1 + m_2 v_2 cosθ_2"
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
                    "desc": "Angular displacement θ, velocity ω, and acceleration α.",
                    "formula": "ω = dθ/dt, α = dω/dt"
                  },
                  {
                    "name": "Linear-Angular Links",
                    "tag": "Radius",
                    "desc": "Coupling between arc length, tangential velocity, and angular rate.",
                    "formula": "s = rθ, v_t = rω, a_t = rα"
                  },
                  {
                    "name": "Centripetal Acceleration",
                    "tag": "Radial",
                    "desc": "Inward acceleration maintaining circular motion.",
                    "formula": "a_c = v²/r = ω²r"
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
                    "formula": "τ = r × F = r F sinθ"
                  },
                  {
                    "name": "Moment of Inertia",
                    "tag": "Mass Distribution",
                    "desc": "Resistance of rigid body to rotational acceleration.",
                    "formula": "I = Σ m_i r_i² = ∫ r² dm"
                  },
                  {
                    "name": "Newton's 2nd Law for Rotation",
                    "tag": "τ = Iα",
                    "desc": "Net torque equals moment of inertia times angular acceleration.",
                    "formula": "Στ = I α"
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
                    "formula": "E_rot = ½ I ω²"
                  },
                  {
                    "name": "Rolling Without Slipping",
                    "tag": "Combined Motion",
                    "desc": "Simultaneous translation and rotation.",
                    "formula": "E_tot = ½mv² + ½Iω²"
                  },
                  {
                    "name": "Angular Momentum Conservation",
                    "tag": "Spin",
                    "desc": "Total angular momentum is conserved when net external torque is zero.",
                    "formula": "L = I ω = const (when Στ_ext = 0)"
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
          "desc": "Special relativity reshapes our fundamental concepts of space and time. Light's speed c is invariant in all inertial frames, leading to time dilation, length contraction, and mass-energy equivalence E=mc².",
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
                    "formula": "c = 2.998 × 10⁸ m/s"
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
                    "desc": "Relativistic dilation multiplier approaching infinity as v → c.",
                    "formula": "γ = 1 / √(1 - v²/c²)"
                  },
                  {
                    "name": "Time Dilation",
                    "tag": "Moving Clocks",
                    "desc": "Clocks moving relative to an observer run slower.",
                    "formula": "Δt = γ Δt₀"
                  },
                  {
                    "name": "Length Contraction",
                    "tag": "Moving Rods",
                    "desc": "Spatial length contracts along the direction of motion.",
                    "formula": "L = L₀ / γ"
                  },
                  {
                    "name": "Relativity of Simultaneity",
                    "tag": "Events",
                    "desc": "Events simultaneous in one frame are not simultaneous in another.",
                    "formula": "Δt' = γ(Δt - vΔx/c²)"
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
                    "tag": "p = γmv",
                    "desc": "Momentum grows unbounded preventing massive bodies from reaching c.",
                    "formula": "p = γ m v"
                  },
                  {
                    "name": "Rest Energy Equivalence",
                    "tag": "E = mc²",
                    "desc": "Inherent mass contains equivalent latent energy.",
                    "formula": "E₀ = m c²"
                  },
                  {
                    "name": "Total Energy-Momentum Invariant",
                    "tag": "Invariant",
                    "desc": "Relates total energy, momentum, and rest mass.",
                    "formula": "E² = (pc)² + (mc²)²"
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
                    "formula": "T(K) = θ(°C) + 273.15"
                  },
                  {
                    "name": "Zeroth Law of Thermodynamics",
                    "tag": "Equilibrium",
                    "desc": "Defines temperature equality and thermal equilibrium.",
                    "formula": "T_A = T_B, T_B = T_C ⇒ T_A = T_C"
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
                    "formula": "Q/t = k A ΔT / L"
                  },
                  {
                    "name": "Convection",
                    "tag": "Fluids",
                    "desc": "Bulk fluid circulation driven by thermal density changes under gravity.",
                    "formula": "Buoyancy: ρ_hot < ρ_cold"
                  },
                  {
                    "name": "Thermal Radiation",
                    "tag": "EM Waves",
                    "desc": "Electromagnetic blackbody emission needing no intervening medium.",
                    "formula": "P = e σ A T⁴"
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
                    "formula": "Q = m c ΔT"
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
                    "formula": "ΣQ_lost = ΣQ_gained"
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
                    "desc": "Solar radiant energy incident per second on 1 m² at Earth's distance.",
                    "formula": "S ≈ 1361 W/m²"
                  },
                  {
                    "name": "Stefan-Boltzmann Law",
                    "tag": "Total Emission",
                    "desc": "Total emissive power proportional to fourth power of absolute temperature.",
                    "formula": "P = σ A T⁴ (σ = 5.67×10⁻⁸)"
                  },
                  {
                    "name": "Wien's Displacement Law",
                    "tag": "Peak Wavelength",
                    "desc": "Peak emission wavelength inversely proportional to temperature.",
                    "formula": "λ_max T = 2.898 × 10⁻³ m·K"
                  }
                ]
              },
              {
                "id": "b2",
                "title": "Planetary Energy Balance",
                "badge": "Equilibrium",
                "subconcepts": [
                  {
                    "name": "Planetary Albedo α",
                    "tag": "Reflection",
                    "desc": "Fraction of incident solar light reflected directly back to space.",
                    "formula": "α ≈ 0.30 (Earth average)"
                  },
                  {
                    "name": "Effective Radiative Temp",
                    "tag": "No-Atmosphere",
                    "desc": "Equilibrium temperature of Earth radiating as a naked blackbody.",
                    "formula": "T_eff = [(1-α)S / (4σ)]^(1/4) ≈ 255 K"
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
                    "formula": "λ_solar ~ 0.5 μm, λ_earth ~ 10 μm"
                  },
                  {
                    "name": "Resonant Molecular Absorption",
                    "tag": "Vibrational Modes",
                    "desc": "Dipole oscillations in CO₂, H₂O, CH₄ absorb and re-emit infrared rays in all directions.",
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
                    "formula": "P ∝ 1/V (PV = const)"
                  },
                  {
                    "name": "Charles's Law",
                    "tag": "Isobaric",
                    "desc": "Volume varies directly with absolute temperature at constant pressure.",
                    "formula": "V ∝ T (V/T = const)"
                  },
                  {
                    "name": "Gay-Lussac's Law",
                    "tag": "Isochoric",
                    "desc": "Pressure varies directly with absolute temperature at constant volume.",
                    "formula": "P ∝ T (P/T = const)"
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
                    "formula": "P V = n R T (R = 8.314 J/(mol·K))"
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
                    "formula": "P = ⅓ ρ ⟨v²⟩ = ⅓ (Nm/V) ⟨v²⟩"
                  },
                  {
                    "name": "Average Kinetic Energy",
                    "tag": "Temperature Measure",
                    "desc": "Mean translational kinetic energy depends solely on absolute temperature.",
                    "formula": "⟨E_k⟩ = 3/2 k_B T"
                  },
                  {
                    "name": "Root-Mean-Square Speed",
                    "tag": "v_rms",
                    "desc": "Effective average speed of gas molecules in thermal equilibrium.",
                    "formula": "v_rms = √(3 k_B T / m) = √(3 R T / M)"
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
          "desc": "Thermodynamics governs heat engines and energy conversion. The First Law states energy conservation ΔU = Q - W, while the Second Law dictates that total entropy of isolated systems always increases.",
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
                    "tag": "ΔU = Q - W",
                    "desc": "Change in internal energy equals heat added minus work done by the system.",
                    "formula": "ΔU = Q - W"
                  },
                  {
                    "name": "Boundary Expansion Work",
                    "tag": "P-V Area",
                    "desc": "Work performed during volume expansion against external pressure.",
                    "formula": "W = ∫ P dV"
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
                    "tag": "ΔT = 0",
                    "desc": "Constant temperature: ΔU = 0, work equals heat input.",
                    "formula": "W = n R T ln(V_f / V_i), Q = W"
                  },
                  {
                    "name": "Isobaric Process",
                    "tag": "ΔP = 0",
                    "desc": "Constant pressure expansion: work is rectangular area PΔV.",
                    "formula": "W = P ΔV"
                  },
                  {
                    "name": "Isochoric Process",
                    "tag": "ΔV = 0",
                    "desc": "Constant volume: zero work done, all heat goes to internal energy.",
                    "formula": "W = 0, Q = ΔU"
                  },
                  {
                    "name": "Adiabatic Process",
                    "tag": "Q = 0",
                    "desc": "No heat exchange; expansion cools the gas at the expense of internal energy.",
                    "formula": "P V^γ = const, W = -ΔU"
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
                    "formula": "η = W_net / Q_H = 1 - Q_C / Q_H"
                  },
                  {
                    "name": "Carnot Limit",
                    "tag": "Reversible Upper Bound",
                    "desc": "Maximum theoretical efficiency attainable between two thermal reservoirs.",
                    "formula": "η_Carnot = 1 - T_C / T_H"
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
                    "formula": "ΔS = ∫ dQ_rev / T"
                  },
                  {
                    "name": "Universal Entropy Increase",
                    "tag": "2nd Law",
                    "desc": "Total entropy of an isolated system never decreases over time.",
                    "formula": "ΔS_universe ≥ 0"
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
                    "formula": "I = Δq / Δt"
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
                    "formula": "R = ρ L / A"
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
                    "formula": "ΣI_in = ΣI_out"
                  },
                  {
                    "name": "Loop Rule (KVL)",
                    "tag": "Energy Conservation",
                    "desc": "Sum of all potential differences and EMFs around any closed loop is zero.",
                    "formula": "Σℰ = Σ(I R)"
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
                    "formula": "R_eq = R₁ + R₂ + R₃"
                  },
                  {
                    "name": "Parallel Combination",
                    "tag": "Same Voltage",
                    "desc": "Reciprocals add; total equivalent resistance is lower than the lowest branch.",
                    "formula": "1/R_eq = 1/R₁ + 1/R₂"
                  },
                  {
                    "name": "Potential Divider",
                    "tag": "Voltage Scaling",
                    "desc": "Splits input voltage proportional to resistance for sensors and taps.",
                    "formula": "V_out = V_in · [R₂ / (R₁ + R₂)]"
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
                    "formula": "V_terminal = ℰ - I r"
                  },
                  {
                    "name": "Joule Heating Power",
                    "tag": "Dissipation",
                    "desc": "Rate of electrical energy conversion into heat.",
                    "formula": "P = I V = I² R = V² / R"
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
                    "tag": "a = -ω²x",
                    "desc": "Acceleration is directly proportional and opposite to displacement from equilibrium.",
                    "formula": "a = -ω² x"
                  },
                  {
                    "name": "Angular Frequency",
                    "tag": "Cycles",
                    "desc": "Rate of phase rotation related to period and frequency.",
                    "formula": "ω = 2πf = 2π / T"
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
                    "formula": "x(t) = A cos(ωt)"
                  },
                  {
                    "name": "Velocity Function",
                    "tag": "Phase Shift π/2",
                    "desc": "Derivative of displacement; leads displacement by 90°.",
                    "formula": "v(t) = ±ω √(A² - x²)"
                  },
                  {
                    "name": "Peak Kinematic Values",
                    "tag": "Extrema",
                    "desc": "Maximum speed occurs at center; maximum acceleration at endpoints.",
                    "formula": "v_max = ω A, a_max = ω² A"
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
                    "formula": "T = 2π √(m / k)"
                  },
                  {
                    "name": "Simple Gravity Pendulum",
                    "tag": "Small Angles",
                    "desc": "Period depends only on length and local gravitational acceleration.",
                    "formula": "T = 2π √(L / g)"
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
                    "formula": "E_total = ½ m ω² A² = ½ k A²"
                  },
                  {
                    "name": "Damped Oscillations",
                    "tag": "Energy Dissipation",
                    "desc": "Frictional resistance decreases amplitude over time (light, critical, overdamped).",
                    "formula": "A(t) = A₀ e^(-γt)"
                  },
                  {
                    "name": "Resonance Phenomenon",
                    "tag": "Driving Frequency",
                    "desc": "Dramatic surge in amplitude when driving frequency matches natural resonant frequency.",
                    "formula": "f_drive ≈ f_natural ⇒ Max Amplitude"
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
                    "tag": "v = fλ",
                    "desc": "Speed equals frequency multiplied by spatial wavelength.",
                    "formula": "v = f λ = λ / T"
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
                    "formula": "Ray ⊥ Wavefront"
                  },
                  {
                    "name": "Phase Difference",
                    "tag": "Cycle Fraction",
                    "desc": "Angular phase lead/lag between two points separated by distance Δx.",
                    "formula": "Δϕ = (2π / λ) Δx"
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
                    "formula": "I ∝ 1 / r² (A = 4πr²)"
                  },
                  {
                    "name": "Amplitude Relation",
                    "tag": "I ∝ A²",
                    "desc": "Wave energy density scales with the square of wave amplitude.",
                    "formula": "I ∝ A²"
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
                    "formula": "θ_i = θ_r"
                  },
                  {
                    "name": "Snell's Law of Refraction",
                    "tag": "Optical Density",
                    "desc": "Wave bending at interface caused by change in propagation speed.",
                    "formula": "n₁ sinθ₁ = n₂ sinθ₂ (n = c/v)"
                  },
                  {
                    "name": "Total Internal Reflection",
                    "tag": "Critical Angle",
                    "desc": "Light trapped in dense medium when incident angle exceeds critical angle.",
                    "formula": "sinθ_c = n₂ / n₁ (n₁ > n₂)"
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
                    "formula": "Diffraction greatest when λ ~ slit width b"
                  },
                  {
                    "name": "Single Slit Diffraction Minimum",
                    "tag": "First Dark Fringe",
                    "desc": "Angular position of first diffraction intensity zero.",
                    "formula": "θ = λ / b"
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
                    "formula": "y_net = y₁ + y₂"
                  },
                  {
                    "name": "Young's Double Slit Fringes",
                    "tag": "Interference",
                    "desc": "Fringe spacing produced by two coherent sources separated by distance d.",
                    "formula": "s = λ D / d"
                  },
                  {
                    "name": "Diffraction Gratings",
                    "tag": "Sharp Maxima",
                    "desc": "Thousands of parallel slits creating crisp spectral lines.",
                    "formula": "d sinθ = n λ"
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
                    "desc": "Transmitted intensity of polarized light through an analyzer oriented at angle θ.",
                    "formula": "I = I₀ cos²θ"
                  },
                  {
                    "name": "Brewster's Angle",
                    "tag": "Complete Polarization",
                    "desc": "Angle where reflected light is 100% linearly polarized.",
                    "formula": "tanθ_B = n₂ / n₁"
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
                    "formula": "y = 2A sin(kx) cos(ωt)"
                  },
                  {
                    "name": "Comparison with Traveling Waves",
                    "tag": "Differences",
                    "desc": "Standing waves store energy locally without forward transport; phase is uniform between nodes.",
                    "formula": "Phase flips by π at nodes"
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
                    "formula": "x_node = n(λ/2)"
                  },
                  {
                    "name": "Displacement Antinodes",
                    "tag": "Max Amplitude",
                    "desc": "Points oscillating with maximum amplitude 2A midway between nodes.",
                    "formula": "Distance node-to-antinode = λ/4"
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
                    "formula": "λ_n = 2L / n, f_n = n f₁ (n = 1,2,3...)"
                  },
                  {
                    "name": "Closed-Open Pipe Resonator",
                    "tag": "Odd Harmonics",
                    "desc": "Closed end is displacement node, open end is antinode: produces only odd harmonics.",
                    "formula": "λ_n = 4L / n, f_n = n f₁ (n = 1,3,5...)"
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
                    "desc": "Speed of transverse wave on string of tension T and mass per unit length μ.",
                    "formula": "v = √(T / μ)"
                  },
                  {
                    "name": "Resonance Chamber Tuning",
                    "tag": "Acoustics",
                    "desc": "Adjusting pipe or string length to match driving source for maximum acoustic amplification.",
                    "formula": "f₁ = v / (2L)"
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
                    "formula": "f' = f [(v ± v_o) / v]"
                  },
                  {
                    "name": "Shock Waves & Mach Cone",
                    "tag": "Supersonic",
                    "desc": "Constructive wave superposition when source speed exceeds wave speed in medium.",
                    "formula": "sinθ_Mach = v_sound / v_source"
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
                    "formula": "Δf / f ≈ Δλ / λ ≈ v / c"
                  },
                  {
                    "name": "Exact Relativistic Equation",
                    "tag": "Lorentz Invariant",
                    "desc": "Incorporates time dilation for high-velocity relativistic sources.",
                    "formula": "f' = f √((1 - v/c) / (1 + v/c))"
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
                    "formula": "z = Δλ / λ_0 = v / c"
                  },
                  {
                    "name": "Hubble's Law",
                    "tag": "Expansion Rate",
                    "desc": "Recession velocity scales directly with cosmological distance.",
                    "formula": "v = H₀ d"
                  },
                  {
                    "name": "Doppler Radar & Echocardiography",
                    "tag": "Medical / Radar",
                    "desc": "Bouncing microwaves or ultrasound off moving targets to measure instantaneous velocity.",
                    "formula": "v = (c Δf) / (2 f₀)"
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
                    "formula": "F = G m₁ m₂ / r²"
                  },
                  {
                    "name": "Gravitational Field Strength",
                    "tag": "Acceleration g",
                    "desc": "Gravitational force per unit test mass at distance r from primary mass M.",
                    "formula": "g = F / m = G M / r²"
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
                    "formula": "v_esc = √(2 G M / R)"
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
                    "formula": "v_orb = √(G M / r)"
                  },
                  {
                    "name": "Kepler's Third Law",
                    "tag": "T² ∝ r³",
                    "desc": "Square of orbital period is proportional to cube of orbital radius.",
                    "formula": "T² = (4π² / GM) r³"
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
                    "formula": "F = (1 / 4πε₀) (q₁ q₂ / r²)"
                  },
                  {
                    "name": "Electric Field Strength E",
                    "tag": "Force per Charge",
                    "desc": "Vector force experienced per unit positive test charge.",
                    "formula": "E = F / q = q / (4πε₀ r²)"
                  },
                  {
                    "name": "Permittivity of Free Space",
                    "tag": "ε₀ Constant",
                    "desc": "Electric permittivity determining vacuum electrostatic coupling.",
                    "formula": "ε₀ = 8.854 × 10⁻¹² F/m"
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
                    "formula": "V = q / (4πε₀ r)"
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
                    "formula": "Measured in Tesla (T = N/(A·m))"
                  },
                  {
                    "name": "Long Straight Conductor",
                    "tag": "Biot-Savart",
                    "desc": "Concentric cylindrical magnetic field lines surrounding current I.",
                    "formula": "B = (μ₀ I) / (2π r)"
                  },
                  {
                    "name": "Solenoid Core Field",
                    "tag": "Uniform Interior",
                    "desc": "Dense uniform magnetic field inside a helical current-carrying coil.",
                    "formula": "B = μ₀ n I (n = N/L)"
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
                    "formula": "y = ½ (qE/m) (x/v_x)²"
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
                    "tag": "q(v × B)",
                    "desc": "Acts perpendicular to both velocity and magnetic field; does zero work.",
                    "formula": "F_B = q v B sinθ"
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
                    "formula": "f = (q B) / (2π m)"
                  },
                  {
                    "name": "Helical Particle Drift",
                    "tag": "3D Motion",
                    "desc": "Velocity component parallel to B is constant; perpendicular component rotates.",
                    "formula": "Pitch p = v_∥ · (2πm / qB)"
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
                    "formula": "qE = qvB ⇒ v = E / B"
                  },
                  {
                    "name": "Thomson Specific Charge",
                    "tag": "e/m",
                    "desc": "Historical discovery of the electron's charge-to-mass ratio.",
                    "formula": "e/m = E / (B² r)"
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
                    "name": "Magnetic Flux Φ",
                    "tag": "Weber",
                    "desc": "Dot product of magnetic flux density and oriented surface area.",
                    "formula": "Φ = B A cosθ (1 Wb = 1 T·m²)"
                  },
                  {
                    "name": "Flux Linkage NΦ",
                    "tag": "Multi-turn",
                    "desc": "Total magnetic flux threading through N turns of an inductive coil.",
                    "formula": "Flux Linkage = N Φ"
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
                    "formula": "ℰ = -d(NΦ) / dt"
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
                    "formula": "ℰ = B L v"
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
                    "desc": "Coil rotating at angular velocity ω produces sinusoidal alternating current.",
                    "formula": "ℰ(t) = N B A ω sin(ωt)"
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
                    "desc": "Stepping up voltage minimizes line current and reduces I²R resistive losses.",
                    "formula": "P_loss = I² R_wire"
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
                    "formula": "Nucleus radius r ~ 10⁻¹⁵ m vs Atom 10⁻¹⁰ m"
                  },
                  {
                    "name": "Classical Planetary Model Failure",
                    "tag": "EM Collapse",
                    "desc": "Accelerating orbital electrons must radiate continuously and spiral into the nucleus.",
                    "formula": "Classical lifetime ~ 10⁻¹¹ s"
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
                    "desc": "Electrons inhabit non-radiating stationary orbits where orbital angular momentum is an integer multiple of ħ.",
                    "formula": "L = m v r = n ħ (ħ = h / 2π)"
                  },
                  {
                    "name": "Hydrogen Energy Levels",
                    "tag": "Discrete Rydberg",
                    "desc": "Quantized negative binding energy levels in the Coulomb potential.",
                    "formula": "E_n = -13.6 eV / n² (n = 1, 2, 3...)"
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
                    "tag": "ΔE = hf",
                    "desc": "Electrons jump between levels emitting or absorbing a single photon.",
                    "formula": "ΔE = E_initial - E_final = h f = h c / λ"
                  },
                  {
                    "name": "Spectral Series of Hydrogen",
                    "tag": "Lyman, Balmer, Paschen",
                    "desc": "Balmer series transitions down to n=2 produce visible emission lines.",
                    "formula": "1/λ = R_H (1/n_f² - 1/n_i²)"
                  },
                  {
                    "name": "Fraunhofer Absorption Lines",
                    "tag": "Stellar Chemistry",
                    "desc": "Cool stellar atmospheres absorb specific frequencies revealing elemental compositions.",
                    "formula": "Dark lines at characteristic λ"
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
          "desc": "Light behaves as quantized photons in interactions with matter. Conversely, material particles such as electrons possess wave properties with de Broglie wavelength λ = h/p, demonstrating universal wave-particle duality.",
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
                    "formula": "Φ = h f_0"
                  },
                  {
                    "name": "Einstein Photoelectric Equation",
                    "tag": "Kinetic Max",
                    "desc": "Conservation of energy for single photon-electron collision.",
                    "formula": "h f = Φ + E_k,max = Φ + e V_s"
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
                    "formula": "λ = h / p = h / (m v)"
                  },
                  {
                    "name": "Electron Diffraction",
                    "tag": "Davisson-Germer",
                    "desc": "Electrons scattered from nickel crystal create circular interference fringes.",
                    "formula": "2d sinθ = n λ"
                  },
                  {
                    "name": "Photon Momentum",
                    "tag": "Radiation Pressure",
                    "desc": "Massless photons carry momentum proportional to their wave frequency.",
                    "formula": "p = h / λ = E / c"
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
                    "formula": "Δx Δp ≥ ħ / 2"
                  },
                  {
                    "name": "Energy-Time Limit",
                    "tag": "Virtual Fluctuations",
                    "desc": "Allows temporary energy conservation violation for virtual quantum states.",
                    "formula": "ΔE Δt ≥ ħ / 2"
                  },
                  {
                    "name": "Quantum Tunneling",
                    "tag": "Barrier Penetration",
                    "desc": "Wavefunction leakage allows particles to traverse classically forbidden barriers.",
                    "formula": "T ∝ e^(-2κL)"
                  }
                ]
              },
              {
                "id": "b4",
                "title": "Wavefunctions & Probability",
                "badge": "Schrödinger",
                "subconcepts": [
                  {
                    "name": "Born Probability Interpretation",
                    "tag": "Probability Density",
                    "desc": "Square of the complex wavefunction amplitude gives the probability of finding the particle.",
                    "formula": "P(x) dx = |ψ(x)|² dx"
                  },
                  {
                    "name": "Particle in a Box",
                    "tag": "Infinite Well",
                    "desc": "Quantized standing wave solutions inside a one-dimensional potential well.",
                    "formula": "E_n = (n² h²) / (8 m L²)"
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
          "desc": "Nuclear forces bind protons and neutrons despite electrostatic repulsion. The mass defect converts into binding energy via E=mc². Unstable isotopes decay spontaneously emitting α, β, and γ radiation following exponential statistics.",
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
                    "formula": "R ≈ R₀ A^(1/3) (R₀ ≈ 1.2 fm)"
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
                "badge": "E = mc²",
                "subconcepts": [
                  {
                    "name": "Nuclear Mass Defect Δm",
                    "tag": "Missing Mass",
                    "desc": "Mass of assembled nucleus is strictly less than the sum of its individual constituent nucleons.",
                    "formula": "Δm = (Z m_p + N m_n) - m_nucleus"
                  },
                  {
                    "name": "Nuclear Binding Energy",
                    "tag": "Disassembly Work",
                    "desc": "Energy released when nucleons coalesce into a bound nucleus.",
                    "formula": "E_b = Δm c² (1 u = 931.5 MeV)"
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
                    "name": "Alpha Decay (α)",
                    "tag": "Helium-4 Nucleus",
                    "desc": "Emission of ⁴₂He²⁺ particle; reduces A by 4 and Z by 2.",
                    "formula": "^A_Z X → ^(A-4)_(Z-2)Y + ⁴₂He"
                  },
                  {
                    "name": "Beta-Minus Decay (β⁻)",
                    "tag": "Neutron Transmutation",
                    "desc": "Neutron transforms into proton, electron, and electron antineutrino via weak interaction.",
                    "formula": "n → p + e⁻ + ν̄_e"
                  },
                  {
                    "name": "Beta-Plus Decay (β⁺)",
                    "tag": "Positron Emission",
                    "desc": "Proton transforms into neutron, positron, and electron neutrino.",
                    "formula": "p → n + e⁺ + ν_e"
                  },
                  {
                    "name": "Gamma Emission (γ)",
                    "tag": "Nuclear De-excitation",
                    "desc": "Excited nucleus releases high-energy photon without changing A or Z.",
                    "formula": "^A_Z X* → ^A_Z X + γ"
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
                    "formula": "N(t) = N₀ e^(-λt)"
                  },
                  {
                    "name": "Radioactive Activity A",
                    "tag": "Becquerels",
                    "desc": "Number of disintegrations occurring per second.",
                    "formula": "A = -dN/dt = λ N (1 Bq = 1 decay/s)"
                  },
                  {
                    "name": "Half-Life T_½",
                    "tag": "Time to Halve",
                    "desc": "Time required for half the original radioactive nuclei to decay.",
                    "formula": "T_½ = (ln 2) / λ ≈ 0.693 / λ"
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
                    "formula": "²³⁵_92 U + ¹_0 n → ²³⁶_92 U* → Fission"
                  },
                  {
                    "name": "Liquid Drop Splitting",
                    "tag": "Deformation",
                    "desc": "Nuclear surface tension fails against Coulomb repulsion, cleaving into asymmetric daughter nuclei.",
                    "formula": "e.g. ¹⁴¹_56 Ba + ⁹²_36 Kr + 3 ¹_0 n"
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
                    "formula": "Q ≈ 200 MeV per fission event"
                  },
                  {
                    "name": "Prompt Prompt Emission",
                    "tag": "Neutrons & Gammas",
                    "desc": "Average 2.5 prompt neutrons and gamma rays emitted instantaneously within 10⁻¹⁴ s.",
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
                    "desc": "Positively charged protons require core temperatures > 10⁷ K and high density to overcome electrostatic barrier.",
                    "formula": "T_core ~ 1.5 × 10⁷ K"
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
                    "formula": "4 ¹_1 H → ⁴_2 He + 2 e⁺ + 2 ν_e + 26.7 MeV"
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
                    "formula": "dP/dr = -G M(r) ρ(r) / r²"
                  },
                  {
                    "name": "Solar Layers",
                    "tag": "Internal Architecture",
                    "desc": "Thermonuclear core, radiative zone, convection zone, photosphere.",
                    "formula": "Main sequence lifespan ~ M / L ∝ M^(-2.5)"
                  }
                ]
              },
              {
                "id": "b3",
                "title": "Stellar Life Cycles & Remnants",
                "badge": "Stellar Evolution",
                "subconcepts": [
                  {
                    "name": "Low-Mass Stars (< 8 M_⊙)",
                    "tag": "White Dwarf",
                    "desc": "Main sequence → Red giant → Planetary nebula → White dwarf supported by electron degeneracy pressure.",
                    "formula": "Chandrasekhar limit M_wd ≤ 1.44 M_⊙"
                  },
                  {
                    "name": "High-Mass Stars (> 8 M_⊙)",
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
                    "formula": "L = 4π R² σ T⁴"
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
                    "formula": "L ∝ M^(3.5)"
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
      "simulationType": "projectile-sim",
      "subject": "Science"
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
      "simulationType": "forces-sim",
      "subject": "Science"
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
      "simulationType": "energy-sim",
      "subject": "Science"
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
      "simulationType": "collision-sim",
      "subject": "Science"
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
      "simulationType": "rotation-sim",
      "subject": "Science"
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
      "simulationType": "relativity-sim",
      "subject": "Science"
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
      "simulationType": "thermal-sim",
      "subject": "Science"
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
      "simulationType": "greenhouse-sim",
      "subject": "Science"
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
      "simulationType": "gas-sim",
      "subject": "Science"
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
      "simulationType": "engine-sim",
      "subject": "Science"
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
      "simulationType": "circuits-sim",
      "subject": "Science"
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
      "simulationType": "shm-sim",
      "subject": "Science"
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
      "simulationType": "wave-sim",
      "subject": "Science"
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
      "simulationType": "optics-sim",
      "subject": "Science"
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
      "simulationType": "standing-wave-sim",
      "subject": "Science"
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
      "simulationType": "doppler-sim",
      "subject": "Science"
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
      "simulationType": "orbit-sim",
      "subject": "Science"
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
      "simulationType": "fields-sim",
      "subject": "Science"
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
      "simulationType": "cyclotron-sim",
      "subject": "Science"
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
      "simulationType": "induction-sim",
      "subject": "Science"
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
      "simulationType": "bohr-sim",
      "subject": "Science"
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
      "simulationType": "photoelectric-sim",
      "subject": "Science"
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
      "simulationType": "nuclear-sim",
      "subject": "Science"
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
      "simulationType": "fission-sim",
      "subject": "Science"
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
      "simulationType": "hr-diagram-sim",
      "subject": "Science"
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
