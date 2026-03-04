function createNerTableForSentence(dataset, index){
    let display = "<h4> Sentence " + (index + 1) + "</h4>"
    let words = dataset[index]["sentence"].split(' ');
    let posTags = dataset[index]["NER"].split(' ')
    display = display + "<table><tr>";
    let colorIndex = -1;
    for (let i = 0; i < words.length; i++) {
        if (posTags[i] === "NONE"){
            display = display + "<td><small>" + words[i] + "</small></td>";
        } else {
            switch (posTags[i]){
                case "PERSON":
                    display = display + "<td style=\"color:blue;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
                case "ORGANIZATION":
                    display = display + "<td style=\"color:green;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
                case "TIME":
                    display = display + "<td style=\"color:red;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
                case "LOCATION":
                    display = display + "<td style=\"color:orange;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
                case "MONEY":
                    display = display + "<td style=\"color:magenta;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
            }
        }
    }
    display = display + "</tr>";
    display = display + "</table>"
    return display;
}

function createNerTableForDataSet(dataset, datasetName){
    let display = "<h1>" + datasetName + "</h1>";
    display = display + "<p style=\"color:blue;\">PERSON</p>";
    display = display + "<p style=\"color:green;\">ORGANIZATION</p>";
    display = display + "<p style=\"color:red;\">TIME</p>";
    display = display + "<p style=\"color:orange;\">LOCATION</p>";
    display = display + "<p style=\"color:magenta;\">MONEY</p>";
    for (let index = 0; index < dataset.length; index++) {
        display = display + createNerTableForSentence(dataset, index);
    }
    return display
}
