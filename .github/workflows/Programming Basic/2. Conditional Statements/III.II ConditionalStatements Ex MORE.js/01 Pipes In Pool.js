function pipesinPool(V, P1, P2, H) {
    V = Number(V);
    P1 = Number(P1);
    P2 = Number(P2);
    H = Number(H);
    

let P1full = P1 * H;
let P2full = P2 * H;



if ((P1full + P2full) <= V) {
   
let fullpoolperc = (P1full + P2full) / V * 100;
let Pipe1percent = P1full / (P1full + P2full) * 100;
let Pipe2percent = P2full / (P1full + P2full) * 100;

    console.log(`The pool is ${fullpoolperc.toFixed(2)}% full. Pipe 1: ${Pipe1percent.toFixed(2)}%. Pipe 2: ${Pipe2percent.toFixed(2)}%.`);

}
else
{
    let Over = (P1full + P2full) - V;

console.log(`For ${H} hours the pool overflows with ${Over} liters.`);

}


}
pipesinPool(1000, 100, 120, 3);
pipesinPool(100, 100, 100, 2.5);



function pipesinPool(input) {
    V = Number(input.shift());
    P1 = Number(input.shift());
    P2 = Number(input.shift());
    H = Number(input.shift());



let P1full = P1 * H;
let P2full = P2 * H;
let HV = H * (P1 + P2);

let fullpool = HV / V * 100;
let Pipe1percent = P1full / (P1full + P2full) * 100;
let Pipe2percent = P2full / (P1full + P2full) * 100;



if (HV <= V) {
   
    console.log(`The pool is ${fullpool.toFixed(2)}% full. Pipe 1: ${Pipe1percent.toFixed(2)}%. Pipe 2: ${Pipe2percent.toFixed(2)}%.`);

}
else
{
    let Over = HV - V;

console.log(`For ${H} hours the pool overflows with ${Over} liters.`);

}


}


