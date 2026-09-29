import json

# Full Brilliant learning paths
learning_paths = [
    {
        "id": "path-physics",
        "title": "Physics & Cosmology",
        "category": "Science",
        "grade": "GRADES 8-12",
        "subtitle": "Physics is the Fundamental Science of Nature",
        "badge": "25 CHAPTERS",
        "icon": "atom",
        "color": "#4f5df5",
        "accent": "#f59e0b",
        "courses": [
            { "id": "ch-1", "title": "Kinematics", "badge": "NEW", "grade": "GR 8–12", "gradient": "linear-gradient(135deg, #4f5df5, #f59e0b)", "iconType": "cube", "unit": "Unit A" },
            { "id": "ch-2", "title": "Forces & Newton's Laws", "badge": "CORE", "grade": "GR 8–12", "gradient": "#1f2a44", "iconType": "bar", "unit": "Unit A" },
            { "id": "ch-3", "title": "Work, Energy & Power", "badge": None, "grade": "GR 8–12", "gradient": "#1f2a44", "iconType": "square", "unit": "Unit A" },
            { "id": "ch-6", "title": "Special Relativity", "badge": "EINSTEIN", "grade": "ADVANCED", "gradient": "linear-gradient(135deg, #8b5cf6, #3b82f6)", "iconType": "circle", "unit": "Unit A" },
            { "id": "ch-7", "title": "Thermal Energy Transfers", "badge": None, "grade": "GR 8–12", "gradient": "#1f2a44", "iconType": "triangle", "unit": "Unit B" },
            { "id": "ch-12", "title": "Simple Harmonic Motion", "badge": None, "grade": "GR 8–12", "gradient": "#1f2a44", "iconType": "sine", "unit": "Unit C" },
            { "id": "ch-17", "title": "Gravitation & Orbits", "badge": None, "grade": "GR 8–12", "gradient": "#1f2a44", "iconType": "orbit", "unit": "Unit D" },
            { "id": "ch-23", "title": "Nuclear Physics", "badge": "HOT", "grade": "CORE", "gradient": "linear-gradient(135deg, #10b981, #06b6d4)", "iconType": "nucleus", "unit": "Unit E" },
            { "id": "ch-25", "title": "Nuclear Fusion & Stars", "badge": "FEATURED", "grade": "ADVANCED", "gradient": "linear-gradient(135deg, #ec4899, #f59e0b)", "iconType": "star", "unit": "Unit E" }
        ]
    },
    {
        "id": "path-math",
        "title": "Foundational Mathematics",
        "category": "Math",
        "grade": "FOUNDATIONS",
        "subtitle": "Master problem-solving and mathematical thinking from first principles",
        "badge": "ESSENTIAL",
        "icon": "sigma",
        "color": "#f59e0b",
        "accent": "#10b981",
        "courses": [
            { "id": "m-1", "title": "Mathematical Thinking", "badge": "POPULAR", "grade": "ALL LEVELS", "gradient": "linear-gradient(135deg, #f59e0b, #ec4899)", "iconType": "cube", "unit": "Foundations" },
            { "id": "m-2", "title": "Algebra Fundamentals", "badge": None, "grade": "GR 6–12", "gradient": "#1f2a44", "iconType": "bar", "unit": "Algebra" },
            { "id": "m-3", "title": "Geometry Fundamentals", "badge": None, "grade": "GR 7–12", "gradient": "#1f2a44", "iconType": "triangle", "unit": "Geometry" },
            { "id": "m-4", "title": "Pre-Calculus", "badge": None, "grade": "GR 9–12", "gradient": "#1f2a44", "iconType": "sine", "unit": "Calculus" },
            { "id": "m-5", "title": "Calculus Fundamentals", "badge": "RECOMMENDED", "grade": "COLLEGE", "gradient": "linear-gradient(135deg, #3b82f6, #10b981)", "iconType": "integral", "unit": "Calculus" },
            { "id": "m-6", "title": "Linear Algebra", "badge": None, "grade": "COLLEGE", "gradient": "#1f2a44", "iconType": "matrix", "unit": "Advanced" }
        ]
    },
    {
        "id": "path-cs",
        "title": "Computer Science & Programming",
        "category": "Computer Science",
        "grade": "ALL LEVELS",
        "subtitle": "Learn to think algorithmically and code interactively",
        "badge": "HANDS-ON",
        "icon": "code",
        "color": "#10b981",
        "accent": "#3b82f6",
        "courses": [
            { "id": "cs-1", "title": "Thinking in Code", "badge": "NEW", "grade": "BEGINNER", "gradient": "linear-gradient(135deg, #10b981, #3b82f6)", "iconType": "terminal", "unit": "Programming" },
            { "id": "cs-2", "title": "Programming with Python", "badge": "POPULAR", "grade": "CORE", "gradient": "#1f2a44", "iconType": "python", "unit": "Python" },
            { "id": "cs-3", "title": "Computer Science Fundamentals", "badge": None, "grade": "INTERMEDIATE", "gradient": "#1f2a44", "iconType": "chip", "unit": "Hardware" },
            { "id": "cs-4", "title": "Algorithms & Data Structures", "badge": "CORE", "grade": "ADVANCED", "gradient": "linear-gradient(135deg, #6366f1, #a855f7)", "iconType": "tree", "unit": "Algorithms" },
            { "id": "cs-5", "title": "How LLMs Work: Generative AI", "badge": "TRENDING", "grade": "MODERN", "gradient": "linear-gradient(135deg, #ec4899, #8b5cf6)", "iconType": "ai", "unit": "Artificial Intelligence" }
        ]
    },
    {
        "id": "path-data",
        "title": "Data Analysis & Statistics",
        "category": "Data Analysis",
        "grade": "INTERMEDIATE",
        "subtitle": "Interpret data, model uncertainty, and extract insights",
        "badge": "INDUSTRY",
        "icon": "chart",
        "color": "#38bdf8",
        "accent": "#ec4899",
        "courses": [
            { "id": "da-1", "title": "Everyday Data", "badge": "BEGINNER", "grade": "ALL LEVELS", "gradient": "linear-gradient(135deg, #38bdf8, #6366f1)", "iconType": "chart", "unit": "Data" },
            { "id": "da-2", "title": "Probability Fundamentals", "badge": None, "grade": "CORE", "gradient": "#1f2a44", "iconType": "dice", "unit": "Probability" },
            { "id": "da-3", "title": "Statistics & Decision Making", "badge": "POPULAR", "grade": "APPLIED", "gradient": "#1f2a44", "iconType": "bell", "unit": "Statistics" },
            { "id": "da-4", "title": "Machine Learning Foundations", "badge": "FEATURED", "grade": "ADVANCED", "gradient": "linear-gradient(135deg, #f59e0b, #ef4444)", "iconType": "neural", "unit": "Machine Learning" }
        ]
    }
]

