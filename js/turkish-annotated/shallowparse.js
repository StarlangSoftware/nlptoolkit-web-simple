function createShallowParseSentence(dataset, index) {
    let display = "<h4> Sentence " + (index + 1) + "</h4>"
    let words = dataset[index]["sentence"].split(' ');
    let posTags = dataset[index]["SHALLOW_PARSE"].split(' ')
    display = display + "<table><tr>";
    let colorIndex = -1;
    for (let i = 0; i < words.length; i++) {
        if (posTags[i] === "NONE" || posTags[i] === "HİÇBİRİ"){
            display = display + "<td><small>" + words[i] + "</small></td>";
        } else {
            switch (posTags[i]){
                case "ÖZNE":
                    display = display + "<td style=\"color:blue;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
                case "YÜKLEM":
                    display = display + "<td style=\"color:green;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
                case "NESNE":
                    display = display + "<td style=\"color:red;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
                case "DOLAYLI_TÜMLEÇ":
                    display = display + "<td style=\"color:orange;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
                case "ZARF_TÜMLECİ":
                    display = display + "<td style=\"color:magenta;\"><u><b>" + words[i] + "</b></u></td>";
                    break;
            }
        }
    }
    display = display + "</tr>";
    display = display + "</table>"
    return display
}

function createShallowParseTableForDataSet(dataset, datasetName){
    let display = "<h1>" + datasetName + "</h1>";
    display = display + "<p style=\"color:blue;\">ÖZNE</p>";
    display = display + "<p style=\"color:green;\">YÜKLEM</p>";
    display = display + "<p style=\"color:red;\">NESNE</p>";
    display = display + "<p style=\"color:orange;\">DOLAYLI TÜMLEÇ</p>";
    display = display + "<p style=\"color:magenta;\">ZARF TÜMLECİ</p>";
    for (let index = 0; index < dataset.length; index++) {
        display = display + createShallowParseSentence(dataset, index);
    }
    return display
}
