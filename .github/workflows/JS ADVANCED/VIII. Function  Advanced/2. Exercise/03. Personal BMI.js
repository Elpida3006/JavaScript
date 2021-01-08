 personalBMI = (name, age, weight, height) => {
         let bmi = (weight / Math.pow(height, 2)) * 10000;
         let status;
         (bmi < 18.5) ? status = 'underweight': (bmi < 25) ? status = 'normal' : (bmi < 30) ? status = 'overweight' : status = 'obese';


         let person = {
             name: name,
             personalInfo: {
                 age: age,
                 weight: Math.round(weight),
                 height: Math.round(height)
             },
             BMI: Math.round(bmi),
             status: status
         };

         status === 'obese' ? person.recommendation = 'admission required' : person.recommendation = 'undefined';

         return person;
     }
     //  console.log(personalBMI("Peter", 29, 75, 182));
 console.log(personalBMI('Dragan', 20, 80, 185))