# Units metadata for textbook contents
units_data = [
    {
        "id": "unit-a",
        "name": "Unit A: Space, time and motion",
        "shortName": "Space, Time & Motion",
        "page": 1,
        "badge": "Core Mechanics",
        "description": "Classical and relativistic mechanics covering kinematics, dynamics, energy, momentum, rotation, and spacetime.",
        "pathCategory": "Motion & Forces",
        "color": "#4f5df5"
    },
    {
        "id": "unit-b",
        "name": "Unit B: The particulate nature of matter",
        "shortName": "Particulate Matter",
        "page": 155,
        "badge": "Thermal & Energy",
        "description": "Thermal physics, atmospheric radiation, ideal gases, thermodynamics, and electrical circuits.",
        "pathCategory": "Energy & Work",
        "color": "#f59e0b"
    },
    {
        "id": "unit-c",
        "name": "Unit C: Wave behaviour",
        "shortName": "Wave Behaviour",
        "page": 263,
        "badge": "Oscillations & Waves",
        "description": "Simple harmonic motion, wave mechanics, superposition, interference, standing waves, and Doppler shift.",
        "pathCategory": "Waves & Sound",
        "color": "#10b981"
    },
    {
        "id": "unit-d",
        "name": "Unit D: Fields",
        "shortName": "Fields",
        "page": 357,
        "badge": "Forces & Induction",
        "description": "Gravitational, electrostatic, and magnetic fields, charge trajectories, and electromagnetic induction.",
        "pathCategory": "Electricity",
        "color": "#38bdf8"
    },
    {
        "id": "unit-e",
        "name": "Unit E: Nuclear and quantum physics",
        "shortName": "Nuclear & Quantum",
        "page": 449,
        "badge": "Modern Physics & Stars",
        "description": "Atomic structure, photon quantization, matter waves, nuclear radioactivity, fission, fusion, and stellar astrophysics.",
        "pathCategory": "Light & Optics",
        "color": "#ec4899"
    }
]

# We will import the existing chapters data from generate_curriculum.py
import re

with open("generate_curriculum.py", "r", encoding="utf-8") as f:
    orig_code = f.read()

# Extract chapters_data from original file
m = re.search(r'chapters_data = \[(.*?)\]\s*curriculum =', orig_code, re.DOTALL)
if m:
    chapters_raw = m.group(1)
    # execute in local scope to get chapters_data list
    local_env = {}
    exec("chapters_data = [" + chapters_raw + "]", {}, local_env)
    physics_chapters = local_env["chapters_data"]
