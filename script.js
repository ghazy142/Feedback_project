// Course templates: name + "covered" + "next"
const coursesConfig = {
  // لو ما اخترتش كورس من الـ dropdown
  default: {
    courseName: "",
    covered: [
      "Session 1–2: Introduction to the Scoolcode environment, basic movement and events.",
      "Session 3–4: Simple animations and drawing with the Pen tool using loops.",
      "Session 5: Variables for score and time, basic conditions.",
      "Session 6: If/else logic and reactions when touching colors or actors.",
      "Session 7: Small arcade-style games combining motion, sensing, and variables.",
      "Session 8: Mini project – complete game with controls, scoring and win conditions."
    ],
    next: [
      "More practice with timers and countdown mechanics.",
      "Using variables for lives, levels and collected items.",
      "Introduction to lists and list-based games.",
      "Preparing for more advanced programming courses."
    ]
  },

  // 101 – Digital Discovery (short discovery course)
  "101": {
    courseName: "101 – Digital Discovery",
    covered: [
      "Session 1–2: Greeting, house rules and getting to know each other. Students practiced basic computer use (turning the computer on/off, holding and using the mouse correctly) and logged in to MyLogiscool for the first time, with simple team-building games.",
      "Session 3–4: Introduction to Bee-bot and left–right directions. Students learned how to program the robot using simple button sequences and connected movements to directions on maps and simple roads and traffic signs activities.",
    ],
    next: [
      "Session 5: First Scoolcode mini-games. Kids created very simple programs with ready-made actors and backdrops, practicing clicking, dragging blocks and running their own projects.",
      "Session 6: Shapes and Scoolcode. Students used Scoolcode to draw and recognize basic shapes, combining offline drawing tasks with digital ones.",
      "Session 7: Bee-bot shapes. Students programmed Bee-bot to trace shapes on the floor (squares, rectangles, simple paths), connecting geometry with step-by-step programming.",
    ]
  },

  // 111 – Digital Discovery Basic Normal 1
  "111": {
    courseName: "111 – Digital Discovery Basic Normal 1",
    covered: [
      "Session 1–3: The history of gadgets, hardware vs. software, and an introduction to programming. Students saw where computers fit in human history, learned the basic parts of a computer, and talked about what programming and algorithms mean in simple words.",
      "Session 4–5: Personal data and impostors. We discussed online identity, what personal data is, why it must be protected, and how to recognize suspicious behavior or fake identities on the internet.",
      "Session 6–7: History of programming and quizzes. Students discovered how programming languages evolved and practiced their knowledge with interactive quizzes and classroom discussions."
    ],
    next: [
      "Session 8–9: Passwords and cryptography. We talked about strong vs. weak passwords, tried creating safe passwords, and explored simple codes and ciphers (like substitution and basic encryption ideas).",
      "Session 10–11: Robots and everyday robotics. Students learned what robots are, where we see them in real life, and how sensors and simple programs help robots complete tasks.",
      "Session 12–14: Visual communication, emotions and storytelling. We discussed how images, icons and emojis communicate meaning, then used these ideas to plan small digital stories and scenarios.",
      "Session 15–16: Animations and urban legends. Students created or analyzed simple animations and talked about fake information and urban legends online – how to question what we see or read.",
      "Session 17: Project lesson and presentation – each student prepared a small project (drawing, Scoolcode project, or similar) and presented what they learned during the semester."
    ]
  },

  // 161 – Blox Basic (Normal 1)
  "161": {
    courseName: "161 – Blox Basic (Normal 1)",
    covered: [
      "Session 1–3: House rules, MyLogiscool and Scoolcode introduction. Students learned class rules, logged in to MyLogiscool and created their first Scoolcode projects focusing on actors, movement and simple events (when started, when key pressed).",
      "Session 4–5: Pen tool and first variables. Through a witch adventure and an undersea game, students practiced drawing with the pen tool, coordinates, and began using simple variables such as score and counters inside games.",
      "Session 6–7: Cat–mouse–cheese and Ghost Buster games. They learned more complex movement, collisions and conditions (if/else) by building games where players chase or avoid other actors and react to touches and colors.",
    ],
    next: [
      "Session 8: Mid-term project lesson – students combined everything learned so far (movement, pen, collisions, variables) to design a small custom game.",
      "Session 9–10: Save the Earth and quiz games. We practiced events, scoring and levels by building an eco-themed game and a quiz, including question/answer logic and feedback for correct/incorrect answers.",
      "Session 11–13: Variables in more depth. With balloon-shooting and aura of a wasp projects, students used multiple variables (score, lives, time, speed), practiced randomization and refined their use of if/else logic.",
      "Session 15–16: Save the space station and robot-hunting games. These lessons focused on more advanced game logic: multiple actors, parallax or changing backdrops, timers, and slightly more complex conditions for win/lose states.",
      "Session 17: Final project lesson – students chose or designed their own game and used all core concepts (events, movement, variables, conditions, drawing) to finish a complete project for the end of the semester."
    ]
  },

  // 171 – Blox Basic (Normal 2)
  "171": {
    courseName: "171 – Blox Basic (Normal 2)",
    covered: [
      "Session 1–3: House rules revision, MyLogiscool and pen tool refresh. Students revisited Scoolcode basics, did free-hand drawing with the pen tool and built an antidote collector game that reinforced movement and drawing.",
      "Session 4–5: loops and Shark vs. jellyfish. We connected physical robotics (Spike Prime) with programming loops and then created games mixing drawing, movement and simple enemy behavior.",
      "Session 6–7: Mouse chase and Sail the Seal. Students practiced more precise controls, avoiding obstacles, and reacting to touches, building games that require timing and navigation.",
    ],
    next: [
      "Session 8: Mid-term project lesson – each student chose a favorite idea from previous lessons and turned it into a small game or animation.",
      "Session 9–12: Variables and game mechanics. Through Save the Earth, wizard battles and a fire-extinguishing game, students used variables for score, health, remaining time and resource counters, and linked them to visual feedback in the game.",
      "Session 13–14: Logical variables and number guessing. Students used booleans (true/false) in conditions and built a number-guessing game where feedback depends on comparisons and logical checks.",
      "Session 15-16: Cat in the city – a more complex Blox game with moving backgrounds, obstacles and combined mechanics.",
      "Session 17: Final project lesson – students created or polished a project of their choice using all their Blox knowledge (movement, variables, logic, sensors where applicable)."
    ]
  },

  // 212 – Blox Advanced (Lists & Text Games 1)
  "212": {
    courseName: "212 – Blox Advanced (Lists & Text Games 1)",
    covered: [
      "Session 1–3: XO game, coordinates and debugging. Students practiced working on a grid, learned to position actors using coordinates, and used signals and debugging techniques to fix logical and positioning errors.",
      "Session 4–7: Introduction to list data structures. Through multiple list-based projects, they learned how to create lists, add and remove items, loop through them and connect multiple lists to manage more complex game states.",
      "Session 8: Project lesson – students built a mid-term project focusing on lists (for example a memory or multi-step game).",
    ],
    next: [
      "Session 9–11: Text handling games – quiz, typing and anagram. These lessons developed string manipulation and list skills by building quiz games, typing practice and anagram puzzles that check and compare text.",
      "Session 12–13: Slime is hungry and squirrel jumping games. Students used lists together with collisions and physics-like movement to manage items (food, branches) and player progress.",
      "Session 14–16: Hangman, flying games and fish memory. These games combined lists, letters and positions: checking guesses, revealing letters, managing collected objects and building more complex win/lose logic.",
      "Session 17: Final project lesson – students designed their own advanced Blox game, typically using lists and/or text handling plus everything they had learned throughout the semester."
    ]
  },
  // 211 – Game Design Basics
"211": {
  courseName: "211 – Game Design Basics",
  covered: [
    "Session 1–2: Introduction to game genres and action games. Students discussed major game genres and action game subcategories, then completed a half-finished shooting game using variables for player health, enemy health, damage, shooting speed and rate of fire.",
    
    "Session 3–4: Game balancing and puzzle games. Students learned how balancing affects game difficulty by adjusting gameplay variables, testing each other's games and adding enemy spawners and shields. Later they explored puzzle game genres and created a memory game using streaks, timers, points and monster matching logic.",

    "Session 5: Strategy and tower defense games. Students explored strategy game categories (RTS, tower defense, MOBA, turn-based strategy) and completed a tower-defense style game with upgradeable tanks, coins, enemy waves and projectile systems.",

    "Session 6: Sports games and parallax effects. Students learned about sports and eSports games, then created a hurdling/running game using alternating key controls, speed variables, jumping mechanics, live costumes and parallax scrolling backgrounds.",

    "Session 7: Adventure games and storytelling. Students discussed adventure game subgenres and began designing their own story-driven mystery or exploration games with NPCs, inventory systems, hidden objects and branching interactions."
  ],

  next: [
    "Session 8: Game analysis and Pong recreation. Students will analyze classic game design principles by recreating and improving the classic Pong game while discussing gameplay mechanics and player feedback.",

    "Session 9–10: Racing and simulation games. Students will explore racing game mechanics, physics and controls while creating vehicle-based games with acceleration, obstacles and timing systems.",

    "Session 11–12: RPG systems and progression. Upcoming lessons will introduce role-playing game mechanics such as character progression, health systems, abilities, quests and enemy encounters.",

    "Session 13–15: Advanced game design projects. Students will combine genres and mechanics to create larger games with improved balancing, user interfaces, sound effects and more polished gameplay.",

    "Session 16–17: Final game project and presentation. Students will design, polish and present their own complete game project using the game design concepts, mechanics and programming techniques learned throughout the semester."
  ]
},

  // 221 – Blox Advanced (Lists & Cloning 2)
  "221": {
    courseName: "221 – Blox Advanced (Lists & Cloning 2)",
    covered: [
      "Session 1–3: Five-in-a-row game and signals. Students built a board-style game, learned about win conditions on a grid and practiced message-passing (signals) between actors for reactions and effects.",
      "Session 4–7: Cloning and multi-actor games. With ghost and sheep-collecting projects, they learned to create and control many clones, manage directions and speeds and handle interactions between large groups of actors.",
      "Session 8: Project lesson – students built a mid-term project focusing on signals and/or cloning.",
    ],
    next: [
      "Session 9–12: Lists and memory games. They were introduced to lists again with more depth, then used them to create memory games with fish and other items, tracking revealed pairs and cleared cards.",
      "Session 13–15: Firefighting, typing and anagram games. These lessons mixed fast reactions with string and list manipulation, helping students practice accuracy and algorithmic thinking.",
      "Session 16: Space Invaders – they created a shooter game with moving enemy rows, bullets and win/lose backgrounds, practicing variables for speed and delay.",
      "Session 17: Final project lesson – students combined lists, cloning, signals and their favorite mechanics into one semester-closing project."
    ]
  },

  // 311 – Mix Basic (Python Mix)
  "311": {
    courseName: "311 – Mix Basic (Python Mix)",
    covered: [
      "Session 1–2: Getting familiar with the Python Mix environment. Students created the Shark eats fish game using blocks, then looked at the generated StagePython code to understand how blocks translate into text.",
      "Session 3–4: Lists and cloning. They learned to use list data structures and cloning to manage multiple actors, practicing loops, random positions and collision handling.",
      "Session 5–7: Space travelling and Rock–paper–scissors. These projects practiced conditions, score variables and keyboard control in more dynamic games.",
    ],
    next: [
      "Session 8: Project lesson – students built a full game in Mix using what they had learned so far.",
      "Session 9–11: Functions and parameters. They started writing their own functions, called them from different parts of the code, and later extended them with parameters to reuse logic in multiple situations.",
      "Session 12–13: Functions with return values and physics. Students used functions that return values, connected them to simple physics (movement, forces, collisions) and reinforced structured code design.",
      "Session 14–16: Function-based mini games such as simple function-driven games, Floating fish and a spaceship rescue mission. They practiced splitting big problems into smaller functions and coordinating multiple actors using shared logic.",
      "Session 17: Final project lesson – students created a more complex Mix game from scratch or significantly upgraded an earlier one, using functions, lists, cloning and physics."
    ]
  },

  // 312 – Mix Advanced (Algorithms & Games)
  "312": {
    courseName: "312 – Mix Advanced (Algorithms & Games)",
    covered: [
      "Session 1–2: Lists, functions and physics. Students built a number-clicking memory game and a physics-based basketball game, practicing list operations, helper functions and basic physics properties such as gravity, forces and collision.",
      "Session 3–6: Aggregation algorithms – sum, minimum, minimum–maximum–average, conditional sum and counting. They learned how to process a list to calculate totals, minima, maxima and filtered sums using loops and conditions.",
      "Session 7–8: Flappy Bat game (parts 1–2). Students implemented a side-scrolling game with gravity, jumping mechanics, obstacles, collision detection, scoring and game-over/restart logic.",
    ],
    next: [
      "Session 9–11: Lists and linear search. They wrote functions that search through lists, first in simple scenarios and then in drag-and-drop style games that check correctness based on list content.",
      "Session 12–14: Sorting algorithms. Students implemented basic swap sort and bubble sort visually, comparing elements, swapping them and watching step-by-step how a list becomes ordered.",
      "Session 15–16: Dino Run game. They built a runner-style game with increasing difficulty, combining physics, collisions, score tracking and the algorithms learned earlier to manage speed and game state.",
      "Session 17: Final project lesson – students created a more complex Mix game from scratch or significantly upgraded an earlier one, using functions, lists, cloning and physics."
    ]
  },

  // 431 – Python Basics (StagePython / PyCharm)
  "431": {
    courseName: "431 – Python Basics (StagePython / PyCharm)",
    covered: [
      "Session 1–2: Basics of Python, text formatting and variables. Students were introduced to Python and PyCharm, wrote their first .py files with print() and input(), and used simple variables and text formatting.",
      "Session 3–4: Mad-Lib stories and if-statements. They created small text-based stories using user input and if statements, then extended them with operators and more complex logical conditions.",
      "Session 5–7: While loops, lists and for loops. Students practiced loops to repeat actions, used lists to store multiple values, and iterated over them with for loops to build small console programs.",
    ],
    next: [
      "Session 8–10: Combined practice with variables and statements plus a dedicated practice lesson. These sessions reinforced everything learned so far, with small tasks mixing input, conditions, loops and lists.",
      "Session 11–13: Nested loops, Turtle graphics and more list practice. Students used nested loops to draw patterns with Turtle and solved more complex list problems step by step.",
      "Session 14–15: Practice and semester summary. They completed a set of integrated exercises and then summarized the most important Python concepts (types, variables, control flow, lists and functions).",
      "Session 16–17: Escape room project (part 1–2). Students designed and implemented a text-based escape room game, using conditions, loops, lists and functions to create branching stories, choices and multiple endings."
    ]
  },
// 112 – Digital Discovery Basic Normal 2
"112": {
  courseName: "112 – Digital Discovery Basic Normal 2",
  covered: [
    "Session 1–2: Revision and getting to know each other again. Students played the Operation Balloon Rescue Scoolcode game, revised basic computer and Scoolcode usage, talked about their favourite games and activities, and warmed up on TypingClub.",
    "Session 3–4: Pixels and games. Students learned what pixels are and how image resolution works using Paint, created simple pixel-art and a mirroring drawing program in Scoolcode, explored different game genres and gamer types, and built a small 'Shark eats fish' style game.",
    "Session 5: Uploading and downloading. We discussed the difference between upload, download and streaming, played an offline variable card game, and extended the 'Collecting Witch' Scoolcode project by uploading and using new ghost costumes while practicing variables and conditions.",
    "Session 6: Writing a letter now and then. Students compared traditional letters with modern email, practiced text editing and formatting in LibreOffice by writing a letter, used a temporary email address to send/receive messages, and created the Scoolcode project 'Adam’s letters' to reinforce variables and logic.",
    "Session 7: Rules. We talked about rules in everyday life and in the digital world (safety, responsibility and consequences) and then practiced variables and conditions in the 'Wildfire in the condo' Scoolcode game using a hydrant and water logic to control the fire.",
    "Session 8: Digital travel. Students learned about digital maps, cartography and positioning using tools like Google Maps and what3words, then designed and edited digital postcards in Canva based on selected travel destinations."
  ],
  next: [
    "Session 9–10: Navigation, dimensions and space. Students will deepen their understanding of GPS and digital navigation with Google Maps and Google Earth, practice planning routes, then explore 1D/2D/3D and coordinate systems while building a small future city in Tinkercad and programming Scoolcode games such as 'Math safari' and 'Save the blue planet'.",
    "Session 11–12: Motion picture and presentation. Upcoming lessons will cover the basics of films and animation, from the history of cinema to video editing with Microsoft Clipchamp, plus a Scoolcode animation project 'Space dog vs. space insects'. Afterwards, students will collect news articles and turn them into engaging digital presentations using Prezi or Canva, practicing structure, visual design and presentation skills.",
    "Session 13: Vehicles. Students will explore electric and digital vehicles, the future of transportation and sustainability, then build a Scoolcode project (e.g. 'Rival delivery drones') to model routes, collisions and simple automation.",
    "Session 14–15: Collections and numbers. These lessons will focus on collecting and analysing data about the group (tables, averages and using a calculator), then on number systems (decimal, binary, base-12/base-20), conversions, bits, bytes and storage sizes, supported by a Scoolcode project like 'Food storing hamster'.",
    "Session 16–17: Mini quiz and flashback to the past. The course will close with a review mini-quiz and playful recap of key topics (internet, navigation, media, programming), followed by a 'Flashback to the past' session on how science-fiction books and movies predicted or inspired modern technologies, plus a final Scoolcode variables game about defending a Moon colony."
  ]
},
// 162 – Blox Basic normal 2
"162": {
  courseName: "162 – Blox Basic normal 2",
  covered: [
    "Session 1–2: Social network game. Using variables (new friends, time), mouse-pointer following, random movement and a countdown to see how many friends you can make.",
    "Session 3–4: Air Hockey game. Using a gameStatus variable for game phases, power bar, zoom/follow camera and score variables with win/lose endings.",
    "Session 5: Ozi in the street. Using the built-in Timer in a collecting game with random items, simple collision and camera follow.",
    "Session 6: Unicorn feeding. Using lifePoints and timing, collecting good items and avoiding bad ones, plus a global speed variable for all collectibles.",
    "Session 7: Number-collecting game. Pointer-over sensing, difficulty buttons (Easy/Medium/Hard), gliding numbers and a timer that checks if the level was finished in time."
  ],
  next: [
    "Session 8: Project lesson. Students continue or create a small game, focusing on correct use of variables, loops and conditions.",
    "Session 9: Boolean variables. Button-copying game using true/false variables to check if all buttons match the task, plus timer and Game Over/Win.",
    "Session 10: Logical operators AND/OR. Candy game where the basket collects sweets that match a target candy based on a random AND/OR rule.",
    "Session 11: Potion mixer. Color-mixing game using logical variables and operators to check if the mix matches the goal potion.",
    "Session 12: Prehistoric Math. Dinosaur game to practice division without remainder by choosing the correct quotient.",
    "Session 13: Cake Sharing. Divisibility and remainders with the formula dividend = divisor × integers + remainder, using cakes and points.",
    "Session 14: Number guessing. Mage game with a hidden number, limited tips and optional helper that shows the [min, max] interval.",
    "Session 15: Squirrel forest game. Parallax scrolling, movement variables, lives, points and enemies like mosquitos and an evil squirrel.",
    "Session 16: Detective game. Summary project with parallax, different variable types, logical operators and several game-over conditions.",
    "Session 17: Final project. Students design or extend a game of their choice and present it to the group."
  ]
},
"110": {
  courseName: "110 – Digital Intro",
  covered: [
    "Session 1: Greeting, rules, name games, and first computer basics (mouse, desktop, icons). Kids practiced on code.org Course 1 Levels 3–4.",
    "Session 2: Mouse practice with balloon-popping and chest-collecting games, left–right recognition activities, and MyLogiscool login basics.",
    "Session 3: MyLogiscool introduction, mini-quests, and offline robot-play. Bee-bot introduction with simple forward/turn commands.",
    "Session 4: Introduction to Kodu world-building tools (terrain, mountains, water, characters). Kids created simple robots from shapes.",
    "Session 5: Bee-bot shape game (identifying shapes without naming them) and online drawing activities (pattern blocks, mirror drawing).",
    "Session 6: Kodu basics continued — movement, adding characters, simple reactions. Kids created a small 'meet the friend' game and fish pond.",
    "Session 7: Accessibility awareness (how people with disabilities use computers). Mouse practice with math games + Bee-bot dice activity.",
    
  ],
  next: [
    "Session 8: Robotics day — online Bits & Bricks robot programming + LEGO WeDo/Spike building or virtual LEGO builder.",
    "Session 9: Cardinal directions with Bee-bot (N–S–E–W), treasure maps, and Kodu surface-sensing game (detecting terrain types).",
    "Session 10: Creating Flappy Bird in code.org + Simon Says game + Bee-bot traversal challenge (finding all valid 3×3 paths).",
    "Session 11: Internet history discussion + MyLogiscool quizzes + Kodu football game (two-player logic, pages, scoring).",
    "Session 12: Personal data and privacy talk + create-your-own Bee-bot map + map swapping and testing.",
    "Session 13: Paint introduction (tools, colors, shapes). Kids designed a creative landscape in Paint then recreated it in Kodu 3D.",
    "Session 14: Encyclopedias & Wikipedia + Kodu collecting game with scoring and guards (wander, lose condition).",
    "Session 15: Emoticons vs emojis + Bee-bot drawing to Paint (one student programs, one draws), then creative artwork expansion.",
    "Session 16: Paint background creation for Scoolcode stamping game (1334×750). Upload and decorate in Design tab.",
    "Session 17: Final project lesson (Paint, Bee-bot, or Kodu). Students create and present a small project, recap all digital topics learned."  ]
},
"421": {
  courseName: "421 – Unity Basic",
  covered: [
    "Session 1–2: Introduction to Unity Editor (Scene/Game view, Hierarchy, Inspector) and basic transforms. Students created a simple scene and practiced moving objects.",
    "Session 3: First C# script for movement and collisions, attaching scripts to GameObjects, and restarting scenes.",
    "Session 4–5: Asset Store basics, importing assets, replacing primitives with models, adding simple lighting and UI to polish a small demo.",
    "Session 6: Platform Switcher game (part 1): building Level 1 layout, creating two layers, organizing the scene, and setting up the camera.",
    "Session 7: Platform Switcher game (part 2): player movement with Rigidbody, jumping, and implementing the layer-switch mechanic using coroutines."
  ],
  next: [
    "Session 8: Finish Platform Switcher (part 3) with obstacles, trampolines, teleporters, coins, and Game Over logic.",
    "Session 9: Start Race game — build track, add a car with physics, and create a follow camera.",
    "Session 10–11: Add GUI timer, lap time, speed indicator, and refine race logic with triggers.",
    "Session 12: Start FPS labyrinth — FPSController setup, maze layout, lighting, and finish point.",
    "Session 13: Add invisible walls, pressure plate + door, and multi-level scene switching.",
    "Session 14–15: Mobile game — Android setup, touch controls, UI buttons, and obstacles.",
    "Session 16: Final project — students design and start their own Unity mini-game.",
    "Session 17: Final project polish, debugging, UI, presentation, and course recap."
  ]
},
"291": {
  courseName: "291 – Game Design",
  covered: [
    "Session 1: Game Types & Action Games — Introduction to main game genres (Action, Adventure, Puzzle, Racing, RPG, Simulation, Sports, Strategy). Students discuss favorite games, analyze genres, and work on a basic shooting game. Core concepts: player/enemy logic, variables, HP, movement, shooting, win/lose conditions, and basic game structure.",

    "Session 2: Action Games & Game Balancing — Deep dive into action subgenres (Shooter, Platformer, Survival, Fighting, Rhythm, Action-Adventure). Introduction to game balancing and difficulty design (casual vs hardcore). Students adjust gameplay variables (HP, damage, fire rate, speed) and add a shield/spawner enemy. Focus on testing, iteration, and player experience.",

    "Session 3: Puzzle Games — Exploration of puzzle genres (Action-Puzzle, Memory, Hidden Object, Physics-Puzzle, Tile-Matching, Traditional). Students build a full memory game with scoring system, streak logic, timer, stars, levels, feedback systems, and win/lose screens. Focus on logic design and progression systems.",

    "Session 4: Strategy Games — Introduction to strategy genres (RTS, MOBA, Tower Defense, Turn-Based, 4X, Artillery). Students build a tower-defense style game with tanks, enemies, ammo systems, coins, upgrades, waves, economy systems, and progression mechanics.",

    "Session 5: Sports Games & eSports — Understanding sports games and eSports concepts. Students develop a running/hurdling game using parallax backgrounds, alternating key mechanics, speed systems, obstacles, cheating prevention, and visual speed indicators. Focus on mechanics, fairness, and player control systems.",

    "Session 6: Adventure Games & Own Project — Introduction to adventure game genres (Point-and-Click, Visual Novel, Interactive Book, Cinematic, Text-Based). Focus on storytelling, narrative design, choices, NPC interaction, inventory systems, and mystery design. Students work on individual adventure game projects.",

    "Session 7: Game Analysis (Pong) — Analytical breakdown of Pong as a classic game: mechanics, rules, scoring, win/lose states, prototype/MVP concepts. Students redesign and improve Pong by adding AI, obstacles, power-ups, speed systems, and new mechanics. Focus on game analysis and iterative design."
  ],
  next: [
    "Session 8: Simulation — Introduction to simulation vs arcade games. Physics-based spaceship simulation with momentum, thrust, deceleration, rotation, and immersive interaction design concepts.",

    "Session 9: Developing the Simulation — Expansion into a multiplayer simulation-based shooter game. Two-player systems, rounds, lives, scoring, bullets, competition mechanics, and power-up systems.",

    "Session 10: Game Design Basics — Core game design principles: Player/Avatar, Aim, Objectives, Rules, Obstacles, Conflict, Win State, Fail State, Feedback Systems, Progression Systems. Understanding games as structured systems.",

    "Session 11: Player Experience (UX in Games) — Understanding player emotions, engagement, motivation, flow, frustration curves, and player psychology.",

    "Session 12: Level Design Principles — Spatial design, difficulty curves, pacing, challenge distribution, guidance systems, and player navigation design.",

    "Session 13: Narrative Design — Story structures in games, branching narratives, player choices, consequences, emotional design, and storytelling systems.",

    "Session 14: Reward Systems & Progression — Rewards, leveling systems, unlockables, achievements, feedback loops, motivation cycles, and retention design.",

    "Session 15: Testing & Balancing — Playtesting methods, balancing techniques, bug fixing, difficulty tuning, and quality assurance principles.",

    "Session 16: Game Project Development — Students work on a structured final game project applying design, mechanics, balance, narrative, and UX principles.",

    "Session 17: Final Project Presentation — Final game presentation, analysis, peer feedback, reflection, and evaluation of design decisions and learning outcomes."
  ]
}








};


