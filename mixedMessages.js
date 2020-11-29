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
        const timePeriods = ['Today', 'Tomorrow', 'This week', 'Next week']
        return timePeriods[randomNumber(timePeriods.length)];
    };

    //randomly generating adjectives (good, bad, awesome, poor, neutral)
    const adjective = () => {
        const adjectives = ['good', 'bad', 'awesome', 'poor', 'neutral'];
        return adjectives[randomNumber(adjectives.length)];
    };


    //randomly generating topics (money, love, health, friendships, work)
    const topic = () => {
        const topics = ['money', 'love', 'health', 'friendships', 'work'];
        return topics[randomNumber(topics.length)];
    }

    //returning final randomly generating fortune
    return `${timePeriod()} you can expect ${adjective()} news in ${topic()}, and ${adjective()} luck in ${topic()}.`
}

console.log(fortuneTeller());