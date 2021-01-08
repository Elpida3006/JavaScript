//иво
class VeterinaryClinic {
    clients = [];

    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.currentWorkload = 0;
        this.totalProfit = 0;
    }

    getPet(owner, petName) {
        if (!owner) {
            return;
        }

        return owner.pets.find(x => x.petName == petName);
    }

    getClient(ownerName) {
        let client = this.clients.find(x => x.ownerName == ownerName);

        return client;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkload >= this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        let currentOwner = this.getClient(ownerName);
        let currentPet = this.getPet(currentOwner, petName);
        if (currentOwner && currentPet) {
            if (currentPet.procedures.length > 0) {
                throw new Error(`This pet is already registered under ${currentOwner.ownerName} name! ${currentPet.petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`);
            } else {
                currentPet.procedures = procedures
            }
        } else if (!currentOwner) {
            currentOwner = {
                ownerName,
                pets: [],
            };

            this.clients.push(currentOwner);
        }

        currentOwner.pets.push({
            petName,
            kind,
            procedures,
        });

        this.currentWorkload++;

        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        let currentOwner = this.getClient(ownerName);

        if (!currentOwner) {
            throw new Error('Sorry, there is no such client!');
        }

        let currentPet = this.getPet(currentOwner, petName);
        if (!currentPet || currentPet.procedures.length == 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        this.totalProfit += currentPet.procedures.length * 500;
        this.currentWorkload--;
        currentPet.procedures = [];
        return `Goodbye ${currentPet.petName}. Stay safe!`;
    }

    toString() {
        let busyPercentage = Math.floor(this.currentWorkload / this.capacity * 100);

        let result = `${this.clinicName} is ${busyPercentage}% busy today!`;
        result += '\n';
        result += `Total profit: ${this.totalProfit.toFixed(2)}$`;

        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));

        for (const client of this.clients) {
            client.pets.sort((a, b) => a.petName.localeCompare(b.petName));

            result += '\n';
            result += `${client.ownerName} with:`;

            for (const pet of client.pets) {
                result += '\n';
                result += `---${pet.petName} - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`
            }
        }

        return result.trim();
    }
}



class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName
        this.capacity = capacity

        this.clients = []
            //това ни е базата данни, клиентите са собствениците - Owner
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }
    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();

        let pet = { name: petName, kind, procedures }
        let owner = { name: ownerName, pets: [] }
        if (this.currentWorkload >= this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        } else {

            this.clients.forEach(client => {
                if (client.name == owner.name) {

                    client.pets.forEach(clientPet => {
                        if (clientPet.name !== pet.name) {
                            client.pets.push(pet);
                            this.currentWorkload += 1;
                        } else {
                            if (clientPet.procedures.length == 0) {
                                clientPet.procedures = pet.procedures;
                            } else {
                                throw new Error(`This pet is already registered under ${ this.ownerName } name! ${ this.petName } is on our lists, waiting for ${this.procedures.split( ', ')}.`);

                            }
                        }
                    });

                } else {
                    this.clients.push(owner);
                    owner.pets.push(pet);
                    this.currentWorkload++
                }
            });
            if (this.clients.length == 0) {

                this.clients.push(owner);
                owner.pets.push(pet);
                this.currentWorkload++

            }
        }
        return `Welcome ${petName}!`;
    }


    onLeaving(ownerName, petName) {
        this.clients.forEach(client => {
            if (client.name === ownerName.name) {

                client.pets.forEach(clientPet => {

                    if (clientPet.procedures.length == 0) {
                        throw new error("Sorry, there are no procedures for ${petName}!")
                    } else if (clientPet.procedures.length > 0 && clientPet.name === petName) {
                        this.totalProfit = 500 * clientPet.procedures.length;
                        clientPet.procedures = [];
                        this.currentWorkload -= 1;
                    }
                });
            } else {
                throw new error("Sorry, there is no such client!");

            }
        });
        return `Goodbye ${petName}. Stay safe!`
    }

    toString() {
        let petsWithProcedures = 0
        this.clients.forEach(client => {
            client.pets.forEach(clientPet => {
                if (clientPet.procedures.length > 0) {
                    petsWithProcedures += 1
                }
            });
        });

        const percentage = Math.floor(petsWithProcedures / this.capacity * 100);

        let message = `${  this.clinicName } is ${ percentage }% busy today!`
        const profit = this.totalProfit
        message += `\nTotal profit: ${ profit.toFixed(2) }$`

        this.clients.forEach(client => {
            message += `\n${client.name} with:`
            client.pets.sort((a, b) => a.name.localeCompare(b.name));

            client.pets.forEach(clientPet => {
                message += `\n---${clientPet.name} - a ${clientPet.kind} that needs: ${clientPet.procedures.join(', ')}`
            });
        });
        return message;


    }

}