// ================== DOM elements ==================
const studentNameInput = document.getElementById("studentName");
const courseSelect = document.getElementById("courseSelect");
const lessonsFromInput = document.getElementById("lessonsFrom");
const lessonsToInput = document.getElementById("lessonsTo");
const overviewInput = document.getElementById("overviewInput");
const coachNotesInput = document.getElementById("coachNotesInput");

const feedbackTypeSelect = document.getElementById("feedbackType");
const nextSection = document.getElementById("next-section");

const previewStudentName = document.getElementById("previewStudentName");
const previewCourseName = document.getElementById("previewCourseName");
const previewLessonsRange = document.getElementById("previewLessonsRange");
const previewOverview = document.getElementById("previewOverview");
const previewCoachNotes = document.getElementById("previewCoachNotes");
const previewCovered = document.getElementById("previewCovered");
const previewNext = document.getElementById("previewNext");

const applyTemplateBtn = document.getElementById("applyTemplateBtn");
const resetBtn = document.getElementById("resetBtn");
const downloadPdfBtn = document.getElementById("downloadPdfBtn");


// ================== helpers ==================
function getSelectedCourseName() {
  if (!courseSelect) return "";
  const opt = courseSelect.options[courseSelect.selectedIndex];
  return opt ? opt.text : "";
}

