import firebase from "../../firebase.js";

const database = firebase.database();
const rootRef = database.ref("/turns/1");

rootRef.on("value", (snap) => {
  var turnos = snap.val();
  console.log(turnos);
});

export const DataTurns = [
  {
    turno: 1,
    link: "https://exampleurl.com",
  },
];
export default DataTurns;
