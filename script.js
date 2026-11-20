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

  // DI-102 – Digital Intelligence
  "DI-102": {
    courseName: "102 – Digital Intelligence",
    covered: [
      "Session 1: Hardware and software. Students learned the difference between the parts of a device they can touch and the programs inside it, drew their favourite hardware and practiced the keyboard in Scoolcode games.",
      "Session 2: Bee-bot arrow cards. Students programmed the Bee-bot with arrow and obstacle cards, went on a treasure hunt and memorised steps in a Bee-bot dance.",
      "Session 3: MS Paint and patterns. Students used the pencil, shapes and colour bucket in MS Paint, drew repeating patterns and recreated a robot made of shapes.",
      "Session 4: Story with images and Kodu. Students completed half-drawn pictures in Paint, got to know the Kodu world tools and built story scenes in pairs.",
      "Session 5: Pixel art. Students learned what pixels are and created pixel art on paper, in Scoolcode games and in Kodu.",
      "Session 6: Bee-bot mission. Students planned paths, counted steps and fixed mistakes to complete Bee-bot missions in the classroom, then created missions for each other.",
      "Session 7: MyLogiscool games. Students practiced using the mouse and the keyboard with high score and mini-quest games on MyLogiscool.",
      "Session 8: Kodu practice. Students learned the if–then idea and programmed their first Kodu game: collecting apples and returning to the hut to win."
    ],
    next: [
      "Session 9: Bee-bot map design. Students will design their own Bee-bot maps in pairs and play on each other's maps.",
      "Session 10: Scoolcode backgrounds. Students will draw a background and a tree in Paint and use them in their own Scoolcode scene.",
      "Session 11: LEGO with sensor. Students will build an animal shelter with LEGO and use a colour sensor to make it react.",
      "Session 12: Dice. Students will practice adding numbers with dice and play Snakes and Ladders and a building game in Scoolcode.",
      "Session 13: Board games. Students will design their own board game with special task spaces and play each other's games.",
      "Session 14: LEGO with sensor. Students will learn about wind and erosion and build a LEGO windbreaker with a colour sensor and LED panel.",
      "Session 15: Repetition. Students will learn what repetition means, give repeated commands to a classmate \"robot\" to walk shapes, and draw shapes with repetition in Scoolcode.",
      "Session 16: LEGO redesign. Students will build and program a LEGO kitchen tool, then take it apart and redesign it into a new object."
    ]
  },

  // DI-110 – Digital Intelligence
  "DI-110": {
    courseName: "110 – Digital Intelligence",
    covered: [
      "Session 1–2: Getting to know each other. Students played team-building games and practiced using the mouse with fun online games.",
      "Session 3: MyLogiscool and Bee-bot. Students logged in to MyLogiscool for the first time and gave the Bee-bot robot its first simple commands.",
      "Session 4: Introduction to Kodu. Students explored the Kodu world-building tools and talked about passwords.",
      "Session 5: Shapes. Students played a Bee-bot shape game and created drawings with online drawing tools.",
      "Session 6: Basics of Kodu. Students made a small Kodu game about meeting friends and talked about staying safe online.",
      "Session 7–8: Magic dice and the world of robotics. Students practiced the mouse with math games, played dice games with the Bee-bot and programmed robots online and offline."
    ],
    next: [
      "Session 9–10: Bee-bot and Kodu challenges. Students will play a Bee-bot treasure hunt, make a Kodu game that senses the ground, and create their own Flappy Bird game.",
      "Session 11–12: Internet and Bee-bot maps. Students will talk about the internet, build a football game in Kodu and design their own Bee-bot maps.",
      "Session 13–14: Paint and Kodu. Students will draw a landscape in Paint, rebuild it in Kodu and create a Kodu collecting game.",
      "Session 15–16: Paint, Bee-bot and Scoolcode. Students will copy Bee-bot movements into Paint drawings and design a background for a Scoolcode stamping game."
    ]
  },

  // DI-111 – Digital Intelligence
  "DI-111": {
    courseName: "111 – Digital Intelligence",
    covered: [
      "Session 1–2: History of gadgets, hardware and software. Students practiced using the mouse and MS Paint, learned about input, output and storage devices, and started 10-finger typing.",
      "Session 3: Introduction to programming. Students explored MyLogiscool, created their first Scoolcode project and programmed the Bee-bot robot.",
      "Session 4–5: Personal data and online safety. Students learned what personal data is and how to stay safe online, built a 3D world in Kodu and made a Spy game in Scoolcode.",
      "Session 6: History of programming and algorithms. Students wrote step-by-step algorithms and built a Coin Collector game in Kodu using if–then conditions.",
      "Session 7: Quizzes. Students learned about quiz types and built a quiz game in Scoolcode using if–then–else.",
      "Session 8: Passwords. Students learned what makes a strong password and created and encoded their own passwords."
    ],
    next: [
      "Session 9: Cryptography. Students will encode and decode messages with secret codes such as Caesar, Morse and Braille, then solve a digital escape room.",
      "Session 10–11: Robots and everyday robotics. Students will learn about robots, build a basketball robot game in Scoolcode and use loops to draw shapes.",
      "Session 12: Visual communication. Students will learn about emojis, icons and logos, describe their favourite stories with emojis and design their own icons.",
      "Session 13: Emotions. Students will talk about emotions, kindness and online bullying, and program the \"Cheer up Rexy\" game in Scoolcode.",
      "Session 14: Storytelling. Students will build a Story Cubes program in Scoolcode and write their own short story.",
      "Session 15: Animations. Students will draw their own character in MS Paint and animate it in a Scoolcode project.",
      "Session 16: Fake news and urban legends. Students will learn how to spot fake news and build a Scoolcode game about bringing the true news to Earth."
    ]
  },

  // DI-112 – Digital Intelligence
  "DI-112": {
    courseName: "112 – Digital Intelligence",
    covered: [
      "Session 1: Revision lesson. Students got to know each other again and practiced Scoolcode by building the Operation Balloon Rescue game.",
      "Session 2–3: Colours and pixels. Students learned how colours are mixed and what pixels are, used Paint, and built drawing and mirroring programs in Scoolcode.",
      "Session 4: Games. Students learned about different game types and built a Sharks Eat Fish game in Scoolcode.",
      "Session 5: Uploading and downloading. Students learned the difference between uploading, downloading and streaming, and used variables and their own costumes in a Collecting Witch game.",
      "Session 6: Writing a letter. Students practiced text editing and emails, and built the Adam's Letters project in Scoolcode.",
      "Session 7: Rules. Students talked about rules made by people and by nature, and practiced variables in the Wildfire in the Condo game.",
      "Session 8: Digital travel. Students learned about positioning and practiced basic image editing."
    ],
    next: [
      "Session 9: Navigation. Students will explore digital navigation with Google Maps and Google Earth, and build the Math Safari game in Scoolcode.",
      "Session 10: Dimensions and space. Students will learn about 3D drawing and printing, use Paint 3D, and build the Save the Blue Planet game in Scoolcode.",
      "Session 11–12: Films and presentations. Students will learn about film and video editing, create a Scoolcode animation, and prepare their own presentation.",
      "Session 13: Vehicles. Students will explore electric and digital vehicles and build the Rival Delivery Drones game in Scoolcode.",
      "Session 14–15: Collections and numbers. Students will practice handling data and using a calculator, learn about number systems and build the Food Storing Hamster game in Scoolcode.",
      "Session 16: Project lesson and presentation. Students will finish their semester project and present it to the group."
    ]
  },

  // DI-113 – Digital Intelligence
  "DI-113": {
    courseName: "113 – Digital Intelligence",
    covered: [
      "Session 1: Revision lesson. Students got to know each other again and practiced Scoolcode by building a Mosquito Chaser game.",
      "Session 2: Parts of the computer. Students learned about the core computer parts and peripheral devices, and practiced timing in a Scoolcode game called Pop the Frog.",
      "Session 3: Digital footprint. Students learned what a digital footprint and filter bubbles are, and built the Monster Vitamin game in Scoolcode.",
      "Session 4–5: Hackers, the internet and sounds. Students learned the basics of cybersecurity and hacking, explored analog and digital sounds, and used logical variables in two Scoolcode games.",
      "Session 6–7: Human and robot. Students explored how humans and robots interact, from wearable technology and digital medicine to bionics and cyborgs, and programmed imagiCharm and micro:bit.",
      "Session 8: Project lesson. Students completed and presented their first project of the semester."
    ],
    next: [
      "Session 9–10: Digital realities. Students will explore augmented and virtual reality, build an AR-themed Scoolcode game and try the CoSpaces Edu platform.",
      "Session 11: E-sport. Students will learn about e-sport, contests and their risks, and build a Pong game in Scoolcode.",
      "Session 12: Architecture. Students will learn how architecture has gone digital and build and program Lego models.",
      "Session 13: Internet of Things. Students will explore smart homes, sensors and robots.",
      "Session 14: Our environment. Students will talk about climate change and protecting the environment, and program robots in VEX VR.",
      "Session 15: Transportation. Students will learn about ground, water and air transport, and use the camera in a Scoolcode project.",
      "Session 16: Project lesson and presentation. Students will finish their semester project and present it to the group."
    ]
  },

  // DI-114 – Digital Intelligence
  "DI-114": {
    courseName: "114 – Digital Intelligence",
    covered: [
      "Session 1: Revision lesson. Students got to know each other again and practiced Scoolcode by building an Egg Catcher game.",
      "Session 2–3: Languages and translation. Students learned about human and programming languages, practiced word processing and built a quiz and a number guessing game in Scoolcode.",
      "Session 4: Digital numbers. Students learned binary numbers and logic gates, used spreadsheets and turned a micro:bit into a clock.",
      "Session 5: Number sequences. Students discovered number patterns and the Fibonacci sequence, used spreadsheets and built a mental calculator game in Scoolcode.",
      "Session 6: Digital colours and images. Students learned about resolution and RGB colour codes and built a colour sorting game in Scoolcode.",
      "Session 7: Creatures. Students compared living and digital beings, created an animation in Canva and built a monster comparing game in Scoolcode.",
      "Session 8: Project lesson. Students completed and presented their first project of the semester."
    ],
    next: [
      "Session 9: Who are you online? Students will talk about personal data, cyberbullying and safe online communication, and build a Scoolcode game about protecting a princess from trolls.",
      "Session 10: Networks. Students will learn about social networks and social media, and build a Scoolcode game about making friends.",
      "Session 11–12: AI basics. Students will learn how AI generates images and text, try chatbots and write good prompts, and build Scoolcode projects about collecting data and saving prompts.",
      "Session 13: Jobs of the future. Students will explore how AI is changing jobs and build an automatic garbage collector in Scoolcode.",
      "Session 14: Digital product design. Students will learn what makes a good user experience and improve a Chicken Hunt game so it looks and works better.",
      "Session 15: Accessibility. Students will learn about different barriers people face and build a Scoolcode game that helps an old witch.",
      "Session 16: Life on another planet. Students will use AI tools and Scoolcode to start a colonization simulator game."
    ]
  },

  // DI-161 – Digital Intelligence
  "DI-161": {
    courseName: "161 – Digital Intelligence",
    covered: [
      "Session 1–2: Introduction to Scoolcode. Students learned about actors and movement, then programmed a cyclist through a city map using sequences, turns and repeat loops.",
      "Session 3–4: Haunted Escape and Underwater Crystal Hunt. Students built two games using keyboard controls, conditions, scene changes, stamping, random positions and loops.",
      "Session 5–7: Digital illustration campaign. Students created \"The Last Battery\" environmental campaign in Canva: a slogan and logo, a campaign character with stickers, and a final A3 poster.",
      "Session 8: Ghost Buster. Students built a ghost-catching game and learned to use the distance between actors."
    ],
    next: [
      "Session 9: Terraforming Mission. Students will use distances, number operations and Scoolcode's machine learning blocks in a terraforming game.",
      "Session 10–11: Variables and questions. Students will build a raccoon collecting game using variables and a quiz game using the ask command.",
      "Session 12–14: Generative AI picture book. Students will learn how generative AI works and how to write good prompts, then invent their own creature, write its story and turn it into a picture book with Canva AI.",
      "Session 15: Save the Space Station. Students will build a two-player game where spaceships share fuel and tow a space station to Earth, using variables, distances and win/lose conditions.",
      "Session 16: Robot hunting. Students will review what they learned this semester by building a space lab shooting game."
    ]
  },

  // DI-171 – Digital Intelligence
  "DI-171": {
    courseName: "171 – Digital Intelligence",
    covered: [
      "Session 1–2: Introduction to Scoolcode. Students learned about actors and movement, then built a magic spellbook that draws shapes with the pen tool and repeat loops.",
      "Session 3–4: Escape the Moving Maze and Powering the Space Station. Students built games with keyboard controls, moving obstacles, collision detection and scene changes.",
      "Session 5–7: Generative AI storytelling. Students used AI to create their own story, generated an original visual scene from it and turned the story into a one-page comic.",
      "Session 8: Sail the Seal. Students built a game where a seal jumps between ice floes to catch fish, using while loops and the wait until command."
    ],
    next: [
      "Session 9–10: Variables and distances. Students will build a collecting game using variables and a space pinball-style game using distances and number comparisons.",
      "Session 11: Wizard battle. Students will use two health variables to build a spell-casting battle game.",
      "Session 12–13: 3D modeling in Tinkercad. Students will design a greenhouse tomato pot with a water tank and scanner, and code a support frame using variables and repeat blocks.",
      "Session 14–15: Logical variables and number guessing. Students will build a button game with Boolean variables and the AND operator, and a number guessing game with text-to-speech AI blocks.",
      "Session 16: Frog in the city. Students will build a road-crossing game with moving parallax backgrounds."
    ]
  },

  // DI-211 – Digital Intelligence
  "DI-211": {
    courseName: "211 – Digital Intelligence",
    covered: [
      "Session 1–2: Signals. Students learned how actors communicate using signals and built a traffic control game with the broadcast and wait command.",
      "Session 3–4: Clones. Students built games with clones, such as popping water balls and collecting balloons, and were introduced to the while loop.",
      "Session 5–6: Micro:bit smart greenhouse. Students programmed a Micro:bit to measure soil moisture, then expanded it to check light and temperature for a chosen plant.",
      "Session 7–8: Firefighter Robot and local variables. Students built a firefighting game with water and fire clones, and a Witch collecting game using local variables."
    ],
    next: [
      "Session 9–10: Practicing clones and signals. Students will build a space egg hatching game and a knights' jewel searching game.",
      "Session 11–13: App Development with MIT App Inventor. Students will build a trash recycling mobile game with falling trash, finger dragging, scoring and increasing speed.",
      "Session 14–15: Logical operators. Students will build a pushing game and a pothole-avoiding cycling game using logical operators, clones and variables.",
      "Session 16: Making pairs. Students will build a game where they match pairs of candies."
    ]
  },

  // 432 – Python Advanced
