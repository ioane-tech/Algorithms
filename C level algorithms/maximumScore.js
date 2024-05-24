function maxScoreWords(words, letters, score) {
    let maxScore = 0;

    const letterCount = new Map();
    letters.forEach(letter => {
        letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
    });

    const calculateWordScore = word => {
        let wordScore = 0;
        const wordCount = new Map();
        for (const char of word) {
            wordCount.set(char, (wordCount.get(char) || 0) + 1);
        }
        for (const [char, count] of wordCount) {
            if (!letterCount.has(char) || letterCount.get(char) < count) {
                return 0;
            }
            wordScore += count * score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        return wordScore;
    };

    const backtrack = (idx, remainingLetters) => {
        if (idx === words.length) {
            maxScore = Math.max(maxScore, calculateWordScore(remainingLetters));
            return;
        }
        backtrack(idx + 1, remainingLetters);
        const newRemainingLetters = new Map(remainingLetters);
        const word = words[idx];
        const wordScore = calculateWordScore(word);
        if (wordScore > 0) {
            for (const char of word) {
                newRemainingLetters.set(char, newRemainingLetters.get(char) - 1);
            }
            backtrack(idx + 1, newRemainingLetters);
        }
    };

    backtrack(0, letterCount);
    return maxScore;
}


const words1 = ["dog", "cat", "horse", "good"];
const letters1 = ["a", "a", "c", "d", "d", "d", "g", "o", "o"];
const score1 = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(maxScoreWords(words1, letters1, score1));  