else:
    raise RuntimeError("Could not extract chapters_data")

# Additional interactive courses for Math, CS, Data to complete Brilliant catalog
additional_courses = [
    {
        "id": "m-1",
        "num": "M1",
        "title": "Mathematical Thinking",
        "unitId": "math-foundations",
        "subject": "Math",
        "startPage": 1,
        "endPage": 45,
        "pathCategory": "Math",
        "difficulty": "Foundational",
        "badge": "Popular",
        "duration": "35 min",
        "sections": [
            {"num": "1.1", "title": "Pattern Recognition and Generalization", "page": 2, "desc": "Identify invariants, sequences, and inductive logic."},
            {"num": "1.2", "title": "Logical Deductions and Proof by Contradiction", "page": 14, "desc": "Construct rigorous step-by-step deductive chains."},
            {"num": "1.3", "title": "Pigeonhole Principle and Parity Arguments", "page": 28, "desc": "Solve combinatorics puzzles using discrete counting."}
        ],
        "summary": "Develop the habits of mind used by mathematicians. Learn to formulate hypotheses, test edge cases, and construct elegant logical arguments.",
        "keyFormulas": [
            {"tex": "S_n = \\frac{n(n+1)}{2}", "name": "Arithmetic Series Sum"},
            {"tex": "\\lceil n / k \\rceil", "name": "Pigeonhole Bound"}
        ],
        "simulationType": "math-sim",
        "quiz": [
            {
                "question": "If you have 13 pairs of socks in a drawer, how many individual socks must you pick to guarantee at least one matching pair?",
                "options": ["13", "14", "26", "2"],
                "correct": 1,
                "explanation": "By the Pigeonhole Principle, if there are 13 categories (colors/pairs), picking 14 guarantees at least two socks share the same category."
            }
        ]
    },
    {
        "id": "m-2",
        "num": "M2",
        "title": "Algebra Fundamentals",
        "unitId": "math-algebra",
        "subject": "Math",
        "startPage": 46,
        "endPage": 90,
        "pathCategory": "Math",
        "difficulty": "Core",
        "badge": "Core Math",
        "duration": "45 min",
        "sections": [
            {"num": "2.1", "title": "Linear Equations and Unknowns", "page": 48, "desc": "Equivalence operations, balancing equations, slope-intercept form."},
            {"num": "2.2", "title": "Systems of Linear Equations", "page": 62, "desc": "Substitution, elimination, and geometric intersection."},
            {"num": "2.3", "title": "Quadratic Equations and Factoring", "page": 76, "desc": "Completing the square, quadratic formula, vertex form."}
        ],
        "summary": "Master variables, expressions, and functions. Solve linear and quadratic equations visually and algebraically.",
        "keyFormulas": [
            {"tex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", "name": "Quadratic Formula"},
            {"tex": "y = mx + c", "name": "Slope-Intercept Form"}
        ],
        "simulationType": "math-sim",
        "quiz": [
            {
                "question": "What is the discriminant of the quadratic equation 2x² - 4x + 2 = 0?",
                "options": ["-16", "0", "16", "32"],
                "correct": 1,
                "explanation": "Δ = b² - 4ac = (-4)² - 4(2)(2) = 16 - 16 = 0. There is exactly one real root."
            }
        ]
    },
    {
        "id": "cs-1",
        "num": "CS1",
        "title": "Thinking in Code",
        "unitId": "cs-intro",
        "subject": "Computer Science",
        "startPage": 1,
        "endPage": 50,
        "pathCategory": "Computer Science",
        "difficulty": "Foundational",
        "badge": "Hands-On",
        "duration": "40 min",
        "sections": [
            {"num": "1.1", "title": "Decomposition and State Tracking", "page": 3, "desc": "Breaking complex problems into executable discrete instructions."},
            {"num": "1.2", "title": "Control Flow: Conditionals and Loops", "page": 18, "desc": "Branching if/else structures, while/for loops, invariants."},
            {"num": "1.3", "title": "Functions, Scope and Modularity", "page": 34, "desc": "Abstraction, parameter passing, return values, recursion."}
        ],
        "summary": "Develop the programmer's mindset. Understand state, control flow, functions, and recursion through interactive visual exercises.",
        "keyFormulas": [
            {"tex": "\\mathcal{O}(1) \\rightarrow \\mathcal{O}(\\log n) \\rightarrow \\mathcal{O}(n)", "name": "Time Complexity Hierarchy"}
        ],
        "simulationType": "code-sim",
        "quiz": [
            {
                "question": "What is the output of running a loop from i=0 to i<5 that accumulates sum += i?",
                "options": ["15", "10", "5", "0"],
                "correct": 1,
                "explanation": "0 + 1 + 2 + 3 + 4 = 10. The loop terminates when i reaches 5."
            }
        ]
    },
    {
        "id": "cs-2",
        "num": "CS2",
        "title": "Programming with Python",
        "unitId": "cs-python",
        "subject": "Computer Science",
        "startPage": 51,
        "endPage": 110,
        "pathCategory": "Computer Science",
        "difficulty": "Core",
        "badge": "Industry Standard",
        "duration": "50 min",
        "sections": [
            {"num": "2.1", "title": "Data Types, Lists and Dictionaries", "page": 53, "desc": "Strings, integers, dynamic arrays, key-value mappings."},
            {"num": "2.2", "title": "List Comprehensions and Functional Idioms", "page": 75, "desc": "Concise iteration, map, filter, lambda functions."},
            {"num": "2.3", "title": "Object-Oriented Design in Python", "page": 92, "desc": "Classes, methods, inheritance, encapsulation."}
        ],
        "summary": "Write real, expressive Python programs. Build fluency in data structures, algorithms, and modular software design.",
        "keyFormulas": [
            {"tex": "[f(x) \\text{ for } x \\text{ in } S \\text{ if } p(x)]", "name": "List Comprehension Syntax"}
        ],
        "simulationType": "code-sim",
        "quiz": [
            {
                "question": "Which Python data structure provides average O(1) key lookups?",
                "options": ["list", "tuple", "dict (hash map)", "linked list"],
                "correct": 2,
                "explanation": "Python dictionaries are implemented with hash tables, providing O(1) average time complexity for key lookups."
            }
        ]
    },
    {
        "id": "da-1",
        "num": "DA1",
        "title": "Everyday Data",
        "unitId": "data-intro",
        "subject": "Data Analysis",
        "startPage": 1,
        "endPage": 45,
        "pathCategory": "Data Analysis",
        "difficulty": "Foundational",
        "badge": "Intuitive",
        "duration": "35 min",
        "sections": [
            {"num": "1.1", "title": "Averages vs Medians: Avoiding Misleading Data", "page": 4, "desc": "Mean, median, mode, and when skewness distorts averages."},
            {"num": "1.2", "title": "Correlation vs Causation", "page": 19, "desc": "Confounding variables, reverse causality, selection bias."},
            {"num": "1.3", "title": "Data Visualisation Best Practices", "page": 32, "desc": "Effective bar charts, scatter plots, box-and-whisker plots."}
        ],
        "summary": "Become data-literate. Learn to identify statistical fallacies, interpret graphs correctly, and extract signal from noise.",
        "keyFormulas": [
            {"tex": "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i, \\quad \\sigma = \\sqrt{\\frac{1}{n}\\sum(x_i - \\bar{x})^2}", "name": "Mean and Standard Deviation"}
        ],
        "simulationType": "data-sim",
        "quiz": [
            {
                "question": "A company has 9 employees earning $50,000 and one CEO earning $1,050,000. Which measure best represents typical employee earnings?",
                "options": ["Mean ($150,000)", "Median ($50,000)", "Range ($1,000,000)", "Standard Deviation"],
                "correct": 1,
                "explanation": "The median is robust against extreme outliers, correctly reflecting that 90% of employees earn $50,000."
            }
        ]
    }
]

# Ensure physics chapters have subject="Science"
for ch in physics_chapters:
    ch["subject"] = "Science"

all_courses = physics_chapters + additional_courses

curriculum = {
    "brand": {
        "name": "Brilliant",
        "tagline": "Your Personal Tutor for Math, Science & Coding",
        "url": "https://brilliant.org/courses/"
    },
    "learningPaths": learning_paths,
    "units": units_data,
    "chapters": all_courses,
    "physicsChaptersCount": len(physics_chapters),
    "stats": {
        "totalUnits": len(units_data),
        "totalPhysicsChapters": len(physics_chapters),
        "totalCourses": len(all_courses),
        "totalPages": 551,
        "totalSections": sum(len(c.get("sections", [])) for c in all_courses),
        "totalFormulas": sum(len(c.get("keyFormulas", [])) for c in all_courses)
    }
}

output_code = "var NOVALEARN_DATA = (typeof window !== 'undefined' ? window : global).NOVALEARN_DATA = " + json.dumps(curriculum, indent=2) + ";\n"

with open("curriculum-data.js", "w", encoding="utf-8") as f:
    f.write(output_code)

print("Regenerated curriculum-data.js with Brilliant full learning paths & courses! Total courses:", len(all_courses))
