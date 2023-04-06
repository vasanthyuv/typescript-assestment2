"use strict";
function getlap() {
    return fetch('./laptop.json')
        .then(res => res.json())
        .then(res => { return res; });
}
getlap()
    .then(rot => {
    console.log(rot.map(i => '\n' + 'id' + i.id + '\n' + 'pname' + i.pname + '\n' + 'pdescription' + i.pdescription + '\n' + 'price:' + i.price).toString());
});
