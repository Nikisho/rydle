export function getRandomUsername() {
    const adjectives = ["hap", "cle", "fun", "col", "play", "sun", "joy", "bright"];
    const nouns = ["i", "guin", "raffe", "flow", "bow", "bird", "beam", "light"];

    const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

    const randomAdjective = getRandomElement(adjectives);
    const randomNoun = getRandomElement(nouns);

    const username = randomAdjective + randomNoun;
    console.log(username)
    return username;
};