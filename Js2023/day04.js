// Example usage:
const rawData = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11
`;

function calculateTotalPoints(rawData) {
    // Function to parse raw data and format it into an array of strings
    function formatRawData(rawData) {
        const cards = rawData.split('\n');
        const nonEmptyCards = cards.filter(card => card.trim() !== '');
        const formattedCards = nonEmptyCards.map(card => {
            const [cardName, cardData] = card.split(':').map(str => str.trim());
            const [cardNumbers, cardWinningNumbers] = cardData.split('|').map(str => str.trim());
            return `${cardNumbers} | ${cardWinningNumbers}`;
        });
        return formattedCards;
    }

    // Function to calculate total points
    function calculatePoints(cards) {
        let totalPoints = 0;
        for (let i = 0; i < cards.length; i++) {
            const [cardNumbers, cardWinningNumbers] = cards[i].split('|').map(arr => arr.trim().split(' ').map(Number));
            let cardPoints = 0;
            for (const winningNumber of cardWinningNumbers) {
                if (cardNumbers.includes(winningNumber)) {
                    cardPoints *= 2;
                    cardPoints = cardPoints === 0 ? 1 : cardPoints;
                }
            }
            console.log(`Card ${i + 1}: ${cardPoints} points`);
            if (cardPoints > 0) {
                totalPoints += cardPoints;
            }
        }
        return totalPoints;
    }

    // Parse raw data and format it into an array of strings
    const pileOfCards = formatRawData(rawData);

    // Calculate total points
    const totalPoints = calculatePoints(pileOfCards);

    // Output the final total points
    console.log(`Total Points: ${totalPoints}`);
}

calculateTotalPoints(rawData);

console.log(totalPoints)