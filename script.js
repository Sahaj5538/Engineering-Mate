// Database simulation (localStorage)
// 1. Firebase Initialization

// 2. DOM Elements
const signupbtn = document.getElementById('signupbtn');
const signupPage = document.getElementById('signupPage');
const landingPage = document.getElementById('landingPage');
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');

// 3. Sign Up Button Click
// signupbtn.addEventListener('click', function() {
//     landingPage.style.display = 'none';    
//     loginPage.classList.add('hidden');    
//     signupPage.classList.remove('hidden'); 
// });
const DB = {
    
    userProgress: {},

    

    // Course structure
    courses: {
        1: {
            name: '1st Year',
            icon: 'fas fa-book',
            subjects: [
            {
                id: '1_1',
                name: 'Linear Algebra and Function Approximation',
                progress: 0,
                icon: 'fas fa-calculator',
                lessons: [
                    { id: '1_1_1', name: 'Fundamentals of Vector and Matrix Algebra',  completed: false ,videoUrl:"https://www.youtube.com/embed/XkY2DOUCWMU", quiz : [
                        {
                          question: "What is the result of adding two vectors (u₁, u₂, ..., uₙ) and (v₁, v₂, ..., vₙ)?",
                          options: [
                            "(u₁ + v₁, u₂ + v₂, ..., uₙ + vₙ)",
                            "(u₁v₁, u₂v₂, ..., uₙvₙ)",
                            "(u₁ - v₁, u₂ - v₂, ..., uₙ - vₙ)",
                            "None of the above"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "How is scalar multiplication of a vector defined?",
                          options: [
                            "Add a scalar to each component",
                            "Multiply each component by the scalar",
                            "Subtract a scalar from each component",
                            "None of the above"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In matrix addition, what operation is performed on corresponding elements?",
                          options: [
                            "Multiplication",
                            "Division",
                            "Addition",
                            "Subtraction"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is necessary for a square matrix to have an exact inverse?",
                          options: [
                            "It must be symmetric",
                            "It must have a zero determinant",
                            "It must have a non-zero determinant",
                            "It must be a diagonal matrix"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which of the following is NOT a property of the orthogonal projection of vector u onto vector v?",
                          options: [
                            "The projection is parallel to v",
                            "The projection is orthogonal to v",
                            "The difference (u - projection) is orthogonal to v",
                            "The length of the projection depends on the cosine of the angle between u and v"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the rank of a matrix?",
                          options: [
                            "The number of its columns",
                            "The number of independent rows or columns",
                            "The sum of its diagonal elements",
                            "The maximum eigenvalue"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which condition must a set of vectors satisfy to be considered linearly independent?",
                          options: [
                            "Their sum must be zero",
                            "No vector can be expressed as a linear combination of the others",
                            "All vectors must be equal",
                            "The vectors must be orthogonal"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "A matrix A satisfies A = Aᵗ. What type of matrix is it?",
                          options: [
                            "Skew-symmetric matrix",
                            "Symmetric matrix",
                            "Hermitian matrix",
                            "Unitary matrix"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the formula for the l₂-norm (Euclidean norm) of a vector?",
                          options: [
                            "Sum of absolute values of components",
                            "Square root of the sum of squares of components",
                            "Product of vector components",
                            "Maximum value among the components"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "The Moore-Penrose pseudoinverse A⁺ satisfies which condition?",
                          options: [
                            "A⁺A⁺ = A",
                            "AA⁺A = A",
                            "AA⁺ = I",
                            "A⁺A⁺ = I"
                          ],
                          correctAnswer: 1
                        }
                      ]
                    },
                    { id: '1_1_2', name: 'Matrix Eigenvalue Problem and Quadratic Forms',completed: false ,videoUrl :"https://www.youtube.com/embed/PFDu9oVAE-g",quiz : [
                        {
                          question: "What is an eigenvector?",
                          options: [
                            "A zero vector that changes by a scalar factor under transformation",
                            "A non-zero vector that changes only by a scalar factor under transformation",
                            "A vector that stays constant under any transformation",
                            "None of the above"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What does an eigenvalue represent?",
                          options: [
                            "The dimension of a matrix",
                            "The scalar by which an eigenvector is scaled",
                            "The transpose of a matrix",
                            "The determinant of a matrix"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which equation must be solved to find the eigenvalues of a matrix A?",
                          options: [
                            "A v = λ v",
                            "det(A - λI) = 0",
                            "(A - λI) v = 0",
                            "A⁻¹ A = I"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "How do you find the eigenvector corresponding to an eigenvalue λ?",
                          options: [
                            "Solve A v = λ v",
                            "Solve (A - λI) v = 0",
                            "Solve det(A - λI) = 0",
                            "Find the inverse of A"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "When is a matrix diagonalizable?",
                          options: [
                            "When it has n independent eigenvectors",
                            "When it is symmetric",
                            "When it is orthogonal",
                            "When its determinant is zero"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "What is special about symmetric matrices regarding diagonalization?",
                          options: [
                            "They cannot be diagonalized",
                            "They can be orthogonally diagonalized",
                            "They have only complex eigenvalues",
                            "They are always indefinite"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In orthogonal diagonalization, which property does matrix Q satisfy?",
                          options: [
                            "Qᵀ = Q⁻¹",
                            "Q² = I",
                            "Q is a diagonal matrix",
                            "Q is a skew-symmetric matrix"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "If all eigenvalues of a symmetric matrix are positive, the matrix is:",
                          options: [
                            "Positive definite",
                            "Negative definite",
                            "Indefinite",
                            "Positive semidefinite"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "What characterizes an indefinite symmetric matrix?",
                          options: [
                            "All eigenvalues are positive",
                            "All eigenvalues are non-negative",
                            "All eigenvalues are non-positive",
                            "It has both positive and negative eigenvalues"
                          ],
                          correctAnswer: 3
                        },
                        {
                          question: "What is a quadratic form Q(x) expressed as?",
                          options: [
                            "xAᵀx",
                            "xᵀAx",
                            "Axᵀx",
                            "AxᵀA"
                          ],
                          correctAnswer: 1
                        }
                      ]
                      },
                    { id: '1_1_3', name: 'Matrix Decomposition and Least Squares Solution', completed: false ,videoUrl:"https://www.youtube.com/embed/P5mlg91as1c",quiz : [
                        {
                          question: "What does LU decomposition decompose a matrix into?",
                          options: [
                            "Two diagonal matrices",
                            "A lower and an upper triangular matrix",
                            "Two symmetric matrices",
                            "An orthogonal and a triangular matrix"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "For which type of matrix is Cholesky decomposition applicable?",
                          options: [
                            "Any square matrix",
                            "Symmetric positive definite matrices",
                            "Only orthogonal matrices",
                            "Upper triangular matrices"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the purpose of the Gram-Schmidt process?",
                          options: [
                            "To diagonalize a matrix",
                            "To orthonormalize a set of vectors",
                            "To solve least squares problems",
                            "To find the inverse of a matrix"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What are the matrices in QR factorization?",
                          options: [
                            "Two diagonal matrices",
                            "An orthogonal and a triangular matrix",
                            "Two orthogonal matrices",
                            "A symmetric and a skew-symmetric matrix"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In eigen decomposition of a symmetric matrix A, what does A equal?",
                          options: [
                            "PDP⁻¹",
                            "PDPᵀ",
                            "QDQ⁻¹",
                            "QQD"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the decomposition A = UΣVᵀ known as?",
                          options: [
                            "QR factorization",
                            "LU decomposition",
                            "Singular Value Decomposition (SVD)",
                            "Gram-Schmidt process"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In SVD, what kind of matrix is U?",
                          options: [
                            "Upper triangular",
                            "Diagonal",
                            "Orthogonal",
                            "Symmetric"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is a major application of Singular Value Decomposition (SVD)?",
                          options: [
                            "Finding matrix inverses",
                            "Image compression",
                            "Matrix multiplication",
                            "Matrix subtraction"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "How is the least squares solution found using QR factorization?",
                          options: [
                            "By solving Rx = Qᵀb",
                            "By solving Qx = Rᵀb",
                            "By inverting A",
                            "By diagonalizing A"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "Using the generalized inverse, what is the solution to Ax = b?",
                          options: [
                            "x = Aᵀb",
                            "x = A⁻¹b",
                            "x = A⁺b",
                            "x = Ab⁺"
                          ],
                          correctAnswer: 2
                        }
                      ]
                      }
                ]
            },
            {
                id: '1_2',
                name: 'Applied Physics',
                progress: 0,
                icon: 'fas fa-atom',
                lessons: [
                    { id: '1_2_1', name: 'Quantum Mechanics', completed: false, videoUrl:"https://www.youtube.com/embed/hyctIDPRSqY",quiz : [
                        {
                          question: "What is a black body?",
                          options: [
                            "An object that reflects all radiation",
                            "An object that absorbs and emits all electromagnetic radiation",
                            "A perfectly transparent object",
                            "A body that only emits visible light"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What does Planck’s Law describe?",
                          options: [
                            "The speed of light",
                            "The spectral density of radiation emitted by a black body",
                            "The reflection of light",
                            "The energy levels of an atom"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the energy of a photon according to Einstein's equation?",
                          options: [
                            "E = hν",
                            "E = mc²",
                            "E = hv²",
                            "E = h²ν"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "In the photoelectric effect, the kinetic energy of the emitted electron is:",
                          options: [
                            "K = hν + ϕ",
                            "K = hν − ϕ",
                            "K = ϕ − hν",
                            "K = h/ν"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the Compton effect?",
                          options: [
                            "Absorption of light by metals",
                            "Increase in frequency after scattering",
                            "Scattering of a photon resulting in an increase in wavelength",
                            "Photon splitting into two smaller photons"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What does the de Broglie hypothesis propose?",
                          options: [
                            "Particles have a wave-like nature",
                            "Waves behave like particles",
                            "Light has no mass",
                            "Particles travel at the speed of light"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "What does Heisenberg’s Uncertainty Principle state?",
                          options: [
                            "It is possible to know both position and momentum exactly at the same time",
                            "It is impossible to know either position or momentum",
                            "There is a limit to how precisely we can know both position and momentum simultaneously",
                            "Particles can exist in two places at once"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which formula represents Heisenberg's uncertainty relation for position and momentum?",
                          options: [
                            "ΔxΔp ≤ ℏ/2",
                            "ΔxΔp ≥ ℏ/2",
                            "ΔxΔp = 0",
                            "ΔxΔp > 1"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What does the Schrödinger equation describe?",
                          options: [
                            "The trajectory of planets",
                            "How the quantum state of a system evolves over time",
                            "The rate of radioactive decay",
                            "The energy produced in nuclear reactions"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In a particle-in-a-box model, what are the allowed energy levels?",
                          options: [
                            "Continuous energy levels",
                            "Random energy levels",
                            "Discrete energy levels depending on quantum numbers",
                            "Infinite energy levels"
                          ],
                          correctAnswer: 2
                        }
                      ]
                       },
                    { id: '1_2_2', name: 'Semiconductor Physics',completed: false ,videoUrl: "https://www.youtube.com/embed/YDbPEo96fag" , quiz : [
                        {
                          question: "What is an intrinsic semiconductor?",
                          options: [
                            "A semiconductor doped with impurities",
                            "A pure semiconductor without any impurities",
                            "A metal",
                            "A conductor at low temperatures"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In an n-type semiconductor, the majority carriers are:",
                          options: [
                            "Holes",
                            "Electrons",
                            "Protons",
                            "Neutrons"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What causes diffusion current in semiconductors?",
                          options: [
                            "An electric field",
                            "A magnetic field",
                            "A concentration gradient",
                            "Temperature difference"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is the expression for drift current density for electrons?",
                          options: [
                            "Jₙ = qpμₚE",
                            "Jₙ = qnμₙE",
                            "Jₙ = qDₙ(dn/dx)",
                            "Jₙ = -qDₙ(dn/dx)"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which equation describes the I-V characteristics of a p-n junction diode?",
                          options: [
                            "I = Iₛ (e^(qV/nkT) - 1)",
                            "I = V/R",
                            "I = qnμₙE",
                            "I = BI/(nqt)"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "In a Zener diode under reverse bias after breakdown, the voltage across it:",
                          options: [
                            "Becomes zero",
                            "Becomes negative",
                            "Remains almost constant",
                            "Fluctuates randomly"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is the Hall Effect?",
                          options: [
                            "Generation of voltage due to light exposure",
                            "Production of a voltage across a conductor in a magnetic field",
                            "Production of current due to temperature difference",
                            "Increase of resistance with temperature"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In the Hall voltage equation, Vₕ = (BI)/(nqt), what does 't' represent?",
                          options: [
                            "Temperature",
                            "Time",
                            "Thickness of the conductor",
                            "Torque"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which material is commonly used for intrinsic semiconductors?",
                          options: [
                            "Phosphorus",
                            "Boron",
                            "Silicon",
                            "Aluminum"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In drift current, carriers move due to:",
                          options: [
                            "Concentration gradient",
                            "Electric field",
                            "Magnetic field",
                            "Temperature gradient"
                          ],
                          correctAnswer: 1
                        }
                      ]
                      },
                    { id: '1_2_3', name: 'Optoelectronic Devices', completed: false,videoUrl:"https://www.youtube.com/embed/WWjldCmRteg", quiz : [
                        {
                          question: "What happens during a radiative transition in a semiconductor?",
                          options: [
                            "An electron loses energy without emitting light",
                            "An electron changes energy levels and emits a photon",
                            "A photon is absorbed but no transition occurs",
                            "Energy is lost as heat only"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is spontaneous emission?",
                          options: [
                            "Photon emission triggered by an incoming photon",
                            "Electron absorption by a hole",
                            "Electron spontaneously returning to a lower energy state emitting a photon",
                            "Electron transferring energy to another electron"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which process is the principle behind lasers?",
                          options: [
                            "Spontaneous emission",
                            "Stimulated emission",
                            "Recombination",
                            "Auger recombination"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is Shockley-Read-Hall (SRH) recombination?",
                          options: [
                            "Recombination through defect levels without photon emission",
                            "Recombination emitting a coherent photon",
                            "Recombination emitting two photons",
                            "Recombination generating electricity"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "In Auger recombination, the energy from recombination is:",
                          options: [
                            "Emitted as a photon",
                            "Lost as light",
                            "Transferred to another electron and lost as heat",
                            "Used to generate electric current"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What type of semiconductor device emits light when current passes through it?",
                          options: [
                            "Solar cell",
                            "PIN photodetector",
                            "Avalanche photodetector",
                            "Light Emitting Diode (LED)"
                          ],
                          correctAnswer: 3
                        },
                        {
                          question: "What is the purpose of the intrinsic region in a PIN photodetector?",
                          options: [
                            "To increase photon absorption and responsivity",
                            "To block electric current",
                            "To amplify incoming light",
                            "To heat the device"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "How does an avalanche photodetector (APD) achieve large gain?",
                          options: [
                            "By using a very thick p-type layer",
                            "Through impact ionization under high reverse bias",
                            "By absorbing UV light",
                            "By emitting multiple photons"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the working principle behind a solar cell?",
                          options: [
                            "Thermal emission",
                            "Radiative recombination",
                            "Photovoltaic effect",
                            "Auger recombination"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In a solar cell, what creates the voltage and current?",
                          options: [
                            "Heating of the material",
                            "Absorption of photons and separation of electron-hole pairs",
                            "Reflection of sunlight",
                            "Magnetic field effects"
                          ],
                          correctAnswer: 1
                        }
                      ]
                       }
                ]
            },
            {
                id: '1_3',
                name: 'Programming for Problem Solving',
                progress: 0,
                icon: 'fas fa-code',
                lessons: [
                    { id: '1_3_1', name: 'Introduction to Algorithms and Flowcharts', completed: false,videoUrl:"https://www.youtube.com/embed/A0IfxXJN1dw",quiz : [
                        {
                          question: "What is an algorithm?",
                          options: [
                            "A random collection of instructions",
                            "A well-defined sequence of instructions to solve a problem",
                            "A programming language",
                            "A type of hardware component"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which of the following is NOT a characteristic of a good algorithm?",
                          options: [
                            "Unambiguous",
                            "Finite",
                            "Effective",
                            "Infinitely running"
                          ],
                          correctAnswer: 3
                        },
                        {
                          question: "What is pseudo-code?",
                          options: [
                            "Actual programming code",
                            "Natural language instructions",
                            "An informal way to describe algorithms combining natural language and programming concepts",
                            "Machine code"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In flowcharts, what does a rectangle represent?",
                          options: [
                            "Start or End",
                            "Input/Output",
                            "Process or Instruction",
                            "Decision point"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is the main purpose of a flowchart?",
                          options: [
                            "To store data",
                            "To create graphical representations of algorithms",
                            "To compile programs",
                            "To solve mathematical equations directly"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What symbol is used in a flowchart to represent a decision point?",
                          options: [
                            "Rectangle",
                            "Diamond",
                            "Oval",
                            "Parallelogram"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In pseudo-code, what construct is typically used for repetition?",
                          options: [
                            "IF",
                            "FOR",
                            "RETURN",
                            "INPUT"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which representation of algorithms is easiest for non-programmers to understand?",
                          options: [
                            "Pseudo-code",
                            "Natural language",
                            "Programming code",
                            "Machine language"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In a flowchart, arrows are used to:",
                          options: [
                            "Store variables",
                            "Indicate flow of control",
                            "Take inputs",
                            "Represent calculations"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Why are algorithms important in programming?",
                          options: [
                            "They make the hardware faster",
                            "They provide step-by-step instructions to solve problems",
                            "They reduce the cost of electricity",
                            "They eliminate the need for programmers"
                          ],
                          correctAnswer: 1
                        }
                      ]
                       },
                    { id: '1_3_2', name: 'Decision Making and Loops',completed: false , videoUrl:"https://www.youtube.com/embed/kfZEZj1IOBE", quiz : [
                        {
                          question: "What is the main purpose of branching in programming?",
                          options: [
                            "To repeat actions",
                            "To make decisions based on conditions",
                            "To store multiple values",
                            "To divide memory into parts"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which statement is used for multi-way branching based on variable value?",
                          options: [
                            "If-Else",
                            "For Loop",
                            "Switch-Case",
                            "While Loop"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In a For loop, which part typically changes with each iteration?",
                          options: [
                            "Start condition",
                            "Loop body",
                            "Loop counter",
                            "End condition"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which loop guarantees that the body will execute at least once?",
                          options: [
                            "For loop",
                            "While loop",
                            "Do-While loop",
                            "Switch-Case"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is an array?",
                          options: [
                            "A single value variable",
                            "A collection of elements of the same type stored in contiguous memory locations",
                            "A conditional structure",
                            "A loop mechanism"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In arrays, indexing usually starts from:",
                          options: [
                            "1",
                            "2",
                            "0",
                            "-1"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which search algorithm checks every element one-by-one?",
                          options: [
                            "Binary search",
                            "Hash search",
                            "Linear search",
                            "Depth-first search"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which search algorithm works only on sorted arrays?",
                          options: [
                            "Linear search",
                            "Binary search",
                            "Depth-first search",
                            "Breadth-first search"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In binary search, after checking the middle element, if the target is smaller, what do we do?",
                          options: [
                            "Search the right half",
                            "Search the left half",
                            "Restart the search",
                            "Exit the search"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which of the following is NOT a type of loop?",
                          options: [
                            "For loop",
                            "While loop",
                            "Do-While loop",
                            "Switch loop"
                          ],
                          correctAnswer: 3
                        }
                      ]
                      },
                    { id: '1_3_3', name: 'Functions and Strings', completed: false,videoUrl:"https://www.youtube.com/embed/XdnmsKUvGsc", quiz : [
                        {
                          question: "What is a function in programming?",
                          options: [
                            "A variable that holds data",
                            "A block of code that performs a specific task",
                            "An error handling mechanism",
                            "A way to loop through arrays"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which is NOT a benefit of using functions?",
                          options: [
                            "Reusability",
                            "Modularity",
                            "Abstraction",
                            "Increasing program size unnecessarily"
                          ],
                          correctAnswer: 3
                        },
                        {
                          question: "What does the function signature consist of?",
                          options: [
                            "Function name, parameters, and body",
                            "Return type, function name, and parameters",
                            "Only function name",
                            "Only parameters"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In the function example provided, what does CalculateArea(5,10) return?",
                          options: [
                            "15",
                            "50",
                            "5",
                            "10"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which function is used to find the length of a string?",
                          options: [
                            "strcat()",
                            "strcpy()",
                            "strlen()",
                            "strcmp()"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What does strcat() do?",
                          options: [
                            "Compares two strings",
                            "Concatenates two strings",
                            "Copies a string",
                            "Calculates the length of a string"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which function copies one string to another?",
                          options: [
                            "strlen()",
                            "strcat()",
                            "strcpy()",
                            "strcmp()"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is the output of strcmp('Hello', 'Hello')?",
                          options: [
                            "0",
                            "1",
                            "-1",
                            "Error"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "What does the substring() function return?",
                          options: [
                            "Length of the string",
                            "A concatenated string",
                            "A portion of the original string",
                            "Comparison result"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which of the following is a correct reason to use functions with string handling?",
                          options: [
                            "To slow down the program",
                            "To create powerful and flexible programs",
                            "To increase memory usage",
                            "To avoid reusability"
                          ],
                          correctAnswer: 1
                        }
                      ]
                       }
                ]
            },
            {
                id: '1_4',
                name: 'Differential Equations and Vector Calculus',
                progress: 0,
                icon: 'fas fa-square-root-alt',
                lessons: [
                    { id: '1_4_1', name: ' Ordinary Differential Equations of the First Order', completed: false ,videoUrl:"https://www.youtube.com/embed/videoseries?list=PL-m5AYudsZbRDbbe3cCk7HQhlUF-TUbtx",quiz : [
                        {
                          question: "When is a first-order differential equation M(x, y) dx + N(x, y) dy = 0 exact?",
                          options: [
                            "When ∂M/∂x = ∂N/∂y",
                            "When ∂M/∂y = ∂N/∂x",
                            "When M = N",
                            "When M and N are constant"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the solution form for an exact equation?",
                          options: [
                            "ϕ(x, y) = 0",
                            "ϕ(x, y) = C",
                            "ϕ(x, y) = xy",
                            "ϕ(x, y) = x + y"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the standard form of a linear first-order ODE?",
                          options: [
                            "dy/dx = P(x)y + Q(x)",
                            "dy/dx + P(x)y = Q(x)",
                            "P(x)y = dy/dx + Q(x)",
                            "dy/dx + Q(x)y = P(x)"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the integrating factor for a linear first-order ODE dy/dx + P(x)y = Q(x)?",
                          options: [
                            "e^(∫Q(x) dx)",
                            "e^(∫P(x) dx)",
                            "e^(P(x))",
                            "e^(Q(x))"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What substitution is used to solve Bernoulli’s equation dy/dx + P(x)y = Q(x)yⁿ?",
                          options: [
                            "v = y",
                            "v = yⁿ",
                            "v = y^(1-n)",
                            "v = y^(-1)"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which of the following is an example of a real-world application of first-order ODEs?",
                          options: [
                            "Newton’s Law of Cooling",
                            "Second law of motion",
                            "Fourier’s Law",
                            "Pythagoras theorem"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "In Newton’s Law of Cooling, what does the ODE dT/dt = k(T - Tₛ) represent?",
                          options: [
                            "Radioactive decay",
                            "Temperature change over time",
                            "Electrical current",
                            "Motion in two dimensions"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which equation models growth and decay phenomena?",
                          options: [
                            "dN/dt = kN",
                            "dN/dt = k(T - Tₛ)",
                            "L dI/dt + RI = V(t)",
                            "F = ma"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "What is the general solution form for the linear equation dy/dx + 2y = e^(-x)?",
                          options: [
                            "y = Ce^(2x)",
                            "y = e^(-x) + Ce^(-2x)",
                            "y = e^(x) + Ce^(-x)",
                            "y = Ce^(-x) + x"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What mathematical method is used if an ODE is not initially exact?",
                          options: [
                            "Find a potential function",
                            "Apply an integrating factor",
                            "Use separation of variables",
                            "Substitute v = 4y/x"
                          ],
                          correctAnswer: 1
                        }
                      ]
                      },
                    { id: '1_4_2', name: 'Ordinary Differential Equations of Higher Order', completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLhSp9OSVmeyLNxkrdiZjT-mEdXiijAb4f", quiz : [
                        {
                          question: "What is the form of a homogeneous linear differential equation with constant coefficients?",
                          options: [
                            "Sum of derivatives equals a nonzero function",
                            "Sum of derivatives equals zero",
                            "Product of derivatives equals a constant",
                            "Derivatives are not involved"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What type of solution is assumed for solving homogeneous equations?",
                          options: [
                            "y = x^r",
                            "y = e^(rx)",
                            "y = sin(rx)",
                            "y = r/x"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "If the characteristic equation has complex conjugate roots α ± iβ, the general solution involves:",
                          options: [
                            "Exponential and logarithmic functions",
                            "Sine and cosine functions multiplied by an exponential",
                            "Polynomial functions",
                            "Only exponential terms"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "For non-homogeneous equations, the general solution is:",
                          options: [
                            "y = y_c",
                            "y = y_p",
                            "y = y_c + y_p",
                            "y = y_c * y_p"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which method is useful when the method of undetermined coefficients is not applicable?",
                          options: [
                            "Separation of Variables",
                            "Integration by Parts",
                            "Variation of Parameters",
                            "Change of Variables"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is the Wronskian used for in the Variation of Parameters method?",
                          options: [
                            "To solve the homogeneous equation",
                            "To determine independence of solutions",
                            "To find the roots of the characteristic equation",
                            "To substitute directly into the original equation"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What form does a Cauchy-Euler equation take?",
                          options: [
                            "a d²y/dx² + b dy/dx + cy = f(x)",
                            "ax² y'' + bxy' + cy = 0",
                            "d²y/dx² + dy/dx = 0",
                            "y'' + p(x)y' + q(x)y = 0"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the general solution when Cauchy-Euler equation has distinct real roots r₁ and r₂?",
                          options: [
                            "y(x) = c₁ e^{r₁x} + c₂ e^{r₂x}",
                            "y(x) = c₁ x^{r₁} + c₂ x^{r₂}",
                            "y(x) = c₁ cos(r₁x) + c₂ sin(r₂x)",
                            "y(x) = c₁ ln(x) + c₂ ln(x)²"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which type of differential equation does Legendre's equation represent?",
                          options: [
                            "Cauchy-Euler equation",
                            "Legendre polynomial differential equation",
                            "Homogeneous equation",
                            "Non-homogeneous equation"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the first Legendre polynomial P₀(x)?",
                          options: [
                            "x",
                            "1",
                            "(3x² - 1)/2",
                            "(5x³ - 3x)/2"
                          ],
                          correctAnswer: 1
                        }
                      ]
                       },
                    { id: '1_4_3', name: 'Multiple Integrals', completed: false,videoUrl:"https://www.youtube.com/embed/aqu6v4vdfd4", quiz: [
                        {
                          question: "What does a double integral represent?",
                          options: [
                            "Length of a curve",
                            "Area under a curve",
                            "Volume under a surface",
                            "Slope of a curve"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In a double integral ∬ f(x,y) dA, what does dA represent?",
                          options: [
                            "Arc length",
                            "Area element",
                            "Volume element",
                            "Surface element"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "When changing the order of integration, what must be adjusted?",
                          options: [
                            "Limits of integration",
                            "Function being integrated",
                            "Coordinates used",
                            "Only the differential elements"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "What coordinate system is often used for circular regions in integration?",
                          options: [
                            "Cartesian coordinates",
                            "Polar coordinates",
                            "Cylindrical coordinates",
                            "Spherical coordinates"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is dA in polar coordinates?",
                          options: [
                            "r dr dθ",
                            "dr dθ",
                            "r² dr dθ",
                            "r dθ dr"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "What does a triple integral calculate?",
                          options: [
                            "Area under a curve",
                            "Volume of a region in space",
                            "Length of a path",
                            "Surface area of a sphere"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is dV in cylindrical coordinates?",
                          options: [
                            "dz dr dθ",
                            "r dz dr dθ",
                            "r² dz dr dθ",
                            "dr dz dθ"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In spherical coordinates, what is the volume element dV?",
                          options: [
                            "ρ dρ dθ dϕ",
                            "ρ² sin(ϕ) dρ dϕ dθ",
                            "ρ² dρ dϕ dθ",
                            "ρ sin(ϕ) dρ dϕ dθ"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which substitution simplifies integration over a sphere?",
                          options: [
                            "Cylindrical coordinates",
                            "Cartesian coordinates",
                            "Spherical coordinates",
                            "Polar coordinates"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What physical quantity can be found by a triple integral involving a density function ρ(x, y, z)?",
                          options: [
                            "Velocity",
                            "Mass",
                            "Force",
                            "Acceleration"
                          ],
                          correctAnswer: 1
                        }
                      ]
                       }
                ]
            },
            {
                id: '1_5',
                name: 'Engineering Chemistry',
                progress: 0,
                icon: 'fas fa-flask',
                lessons: [
                    { id: '1_5_1', name: 'Atomic Structure', completed: false ,videoUrl :"https://www.youtube.com/embed/videoseries?list=PLT3bOBUU3L9gan-gjVkz6f9hZJYpHapHi", quiz : [
                        {
                          question: "What is the shape of an s orbital?",
                          options: [
                            "Dumbbell-shaped",
                            "Spherical",
                            "Complex",
                            "Planar"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What type of overlap forms a sigma (σ) molecular orbital?",
                          options: [
                            "Lateral overlap",
                            "Head-on overlap",
                            "Diagonal overlap",
                            "No overlap"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which orbitals combine to form bonding and antibonding molecular orbitals?",
                          options: [
                            "Only s orbitals",
                            "Only p orbitals",
                            "Atomic orbitals",
                            "Nuclear orbitals"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In molecular orbital theory, what does an asterisk (*) denote?",
                          options: [
                            "Bonding orbital",
                            "Antibonding orbital",
                            "Non-bonding orbital",
                            "Free orbital"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the bond order of N₂ based on its MO configuration?",
                          options: [
                            "2",
                            "3",
                            "4",
                            "1"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Why is O₂ paramagnetic?",
                          options: [
                            "It has a triple bond",
                            "It has two unpaired electrons in antibonding orbitals",
                            "It has no electrons",
                            "It has filled bonding orbitals only"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which theory views valence electrons in metals as free electrons?",
                          options: [
                            "Valence Bond Theory",
                            "Resonance Theory",
                            "Free Electron Theory",
                            "Molecular Orbital Theory"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In crystal field theory for octahedral complexes, which d orbitals have higher energy?",
                          options: [
                            "t₂g orbitals",
                            "e orbitals",
                            "e_g orbitals",
                            "f orbitals"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "For a tetrahedral complex, the crystal field splitting energy Δt is approximately:",
                          options: [
                            "Equal to Δo",
                            "Half of Δo",
                            "Four-ninths of Δo",
                            "Double of Δo"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which geometry leads to d orbitals splitting into four different energy levels?",
                          options: [
                            "Octahedral",
                            "Tetrahedral",
                            "Square planar",
                            "Linear"
                          ],
                          correctAnswer: 2
                        }
                      ]
                       },
                    { id: '1_5_2', name: 'Spectroscopic Techniques and Applications', completed: false ,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLLf6O8XdGj03ktP4MHmIV87pHZHBEUF6f", quiz : [
                        {
                          question: "Which part of the electromagnetic spectrum has the longest wavelength?",
                          options: [
                            "Gamma rays",
                            "X-rays",
                            "Radio waves",
                            "Ultraviolet rays"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is the relationship between wavelength (λ) and frequency (ν) in the electromagnetic spectrum?",
                          options: [
                            "Directly proportional",
                            "Inversely proportional",
                            "Unrelated",
                            "Always equal"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which spectroscopy technique involves transitions between rotational energy levels?",
                          options: [
                            "Vibrational spectroscopy",
                            "Rotational spectroscopy",
                            "NMR spectroscopy",
                            "UV-Visible spectroscopy"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the selection rule for rotational transitions?",
                          options: [
                            "ΔJ = ±1",
                            "Δv = ±1",
                            "Δn = ±2",
                            "Δm = ±1"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "In vibrational spectroscopy, which molecular behavior is primarily studied?",
                          options: [
                            "Rotation",
                            "Vibration",
                            "Translation",
                            "Ionization"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which nuclei are NMR-active?",
                          options: [
                            "Nuclei with even protons and neutrons",
                            "Nuclei with odd number of protons or neutrons",
                            "Nuclei with no charge",
                            "Only heavy nuclei"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What unit is used for chemical shift in NMR spectroscopy?",
                          options: [
                            "Hz",
                            "cm⁻¹",
                            "ppm",
                            "s⁻¹"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What happens to a nucleus when it is deshielded in NMR?",
                          options: [
                            "It moves upfield (lower frequency)",
                            "It moves downfield (higher frequency)",
                            "It becomes invisible",
                            "It does not absorb any energy"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What principle does MRI use for imaging?",
                          options: [
                            "X-ray scattering",
                            "Radioactive decay",
                            "Nuclear magnetic resonance",
                            "Photoelectric effect"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which of the following applications involves IR spectroscopy?",
                          options: [
                            "Brain imaging",
                            "Bone fracture analysis",
                            "Functional group identification",
                            "Measuring atmospheric pressure"
                          ],
                          correctAnswer: 2
                        }
                      ]
                      },
                    { id: '1_5_3', name: 'Batteries and Corrosion', completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLLf6O8XdGj00lVydanLfC6bcT4aXGJN4V",quiz : [
                        {
                          question: "Which type of battery is rechargeable?",
                          options: [
                            "Primary battery",
                            "Secondary battery",
                            "Alkaline battery",
                            "Zinc-carbon battery"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In a lithium-ion battery, lithium ions move from:",
                          options: [
                            "Anode to cathode during charging",
                            "Anode to cathode during discharging",
                            "Cathode to anode during discharging",
                            "Electrolyte to cathode during charging"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the main advantage of a lead-acid battery?",
                          options: [
                            "High energy density",
                            "Lightweight",
                            "Low cost and high surge current capability",
                            "No environmental concerns"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is the overall reaction in a hydrogen-oxygen fuel cell?",
                          options: [
                            "2H₂ + O₂ → 2H₂O",
                            "H₂ → 2H⁺ + 2e⁻",
                            "O₂ + 4H⁺ + 4e⁻ → 2H₂O",
                            "2H₂O → 2H₂ + O₂"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "What device uses microorganisms to generate electricity?",
                          options: [
                            "Hydrogen fuel cell",
                            "Solar cell",
                            "Microbial fuel cell",
                            "Lead-acid battery"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What type of corrosion involves two dissimilar metals?",
                          options: [
                            "Pitting corrosion",
                            "Galvanic corrosion",
                            "Stress corrosion",
                            "Crevice corrosion"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which factor accelerates corrosion?",
                          options: [
                            "Low temperature",
                            "High pH",
                            "High humidity",
                            "Low reactivity of metal"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is sacrificial anodic protection?",
                          options: [
                            "Coating the metal with paint",
                            "Using a more active metal to corrode instead",
                            "Applying a passive oxide layer",
                            "Using stainless steel only"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What process coats steel with zinc to prevent corrosion?",
                          options: [
                            "Tinning",
                            "Electroplating",
                            "Galvanization",
                            "Anodizing"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In impressed current cathodic protection, what prevents corrosion?",
                          options: [
                            "Applying an insulating layer",
                            "Connecting the metal to a more noble metal",
                            "Supplying external current to make the structure cathodic",
                            "Painting the metal surface"
                          ],
                          correctAnswer: 2
                        }
                      ]
                       }
                ]
            },
            {
                id: '1_6',
                name: 'Fundamentals of Electrical Engineering',
                progress: 0,
                icon: 'fas fa-bolt',
                lessons: [
                    { id: '1_6_1', name: 'Basic Components and Electric Circuits', completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLmAmHQ-_5ySzJrY5XlO0SPdQneyhr9v0B", quiz : [
                        {
                          question: "What is the unit of electric charge?",
                          options: [
                            "Ampere",
                            "Volt",
                            "Coulomb",
                            "Ohm"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which equation correctly represents Ohm's Law?",
                          options: [
                            "V = IR",
                            "P = IV",
                            "I = VR",
                            "V = PI"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "Which component stores energy in a magnetic field?",
                          options: [
                            "Resistor",
                            "Capacitor",
                            "Inductor",
                            "Voltage source"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "An independent voltage source provides:",
                          options: [
                            "Constant current",
                            "Variable current",
                            "Constant voltage regardless of current",
                            "Voltage proportional to current"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Kirchhoff's Current Law (KCL) states:",
                          options: [
                            "The sum of voltages in a loop is zero",
                            "Current entering a node equals current leaving",
                            "Power supplied equals power consumed",
                            "Resistance is directly proportional to voltage"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the equivalent resistance for resistors in series?",
                          options: [
                            "Product of individual resistances",
                            "Sum of individual resistances",
                            "Sum of the reciprocals of resistances",
                            "None of the above"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which component opposes current flow and dissipates energy as heat?",
                          options: [
                            "Resistor",
                            "Capacitor",
                            "Inductor",
                            "Current source"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "What is the unit of electrical power?",
                          options: [
                            "Volt",
                            "Ampere",
                            "Watt",
                            "Ohm"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In a source transformation, a voltage source in series with a resistor can be transformed into:",
                          options: [
                            "A voltage source in parallel with a resistor",
                            "A current source in series with a resistor",
                            "A current source in parallel with a resistor",
                            "A capacitor"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In passive components, which stores energy in an electric field?",
                          options: [
                            "Resistor",
                            "Inductor",
                            "Capacitor",
                            "Voltage source"
                          ],
                          correctAnswer: 2
                        }
                      ]
                      },
                    { id: '1_6_2', name: 'Network Analysis',completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLs5_Rtf2P2r7hkaum0d0LwgWq7K6Ducxf", quiz : [
                        {
                          question: "Which law is the basis for Nodal Analysis?",
                          options: [
                            "Ohm's Law",
                            "Kirchhoff’s Voltage Law (KVL)",
                            "Kirchhoff’s Current Law (KCL)",
                            "Superposition Principle"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In Mesh Analysis, which law is primarily used?",
                          options: [
                            "Kirchhoff’s Current Law (KCL)",
                            "Ohm’s Law",
                            "Superposition Principle",
                            "Kirchhoff’s Voltage Law (KVL)"
                          ],
                          correctAnswer: 3
                        },
                        {
                          question: "A circuit is considered linear if it satisfies:",
                          options: [
                            "Homogeneity and Additivity",
                            "Conservation of Charge",
                            "Power Efficiency",
                            "Ohm’s Law only"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "According to the Superposition Theorem, to consider the effect of one source, other independent voltage sources must be:",
                          options: [
                            "Replaced by open circuits",
                            "Replaced by short circuits",
                            "Doubled",
                            "Ignored completely"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What does Thevenin’s Theorem replace a network with?",
                          options: [
                            "Current source and series resistor",
                            "Voltage source and parallel resistor",
                            "Voltage source and series resistor",
                            "Current source and open circuit"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What does Norton’s Theorem replace a network with?",
                          options: [
                            "Current source and parallel resistor",
                            "Voltage source and parallel resistor",
                            "Voltage source and series resistor",
                            "Open circuit only"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "For maximum power transfer, the load resistance must equal:",
                          options: [
                            "Source resistance",
                            "Thevenin resistance",
                            "Zero",
                            "Infinity"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the formula for maximum power according to the Maximum Power Transfer Theorem?",
                          options: [
                            "Pmax = (VTh²)/RTh",
                            "Pmax = (VTh²)/(4RTh)",
                            "Pmax = VTh²",
                            "Pmax = (VTh)/(2RTh)"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "According to Reciprocity Theorem, swapping source and response locations results in:",
                          options: [
                            "Double the current",
                            "Same current",
                            "Zero current",
                            "Opposite current"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which theorem helps in finding current or voltage by replacing multiple sources one at a time?",
                          options: [
                            "Thevenin’s Theorem",
                            "Norton’s Theorem",
                            "Maximum Power Transfer Theorem",
                            "Superposition Theorem"
                          ],
                          correctAnswer: 3
                        }
                      ]
                       },
                    { id: '1_6_3', name: 'A.C Circuits',  completed: false , videoUrl:"https://www.youtube.com/embed/videoseries?list=PLT3bOBUU3L9iC-ZcBJbQOOdt5uBsEkZJW",quiz : [
                        {
                          question: "What is the general form of a sinusoidal signal in the time domain?",
                          options: [
                            "v(t) = Vm cos(ωt)",
                            "v(t) = Vm sin(ωt + φ)",
                            "v(t) = ωt + Vm",
                            "v(t) = Vm sin(φt)"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In phasor representation, the sinusoid v(t) = Vm sin(ωt + φ) is written as:",
                          options: [
                            "V = Vm + φ",
                            "V = Vm∠ω",
                            "V = Vm∠φ",
                            "V = Vm/ω"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is the RMS value of a sinusoidal voltage with peak value Vm?",
                          options: [
                            "Vm",
                            "Vm/2",
                            "Vm/√2",
                            "Vm√2"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In an inductive AC circuit, the current:",
                          options: [
                            "Leads voltage by 90°",
                            "Lags voltage by 90°",
                            "Is in phase with voltage",
                            "Is unrelated to voltage"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the impedance of a capacitor in AC analysis?",
                          options: [
                            "Z = jωC",
                            "Z = jωL",
                            "Z = 1/(jωC)",
                            "Z = R"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is real power (P) in an AC circuit?",
                          options: [
                            "P = Vrms Irms sinφ",
                            "P = Vrms Irms cosφ",
                            "P = Vrms²/R",
                            "P = Irms²Z"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "At resonance in a series RLC circuit:",
                          options: [
                            "Impedance is maximum",
                            "Current is minimum",
                            "Impedance equals resistance",
                            "Voltage is zero"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What is the resonant frequency fr in a series RLC circuit?",
                          options: [
                            "fr = 2π√(LC)",
                            "fr = 1/(2π√LC)",
                            "fr = L/C",
                            "fr = C/L"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What does the Power Factor (pf) represent in AC circuits?",
                          options: [
                            "sinφ",
                            "cosφ",
                            "tanφ",
                            "cotφ"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In a capacitive load, the power factor is:",
                          options: [
                            "Lagging",
                            "Leading",
                            "Unity",
                            "Zero"
                          ],
                          correctAnswer: 1
                        }
                      ]
                      }
                ]
            },
            {
                id: '1_7',
                name: 'Data Structures',
                progress: 0,
                icon: 'fas fa-project-diagram',
                lessons: [
                    { id: '1_7_1', name: 'Sorting and Algorithm Analysis', completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLuZ_bd9XlByzTIP5j1aWXo7smCIxvzd2D", quiz : [
                        {
                          question: "Which sorting algorithm repeatedly compares and swaps adjacent elements?",
                          options: [
                            "Insertion Sort",
                            "Selection Sort",
                            "Bubble Sort",
                            "Quick Sort"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In which sorting algorithm is the list divided into sorted and unsorted parts, repeatedly selecting the smallest element?",
                          options: [
                            "Merge Sort",
                            "Bubble Sort",
                            "Selection Sort",
                            "Insertion Sort"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which sorting algorithm uses a pivot to partition the array?",
                          options: [
                            "Radix Sort",
                            "Counting Sort",
                            "Merge Sort",
                            "Quick Sort"
                          ],
                          correctAnswer: 3
                        },
                        {
                          question: "Which sort algorithm is non-comparative and based on digit places?",
                          options: [
                            "Bubble Sort",
                            "Insertion Sort",
                            "Radix Sort",
                            "Selection Sort"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "What does Big-O notation describe?",
                          options: [
                            "Best-case complexity",
                            "Worst-case complexity",
                            "Average-case complexity",
                            "Lower bound complexity"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What does Omega (Ω) notation represent?",
                          options: [
                            "Upper bound",
                            "Average case",
                            "Best-case (lower bound) complexity",
                            "Worst-case complexity"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Theta (Θ) notation gives:",
                          options: [
                            "Only upper bound",
                            "Only lower bound",
                            "Both upper and lower bound (tight bound)",
                            "No bound"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which sorting algorithm is typically stable and based on divide and conquer?",
                          options: [
                            "Merge Sort",
                            "Selection Sort",
                            "Bubble Sort",
                            "Quick Sort"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "Which notation describes growth slower than a given function (not tight)?",
                          options: [
                            "Big-O",
                            "Little-o",
                            "Theta",
                            "Omega"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Counting Sort is efficient when:",
                          options: [
                            "Input elements are very large",
                            "Input elements are very small integers",
                            "Input elements are strings",
                            "Input elements are floats"
                          ],
                          correctAnswer: 1
                        }
                      ]
                       },
                    { id: '1_7_2', name: 'Stacks and Queues',  completed: false ,videoUrl:"https://www.youtube.com/embed/lno6Ft0tOZI",quiz: [
                        {
                          question: "Which principle does a stack follow?",
                          options: [
                            "First In First Out (FIFO)",
                            "Last In First Out (LIFO)",
                            "First In Last Out (FILO)",
                            "Random Access"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which stack operation removes the top element?",
                          options: [
                            "push",
                            "pop",
                            "peek",
                            "display"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is the variable typically used to track the top element in an array-based stack implementation?",
                          options: [
                            "start",
                            "end",
                            "top",
                            "head"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Which application uses stack internally?",
                          options: [
                            "Queue Management",
                            "Recursion",
                            "Scheduling",
                            "Networking"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In postfix expression evaluation, operands are:",
                          options: [
                            "Added directly",
                            "Pushed onto a stack",
                            "Deleted immediately",
                            "Stored in a queue"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which principle does a queue follow?",
                          options: [
                            "Last In First Out (LIFO)",
                            "First In First Out (FIFO)",
                            "Random Access",
                            "Binary Search"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What operation adds an element to the end of a queue?",
                          options: [
                            "enqueue",
                            "dequeue",
                            "push",
                            "pop"
                          ],
                          correctAnswer: 0
                        },
                        {
                          question: "In a linear queue using arrays, which pointers are used?",
                          options: [
                            "front and top",
                            "front and rear",
                            "start and end",
                            "head and tail"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What major problem does a circular queue solve compared to a linear queue?",
                          options: [
                            "Random access of elements",
                            "Fixed size limitation",
                            "Unused space after deletions",
                            "Multiple front pointers"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In a circular queue, what condition indicates that the queue is full?",
                          options: [
                            "rear == size",
                            "rear == front",
                            "rear+1 == front",
                            "front == -1"
                          ],
                          correctAnswer: 2
                        }
                      ]
                      },
                    { id: '1_7_3', name: 'Linked Lists',  completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLnccP3XNVxGrWkKFJMCtL5mDEcOnrjjib", quiz: [
                        {
                          question: "What principle allows Linked Lists to use memory efficiently?",
                          options: [
                            "Static memory allocation",
                            "Dynamic memory allocation",
                            "Contiguous memory usage",
                            "Fixed block allocation"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is a self-referential structure?",
                          options: [
                            "A structure pointing to an array",
                            "A structure containing a pointer to another structure of the same type",
                            "A structure containing random data",
                            "A structure linked to a queue"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "What is a disadvantage of singly linked lists?",
                          options: [
                            "Allows random access",
                            "Uses extra memory for pointers",
                            "Efficient search operations",
                            "Requires contiguous memory"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "In a singly linked list, each node contains:",
                          options: [
                            "Only data",
                            "Data and two pointers",
                            "Data and one pointer",
                            "Only a pointer"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "Where does the last node in a singly linked list point?",
                          options: [
                            "Back to the first node",
                            "Itself",
                            "NULL",
                            "Random node"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "How is a new node inserted at the beginning of a singly linked list?",
                          options: [
                            "By updating the last node",
                            "By linking the new node to the head",
                            "By inserting at the end",
                            "By deleting the first node"
                          ],
                          correctAnswer: 1
                        },
                        {
                          question: "Which linked list allows traversal in both directions?",
                          options: [
                            "Singly Linked List",
                            "Circular Linked List",
                            "Doubly Linked List",
                            "Array"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In a stack implemented with linked list, where is the push operation performed?",
                          options: [
                            "At the rear",
                            "At the middle",
                            "At the beginning",
                            "At the end"
                          ],
                          correctAnswer: 2
                        },
                        {
                          question: "In a circular linked list, the last node points to:",
                          options: [
                            "NULL",
                            "The second node",
                            "The middle node",
                            "The first node"
                          ],
                          correctAnswer: 3
                        },
                        {
                          question: "What is the advantage of linked lists over arrays?",
                          options: [
                            "Random access is easier",
                            "Dynamic memory allocation",
                            "Simpler operations",
                            "Fixed memory usage"
                          ],
                          correctAnswer: 1
                        }
                      ]
                      }
                ]
            }
        ]
        },
        2: {
            name: '2nd Year',
            icon: 'fas fa-laptop-code',
            subjects: [
                { id: '2_1', name: 'Digital Logic Design', progress: 0, icon: 'fas fa-microchip', lessons: [ { id: '2_1_1', name: 'Binary Systems & Boolean Algebra', completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLpcxIhM1pan2m1Cx0usq9QMCKEiM7M3WP",quiz: [
                    {
                      question: "In binary number representation, how many symbols are used?",
                      options: [
                        "10 symbols",
                        "8 symbols",
                        "2 symbols",
                        "4 symbols"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which method is used to convert a decimal number to binary?",
                      options: [
                        "Multiply by 2 repeatedly",
                        "Divide by 2 repeatedly and record remainders",
                        "Add by 2 repeatedly",
                        "Subtract by 2 repeatedly"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is 2's complement of a binary number?",
                      options: [
                        "Invert the bits",
                        "Invert the bits and add 1",
                        "Add 2 to the number",
                        "Subtract 2 from the number"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In sign-magnitude representation, the most significant bit (MSB) represents:",
                      options: [
                        "Magnitude",
                        "Least significant bit",
                        "Address",
                        "Sign"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Which binary code changes only one bit between successive numbers?",
                      options: [
                        "BCD",
                        "ASCII",
                        "Gray Code",
                        "Hexadecimal"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does ASCII stand for?",
                      options: [
                        "American Standard Code for Intelligent Computing",
                        "American Standard Code for Information Interchange",
                        "Advanced System Code for Information Interface",
                        "Advanced Serial Code for International Interchange"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which basic Boolean operation outputs true only if both inputs are true?",
                      options: [
                        "OR",
                        "AND",
                        "NOT",
                        "XOR"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which Boolean law states that A + 0 = A?",
                      options: [
                        "Null Law",
                        "Identity Law",
                        "Inverse Law",
                        "Idempotent Law"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which gate gives a high output only when inputs are different?",
                      options: [
                        "AND Gate",
                        "NOR Gate",
                        "XOR Gate",
                        "XNOR Gate"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "DeMorgan’s Theorems are used in:",
                      options: [
                        "Memory management",
                        "Simplifying Boolean expressions",
                        "Converting decimal to binary",
                        "Managing databases"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   }, { id: '2_1_2', name: 'Gate-Level Minimization',completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLS4BcfMo06uMbhN49le4ZNZ-pWuG3gA9e",quiz: [
                    {
                      question: "What tool is used for simplifying Boolean expressions graphically?",
                      options: [
                        "Truth Table",
                        "Venn Diagram",
                        "Karnaugh Map (K-map)",
                        "State Diagram"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "How many cells are there in a 3-variable K-map?",
                      options: [
                        "4",
                        "8",
                        "16",
                        "32"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What must the group sizes in a K-map be?",
                      options: [
                        "Any size",
                        "Even numbers only",
                        "Powers of two",
                        "Multiples of three"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What are 'Don't Care Conditions' represented by in a K-map?",
                      options: [
                        "0",
                        "1",
                        "X",
                        "-"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the purpose of using 'Don't Care Conditions' in K-maps?",
                      options: [
                        "To complicate expressions",
                        "To minimize expressions",
                        "To create redundant systems",
                        "To increase system errors"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which gates are considered functionally complete?",
                      options: [
                        "AND and OR",
                        "NAND and NOR",
                        "XOR and XNOR",
                        "AND and XOR"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In NAND implementation, which concept is heavily used?",
                      options: [
                        "Multiplexing",
                        "Double Negation",
                        "Edge Detection",
                        "Flip-Flops"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which Boolean theorem is often used for NOR implementations?",
                      options: [
                        "DeMorgan's Theorems",
                        "Shannon's Expansion",
                        "Idempotent Law",
                        "Absorption Law"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "What is the output of an XOR gate when both inputs are the same?",
                      options: [
                        "1",
                        "Input A",
                        "0",
                        "Input B"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which operation is essential for parity checking in communication systems?",
                      options: [
                        "AND",
                        "OR",
                        "XOR",
                        "XNOR"
                      ],
                      correctAnswer: 2
                    }
                  ]
                  }, { id: '2_1_3', name: 'Combinational Logic', completed: false, videoUrl:"https://www.youtube.com/embed/videoseries?list=PLgwJf8NK-2e4zRyPzO6HI9sUOR8v-80RT",quiz: [
                    {
                      question: "What does a binary adder/subtractor circuit perform?",
                      options: [
                        "Only addition",
                        "Only subtraction",
                        "Both addition and subtraction",
                        "Only multiplication"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which circuit adds two single binary digits and produces a sum and a carry output?",
                      options: [
                        "Full Adder",
                        "Half Adder",
                        "Half Subtractor",
                        "Full Subtractor"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which device selects one of many input signals based on select lines?",
                      options: [
                        "Decoder",
                        "Multiplexer",
                        "Demultiplexer",
                        "Encoder"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "How many select lines are needed for a 4-to-1 multiplexer?",
                      options: [
                        "1",
                        "2",
                        "3",
                        "4"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which device distributes one input to multiple outputs based on select lines?",
                      options: [
                        "Multiplexer",
                        "Decoder",
                        "Demultiplexer",
                        "Encoder"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "A 2-to-4 decoder has how many inputs and outputs?",
                      options: [
                        "2 inputs, 2 outputs",
                        "2 inputs, 4 outputs",
                        "4 inputs, 2 outputs",
                        "4 inputs, 4 outputs"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does an encoder do?",
                      options: [
                        "Converts binary input into many outputs",
                        "Converts many inputs into binary code",
                        "Adds two binary numbers",
                        "Subtracts two binary numbers"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which circuit compares two binary numbers and determines if one is greater, less, or equal?",
                      options: [
                        "Multiplexer",
                        "Demultiplexer",
                        "Magnitude Comparator",
                        "Decoder"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What are the outputs of a magnitude comparator?",
                      options: [
                        "Sum and Carry",
                        "Greater, Equal, Less",
                        "Select Lines",
                        "Difference and Borrow"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In a combined adder/subtractor circuit, what happens when the control input is 1?",
                      options: [
                        "Addition",
                        "Subtraction",
                        "Multiplication",
                        "No operation"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   } ] },
                { id: '2_2', name: 'Java Programming', progress: 0, icon: 'fab fa-java', lessons: [ { id: '2_2_1', name: 'Object Oriented Thinking',  completed: false,videoUrl:"https://www.youtube.com/embed/bSrm9RXwBaI",quiz: [
                    {
                      question: "Which principle of OOP means wrapping data and methods together?",
                      options: [
                        "Inheritance",
                        "Polymorphism",
                        "Encapsulation",
                        "Abstraction"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the process of hiding complex details and showing only essentials called?",
                      options: [
                        "Polymorphism",
                        "Inheritance",
                        "Encapsulation",
                        "Abstraction"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Which OOP principle allows a class to acquire properties of another class?",
                      options: [
                        "Encapsulation",
                        "Inheritance",
                        "Abstraction",
                        "Polymorphism"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Who developed Java?",
                      options: [
                        "Guido van Rossum",
                        "James Gosling",
                        "Dennis Ritchie",
                        "Bjarne Stroustrup"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the main function of the Java Virtual Machine (JVM)?",
                      options: [
                        "Compile Java code to bytecode",
                        "Convert bytecode into machine code at runtime",
                        "Manage memory in Java programs",
                        "Translate Java code into C++"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which feature of Java ensures platform independence?",
                      options: [
                        "Object-Oriented",
                        "Multithreaded",
                        "Write Once, Run Anywhere",
                        "Robustness"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which primitive data type is used to store true/false values in Java?",
                      options: [
                        "char",
                        "boolean",
                        "byte",
                        "int"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which of the following is a valid Java identifier?",
                      options: [
                        "1student",
                        "student_name",
                        "class",
                        "public"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which operator in Java is a ternary operator?",
                      options: [
                        "+",
                        "++",
                        "? :",
                        "&&"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is explicit casting in Java?",
                      options: [
                        "Converting larger type to smaller type manually",
                        "Automatically converting smaller to larger type",
                        "Storing a string into an integer",
                        "Using new keyword for conversion"
                      ],
                      correctAnswer: 0
                    }
                  ]
                  }, { id: '2_2_2', name: 'CLASSES, INHERITANCE, POLYMORPHISM',completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLTarWLPDJ59T631SvMbl3hBCbY7qv3Clz",quiz: [
                    {
                      question: "What is a class in Java?",
                      options: [
                        "An instance of an object",
                        "A blueprint for creating objects",
                        "A method in a program",
                        "A memory management tool"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which method is used to initialize new objects in Java?",
                      options: [
                        "Destructor",
                        "Static method",
                        "Constructor",
                        "Main method"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What keyword refers to the current object in Java?",
                      options: [
                        "this",
                        "self",
                        "super",
                        "current"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which class is used for mutable sequences of characters in Java?",
                      options: [
                        "String",
                        "StringBuffer",
                        "StringTokenizer",
                        "StringBuilder"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What keyword is used to create a subclass from a superclass?",
                      options: [
                        "extends",
                        "implements",
                        "inherits",
                        "super"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which type of inheritance does Java support directly (without interfaces)?",
                      options: [
                        "Single Inheritance",
                        "Multiple Inheritance",
                        "Multilevel Inheritance",
                        "Hierarchical Inheritance"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "What is method overriding?",
                      options: [
                        "Using multiple methods with the same name but different parameters",
                        "Providing a new implementation of a method inherited from a parent class",
                        "Writing two constructors with different parameters",
                        "Creating multiple classes with the same method name"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which keyword prevents method overriding?",
                      options: [
                        "this",
                        "super",
                        "final",
                        "abstract"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "An abstract class in Java:",
                      options: [
                        "Can be instantiated directly",
                        "Cannot have methods",
                        "Can contain abstract methods without implementation",
                        "Cannot inherit other classes"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which Java feature allows objects to take multiple forms?",
                      options: [
                        "Encapsulation",
                        "Inheritance",
                        "Polymorphism",
                        "Abstraction"
                      ],
                      correctAnswer: 2
                    }
                  ]
                   }, { id: '2_2_3', name: 'INTERFACES, PACKAGES, EXCEPTIONS',  completed: false ,videoUrl:"https://www.youtube.com/embed/JFuMei9Wwk4",quiz: [
                    {
                      question: "What does an interface in Java define?",
                      options: [
                        "How methods are implemented",
                        "Only static methods",
                        "Only method signatures and constants",
                        "Only variables"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which keyword is used to inherit one interface from another?",
                      options: [
                        "implements",
                        "extends",
                        "inherits",
                        "super"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which of the following is TRUE about interfaces compared to abstract classes?",
                      options: [
                        "Interfaces can have both abstract and concrete methods",
                        "Interfaces support multiple inheritance",
                        "Interfaces can be instantiated",
                        "Interfaces have only private methods"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is a package in Java?",
                      options: [
                        "A type of class",
                        "A collection of related classes and interfaces",
                        "A memory storage location",
                        "A method library"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which access modifier allows package-level access?",
                      options: [
                        "public",
                        "protected",
                        "private",
                        "default (no modifier)"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "What is the main purpose of the java.io package?",
                      options: [
                        "Mathematical operations",
                        "Networking",
                        "Input and Output operations",
                        "User Interface design"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which block is always executed whether or not an exception occurs?",
                      options: [
                        "try block",
                        "catch block",
                        "throw block",
                        "finally block"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Which keyword is used to declare that a method might throw an exception?",
                      options: [
                        "throw",
                        "throws",
                        "catch",
                        "final"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "How do you create a user-defined exception in Java?",
                      options: [
                        "By implementing the Exception interface",
                        "By extending the Exception class",
                        "By overriding the throw keyword",
                        "By writing a special catch block"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which statement is used to manually throw an exception in Java?",
                      options: [
                        "throws",
                        "throw",
                        "catch",
                        "finally"
                      ],
                      correctAnswer: 1
                    }
                  ]
                  } ] },
                { id: '2_3', name: 'Discrete Mathematics', progress: 0, icon: 'fas fa-infinity', lessons: [ { id: '2_3_1', name: 'Mathematical Logic and Predicates',completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PL2EB5662A0D455A81", quiz: [
                    {
                      question: "What is a statement in mathematical logic?",
                      options: [
                        "A question",
                        "A declarative sentence that is either true or false",
                        "A command",
                        "An expression with multiple variables"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which logical connective represents conjunction (AND)?",
                      options: [
                        "∨",
                        "∧",
                        "¬",
                        "→"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "A compound statement that is always true is called:",
                      options: [
                        "Contradiction",
                        "Tautology",
                        "Implication",
                        "Equivalence"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Logical equivalence between two statements means:",
                      options: [
                        "They are always opposite",
                        "They always have the same truth value",
                        "They are independent",
                        "One implies the other but not vice versa"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which normal form is a conjunction of disjunctions?",
                      options: [
                        "Disjunctive Normal Form (DNF)",
                        "Conjunctive Normal Form (CNF)",
                        "Negation Normal Form",
                        "Biconditional Form"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is a predicate in logic?",
                      options: [
                        "A constant",
                        "A variable without any relation",
                        "A statement containing variables",
                        "A simple declarative sentence"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which type of variable is not bound by a quantifier?",
                      options: [
                        "Bound variable",
                        "Free variable",
                        "Local variable",
                        "Constant"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does Modus Ponens allow us to infer?",
                      options: [
                        "p is true if q is false",
                        "q is true if p → q and p are true",
                        "p is false if q is false",
                        "q is false if p is true"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "When is a set of statements considered consistent?",
                      options: [
                        "If they contradict each other",
                        "If at least one statement is false",
                        "If all statements can be true simultaneously",
                        "If none of the statements are provable"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Proof by contradiction involves:",
                      options: [
                        "Directly proving a statement",
                        "Assuming the negation and deriving a contradiction",
                        "Using only axioms",
                        "Using only truth tables"
                      ],
                      correctAnswer: 1
                    }
                  ]
                  }, { id: '2_3_2', name: 'Set Theory, Functions, and Algebraic Structures',  completed: false, videoUrl:"https://www.youtube.com/embed/videoseries?list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS",quiz: [
                    {
                      question: "A relation that is reflexive, symmetric, and transitive is called:",
                      options: [
                        "Partial Order",
                        "Compatibility Relation",
                        "Equivalence Relation",
                        "Binary Relation"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does a Hasse diagram represent?",
                      options: [
                        "Full binary tree",
                        "Graphical representation of a finite partially ordered set",
                        "Venn diagram",
                        "Group operation"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "If a function f: A → B is a bijection, what exists?",
                      options: [
                        "Partial function",
                        "Composite function",
                        "Inverse function",
                        "Surjective function"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is a recursive function?",
                      options: [
                        "A function calling another function",
                        "A function defined using itself",
                        "A function that never stops",
                        "A function with no output"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "According to the Pigeonhole Principle, if n > m then:",
                      options: [
                        "Each container is empty",
                        "At least one container holds more than one item",
                        "No items are placed",
                        "Items are divided evenly"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "A lattice is a poset where:",
                      options: [
                        "Every two elements have a unique join and meet",
                        "All elements are unrelated",
                        "Only minimal elements exist",
                        "Only maximal elements exist"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "What is a semigroup?",
                      options: [
                        "A set with an identity but not necessarily associative",
                        "A set with an associative binary operation",
                        "A set with inverses",
                        "A set with no binary operation"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which structure requires a semigroup with an identity element?",
                      options: [
                        "Group",
                        "Monoid",
                        "Ring",
                        "Field"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "A group must satisfy closure, associativity, identity, and:",
                      options: [
                        "Symmetry",
                        "Commutativity",
                        "Inverse element existence",
                        "Idempotency"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "An isomorphism between two algebraic structures is a:",
                      options: [
                        "One-way function",
                        "Non-bijective homomorphism",
                        "Bijective homomorphism",
                        "Partial function"
                      ],
                      correctAnswer: 2
                    }
                  ]
                   }, { id: '2_3_3', name: 'Elementary Combinatorics', completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PLeIE3weEKo4ZuNQr9f7zBJtrlnpYnktQ6",quiz: [
                    {
                      question: "What does the Rule of Sum state?",
                      options: [
                        "Multiply choices together",
                        "Add choices if they are mutually exclusive",
                        "Divide choices equally",
                        "Subtract choices if they overlap"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the formula for permutations of n objects taken r at a time?",
                      options: [
                        "C(n, r) = n! / (r!(n-r)!)",
                        "n^r",
                        "P(n, r) = n! / (n-r)!",
                        "P(n, r) = r! / (n-r)!"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In combinations, the order of selection:",
                      options: [
                        "Matters",
                        "Does not matter",
                        "Depends on context",
                        "Always follows alphabetical order"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the formula for combinations with repetition?",
                      options: [
                        "C(n+r-1, r)",
                        "C(n-1, r-1)",
                        "P(n, r)",
                        "n^r"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which principle is applied when repetition is allowed and constrained?",
                      options: [
                        "Simple permutation",
                        "Constrained repetition principle",
                        "Pigeonhole principle",
                        "Direct counting"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does the sum of binomial coefficients for a given n equal?",
                      options: [
                        "2n",
                        "2^n",
                        "n!",
                        "n^2"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which theorem generalizes binomial expansion to more than two variables?",
                      options: [
                        "Binomial Theorem",
                        "Pascal's Theorem",
                        "Multinomial Theorem",
                        "Combination Theorem"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In the binomial expansion (a+b)^n, the general term involves which coefficient?",
                      options: [
                        "n!",
                        "C(n, k)",
                        "k!",
                        "n^k"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "The principle of inclusion-exclusion is used to:",
                      options: [
                        "Multiply probabilities",
                        "Find the union size of overlapping sets",
                        "Create combinations",
                        "Expand polynomials"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which formula represents the union of two sets A and B?",
                      options: [
                        "|A ∩ B| = |A| + |B|",
                        "|A ∪ B| = |A| + |B| - |A ∩ B|",
                        "|A| = |B|",
                        "|A| × |B|"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   } ] },
                { id: '2_4', name: 'Database Management Systems', progress: 0, icon: 'fas fa-database', lessons: [ { id: '2_4_1', name: 'Database Systems Architecture and ER Modeling',  completed: false,videoUrl:"https://www.youtube.com/embed/vz5az6N86DY" ,quiz: [
                    {
                      question: "Which of the following is an application area of database systems?",
                      options: [
                        "Banking",
                        "Airlines",
                        "Telecommunication",
                        "All of the above"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "In the database system, which level describes how the data is stored?",
                      options: [
                        "View Level",
                        "Logical Level",
                        "Physical Level",
                        "Storage Level"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which data model represents data using tables (relations)?",
                      options: [
                        "Entity-Relationship Model",
                        "Relational Model",
                        "Object-Based Data Model",
                        "Semi-Structured Data Model"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which language is used to define database structures like tables?",
                      options: [
                        "DML",
                        "DDL",
                        "SQL",
                        "DCL"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "ACID properties in transaction management ensure all EXCEPT:",
                      options: [
                        "Atomicity",
                        "Consistency",
                        "Isolation",
                        "Deactivation"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Who is responsible for database authorization and backup?",
                      options: [
                        "Application Programmer",
                        "Naive User",
                        "DBA (Database Administrator)",
                        "System Analyst"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which component is NOT part of typical database system architecture?",
                      options: [
                        "Query Processor",
                        "Storage Manager",
                        "Transaction Manager",
                        "Packet Analyzer"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "In ER diagrams, what represents an entity?",
                      options: [
                        "Ellipse",
                        "Rectangle",
                        "Diamond",
                        "Line"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is Generalization in an Extended ER model?",
                      options: [
                        "Abstracting common features from multiple entity sets",
                        "Creating subgroups from an entity set",
                        "Connecting relationships",
                        "Mapping user requirements"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "What phase converts ER diagrams into relational tables?",
                      options: [
                        "Conceptual Design",
                        "Physical Design",
                        "Logical Database Design",
                        "Functional Design"
                      ],
                      correctAnswer: 2
                    }
                  ]
                  }, { id: '2_4_2', name: 'SQL Queries',  completed: false, videoUrl:"https://www.youtube.com/embed/zPes5jBZ62c",quiz: [
                    {
                      question: "Which SQL command is part of Data Definition Language (DDL)?",
                      options: [
                        "INSERT",
                        "SELECT",
                        "CREATE",
                        "UPDATE"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which SQL command belongs to Data Manipulation Language (DML)?",
                      options: [
                        "ALTER",
                        "DELETE",
                        "GRANT",
                        "COMMIT"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which operator retrieves records common to two SQL queries?",
                      options: [
                        "UNION",
                        "INTERSECT",
                        "MINUS",
                        "EXCEPT"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which aggregate function counts the number of rows?",
                      options: [
                        "SUM()",
                        "AVG()",
                        "COUNT()",
                        "MIN()"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which SQL constraint ensures a column cannot have NULL values?",
                      options: [
                        "PRIMARY KEY",
                        "FOREIGN KEY",
                        "NOT NULL",
                        "CHECK"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which JOIN returns only matching rows from both tables?",
                      options: [
                        "LEFT JOIN",
                        "FULL JOIN",
                        "INNER JOIN",
                        "RIGHT JOIN"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is a View in SQL?",
                      options: [
                        "A stored procedure",
                        "A virtual table based on a query",
                        "A cursor object",
                        "A primary key constraint"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which SQL command is used to permanently delete a table?",
                      options: [
                        "DELETE",
                        "REMOVE",
                        "DROP",
                        "ERASE"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is a cursor in SQL?",
                      options: [
                        "A constraint checker",
                        "A pointer for navigating rows in a result set",
                        "A foreign key",
                        "A database trigger"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "A Trigger in SQL is activated by:",
                      options: [
                        "Manual call",
                        "System boot",
                        "A database event like INSERT, UPDATE, DELETE",
                        "Timer expiration"
                      ],
                      correctAnswer: 2
                    }
                  ]
                   }, { id: '2_4_3', name: 'Relational Model and Storage & Indexing',  completed: false,videoUrl:"https://www.youtube.com/embed/Q45sr5p_NmQ" ,quiz: [
                    {
                      question: "In the relational model, what is a tuple?",
                      options: [
                        "A column in a table",
                        "A set of attributes",
                        "A single row in a table",
                        "A data type constraint"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which key uniquely identifies each tuple in a relation?",
                      options: [
                        "Foreign Key",
                        "Candidate Key",
                        "Primary Key",
                        "Super Key"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does the Projection (π) operation in relational algebra do?",
                      options: [
                        "Selects rows",
                        "Selects columns",
                        "Combines relations",
                        "Renames attributes"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which operation combines every tuple of one relation with every tuple of another?",
                      options: [
                        "Join",
                        "Set Difference",
                        "Cartesian Product",
                        "Union"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Relational calculus is:",
                      options: [
                        "Procedural",
                        "Non-procedural",
                        "Object-oriented",
                        "Dynamic programming based"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the main purpose of an index in a database?",
                      options: [
                        "Reduce storage space",
                        "Speed up data retrieval",
                        "Increase redundancy",
                        "Organize table names"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which index type changes the physical order of rows in the database?",
                      options: [
                        "Non-clustered Index",
                        "Secondary Index",
                        "Clustered Index",
                        "Primary Index"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which data structure is commonly used for tree-structured indexing?",
                      options: [
                        "Stack",
                        "Heap",
                        "B+ Tree",
                        "Linked List"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Hash indexing is based on:",
                      options: [
                        "Binary Search Trees",
                        "Heap Sort",
                        "Hash Tables",
                        "AVL Trees"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In a B+ tree, data is found:",
                      options: [
                        "In internal nodes only",
                        "In root node only",
                        "In leaf nodes",
                        "In all nodes equally"
                      ],
                      correctAnswer: 2
                    }
                  ]
                  } ] },
                { id: '2_5', name: 'Computer Organization', progress: 0, icon: 'fas fa-memory', lessons: [ { id: '2_5_1', name: 'Basic Structure of Computers and RTL & Microoperations ',  completed: false, videoUrl:"https://www.youtube.com/embed/L9X7XXfHYdU",quiz: [
                    {
                      question: "Which type of computer is used for extremely complex scientific calculations?",
                      options: [
                        "Mainframe Computer",
                        "Minicomputer",
                        "Microcomputer",
                        "Supercomputer"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Which unit in a computer stores data and programs?",
                      options: [
                        "Input Unit",
                        "Output Unit",
                        "Memory Unit",
                        "Control Unit"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which number system uses digits 0-7?",
                      options: [
                        "Binary",
                        "Octal",
                        "Hexadecimal",
                        "Decimal"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What standard is commonly used for floating-point representation?",
                      options: [
                        "IEEE 754",
                        "ASCII",
                        "Unicode",
                        "ISO 9000"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which code can detect and correct single-bit errors?",
                      options: [
                        "Parity Bit",
                        "Checksum",
                        "CRC",
                        "Hamming Code"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "In Register Transfer Language (RTL), what does the notation 'R2 ← R1' mean?",
                      options: [
                        "Move R2 to R1",
                        "Move R1 to R2",
                        "Add R1 and R2",
                        "Compare R1 and R2"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is a bus in computer architecture?",
                      options: [
                        "A storage unit",
                        "A shared communication path for data transfer",
                        "A type of processor",
                        "A memory address"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which microoperation performs addition or subtraction?",
                      options: [
                        "Register Transfer Microoperation",
                        "Arithmetic Microoperation",
                        "Logic Microoperation",
                        "Shift Microoperation"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which microoperation performs bitwise operations like AND, OR, NOT?",
                      options: [
                        "Arithmetic Microoperation",
                        "Shift Microoperation",
                        "Logic Microoperation",
                        "Register Transfer Microoperation"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does the Arithmetic Logic Shift Unit (ALSU) combine?",
                      options: [
                        "Input and output operations",
                        "Arithmetic, logic, and shift operations",
                        "Memory and register operations",
                        "Control and processing operations"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   }, { id: '2_5_2', name: 'Basic Computer Organization and Design', completed: false,videoUrl:"https://www.youtube.com/embed/2ZFEISQhBU4",quiz: [
                    {
                      question: "Which register holds the address of the next instruction to be executed?",
                      options: [
                        "Accumulator (AC)",
                        "Instruction Register (IR)",
                        "Program Counter (PC)",
                        "Memory Buffer Register (MBR)"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Memory-reference instructions operate mainly on:",
                      options: [
                        "Registers only",
                        "Input/Output devices",
                        "Memory locations",
                        "Control signals"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which phase of the instruction cycle involves transferring the instruction from memory to CPU?",
                      options: [
                        "Decode",
                        "Execute",
                        "Fetch",
                        "Write-back"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Interrupts are used to:",
                      options: [
                        "Pause CPU operation for maintenance",
                        "Handle urgent peripheral tasks",
                        "Store extra data in registers",
                        "Increase memory size"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which memory holds microinstructions to generate control signals?",
                      options: [
                        "Primary Memory",
                        "Control Memory",
                        "Cache Memory",
                        "Virtual Memory"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In microprogrammed control, what determines the next microinstruction address?",
                      options: [
                        "Instruction Register",
                        "Program Counter",
                        "Address Sequencer",
                        "Control Memory"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which control method is faster but less flexible?",
                      options: [
                        "Hardwired Control",
                        "Microprogrammed Control",
                        "Software Control",
                        "Firmware Control"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "In a microprogram example, what is typically being implemented?",
                      options: [
                        "RAM access",
                        "Macroinstruction like ADD or LOAD",
                        "Interrupt Service Routine",
                        "Cache operations"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "The Instruction Register (IR) holds:",
                      options: [
                        "Next instruction address",
                        "Currently executing instruction",
                        "Microinstruction",
                        "Interrupt address"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In Register Transfer Language, 'R2 ← R1' means:",
                      options: [
                        "Copy R2 to R1",
                        "Copy R1 to R2",
                        "Swap R1 and R2",
                        "Clear both R1 and R2"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   }, { id: '2_5_3', name: 'Computer Arithmetic',  completed: false,videoUrl:"https://www.youtube.com/embed/videoseries?list=PL6cO8U1vm6CHZCAEgdJ2YdLVsj5o-NY_v",quiz: [
                    {
                      question: "In general register organization, CPU operations are performed using:",
                      options: [
                        "Single accumulator",
                        "Multiple processor registers",
                        "Only memory units",
                        "Only stack memory"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does the Stack Pointer (SP) point to in a stack organization?",
                      options: [
                        "Bottom of the stack",
                        "Middle of the stack",
                        "Top of the stack",
                        "Empty stack location"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which part of an instruction specifies the operation to be performed?",
                      options: [
                        "Operand field",
                        "Address field",
                        "Opcode field",
                        "Instruction pointer"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In Immediate Addressing Mode, the operand is:",
                      options: [
                        "Stored in memory",
                        "Part of the instruction itself",
                        "Stored in a register",
                        "Calculated using an index"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Program control instructions typically perform:",
                      options: [
                        "Arithmetic operations",
                        "Memory read operations",
                        "Altering the sequence of execution",
                        "Logical operations"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which characteristic is NOT associated with RISC architecture?",
                      options: [
                        "Simple instructions",
                        "Fixed instruction size",
                        "Load/store architecture",
                        "Complex instruction formats"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "In binary subtraction, which method is commonly used?",
                      options: [
                        "Direct subtraction",
                        "1's complement method",
                        "2's complement method",
                        "Decimal subtraction"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Booth’s multiplication algorithm is mainly used for:",
                      options: [
                        "Fast addition",
                        "Fast subtraction",
                        "Efficient binary multiplication",
                        "Floating-point addition"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Floating-point numbers are typically normalized to:",
                      options: [
                        "Simplify multiplication",
                        "Simplify division",
                        "Maintain precision and standard form",
                        "Avoid using exponents"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In BCD addition, if the sum exceeds 9, what adjustment is made?",
                      options: [
                        "Subtract 3",
                        "Add 9",
                        "Subtract 6",
                        "Add 6"
                      ],
                      correctAnswer: 3
                    }
                  ]
                  } ] },
                { id: '2_6', name: 'Operating Systems', progress: 0, icon: 'fas fa-desktop', lessons: [ { id: '2_6_1', name: 'Operating System Overview and Process Management',  completed: false ,videoUrl:"https://www.youtube.com/embed/eihB8Xv_P9I",quiz: [
                    {
                      question: "What is the primary role of an Operating System (OS)?",
                      options: [
                        "Manage user passwords",
                        "Act as an intermediary between users and computer hardware",
                        "Design hardware circuits",
                        "Compile user programs"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which type of computer system uses multiple CPUs?",
                      options: [
                        "Single-Processor System",
                        "Multiprocessor System",
                        "Time-Sharing System",
                        "Cloud System"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which system call is used to create a new process in UNIX/Linux?",
                      options: [
                        "exec()",
                        "open()",
                        "fork()",
                        "close()"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which of the following is an example of a Microkernel OS structure?",
                      options: [
                        "Windows 95",
                        "Linux",
                        "MacOS X",
                        "MS-DOS"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is a Process Control Block (PCB)?",
                      options: [
                        "A memory segment for user data",
                        "A data structure containing process information",
                        "A scheduling algorithm",
                        "A compiler error log"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which CPU scheduling algorithm selects the process with the shortest burst time first?",
                      options: [
                        "FCFS",
                        "Round Robin",
                        "SJF (Shortest Job First)",
                        "Priority Scheduling"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In Round Robin Scheduling, processes are assigned:",
                      options: [
                        "Fixed memory space",
                        "A time quantum",
                        "Priority levels",
                        "Execution without interruption"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Preemptive Scheduling allows a running process to be:",
                      options: [
                        "Continued till completion",
                        "Interrupted and moved back to the ready queue",
                        "Destroyed immediately",
                        "Transferred to memory"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which threading model maps many user-level threads to one kernel thread?",
                      options: [
                        "One-to-One",
                        "Many-to-One",
                        "Many-to-Many",
                        "Direct Mapping"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Virtual Machines (VMs) provide:",
                      options: [
                        "Faster physical hardware",
                        "An abstraction of physical hardware to multiple environments",
                        "Only memory management",
                        "Direct access to I/O devices"
                      ],
                      correctAnswer: 1
                    }
                  ]
                  }, { id: '2_6_2', name: 'Concurrency and Deadlocks',  completed: false, videoUrl:"https://www.youtube.com/embed/STGTF3ASOcI",quiz: [
                    {
                      question: "Which condition ensures that only one process can be in its critical section at a time?",
                      options: [
                        "Bounded Waiting",
                        "Mutual Exclusion",
                        "Progress",
                        "Deadlock Prevention"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Peterson’s solution requires how many shared variables?",
                      options: [
                        "One boolean",
                        "Two booleans",
                        "One boolean and one integer",
                        "Two integers"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which hardware instruction is used for implementing atomic locks?",
                      options: [
                        "Jump",
                        "Test and Set",
                        "Move",
                        "Call"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What type of semaphore allows multiple processes to access a limited number of instances of a resource?",
                      options: [
                        "Binary Semaphore",
                        "Mutex",
                        "Counting Semaphore",
                        "Monitor"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which classic synchronization problem involves multiple readers and writers?",
                      options: [
                        "Dining Philosophers Problem",
                        "Producer-Consumer Problem",
                        "Readers-Writers Problem",
                        "Banker's Problem"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What high-level synchronization construct ensures only one process is active within it at a time?",
                      options: [
                        "Semaphore",
                        "Monitor",
                        "Deadlock Detector",
                        "Race Condition"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Deadlock requires which of the following conditions?",
                      options: [
                        "Sequential Access",
                        "Mutual Exclusion",
                        "Atomic Operations",
                        "Asynchronous I/O"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which method prevents deadlock by allowing resource preemption?",
                      options: [
                        "Deadlock Detection",
                        "Deadlock Prevention",
                        "Deadlock Avoidance",
                        "Banker's Algorithm"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which algorithm is used for deadlock avoidance?",
                      options: [
                        "Kruskal's Algorithm",
                        "Dijkstra’s Algorithm",
                        "Banker's Algorithm",
                        "Prim’s Algorithm"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In the context of deadlock, a 'safe state' means:",
                      options: [
                        "System resources are fully utilized",
                        "System can allocate resources without entering a deadlock",
                        "All processes are blocked",
                        "The system must terminate immediately"
                      ],
                      correctAnswer: 1
                    }
                  ] 
                  }, { id: '2_6_3', name: 'Memory Management', completed: false,videoUrl:"https://www.youtube.com/embed/UDPYpf-nsDY" ,quiz: [
                    {
                      question: "What is the main purpose of swapping in memory management?",
                      options: [
                        "To create new processes",
                        "To temporarily move a process to secondary storage",
                        "To allocate fixed partitions",
                        "To merge two processes"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In contiguous memory allocation, dynamic partitioning means:",
                      options: [
                        "Memory is divided into equal fixed sizes",
                        "Memory is allocated exactly as needed by processes",
                        "Processes are assigned randomly",
                        "Memory is shared by two processes"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Paging divides memory into fixed-size blocks called:",
                      options: [
                        "Segments",
                        "Files",
                        "Pages and Frames",
                        "Clusters"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which paging structure saves memory by using page tables that point to other page tables?",
                      options: [
                        "Single-Level Paging",
                        "Multi-Level Paging",
                        "Inverted Page Table",
                        "Flat Paging"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In segmentation, a logical address consists of:",
                      options: [
                        "Page number and offset",
                        "Frame number and offset",
                        "Segment number and offset",
                        "Base and limit"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In demand paging, if a required page is not in memory, it results in:",
                      options: [
                        "Memory leak",
                        "Page fault",
                        "Segmentation fault",
                        "Stack overflow"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which page replacement algorithm replaces the oldest page in memory?",
                      options: [
                        "LRU (Least Recently Used)",
                        "Optimal Replacement",
                        "FIFO (First-In-First-Out)",
                        "Random Replacement"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Proportional allocation distributes frames based on:",
                      options: [
                        "Process priority",
                        "Process size",
                        "Process ID",
                        "Arrival time"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What happens during thrashing?",
                      options: [
                        "System performs faster",
                        "System spends most of the time swapping pages",
                        "Processes terminate immediately",
                        "Memory allocation becomes infinite"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which method helps to reduce thrashing?",
                      options: [
                        "Increase degree of multiprogramming",
                        "Use working set model",
                        "Use only FIFO scheduling",
                        "Add more processes"
                      ],
                      correctAnswer: 1
                    }
                  ]
                  } ] },
                { id: '2_7', name: 'Applied Statistics for Engineers', progress: 0, icon: 'fas fa-chart-bar', lessons: [ { id: '2_7_1', name: 'Basic Statistics and Random Variables',completed: false , videoUrl:"https://www.youtube.com/embed/rifK8BtHaYI",quiz: [
                    {
                      question: "What is the mean of the dataset 2, 4, 4, 4, 5, 6, 8?",
                      options: [
                        "4",
                        "4.71",
                        "5",
                        "6"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which measure of central tendency represents the middle value of an ordered dataset?",
                      options: [
                        "Mean",
                        "Median",
                        "Mode",
                        "Variance"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Positive skewness in a distribution means:",
                      options: [
                        "Tail on the left side is longer",
                        "Tail on the right side is longer",
                        "Data is symmetric",
                        "Data has multiple modes"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What type of random variable can take an infinite number of values?",
                      options: [
                        "Discrete",
                        "Constant",
                        "Continuous",
                        "Binary"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which function describes the likelihood of a continuous random variable falling within a range?",
                      options: [
                        "Probability Mass Function (PMF)",
                        "Probability Density Function (PDF)",
                        "Cumulative Distribution Function (CDF)",
                        "Moment Generating Function (MGF)"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which moment is used to measure variance?",
                      options: [
                        "First moment",
                        "Second moment",
                        "Third moment",
                        "Fourth moment"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In kurtosis, a distribution sharper than normal is called:",
                      options: [
                        "Mesokurtic",
                        "Platykurtic",
                        "Leptokurtic",
                        "Symmetric"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Covariance measures:",
                      options: [
                        "The central tendency of a single variable",
                        "The spread of a single variable",
                        "The directional relationship between two random variables",
                        "The probability distribution of a discrete variable"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "If two variables have a positive covariance, it means:",
                      options: [
                        "They move in opposite directions",
                        "They move independently",
                        "They move in the same direction",
                        "There is no relationship"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which of the following is a measure of asymmetry in a distribution?",
                      options: [
                        "Variance",
                        "Mean",
                        "Skewness",
                        "Kurtosis"
                      ],
                      correctAnswer: 2
                    }
                  ]
                  }, { id: '2_7_2', name: 'Discrete and Continuous Probability Distributions',  completed: false,videoUrl:"https://www.youtube.com/embed/PIgJ1y-I6k8?list=PLMaNnDEjr-rX6ST2iZ5FbzmMcU6NnrKwH",quiz: [
                    {
                      question: "Which distribution models the number of successes in a fixed number of independent Bernoulli trials?",
                      options: [
                        "Normal distribution",
                        "Poisson distribution",
                        "Binomial distribution",
                        "Exponential distribution"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In the binomial distribution, the mean (μ) is calculated as:",
                      options: [
                        "n * p",
                        "n / p",
                        "p / n",
                        "n + p"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which distribution is used to model the number of events occurring in a fixed interval of time or space?",
                      options: [
                        "Binomial distribution",
                        "Poisson distribution",
                        "Normal distribution",
                        "Exponential distribution"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In a Poisson distribution, what is the relationship between the mean and variance?",
                      options: [
                        "Mean is greater than variance",
                        "Mean is less than variance",
                        "Mean equals variance",
                        "There is no relationship"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which distribution has a symmetric bell-shaped curve centered at the mean?",
                      options: [
                        "Poisson distribution",
                        "Normal distribution",
                        "Exponential distribution",
                        "Binomial distribution"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "According to the Empirical Rule in normal distribution, approximately what percentage of data lies within 1 standard deviation of the mean?",
                      options: [
                        "68%",
                        "95%",
                        "99.7%",
                        "50%"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which property is unique to the exponential distribution?",
                      options: [
                        "Memoryless property",
                        "Symmetry around mean",
                        "Discrete outcomes",
                        "Two outcomes: success or failure"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "The exponential distribution is commonly used to model:",
                      options: [
                        "Number of successes in trials",
                        "Time between events",
                        "Number of arrivals",
                        "Spread of standardized scores"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which distribution uses the probability density function (PDF) f(x) = (1 / (σ√2π)) * e^(-(x-μ)² / (2σ²))?",
                      options: [
                        "Exponential distribution",
                        "Poisson distribution",
                        "Normal distribution",
                        "Binomial distribution"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In the binomial distribution, the standard deviation (σ) is calculated as:",
                      options: [
                        "√(n * p * (1-p))",
                        "√(n / p)",
                        "√(p / n)",
                        "√(n * p)"
                      ],
                      correctAnswer: 0
                    }
                  ]
                   }, { id: '2_7_3', name: 'Correlation, Regression and Time Series analysis',completed: false,videoUrl:"https://www.youtube.com/embed/xTpHD5WLuoA",quiz: [
                    {
                      question: "What does Karl Pearson's correlation coefficient measure?",
                      options: [
                        "The average of two variables",
                        "The linear relationship between two continuous variables",
                        "The trend in a time series",
                        "The rank correlation between two variables"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which formula represents Spearman’s Rank Correlation Coefficient?",
                      options: [
                        "r = (Σ(x_i - mean_x)(y_i - mean_y)) / sqrt(Σ(x_i - mean_x)^2 × Σ(y_i - mean_y)^2)",
                        "ρ = 1 - (6 Σd_i²) / (n(n²-1))",
                        "Y = a + bX",
                        "Y = T + S + C + I"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In simple linear regression, what does 'b' represent in the equation Y = a + bX?",
                      options: [
                        "Intercept",
                        "Independent variable",
                        "Slope or regression coefficient",
                        "Dependent variable"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which property is true for regression coefficients?",
                      options: [
                        "They are always equal to 1",
                        "Their geometric mean is the correlation coefficient r",
                        "Their sum is always zero",
                        "They are unrelated to the sign of r"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which model represents an additive decomposition of time series?",
                      options: [
                        "Y = T × S × C × I",
                        "Y = a + bX",
                        "Y = T + S + C + I",
                        "Y = a + b1X1 + b2X2"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which component in time series analysis represents short-term regular variation?",
                      options: [
                        "Trend (T)",
                        "Seasonal Variation (S)",
                        "Cyclic Variation (C)",
                        "Irregular Variation (I)"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "The method of moving averages is mainly used to:",
                      options: [
                        "Highlight seasonal variation",
                        "Smooth data to reveal the trend",
                        "Predict irregular variation",
                        "Analyze cyclic variation"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In multiple linear regression with three variables, what is the correct form of the equation?",
                      options: [
                        "Y = a + bX",
                        "Y = a + b1X1 + b2X2",
                        "Y = T × S × C × I",
                        "Y = a + bX + cX²"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which mathematical curve fitting method uses the equation Y = a + bX + cX²?",
                      options: [
                        "Straight line (linear trend)",
                        "Exponential trend",
                        "Second degree parabola (quadratic trend)",
                        "Moving average trend"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is indicated when Karl Pearson's correlation coefficient (r) is 0?",
                      options: [
                        "Perfect positive correlation",
                        "Perfect negative correlation",
                        "No linear correlation",
                        "Strong negative correlation"
                      ],
                      correctAnswer: 2
                    }
                  ]
                   } ] },
                { id: '2_8', name: 'Full Stack Web Development', progress: 0, icon: 'fas fa-layer-group', lessons: [ { id: '2_8_1', name: 'HTML/CSS/JavaScript',  completed: false, videoUrl:"https://www.youtube.com/embed/YFlx1C8XwR0",quiz: [
                    {
                      question: "Which HTML tag is used to create an ordered list?",
                      options: [
                        "<ul>",
                        "<ol>",
                        "<li>",
                        "<dl>"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which HTML tag is used to define a table row?",
                      options: [
                        "<td>",
                        "<tr>",
                        "<th>",
                        "<table>"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In the <img> tag, which attribute specifies alternative text if the image cannot be displayed?",
                      options: [
                        "src",
                        "alt",
                        "href",
                        "title"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which tag is used to create a multi-line text input in HTML forms?",
                      options: [
                        "<input>",
                        "<textarea>",
                        "<form>",
                        "<select>"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which tag is still widely used today to embed another web page within a page?",
                      options: [
                        "<frame>",
                        "<frameset>",
                        "<iframe>",
                        "<embed>"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In CSS, what does the box model include?",
                      options: [
                        "Content, Border, Padding, Margin",
                        "Header, Footer, Sidebar, Content",
                        "HTML, Body, Head, Footer",
                        "Text, Image, Background, Font"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which JavaScript method is used to change the content of an HTML element?",
                      options: [
                        "document.write()",
                        "element.innerText",
                        "element.innerHTML",
                        "console.log()"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which event is triggered when a form is submitted?",
                      options: [
                        "onchange",
                        "onclick",
                        "onsubmit",
                        "onmouseover"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which jQuery function is used to hide an element when a paragraph is clicked?",
                      options: [
                        "$('p').mouseover()",
                        "$('p').hide()",
                        "$('p').click()",
                        "$('p').submit()"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In Ajax, which object is commonly used to send a request to a web server?",
                      options: [
                        "XMLHttpRequest",
                        "JSONParser",
                        "Document",
                        "ResponseObject"
                      ],
                      correctAnswer: 0
                    }
                  ]
                   }, { id: '2_8_2', name: 'Xml and Angularjs',  completed: false, videoUrl:"https://www.youtube.com/embed/videoseries?list=PLmdFG1KSZhosqwkP-BCtcMq0KubZ4v1Cm",quiz: [
                    {
                      question: "What does XML stand for?",
                      options: [
                        "Extra Markup Language",
                        "Extended Markup Language",
                        "eXtensible Markup Language",
                        "External Markup Language"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In XML, what must tags always be?",
                      options: [
                        "Open",
                        "Nested and closed properly",
                        "Uppercase",
                        "Empty"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which defines the structure and rules of an XML document?",
                      options: [
                        "DOM",
                        "DTD",
                        "CSS",
                        "AJAX"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which parser loads the entire XML document into memory and allows tree traversal?",
                      options: [
                        "SAX Parser",
                        "XPath Parser",
                        "DOM Parser",
                        "JSON Parser"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which technology is a stricter version of HTML that follows XML syntax?",
                      options: [
                        "XAML",
                        "HTML5",
                        "XHTML",
                        "SVG"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which of the following is a correct AngularJS expression syntax?",
                      options: [
                        "{ 5 + 5 }",
                        "{{ 5 + 5 }}",
                        "(( 5 + 5 ))",
                        "[[ 5 + 5 ]]"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In AngularJS, what is used to define the application and its dependencies?",
                      options: [
                        "Directive",
                        "Controller",
                        "Module",
                        "Service"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which AngularJS directive is used for two-way data binding in forms?",
                      options: [
                        "ng-bind",
                        "ng-click",
                        "ng-model",
                        "ng-init"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which AngularJS event directive increments a value when a button is clicked?",
                      options: [
                        "ng-mouseover",
                        "ng-change",
                        "ng-click",
                        "ng-submit"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In AngularJS, which directive is used to make an input field required?",
                      options: [
                        "ng-required",
                        "ng-minlength",
                        "ng-model",
                        "ng-disabled"
                      ],
                      correctAnswer: 0
                    }
                  ]
                   }, { id: '2_8_3', name: 'Servelets',  completed: false , videoURL:"https://www.youtube.com/embed/wN8pcb8kM3A",quiz: [
                    {
                      question: "What are Servlets mainly used for?",
                      options: [
                        "Handling client-side scripting",
                        "Generating dynamic web content on the server-side",
                        "Designing website layouts",
                        "Managing database servers"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What performance issue did traditional CGI programs face?",
                      options: [
                        "Slow response due to reusing processes",
                        "High memory consumption by sharing a single process",
                        "New process created for each request",
                        "Lack of compatibility with web servers"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which method is called only once during a servlet's life cycle for initialization?",
                      options: [
                        "service()",
                        "destroy()",
                        "doGet()",
                        "init()"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Where should the compiled servlet classes be placed for deployment?",
                      options: [
                        "src folder",
                        "WEB-INF/classes",
                        "bin folder",
                        "root directory"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which package contains the HttpServlet class?",
                      options: [
                        "java.servlet",
                        "javax.servlet",
                        "javax.servlet.http",
                        "org.apache.tomcat"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which method is used to read form parameters sent by the client?",
                      options: [
                        "getAttribute()",
                        "getInitParameter()",
                        "getParameter()",
                        "getSession()"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Initialization parameters for a servlet are accessed through:",
                      options: [
                        "getServletContext()",
                        "getServletConfig().getInitParameter()",
                        "getSession()",
                        "request.getParameter()"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which method in HttpServlet is typically used to respond to a GET request?",
                      options: [
                        "doGet()",
                        "doPost()",
                        "service()",
                        "init()"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which object is used to create a session in servlets?",
                      options: [
                        "Cookie",
                        "SessionStorage",
                        "HttpSession",
                        "HttpResponse"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which Java class is used to establish a database connection in servlets?",
                      options: [
                        "ConnectionFactory",
                        "DatabaseManager",
                        "Connection",
                        "DriverManager"
                      ],
                      correctAnswer: 3
                    }
                  ]
                  } ] },
                { id: '2_9', name: 'Design and Analysis of Algorithms', progress: 0, icon: 'fas fa-sitemap', lessons: [ { id: '2_9_1', name: 'Algorithms Introduction', completed: false,videUrl:"https://www.youtube.com/embed/7dz8Iaf_weM",quiz: [
                    {
                      question: "What is an algorithm?",
                      options: [
                        "A type of hardware device",
                        "A blueprint for solving problems with a step-by-step procedure",
                        "A computer program",
                        "A programming language"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which of the following is NOT a property of an algorithm?",
                      options: [
                        "Input",
                        "Output",
                        "Randomness",
                        "Definiteness"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does space complexity measure?",
                      options: [
                        "The number of operations performed",
                        "The amount of memory space an algorithm needs",
                        "The size of the program code",
                        "The time taken to compile the code"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which type of space is used to store function calls and recursion data?",
                      options: [
                        "Instruction Space",
                        "Data Space",
                        "Environment Space",
                        "Stack Space"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "If an algorithm uses an array of size n, what is its space complexity?",
                      options: [
                        "O(1)",
                        "O(n)",
                        "O(log n)",
                        "O(n²)"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is time complexity?",
                      options: [
                        "Time required to compile the algorithm",
                        "Time taken to write the algorithm",
                        "Time required by an algorithm to run, based on input size",
                        "Time an algorithm takes to produce output visually"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the time complexity of a loop that iterates over n elements?",
                      options: [
                        "O(1)",
                        "O(log n)",
                        "O(n)",
                        "O(n²)"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which of the following represents constant time complexity?",
                      options: [
                        "O(1)",
                        "O(log n)",
                        "O(n)",
                        "O(n²)"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "What is amortized analysis used for?",
                      options: [
                        "Finding the worst-case time",
                        "Calculating memory space",
                        "Averaging time for a sequence of operations",
                        "Calculating power consumption of an algorithm"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In amortized analysis, what does the aggregate method do?",
                      options: [
                        "Assigns different charges to different operations",
                        "Calculates total cost divided by the number of operations",
                        "Measures only the potential increase",
                        "Focuses on random operation costs"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   }, { id: '2_9_2', name: 'Disjoint Sets and Divide and Conquer',  completed: false,videoUrl:"https://www.youtube.com/embed/2Rr2tW9zvRg",quiz: [
                    {
                      question: "What are disjoint sets?",
                      options: [
                        "Sets that share at least one common element",
                        "Sets that are completely separate from each other",
                        "Sets that are ordered",
                        "Sets that are nested inside one another"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which two basic operations are fundamental in disjoint set data structures?",
                      options: [
                        "Insert and Delete",
                        "Find and Union",
                        "Merge and Sort",
                        "Split and Combine"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is 'Path Compression' in disjoint sets?",
                      options: [
                        "Compressing multiple sets into one",
                        "Optimizing Find operation by flattening the tree",
                        "Compressing input data",
                        "Compressing multiple operations into one function"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which optimization technique in disjoint sets attaches a smaller tree under a deeper one?",
                      options: [
                        "Path Compression",
                        "Tree Balancing",
                        "Union by Rank",
                        "Lazy Propagation"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does 'Divide' mean in the Divide and Conquer approach?",
                      options: [
                        "Merging subproblems into one",
                        "Dividing the main problem into smaller subproblems",
                        "Discarding irrelevant subproblems",
                        "Repeating the same problem multiple times"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which algorithm is an example of the Divide and Conquer paradigm?",
                      options: [
                        "Linear Search",
                        "Bubble Sort",
                        "Merge Sort",
                        "Selection Sort"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does Binary Search require to work correctly?",
                      options: [
                        "Randomized input",
                        "Sorted array",
                        "Unsorted linked list",
                        "Circular buffer"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In Quick Sort, what is used to partition the array?",
                      options: [
                        "Mid element",
                        "Pivot element",
                        "Minimum element",
                        "Maximum element"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does Merge Sort do after sorting the two halves?",
                      options: [
                        "Deletes one half",
                        "Randomizes the array",
                        "Merges the two sorted halves",
                        "Swaps elements between halves"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "How many multiplications does Strassen’s algorithm perform when multiplying matrices?",
                      options: [
                        "8",
                        "7",
                        "6",
                        "5"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   }, { id: '2_9_3', name: 'Dynamic Programming',  completed: false,videoUrl:"https://www.youtube.com/embed/5dRGRueKU3M",quiz: [
                    {
                      question: "What is Dynamic Programming (DP)?",
                      options: [
                        "A method for parallel computing",
                        "A method for solving problems by solving subproblems and storing their results",
                        "A method for sorting data",
                        "A method for direct search in a database"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which is NOT a step in solving a problem using Dynamic Programming?",
                      options: [
                        "Characterize the structure of an optimal solution",
                        "Define the solution recursively",
                        "Compute solutions randomly",
                        "Construct an optimal solution from computed information"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which of the following problems can be solved using Dynamic Programming?",
                      options: [
                        "Bubble Sort",
                        "Binary Search",
                        "Optimal Rod Cutting",
                        "Prim's Algorithm"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In the 0/1 Knapsack Problem, what are we trying to maximize?",
                      options: [
                        "Number of items",
                        "Total weight",
                        "Total value",
                        "Total volume"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which algorithm is commonly used for solving the All-Pairs Shortest Path Problem?",
                      options: [
                        "Dijkstra's Algorithm",
                        "Prim's Algorithm",
                        "Floyd-Warshall Algorithm",
                        "Bellman-Ford Algorithm"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In the Travelling Salesperson Problem (TSP), what is minimized?",
                      options: [
                        "Number of paths",
                        "Number of cities visited",
                        "Total travel cost",
                        "Total travel time"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does the 'mask' represent in the Dynamic Programming approach to TSP?",
                      options: [
                        "Distance between cities",
                        "Visited cities",
                        "City names",
                        "Starting city"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which approach uses memoization in rod-cutting problem solving?",
                      options: [
                        "Bottom-Up Approach",
                        "Top-Down Approach",
                        "Brute Force Approach",
                        "Divide and Conquer Approach"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In the bottom-up rod-cutting solution, the problem is solved by:",
                      options: [
                        "Using recursion with memorization",
                        "Building up a solution using iteration",
                        "Dividing into halves",
                        "Random trial and error"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the time complexity of Floyd-Warshall Algorithm for finding all-pairs shortest paths?",
                      options: [
                        "O(n)",
                        "O(n log n)",
                        "O(n²)",
                        "O(n³)"
                      ],
                      correctAnswer: 3
                    }
                  ]
                   } ] }
            ]
        },
        3: {
            name: '3rd Year',
            icon: 'fas fa-database',
            subjects: [
                { id: '3_1', name: 'Computer Networks', progress: 0, icon: 'fas fa-network-wired', lessons: [ { id: '3_1_1', name: 'OSI & TCP/IP Models', completed: false,videoUrl:"https://www.youtube.com/embed/GfaHdjApnhU",quiz: [
                    {
                      question: "What is a computer network?",
                      options: [
                        "A set of isolated computers",
                        "A system that connects computers to share resources and information",
                        "A software for designing websites",
                        "A database management tool"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which of the following is NOT a type of network?",
                      options: [
                        "LAN",
                        "WAN",
                        "SAN",
                        "MAN"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "How many layers are there in the OSI Model?",
                      options: [
                        "4",
                        "5",
                        "6",
                        "7"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Which layer of the OSI model handles routing and forwarding?",
                      options: [
                        "Transport Layer",
                        "Network Layer",
                        "Data Link Layer",
                        "Session Layer"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which OSI layer is responsible for encryption and data compression?",
                      options: [
                        "Application Layer",
                        "Presentation Layer",
                        "Session Layer",
                        "Transport Layer"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the first (lowest) layer in the OSI model?",
                      options: [
                        "Network Layer",
                        "Physical Layer",
                        "Data Link Layer",
                        "Session Layer"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which layer in TCP/IP model combines OSI's Application, Presentation, and Session layers?",
                      options: [
                        "Transport Layer",
                        "Internet Layer",
                        "Application Layer",
                        "Network Access Layer"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In TCP/IP model, which layer is responsible for addressing and routing packets?",
                      options: [
                        "Network Access Layer",
                        "Internet Layer",
                        "Transport Layer",
                        "Application Layer"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which model is described as a 'theoretical model' in networking?",
                      options: [
                        "TCP/IP Model",
                        "OSI Model",
                        "Hybrid Model",
                        "Internet Model"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which model is widely used in real-world networks?",
                      options: [
                        "OSI Model",
                        "TCP/IP Model",
                        "Hybrid Model",
                        "Reference Model"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   }, { id: '3_1_2', name: 'Routing & Switching',  completed: false,videoUrl:"https://www.youtube.com/embed/xSiE0tahshI",quiz: [
                    {
                      question: "At which OSI layer does switching primarily operate?",
                      options: [
                        "Network Layer",
                        "Transport Layer",
                        "Data Link Layer",
                        "Physical Layer"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the main purpose of a network switch?",
                      options: [
                        "To connect multiple networks",
                        "To connect devices within a LAN and forward data based on MAC addresses",
                        "To encrypt data packets",
                        "To assign IP addresses to devices"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which type of switching establishes a dedicated path between two devices?",
                      options: [
                        "Packet Switching",
                        "Circuit Switching",
                        "Message Switching",
                        "Link Switching"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which switching method divides data into packets that can take any path to the destination?",
                      options: [
                        "Circuit Switching",
                        "Packet Switching",
                        "Message Switching",
                        "Frame Switching"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "At which OSI layer does routing primarily operate?",
                      options: [
                        "Data Link Layer",
                        "Physical Layer",
                        "Network Layer",
                        "Transport Layer"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which routing protocol uses Distance Vector Routing?",
                      options: [
                        "OSPF",
                        "BGP",
                        "RIP",
                        "EIGRP"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which routing protocol uses Link State Routing and Dijkstra's algorithm?",
                      options: [
                        "RIP",
                        "OSPF",
                        "BGP",
                        "EIGRP"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which protocol is responsible for routing information between Internet Service Providers (ISPs)?",
                      options: [
                        "RIP",
                        "OSPF",
                        "EIGRP",
                        "BGP"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "What address does switching use to forward frames?",
                      options: [
                        "IP Address",
                        "MAC Address",
                        "Subnet Address",
                        "Host Address"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which device is typically used for routing?",
                      options: [
                        "Switch",
                        "Hub",
                        "Router",
                        "Bridge"
                      ],
                      correctAnswer: 2
                    }
                  ]
                  }, { id: '3_1_3', name: 'Network Security Basics',  completed: false ,videoUrl:"https://www.youtube.com/embed/KjN64N6-_Sk",quiz: [
                    {
                      question: "What does network security aim to prevent?",
                      options: [
                        "Speed reduction",
                        "Unauthorized access and misuse of networks",
                        "Slower internet connectivity",
                        "Hardware malfunction"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which objective of network security ensures that information is accessible only to authorized users?",
                      options: [
                        "Integrity",
                        "Availability",
                        "Confidentiality",
                        "Authentication"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which threat involves malicious software that appears to be legitimate software?",
                      options: [
                        "Virus",
                        "Trojan Horse",
                        "Worm",
                        "Ransomware"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What type of attack overwhelms a system with traffic to make it unavailable?",
                      options: [
                        "Phishing Attack",
                        "Man-in-the-Middle Attack",
                        "Denial of Service (DoS) Attack",
                        "Trojan Horse Attack"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does a firewall do?",
                      options: [
                        "Encrypts data",
                        "Filters incoming and outgoing traffic based on security rules",
                        "Monitors traffic for suspicious activity",
                        "Creates backup copies of data"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which tool detects and removes malicious software?",
                      options: [
                        "Firewall",
                        "Antivirus and Antimalware Software",
                        "VPN",
                        "Access Control System"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which security measure creates a secure tunnel for data over the internet?",
                      options: [
                        "Firewall",
                        "Antivirus",
                        "VPN",
                        "Intrusion Detection System"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the purpose of Multi-Factor Authentication (MFA)?",
                      options: [
                        "Provide single password access",
                        "Provide faster network speed",
                        "Require multiple forms of verification for access",
                        "Allow anonymous network access"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is a recommended best practice for securing a network?",
                      options: [
                        "Using default passwords",
                        "Disabling antivirus",
                        "Regularly updating software and systems",
                        "Ignoring phishing emails"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which threat encrypts a victim's data and demands payment to restore it?",
                      options: [
                        "Worm",
                        "Trojan Horse",
                        "Ransomware",
                        "Phishing"
                      ],
                      correctAnswer: 2
                    }
                  ]
                  } ] },
                { id: '3_2', name: 'Data Warehousing and Data Mining', progress: 0, icon: 'fas fa-cubes', lessons: [ { id: '3_2_1', name: 'Data Warehousing Concepts', completed: false, videoUrl:"https://www.youtube.com/embed/k4tK2ttdSDg",quiz: [
                    {
                      question: "What is a Data Warehouse?",
                      options: [
                        "A system for online shopping",
                        "A centralized repository storing data from multiple sources for analysis",
                        "A backup server for databases",
                        "A tool for website development"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which characteristic of a data warehouse refers to organizing data around key subjects like customers or sales?",
                      options: [
                        "Integrated",
                        "Time-Variant",
                        "Subject-Oriented",
                        "Non-Volatile"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which component of a data warehouse is responsible for cleaning, transforming, and loading data?",
                      options: [
                        "Data Source",
                        "Data Storage",
                        "Data Staging",
                        "Metadata"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does Metadata describe?",
                      options: [
                        "Data about customers",
                        "Data about storage devices",
                        "Data about data, including how and where it is stored",
                        "The total size of the database"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In a three-tier architecture, which tier contains the OLAP Server?",
                      options: [
                        "Top Tier",
                        "Middle Tier",
                        "Bottom Tier",
                        "First Tier"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does the 'Extract' step of the ETL process involve?",
                      options: [
                        "Converting data into suitable formats",
                        "Pulling data from various sources",
                        "Storing data in a database",
                        "Deleting redundant data"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which architecture minimizes stored data by removing redundancy?",
                      options: [
                        "Three-tier Architecture",
                        "Single-tier Architecture",
                        "Two-tier Architecture",
                        "Four-tier Architecture"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which of the following is NOT listed as a benefit of data warehousing?",
                      options: [
                        "Improved data quality",
                        "Better decision-making",
                        "Slower data access",
                        "Integration of data from multiple sources"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which application of data warehousing is focused on customer interactions?",
                      options: [
                        "Financial analysis",
                        "Sales analysis",
                        "Customer relationship management (CRM)",
                        "Healthcare data analysis"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the final step of the ETL process?",
                      options: [
                        "Transform",
                        "Analyze",
                        "Load",
                        "Extract"
                      ],
                      correctAnswer: 2
                    }
                  ]
                   }, { id: '3_2_2', name: 'Data Mining Techniques', completed: false, videoUrl:"https://www.youtube.com/embed/dUm3ptTQr0Q",quiz: [
                    {
                      question: "What is the main purpose of Data Mining?",
                      options: [
                        "Data storage",
                        "Discovering patterns and useful information from large datasets",
                        "Building databases",
                        "Creating internet websites"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which technique predicts categorical labels?",
                      options: [
                        "Regression",
                        "Classification",
                        "Clustering",
                        "Association Rule Learning"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which algorithm is commonly used for clustering?",
                      options: [
                        "Linear Regression",
                        "K-Means",
                        "Decision Tree",
                        "Apriori"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Regression techniques are mainly used to predict:",
                      options: [
                        "Groups",
                        "Categories",
                        "Continuous values",
                        "Network connections"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which technique identifies relationships between variables, like in market basket analysis?",
                      options: [
                        "Clustering",
                        "Association Rule Learning",
                        "Anomaly Detection",
                        "Neural Networks"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which method identifies rare events or unusual patterns in data?",
                      options: [
                        "Classification",
                        "Regression",
                        "Anomaly Detection",
                        "Clustering"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Sequential Pattern Mining is used to find:",
                      options: [
                        "Clusters of unrelated items",
                        "Regular sequences or trends over time",
                        "Random data points",
                        "Anomalies in data"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which data mining method uses flowchart-like structures for decisions?",
                      options: [
                        "Neural Networks",
                        "Decision Trees",
                        "Regression",
                        "Clustering"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Neural networks are mainly used for:",
                      options: [
                        "Simple arithmetic tasks",
                        "Recognizing complex patterns and classification",
                        "Data storage",
                        "Network routing"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which is NOT an application of data mining listed in the material?",
                      options: [
                        "Healthcare Diagnosis",
                        "Customer Relationship Management (CRM)",
                        "Website Hosting",
                        "Fraud Detection"
                      ],
                      correctAnswer: 2
                    }
                  ]
                   }, { id: '3_2_3', name: 'OLAP and Data Cubes',  completed: false , videoUrl:"https://www.youtube.com/embed/iw-5kFzIdgY" , quiz: [
                    {
                      question: "What does OLAP stand for?",
                      options: [
                        "Online Access Layered Application Protocol",
                        "Online Analytical Processing",
                        "Offline Analytical Processing",
                        "Organized Logical Application Processing"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which feature of OLAP allows moving from summary data to detailed data?",
                      options: [
                        "Pivot",
                        "Roll-up",
                        "Drill-down",
                        "Dice"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What type of OLAP stores data in multidimensional cube structures?",
                      options: [
                        "MOLAP",
                        "ROLAP",
                        "HOLAP",
                        "SOLAP"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "In ROLAP, where is the data stored?",
                      options: [
                        "In cloud storage",
                        "In relational databases",
                        "In multidimensional cubes",
                        "In text files"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is a Data Cube mainly used for?",
                      options: [
                        "Performing sequential backups",
                        "Modeling and viewing data in multiple dimensions",
                        "Storing application programs",
                        "Encrypting large files"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which component of a data cube represents numeric data to be analyzed?",
                      options: [
                        "Dimensions",
                        "Measures",
                        "Cells",
                        "Attributes"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What operation on a data cube involves selecting a single layer?",
                      options: [
                        "Slice",
                        "Dice",
                        "Roll-up",
                        "Pivot"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which operation aggregates data along a dimension?",
                      options: [
                        "Slice",
                        "Roll-up",
                        "Drill-down",
                        "Dice"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which operation selects a sub-cube by specifying ranges on multiple dimensions?",
                      options: [
                        "Slice",
                        "Dice",
                        "Pivot",
                        "Drill-down"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which application area is NOT listed for OLAP and Data Cubes?",
                      options: [
                        "Business Reporting",
                        "Market Research",
                        "Telecommunications Reporting",
                        "Space Exploration Data Analysis"
                      ],
                      correctAnswer: 3
                    }
                  ]
                  } ] },
                { id: '3_3', name: 'Artificial Intelligence', progress: 0, icon: 'fas fa-robot', lessons: [ { id: '3_3_1', name: 'History & Scope', completed: false , videoUrl:"https://www.youtube.com/embed/yaL5ZMvRRqE",quiz: [
                    {
                      question: "What is Artificial Intelligence (AI)?",
                      options: [
                        "A type of database management",
                        "Simulation of human intelligence in machines",
                        "A method for programming websites",
                        "A way to store large amounts of data"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Who introduced the Turing Test in 1950?",
                      options: [
                        "Warren McCulloch",
                        "John McCarthy",
                        "Alan Turing",
                        "Walter Pitts"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "When was the term 'Artificial Intelligence' coined?",
                      options: [
                        "1943",
                        "1950",
                        "1956",
                        "1997"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which AI system defeated Garry Kasparov in chess in 1997?",
                      options: [
                        "DeepMind",
                        "Deep Blue",
                        "AlphaGo",
                        "Watson"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which area of AI focuses on enabling machines to understand human language?",
                      options: [
                        "Computer Vision",
                        "Natural Language Processing (NLP)",
                        "Robotics",
                        "Machine Learning (ML)"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is an example of a robotics application?",
                      options: [
                        "Speech recognition",
                        "Space exploration",
                        "Facial recognition",
                        "Fraud detection"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which technology uses neural networks with many layers?",
                      options: [
                        "Natural Language Processing",
                        "Expert Systems",
                        "Deep Learning",
                        "Robotics"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does computer vision allow AI systems to do?",
                      options: [
                        "Understand spoken language",
                        "Analyze visual information from the world",
                        "Predict financial trends",
                        "Control manufacturing processes"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What are expert systems designed to simulate?",
                      options: [
                        "Human physical strength",
                        "Human visual perception",
                        "Human decision-making ability",
                        "Human speech"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is a future trend mentioned for AI development?",
                      options: [
                        "Reducing the number of jobs available",
                        "Development of ethical and explainable AI systems",
                        "Replacing all forms of education",
                        "Building only gaming applications"
                      ],
                      correctAnswer: 1
                    }
                  ]
                  }, { id: '3_3_2', name: 'Search Algorithms',  completed: false, videoUrl:"https://www.youtube.com/embed/CnqMV_wXcBg", quiz: [
                    {
                      question: "What is the primary purpose of search algorithms in AI?",
                      options: [
                        "Building websites",
                        "Finding the sequence of steps from initial to goal state",
                        "Creating databases",
                        "Designing graphics"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which search algorithm guarantees the shortest path in uninformed search?",
                      options: [
                        "Depth-First Search (DFS)",
                        "Greedy Best-First Search",
                        "Breadth-First Search (BFS)",
                        "Depth-Limited Search"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which algorithm expands nodes with the lowest path cost?",
                      options: [
                        "A* Search",
                        "Greedy Best-First Search",
                        "Uniform Cost Search",
                        "Iterative Deepening Search"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which search method uses a predefined depth limit?",
                      options: [
                        "Depth-First Search",
                        "Uniform Cost Search",
                        "Depth-Limited Search",
                        "Greedy Best-First Search"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which algorithm uses both path cost and heuristic (f(n) = g(n) + h(n))?",
                      options: [
                        "Greedy Best-First Search",
                        "A* Search",
                        "Depth-First Search",
                        "Uniform Cost Search"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which type of search algorithm uses problem-specific knowledge (heuristics)?",
                      options: [
                        "Uninformed Search",
                        "Informed Search",
                        "Blind Search",
                        "Random Search"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the time complexity of Breadth-First Search (BFS)?",
                      options: [
                        "O(bm)",
                        "O(b<sup>d</sup>)",
                        "O(b<sup>1+C*/ε</sup>)",
                        "O(n log n)"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which search is complete and optimal if the heuristic is admissible?",
                      options: [
                        "Greedy Best-First Search",
                        "Uniform Cost Search",
                        "Depth-First Search",
                        "A* Search"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "In which applications are search algorithms used?",
                      options: [
                        "Building user interfaces",
                        "Pathfinding in maps and games",
                        "Compiling source code",
                        "Optimizing memory usage"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which algorithm is NOT guaranteed to be complete?",
                      options: [
                        "Breadth-First Search",
                        "A* Search",
                        "Uniform Cost Search",
                        "Depth-First Search"
                      ],
                      correctAnswer: 3
                    }
                  ]
                  }, { id: '3_3_3', name: 'Knowledge Representation', completed: false,videoUrl:"https://www.youtube.com/embed/Fn5HYfK858",quiz: [
                    {
                      question: "What is Knowledge Representation (KR) in AI?",
                      options: [
                        "A method for storing passwords securely",
                        "A field concerned with symbolically representing and manipulating knowledge",
                        "A way of creating new programming languages",
                        "A method for compiling databases"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which is NOT a reason for Knowledge Representation?",
                      options: [
                        "To allow machines to process complex data",
                        "To make machines draw pictures",
                        "To enable reasoning and decision-making",
                        "To facilitate human-machine communication"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Declarative knowledge is about:",
                      options: [
                        "Steps to perform a task",
                        "Knowledge about knowledge",
                        "Facts about objects, events, and situations",
                        "Rules of thumb"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which type of knowledge describes 'how-to' procedures?",
                      options: [
                        "Declarative Knowledge",
                        "Procedural Knowledge",
                        "Heuristic Knowledge",
                        "Meta-Knowledge"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In which approach is knowledge organized as nodes and links?",
                      options: [
                        "Frames",
                        "Semantic Networks",
                        "Production Rules",
                        "Ontologies"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What are Production Rules based on?",
                      options: [
                        "Graphs of concepts",
                        "Structured frameworks",
                        "Condition-action pairs (IF-THEN rules)",
                        "Deep learning algorithms"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Ontologies in AI are used to:",
                      options: [
                        "Create visual simulations",
                        "Define structured frameworks of concepts and relationships",
                        "Compress knowledge into small files",
                        "Write procedural programs"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which property of a good knowledge representation system refers to representing all kinds of knowledge?",
                      options: [
                        "Inferential Efficiency",
                        "Representational Adequacy",
                        "Inferential Adequacy",
                        "Acquisition Efficiency"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which AI application uses Knowledge Representation for diagnosing diseases?",
                      options: [
                        "Search Engines",
                        "Autonomous Cars",
                        "Expert Systems",
                        "Translation Tools"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Frames in Knowledge Representation are mainly used for:",
                      options: [
                        "Handling time-based data",
                        "Representing stereotyped situations with attributes",
                        "Creating decision trees",
                        "Learning from neural networks"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   } ] },
                { id: '3_4', name: 'Machine Learning', progress: 0, icon: 'fas fa-brain', lessons: [ { id: '3_4_1', name: 'Supervised Learning', completed: false ,videoUrl:"https://www.youtube.com/embed/1FZ0A1QCMWc",quiz: [
                    {
                      question: "What is Machine Learning (ML)?",
                      options: [
                        "A method for manually coding programs",
                        "A field where machines learn from data without explicit programming",
                        "A database management system",
                        "A type of encryption method"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In supervised learning, the model is trained on:",
                      options: [
                        "Unlabeled data",
                        "Generated data",
                        "Labeled data",
                        "Encrypted data"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which component in supervised learning measures the error between predicted and actual values?",
                      options: [
                        "Features",
                        "Model",
                        "Loss Function",
                        "Training Data"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which type of supervised learning predicts a category?",
                      options: [
                        "Classification",
                        "Regression",
                        "Clustering",
                        "Dimensionality Reduction"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which of the following is an example of a regression task?",
                      options: [
                        "Predicting house prices",
                        "Spam detection",
                        "Image classification",
                        "Medical diagnosis"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which algorithm is used for binary classification?",
                      options: [
                        "Linear Regression",
                        "Decision Trees",
                        "Logistic Regression",
                        "Random Forests"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which algorithm works well in high-dimensional spaces?",
                      options: [
                        "K-Nearest Neighbors",
                        "Linear Regression",
                        "Support Vector Machines (SVM)",
                        "Decision Trees"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which supervised learning algorithm is based on similarity between data points?",
                      options: [
                        "K-Nearest Neighbors (KNN)",
                        "Support Vector Machines (SVM)",
                        "Neural Networks",
                        "Logistic Regression"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "What is a key step after training the model?",
                      options: [
                        "Ignore performance",
                        "Evaluate on the testing set",
                        "Store the training data",
                        "Encrypt the model"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which is NOT listed as an application of supervised learning?",
                      options: [
                        "Fraud detection",
                        "Speech recognition",
                        "Customer churn prediction",
                        "Operating system development"
                      ],
                      correctAnswer: 3
                    }
                  ]
                  }, { id: '3_4_2', name: 'Unsupervised Learning',completed: false, videoUrl:"https://www.youtube.com/embed/D6gtZrsYi6c",quiz: [
                    {
                      question: "What is Unsupervised Learning?",
                      options: [
                        "Learning with labeled data",
                        "Learning with explicit supervision",
                        "Discovering patterns from unlabeled data",
                        "Programming by example"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which type of data does Unsupervised Learning work with?",
                      options: [
                        "Labeled data",
                        "Partially labeled data",
                        "Unlabeled data",
                        "Encoded data"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is Clustering mainly used for?",
                      options: [
                        "Predicting future values",
                        "Grouping similar data points",
                        "Classifying emails",
                        "Training robots"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which example fits under Association in Unsupervised Learning?",
                      options: [
                        "Predicting house prices",
                        "Market basket analysis",
                        "Customer churn prediction",
                        "Image classification"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which technique is used for reducing the number of variables in data?",
                      options: [
                        "Clustering",
                        "Association",
                        "Dimensionality Reduction",
                        "Classification"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which algorithm partitions data into K groups?",
                      options: [
                        "Apriori Algorithm",
                        "Hierarchical Clustering",
                        "K-Means Clustering",
                        "PCA"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which algorithm is used to find frequent itemsets and association rules?",
                      options: [
                        "PCA",
                        "DBSCAN",
                        "Apriori Algorithm",
                        "K-Means"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "DBSCAN is mainly based on which concept?",
                      options: [
                        "Cluster centers",
                        "Density",
                        "Distance from origin",
                        "Hierarchical structure"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which of the following is NOT an application of Unsupervised Learning listed in the material?",
                      options: [
                        "Market segmentation",
                        "Social network analysis",
                        "Fraud detection",
                        "Speech-to-text translation"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Principal Component Analysis (PCA) is used for:",
                      options: [
                        "Building neural networks",
                        "Reducing data dimensions",
                        "Generating new data",
                        "Finding anomalies in financial transactions"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   }, { id: '3_4_3', name: 'Model Evaluation', completed: false ,videoUrl:"https://www.youtube.com/embed/qS78U0ErvN8",quiz: [
                    {
                      question: "What is the main purpose of Model Evaluation in Machine Learning?",
                      options: [
                        "To train a model faster",
                        "To assess how well a model performs on unseen data",
                        "To make the model larger",
                        "To increase dataset size"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which set is used to tune hyperparameters of a model?",
                      options: [
                        "Training Set",
                        "Test Set",
                        "Validation Set",
                        "Backup Set"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What problem occurs when a model performs well on training data but poorly on new data?",
                      options: [
                        "Overfitting",
                        "Underfitting",
                        "Bias",
                        "Variance"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which metric measures the ratio of correctly predicted instances to total instances?",
                      options: [
                        "Precision",
                        "Recall",
                        "Accuracy",
                        "F1 Score"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does the F1 Score represent?",
                      options: [
                        "The average of accuracy and recall",
                        "The harmonic mean of precision and recall",
                        "The average of recall and loss",
                        "The product of precision and recall"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which metric is used for regression problems and measures the average of absolute errors?",
                      options: [
                        "Mean Absolute Error (MAE)",
                        "Mean Squared Error (MSE)",
                        "Root Mean Squared Error (RMSE)",
                        "R² Score"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which validation technique divides data into K subsets for evaluation?",
                      options: [
                        "Hold-Out Validation",
                        "K-Fold Cross Validation",
                        "Leave-One-Out Cross Validation",
                        "Stratified Sampling"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does a Confusion Matrix show?",
                      options: [
                        "A graphical display of error distribution",
                        "The variance of predictions",
                        "Correct and incorrect predictions in a table",
                        "Training and test set split"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "High bias typically leads to which of the following?",
                      options: [
                        "Overfitting",
                        "Underfitting",
                        "High variance",
                        "No effect on model performance"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the goal regarding the bias-variance tradeoff?",
                      options: [
                        "Maximize bias and minimize variance",
                        "Minimize bias and maximize variance",
                        "Balance bias and variance",
                        "Ignore bias and variance"
                      ],
                      correctAnswer: 2
                    }
                  ]
                  } ] },
                { id: '3_5', name: 'Big Data Analytics', progress: 0, icon: 'fas fa-server', lessons: [ { id: '3_5_1', name: 'Characteristics of Big Data', completed: false, videoUrl:"https://www.youtube.com/embed/s8V8nT26yKo", quiz: [
                    {
                      question: "What does Big Data primarily refer to?",
                      options: [
                        "Small and simple datasets",
                        "Massive, complex datasets beyond traditional processing capabilities",
                        "Data stored on personal computers",
                        "Simple relational databases"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which characteristic of Big Data is about the speed of data generation and processing?",
                      options: [
                        "Volume",
                        "Velocity",
                        "Variety",
                        "Veracity"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In the context of Big Data, what does Variety refer to?",
                      options: [
                        "The speed of data",
                        "The different types and formats of data",
                        "The accuracy of data",
                        "The volume of data"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the focus of Veracity in Big Data?",
                      options: [
                        "Data speed",
                        "Data structure",
                        "Data quality, accuracy, and reliability",
                        "Data formats"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Why is Value important in Big Data?",
                      options: [
                        "Because it measures how large the data is",
                        "Because it determines the monetary worth of the database",
                        "Because it is about extracting meaningful insights to provide benefits",
                        "Because it speeds up the data collection process"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which term describes fluctuations in the flow rates of Big Data?",
                      options: [
                        "Velocity",
                        "Variability",
                        "Veracity",
                        "Volume"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which additional characteristic highlights the challenge of managing multiple data sources?",
                      options: [
                        "Scalability",
                        "Complexity",
                        "Security",
                        "Velocity"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is Scalability in the context of Big Data?",
                      options: [
                        "Processing unstructured data",
                        "Handling real-time data",
                        "Ability of systems to efficiently handle growing data",
                        "Ensuring data privacy"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which characteristic deals with protecting sensitive information in Big Data?",
                      options: [
                        "Complexity",
                        "Veracity",
                        "Security and Privacy",
                        "Volume"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Understanding Big Data characteristics helps primarily in:",
                      options: [
                        "Speeding up internet browsing",
                        "Building larger storage disks",
                        "Designing better storage, analysis, and decision-making systems",
                        "Replacing human decision-making"
                      ],
                      correctAnswer: 2
                    }
                  ]
                  
                }, { id: '3_5_2', name: 'Big Data Processing Frameworks',  completed: false ,videoUrl:"https://www.youtube.com/embed/jKCj4BxGTi8",quiz: [
                    {
                      question: "What are Big Data Processing Frameworks designed for?",
                      options: [
                        "Handling small-scale local databases",
                        "Efficient collection, storage, analysis, and visualization of massive datasets",
                        "Programming mobile applications",
                        "Building static websites"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which framework uses the MapReduce programming model?",
                      options: [
                        "Apache Flink",
                        "Apache Spark",
                        "Apache Hadoop",
                        "Dask"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is HDFS in the Hadoop ecosystem?",
                      options: [
                        "A programming language",
                        "A distributed storage component",
                        "A processing engine",
                        "A machine learning library"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which framework is known for in-memory data processing for faster speed?",
                      options: [
                        "Apache Storm",
                        "Apache Flink",
                        "Apache Spark",
                        "Dask"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which framework specializes in real-time stream processing and fault tolerance?",
                      options: [
                        "Apache Flink",
                        "Apache Spark",
                        "Hadoop",
                        "Dask"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which system is primarily used for real-time computation of large streams of data?",
                      options: [
                        "Apache Hadoop",
                        "Apache Storm",
                        "Apache Spark",
                        "Dask"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which Python library allows larger-than-memory parallel computing?",
                      options: [
                        "NumPy",
                        "Pandas",
                        "Dask",
                        "TensorFlow"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Batch Processing means:",
                      options: [
                        "Processing data immediately as it arrives",
                        "Processing data collected over a period together",
                        "Ignoring small datasets",
                        "Streaming video content"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which processing method is used by frameworks like Flink and Storm?",
                      options: [
                        "Batch Processing",
                        "Stream Processing",
                        "File Processing",
                        "Image Processing"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which of the following is NOT a key feature of Big Data Frameworks mentioned?",
                      options: [
                        "Scalability and Fault Tolerance",
                        "Real-time and Batch Processing",
                        "Distributed Storage and Computation",
                        "Manual data entry support"
                      ],
                      correctAnswer: 3
                    }
                  ]
                  } ] },
                { id: '3_6', name: 'Software Engineering', progress: 0, icon: 'fas fa-cogs', lessons: [ { id: '3_6_1', name: 'Software Development Life Cycle',  completed: false, videoUrl:"https://www.youtube.com/embed/5b36UTNRmtI",quiz: [
                    {
                      question: "What is the goal of the Software Development Life Cycle (SDLC)?",
                      options: [
                        "To develop software without planning",
                        "To produce high-quality software that meets customer expectations within time and cost estimates",
                        "To create hardware products",
                        "To design marketing campaigns"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which SDLC phase focuses on collecting information from stakeholders?",
                      options: [
                        "System Design",
                        "Requirement Gathering and Analysis",
                        "Implementation",
                        "Testing"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which activity is performed during the System Design phase?",
                      options: [
                        "Feasibility study",
                        "Functional testing",
                        "Database design",
                        "Corrective maintenance"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In which SDLC phase does writing source code happen?",
                      options: [
                        "Testing",
                        "Requirement Analysis",
                        "Implementation (Coding)",
                        "Deployment"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the main purpose of the Testing phase?",
                      options: [
                        "To gather requirements",
                        "To ensure the software meets business needs and is defect-free",
                        "To design databases",
                        "To maintain the deployed software"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is Adaptive Maintenance?",
                      options: [
                        "Fixing existing software issues",
                        "Adjusting software to environment changes",
                        "Enhancing functionalities",
                        "Testing new versions of software"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which SDLC model follows a strict sequential design without overlapping phases?",
                      options: [
                        "Agile Model",
                        "Spiral Model",
                        "Waterfall Model",
                        "Iterative Model"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which SDLC model focuses heavily on risk assessment and prototyping?",
                      options: [
                        "Waterfall Model",
                        "Spiral Model",
                        "V-Model",
                        "Agile Model"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which advantage is NOT mentioned for SDLC?",
                      options: [
                        "Improves project management",
                        "Enhances communication",
                        "Develops marketing strategies",
                        "Helps in identifying issues early"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What happens during the Deployment phase?",
                      options: [
                        "Code writing",
                        "Requirement gathering",
                        "Moving software to production for end-users",
                        "Updating security policies"
                      ],
                      correctAnswer: 2
                    }
                  ]
                   }, { id: '3_6_2', name: 'Design Patterns', completed: false, videoUrl:"https://www.youtube.com/embed/FM_pRefVCB4", }, { id: '3_6_3', name: 'Software Testing', completed: false, videoUrl:"https://www.youtube.com/embed/cDQ34z0oqnQ", quiz: [
                    {
                      question: "What is the main purpose of Software Testing?",
                      options: [
                        "Speeding up software development",
                        "Identifying errors, gaps, or missing requirements",
                        "Reducing the software size",
                        "Increasing system memory usage"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which type of testing is performed manually without automation tools?",
                      options: [
                        "Automation Testing",
                        "Manual Testing",
                        "System Testing",
                        "Security Testing"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does Unit Testing focus on?",
                      options: [
                        "Testing the entire system",
                        "Testing individual components or pieces of code",
                        "Testing the database",
                        "Testing user interfaces only"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What type of testing verifies that combined parts of an application function together?",
                      options: [
                        "Unit Testing",
                        "Acceptance Testing",
                        "System Testing",
                        "Integration Testing"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Which method tests without knowledge of internal code structure?",
                      options: [
                        "White Box Testing",
                        "Black Box Testing",
                        "Gray Box Testing",
                        "Regression Testing"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which testing technique is a combination of Black Box and White Box Testing?",
                      options: [
                        "Unit Testing",
                        "Load Testing",
                        "Gray Box Testing",
                        "Stress Testing"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which testing technique checks if critical functionalities work before detailed testing?",
                      options: [
                        "Regression Testing",
                        "Smoke Testing",
                        "Stress Testing",
                        "Security Testing"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which type of testing evaluates software speed, responsiveness, and stability?",
                      options: [
                        "Performance Testing",
                        "Security Testing",
                        "Load Testing",
                        "Usability Testing"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "What is the main focus of Load Testing?",
                      options: [
                        "User interface evaluation",
                        "Handling a large number of users or data",
                        "Memory leak detection",
                        "Internal logic testing"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which phase of the Software Testing Life Cycle (STLC) involves writing detailed test cases?",
                      options: [
                        "Test Planning",
                        "Environment Setup",
                        "Requirement Analysis",
                        "Test Case Development"
                      ],
                      correctAnswer: 3
                    }
                  ]
                  } ] }
            ]
        },
        4: {
            name: '4th Year',
            icon: 'fas fa-brain',
            subjects: [
                { id: '4_1', name: 'Cryptography and Network Security', progress: 0, icon: 'fas fa-shield-alt', lessons: [ { id: '4_1_1', name: 'Cryptography Basics',  completed: false,videoURL:"https://www.youtube.com/embed/GQvu49c0ZZc" ,quiz: [
                    {
                      question: "What is the main purpose of cryptography?",
                      options: [
                        "Improving internet speed",
                        "Securing information by making it unreadable to unauthorized parties",
                        "Compressing large files",
                        "Building websites faster"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which cryptographic goal ensures data is not altered without authorization?",
                      options: [
                        "Confidentiality",
                        "Integrity",
                        "Authentication",
                        "Non-repudiation"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "In symmetric key cryptography, what is true about the keys?",
                      options: [
                        "A different key is used for encryption and decryption",
                        "The public key encrypts and private key decrypts",
                        "The same key is used for both encryption and decryption",
                        "No key is used"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which is an example of symmetric key cryptography?",
                      options: [
                        "RSA",
                        "ECC",
                        "AES",
                        "Diffie-Hellman"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does a public key do in asymmetric key cryptography?",
                      options: [
                        "Decrypts data",
                        "Encrypts data",
                        "Deletes data",
                        "Stores data"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which cryptographic method is primarily used to verify data integrity?",
                      options: [
                        "Encryption",
                        "Hash Functions",
                        "Certificates",
                        "Digital Signatures"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which of the following is an example of a hash function?",
                      options: [
                        "RSA",
                        "DES",
                        "SHA",
                        "AES"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does decryption mean?",
                      options: [
                        "Converting plaintext into ciphertext",
                        "Transforming data into a fixed hash value",
                        "Converting ciphertext back into readable plaintext",
                        "Compressing data"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which algorithm is used for securely exchanging keys over a public channel?",
                      options: [
                        "AES",
                        "RSA",
                        "Diffie-Hellman",
                        "SHA-256"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which application does NOT involve cryptography?",
                      options: [
                        "Secure email communication",
                        "Online banking",
                        "Virtual Private Networks (VPNs)",
                        "Graphic design software"
                      ],
                      correctAnswer: 3
                    }
                  ]
                  }, { id: '4_1_2', name: 'Network Security Protocols', completed: false, videoUrl:"https://www.youtube.com/embed/1zVZ9cWFnCc",quiz: [
                    {
                      question: "What is the main purpose of Network Security Protocols?",
                      options: [
                        "Speeding up data transfer",
                        "Allowing free access to networks",
                        "Protecting the integrity, confidentiality, and accessibility of data",
                        "Designing network hardware"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which protocol ensures secure communication between web browsers and servers?",
                      options: [
                        "IPsec",
                        "SSH",
                        "SSL/TLS",
                        "SFTP"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "HTTPS is a combination of HTTP and which security protocol?",
                      options: [
                        "SSH",
                        "IPsec",
                        "SSL/TLS",
                        "Kerberos"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which protocol is commonly used in VPNs for securing IP packets?",
                      options: [
                        "SSL",
                        "IPsec",
                        "SFTP",
                        "WPA2"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which protocol provides secure remote login over an unsecured network?",
                      options: [
                        "SSH",
                        "HTTPS",
                        "IPsec",
                        "PGP"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "SFTP is primarily used for:",
                      options: [
                        "Email encryption",
                        "Secure file transfers",
                        "Secure video calls",
                        "Remote system shutdown"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which authentication protocol uses secret-key cryptography?",
                      options: [
                        "SFTP",
                        "Kerberos",
                        "SSL",
                        "HTTPS"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does WPA2 mainly secure?",
                      options: [
                        "Web servers",
                        "Wireless networks",
                        "Cloud storage",
                        "Remote desktops"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which protocol is widely used for securing emails through encryption and digital signatures?",
                      options: [
                        "PGP",
                        "SSL",
                        "SSH",
                        "SFTP"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which principle ensures that data is not altered during transmission?",
                      options: [
                        "Encryption",
                        "Authentication",
                        "Integrity",
                        "Access Control"
                      ],
                      correctAnswer: 2
                    }
                  ]
                   }, { id: '4_1_3', name: 'Authentication & Firewalls', completed: false, videoUrl:"https://www.youtube.com/embed/o_vyfo3Hw0Y",quiz: [
                    {
                      question: "What is the main purpose of authentication?",
                      options: [
                        "Monitoring network traffic",
                        "Encrypting emails",
                        "Verifying the identity of users, devices, or systems",
                        "Installing software updates"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which authentication method uses something you know, such as a password?",
                      options: [
                        "Biometric Authentication",
                        "Certificate-based Authentication",
                        "Password-based Authentication",
                        "Token-based Authentication"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does Two-Factor Authentication (2FA) involve?",
                      options: [
                        "Using two devices simultaneously",
                        "Using two different authentication factors like password and mobile code",
                        "Using two passwords",
                        "Using two different networks"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which type of authentication uses biological traits such as fingerprints or retina scans?",
                      options: [
                        "Password-based Authentication",
                        "Token-based Authentication",
                        "Biometric Authentication",
                        "Certificate-based Authentication"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which method of authentication uses digital certificates to verify identity?",
                      options: [
                        "Password-based Authentication",
                        "Certificate-based Authentication",
                        "Biometric Authentication",
                        "Token-based Authentication"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is a firewall mainly used for?",
                      options: [
                        "Increasing internet speed",
                        "Monitoring and controlling incoming and outgoing network traffic",
                        "Storing user passwords",
                        "Backing up files"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which type of firewall monitors active connections and traffic state?",
                      options: [
                        "Packet-Filtering Firewall",
                        "Proxy Firewall",
                        "Stateful Inspection Firewall",
                        "Software Firewall"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which firewall acts as an intermediary between users and services?",
                      options: [
                        "Packet-Filtering Firewall",
                        "Stateful Inspection Firewall",
                        "Proxy Firewall",
                        "Next-Generation Firewall (NGFW)"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which firewall provides features like deep packet inspection and intrusion prevention systems?",
                      options: [
                        "Stateful Inspection Firewall",
                        "Next-Generation Firewall (NGFW)",
                        "Proxy Firewall",
                        "Packet-Filtering Firewall"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which device would you use to protect an entire network rather than a single computer?",
                      options: [
                        "Software Firewall",
                        "Hardware Firewall",
                        "Certificate Authority",
                        "Token Generator"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   } ] },
                { id: '4_2', name: 'Neural Networks and Deep Learning', progress: 0, icon: 'fas fa-project-diagram', lessons: [ { id: '4_2_1', name: 'Neural Net Fundamentals',  completed: false, videoUrl:"https://www.youtube.com/embed/EYeF2e2IKEo",quiz: [
                    {
                      question: "What inspired the structure of Neural Networks?",
                      options: [
                        "Internet architecture",
                        "Human brain structure",
                        "Library database systems",
                        "Mechanical engines"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What does the Input Layer in a neural network do?",
                      options: [
                        "Transforms outputs",
                        "Generates predictions",
                        "Receives initial data to be processed",
                        "Updates the weights"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the role of Hidden Layers in a neural network?",
                      options: [
                        "Directly display final results",
                        "Store backup data",
                        "Transform inputs into representations useful for output",
                        "Act as memory storage"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which component of a neuron helps shift the activation function curve?",
                      options: [
                        "Weight",
                        "Bias",
                        "Input",
                        "Loss"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which function introduces non-linearity into the neural network?",
                      options: [
                        "Activation Function",
                        "Loss Function",
                        "Optimization Function",
                        "Forward Function"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "What is the mathematical formula of a neuron's output?",
                      options: [
                        "Output = Activation(Sum(Weight * Input) + Bias)",
                        "Output = Weight + Input + Bias",
                        "Output = Input × Bias",
                        "Output = Weight - Input"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Forward propagation refers to:",
                      options: [
                        "Adjusting weights and biases",
                        "Passing input data through the network to produce an output",
                        "Measuring errors",
                        "Encrypting neural outputs"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which function measures how far a prediction is from the actual label?",
                      options: [
                        "Activation function",
                        "Optimization function",
                        "Loss function",
                        "Forward function"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the purpose of backpropagation?",
                      options: [
                        "To propagate input forward",
                        "To calculate final output",
                        "To adjust weights and biases by minimizing the error",
                        "To reset the neural network"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Deep Learning refers to neural networks with:",
                      options: [
                        "One hidden layer",
                        "No hidden layers",
                        "Multiple hidden layers",
                        "Only input and output layers"
                      ],
                      correctAnswer: 2
                    }
                  ]
                   }, { id: '4_2_2', name: 'Deep Learning Architectures',  completed: false, videoUrl:"https://www.youtube.com/embed/oJNHXPs0XDk" ,quiz: [
                    {
                      question: "What is the primary purpose of Deep Learning Architectures?",
                      options: [
                        "Solving simple math problems",
                        "Designing hardware circuits",
                        "Solving complex real-world problems like image recognition and natural language understanding",
                        "Building traditional databases"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "In a Feedforward Neural Network (FNN), data flows:",
                      options: [
                        "Only backward",
                        "In loops",
                        "Forward without cycles",
                        "Randomly between layers"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which architecture is primarily used for visual data analysis?",
                      options: [
                        "Recurrent Neural Networks (RNN)",
                        "Convolutional Neural Networks (CNN)",
                        "Feedforward Neural Networks (FNN)",
                        "Transformers"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which type of network maintains memory of previous inputs?",
                      options: [
                        "CNN",
                        "FNN",
                        "RNN",
                        "GAN"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which network solves the vanishing gradient problem in traditional RNNs?",
                      options: [
                        "CNN",
                        "LSTM",
                        "GAN",
                        "Autoencoder"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Generative Adversarial Networks (GANs) consist of:",
                      options: [
                        "Only a generator",
                        "Only a discriminator",
                        "A generator and a discriminator competing",
                        "Multiple generators without discriminators"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is the main function of an Autoencoder?",
                      options: [
                        "Sequence prediction",
                        "Image classification",
                        "Dimensionality reduction and feature learning",
                        "Voice generation"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which architecture relies entirely on attention mechanisms instead of RNNs or CNNs?",
                      options: [
                        "Autoencoder",
                        "Transformer",
                        "GAN",
                        "CNN"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which technique helps prevent overfitting by randomly deactivating neurons?",
                      options: [
                        "Batch Normalization",
                        "Dropout",
                        "Backpropagation",
                        "Activation Functions"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which applications use Transformers?",
                      options: [
                        "Speech-to-text only",
                        "Self-driving cars",
                        "Language translation and text generation",
                        "Image classification"
                      ],
                      correctAnswer: 2
                    }
                  ]
                  } ] },
                { id: '4_3', name: 'Fundamentals of Management and Entrepreneurship', progress: 0, icon: 'fas fa-chart-line', lessons: [ { id: '4_3_1', name: 'Principles of Management',  completed: false,videoUrl:"https://www.youtube.com/embed/a9XcKZKy2XQ?list=PLdinyWzDfipO128NtxVlTfpGgL5b079x5",quiz: [
                    {
                      question: "What is the primary purpose of management?",
                      options: [
                        "Planning company parties",
                        "Organizing financial frauds",
                        "Efficiently and effectively achieving organizational goals",
                        "Creating advertisements only"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which principle emphasizes the importance of specialization to increase efficiency?",
                      options: [
                        "Authority and Responsibility",
                        "Division of Work",
                        "Unity of Direction",
                        "Order"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "According to management principles, each employee should receive orders from:",
                      options: [
                        "Multiple supervisors",
                        "Customers",
                        "One superior only",
                        "Different departments simultaneously"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What does the principle of 'Unity of Direction' advocate?",
                      options: [
                        "Employees working under different plans",
                        "A single plan of action for all managers and workers",
                        "Allowing employees to create their own personal goals",
                        "No structured planning at all"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which principle suggests that employees must obey and respect rules and agreements?",
                      options: [
                        "Order",
                        "Equity",
                        "Discipline",
                        "Initiative"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "Which principle highlights the balance between authority concentrated at the top and distributed to lower levels?",
                      options: [
                        "Centralization and Decentralization",
                        "Stability of Tenure",
                        "Remuneration",
                        "Scalar Chain"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "What is the 'Scalar Chain' in management principles?",
                      options: [
                        "A chain of command from bottom to top",
                        "A random organizational structure",
                        "A clear line of authority from top to bottom",
                        "An informal chain of communication"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "The principle of 'Order' in management emphasizes:",
                      options: [
                        "Punishing late employees",
                        "Proper placement of people and materials",
                        "Increasing workload without structure",
                        "Random assignment of duties"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which principle encourages employees to generate ideas and show creativity?",
                      options: [
                        "Stability of Tenure",
                        "Initiative",
                        "Equity",
                        "Esprit de Corps"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What is the goal of 'Esprit de Corps' according to management principles?",
                      options: [
                        "Building individualism",
                        "Promoting team spirit and unity",
                        "Encouraging competition among employees",
                        "Reducing communication"
                      ],
                      correctAnswer: 1
                    }
                  ]
                   }, { id: '4_3_2', name: 'Startup Fundamentals',completed: false, videoUrl:"https://www.youtube.com/embed/AN4NwEGTt_I?list=PL_JQUKZbOIhHl6tCOIAxwiOAPyYudvCdD", quiz: [
                    {
                      question: "What defines a startup at its core?",
                      options: [
                        "A traditional large business",
                        "A company focusing on innovation and growth",
                        "A government organization",
                        "An established enterprise with steady profits"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Before launching, what crucial step must a startup complete to understand the market and competition?",
                      options: [
                        "Product Development",
                        "Funding",
                        "Market Research",
                        "Networking"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "What is a Minimum Viable Product (MVP)?",
                      options: [
                        "A fully finished final product",
                        "An early prototype to test the market and gather feedback",
                        "A luxury version of the product",
                        "A free sample with no relevance to feedback"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "Which of the following is NOT a common funding source for startups?",
                      options: [
                        "Bootstrapping",
                        "Venture Capital",
                        "Angel Investors",
                        "Bankruptcy Court"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Why is building a strong team important for a startup?",
                      options: [
                        "To reduce competition internally",
                        "To handle diverse business functions effectively",
                        "To impress venture capitalists only",
                        "To make marketing more expensive"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "What major challenge involves managing expenses and ensuring sufficient revenue generation?",
                      options: [
                        "Scaling",
                        "Cash Flow Management",
                        "Team Building",
                        "Networking"
                      ],
                      correctAnswer: 1
                    },
                    {
                      question: "A startup that focuses on solving societal or environmental problems is classified as:",
                      options: [
                        "Scalable Startup",
                        "Small and Medium Enterprise",
                        "Social Startup",
                        "Tech Startup"
                      ],
                      correctAnswer: 2
                    },
                    {
                      question: "At which stage does a startup usually stabilize its market position?",
                      options: [
                        "Idea Stage",
                        "Launch Stage",
                        "Growth Stage",
                        "Maturity Stage"
                      ],
                      correctAnswer: 3
                    },
                    {
                      question: "Which factor is crucial for attracting customers, investors, and partners to a startup?",
                      options: [
                        "Clear Vision",
                        "Random Marketing",
                        "Strict Hierarchy",
                        "Limited Communication"
                      ],
                      correctAnswer: 0
                    },
                    {
                      question: "Which of the following best describes scalable startups?",
                      options: [
                        "They aim for rapid growth and often seek venture capital funding",
                        "They operate at a local level with slow growth",
                        "They avoid technology and prefer manual processes",
                        "They do not require innovation"
                      ],
                      correctAnswer: 0
                    }
                  ]
                  } ] }
            ]
        }
    },

    // Quiz data
    subjectQuizzes: {},

    // Initialize database
    init() {
        // Load from localStorage if exists
        const storedProgress = localStorage.getItem('engineeringMateProgress');
        if (storedProgress) {
            this.userProgress = JSON.parse(storedProgress);
        } else {
            // Initialize progress for all subjects
            for (const yearId in this.courses) {
                this.courses[yearId].subjects.forEach(subject => {
                    if (!this.userProgress[subject.id]) {
                        this.userProgress[subject.id] = {
                            materialCompleted: false,
                            videoWatched: false,
                            quizScore: null,
                            progress: 0
                        };
                    }
                });
            }
            this.saveProgress();
        }

        // Initialize quizzes for each subject
        this.initializeQuizzes();
    },

    saveProgress() {
        localStorage.setItem('engineeringMateProgress', JSON.stringify(this.userProgress));
    },

    getSubjectProgress(subjectId) {
        return this.userProgress[subjectId] || {
            materialCompleted: false,
            videoWatched: false,
            quizScore: null,
            progress: 0
        };
    },

    updateSubjectProgress(subjectId, data) {
        if (!this.userProgress[subjectId]) {
            this.userProgress[subjectId] = {
                materialCompleted: false,
                videoWatched: false,
                quizScore: null,
                progress: 0
            };
        }

        // Update with new data
        Object.assign(this.userProgress[subjectId], data);

        // Calculate progress percentage
        let progressScore = 0;
        if (this.userProgress[subjectId].materialCompleted) progressScore += 33.33;
        if (this.userProgress[subjectId].videoWatched) progressScore += 33.33;
        if (this.userProgress[subjectId].quizScore !== null) progressScore += 33.33;

        this.userProgress[subjectId].progress = Math.round(progressScore);
        this.saveProgress();

        return this.userProgress[subjectId];
    },

    // Initialize quiz data for each subject
    initializeQuizzes() {
        // Generate quiz questions for each subject
        for (const yearId in this.courses) {
            this.courses[yearId].subjects.forEach(subject => {
                this.subjectQuizzes[subject.id] = this.generateQuizQuestions(subject.name);
            });
        }
    },

    // Generate 10 quiz questions based on subject name
    generateQuizQuestions(subjectName) {
        const questions = [];

        // Different question templates based on subject area
        const templates = {
            math: [
                { q: "Which of the following is a property of [X]?", options: ["Commutativity", "Reflexivity", "Transitivity", "Symmetry"] },
                { q: "What is the main application of [X] in engineering?", options: ["Data analysis", "Signal processing", "Structural design", "Circuit analysis"] },
                { q: "Which theorem is most closely associated with [X]?", options: ["Pythagoras' theorem", "Euler's theorem", "Gauss's theorem", "Stokes' theorem"] }
            ],
            programming: [
                { q: "Which data structure is most efficient for [X]?", options: ["Array", "Linked List", "Hash Table", "Binary Tree"] },
                { q: "What is the time complexity of the most efficient algorithm for [X]?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"] },
                { q: "Which programming paradigm is most associated with [X]?", options: ["Object-oriented", "Functional", "Procedural", "Event-driven"] }
            ],
            hardware: [
                { q: "Which component is essential for [X]?", options: ["CPU", "GPU", "RAM", "ALU"] },
                { q: "What protocol is commonly used in [X]?", options: ["TCP/IP", "HTTP", "USB", "HDMI"] },
                { q: "Which technology is most closely associated with [X]?", options: ["CMOS", "FPGA", "ASIC", "RISC"] }
            ],
            theory: [
                { q: "Who is considered the father of [X]?", options: ["Alan Turing", "John von Neumann", "Donald Knuth", "Claude Shannon"] },
                { q: "Which principle is fundamental to [X]?", options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"] },
                { q: "In what decade was the field of [X] established?", options: ["1940s", "1950s", "1960s", "1970s"] }
            ]
        };

        // Determine which template to use based on subject keywords
        let templateType = 'theory';
        if (subjectName.match(/math|algebra|calculus|equations|statistics/i)) {
            templateType = 'math';
        } else if (subjectName.match(/programming|data structure|algorithm|software|database|web/i)) {
            templateType = 'programming';
        } else if (subjectName.match(/hardware|digital|computer org|electrical|network/i)) {
            templateType = 'hardware';
        }

        // Generate 10 questions
        for (let i = 0; i < 10; i++) {
            // Pick a template
            const template = templates[templateType][i % templates[templateType].length];

            // Create question by replacing [X] with subject name or part of it
            const qText = template.q.replace('[X]', this.getRelevantSubjectTerm(subjectName));

            // Create question
            const question = {
                question: qText,
                options: [...template.options],
                correctAnswer: Math.floor(Math.random() * 4) // Random correct answer
            };

            // Shuffle options
            this.shuffleArray(question.options);

            questions.push(question);
        }

        return questions;
    },

    // Helper to get a relevant term from subject name
    getRelevantSubjectTerm(subjectName) {
        const parts = subjectName.split(/\s+and\s+|\s+/);
        if (parts.length > 2) {
            return parts[Math.floor(Math.random() * parts.length)];
        }
        return subjectName;
    },

    // Shuffle array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    // Generate course material
    getCourseContent(subjectId) {
        const subjectMap = {};
        for (const yearId in this.courses) {
            this.courses[yearId].subjects.forEach(subject => {
                subjectMap[subject.id] = subject.name;
            });
        }

        const subjectName = subjectMap[subjectId];
        return `
            <h3>Introduction to ${subjectName}</h3>
            <p>This course provides a comprehensive introduction to ${subjectName}, covering both theoretical concepts and practical applications. Students will learn the fundamental principles and develop skills necessary for advanced studies in this field.</p>

            <h3>Course Objectives</h3>
            <ul>
                <li>Understand the core principles of ${subjectName}</li>
                <li>Apply theoretical knowledge to solve practical problems</li>
                <li>Develop analytical and critical thinking skills</li>
                <li>Prepare for advanced studies in related areas</li>
            </ul>

            <h3>Key Topics</h3>
            <p>The course covers several important topics including:</p>
            <ol>
                <li>Fundamentals and basic concepts</li>
                <li>Theoretical frameworks and methodologies</li>
                <li>Problem-solving techniques</li>
                <li>Practical applications in engineering</li>
                <li>Current trends and future developments</li>
            </ol>

            <h3>Reading Materials</h3>
            <p>The following textbooks are recommended for this course:</p>
            <ul>
                <li>"Introduction to ${subjectName}" by John Smith</li>
                <li>"Advanced ${subjectName} for Engineers" by Emily Johnson</li>
                <li>"Modern ${subjectName}: Theory and Practice" by Michael Brown</li>
            </ul>

            <h3>Assessment</h3>
            <p>Your understanding of ${subjectName} will be assessed through:</p>
            <ul>
                <li>Regular assignments (30%)</li>
                <li>Mid-term examination (20%)</li>
                <li>Final project (20%)</li>
                <li>Final examination (30%)</li>
            </ul>

            <h3>Module 1: Core Concepts</h3>
            <p>This module introduces the fundamental concepts of ${subjectName}, establishing a strong foundation for the rest of the course. You will learn about the historical development of the field, key terminology, and basic principles that underpin all further studies.</p>

            <h3>Module 2: Analytical Methods</h3>
            <p>In this module, you will explore various analytical approaches used in ${subjectName}. The focus will be on developing problem-solving skills and applying theoretical knowledge to practical scenarios typical in engineering contexts.</p>

            <h3>Module 3: Applications and Case Studies</h3>
            <p>This module bridges theory and practice through real-world applications and case studies. You will examine how concepts from ${subjectName} are applied in different engineering domains and industry settings.</p>
        `;
    },

    // Get video URL for a subject
    getVideoUrl(subjectId) {
        // In a real application, this would return different videos for different subjects
        // For demo purposes, we'll use placeholder video URLs
        const videoIds = [
            "https://www.youtube.com/live/b-UZJVdLbXc?si=UGvYPHfQKbddJeHm", // Math placeholder
            "fKl2JW_qrso", // Programming placeholder
            "P9DQQFed7Ng", // Physics placeholder
            "0LII5gkKp-k", // Chemistry placeholder
            "9y4GpZHJlUw", // Networks placeholder
            "aircAruvnKk"  // ML/AI placeholder
        ];

        // Convert subject ID to a number for consistent video selection
        const numId = parseInt(subjectId.replace('_', ''));
        const videoId = videoIds[numId % videoIds.length];

        return `${videoId}`;
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    
    

    // Initialize database
DB.init();

// DOM elements
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const userGreeting = document.getElementById('userGreeting');
const userDisplayName = document.getElementById('userDisplayName');
const dashboardContent = document.getElementById('dashboardContent');
const yearSubjectsView = document.getElementById('yearSubjectsView');
const subjectDetailView = document.getElementById('subjectDetailView');
const backToDashboardBtn = document.getElementById('backToDashboardBtn');
const backToSubjectsBtn = document.getElementById('backToSubjectsBtn');
const yearTitle = document.getElementById('yearTitle');
const subjectsList = document.getElementById('subjectsList');
const subjectTitle = document.getElementById('subjectTitle');
const materialContent = document.getElementById('materialContent');
const lectureVideo = document.getElementById('lectureVideo');
const quizContent = document.getElementById('quizContent');
const loginBtn = document.getElementById('loginBtn');
const signupForm = document.getElementById('signupForm');
const backToLogin = document.getElementById('backToLogin');

signupbtn.addEventListener('click', function() {
    landingPage.style.display = 'none';
    loginPage.classList.add('hidden');
    signupPage.classList.remove('hidden');
});

backToLogin.addEventListener('click', function(e) {
    e.preventDefault();
    signupPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
});

signupForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value;

    if (username.length < 3) {
        alert("Username must be at least 3 characters.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    const email = `${username}@engineeringmate.com`;

    try {
        // Create the user
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        alert("✅ Successfully signed up! Please login now.");

        // 🛠 Hide signup page, show login page
        signupPage.classList.add('hidden');      // Hide Sign Up
        landingPage.style.display = 'none';       // Hide Landing
        loginPage.classList.remove('hidden');     // Show Login
        dashboardPage.classList.add('hidden');    // Hide Dashboard

        // Reset signup form
        signupForm.reset();
        // Save username to Firestore
        await db.collection('users').doc(user.uid).set({
            username: username,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Store username in localStorage (optional for greeting)
        localStorage.setItem('engineeringMateUsername', username);

        // alert("✅ Successfully signed up! Redirecting...");

        // // ✅ Now reload the page properly
        // window.location.reload();

    } catch (error) {
        alert("Signup failed: " + error.message);
    }
});





// Landing page elements
const landingPage = document.getElementById('landingPage');
const landingLoginBtn = document.getElementById('landingLoginBtn');

// Current state
let currentUser = null;
let currentYear = null;
let currentSubject = null;
let currentLesson = null;
let currentQuiz = {
questions: [],
currentQuestion: 0,
answers: [],
score: 0
};

// ON LOAD: Show landing, hide dashboard and login
landingPage.style.display = "block";
loginPage.classList.add('hidden');
dashboardPage.classList.add('hidden');
loginBtn.style.display = 'block';
logoutBtn.style.display = 'none';
userDisplayName.style.display = 'none';
document.querySelector('.user-profile img').style.display = 'none';

// Landing page login button brings up login
landingLoginBtn.addEventListener('click', function() {
landingPage.style.display = 'none';
loginPage.classList.remove('hidden');
dashboardPage.classList.add('hidden');
});

// Login button in header brings up login
loginBtn.addEventListener('click', function() {
landingPage.style.display = 'none';
loginPage.classList.remove('hidden');
dashboardPage.classList.add('hidden');
loginBtn.style.display = 'none';
logoutBtn.style.display = 'none';
userDisplayName.style.display = 'none';
document.querySelector('.user-profile img').style.display = 'none';
});

// Login form handler
loginForm.addEventListener('submit', function(e) {
e.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Find user
const email = `${username}@engineeringmate.com`;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      currentUser = {
        id: user.uid,
        username: username,
        name: username // You can later fetch real name from Firestore if needed
      };

      userGreeting.textContent = username;
      userDisplayName.textContent = username;

      // Show dashboard
      landingPage.style.display = 'none';
      loginPage.classList.add('hidden');
      dashboardPage.classList.remove('hidden');

      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'block';
      userDisplayName.style.display = 'inline';
      document.querySelector('.user-profile img').style.display = 'inline';
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});

logoutBtn.addEventListener('click', function () {
    firebase.auth().signOut().then(() => {
      currentUser = null;
      dashboardPage.classList.add('hidden');
      loginPage.classList.add('hidden');
      landingPage.style.display = 'block';
  
      loginForm.reset();
      loginBtn.style.display = 'block';
      logoutBtn.style.display = 'none';
      userDisplayName.style.display = 'none';
      document.querySelector('.user-profile img').style.display = 'none';
    });
  });
  
    // Course card click handler
    document.querySelector('.courses-grid').addEventListener('click', function(e) {
        const courseCard = e.target.closest('.course-card');
        if (courseCard) {
            const yearId = courseCard.dataset.year;
            showYearSubjects(yearId);
        }
    });

    // Back to dashboard button
    backToDashboardBtn.addEventListener('click', function() {
        yearSubjectsView.classList.add('hidden');
        dashboardContent.classList.remove('hidden');
    });

    // Back to subjects button
    backToSubjectsBtn.addEventListener('click', function() {
        subjectDetailView.classList.add('hidden');
        yearSubjectsView.classList.remove('hidden');
        document.getElementById('lessonsSection').classList.add('hidden');
        document.getElementById('lessonDetailView').classList.add('hidden');
    });

    // Tab switching
    document.querySelector('.tabs').addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-btn')) {
            const tabName = e.target.dataset.tab;

            // Update active tab button
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Show selected tab content
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            document.getElementById(`${tabName}Tab`).classList.remove('hidden');

            // Mark as completed based on tab
            if (currentLesson) {
                const progressData = {};
                if (tabName === 'materials') {
                    progressData.materialCompleted = true;
                } else if (tabName === 'video') {
                    progressData.videoWatched = true;
                }

                if (Object.keys(progressData).length > 0) {
                    DB.updateSubjectProgress(currentSubject.id, progressData);
                }
            }
        }
    });

    // Quiz navigation
    const prevQuestionBtn = document.getElementById('prevQuestionBtn');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    const questionCounter = document.getElementById('questionCounter');
    const submitQuizBtn = document.getElementById('submitQuizBtn');

    prevQuestionBtn.addEventListener('click', function() {
        if (currentQuiz.currentQuestion > 0) {
            currentQuiz.currentQuestion--;
            displayCurrentQuestion();
        }
    });

    nextQuestionBtn.addEventListener('click', function() {
        if (currentQuiz.currentQuestion < currentQuiz.questions.length - 1) {
            currentQuiz.currentQuestion++;
            displayCurrentQuestion();

            // Show submit button on last question
            if (currentQuiz.currentQuestion === currentQuiz.questions.length - 1) {
                submitQuizBtn.style.display = 'block';
            }
        }
    });

    submitQuizBtn.addEventListener('click', function() {
        // Calculate score
        let score = 0;
        currentQuiz.questions.forEach((question, index) => {
            const userAnswer = currentQuiz.answers[index];
            if (userAnswer === question.correctAnswer) {
                score++;
            }
        });

        currentQuiz.score = score;

        // Update progress in database
        DB.updateSubjectProgress(currentLesson.id, {
            quizScore: score
        });

        // Show results
        document.getElementById('quizScore').textContent = score;
        document.getElementById('quizResults').classList.remove('hidden');
        submitQuizBtn.style.display = 'none';

        // Disable quiz interaction
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.style.pointerEvents = 'none';
        });

        // Hide navigation buttons
        prevQuestionBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'none';
        questionCounter.style.display = 'none';
    });

    // Function to show subjects for a year
    function showYearSubjects(yearId) {
        currentYear = yearId;
        const yearData = DB.courses[yearId];

        // Update title
        yearTitle.textContent = `${yearData.name} Subjects`;

        // Clear and populate subjects list
        subjectsList.innerHTML = '';
        yearData.subjects.forEach(subject => {
            const subjectCard = document.createElement('div');
            subjectCard.className = 'subject-card';
            subjectCard.dataset.id = subject.id;

            subjectCard.innerHTML = `
                <div class="subject-header">
                    <h3><i class="${subject.icon}"></i> ${subject.name}</h3>
                </div>
                <div class="subject-content">
                    <div class="resource-list">
                        ${subject.lessons && subject.lessons.length ? subject.lessons.map(lesson => `<li><i class='fas fa-book-open resource-icon'></i> ${lesson.name}</li>`).join('') : '<li>No lessons available.</li>'}
                    </div>
                </div>
            `;

            // Add click event
            subjectCard.addEventListener('click', function() {
                showSubjectDetail(subject);
            });

            subjectsList.appendChild(subjectCard);
        });

        // Show year subjects view
        dashboardContent.classList.add('hidden');
        yearSubjectsView.classList.remove('hidden');
    }

    // Function to show subject details
    function showSubjectDetail(subject) {
        currentSubject = subject;

        // Update title
        subjectTitle.textContent = subject.name;

        // Hide tabs, show lessons list
        document.getElementById('lessonsSection').classList.remove('hidden');
        document.getElementById('lessonDetailView').classList.add('hidden');

        // Fill out the lessons list
        const lessonsList = document.getElementById('lessonsList');
        lessonsList.innerHTML = '';
        if(subject.lessons && subject.lessons.length > 0) {
            subject.lessons.forEach(lesson => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-book-open resource-icon"></i> ${lesson.name}`;
                li.style.cursor = 'pointer';
                li.onclick = () => showLessonDetail(lesson, subject);
                lessonsList.appendChild(li);
            });
        } else {
            // fallback if no lessons
            const li = document.createElement('li');
            li.textContent = 'No lessons available.';
            lessonsList.appendChild(li);
        }

        yearSubjectsView.classList.add('hidden');
        subjectDetailView.classList.remove('hidden');
    }

    // New: Show lesson detail handler
    function showLessonDetail(lesson, subject) {
        currentLesson = lesson;
        document.getElementById('lessonsSection').classList.add('hidden');
        document.getElementById('lessonDetailView').classList.remove('hidden');
        document.getElementById('lessonTitle').textContent = lesson.name;

        // Show material (use getCourseContent but put lesson name)
        // Load material content dynamically
        fetch(`materials/${lesson.id}.html`)
        .then(response => response.text())
        .then(data => {
            materialContent.innerHTML = data;
        })
        .catch(err => {
            materialContent.innerHTML = `<p>Material not available for this lesson.</p>`;
            console.error(`Failed to load material for ${lesson.id}:`, err);
        });

        // Set sample or related video (use previous random/sample mapping)
        // Set specific video for this lesson
        if (lesson.videoUrl) {
            lectureVideo.src = lesson.videoUrl;
        } else {
            lectureVideo.src = "";
        }

        // Load quiz for lesson (use the existing quiz generator pattern per lesson)
        loadQuiz(lesson.id, lesson.name);

        // Reset tab state
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.tab-btn[data-tab="materials"]').classList.add('active');
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
        document.getElementById('materialsTab').classList.remove('hidden');
    }

    // Function to load quiz for a subject
    function loadQuiz(lessonId, lessonName) {
        // Check if the current lesson has a custom quiz
        if (currentLesson.quiz && currentLesson.quiz.length > 0) {
            currentQuiz.questions = currentLesson.quiz;
        } else {
            // Fallback: generate random questions if no quiz provided
            currentQuiz.questions = DB.generateQuizQuestions(lessonName || 'Lesson');
        }
    
        currentQuiz.currentQuestion = 0;
        currentQuiz.answers = new Array(currentQuiz.questions.length).fill(null);
        currentQuiz.score = 0;
    
        // Reset quiz UI
        quizContent.innerHTML = '';
        submitQuizBtn.style.display = 'none';
        document.getElementById('quizResults').classList.add('hidden');
        prevQuestionBtn.style.display = 'block';
        nextQuestionBtn.style.display = 'block';
        questionCounter.style.display = 'block';
    
        // Create question elements
        currentQuiz.questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            questionDiv.dataset.index = index;
            if (index > 0) questionDiv.classList.add('hidden');
    
            questionDiv.innerHTML = `
                <h3>${question.question}</h3>
                <ul class="quiz-options">
                    ${question.options.map((option, optIndex) => `
                        <li class="quiz-option" data-value="${optIndex}">${option}</li>
                    `).join('')}
                </ul>
            `;
    
            // Add option click handlers
            questionDiv.querySelectorAll('.quiz-option').forEach(option => {
                option.addEventListener('click', function() {
                    const optionValue = parseInt(this.dataset.value);
                    currentQuiz.answers[index] = optionValue;
    
                    // Update selected state
                    questionDiv.querySelectorAll('.quiz-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    this.classList.add('selected');
                });
            });
    
            quizContent.appendChild(questionDiv);
        });
    
        // Display first question
        displayCurrentQuestion();
    }
    

    // Function to display current quiz question
    function displayCurrentQuestion() {
        // Hide all questions
        document.querySelectorAll('.quiz-question').forEach(q => {
            q.classList.add('hidden');
        });

        // Show current question
        const currentQuestionEl = document.querySelector(`.quiz-question[data-index="${currentQuiz.currentQuestion}"]`);
        if (currentQuestionEl) {
            currentQuestionEl.classList.remove('hidden');
            questionCounter.textContent = `Question ${currentQuiz.currentQuestion + 1} of ${currentQuiz.questions.length}`;

            // Update selected state
            const userAnswer = currentQuiz.answers[currentQuiz.currentQuestion];
            if (userAnswer !== null) {
                currentQuestionEl.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.classList.remove('selected');
                    if (parseInt(opt.dataset.value) === userAnswer) {
                        opt.classList.add('selected');
                    }
                });
            }
        }

        // Update button states
        prevQuestionBtn.disabled = currentQuiz.currentQuestion === 0;
        nextQuestionBtn.disabled = currentQuiz.currentQuestion === currentQuiz.questions.length - 1;

        // Show/hide submit button
        if (currentQuiz.currentQuestion === currentQuiz.questions.length - 1) {
            submitQuizBtn.style.display = 'block';
        } else {
            submitQuizBtn.style.display = 'none';
        }
    }

    // Add some CSS to style the tab buttons
    const style = document.createElement('style');
    style.textContent = `
        .tabs {
            display: flex;
            margin-bottom: 20px;
            border-bottom: 1px solid #ddd;
        }

        .tab-btn {
            padding: 10px 20px;
            background-color: #f9f9f9;
            border: none;
            border-bottom: 2px solid transparent;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s;
        }

        .tab-btn:hover {
            background-color: #e0e0e0;
        }

        .tab-btn.active {
            border-bottom: 2px solid var(--primary-color);
            color: var(--primary-color);
            background-color: #fff;
        }

        .tab-content {
            padding: 20px 0;
        }
    `;
    document.head.appendChild(style);
});

