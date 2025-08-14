const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => readline.question(question, ans => resolve(ans)));
}

async function startReservation() {
    console.log('✅ Welcome to Train Ticket Reservation');

    while (true) {
        console.log('\n1. One AC\n2. Two AC\n3. Sleeper\n4. General\n5. Exit');
        let choice = parseInt(await ask('Enter your choice: '));

        if (choice === 1 || choice === 2) {
            let total = 15;
            console.log(`Available Tickets: ${total}`);
            let tkt = parseInt(await ask('Enter no. of tickets: '));

            if (tkt <= total) {
                console.log(`🎟️ Booking confirmed: ${tkt} tickets`);
                let rem = total - tkt;
                console.log(`Remaining tickets: ${rem}`);
            } else {
                console.log('❌ Not available');
                break;
            }
        } 
        
        else if (choice === 3) {
            let upper = 10, middle = 10, down = 10;
            console.log('Sleeper Options:\n1. Upper\n2. Middle\n3. Lower');
            let ch = parseInt(await ask('Choose your option: '));

            let type = "", available = 0;
            if (ch === 1) { type = "Upper"; available = upper; }
            else if (ch === 2) { type = "Middle"; available = middle; }
            else if (ch === 3) { type = "Lower"; available = down; }
            else {
                console.log("❌ Invalid sleeper option");
                continue;
            }

            console.log(`Available tickets in ${type}: ${available}`);
            let count = parseInt(await ask(`Enter number of ${type} tickets: `));

            if (count <= available) {
                console.log(`✅ ${type} tickets confirmed: ${count}`);
            } else {
                console.log(`❌ Not enough tickets in ${type}`);
            }
        } 
        
        else if (choice === 4) {
            let gen = 100;
            console.log(`Available General Tickets: ${gen}`);
            let gtkt = parseInt(await ask('Enter number of tickets: '));

            if (gtkt <= gen) {
                console.log(`✅ Ticket confirmed: ${gtkt}`);
                console.log(`Remaining: ${gen - gtkt}`);
            } else {
                console.log('❌ Not available');
            }
        } 
        
        else if (choice === 5) {
            console.log("👋 Exiting reservation system...");
            break;
        } 
        
        else {
            console.log('❌ Invalid option. Try again.');
        }
    }

    readline.close();
}

startReservation();
