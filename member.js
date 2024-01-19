function skillsMember() {
    var skills = [
        'HTML',
        'CSS',
        'JS',
        'PHP',
        'Python',
        'Ruby',
        'Java',
        'C++',
        'C#',
        'Swift',
        'Kotlin',
        'R',
        'Go'
    ];
    var member = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    var result = [];
    var i = 0;
    var j = 0;
    var k = 0;
    while (i < member.length) {
        while (j < skills.length) {
            result[k] = member[i] + ' can ' + skills[j];
            j++;
            k++;
        }
        i++;
        j = 0;
    }
    return result;
}
