const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('✅ Welcome to Calculator');

function askQuestion(query) {
    return new Promise(resolve => readline.question(query, ans => resolve(ans)));
}

async function calculator() {
    while (true) {
        console.log('\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit');
        let choice = parseInt(await askQuestion('Enter your choice: '));

        if (choice >= 1 && choice <= 4) {
            let num1 = parseFloat(await askQuestion('Enter num1: '));
            let num2 = parseFloat(await askQuestion('Enter num2: '));

            if (choice === 1) {
                console.log(`✅ Sum = ${num1 + num2}`);
            } else if (choice === 2) {
                console.log(`✅ Difference = ${num1 - num2}`);
            } else if (choice === 3) {
                console.log(`✅ Product = ${num1 * num2}`);
            } else if (choice === 4) {
                if (num2 === 0) {
                    console.log("❌ Cannot divide by zero.");
                } else {
                    console.log(`✅ Division = ${Math.floor(num1 / num2)}`);
                }
            }
        } else if (choice === 5) {
            console.log("👋 Exiting...");
            readline.close();
            break;
        } else {
            console.log("❌ Invalid choice, try again.");
        }
    }
}

calculator();
