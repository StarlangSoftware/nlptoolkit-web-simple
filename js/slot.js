function createSlotTableForSentence(dataset, index){
    let display = "<h4> Sentence " + (index + 1) + "</h4>"
    let words = dataset[index]["sentence"].split(' ');
    let slotLabels = dataset[index]["SLOT"].split(' ')
    display = display + "<table><tr>";
    for (let i = 0; i < words.length; i++) {
        if (slotLabels[i] === "O"){
            display = display + "<td><small>" + words[i] + "</small></td>";
        } else {
            display = display + "<td><u><b>" + words[i] + "</b></u><sub><small><small><small>" + slotLabels[i] + "</small></small></small></sub></td>";
        }
    }
    display = display + "</tr>";
    display = display + "</table>"
    return display;
}

function createSlotTableForDataSet(dataset, datasetName){
    let display = "<h1>" + datasetName + "</h1>";
    for (let index = 0; index < dataset.length; index++) {
        display = display + createSlotTableForSentence(dataset, index);
    }
    return display
}
