function registration(stringOfArr) {

    let count = 0;
    let countReg = Number(stringOfArr.shift());

    let pattern = /\U\$(?<username>[A-Z][a-z]{2,})\U\$\P\@\$(?<password>[A-Za-z]{5,}\d+)\P\@\$/

    for (let i = 1; i <= countReg; i++) {
        let simpleregistrtion = stringOfArr.shift();

        if (sucsess = pattern.exec(simpleregistrtion)) {

            console.log('Registration was successful');
            console.log(`Username: ${sucsess.groups.username}, Password: ${sucsess.groups.password}`)
            count++
        } else {
            console.log(`Invalid username or password`);
        }

    }




    console.log(`Successful registrations: ${count}`);
}
registration([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
])
registration(['2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412'])
registration([
    '3',
    'U$myU$-->P@$asdqwe123P@$',
    'Sara 1232412',
    'U$NameU$P@$Pass234P@$'
])