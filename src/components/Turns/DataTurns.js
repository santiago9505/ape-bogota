import firebase from "../../firebase.js";

const database = firebase.database();
const rootRef = database.ref("/turnos");

rootRef.on("value", (snap) => {
  console.log(snap.val());
});

export const DataTurns = [
  {
    link: "https://meet.google.com/pit-vzkz-vuu",
  },
  {
    link: "https://meet.google.com/pit-vzkz-vuu",
  },
  {
    link: "https://meet.google.com/pit-vzkz-vuu",
  },
  {
    link: "https://meet.google.com/pit-vzkz-vuu",
  },
];

export default DataTurns;