"432": {
  courseName: "432 – Python Advanced",
  covered: [
    "Session 1: Functions in Python. Students learned how to create and use functions, work with parameters and arguments, default values, return statements and solve practical problems such as prime number checking, triangle validation and fuel consumption converters.",

    "Session 2: Recursive functions. Students practiced recursion through factorial calculations, Fibonacci sequence generation, harmonic sums, recursive power calculations, recursive list summation, Caesar cipher encryption and Pascal triangle generation.",

    "Session 3: Packages and modules. Students explored Python modules such as math and random, installed external packages using pip, created data visualizations with matplotlib and developed projects like guessing games, BMI calculators and random statistics charts.",

    "Session 4: Yield, break and advanced practice. Students learned generator functions using yield, loop control with break, random shopping simulations, lottery systems, rock-paper-scissors games and data visualization basics.",

    "Session 5: Matrices and multidimensional data. Students created and manipulated matrices, accessed rows and columns, generated random matrices, sorted matrix data and solved real-world style scheduling and magic square tasks.",

    "Session 6: List comprehension and multidimensional matrices. Students practiced advanced list and matrix generation, taxation systems, temperature analysis with numpy, multidimensional hotel occupancy systems and 3D matrix visualization concepts.",

    "Session 7: Advanced modules and packages. Students created custom Python packages and modules, worked with datetime and pendulum libraries, handled dates and timezones, generated matrices with reusable functions and solved systems of equations using numpy.",

    "Session 8: Practice lesson – Sudoku solver project. Students developed a full Sudoku solver using matrices, recursive backtracking algorithms, validation systems and board visualization functions.",

    "Session 9: Number systems and bitwise operators. Students learned binary, octal and hexadecimal systems, practiced bitwise operations (&, |, ^, ~, <<, >>), number system conversions and logical binary problem solving."
  ],

  next: [
    "Session 10: Tuples. Students will learn the tuple data structure, how it differs from lists, and how to create, compare, join and convert tuples.",

    "Session 11: Practice tuples. Students will solve more complex tasks with tuples, such as a student grading system, finding symmetric pairs, finding the closest point and converting binary digits with bitwise operators.",

    "Session 12: File management 1. Students will open, read, write and append to text files, use the different file modes, readlines(), seek() and with open, and delete files with the os module.",

    "Session 13: File management 2. Students will work with CSV files using the csv and pandas modules, search and filter tables, and draw charts from real data such as Oscar winners and letter frequencies.",

    "Session 14: File management 3. Students will practice data cleaning with pandas and numpy: dropping columns, re-indexing tables, fixing messy dates and places, and filling missing values.",

    "Session 15–16: Pygame project. Students will build a two-player space battle game with Pygame, with a game window, moving spaceships, borders, bullets, lives, a winner screen and sound effects."
  ]
},
  // 433 – Python Master
  "433": {
    courseName: "433 – Python Master",
    covered: [
      "Session 1–2: Dictionaries. Students created and updated dictionaries, looped through keys, values and items, and used them to store and process data such as student scores.",
      "Session 3: Error handling. Students validated user input and used try–except, else and finally to make their programs handle errors safely.",
      "Session 4: Data types and operators. Students practiced number types, print formatting, arithmetic, comparison, identity and membership operators, operator precedence and nested conditions.",
      "Session 5: Mutable and immutable types. Students compared lists, tuples, matrices and dictionaries, and explored how Python stores values in memory.",
      "Session 6: Loops in depth. Students used while and for loops with break, continue and loop-else to solve problems such as finding prime numbers and checking passwords.",
      "Session 7: Logical and bitwise operators. Students worked with logical expressions, bit operations and dictionary data, and drew a prime number spiral with Turtle.",
      "Session 8: Functions in depth. Students used default and keyword arguments, None, variable scope and generators to build a Dungeon Battle game."
    ],
    next: [
      "Session 9: Exceptions. Students will make their Dungeon Battle game crash-proof using the exception hierarchy, multiple except branches and raising their own exceptions.",
      "Session 10: Strings and lists in depth. Students will encode and decode secret messages using escape sequences, slicing, string methods and list copying.",
      "Session 11: Files and CSV. Students will write, read and combine text files, then analyse a CSV file of movie data.",
      "Session 12: Python fundamentals and recursion. Students will explore tricky details of Python such as naming rules, PEP 8, integer division and float accuracy, and write recursive functions.",
      "Session 13–14: Mock exams. Students will take two timed practice exams in PCEP style, review their mistakes and practise their weakest topics.",
      "Session 15–16: Minesweeper project. Students will build a complete Minesweeper game with matrices, recursion and Pygame, then add difficulty levels, a timer and a high score table saved to a file."
    ]
  },

  // 101 – Digital Intelligence
  "101": {
    courseName: "101 – Digital Intelligence",
    covered: [
      "Session 1: Greeting and introduction. Students got to know each other with name games, learned the class house rules, practiced turning the computer on and off and holding and clicking the mouse, and logged in to MyLogiscool.",
      "Session 2: Left-right directions and Bee-bot. Students practiced left and right with movement games, met the Bee-bot floor robot and played a Scoolcode collecting game and mini-quests.",
      "Session 3: Scoolcode games. Students practiced the mouse with colour sorting, treasure finding and mining games in Scoolcode, and played Simon Says.",
      "Session 4: Roads and Bee-bot. Students drew road signs in pairs, built a road from them and programmed the Bee-bot to follow it.",
      "Session 5: Scoolcode games. Students practiced the mouse with line following, find-the-difference and memory games, and played a word chain game.",
      "Session 6: Shapes and Scoolcode. Students solved a \"which shape comes next\" quiz, played a guessing game and collected apples in a Scoolcode snake game.",
      "Session 7: Bee-bot shapes. Students programmed the Bee-bot in pairs to move in shapes and practiced drag and drop in a Scoolcode game.",
      "Session 8: Processes. Students learned that everyday tasks follow steps in order, played an algorithm game and built hamburgers in the right order in Scoolcode."
    ],
    next: [
      "Session 9: Algorithms and the keyboard. Students will start using the keyboard (numbers, arrows, space and enter), play a real-life algorithm game and solve the Tower of Hanoi in Scoolcode.",
      "Session 10: Robotics. Students will learn what robots are and build their first LEGO WeDo/Spike robots.",
      "Session 11: Directions. Students will learn north, south, east and west with a rhyme and a quiz, and find treasures with arrows in a Scoolcode game.",
      "Session 12: Analog and digital tools. Students will learn the difference between analog and digital tools, draw their own avatar in Scoolcode and solve a puzzle game.",
      "Session 13: Robotics 2. Students will build another LEGO WeDo/Spike robot.",
      "Session 14: AI for kids. Students will talk about AI they meet every day, teach a robot to recognise fish in a Scoolcode game and guess which images are AI-generated.",
      "Session 15: Robotics 3. Students will build and test another LEGO WeDo/Spike robot.",
      "Session 16: Summary and Kodu. Students will review the semester with an activity game and Scoolcode mini-games, then create their first Kodu world with their own flag."
    ]
  },

  // 213 – Blox Master
  "213": {
    courseName: "213 – Blox Master",
    covered: [
      "Session 1: Coordinate system. Students built a coordinate grid and a two-player game to find a hidden ball on it.",
      "Session 2: Drawing with loops. Students built a drawing program with buttons and drew snowflakes, colourful spirals and flowers using nested loops and variables.",
      "Session 3: Minigames. Students practiced background changes in a beach game, collecting the right items on each level.",
      "Session 4–5: Mouse events. Students built an apple shooting game with win and lose conditions and a game where a cloud waters flowers.",
      "Session 6–7: Tinting and cloning. Students learned the limits of cloning, tinted actors in a robot game and built a colourful solar system.",
      "Session 8: Project lesson. Students reviewed lists, signals and cloning, then planned, built and presented their own project."
    ],
    next: [
      "Session 9: Cat on the table. Students will use signals, lists and cloning in a game where a kitten jumps around a table.",
      "Session 10: Pirate adventure. Students will steer a pirate ship to a treasure island and fight sea monsters with bombs.",
      "Session 11: Flight to Japan. Students will use background changes as events in a game where a plane takes off, dodges unicorns and lands in Japan.",
      "Session 12: Collector walrus. Students will build a game where a flying walrus catches green balls and avoids red ones.",
      "Session 13–14: Cloning and local variables. Students will build the Pirate Captain's Treasure game and a game where they pick balls divisible by a given number.",
      "Session 15: Multiplayer game. Students will build a two-player tank battle with obstacles.",
      "Session 16: Target shooting and project. Students will build a target shooting game, then plan and present their own final project."
    ]
  },

  // 301 – Mix Intro (fast)
  "301": {
    courseName: "301 – Mix Intro (fast)",
    covered: [
      "Session 1: Introduction to Scoolcode. Students got to know each other and the school rules, then learned movement, actors, conditions, loops and the pen tool through two simple programs.",
      "Session 2: Variables. Students played an offline guessing game and then built a number-guessing game in Scoolcode where a seal thinks of a number.",
      "Session 3: Logical operators. Students learned logical variables and operators in a playful way and used them in a game with balls and gates.",
      "Session 4: Frog in the city. Students built a game where a frog crosses busy roads, with lives, levels and a garbage truck.",
      "Session 5: Signals, cloning and local variables. Students built a game with bouncing balls to avoid and a game where a crab throws fish to a shark."
    ],
    next: [
      "Session 6: Transporter porcupine troop. Students will practice cloning and how clones interact, with porcupines carrying apples and bombs.",
      "Session 7: Brick wall. Students will build the classic brick breaker game and add new levels.",
      "Session 8: Memory game with fish. Students will learn lists and build an underwater memory game where they remember the direction of the fish.",
      "Session 9–10: Code breaking game. Students will build a code breaking logic game, guessing four colours out of six, while revising lists."
    ]
  },

  // 401 – Master Class Basic
  "401": {
    courseName: "401 – Master Class Basic",
    covered: [
      "Session 1: Snakes and ladders. Students built a two-player board game with dice rolls, ladders and snakes in Scoolcode TEXT mode.",
      "Session 2: Bubble trouble. Students used the physics engine to shoot a bouncing ball that splits into smaller and smaller balls.",
      "Session 3: Explorer jumper. Students built a game where an explorer jumps over logs on a randomly generated track.",
      "Session 4: Cat feeding. Students built a reaction-time multiplayer game for up to four players, using a Boolean variable to decide the winner.",
      "Session 5–6: Color match and Tap the Turtle. Students built matching games with clones, pairing coloured princes and princesses and clicking turtles until they all look the same.",
      "Session 7–8: Kalaha (Mancala). Students built the ancient Kalaha board game over two lessons: the board, the step algorithm for two players and the game ending."
    ],
    next: [
      "Session 9: Upside down. Students will build a game where a ball jumps on both sides of a platform to collect gems and avoid obstacles.",
      "Session 10–11: Ladder climb and Snake vs Blocks. Students will build a ladder climbing game with falling rocks and a snake game where they destroy blocks.",
      "Session 12–13: Bicycle game and classic snake. Students will build a cycling game on their own and the classic snake game with their own improvements.",
      "Session 14–15: Meteor shower and BinaryBlocks. Students will build a space shooting game and a logic game using lists, deciding if each number is bigger or smaller than the last.",
      "Session 16: Expansion. Students will build a two-player expansion game as the final project of the semester."
    ]
  },

  // 402 – Master Class Advanced
  "402": {
    courseName: "402 – Master Class Advanced",
    covered: [
      "Session 1: Star Catcher. Students learned the idea of polar coordinates and built a game in MIX mode where a spaceship on a circular orbit catches stars.",
      "Session 2: Introducing recursion. Students learned what a recursive function is and used it to draw squares, spirals and trees.",
      "Session 3: Recursive patterns. Students drew fractals with recursion: the Koch curve, the Koch snowflake and the Peano curve.",
      "Session 4: Factorial and Fibonacci. Students built a program that shows how a factorial is calculated step by step and drew the Fibonacci spiral.",
      "Session 5: The Towers of Hanoi. Students solved the Towers of Hanoi with a recursive algorithm and animated it with donut actors.",
      "Session 6: String-handling functions. Students wrote recursive functions to reverse strings and check palindromes, inside a menu-driven program.",
      "Session 7: Brick wall. Students built the brick breaker game where bricks change colour on the first hit and disappear on the second.",
      "Session 8: Maze algorithm. Students learned backtracking and built a program that generates a random maze."
    ],
    next: [
      "Session 9–11: Matrices – exploding buttons. Students will learn two-dimensional arrays (matrices) and build a Candy Crush-like game where buttons of the same colour explode by recursion and the rest fall into place.",
      "Session 12: Matrices – memory game. Students will build the classic 4x4 memory game using their matrix functions.",
      "Session 13–14: Matrices – Fifteen Puzzle. Students will build the Fifteen Puzzle step by step, including sliding tiles, random shuffling and checking the end of the game.",
      "Session 15–16: Minesweeper. Students will build the classic Minesweeper game, using recursion to reveal empty areas, and finish the semester with a project."
    ]
  },

  // 403 – Basics of AI and Data Science
  "403": {
    courseName: "403 – Basics of AI and Data Science",
    covered: [
      "Session 1: Introduction to data science. Students learned what data science is and why data matters, then built a smart computer opponent for tic-tac-toe.",
      "Session 2: Machine learning. Students learned what machine learning is, trained an AI to recognise fish on code.org and discussed supervised and unsupervised learning.",
      "Session 3: Search algorithms. Students guided a robot out of mazes and learned depth-first and breadth-first search, then programmed a DFS algorithm in Scoolcode.",
      "Session 4: Patterns and classification. Students explored patterns in data and classification models on code.org and discussed human responsibility in AI.",
      "Session 5–6: The Nim game. Students learned the winning strategy of Nim using the binary system and programmed a computer that plays Nim against a human.",
      "Session 7: Numerical models and KNN. Students learned how computers build models from numbers and how the K-nearest-neighbours algorithm makes predictions.",
      "Session 8: Facial recognition and neural networks. Students trained image models with Teachable Machine and learned how facial recognition and neural networks work."
    ],
    next: [
      "Session 9–10: Decision trees. Students will learn how decision trees work, play choice-based games and design and build their own adventure game based on a decision tree.",
      "Session 11: Data visualization. Students will create charts and visuals from datasets using online tools such as RAWGraphs, Visme and Datawrapper.",
      "Session 12: Data visualization in Scoolcode. Students will import real high-score data from a MyLogiscool game and draw graphs from it in Scoolcode.",
      "Session 13–14: Chatbots and AI with sound. Students will learn how chatbots work, build their own chatbot in Scoolcode and explore sound recognition and AI music generation.",
      "Session 15: Machine learning projects. Students will train a machine learning model on Machine Learning for Kids and explore real datasets on Kaggle.",
      "Session 16: Semester summary. Students will review everything they learned this semester and finish with a summary quiz."
    ]
  },

  // 405 – LEGO Spike Prime with Python
  "405": {
    courseName: "405 – LEGO Spike Prime with Python",
    covered: [
      "Session 1: Introduction to robotics. Students learned about robots and the LEGO Spike Prime kit, connected the hub over Bluetooth and wrote their first Python code.",
      "Session 2: Servo motors. Students learned how electric motors work and programmed their robot to move, turn and make a U-turn.",
      "Session 3: Variables and loops. Students used loops, conditions, variables and random numbers in Python with the hub's light matrix, and built a Bingo game.",
      "Session 4: Coding challenge. Students reviewed the first lessons in a quiz and solved coding challenges with the motors and the light matrix on their own.",
      "Session 5: Distance sensor. Students attached the distance sensor and programmed tasks such as a rotating sonar alarm and an automatic door.",
      "Session 6: Color sensor. Students attached the color sensor and programmed tasks such as a colour piano that plays different notes for each colour.",
      "Session 7: Force sensor. Students learned how the force sensor works and used it in programs such as force-controlled light artwork.",
      "Session 8: Coding challenge. Students reviewed the sensors in a quiz and built an interactive colour game and a reflex game."
    ],
    next: [
      "Session 9–10: Functions. Students will learn functions and async functions in Python and use them in sensor testers, a dance routine and a treasure hunt.",
      "Session 11: Piano. Students will build a piano from LEGO and program it to play notes, then play a song together as a band.",
      "Session 12: Hand gestures. Students will build a gesture recognizer with several sensors and make the motors move with hand gestures.",
      "Session 13: Gyro sensor. Students will learn the hub's motion sensor and build and program a ball maze game controlled by tilting.",
      "Session 14: Driving with the gyro. Students will use the motion sensor to make the robot turn accurately and stop in front of a wall.",
      "Session 15: Maze solver. Students will build a robot with several distance sensors and program it to escape a maze.",
      "Session 16: Sorting robot and basketball. Students will build a robot that sorts objects by size and a basketball game, then review the semester in a quiz."
    ]
  },

  // 411 – Godot Basic
  "411": {
    courseName: "411 – Godot Basic",
    covered: [
      "Session 1: Getting to know Godot. Students learned what the Godot game engine is, explored its interface and created and set up their first nodes.",
      "Session 2: GDScript. Students explored the code editor and GDScript, learned variables and loops and wrote their first code.",
      "Session 3: GDScript basics. Students practiced for loops, conditions and Boolean operators in small programs.",
      "Session 4: Moving a character. Students learned vectors and created a character that moves and jumps using physics on a TileMap level.",
      "Session 5–6: Animations. Students created running, attacking and dying animations for a character, controlled them with a state machine and added an NPC that moves on its own.",
      "Session 7–8: Car racing game. Students learned tiles and tilemaps, designed race tracks and built a car with driving controls and a finish line."
    ],
    next: [
      "Session 9–10: Quiz game. Students will learn lists and UI elements such as buttons, write their own functions and read questions from a text file to build a quiz game.",
      "Session 11–12: Labyrinth from a file. Students will generate a labyrinth from a text file using matrices, then add character movement, a timer, a score counter and a file picker.",
      "Session 13: Visual effects. Students will add a parallax background, moving platforms, lights, shadows and particle effects to a game.",
      "Session 14–15: Platformer game. Students will review the semester by building a platformer game with a player, levels, a parallax background and a UI for health and score.",
      "Session 16: Finishing the platformer and project. Students will add keys, treasure chests, a menu and level transitions, then plan and present their own project."
    ]
  },

  // 412 – Godot Advanced
  "412": {
    courseName: "412 – Godot Advanced",
    covered: [
      "Session 1–2: Practice project. Students revised character movement, animations, menus and inputs, added a best-time timer and learned singletons (global scripts).",
      "Session 3–4: Saving and loading. Students built a save and load system, learned Perlin noise, the Dictionary data structure and basic error handling.",
      "Session 5–6: Top-down shooter. Students built a top-down shooter with a player, bullets and chests, and programmed a smart AI bot as the opponent.",
      "Session 7: Sounds and sound effects. Students learned how sound is used in games, added sound effects to animations and displayed sound tracks visually.",
      "Session 8: Splitscreen game. Students started a two-player game, designing the level with a TileMap and creating the players."
    ],
    next: [
      "Session 9: Splitscreen game. Students will finish their two-player game using viewports to split the screen and a smarter camera.",
      "Session 10: The 3D world. Students will learn the basics of 3D in Godot and build a game where they push chairs off a platform.",
      "Session 11–12: Grappling hook and wall running. Students will use raycasting to build first-person controls with a grappling hook and wall running, then build the game.",
      "Session 13–14: Isometric world. Students will build a 2.5D city-building game, using isometric tilemaps from code and managing money and buildings.",
      "Session 15–16: Knight Must Stop! Students will build a 3D action game inspired by Non-Stop Knight, with a NavMesh, attacks, abilities and enemies, and export it for Android."
    ]
  },

  // 422 – Unity Advanced
  "422": {
    courseName: "422 – Unity Advanced",
    covered: [
      "Session 1–2: Fall Down. Students learned what hyper-casual games are and built the Fall Down ball game in 3D, with prefabs, a skybox, a finish platform and a level counter.",
      "Session 3–4: 3D Brick Breaker. Students rebuilt the classic brick breaker in 3D with a mouse-controlled slider, a physics ball, blocks and several levels.",
      "Session 5–6: Hexagon. Students built a 2D Hexagon game with custom colliders, desktop and mobile controls, a spawner, a timer and a rotating camera, and built it for Android.",
      "Session 7–8: Bricks and Balls. Students built a 2D Bricks and Balls game with bullets, block lives and a score display, and learned arrays and lists in C#."
    ],
    next: [
      "Session 9–11: Frogger in 3D. Students will create a terrain and build a first-person Frogger game where they cross roads full of cars and avoid falling into the water.",
      "Session 12–13: Terrain generation. Students will generate terrain from code using multidimensional arrays and add a menu with panels and buttons.",
      "Session 14–16: Flying Simulator. Students will build a VR-style flying game with a level, a player, fade animations, checkpoints to fly through, a timer and more levels."
    ]
  },

  // 434 – AI and Data Science with Python 1
  "434": {
    courseName: "434 – AI and Data Science with Python 1",
    covered: [
      "Session 1: Introduction to data science. Students learned what data science is, how it differs from statistics, where it is used and the steps of a data science project (CRISP-DM).",
      "Session 2: Data preparation. Students started working in Google Colab and practiced loading and cleaning data in Python.",
      "Session 3–4: Classification. Students learned classification and how to measure model accuracy, then predicted success with KNN, decision trees and SVM.",
      "Session 5–6: Regression. Students built linear, multivariate and polynomial regression models, including an age prediction task.",
      "Session 7–8: Clustering. Students learned clustering, grouped customers with k-means and hierarchical clustering in Python and reviewed the topics in a quiz."
    ],
    next: [
      "Session 9–10: DBSCAN. Students will use the DBSCAN algorithm to cluster map data and solve a real-life store reorganisation problem.",
      "Session 11: Data visualization. Students will learn to spot misleading graphs and create clear, interactive charts that answer questions.",
      "Session 12–13: Recommendations and association rules. Students will build a simple recommendation system and find association rules in shopping basket data.",
      "Session 14–15: Anomaly detection. Students will learn to find outliers in data with Python and review the semester.",
      "Session 16: Final project. Students will choose a dataset on Kaggle, prepare it, try several models and present their project."
    ]
  },

  // 435 – AI and Data Science with Python 2
  "435": {
    courseName: "435 – AI and Data Science with Python 2",
    covered: [
      "Session 1–2: Neural networks. Students learned what neural networks are and how they work, and trained a first model on Machine Learning for Kids.",
      "Session 3–4: Image recognition. Students learned convolutional neural networks and built an image classifier for handwritten digits in Python.",
      "Session 5–6: Face recognition. Students trained a neural network to recognise the faces of Avengers characters and discussed current AI topics.",
      "Session 7–8: Sentiment analysis. Students learned the basics of natural language processing and built a neural network that tells if a review is positive or negative."
    ],
    next: [
      "Session 9–10: Text generation. Students will build a neural network that writes new reviews automatically.",
      "Session 11–12: Chatbot. Students will build a chatbot in Python with a bag-of-words model and discuss the ethics of AI and data science.",
      "Session 13–14: Time series and LSTM. Students will use LSTM neural networks to predict airline passenger numbers and Netflix stock prices.",
      "Session 15–16: Final project. Students will choose a dataset on Kaggle, prepare it, compare a baseline model with better models and present their project."
    ]
  },

  // 491 – Developer Master Class Python
  "491": {
    courseName: "491 – Developer Master Class Python",
    covered: [
      "Session 1: Introduction. Students learned the main parts of a software project, development methods and the roles in a development team.",
      "Session 2: Ideas. Students learned how to validate an idea by originality, feasibility and usefulness, and how to map features and plan an MVP.",
      "Session 3: Software architecture and data. Students learned what software architects do, looked at MyLogiscool as an architect would and learned how data is stored in databases.",
      "Session 4: SQL. Students wrote SQL queries on a test database to find and filter data.",
      "Session 5: User experience. Students learned the difference between UX and UI, created a persona, an empathy map and a user journey, and drew wireframes in Figma.",
      "Session 6: User interface design. Students learned what UI designers do and chose colour schemes, fonts and font pairings for a design.",
      "Session 7: Task management. Students learned to prioritise tasks, planned a demo day together and used a Kanban board in Miro.",
      "Session 8: Version control. Students learned why version control matters, created GitHub accounts and used basic Git commands."
    ],
    next: [
      "Session 9: APIs. Students will learn what an API is and use real APIs, such as a weather API, to improve a game.",
      "Session 10–11: Testing and debugging. Students will write unit tests, learn the types of software testing and find bugs in code, and discuss how support teams work.",
      "Session 12: Cloud computing. Students will learn network basics and cloud computing and use cloud services in Google Workspace.",
      "Session 13: IT security. Students will learn old and modern encryption, secure connections such as VPNs, and how to stay safe from viruses and phishing.",
      "Session 14: Websites and search engines. Students will learn HTML basics, browser developer tools and SEO, and build a simple website.",
      "Session 15: Business data. Students will learn how companies use data, spot misleading graphs and create an infographic in Visme.",
      "Session 16: Coding best practices and portfolio. Students will learn programming guidelines and etiquette, then build their own portfolio website in Webflow."
    ]
  },

  // Creative Design & 3D
  "Creative Design & 3D": {
    courseName: "Creative Design & 3D",
    covered: [
      "Session 1: Freehand and digital drawing. Students got to know each other, compared freehand and digital drawing and started using Krita.",
      "Session 2: Getting to know Tinkercad. Students logged in to Tinkercad, learned the basic shapes and modelled an Among Us figure.",
      "Session 3: Colours and pixels. Students learned colour theory, resolution and colour spaces, mixed colours online and made pixel art of a turtle.",
      "Session 4: Cutting objects. Students used holes (negative shapes) to cut objects and modelled a spiral staircase, a designer bench and custom dice.",
      "Session 5: Composition and layers. Students learned the elements of composition and drew an underwater scene with an octopus using layers in Krita.",
      "Session 6: Designing tools. Students modelled a flat-blade and a cross-head screwdriver and learned about industrial 3D printing.",
      "Session 7: Drawing styles. Students explored different drawing styles, drew cartoon characters, made avatars in two styles and learned the basics of copyright.",
      "Session 8: Furnishings. Students modelled an armchair, furnished a room to scale and tried an online furnishing tool."
    ],
    next: [
      "Session 9: Letters. Students will learn calligraphy, typography and graffiti letters and use Krita's calligraphy and text tools.",
      "Session 10: House design. Students will start designing their dream house to scale in Tinkercad.",
      "Session 11: Raster and vector graphics. Students will learn the difference between raster and vector images and draw with Krita's vector tools.",
      "Session 12: House design. Students will finish their house with furnished rooms and present it to the group.",
      "Session 13: Animation. Students will learn the basics of animation, draw animation frames in Krita and bring them to life in Scoolcode.",
      "Session 14: 3D modelling with code. Students will use Tinkercad Codeblocks to build a basket and a name tag with code.",
      "Session 15: AI in drawing. Students will try AI drawing and image generation tools and discuss what AI can and cannot create.",
      "Session 16: Final project and exhibition. Students will create their own project and show their best work in a virtual exhibition."
    ]
  },

  // Creative Production
  "Creative Production": {
    courseName: "Creative Production",
    covered: [
      "Session 1: Freehand and digital drawing. Students got to know each other, compared freehand and digital drawing and started using Krita.",
      "Session 2: Film basics. Students learned the basics of film theory, explored the WeVideo editor and made a short introduction film.",
      "Session 3: Colours and pixels. Students learned colour theory, resolution and colour spaces, mixed colours online and made pixel art of a turtle.",
      "Session 4: Video shooting. Students learned the steps of film making, shot sizes and camera moves, and shot their first video.",
      "Session 5: Composition and layers. Students learned the elements of composition and drew an underwater scene with an octopus using layers in Krita.",
      "Session 6: Editing techniques. Students learned how editing creates continuity and edited the videos they shot in WeVideo.",
      "Session 7: Drawing styles. Students explored different drawing styles, drew cartoon characters, made avatars in two styles and learned the basics of copyright.",
      "Session 8: Silent films. Students learned about silent films and made one together, adding subtitles and effects."
    ],
    next: [
      "Session 9: Letters. Students will learn calligraphy, typography and graffiti letters and use Krita's calligraphy and text tools.",
      "Session 10: Personal vlog. Students will learn about vlogs and tips for a good vlog, then start shooting their own first episode.",
      "Session 11: Raster and vector graphics. Students will learn the difference between raster and vector images and draw with Krita's vector tools.",
      "Session 12: Personal vlog. Students will learn the rules of sharing videos online, edit their vlog and watch the finished videos together.",
      "Session 13: Animation. Students will learn the basics of animation, draw animation frames in Krita and bring them to life in Scoolcode.",
      "Session 14: Advertisements. Students will learn about different types of ads and shoot and edit their own ad in small groups.",
      "Session 15: AI in drawing. Students will try AI drawing and image generation tools and discuss what AI can and cannot create.",
      "Session 16: Report and final film. Students will shoot and edit a report, then finish and present their main film project."
    ]
  },

  // Digital Art & AI
  "Digital Art & AI": {
    courseName: "Digital Art & AI",
    covered: [
      "Session 1: Introduction to AI. Students learned what AI is and how computers learn, played a sorting game and trained their own model with Teachable Machine.",
      "Session 2: Freehand and digital drawing. Students compared freehand and digital drawing, sketched with different techniques and started using Krita.",
      "Session 3: Generative AI. Students learned how generative AI and large language models work, wrote image prompts and used text prompts to create secret codes.",
      "Session 4: Colours and pixels. Students learned colour theory, resolution and colour spaces, mixed colours online and made pixel art of a turtle.",
      "Session 5: Prompt engineering. Students learned and practiced advanced prompting techniques for text and image generation.",
      "Session 6: Composition and layers. Students learned the elements of composition and drew an underwater scene with an octopus using layers in Krita.",
      "Session 7: Multi-modal AI. Students used multi-modal AI to invent a new sport, create a movie poster and plot, design their own LEGO set and make a logo.",
      "Session 8: Drawing styles. Students explored different drawing styles, drew cartoon characters, made avatars in two styles and learned the basics of copyright."
    ],
    next: [
      "Session 9: Advanced AI image editing. Students will learn to spot AI images and use segmenting, editing parts of an image and upscaling.",
      "Session 10: Letters. Students will learn calligraphy, typography and graffiti letters and use Krita's calligraphy and text tools.",
      "Session 11: Pro generative techniques. Students will create patterns, optical illusions and consistent characters with AI.",
      "Session 12: Raster and vector graphics. Students will learn the difference between raster and vector images and draw with Krita's vector tools.",
      "Session 13: AI video and sound. Students will generate short videos from text and learn how sound works before generating music.",
      "Session 14: Animation. Students will learn the basics of animation, draw animation frames in Krita and bring them to life in Scoolcode.",
      "Session 15: AI voices and songs. Students will generate speech, music and a full song with AI and add generated voices to real actors.",
      "Session 16: AI in illustration and exhibition. Students will try AI drawing tools, create their final project and show their best work in a virtual exhibition."
    ]
  },

  // Digital Illustration & AI
  "Digital Illustration & AI": {
    courseName: "Digital Illustration & AI",
    covered: [
      "Session 1: Introduction to AI. Students learned what AI is and how computers learn, played a sorting game and trained their own model with Teachable Machine.",
      "Session 2: Freehand and digital drawing. Students compared freehand and digital drawing and sketched birds and animals on paper and on screen.",
      "Session 3: Generative AI. Students learned how generative AI and large language models work, wrote image prompts and used text prompts to create secret codes.",
      "Session 4: Digital drawing basics. Students learned the history of digital drawing, drew symmetrical pictures and tried special drawing tools.",
      "Session 5: Prompt engineering. Students learned and practiced advanced prompting techniques for text and image generation.",
      "Session 6: Colours and pixels. Students learned colour theory, mixed colours online and made pixel art of a penguin.",
      "Session 7: Multi-modal AI. Students used multi-modal AI to invent a new sport, create a movie poster and plot, design their own LEGO set and make a logo.",
      "Session 8: Colour wheel and pixel art. Students created colour schemes with the colour wheel, made sand art, drew their name in pixel art and generated pixel art with AI."
    ],
    next: [
      "Session 9: Advanced AI image editing. Students will learn to spot AI images and use segmenting, editing parts of an image and upscaling.",
      "Session 10: Composition. Students will learn the rules of composition, create an image in Canva and try 3D drawing.",
      "Session 11: Pro generative techniques. Students will create patterns, optical illusions and consistent characters with AI.",
      "Session 12: Drawing styles. Students will explore drawing styles from around the world, make avatars in different styles and draw themselves in a style they choose.",
      "Session 13: AI video and sound. Students will generate short videos from text and learn how sound works before generating music.",
      "Session 14: Animation. Students will learn the basics of animation and create an animation in Scoolcode.",
      "Session 15: AI voices and songs. Students will generate speech, music and a full song with AI and add generated voices to real actors.",
      "Session 16: AI in drawing and exhibition. Students will try AI drawing tools, create their final project and show their best work in a virtual exhibition."
    ]
  },

  // Video Creation & AI
  "Video Creation & AI": {
    courseName: "Video Creation & AI",
    covered: [
      "Session 1: Introduction to AI. Students learned what AI is and how computers learn, played a sorting game and trained their own model with Teachable Machine.",
      "Session 2: Film basics. Students learned the basics of film theory, explored the WeVideo editor and made a short introduction film.",
      "Session 3: Generative AI. Students learned how generative AI and large language models work, wrote image prompts and used text prompts to create secret codes.",
      "Session 4: Video shooting. Students learned the steps of film making, shot sizes and camera moves, and shot their first video.",
      "Session 5: Prompt engineering. Students learned and practiced advanced prompting techniques for text and image generation.",
      "Session 6: Editing techniques. Students learned how editing creates continuity and edited the videos they shot in WeVideo.",
      "Session 7: Multi-modal AI. Students used multi-modal AI to invent a new sport, create a movie poster and plot, design their own LEGO set and make a logo.",
      "Session 8: Silent films. Students learned about silent films and made one together, adding subtitles and effects."
    ],
    next: [
      "Session 9: Advanced AI image editing. Students will learn to spot AI images and use segmenting, editing parts of an image and upscaling.",
      "Session 10: Personal vlog. Students will learn about vlogs and tips for a good vlog, then start shooting their own first episode.",
      "Session 11: Pro generative techniques. Students will create patterns, optical illusions and consistent characters with AI.",
      "Session 12: Personal vlog. Students will learn the rules of sharing videos online, edit their vlog and watch the finished videos together.",
      "Session 13: AI video and sound. Students will generate short videos from text and learn how sound works before generating music.",
      "Session 14: Advertisements. Students will learn about different types of ads and shoot and edit their own ad in small groups.",
      "Session 15: AI voices and songs. Students will generate speech, music and a full song with AI and add generated voices to real actors.",
      "Session 16: Report and final film. Students will shoot and edit a report, then finish and present their main film project."
    ]
  },

  // 3D Design course
  "3D Design course": {
    courseName: "3D Design course",
    covered: [
      "Session 1: Getting to know Tinkercad. Students got to know each other and Tinkercad and built models from simple shapes.",
      "Session 2: Cutting objects. Students used holes (negative shapes) to cut objects and modelled a spiral staircase, a designer bench and custom dice.",
      "Session 3: Designing tools. Students modelled a flat-blade and a cross-head screwdriver and learned about industrial 3D printing."
    ],
    next: [
      "Session 4: Furnishings. Students will model an armchair, furnish a room to scale and try an online furnishing tool.",
      "Session 5–6: House design. Students will design their dream house to scale in Tinkercad, furnish its rooms and present it to the group."
    ]
  },

  // App Creation course
  "App Creation course": {
    courseName: "App Creation course",
    covered: [
      "Session 1: Thunkable. Students got to know Thunkable, registered and built their first app, a text-to-speech app.",
      "Session 2: AI tools. Students added a translator to their app and built an image recognition app that identifies photos.",
      "Session 3: Daily quote app. Students used an external database, variables and functions to build an app that shows a new quote each day.",
      "Session 4: Tic-tac-toe. Students designed a 3x3 board and programmed the classic tic-tac-toe game for two players.",
      "Session 5: Workout app. Students designed a home workout app with multiple screens."
    ],
    next: [
      "Session 6: Workout app. Students will program their workout app and add their own exercises.",
      "Session 7–8: Shopping list and barcode reader. Students will build a shopping list app with their own database, voice input and a barcode scanner.",
      "Session 9–10: Calorie counter. Students will build a calorie counter app with daily statistics as the final project of the course."
    ]
  },

  // Generative AI course
  "Generative AI course": {
    courseName: "Generative AI course",
    covered: [
      "Session 1: Introduction to AI. Students learned what AI is and how computers learn, played a sorting game and trained their own model with Teachable Machine.",
      "Session 2: Generative AI. Students learned how generative AI and large language models work, wrote image prompts and used text prompts to create secret codes.",
      "Session 3: Prompt engineering. Students learned and practiced advanced prompting techniques for text and image generation.",
      "Session 4: Multi-modal AI. Students used multi-modal AI to invent a new sport, create a movie poster and plot, design their own LEGO set and make a logo.",
      "Session 5: Advanced AI image editing. Students learned to spot AI images and used segmenting, editing parts of an image and upscaling."
    ],
    next: [
      "Session 6: Pro generative techniques. Students will create patterns, optical illusions and consistent characters with AI.",
      "Session 7–8: AI video and sound. Students will generate short videos from text, then generate speech, music and a full song with AI.",
      "Session 9: Glitches, ethics and jokes. Students will explore AI glitches and humour and discuss ethics and safety in AI.",
      "Session 10: Time capsule and showcase. Students will collect their best AI creations in a time capsule and showcase them to their parents."
    ]
  },

  // Minecraft Mod Masters course
  "Minecraft Mod Masters course": {
    courseName: "Minecraft Mod Masters course",
    covered: [
      "Session 1: Introducing MCreator. Students learned what a mod is, set up MCreator and created their first mod with custom tools.",
      "Session 2: Introducing Blockbench. Students programmed item triggers, modelled a unique 3D sword in Blockbench and added it to their mod.",
      "Session 3: Equipment and structures. Students made custom equipment, modelled a 3D helmet, built a structure that appears in the world and exported their mod.",
      "Session 4: LogiRobi. Students modelled a friendly flying robot entity and created a robot potion with its own effect and recipe.",
      "Session 5: Making a vehicle. Students modelled a go-kart, set it up as a ridable entity with a spawning item and a trade, and tested it with commands."
    ],
    next: [
      "Session 6: Painting and hammer. Students will add their own painting to the game and make a hammer that mines bigger areas, with a custom enchantment.",
      "Session 7–8: Custom dimension. Students will make a Cyber Apple, a machine, a portal block, a 3D flower and a biome, and combine them into their own dimension.",
      "Session 9–10: Individual project. Students will create their own mod elements independently, then present and export their final mod."
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
      "Session 15–16: Animations and urban legends. Students created or analyzed simple animations and talked about fake information and urban legends online – how to question what we see or read. Project lesson and presentation – each student prepared a small project (drawing, Scoolcode project, or similar) and presented what they learned during the semester."
    ]
  },

  // 161 – Blox Basic Normal 1
  "161": {
    courseName: "161 – Blox Basic (Normal 1)",
    covered: [
      "Session 1–3: House rules, MyLogiscool and Scoolcode introduction. Students learned class rules, logged in to MyLogiscool and created their first Scoolcode projects focusing on actors, movement and simple events (when started, when key pressed).",
      "Session 4–5: Pen tool and first variables. Through a witch adventure and an undersea game, students practiced drawing with the pen tool, coordinates, and began using simple variables such as score and counters inside games.",
      "Session 6–7: Cat–mouse–cheese and Ghost Buster games. They learned more complex movement, collisions and conditions (if/else) by building games where players chase or avoid other actors and react to touches and colors."
    ],
    next: [
      "Session 8: Mid-term project lesson – students combined everything learned so far (movement, pen, collisions, variables) to design a small custom game.",
      "Session 9–10: Save the Earth and quiz games. We practiced events, scoring and levels by building an eco-themed game and a quiz, including question/answer logic and feedback for correct/incorrect answers.",
      "Session 11–13: Variables in more depth. With balloon-shooting and aura of a wasp projects, students used multiple variables (score, lives, time, speed), practiced randomization and refined their use of if/else logic.",
      "Session 15–16: Save the space station and robot-hunting games. These lessons focused on more advanced game logic: multiple actors, parallax or changing backdrops, timers, and slightly more complex conditions for win/lose states. Final project lesson – students chose or designed their own game and used all core concepts (events, movement, variables, conditions, drawing) to finish a complete project for the end of the semester."
    ]
  },

  // 171 – Blox Basic Normal 2
  "171": {
    courseName: "171 – Blox Basic (Normal 2)",
    covered: [
      "Session 1–3: House rules revision, MyLogiscool and pen tool refresh. Students revisited Scoolcode basics, did free-hand drawing with the pen tool and built an antidote collector game that reinforced movement and drawing.",
      "Session 4–5: loops and Shark vs. jellyfish. We connected physical robotics (Spike Prime) with programming loops and then created games mixing drawing, movement and simple enemy behavior.",
      "Session 6–7: Mouse chase and Sail the Seal. Students practiced more precise controls, avoiding obstacles, and reacting to touches, building games that require timing and navigation."
    ],
    next: [
      "Session 8: Mid-term project lesson – each student chose a favorite idea from previous lessons and turned it into a small game or animation.",
      "Session 9–12: Variables and game mechanics. Through Save the Earth, wizard battles and a fire-extinguishing game, students used variables for score, health, remaining time and resource counters, and linked them to visual feedback in the game.",
      "Session 13–14: Logical variables and number guessing. Students used booleans (true/false) in conditions and built a number-guessing game where feedback depends on comparisons and logical checks.",
      "Session 15-16: Cat in the city – a more complex Blox game with moving backgrounds, obstacles and combined mechanics. Final project lesson – students created or polished a project of their choice using all their Blox knowledge (movement, variables, logic, sensors where applicable)."
    ]
  },

  // 212 – Blox Advanced
  "212": {
    courseName: "212 – Blox Advanced (Lists & Text Games 1)",
    covered: [
      "Session 1–3: XO game, coordinates and debugging. Students practiced working on a grid, learned to position actors using coordinates, and used signals and debugging techniques to fix logical and positioning errors.",
      "Session 4–7: Introduction to list data structures. Through multiple list-based projects, they learned how to create lists, add and remove items, loop through them and connect multiple lists to manage more complex game states.",
      "Session 8: Project lesson – students built a mid-term project focusing on lists (for example a memory or multi-step game)."
    ],
    next: [
      "Session 9–11: Text handling games – quiz, typing and anagram. These lessons developed string manipulation and list skills by building quiz games, typing practice and anagram puzzles that check and compare text.",
      "Session 12–13: Slime is hungry and squirrel jumping games. Students used lists together with collisions and physics-like movement to manage items (food, branches) and player progress.",
      "Session 14–16: Hangman, flying games and fish memory. These games combined lists, letters and positions: checking guesses, revealing letters, managing collected objects and building more complex win/lose logic. Final project lesson – students designed their own advanced Blox game, typically using lists and/or text handling plus everything they had learned throughout the semester."
    ]
  },

  // 221 – Blox Advanced
  "221": {
    courseName: "221 – Blox Advanced (Lists & Cloning 2)",
    covered: [
      "Session 1–3: Five-in-a-row game and signals. Students built a board-style game, learned about win conditions on a grid and practiced message-passing (signals) between actors for reactions and effects.",
      "Session 4–7: Cloning and multi-actor games. With ghost and sheep-collecting projects, they learned to create and control many clones, manage directions and speeds and handle interactions between large groups of actors.",
      "Session 8: Project lesson – students built a mid-term project focusing on signals and/or cloning."
    ],
    next: [
      "Session 9–12: Lists and memory games. They were introduced to lists again with more depth, then used them to create memory games with fish and other items, tracking revealed pairs and cleared cards.",
      "Session 13–15: Firefighting, typing and anagram games. These lessons mixed fast reactions with string and list manipulation, helping students practice accuracy and algorithmic thinking.",
      "Session 16: Space Invaders – they created a shooter game with moving enemy rows, bullets and win/lose backgrounds, practicing variables for speed and delay. Final project lesson – students combined lists, cloning, signals and their favorite mechanics into one semester-closing project."
    ]
  },

  // 311 – Mix Basic
  "311": {
    courseName: "311 – Mix Basic (Python Mix)",
    covered: [
      "Session 1–2: Getting familiar with the Python Mix environment. Students created the Shark eats fish game using blocks, then looked at the generated StagePython code to understand how blocks translate into text.",
      "Session 3–4: Lists and cloning. They learned to use list data structures and cloning to manage multiple actors, practicing loops, random positions and collision handling.",
      "Session 5–7: Space travelling and Rock–paper–scissors. These projects practiced conditions, score variables and keyboard control in more dynamic games."
    ],
    next: [
      "Session 8: Project lesson – students built a full game in Mix using what they had learned so far.",
      "Session 9–11: Functions and parameters. They started writing their own functions, called them from different parts of the code, and later extended them with parameters to reuse logic in multiple situations.",
      "Session 12–13: Functions with return values and physics. Students used functions that return values, connected them to simple physics (movement, forces, collisions) and reinforced structured code design.",
      "Session 14–16: Function-based mini games such as simple function-driven games, Floating fish and a spaceship rescue mission. They practiced splitting big problems into smaller functions and coordinating multiple actors using shared logic. Final project lesson – students created a more complex Mix game from scratch or significantly upgraded an earlier one, using functions, lists, cloning and physics."
    ]
  },

  // 312 – Mix Advanced
  "312": {
    courseName: "312 – Mix Advanced (Algorithms & Games)",
    covered: [
      "Session 1–2: Lists, functions and physics. Students built a number-clicking memory game and a physics-based basketball game, practicing list operations, helper functions and basic physics properties such as gravity, forces and collision.",
      "Session 3–6: Aggregation algorithms – sum, minimum, minimum–maximum–average, conditional sum and counting. They learned how to process a list to calculate totals, minima, maxima and filtered sums using loops and conditions.",
      "Session 7–8: Flappy Bat game (parts 1–2). Students implemented a side-scrolling game with gravity, jumping mechanics, obstacles, collision detection, scoring and game-over/restart logic."
    ],
    next: [
      "Session 9–11: Lists and linear search. They wrote functions that search through lists, first in simple scenarios and then in drag-and-drop style games that check correctness based on list content.",
      "Session 12–14: Sorting algorithms. Students implemented basic swap sort and bubble sort visually, comparing elements, swapping them and watching step-by-step how a list becomes ordered.",
      "Session 15–16: Dino Run game. They built a runner-style game with increasing difficulty, combining physics, collisions, score tracking and the algorithms learned earlier to manage speed and game state. Final project lesson – students created a more complex Mix game from scratch or significantly upgraded an earlier one, using functions, lists, cloning and physics."
    ]
  },

  // 431 – Python Basics
  "431": {
    courseName: "431 – Python Basics (StagePython / PyCharm)",
    covered: [
      "Session 1–2: Basics of Python, text formatting and variables. Students were introduced to Python and PyCharm, wrote their first .py files with print() and input(), and used simple variables and text formatting.",
      "Session 3–4: Mad-Lib stories and if-statements. They created small text-based stories using user input and if statements, then extended them with operators and more complex logical conditions.",
      "Session 5–7: While loops, lists and for loops. Students practiced loops to repeat actions, used lists to store multiple values, and iterated over them with for loops to build small console programs."
    ],
    next: [
      "Session 8–10: Combined practice with variables and statements plus a dedicated practice lesson. These sessions reinforced everything learned so far, with small tasks mixing input, conditions, loops and lists.",
      "Session 11–13: Nested loops, Turtle graphics and more list practice. Students used nested loops to draw patterns with Turtle and solved more complex list problems step by step.",
      "Session 14–15: Practice and semester summary. They completed a set of integrated exercises and then summarized the most important Python concepts (types, variables, control flow, lists and functions).",
      "Session 16: Escape room project. Students designed and implemented a text-based escape room game, using conditions, loops, lists and functions to create branching stories, choices and multiple endings."
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
      "Session 16: Mini quiz and flashback to the past. The course will close with a review mini-quiz and playful recap of key topics (internet, navigation, media, programming), followed by a 'Flashback to the past' session on how science-fiction books and movies predicted or inspired modern technologies, plus a final Scoolcode variables game about defending a Moon colony."
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
      "Session 16: Detective game. Summary project with parallax, different variable types, logical operators and several game-over conditions. Final project. Students design or extend a game of their choice and present it to the group."
    ]
  },

  // 110 – Digital Intro
  "110": {
    courseName: "110 – Digital Intro",
    covered: [
      "Session 1: Greeting, rules, name games, and first computer basics (mouse, desktop, icons). Kids practiced on code.org Course 1 Levels 3–4.",
      "Session 2: Mouse practice with balloon-popping and chest-collecting games, left–right recognition activities, and MyLogiscool login basics.",
      "Session 3: MyLogiscool introduction, mini-quests, and offline robot-play. Bee-bot introduction with simple forward/turn commands.",
      "Session 4: Introduction to Kodu world-building tools (terrain, mountains, water, characters). Kids created simple robots from shapes.",
      "Session 5: Bee-bot shape game (identifying shapes without naming them) and online drawing activities (pattern blocks, mirror drawing).",
      "Session 6: Kodu basics continued — movement, adding characters, simple reactions. Kids created a small 'meet the friend' game and fish pond.",
      "Session 7: Accessibility awareness (how people with disabilities use computers). Mouse practice with math games + Bee-bot dice activity."
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
      "Session 16: Paint background creation for Scoolcode stamping game (1334×750). Upload and decorate in Design tab. Final project lesson (Paint, Bee-bot, or Kodu). Students create and present a small project, recap all digital topics learned."
    ]
  },

  // 421 – Unity Basic
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
      "Session 16: Final project — students design and start their own Unity mini-game. Final project polish, debugging, UI, presentation, and course recap."
    ]
  },

  // 423 – Unity Master
  "423": {
    courseName: "423 – Unity Master",
    covered: [
      "Session 1–3: Color Crasher game — creating a 3D game with a colored Player, matching-color obstacles, A/D and mobile touch controls, object pooling, obstacle spawning, collision detection, game restart logic, collectible coins, UI, and preparing the game for Android.",
      "Session 4: Git version control — introduction to Git and GitHub, creating repositories, Unity .gitignore, commits, branches, pull requests, merging, cloning repositories, and syncing projects through VS Code.",
      "Session 5–6: Adventure game (part 1–2) — creating a 2D world with Tilemaps, Tile Palettes, backgrounds and a Player, then introducing Object-Oriented Programming with base classes and inherited properties such as Health, Strength, Intelligence, Agility, and Damage.",
      "Session 7: Adventure game (part 3) — implementing Player movement and jumping with Rigidbody2D, camera following, class-based weapons, weapon prefabs, colliders, and sword animations.",
      "Session 8: Adventure game (part 4) — completing weapon mechanics, adding SwordScript and enemy interactions, creating different enemy types, enemy spawning, multiple levels, scene switching, and applying OOP concepts."
    ],
    next: [
      "Session 9: Real-Time Strategy game (part 1) — introduction to NavMesh and creating the basic RTS environment and unit selection/movement system.",
      "Session 10: Real-Time Strategy game (part 2) — creating Ally and Enemy units, NavMesh Agents, unit animations, movement, targeting, attacking, enemy AI, and unit combat.",
      "Session 11: Real-Time Strategy game (part 3) — adding game UI for Gold and unit counters, unit spawning and purchasing, resource management, background music, attack sounds, and additional RTS improvements.",
      "Session 12: Two Player Fighter game (part 1) — creating two playable characters, movement, attacks, health, animations, and two-player keyboard controls.",
      "Session 13: Two Player Fighter game (part 2) — using Unity's Input Manager, configuring player-specific controls, finishing combat mechanics, health and damage systems, rounds, power-ups, and support for different input devices.",
      "Session 14: FPS game (part 1) — starting a four-session FPS shooter project by creating the room, pistol, player movement, aiming, and the basic FPS gameplay structure.",
      "Session 15: FPS game (part 2) — implementing the shooting mechanics, bullets/projectiles, weapon behavior, and shooting interactions.",
      "Session 16: FPS game (part 3) — creating monsters/enemies, enemy spawning, enemy movement toward the player, health and damage interactions, and shooting enemies. FPS game (part 4) — finishing the FPS project, completing the enemy and shooting systems, polishing the gameplay, testing the final project, and course recap."
    ]
  },

  // 291 – Game Design
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
      "Session 16: Game Project Development — Students work on a structured final game project applying design, mechanics, balance, narrative, and UX principles. Final Project Presentation — Final game presentation, analysis, peer feedback, reflection, and evaluation of design decisions and learning outcomes."
    ]
  }
};

