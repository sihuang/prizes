/**
 * Calculate prize allocation (prize value and number of winners in each prize)
 * given the total amount of prizes and total number of winners.
 * Assumes 3 prizes: first, second and third.
 *
 * @param winners total number of winnders
 * @param pool total amount of prize (in $1K)
 * @param prizeGap gap between prizes (in $1K), assuming equal gaps between prizes
 */
const allocatePrizes = (winners, pool, prizeGap) => {
  const minPrize = 1;
  let count = 0;
  const averagePrize = pool / winners;
  for (let basePrize = minPrize; basePrize < averagePrize; basePrize++) {
    const medPrize = basePrize + prizeGap,
      highPrize = basePrize + prizeGap * 2;
    for (let numBase = 1; numBase < winners - 1; numBase++) {
      const sumBase = basePrize * numBase;
      for (
        let numMed = 1;
        numMed < winners - numBase && numMed < numBase;
        numMed++
      ) {
        const numHigh = winners - numBase - numMed;
        if (numHigh >= numMed) continue;
        const sumMed = medPrize * numMed;
        const sumHigh = highPrize * numHigh;
        if (sumBase + sumMed + sumHigh == pool) {
          count++;

          console.log('recommendation: ' + count);
          console.log(highPrize * 1000 + ': ' + numHigh);
          console.log(medPrize * 1000 + ': ' + numMed);
          console.log(basePrize * 1000 + ': ' + numBase);
        }
      }
    }
  }
};
