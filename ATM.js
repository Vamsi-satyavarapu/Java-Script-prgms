const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => readline.question(question, ans => resolve(ans)));
}

async function startATM() {
  console.log("🏧 WELCOME TO ATM");

  let total = 10000;
  const correctPin = 1234;
  let pin = parseInt(await ask('ENTER YOUR PIN: '));
  let userExist = false;

  // Check if PIN is valid
  if (pin === correctPin) {
    console.log('✅ User authenticated');
    userExist = true;
  }

  if (!userExist) {
    console.log('❌ Invalid PIN. User does not exist.');
    readline.close();
    return;
  }

  // Menu loop
  while (true) {
    console.log("\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");
    let choice = parseInt(await ask('Enter your choice: '));

    if (choice === 1) {
      console.log("💰 Your balance is: ₹" + total);
    } else if (choice === 2) {
      let dep = parseInt(await ask('Enter amount to deposit: ₹'));
      if (dep > 0) {
        total += dep;
        console.log(`✅ ₹${dep} deposited. New balance: ₹${total}`);
      } else {
        console.log('❌ Invalid deposit amount.');
      }
    } else if (choice === 3) {
      let draw = parseInt(await ask('Enter amount to withdraw: ₹'));
      if (draw > total) {
        console.log('❌ Insufficient balance.');
      } else if (draw > 0) {
        total -= draw;
        console.log(`✅ ₹${draw} withdrawn. New balance: ₹${total}`);
      } else {
        console.log('❌ Invalid withdrawal amount.');
      }
    } else if (choice === 4) {
      console.log('👋 Thank you for using the ATM.');
      break;
    } else {
      console.log('❌ Invalid choice.');
    }
  }

  readline.close();
}

startATM();
