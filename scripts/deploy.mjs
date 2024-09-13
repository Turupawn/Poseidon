import('../circomlibjs/src/poseidon_gencontract.js').then(
    ({ createCode }) => {
        console.log("Poseidon bytecode:");
        const output = createCode(2);
        console.log(output);
    }
)