import firebase from "../../firebase.js";

const database = firebase.database();
const rootRef = database.ref("/turnos");

export const DataTurns = [
  rootRef.on("value", (snap) => {
    return { link: snap.val() };
  }),
];

export default DataTurns;
