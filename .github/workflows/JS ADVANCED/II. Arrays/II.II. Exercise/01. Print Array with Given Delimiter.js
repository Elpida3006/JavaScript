 printBydelimeter = (array) => {

     let delimeter = array.pop()

     return array.join(delimeter);
 }
 printBydelimeter(['One',
     'Two',
     'Three',
     'Four',
     'Five',
     '-'
 ])