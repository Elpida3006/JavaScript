function hospital(input) {

    let n = input[0]
 
    let doctor = 7;
    let yes_pacient = 0;
    let no_pacient = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && no_pacient > yes_pacient) {
            doctor += 1;
        }
        let pacient = +input[i];
        if (pacient <= doctor) {     

         yes_pacient += pacient;
        }
      else {
        yes_pacient += doctor;
          no_pacient += (pacient - doctor);
        
        }
  
    }
    console.log(`Treated patients: ${yes_pacient}.`);
    console.log(`Untreated patients: ${no_pacient}.`);
}
// hospital(["4", "7", "27", '9', '1']);
hospital(["6", "25", "25", "25", "25", '25', "2"]);
// hospital(["3", "7", "7", "7"]);