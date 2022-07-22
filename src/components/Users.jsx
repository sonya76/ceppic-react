import { userList } from "../data/data.js";
import "./Users.css";

export default function Users() {
  return (
    <section className="users">
      <ul>
        {userList.map((user) => (
          <li key={user.userId}>
            <div>Nom: {user.nom}</div>
            <div>Prenom: {user.prenom}</div>
            <div>Telephone: {user.telephone}</div>
            <div>Email: {user.email}</div>
            <div>Profession: {user.profession}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
