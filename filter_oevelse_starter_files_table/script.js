const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);
// showTheseVehicles(bike);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}



//filter after electric vehicles
// const electricVehicles = vehicles.filter((each) => each.isElectric);
// showTheseVehicles(electricVehicles);

//filter after vehicles with more than 2 passengers
// const moreThanTwoSeats = vehicles.filter((seats)=> seats.passengers>2);
// showTheseVehicles(moreThanTwoSeats)

// filter vehicles owned by Jonas and is electric
// const vehiclesOwnedByJonas = vehicles.filter((owner)=>owner.ownedBy==="Jonas" && owner.isElectric)
// showTheseVehicles(vehiclesOwnedByJonas);

// filter vehicles run on Rugbrød as fuel and have more than 1 passenger 
// const vehiclesOnRugbroed = vehicles.filter((veh)=>veh.fuel==="Rugbrød" && veh.passengers>1);
// showTheseVehicles(vehiclesOnRugbroed);

