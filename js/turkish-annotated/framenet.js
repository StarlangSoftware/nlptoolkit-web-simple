function createFramenetTableForDataSet(dataset, datasetName){
    let display = "<h1>" + datasetName + "</h1>";
    let frames = new Set();
    let frameSentences = new Map();
    for (let index = 0; index < dataset.length; index++) {
        let roleLabels = dataset[index]["FRAMENET"].split(' ')
        for (let i = 0; i < roleLabels.length; i++){
            let frame = roleLabels[i].substring(roleLabels[i].indexOf("$") + 1, roleLabels[i].lastIndexOf("$"));
            if (frame !== "NONE" && frame !== ""){
                let sentenceSet = new Set()
                if (!frames.has(frame)){
                    frames.add(frame);
                } else {
                    sentenceSet = frameSentences[frame];
                }
                sentenceSet.add(index)
                frameSentences[frame] = sentenceSet;
            }
        }
    }
    for (let frame of frames){
        display = display + "<h2>" + frame + "</h2>";
        for (let index of frameSentences[frame]) {
            display = display + "<h4> Sentence " + (index + 1) + "</h4>"
            let words = dataset[index]["sentence"].split(' ');
            let roleLabels = dataset[index]["FRAMENET"].split(' ')
            display = display + "<table><tr>";
            let colorIndex = -1;
            for (let i = 0; i < words.length; i++) {
                if (roleLabels[i] === "NONE"){
                    display = display + "<td><small>" + words[i] + "</small></td>";
                } else {
                    display = display + "<td><u><b>" + words[i] + "</b></u><sub><small><small><small>" + roleLabels[i].substring(0, roleLabels[i].indexOf("$")) + "</small></small></small></sub></td>";
                }
            }
            display = display + "</tr>";
            display = display + "</table>"
        }
    }
    return display
}
