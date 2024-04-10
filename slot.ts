const config = {
  reelsCount: 5,
  rowsCount: 3,

  symbols: {
    1: [0, 0, 10, 20, 50],
    2: [0, 0, 20, 40, 100],
    3: [0, 0, 30, 60, 150],
    4: [0, 0, 40, 80, 200],
    5: [0, 0, 50, 100, 250],
    6: [0, 0, 100, 200, 500],
    7: [0, 0, 150, 300, 800],
    8: [0, 0, 200, 400, 1000],
    9: [0, 0, 300, 600, 2000],
  },

  lines: [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [0, 1, 0, 1, 0],
    [1, 2, 1, 2, 1],
  ],

  reels: [
    [
      1, 1, 2, 2, 9, 9, 3, 3, 1, 1, 8, 8, 8, 3, 3, 6, 6, 1, 1, 7, 7, 2, 2, 6, 6,
      1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 1, 1, 4, 4, 2, 2, 3, 3, 4, 4, 9, 9, 3, 3,
      2, 2, 1, 1, 9, 9, 1, 1, 4, 4, 8, 8, 2, 2, 5, 5, 5, 3, 3, 1, 1, 7, 7, 3, 3,
      6, 6, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 7, 7, 5, 5, 5, 1, 1, 6, 6, 4,
      4, 3, 3, 4, 4, 5, 5, 3, 3, 2, 2, 1, 1, 1, 1, 2, 2, 9, 9, 3, 3, 1, 1, 8, 8,
      8, 3, 3, 6, 6, 1, 1, 7, 7, 2, 2, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 1,
      1, 4, 4, 2, 2,
    ],
    [
      1, 1, 5, 5, 3, 3, 1, 1, 7, 7, 7, 4, 4, 9, 9, 5, 5, 1, 1, 4, 4, 9, 9, 3, 3,
      6, 6, 7, 7, 2, 2, 6, 6, 6, 2, 2, 2, 3, 3, 4, 4, 8, 8, 8, 3, 3, 2, 2, 1, 1,
      4, 4, 1, 1, 8, 8, 2, 2, 5, 5, 1, 1, 5, 5, 9, 9, 3, 3, 1, 1, 7, 7, 4, 4, 5,
      5, 1, 1, 4, 4, 4, 4, 3, 3, 6, 6, 7, 7, 2, 2, 6, 6, 2, 2, 2, 3, 3, 4, 4, 3,
      3, 2, 2, 1, 1, 1, 1, 8, 8, 2, 2, 5, 5, 6, 6, 2, 2, 2, 3, 3, 4, 4, 3, 3, 2,
      2, 1, 1, 1, 1, 8, 8, 2, 2, 5, 5,
    ],
    [
      1, 1, 9, 9, 2, 2, 2, 5, 5, 8, 8, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 7, 7, 2, 2,
      6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 4, 4, 4, 5, 5, 1, 1, 4, 4, 3, 3, 4, 4, 3,
      3, 2, 2, 9, 9, 1, 1, 1, 1, 2, 2, 2, 5, 5, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 7,
      7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 7, 7, 4, 4, 5, 5, 1, 1, 4, 4, 3,
      3, 4, 4, 3, 3, 9, 9, 2, 2, 1, 1, 6, 6, 6, 1, 1, 8, 8, 2, 2, 5, 5, 7, 7, 4,
      4, 5, 5, 1, 1, 4, 4, 3, 3, 4, 4, 3, 3, 9, 9, 2, 2, 1, 1,
    ],
    [
      1, 1, 8, 8, 8, 2, 2, 4, 4, 3, 3, 9, 9, 9, 2, 2, 2, 5, 5, 7, 7, 2, 2, 5, 5,
      3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 6, 1, 1, 4, 4, 4, 5, 5, 5, 1, 1, 4, 4, 8, 8,
      3, 3, 6, 6, 2, 2, 1, 1, 9, 9, 1, 1, 8, 8, 2, 2, 4, 4, 3, 3, 2, 2, 2, 5, 5,
      5, 7, 7, 2, 2, 9, 9, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 1, 1, 7, 7, 5, 5, 1, 1,
      4, 4, 3, 3, 8, 8, 6, 6, 2, 2, 1, 1, 9, 9, 3, 3, 1, 1, 7, 7, 3, 3, 6, 6, 1,
      1, 7, 7, 5, 5, 1, 1, 4, 4, 3, 3, 8, 8, 6, 6, 2, 2, 1, 1,
    ],
    [
      1, 1, 5, 5, 7, 7, 3, 3, 9, 9, 9, 1, 1, 3, 3, 2, 2, 2, 7, 7, 2, 2, 6, 6, 6,
      1, 1, 8, 8, 2, 2, 4, 4, 3, 3, 4, 4, 4, 5, 5, 1, 1, 6, 6, 4, 4, 8, 8, 3, 3,
      6, 6, 2, 2, 1, 1, 8, 8, 1, 1, 5, 5, 3, 3, 9, 9, 1, 1, 7, 7, 3, 3, 2, 2, 2,
      5, 5, 1, 1, 7, 7, 7, 2, 2, 6, 6, 6, 1, 1, 8, 8, 8, 2, 2, 4, 4, 3, 3, 5, 5,
      1, 1, 4, 4, 3, 3, 9, 9, 9, 6, 6, 2, 2, 1, 1, 2, 2, 6, 6, 6, 1, 1, 8, 8, 8,
      2, 2, 4, 4, 3, 3, 5, 5, 1, 1, 4, 4, 3, 3, 9, 9, 9, 6, 6, 2, 2, 1, 1,
    ],
  ],
}
type SpinResult = {
  payout: number
  win: boolean
}
class Slot {
  reelsCount: number
  rowsCount: number
  symbols: { [key: number]: number[] }
  lines: number[][]
  reels: number[][]

  constructor(config: any) {
    this.reelsCount = config.reelsCount
    this.rowsCount = config.rowsCount
    this.symbols = config.symbols
    this.lines = config.lines
    this.reels = config.reels
  }

  spin(): SpinResult {
    let currentScreen: number[][] = []

    for (let i = 0; i < 5; i++) {
      currentScreen[i] = this.reels[i].slice(0, 3)
    }

    let payout = 0
    let payLines = []
    for (const line of this.lines) {
      let matchCount = 0
      let winSymbol = 0

      for (let i = 0; i < line.length - 1; i++) {
        if (currentScreen[i][line[i]] === currentScreen[i + 1][line[i + 1]]) {
          matchCount++
          if (!winSymbol) winSymbol = currentScreen[i][line[i]]
        }
      }

      if (!matchCount || this.symbols[winSymbol][matchCount] === 0) {
        console.log("No win")
      } else {
        // Optionally show payout for each line
        // console.log("Pay is: ", this.symbols[winSymbol][matchCount])
        payout += this.symbols[winSymbol][matchCount]
        payLines.push(line)
      }
    }

    console.log("Pay lines: ", payLines)
    console.log("Spin payout: ", payout)
    this.printBoard(currentScreen)

    return { payout: payout, win: !!payout }
  }

  printBoard(currentScreen: number[][]): void {
    for (let i = 0; i < 3; i++) {
      console.log(
        currentScreen[0][i],
        currentScreen[1][i],
        currentScreen[2][i],
        currentScreen[3][i],
        currentScreen[4][i]
      )
    }
  }
}

const slot = new Slot(config)
slot.spin()
