// Fortune Telling
// This app will generate random fortune telling messages 
// and present them to the user in a concatenated and 
// cohesive message. 
// The model for the random message generator is as follows:
//     *Time Period* you can expect *adjective* news in *topic*, and *adjective* luck in *topic*. 

const fortuneTeller = () => {

    //creating helper function to randomly generate numbers and keep code dry
    const randomNumber = numOfParams => {
        return Math.floor(Math.random() * numOfParams);
    }


    //randomly generating time periods (today, tomorrow, this week, next week)
    const timePeriod = () => {
        const generator = randomNumber(4);
        if (generator == 0) {
            return 'Today';
        } else if (generator == 1) {
            return 'Tomorrow';
        } else if (generator == 2) {
            return 'This week';
        } else {
            return 'Next week';
        }
    };

    //randomly generating adjectives (good, bad, awesome, poor, neutral)
    const adjective = () => {
        const adjectives = ['good', 'bad', 'awesome', 'poor', 'neutral'];
        return adjectives[randomNumber(adjectives.length)];
    };

    return `${timePeriod()} you can expect ${adjective()}.`
}

console.log(fortuneTeller());