// Courses that share the same lessons
coursesConfig["404"] = coursesConfig["403"];
coursesConfig["492"] = coursesConfig["491"];
coursesConfig["DI-101"] = coursesConfig["101"];



// ============================================================
// DOM ELEMENTS
// ============================================================

// Trainer
const trainerNameInput = document.getElementById("trainerName");
const previewTrainerName = document.getElementById("previewTrainerName");
const previewTrainerSignature = document.getElementById("previewTrainerSignature");

// Student
const studentNameInput = document.getElementById("studentName");

// Course
const courseSelect = document.getElementById("courseSelect");

// Lessons
const lessonsFromInput = document.getElementById("lessonsFrom");
const lessonsToInput = document.getElementById("lessonsTo");

// Text
const overviewInput = document.getElementById("overviewInput");
const coachNotesInput = document.getElementById("coachNotesInput");

// Feedback type
const feedbackTypeSelect = document.getElementById("feedbackType");

// Next section
const nextSection = document.getElementById("next-section");

// Preview
const previewStudentName = document.getElementById("previewStudentName");
const previewCourseName = document.getElementById("previewCourseName");
const previewLessonsRange = document.getElementById("previewLessonsRange");
const previewOverview = document.getElementById("previewOverview");
const previewCoachNotes = document.getElementById("previewCoachNotes");
const previewCovered = document.getElementById("previewCovered");
const previewNext = document.getElementById("previewNext");

