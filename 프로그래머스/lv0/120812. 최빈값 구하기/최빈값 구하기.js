
function solution(array) {
    const frequency = {};

    array.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    const sortedFrequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

    if (sortedFrequency[0][1] === sortedFrequency[1][1]) {
        return -1;
    }

    return parseInt(sortedFrequency[0][0]);
}


    return parseInt(sortedFrequency[0][0]);
}
