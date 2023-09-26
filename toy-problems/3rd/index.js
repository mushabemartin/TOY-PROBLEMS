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

    const resultText = `Gross Salary: ${grossSalary}<br>
                        PAYE Deduction: ${payeDeduction}<br>
                        NHIF Deduction: ${nhifDeduction}<br>
                        NSSF Deduction: ${nssfDeduction}<br>
                        Net Salary: ${netSalary}`;

    document.getElementById("result").innerHTML = resultText;
}