window.onload = function () {

    const isHomePage = window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/");

    if (isHomePage) {
        alert("Welcome to Health & Fitness Tracker! Let's get healthy together!");
    }
};

const websiteName = "Health Tracker";
let userCount = 1500;
const isPremium = false;

const welcomeMessage = "Hello, " + websiteName + " user!";
const stepsPercentage = userCount % 10000;

userCount++;
let workoutCount = 10;
workoutCount--;

function showWelcome() {
    console.log(welcomeMessage);
}

function calculateCalories(steps, weight) {
    return steps * 0.04 * weight;
}

showWelcome();
console.log("Estimated calories burned:", calculateCalories(5000, 70));

const randomHealthScore = Math.floor(Math.random() * 10) + 1;

if (randomHealthScore > 7) {
    console.log("Great health score! Keep it up!");
} else if (randomHealthScore > 4) {
    console.log("Good health score! Room for improvement.");
} else {
    console.log("Let's work on improving your health score!");
}



const fitnessTips = [
    "Stay hydrated during workouts",
    "Get at least 7 hours of sleep",
    "Warm up before exercising",
    "Mix cardio and strength training",
    "Listen to your body"
];

document.addEventListener('DOMContentLoaded', function () {
    const isHomePage = window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/");

    if (isHomePage) {
        const tipsList = document.createElement('div');
        tipsList.className = 'elegant-tips';
        tipsList.innerHTML = `
            <h3 class="tips-header">Wellness Guide</h3>
            <ul class="tips-list">
                ${fitnessTips.map(tip => `
                <li class="tip-item">
                    <span class="bullet-point"></span>
                    <span class="tip-text">${tip}</span>
                </li>
                `).join('')}
            </ul>
            `;
        document.querySelector('section').appendChild(tipsList);
    }
});

const workoutTypes = ["Running", "Cycling", "Swimming", "Yoga", "Weight Training"];
console.log("Current workout types:", workoutTypes);

workoutTypes.push("Pilates");
console.log("Updated workout types:", workoutTypes);


document.addEventListener('DOMContentLoaded', function () {

    const header = document.querySelector('header h1');
    if (header) header.textContent += " - Your Wellness Journey";

    const section = document.querySelector('section');
    if (section) {
        section.style.backgroundColor = '#f0fff0';
        section.style.borderRadius = '15px';
    }

    const fitnessImage = document.querySelector('section img');
    if (fitnessImage) {
        fitnessImage.alt = "Fitness motivation image";
        fitnessImage.title = "Stay active!";
    }

    const contactButton = document.querySelector('footer');
    if (contactButton) {
        contactButton.addEventListener('click', function () {
            console.log("Footer clicked! Consider adding a contact link here.");
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = '#4CAF50';
        });
        link.addEventListener('mouseout', function () {
            this.style.color = '';
        });
    });
});

function generateRandomExercise() {
    const exercises = [
        "30 Pushups",
        "5 Minute Plank",
        "20 Squats",
        "15 Burpees",
        "10 Pull-ups",
        "1 Minute Wall Sit",
        "20 Lunges (each leg)",
        "50 Jumping Jacks",
        "30 Second Handstand",
        "10 Box Jumps"
    ];

    const randomIndex = Math.floor(Math.random() * exercises.length);
    const randomExercise = exercises[randomIndex];

    const out = document.getElementById('randomOutput');
    if (out) out.innerHTML = `Try this exercise: <strong>${randomExercise}</strong>`;
}

function compareSteps() {
    const s1 = parseInt(document.getElementById('steps1').value);
    const s2 = parseInt(document.getElementById('steps2').value);
    let result = "";

    if (isNaN(s1) || isNaN(s2)) {
        alert("Please enter values in both fields.");
        return;
    }

    if (s1 > s2) {
        result = "Day 1 has more steps than Day 2.";
    } else if (s1 < s2) {
        result = "Day 2 has more steps than Day 1.";
    } else {
        result = "Both days have the same number of steps.";
    }

    const out = document.getElementById('comparisonResult');
    if (out) out.innerText = result;
}

const exercises = JSON.parse(localStorage.getItem('exercises')) || ["Pushups", "Squats", "Lunges"];
function updateExerciseList() {
    const ul = document.getElementById("exerciseList");
    if (!ul) return;
    ul.innerHTML = "";
    exercises.forEach((item, index) => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.margin = "5px 0";
        li.style.padding = "8px";
        li.style.backgroundColor = "#f8f9fa";
        li.style.borderRadius = "4px";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `exercise-${index}`;
        checkbox.style.marginRight = "10px";
        checkbox.style.cursor = "pointer";

        const label = document.createElement("label");
        label.htmlFor = `exercise-${index}`;
        label.textContent = item;
        label.style.cursor = "pointer";
        label.style.flexGrow = "1";

        li.appendChild(checkbox);
        li.appendChild(label);
        ul.appendChild(li);
    });
    localStorage.setItem('exercises', JSON.stringify(exercises));
}

function deleteSelectedExercises() {
    const checkboxes = document.querySelectorAll('#exerciseList input[type="checkbox"]:checked');
    const indexesToDelete = Array.from(checkboxes).map(checkbox =>
        parseInt(checkbox.id.split('-')[1])
    ).sort((a, b) => b - a);

    indexesToDelete.forEach(index => {
        exercises.splice(index, 1);
    });

    updateExerciseList();
}

function addExercise() {
    const input = document.getElementById("newExercise");
    if (!input) return;
    const newEx = input.value.trim();
    if (newEx) {
        exercises.push(newEx);
        updateExerciseList();
        input.value = "";
    }
}

function addExercise() {
    const input = document.getElementById("newExercise");
    if (!input) return;
    const newEx = input.value.trim();
    if (newEx) {
        exercises.push(newEx);
        updateExerciseList();
        input.value = "";
    }
}
document.addEventListener('DOMContentLoaded', function () {

    const profileData = JSON.parse(localStorage.getItem('profileData')) || {
        name: "John Doe",
        age: 28,
        email: "john.doe@example.com",
        logins: 0,
        usage: 0
    };

    profileData.logins++;
    localStorage.setItem('profileData', JSON.stringify(profileData));

    document.getElementById('nameInput').value = profileData.name;
    document.getElementById('ageInput').value = profileData.age;
    document.getElementById('emailInput').value = profileData.email;
    document.getElementById('loginCount').textContent = profileData.logins;
    document.getElementById('usageCount').textContent = profileData.usage;

    const editBtn = document.getElementById('editProfileBtn');
    const saveBtn = document.getElementById('saveProfileBtn');
    const inputs = document.querySelectorAll('.form-control');

    editBtn.addEventListener('click', function () {
        inputs.forEach(input => input.disabled = false);
        editBtn.style.display = 'none';
        saveBtn.style.display = 'inline-block';
    });

    saveBtn.addEventListener('click', function () {

        const updatedData = {
            name: document.getElementById('nameInput').value,
            age: document.getElementById('ageInput').value,
            email: document.getElementById('emailInput').value,
            logins: profileData.logins,
            usage: profileData.usage + 1
        };

        localStorage.setItem('profileData', JSON.stringify(updatedData));

        inputs.forEach(input => input.disabled = true);
        saveBtn.style.display = 'none';
        editBtn.style.display = 'inline-block';

        document.getElementById('usageCount').textContent = updatedData.usage;

        alert('Profile updated successfully!');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    updateExerciseList();



});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert(`Thanks for your message, ${name}! We'll contact you soon.`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
