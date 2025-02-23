function formatPopulation(population) {
    let numberString = population;

    if (population >= 1000000000) {
        numberString = (population/1000000000).toFixed(2) + " billion";
    } else if (population >= 1000000) {
        numberString = (population/1000000).toFixed(2) + " million";
    } else if (population >= 1000) {
        numberString = (population/1000).toFixed(2) + " thousand";
    }

    return numberString;
}

export default formatPopulation;