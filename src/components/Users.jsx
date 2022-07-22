import { userList } from "../data/data.js";
import UserCard from "./UserCard.jsx";
import "./Users.css";

export default function Users() {
  return (
    <section className="users">
      <ul>
        {userList.map((user) => (
          <UserCard key={user.userId} user={user}/>
        ))}
      </ul>
    </section>
  );
}
