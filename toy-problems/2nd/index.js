function calculateDemeritPoints() {
    const speedLimit = 70;
    const speedInput = document.getElementById("speedInput").value;

    if (speedInput === "") {
        alert("Please enter a valid speed.");
        return;
    }

    const speed = parseInt(speedInput);

    if (speed < speedLimit) {
        document.getElementById("result").textContent = "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        document.getElementById("result").textContent = `Points: ${demeritPoints}`;

        if (demeritPoints > 12) {
            document.getElementById("result").textContent = "License suspended";
        }
    }
}