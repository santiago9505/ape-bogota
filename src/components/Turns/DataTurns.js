import firebase from "../../firebase.js";

const database = firebase.database();
const rootRef = database.ref("/turnos");

let turnos;

rootRef.once("value", (snap) => {
  turnos = snap.val();
  console.log(turnos);
});

export const DataTurns = [
  {
    link: turnos,
  },
];
export default DataTurns;
