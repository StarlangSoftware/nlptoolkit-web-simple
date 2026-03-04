function createSemanticsTableForDataSet(dataset, datasetName){
    let display = "<h1>" + datasetName + "</h1>";
    for (let index = 0; index < dataset.length; index++) {
        display = display + "<h4> Sentence " + (index + 1) + "</h4>"
        let words = dataset[index]["sentence"].split(' ');
        display = display + "<table><tr>";
        for (let i = 0; i < words.length; i++) {
            display = display + "<td><small>" + words[i] + "</small></td>";
        }
        display = display + "</tr>";
        let semanticTags = dataset[index]["SEMANTICS"].split(' ')
        display = display + "<tr>";
        for (let i = 0; i < semanticTags.length; i++) {
            display = display + "<td><small>" + semanticTags[i] + "</small></td>";
        }
        display = display + "</tr>";
        display = display + "</table>"
    }
    return display
}