// Buttons
const applyTemplateBtn = document.getElementById("applyTemplateBtn");
const resetBtn = document.getElementById("resetBtn");
const downloadPdfBtn = document.getElementById("downloadPdfBtn");


// ============================================================
// TRAINER NAME STORAGE
// ============================================================

const DEFAULT_TRAINER_NAME = "Eng. Mohamed Ghazy";
const TRAINER_STORAGE_KEY = "feedbackGeneratorTrainerName";


// Load saved trainer name
function loadTrainerName() {
  if (!trainerNameInput) return;

  const savedTrainerName =
    localStorage.getItem(TRAINER_STORAGE_KEY);

  trainerNameInput.value =
    savedTrainerName || DEFAULT_TRAINER_NAME;
}


// Save trainer name
function saveTrainerName() {
  if (!trainerNameInput) return;

  const trainerName = trainerNameInput.value.trim();

  if (trainerName) {
    localStorage.setItem(
      TRAINER_STORAGE_KEY,
      trainerName
    );
  } else {
    localStorage.removeItem(
      TRAINER_STORAGE_KEY
    );
  }
}


// Get current trainer name
function getTrainerName() {
  if (!trainerNameInput) {
    return DEFAULT_TRAINER_NAME;
  }

  return (
    trainerNameInput.value.trim() ||
    DEFAULT_TRAINER_NAME
  );
}


