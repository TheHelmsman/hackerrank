'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    // console.log(scores);
    let highest = scores[0];
    let lowest = scores[0];
    let highestBeat = 0;
    let lowestBeat = 0;
    for (let i = 1; i < scores.length; i++) {
        if (highest < scores[i]) {
            highest = scores[i];
            highestBeat++;
        }
        if (lowest > scores[i]) {
            lowest = scores[i];
            lowestBeat++;
        }
    }
    return new Array(highestBeat,lowestBeat);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