function setListContent(ulElement, items) {
  if (!ulElement || !Array.isArray(items)) return;
  ulElement.innerHTML = "";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ulElement.appendChild(li);
  });
}

// يتحكم في What We Covered / What's Next حسب الكورس ونوع الفيدباك
function applyCourseSections() {
  const code = courseSelect.value;
  const cfg = coursesConfig[code] || coursesConfig.default;
  const isFinal = feedbackTypeSelect && feedbackTypeSelect.value === "final";

  const coveredArr = Array.isArray(cfg.covered) ? cfg.covered : [];
  const nextArr = Array.isArray(cfg.next) ? cfg.next : [];

  if (isFinal) {
    // FINAL → نحط covered + next كلهم تحت What We Covered
    const combined = coveredArr.concat(nextArr);
    setListContent(previewCovered, combined);
    setListContent(previewNext, []);
  } else {
    // MID → covered لوحده و next لوحده
    setListContent(previewCovered, coveredArr);
    setListContent(previewNext, nextArr);
  }
}


// ================== preview ==================
function updatePreview() {
  previewStudentName.textContent =
    studentNameInput.value.trim() || "[Student Name]";

  const courseName = getSelectedCourseName();
  previewCourseName.textContent = courseName || "[Course Name]";

  const from = lessonsFromInput.value.trim();
  const to = lessonsToInput.value.trim();
  previewLessonsRange.textContent =
    from || to ? `${from || "?"} → ${to || "?"}` : "[1 → 8]";

  previewOverview.textContent =
    overviewInput.value.trim() || "(Overview will appear here…)";

  previewCoachNotes.textContent =
    coachNotesInput.value.trim() || "(Coach’s notes will appear here…)";

  // إظهار/إخفاء الـ "What's Next" حسب نوع الفيدباك
  if (feedbackTypeSelect && nextSection) {
    if (feedbackTypeSelect.value === "final") {
      nextSection.style.display = "none";
    } else {
      nextSection.style.display = "block";
    }
  }
}


