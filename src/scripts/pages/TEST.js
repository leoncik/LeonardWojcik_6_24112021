export function displayLog() {
    console.log('JE SUIS UN MESSAGE DE TEST');
}

export function displayAnotherLog() {
    console.log('Deuxième fonction');
}

export async function appel() {
    const call = await displayLog();
    console.log('Message supplémentaire');
    console.log(call);
}
