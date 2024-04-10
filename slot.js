import { config } from "./configuration.js";
class Slot {
    constructor(config) {
        this.reelsCount = config.reelsCount;
        this.rowsCount = config.rowsCount;
        this.symbols = config.symbols;
        this.lines = config.lines;
        this.reels = config.reels;
    }
    spin(spins = 1) {
        console.log("---------GAME START---------");
        let iteration = 0;
        let totalPayout = 0;
        while (iteration < spins) {
            console.log("SPIN NUMBER: #", iteration + 1);
            let currentScreen = [];
            for (let i = 0; i < 5; i++) {
                currentScreen[i] = this.reels[i].slice(0, 3);
            }
            let spinPayout = 0;
            let payLines = [];
            for (const line of this.lines) {
                let matchCount = 0;
                let winSymbol = 0;
                for (let i = 0; i < line.length - 1; i++) {
                    if (currentScreen[i][line[i]] === currentScreen[i + 1][line[i + 1]]) {
                        matchCount++;
                        if (!winSymbol)
                            winSymbol = currentScreen[i][line[i]];
                    }
                }
                if (matchCount && this.symbols[winSymbol][matchCount] !== 0) {
                    spinPayout += this.symbols[winSymbol][matchCount];
                    payLines.push(line);
                }
            }
            console.log("---------------------");
            console.log("SPIN ITERATION RESULT");
            console.log(spinPayout ? `Win, pay is: $${spinPayout}` : "No win");
            console.log("Pay lines: ", payLines);
            this.printBoard(currentScreen);
            console.log("---------------------");
            totalPayout += spinPayout;
            iteration++;
            console.log("---------------------");
        }
        console.log(`Total payout: $${totalPayout}`);
        console.log("Spins: ", spins);
        return { payout: totalPayout, win: !!totalPayout };
    }
    printBoard(currentScreen) {
        for (let i = 0; i < 3; i++) {
            console.log(currentScreen[0][i], currentScreen[1][i], currentScreen[2][i], currentScreen[3][i], currentScreen[4][i]);
        }
    }
}
const slot = new Slot(config);
slot.spin(2);
