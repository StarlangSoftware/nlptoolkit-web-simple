function createPropbankTableForSentence(dataset, index) {
    let display = "<h4> Sentence " + (index + 1) + "</h4>"
    let words = dataset[index]["sentence"].split(' ');
    let roleLabels = dataset[index]["PROPBANK"].split(' ')
    display = display + "<table><tr>";
    let colorIndex = -1;
    for (let i = 0; i < words.length; i++) {
        if (roleLabels[i] === "NONE"){
            display = display + "<td><small>" + words[i] + "</small></td>";
        } else {
            if (roleLabels[i].startsWith("ARG0")){
                display = display + "<td style=\"color:blue;\"><u><b>" + words[i] + "</b></u><sub><small><small><small>" + roleLabels[i].substring(roleLabels[i].indexOf("$") + 1).substring(6) + "</small></small></small></sub></td>";
            } else {
                if (roleLabels[i].startsWith("ARG1")){
                    display = display + "<td style=\"color:red;\"><u><b>" + words[i] + "</b></u><sub><small><small><small>" + roleLabels[i].substring(roleLabels[i].indexOf("$") + 1).substring(6) + "</small></small></small></sub></td>";
                } else {
                    if (roleLabels[i].startsWith("PREDICATE")){
                        display = display + "<td style=\"color:green;\"><u><b>" + words[i] + "</b></u><sub><small><small><small>" + roleLabels[i].substring(roleLabels[i].indexOf("$") + 1).substring(6) + "</small></small></small></sub></td>";
                    } else {
                        display = display + "<td style=\"color:magenta;\"><u><b>" + words[i] + "</b></u><sub><small><small><small>" + roleLabels[i].substring(roleLabels[i].indexOf("$") + 1).substring(6) + "</small></small></small></sub></td>";
                    }
                }
            }
        }
    }
    display = display + "</tr>";
    display = display + "</table>"
    return display
}

function createPropbankTableForDataSet(dataset, datasetName){
    let display = "<h1>" + datasetName + "</h1>";
    display = display + "<p style=\"color:green;\">PREDICATE</p>";
    display = display + "<p style=\"color:blue;\">ARG0</p>";
    display = display + "<p style=\"color:red;\">ARG1</p>";
    display = display + "<p style=\"color:magenta;\">ARG2</p>";
    for (let index = 0; index < dataset.length; index++) {
        display = display + createPropbankTableForSentence(dataset, index);
    }
    return display
}
