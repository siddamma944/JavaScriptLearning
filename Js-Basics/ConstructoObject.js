function CreateAdress(street,village, zipcode){
    this.street=street,
    this.village=village,
    this.zipcode=zipcode
}
const address = new CreateAdress("Chennakesava Swami Temple Raod", "Chennavaram", 516193);
console.log(address);