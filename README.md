README.md
# Toy-problems
# 1ST toy problem
### Student Grade Generator

This is a simple web application that calculates and displays a student's grade based on the provided marks. The grading scale is as follows:
- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40

#### How to Use

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in your web browser.

3. Enter the student's marks (between 0 and 100) in the input field.

4. Click the "Calculate Grade" button.

5. The application will display the student's grade based on the input marks.

#### Code

html
<!DOCTYPE html>
<html>
<head>
    <title>Student Grade Generator</title>
</head>
<body>
    <h1>Student Grade Generator</h1>
    <p>Enter student's marks (between 0 and 100):</p>
    <input type="number" id="marksInput">
    <button onclick="calculategrade()">Calculate Grade</button>
    <p id="result"></p>

    <script>
        function calculateGrade() {
            const marksInput = document.getElementById("marksInput").value;

            if (marksInput === "") {
                alert("Please enter a valid mark.");
                return;
            }

            const marks = parseFloat(marksInput);

            if (marks >= 0 && marks <= 100) {
                let grade = "";

                if (marks > 79) {
                    grade = "A";
                } else if (marks >= 60) {
                    grade = "B";
                } else if (marks >= 50) {
                    grade = "C";
                } else if (marks >= 40) {
                    grade = "D";
                } else {
                    grade = "E";
                }

                document.getElementById("result").textContent = `The student's grade is: ${grade}`;
            } else {
                alert("Invalid input. Mark should be between 0 and 100.");
            }
        }
    </script>
</body>
</html>

Feel free to use and modify this code for your needs

# 2ND Toy problem

*HTML (`index.html`):*

html
<!DOCTYPE html>
<html>
<head>
    <title>Demerit Points Calculator</title>
</head>
<body>
    <h1>Demerit Points Calculator</h1>
    <p>Enter the car's speed:</p>
    <input type="number" id="speedInput">
    <button onclick="calculateDemeritPoints()">Check Speed</button>
    <p id="result"></p>

    <script src="calculateDemeritPoints.js"></script>
</body>
</html>


*JavaScript (`calculateDemeritPoints.js`):*

javascript
function calculateDemeritPoints() {
    const speedLimit = 70;
    const speedInput = parseFloat(document.getElementById("speedInput").value);

    if (isNaN(speedInput)) {
        alert("Please enter a valid speed.");
        return;
    }

    let demeritPoints = 0;

    if (speedInput >= speedLimit) {
        demeritPoints = Math.floor((speedInput - speedLimit) / 5);

        if (demeritPoints > 12) {
            document.getElementById("result").textContent = "License suspended";
        } else {
            document.getElementById("result").textContent = `Points: ${demeritPoints}`;
        }
    } else {
        document.getElementById("result").textContent = "Ok";
    }
}


*README.md:*

markdown
# Demerit Points Calculator

This is a simple web application for calculating demerit points for a car's speed based on the provided rules.

## How to Use

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in your web browser.

3. Enter the car's speed in the input field labeled "Enter the car's speed".

4. Click the "Check Speed" button.

5. The application will calculate and display the demerit points based on the provided rules.

6. If the driver accumulates more than 12 points, the application will display "License suspended".

7. If the driver has 12 points or fewer, it will display "Points: X", where X is the number of demerit points.

## Rules

- If the speed is less than 70, it will print "Ok".
- For every 5 km/h above the speed limit (70), it will give the driver one demerit point.
- If the driver gets more than 12 points, it will print "License suspended".


This program calculates demerit points based on the car's speed, and the README explains how to use it. Make sure that the JavaScript file (`calculateDemeritPoints.js`)
is in the same directory as the HTML file (`index.html`) or provide the correct path if it's in a different directory.



3RD Toy problem
*HTML (`index.html`):*

html
<!DOCTYPE html>
<html>
<head>
    <title>Net Salary Calculator</title>
</head>
<body>
    <h1>Net Salary Calculator</h1>
    <p>Enter your basic salary:</p>
    <input type="number" id="basicSalaryInput">
    <p>Enter any benefits (if applicable):</p>
    <input type="number" id="benefitsInput">
    <button onclick="calculateNetSalary()">Calculate Net Salary</button>
    <p id="result"></p>

    <script src="calculateNetSalary.js"></script>
</body>
</html>


*JavaScript (`calculateNetSalary.js`):*

javascript
function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById("basicSalaryInput").value);
    const benefits = parseFloat(document.getElementById("benefitsInput").value);

    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numbers for basic salary and benefits.");
        return;
    }

    // Constants based on the provided tax rates
    const PAYE_RATES = [
        { range: [0, 24000], rate: 0.1 },
        { range: [24001, 32333], rate: 0.25 },
        { range: [32334, 41567], rate: 0.3 },
        { range: [41568, 70769], rate: 0.32 },
        { range: [70770, Infinity], rate: 0.35 },
    ];

    const NHIF_RATES = {
        lowerLimit: 0,
        upperLimit: 5999,
        rate: 150,
    };

    const NSSF_EMPLOYEE_RATE = 0.06; // 6% for NSSF employee contribution

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate NHIF deduction
    let nhifDeduction = NHIF_RATES.rate;
    if (grossSalary >= NHIF_RATES.lowerLimit && grossSalary <= NHIF_RATES.upperLimit) {
        nhifDeduction = NHIF_RATES.rate;
    }

    // Calculate NSSF deduction
    const nssfDeduction = grossSalary * NSSF_EMPLOYEE_RATE;

    // Calculate PAYE deduction
    let payeDeduction = 0;
    for (const rate of PAYE_RATES) {
        if (grossSalary >= rate.range[0] && grossSalary <= rate.range[1]) {
            payeDeduction = (grossSalary - rate.range[0]) * rate.rate;
            break;
        }
    }

    // Calculate net salary
    const netSalary = grossSalary - (payeDeduction + nhifDeduction + nssfDeduction);

    document.getElementById("result").innerHTML = `Gross Salary: ${grossSalary}<br>
                        PAYE Deduction: ${payeDeduction}<br>
                        NHIF Deduction: ${nhifDeduction}<br>
                        NSSF Deduction: ${nssfDeduction}<br>
                        Net Salary: ${netSalary}`;
}


*README.md:*

markdown
# Net Salary Calculator

This is a simple web application for calculating an individual's net salary based on the provided tax rates from KRA, NHIF, and NSSF.

## How to Use

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in your web browser.

3. Enter your basic salary in the input field labeled "Enter your basic salary".

4. If applicable, enter any benefits in the input field labeled "Enter any benefits".

5. Click the "Calculate Net Salary" button.

6. The application will display the gross salary, PAYE deduction, NHIF deduction, NSSF deduction, and net salary based on the provided inputs.

This program calculates an individual's net salary based on the provided tax rates, and the README explains how to use it. Make sure that the JavaScript file (`calculateNetSalary.js`) 
is in the same directory as the HTML file (`index.html`) or provide the correct path if it's in a different directory.
