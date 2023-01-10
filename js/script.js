console.log('---------- avec une seule boucle')
let line = 6
let iteraction = 0

do {
    console.log('*'.repeat(iteraction + 1)); 
    iteraction++
} while (iteraction != line);



console.log('---------- avec deux boucles')
for (let i = 0; i < line; i++) {
    let current_line = '';
    for (let j = 0; j <= i; j++) {
        current_line += '*';
    }
    console.log(current_line);
}