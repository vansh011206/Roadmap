        const roadmap = [
            {
                phase: 1,
                title: "Web Development Basics",
                weeks: [
                    {
                        week: 1,
                        title: "HTML Foundations",
                        days: [
                            { range: "1-2", title: "HTML Basic Structure", topics: ["Learn HTML document structure", "Understand semantic tags", "Practice creating basic webpage layouts", "Exercises: Create simple pages with headings, paragraphs, lists"], daysCount: 2 },
                            { range: "3-4", title: "HTML Forms and Tables", topics: ["Master form elements", "Learn table creation", "Create interactive forms", "Exercises: Build contact forms, pricing tables"], daysCount: 2 },
                            { range: "5-6", title: "Advanced HTML Elements", topics: ["Explore multimedia tags", "Learn about semantic layout (header, nav, main, footer)", "Create a personal introduction page", "Exercises: Embed videos, create navigation menus"], daysCount: 2 },
                            { range: "7", title: "Project Day - Personal Introduction Page", topics: ["Combine all learned HTML skills", "Create a responsive personal webpage", "Include biography, skills, contact information"], daysCount: 1 }
                        ]
                    },
                    {
                        week: 2,
                        title: "CSS Fundamentals",
                        days: [
                            { range: "8-9", title: "CSS Basics and Selectors", topics: ["Learn CSS syntax", "Understand selectors (class, ID, element)", "Basic styling techniques", "Exercises: Style your personal page, create colorful layouts"], daysCount: 2 },
                            { range: "10-11", title: "CSS Box Model and Layout", topics: ["Learn padding, margin, border", "Understand block vs. inline elements", "Basic positioning techniques", "Exercises: Create multi-column layouts, card designs"], daysCount: 2 },
                            { range: "12-13", title: "Responsive Design Basics", topics: ["Learn media queries", "Create mobile-responsive designs", "Flexbox introduction", "Exercises: Make existing pages responsive"], daysCount: 2 },
                            { range: "14", title: "Project Day - Responsive Portfolio", topics: ["Create a fully responsive portfolio website", "Implement mobile and desktop versions", "Add smooth transitions and hover effects"], daysCount: 1 }
                        ]
                    },
                    {
                        week: 3,
                        title: "JavaScript Fundamentals (Part 1)",
                        days: [
                            { range: "15-17", title: "JavaScript Basics", topics: ["Variables and data types", "Operators", "Basic arithmetic and logic", "Exercises: Simple calculators, age converters"], daysCount: 3 },
                            { range: "18-20", title: "Control Structures", topics: ["Conditional statements (if-else)", "Loops (for, while)", "Switch statements", "Exercises: Number guessing games, basic algorithms"], daysCount: 3 },
                            { range: "21-23", title: "Functions and Scope", topics: ["Function declaration and expression", "Arrow functions", "Scope and closures", "Exercises: Utility function libraries"], daysCount: 3 }
                        ]
                    },
                    {
                        week: 4,
                        title: "JavaScript Fundamentals (Part 2)",
                        days: [
                            { range: "24-26", title: "DOM Manipulation Basics", topics: ["Selecting DOM elements", "Modifying element content", "Event listeners", "Exercises: Interactive buttons, dynamic content changers"], daysCount: 3 },
                            { range: "27-29", title: "Advanced DOM Interactions", topics: ["Form validation", "Dynamic UI updates", "Basic animations", "Exercises: Real-time form validators, interactive dashboards"], daysCount: 3 },
                            { range: "30", title: "Milestone Project - Interactive Web App", topics: ["Create a complete interactive web application", "Combine HTML, CSS, and JavaScript skills", "Example: Todo List App with full functionality"], daysCount: 1 }
                        ]
                    }
                ]
            },
            {
                phase: 2,
                title: "JavaScript Deep Dive",
                weeks: [
                    {
                        week: 5,
                        title: "Advanced JavaScript (Part 1)",
                        days: [
                            { range: "31-33", title: "Arrays and Iteration", topics: ["Array methods (`map`, `filter`, `reduce`)", "Iteration techniques", "Complex array manipulations", "Exercises: Data transformation challenges"], daysCount: 3 },
                            { range: "34-36", title: "Objects and JSON", topics: ["Object creation and manipulation", "JSON parsing", "Local storage", "Exercises: Personal data managers, config systems"], daysCount: 3 },
                            { range: "37-39", title: "Asynchronous JavaScript", topics: ["Promises", "Async/await", "Fetch API", "Exercises: Weather apps, data fetching challenges"], daysCount: 3 }
                        ]
                    },
                    {
                        week: 6,
                        title: "Advanced JavaScript (Part 2)",
                        days: [
                            { range: "40-42", title: "Error Handling and Advanced Concepts", topics: ["Try-catch blocks", "Error handling strategies", "Debugging techniques", "Exercises: Robust error management"], daysCount: 3 },
                            { range: "43-44", title: "Mini Project Weeks", topics: ["Build a comprehensive JavaScript application", "Implement advanced concepts learned", "Example: Real-time quiz application"], daysCount: 2 }
                        ]
                    }
                ]
            },
            {
                phase: 3,
                title: "Frontend Frameworks",
                weeks: [
                    {
                        week: 7,
                        title: "React.js Fundamentals (Part 1)",
                        days: [
                            { range: "45-50", title: "React Basics", topics: ["Component structure", "Props and state", "Basic hooks (`useState`)", "Exercises: Simple component libraries"], daysCount: 6 },
                            { range: "51-55", title: "Advanced React Hooks", topics: ["`useEffect`", "`useContext`", "Custom hooks", "Exercises: Complex state management"], daysCount: 5 }
                        ]
                    },
                    {
                        week: 8,
                        title: "React.js Fundamentals (Part 2)",
                        days: [
                            { range: "56-60", title: "React Router and Navigation", topics: ["Client-side routing", "Multi-page application structure", "Navigation patterns", "Project: Multi-page personal portfolio"], daysCount: 5 },
                            { range: "61-74", title: "Advanced React Projects", topics: ["State management libraries", "Complex application architecture", "Comprehensive project development", "Project: Full-featured web application (e.g., task manager, e-commerce dashboard)"], daysCount: 14 }
                        ]
                    }
                ]
            },
            {
                phase: 4,
                title: "Full-Stack Development",
                weeks: [
                    {
                        week: 9,
                        title: "Backend and Database (Part 1)",
                        days: [
                            { range: "75-90", title: "Node.js and Express", topics: ["Server setup", "Route creation", "Middleware understanding", "Project: Basic REST API"], daysCount: 16 },
                            { range: "91-105", title: "Database Integration", topics: ["MongoDB basics", "Mongoose ORM", "Database design", "Project: User management system"], daysCount: 15 }
                        ]
                    },
                    {
                        week: 10,
                        title: "Backend and Database (Part 2)",
                        days: [
                            { range: "106-120", title: "Full-Stack Integration", topics: ["Frontend-backend connection", "Authentication systems", "Deployment strategies", "Final Project: Complete web application with backend"], daysCount: 15 }
                        ]
                    }
                ]
            },
            {
                phase: 5,
                title: "Continuous Learning and Refinement",
                weeks: [
                    {
                        week: 11,
                        title: "Ongoing Development",
                        days: [
                            { range: "121-180", title: "Continuous Learning", topics: ["Open-source contributions", "Advanced algorithm challenges", "Technical interview preparation", "Portfolio enhancement", "Specialization in chosen web development area"], daysCount: 60 }
                        ]
                    }
                ]
            }
        ];

        // Render the roadmap dynamically
        function renderRoadmap() {
            const roadmapContainer = document.getElementById('roadmap');
            roadmap.forEach(phase => {
                const phaseDetails = document.createElement('details');
                phaseDetails.classList.add('phase');
                const summary = document.createElement('summary');
                summary.textContent = `Phase ${phase.phase}: ${phase.title}`;
                phaseDetails.appendChild(summary);
                phase.weeks.forEach(week => {
                    const weekDiv = document.createElement('div');
                    weekDiv.classList.add('week');
                    weekDiv.innerHTML = `<h3>Week ${week.week}: ${week.title}</h3>`;
                    week.days.forEach(day => {
                        const dayDiv = document.createElement('div');
                        dayDiv.classList.add('day-range');
                        const checkboxId = `checkpoint-p${phase.phase}-w${week.week}-r${day.range.replace(' ', '-')}`;
                        dayDiv.innerHTML = `
                            <h4>Days ${day.range}: ${day.title}</h4>
                            <ul>
                                ${day.topics.map(topic => `<li>${topic}</li>`).join('')}
                            </ul>
                            <label class="checkbox-label">
                                <input type="checkbox" id="${checkboxId}" data-days="${day.daysCount}">
                                Mark as Completed
                            </label>
                        `;
                        weekDiv.appendChild(dayDiv);
                    });
                    phaseDetails.appendChild(weekDiv);
                });
                roadmapContainer.appendChild(phaseDetails);
            });
        }

        // Update progress bar and completed states
        function updateProgress() {
            const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
            const completedDays = Array.from(checkedBoxes).reduce((sum, box) => sum + parseInt(box.dataset.days), 0);
            const progress = (completedDays / 180) * 100; // Total days = 180
            document.querySelector('.progress').style.width = `${progress}%`;
            document.getElementById('progress-text').textContent = `${Math.round(progress)}% completed`;
            document.querySelectorAll('.day-range').forEach(day => {
                const checkbox = day.querySelector('input[type="checkbox"]');
                if (checkbox.checked) {
                    day.classList.add('completed');
                } else {
                    day.classList.remove('completed');
                }
            });
        }

        // Handle checkbox changes and save to localStorage
        function handleCheckboxChange(event) {
            const checkbox = event.target;
            const id = checkbox.id;
            let completedRanges = JSON.parse(localStorage.getItem('completedRanges')) || [];
            if (checkbox.checked) {
                if (!completedRanges.includes(id)) completedRanges.push(id);
            } else {
                completedRanges = completedRanges.filter(rangeId => rangeId !== id);
            }
            localStorage.setItem('completedRanges', JSON.stringify(completedRanges));
            updateProgress();
        }

        // Initialize the app
        function init() {
            renderRoadmap();
            const completedRanges = JSON.parse(localStorage.getItem('completedRanges')) || [];
            completedRanges.forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox) checkbox.checked = true;
            });
            updateProgress();
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', handleCheckboxChange);
            });
            document.getElementById('next-task-btn').addEventListener('click', () => {
                const unchecked = document.querySelector('input[type="checkbox"]:not(:checked)');
                if (unchecked) {
                    unchecked.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    alert('All tasks completed!');
                }
            });
        }

        // Start the app when the page Farewells
        window.onload = init;