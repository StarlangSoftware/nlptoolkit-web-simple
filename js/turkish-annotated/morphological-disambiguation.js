function createMorphologyTableForDataSet(dataset, datasetName){
    let display = "<h1>" + datasetName + "</h1>";
    for (let index = 0; index < dataset.length; index++) {
        display = display + "<h4> Sentence " + (index + 1) + "</h4>"
        let words = dataset[index]["sentence"].split(' ');
        let morphology = dataset[index]["INFLECTIONAL_GROUP"].split(' ')
        display = display + "<table> <tr> <th><b>Word</b></th> <th> <b>Morphology </b></th> </tr>";
        for (let i = 0; i < words.length; i++) {
            display = display + "<tr><td><small>" + words[i] + "</small></td><td><small>" + morphology[i] + "</small></td></tr>"
        }
        display = display + "</table>"
    }
    return display
}

