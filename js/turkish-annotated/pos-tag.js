function createPosTableForDataSet(dataset, datasetName){
    let display = "<h1>" + datasetName + "</h1>";
    display = display + "<p style=\"color:blue;\">NOUN</p>";
    display = display + "<p style=\"color:red;\">VERB</p>";
    display = display + "<p style=\"color:green;\">ADJ</p>";
    display = display + "<p style=\"color:orange;\">ADV</p>";
    display = display + "<p style=\"color:pink;\">NUM</p>";
    display = display + "<p style=\"color:darkblue;\">PROPN</p>";
    display = display + "<p style=\"color:magenta;\">PRON</p>";
    display = display + "<p style=\"color:gray;\">PUNCT</p>";
    display = display + "<p style=\"color:aqua;\">DET</p>";
    display = display + "<p style=\"color:sienna;\">ADP</p>";
    display = display + "<p style=\"color:salmon;\">AUX</p>";
    display = display + "<p style=\"color:lawngreen;\">SCONJ</p>";
    display = display + "<p style=\"color:orchid;\">CCONJ</p>";
    for (let index = 0; index < dataset.length; index++) {
        display = display + "<h4> Sentence " + (index + 1) + "</h4>"
        let words = dataset[index]["sentence"].split(' ');
        let posTags = dataset[index]["POS_TAG"].split(' ')
        display = display + "<table><tr>";
        for (let i = 0; i < words.length; i++) {
            switch (posTags[i]){
                case "NOUN":
                    display = display + "<td style=\"color:blue;\"><small>" + words[i] + "</small></td>";
                    break;
                case "VERB":
                    display = display + "<td style=\"color:red;\"><small>" + words[i] + "</small></td>";
                    break;
                case "ADJ":
                    display = display + "<td style=\"color:green;\"><small>" + words[i] + "</small></td>";
                    break;
                case "ADV":
                    display = display + "<td style=\"color:orange;\"><small>" + words[i] + "</small></td>";
                    break;
                case "NUM":
                    display = display + "<td style=\"color:pink;\"><small>" + words[i] + "</small></td>";
                    break;
                case "PROPN":
                    display = display + "<td style=\"color:darkblue;\"><small>" + words[i] + "</small></td>";
                    break;
                case "PRON":
                    display = display + "<td style=\"color:magenta;\"><small>" + words[i] + "</small></td>";
                    break;
                case "PUNCT":
                    display = display + "<td style=\"color:gray;\"><small>" + words[i] + "</small></td>";
                    break;
                case "DET":
                    display = display + "<td style=\"color:aqua;\"><small>" + words[i] + "</small></td>";
                    break;
                case "ADP":
                    display = display + "<td style=\"color:sienna;\"><small>" + words[i] + "</small></td>";
                    break;
                case "AUX":
                    display = display + "<td style=\"color:salmon;\"><small>" + words[i] + "</small></td>";
                    break;
                case "SCONJ":
                    display = display + "<td style=\"color:lawngreen;\"><small>" + words[i] + "</small></td>";
                    break;
                case "CCONJ":
                    display = display + "<td style=\"color:orchid;\"><small>" + words[i] + "</small></td>";
                    break;
            }
        }
        display = display + "</tr>";
        display = display + "</table>"
    }
    return display
}
