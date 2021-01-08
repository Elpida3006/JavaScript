 extendProrotype = (protoClasss) => {
     protoClasss.prototype.species = 'Human';
     protoClasss.prototype.toSpeciesString = function() {
         return `I am a ${this.species}. ${this.toString()}`
     };
 }