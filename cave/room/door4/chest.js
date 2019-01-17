const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`

    Congratulations! You found the treasure.

    Now, you do know the password don't you?

`)

rl.question('Enter password: ', answer => {
    if (answer === 'WOOF') {
        console.log(`
        

                            _.--.
                        _.-'_:-'||
                    _.-'_.-::::'||
               _.-:'_.-::::::'  ||
             .'\`-.-:::::::'     ||
            /.'\`;|:::::::'      ||_
           ||   ||::::::'     _.;._'-._
           ||   ||:::::'  _.-!oo @.!-._'-.
           \\'.  ||:::::.-!()oo @!()@.-'_.|
            '.'-;|:.-'.&$@.& ()$%-'o.'\\U||
              \`>'-.!@%()@'@_%-'_.-o _.|'||
               ||-._'-.@.-'_.-' _.-o  |'||
               ||=[ '-._.-\\U/.-'    o |'||
               || '-.]=|| |'|      o  |'||
               ||      || |'|        _| ';
               ||      || |'|    _.-'_.-'
               |'-._   || |'|_.-'_.-'
                '-._'-.|| |' \`_.-'
                    '-.||_/.-'


            Congratulations! You are now rich


        `);
    } else {
        console.log(`
        
    ACCESS DENIED.
    Try searching for the password

        `);
    }

    rl.close();
});