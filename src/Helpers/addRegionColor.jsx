function addRegionColor(region) {
    console.log(region);

    switch(region) {
        case "Africa":
            return "blue"
        case "Americas":
            return "green"
        case "Antarctic":
            return "orange"
        case "Asia":
            return "red"
        case "Europe":
            return "yellow"
        case "Oceania":
            return "purple"
        default:
            return "grey"
    }
}

export default addRegionColor;