function createMorphologicalAnalysisTable(sentence){
    let words = sentence.split(' ');
    let display = "<table> <tr> <th>Word</th> <th>Morphological Analysis</th> </tr>";
    for (let word of words) {
        display = display + "<tr><td>" + word + "</td>"
        let found = false
        for (let i = 0; i < turkishMorphologicalAnalysis.length; i++) {
            const wordObject = turkishMorphologicalAnalysis[i];
            const wordName = wordObject["word"]
            if (word === wordName){
                found = true
                const morphologicalAnalysisList = wordObject["morphologicalAnalysis"]
                display = display + "<td><table>"
                for (let i = 0; i < morphologicalAnalysisList.length; i++) {
                    display = display + "<tr><td>" + morphologicalAnalysisList[i] + "</td></tr>"
                }
                display = display + "</table></td>"
                break;
            }
        }
        if (!found){
            display = display + "<td>UNK</td>"
        }
        display = display + "</tr>"
    }
    display = display + "</table>"
    return display
}