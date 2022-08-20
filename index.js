// code your solution here
function superbowlWin(record, year) {
    let found = record.find(({ result }) => result === "W");
    return found? found['year'] : undefined;
}