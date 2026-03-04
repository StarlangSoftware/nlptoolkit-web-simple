function displaySentiment(sentiNetObject){
    if (sentiNetObject["pscore"] > sentiNetObject["nscore"]){
        return "Positive with score " + sentiNetObject["pscore"]
    } else {
        if (sentiNetObject["pscore"] < sentiNetObject["nscore"]){
            return "Negative with score " + sentiNetObject["nscore"]
        } else {
            return "Neutral"
        }
    }
}