// ============================================================
// HELPERS
// ============================================================

function getSelectedCourseName() {
  if (!courseSelect) return "";

  const opt =
    courseSelect.options[courseSelect.selectedIndex];

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


// ============================================================
// COURSE SECTIONS
// ============================================================

// Reads "Session 3–4: text" -> { start: 3, end: 4, text: "text" }
function parseSessionEntry(raw) {
  const m = /^Sessions?\s+(\d+)(?:\s*[–-]\s*(\d+))?\s*:\s*/.exec(raw);
  if (!m) return { start: null, end: null, text: raw };
  const start = parseInt(m[1], 10);
  const end = m[2] ? parseInt(m[2], 10) : start;
  return { start, end, text: raw.slice(m[0].length) };
}

function sessionLabel(start, end) {
  return start === end ? `Session ${start}` : `Session ${start}–${end}`;
}

// Some upcoming-lesson texts are written in the future tense ("Students will build…").
// When those lessons move to "What We Covered", rewrite them in the past tense.
const PAST_TENSE = {
  bring: "brought", export: "exported", fight: "fought", find: "found", guess: "guessed", plan: "planned", spot: "spotted", teach: "taught", test: "tested", watch: "watched",
  choose: "chose", import: "imported", model: "modelled", steer: "steered", train: "trained",
  compare: "compared", control: "controlled", convert: "converted", discover: "discovered", discuss: "discussed", edit: "edited", furnish: "furnished", generate: "generated", join: "joined", sail: "sailed", shoot: "shot", show: "showed", showcase: "showcased", upscale: "upscaled",
  add: "added", analyse: "analysed", append: "appended", animate: "animated", build: "built",
  close: "closed", code: "coded", collect: "collected", combine: "combined",
  copy: "copied", cover: "covered", create: "created", decode: "decoded", delete: "deleted",
  deepen: "deepened", describe: "described", design: "designed", draw: "drew",
  begin: "began", continue: "continued", encode: "encoded", explain: "explained", explore: "explored", finish: "finished", filter: "filtered", focus: "focused", give: "gave", improve: "improved", open: "opened",
  invent: "invented", learn: "learned", optimize: "optimized", make: "made", play: "played",
  practice: "practiced", practise: "practised", prepare: "prepared", present: "presented", program: "programmed",
  read: "read", rebuild: "rebuilt", redesign: "redesigned", review: "reviewed", search: "searched", solve: "solved",
  start: "started", take: "took", talk: "talked", try: "tried", turn: "turned",
  use: "used", work: "worked", write: "wrote"
};

function toPastTense(text) {
  const willAt = text.search(/\bwill\b/);
  if (willAt === -1) return text;
  // Only rewrite from "will" onwards, so the session title stays as it is
  const head = text.slice(0, willAt).replace(/\bUpcoming lessons $/, "These lessons ");
  const tail = text
    .slice(willAt)
    .replace(
      /(\bwill\s+|,\s+then\s+|,\s+and\s+|,\s+|\band\s+|\bthen\s+)([a-z]+)\b/g,
      (match, before, word, offset, full) => {
        const past = PAST_TENSE[word];
        if (!past) return match;
        // keep "to write", "how to spot" etc. as they are
        if (/\bto\s+$/.test(full.slice(0, offset))) return match;
        return before + past;
      }
    )
    .replace(/\bwill\s+/g, "");
  return head + tail;
}

function applyCourseSections() {
  const code = courseSelect.value;

  const cfg =
    coursesConfig[code] ||
    coursesConfig.default;

  const isFinal =
    feedbackTypeSelect &&
    feedbackTypeSelect.value === "final";

  const coveredArr = Array.isArray(cfg.covered) ? cfg.covered : [];
  const nextArr = Array.isArray(cfg.next) ? cfg.next : [];

  const fromNum = parseInt(lessonsFromInput.value, 10);
  // No "Lessons To" yet -> use the usual range: mid-course = 1–8, final = 1–16
  const toNum = parseInt(lessonsToInput.value, 10) || (isFinal ? 16 : 8);

  // Split every session by the lessons the student attended
  const firstLesson = fromNum && fromNum <= toNum ? fromNum : 1;
  const coveredOut = [];
  const nextOut = [];

  const entries = coveredArr
    .map((raw) => ({ ...parseSessionEntry(raw), raw, wasCovered: true }))
    .concat(nextArr.map((raw) => ({ ...parseSessionEntry(raw), raw, wasCovered: false })));

  entries.forEach((e) => {
    // Lines without a session number stay where they were written
    if (e.start === null) {
      (e.wasCovered ? coveredOut : nextOut).push(e.raw);
      return;
    }

    const doneStart = Math.max(e.start, firstLesson);
    const doneEnd = Math.min(e.end, toNum);
    if (doneStart <= doneEnd) {
      coveredOut.push(`${sessionLabel(doneStart, doneEnd)}: ${toPastTense(e.text)}`);
    }

    if (e.end > toNum) {
      const restStart = Math.max(e.start, toNum + 1);
      nextOut.push(`${sessionLabel(restStart, e.end)}: ${e.text}`);
    }
  });

  setListContent(previewCovered, coveredOut);
  setListContent(previewNext, isFinal ? [] : nextOut);
}


// ============================================================
// PREVIEW
// ============================================================

function updatePreview() {

  // -------------------------
  // Trainer
  // -------------------------

  const trainerName =
    getTrainerName();

  if (previewTrainerName) {
    previewTrainerName.textContent =
      trainerName;
  }

  if (previewTrainerSignature) {
    previewTrainerSignature.textContent =
      trainerName;
  }


  // -------------------------
  // Student
  // -------------------------

  if (previewStudentName) {
    previewStudentName.textContent =
      studentNameInput.value.trim() ||
      "[Student Name]";
  }


  // -------------------------
  // Course
  // -------------------------

  const courseName =
    getSelectedCourseName();

  if (previewCourseName) {
    previewCourseName.textContent =
      courseName ||
      "[Course Name]";
  }


  // -------------------------
  // Lessons
  // -------------------------

  const from =
    lessonsFromInput.value.trim();

  const to =
    lessonsToInput.value.trim();

  if (previewLessonsRange) {

    previewLessonsRange.textContent =
      from || to
        ? `${from || "?"} → ${to || "?"}`
        : "[1 → 8]";
  }


  // -------------------------
  // Overview
  // -------------------------

  if (previewOverview) {

    previewOverview.textContent =
      overviewInput.value.trim() ||
      "(Overview will appear here…)";
  }


  // -------------------------
  // Coach Notes
  // -------------------------

  if (previewCoachNotes) {

    previewCoachNotes.textContent =
      coachNotesInput.value.trim() ||
      "(Coach’s notes will appear here…)";
  }


  // -------------------------
  // What's Next visibility
  // -------------------------

  applyCourseSections();

  if (
    feedbackTypeSelect &&
    nextSection
  ) {

    if (
      feedbackTypeSelect.value === "final" ||
      (previewNext && previewNext.children.length === 0)
    ) {

      nextSection.style.display =
        "none";

    } else {

      nextSection.style.display =
        "block";
    }
  }
}


// ============================================================
// EVENTS
// ============================================================

// Trainer name
if (trainerNameInput) {

  trainerNameInput.addEventListener(
    "input",
    function () {

      saveTrainerName();
      updatePreview();

    }
  );
}


// Student name
if (studentNameInput) {

  studentNameInput.addEventListener(
    "input",
    updatePreview
  );
}


// Lessons
if (lessonsFromInput) {

  lessonsFromInput.addEventListener(
    "input",
    updatePreview
  );
}


if (lessonsToInput) {

  lessonsToInput.addEventListener(
    "input",
    updatePreview
  );
}


// Overview
if (overviewInput) {

  overviewInput.addEventListener(
    "input",
    updatePreview
  );
}


// Coach notes
if (coachNotesInput) {

  coachNotesInput.addEventListener(
    "input",
    updatePreview
  );
}


// Course
if (courseSelect) {

  courseSelect.addEventListener(
    "change",
    function () {

      applyCourseSections();
      updatePreview();

    }
  );
}


// Feedback type
if (feedbackTypeSelect) {

  feedbackTypeSelect.addEventListener(
    "change",
    function () {

      applyCourseSections();
      updatePreview();

    }
  );
}


// ============================================================
// FILL EXAMPLE TEXT
// ============================================================

if (applyTemplateBtn) {

  applyTemplateBtn.addEventListener(
    "click",
    function (e) {

      e.preventDefault();


      // Trainer
      if (
        trainerNameInput &&
        !trainerNameInput.value.trim()
      ) {

        trainerNameInput.value =
          DEFAULT_TRAINER_NAME;

        saveTrainerName();
      }


      // Student
      if (
        !studentNameInput.value
      ) {

        studentNameInput.value =
          "Zeena Haque";
      }


      // Course
      if (
        !courseSelect.value
      ) {

        courseSelect.value =
          "161";
      }


      // Lessons From
      if (
        !lessonsFromInput.value
      ) {

        lessonsFromInput.value =
          "1";
      }


      // Lessons To
      if (
        !lessonsToInput.value
      ) {

        lessonsToInput.value =
          "8";
      }


      // Overview
      if (
        !overviewInput.value
      ) {

        overviewInput.value =
          "Zeena is a very smart and cheerful student. She understands new concepts quickly and actively participates during class discussions. To reach her full potential, she just needs a bit more practice at home to strengthen what she learns in class.";
      }


      // Coach Notes
      if (
        !coachNotesInput.value
      ) {

        coachNotesInput.value =
          "She is progressing well. I recommend practicing small games at home and trying to add new features like sound or extra actors to build more confidence and creativity.";
      }


      applyCourseSections();
      updatePreview();

    }
  );
}


// ============================================================
// RESET FORM & PREVIEW
// ============================================================

if (resetBtn) {

  resetBtn.addEventListener(
    "click",
    function () {

      // IMPORTANT:
      // Trainer name is NOT cleared.
      // It is saved separately for each trainer/device.

      studentNameInput.value = "";

      courseSelect.selectedIndex = 0;

      lessonsFromInput.value = "";

      lessonsToInput.value = "";

      overviewInput.value = "";

      coachNotesInput.value = "";


      if (feedbackTypeSelect) {

        feedbackTypeSelect.value =
          "mid";
      }


      // Restore trainer name
      loadTrainerName();

      applyCourseSections();

      updatePreview();

    }
  );
}


// ============================================================
// DOWNLOAD PDF
// ============================================================

if (downloadPdfBtn) {

  downloadPdfBtn.addEventListener(
    "click",
    function () {

      // Make sure everything is updated
      updatePreview();


      const element =
        document.getElementById(
          "feedback-preview"
        );

      const name =
        studentNameInput.value.trim() ||
        "student";


      // Check html2pdf
      if (
        typeof html2pdf === "undefined"
      ) {

        alert(
          "html2pdf.js is not loaded. Please check your internet connection or the script URL."
        );

        console.error(
          "html2pdf is undefined – check CDN script tag."
        );

        return;
      }


      // Scroll to top
      window.scrollTo(
        0,
        0
      );


      const opt = {

        margin: 10,

        filename:
          `feedback-${name}.pdf`,

        image: {
          type: "jpeg",
          quality: 1.0
        },

        html2canvas: {

          scale: 2,

          useCORS: true,

          scrollY: 0
        },

        jsPDF: {

          unit: "mm",

          format: "a4",

          orientation: "portrait"
        }
      };


      // Give browser time to render
      setTimeout(
        () => {

          element.classList.add("pdf-export");

          html2pdf()
            .set(opt)
            .from(element)
            .save()
            .then(() => element.classList.remove("pdf-export"))
            .catch((err) => {
              element.classList.remove("pdf-export");
              console.error(err);
            });

        },
        150
      );

    }
  );
}


// ============================================================
// INITIALIZATION
// ============================================================

// Load saved trainer name first
loadTrainerName();

// Load course sections
applyCourseSections();

// Update preview
updatePreview();
