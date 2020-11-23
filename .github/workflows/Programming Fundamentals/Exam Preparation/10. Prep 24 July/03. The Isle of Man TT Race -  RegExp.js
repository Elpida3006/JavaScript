function isleOfManTT(stringOfArray) {

    let pattern = /(#|\$|%|\*|&)(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<code>.+)/;

    let encryption = '';
    for (let i = 0; i < stringOfArray.length; i++) {
        let line = stringOfArray[i];

        if (valid = pattern.exec(line)) {
            let len = Number(valid.groups.length);

            if (valid.groups.code.length === len) {
                for (let i = 0; i < valid.groups.code.length; i++) {

                    encryption += String.fromCharCode(valid.groups.code.charCodeAt(i) + len);
                }
                console.log(`Coordinates found! ${valid.groups.name} -> ${encryption}`);
                break;
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
}
isleOfManTT([
    'Ian6Hutchinson=7!!\\(58ycb4',
    "#MikeHailwood#!!'gfzxgu6768=11",
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    'RichardQ^uayle=16!!fr5de5kd'
])