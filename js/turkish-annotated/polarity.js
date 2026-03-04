function createPolarityTableForSentence(dataset, index) {
    let display = "<h4> Sentence " + (index + 1) + "</h4>"
    let words = dataset[index]["sentence"].split(' ');
    let polarity = dataset[index]["POLARITY"]
    display = display + "<table><tr>";
    for (let i = 0; i < words.length; i++) {
        switch (polarity){
            case "POSITIVE":
                display = display + "<td  style=\"color:blue;\"><small>" + words[i] + "</small></td>";
                break;
            case "NEGATIVE":
                display = display + "<td  style=\"color:red;\"><small>" + words[i] + "</small></td>";
                break;
            case "NEUTRAL":
                display = display + "<td  style=\"color:green;\"><small>" + words[i] + "</small></td>";
                break;
        }
    }
    display = display + "</tr>";
    display = display + "</table>"
    return display
}

function createPolarityTableForDataSet(dataset, datasetName){
    let display = "<h1>" + datasetName + "</h1>";
    display = display + "<p style=\"color:blue;\">POSITIVE</p>";
    display = display + "<p style=\"color:green;\">NEUTRAL</p>";
    display = display + "<p style=\"color:red;\">NEGATIVE</p>";
    for (let index = 0; index < dataset.length; index++) {
        display = display + createPolarityTableForSentence(dataset, index);
    }
    return display
}