class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0

    }
    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();
        let pet = { name: petName, kind: kind, procedures: procedures };
        let owner = { name: ownerName, pets: [] };
        let found = false;
        if (this.currentWorkload >= this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        } else {
            this.clients.forEach(client => {
                if (client.name === owner.name) {
                    found = true;
                    let petFound = false;
                    client.pets.forEach(clientPet => {
                        if (clientPet.name === pet.name) {
                            if (clientPet.procedures.length > 0) {
                                throw new Error(`This pet is already registered under ${client.name} name! ${clientPet.name} is on our lists, waiting for ${clientPet.procedures.join(', ')}.`);
                            } else {
                                petFound = true;
                            }
                        }
                    });
                    if (!petFound) {
                        client.pets.push(pet);
                        this.currentWorkload += 1;
                    } else {
                        client.pets.forEach(clientPet => {
                            if (clientPet.name === pet.name && clientPet.procedures.length === 0) {
                                clientPet.procedures = pet.procedures;
                                this.currentWorkload += 1;
                            }
                        });
                    }
                }
            });
            if (!found) {
                owner.pets.push(pet);
                this.clients.push(owner);
                this.currentWorkload += 1;
            }
        }
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        let petFound = false;
        let clientFound = false;
        this.clients.forEach(client => {
            if (!clientFound) {
                if (client.name === ownerName) {
                    clientFound = true;
                    client.pets.forEach(clientPet => {
                        if (clientPet.name === petName) {
                            petFound = true;
                            if (clientPet.procedures.length == 0) {
                                throw new Error(`Sorry, there are no procedures for ${petName}!`);
                            } else {
                                this.totalProfit = 500 * clientPet.procedures.length;
                                clientPet.procedures = [];
                                this.currentWorkload -= 1;
                            }
                        }
                    });
                    if (!petFound) {
                        throw new Error(`Sorry, there are no procedures for ${petName}!`);
                    }
                }
            }
        });
        if (!clientFound) {
            throw new Error("Sorry, there is no such client!");
        }
        return `Goodbye ${petName}. Stay safe!`
    }

    toString() {
        let petsWithProcedures = 0
        this.clients.forEach(client => {
            client.pets.forEach(clientPet => {
                if (clientPet.procedures.length > 0) {
                    petsWithProcedures += 1
                }
            });
        });
        let result = `${this.clinicName} is ${Math.floor(petsWithProcedures / this.capacity * 100)}% busy today!`;
        result += `\nTotal profit: ${this.totalProfit.toFixed(2)}$`;
        this.clients.sort((a, b) => a.name.localeCompare(b.name));
        this.clients.forEach(client => {
            result += `\n${client.name} with:`
            client.pets.sort((a, b) => a.name.localeCompare(b.name));
            client.pets.forEach(clientPet => {
                result += `\n---${clientPet.name} - a ${clientPet.kind} that needs: ${clientPet.procedures.join(', ')}`
            });
        });
        return result;
    }
}
let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());