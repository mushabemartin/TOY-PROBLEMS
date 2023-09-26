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