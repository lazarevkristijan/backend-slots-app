import { config } from "./configuration.js";
class Slot {
    constructor(config) {
        this.reelsCount = config.reelsCount;
        this.rowsCount = config.rowsCount;
        this.symbols = config.symbols;
        this.lines = config.lines;
        this.reels = config.reels;
    }
    spin() {
        let currentScreen = [];
        for (let i = 0; i < 5; i++) {
            currentScreen[i] = this.reels[i].slice(0, 3);
        }
        let payout = 0;
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
            if (!matchCount || this.symbols[winSymbol][matchCount] === 0) {
                console.log("No win");
            }
            else {
                // Optionally show payout for each line
                // console.log("Pay is: ", this.symbols[winSymbol][matchCount])
                payout += this.symbols[winSymbol][matchCount];
                payLines.push(line);
            }
        }
        console.log("Pay lines: ", payLines);
        console.log("Spin payout: ", payout);
        this.printBoard(currentScreen);
        return { payout: payout, win: !!payout };
    }
    printBoard(currentScreen) {
        for (let i = 0; i < 3; i++) {
            console.log(currentScreen[0][i], currentScreen[1][i], currentScreen[2][i], currentScreen[3][i], currentScreen[4][i]);
        }
    }
}
const slot = new Slot(config);
slot.spin();
