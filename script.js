const getSleepHours = day => {
    day = day.toLowerCase();
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 10;
    } else if (day === 'wednesday') {
        return 7;
    } else if (day === 'thursday') {
        return 4;
    } else if (day === 'friday') {
        return 6;
    } else if (day === 'saturday') {
        return 3;
    } else if (day === 'sunday') {
        return 14;
    } else {
        return `${day} does not exist on this planet`;
    }
}


// implicit return - does not have curly brackets
// or: const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
const getActualSleepHours = () =>
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');


// or const getIdealSleepHours = idealHours => idealHours * 7;
const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

/*
or: const calculateSleepDebt = () => {
  ...
  const idealSleepHours = getIdealSleepHours(8);
  ...
};
*/
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log(`You got a perfect amount of sleep!`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${actualSleepHours - idealSleepHours} more sleep than needed.`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`You got ${idealSleepHours - actualSleepHours} less sleep than needed. You need to get more rest :(`);
    } else {
        console.log(`You are a zombie! AHHH!`)
    }
};

calculateSleepDebt();