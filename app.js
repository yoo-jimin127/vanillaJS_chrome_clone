const a = 5;
const b = 2;
let c = 12;

const player = {
    name: "nico",
    sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

player.sayHello("lynn");
console.log(player, console);
player.sexy = "soon";
console.log(player);