// ================== events ==================
studentNameInput.addEventListener("input", updatePreview);
lessonsFromInput.addEventListener("input", updatePreview);
lessonsToInput.addEventListener("input", updatePreview);
overviewInput.addEventListener("input", updatePreview);
coachNotesInput.addEventListener("input", updatePreview);

courseSelect.addEventListener("change", function () {
  applyCourseSections();
  updatePreview();
});

if (feedbackTypeSelect) {
  feedbackTypeSelect.addEventListener("change", function () {
    applyCourseSections();
    updatePreview();
  });
}

// Fill example text (Zeena template)
applyTemplateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!studentNameInput.value) {
    studentNameInput.value = "Zeena Haque";
  }
  if (!courseSelect.value) {
    courseSelect.value = "161"; // ديفولت
  }
  if (!lessonsFromInput.value) {
    lessonsFromInput.value = "1";
  }
  if (!lessonsToInput.value) {
    lessonsToInput.value = "8";
  }

  if (!overviewInput.value) {
    overviewInput.value =
      "Zeena is a very smart and cheerful student. She understands new concepts quickly and actively participates during class discussions. To reach her full potential, she just needs a bit more practice at home to strengthen what she learns in class.";
  }

  if (!coachNotesInput.value) {
    coachNotesInput.value =
      "She is progressing well. I recommend practicing small games at home and trying to add new features like sound or extra actors to build more confidence and creativity.";
  }

  applyCourseSections();
  updatePreview();
});

// Reset form & preview
resetBtn.addEventListener("click", function () {
  studentNameInput.value = "";
  courseSelect.selectedIndex = 0;
  lessonsFromInput.value = "";
  lessonsToInput.value = "";
  overviewInput.value = "";
  coachNotesInput.value = "";
  if (feedbackTypeSelect) {
    feedbackTypeSelect.value = "mid"; // نرجّع النوع لـ mid-course
  }

  applyCourseSections();
  updatePreview();
});

// Download PDF
downloadPdfBtn.addEventListener("click", function () {
  updatePreview(); // make sure preview is up to date

  const element = document.getElementById("feedback-preview");
  const name = studentNameInput.value.trim() || "student";

  if (typeof html2pdf === "undefined") {
    alert("html2pdf.js is not loaded. Please check your internet connection or the script URL.");
    console.error("html2pdf is undefined – check CDN script tag.");
    return;
  }

  window.scrollTo(0, 0);

  const opt = {
    margin: 10,
    filename: `feedback-${name}.pdf`,
    image: { type: "jpeg", quality: 1.0 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  setTimeout(() => {
    html2pdf().set(opt).from(element).save();
  }, 150);
});

// ================== initial ==================
applyCourseSections();
updatePreview();
