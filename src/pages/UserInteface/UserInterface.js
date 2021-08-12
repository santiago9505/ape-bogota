import React from "react";
import firebase from "../../firebase.js";

class BoxTurns extends React.Component {
  constructor() {
    super();
    this.state = {
      link: "",
      links: [],
    };
  }

  updateLink(e) {
    this.setState({ link: e.target.value });
  }

  deleteLink(e) {
    firebase
      .database()
      .ref("links/")
      .on("value", (snap) => {
        console.log(snap.val());
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = this.state.links;
    const newLink = {
      id: this.state.links.length,
      link: this.state.link,
    };
    // list.push(newLink);
    // this.setState({ links: list });
    firebase.database().ref(`links/${newLink.id}`).set(newLink);
    this.setState({ link: "" });
  }

  componentDidMount() {
    firebase
      .database()
      .ref("links/")
      .on("value", (snap) => {
        const currentLinks = snap.val();
        if (currentLinks !== null) {
          this.setState({
            links: currentLinks,
          });
        }
      });
  }
  render() {
    const { links } = this.state;
    const linksList = links.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td className="text-principal-100">
            <a href={item.link}>{item.link}</a>
          </td>
        </tr>
      );
    });
    return (
      <section>
        <div className="flex flex-col px-8 mx-8 rounded-xl mb-4 bg-gray-100 border-2 border-black py-4 font-sena text-center text-lg sm:py-5 sm:mx-20 lg:mx-48 lg:grid lg:grid-cols-2">
          <div className="flex justify-center lg:items-start">
            <table className="w-88 sm:w-90 lg:w-110">
              <tr className="">
                <th>#TURNO</th>
                <th>LINK</th>
              </tr>
              {linksList}
            </table>
          </div>
          <div className="h-full">
            <h3 className="font-extrabold sm:mb-3">SERVICIO AL CLIENTE</h3>
            <div className="flex flex-col gap-2 text-white sm:gap-4 sm:w-80 sm:mx-auto">
              <p className="bg-blue-475 rounded-lg p-2">
                Estamos para servirle, y atender su necesidad de la mejor
                manera.
              </p>
              <p className="bg-blue-475 rounded-lg p-2 ">
                Para ingresar debe registrarse con una cuenta de google.
              </p>
              <p className="bg-blue-475 rounded-lg p-2 ">
                Recuerde ser respetuoso con el orientador(a) que le corresponde.
              </p>
              <p className="bg-blue-475 rounded-lg p-2 ">
                En caso de no contar con ningún turno disponible, puede
                registrar sus datos haciendo click aquí.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center my-10 font-sena text-xl">
          <div className="flex justify-center my-5">
            <a
              className="bg-blue-450 text-center justify-self-center hover:bg-principal-100 text-white w-60 py-0.5 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
              href="https://meet.google.com/new"
            >
              Crea tu reunión
            </a>
          </div>

          <div className="flex text-3xl justify-center my-2">
            <h1>Ingresa el link aquí</h1>
          </div>
          <form
            className="flex justify-center items-center gap-8"
            action=""
            onSubmit={this.handleSubmit.bind(this)}
          >
            <label className="flex gap-8" htmlFor="">
              <span>Link</span>
              <input
                className="bg-gray-300 rounded-full px-2"
                type="text"
                value={this.state.link}
                onChange={this.updateLink.bind(this)}
                required
              />
            </label>
            <label htmlFor="">
              <input
                className="bg-blue-450 hover:bg-principal-100 text-white w-60 py-0.5 rounded-full"
                type="submit"
              />
            </label>
          </form>
        </div>
      </section>
    );
  }
}
export default BoxTurns;
