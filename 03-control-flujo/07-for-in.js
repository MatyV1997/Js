//For in se utiliza para iterar un objeto
let user = {
    name: 'Matias',
    age: 27,
    id: 1,
}
for (let prop in user) {
    console.log(prop, user[prop]);
}