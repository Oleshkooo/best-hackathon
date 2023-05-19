import { Button } from "../assets/Button/Button";
import { Link } from "react-router-dom";

import GraphHome from "/public/img/GraphHome.svg";

import s from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <main className={s.Home}>
      <span>
        <h1>Керуй своїми фінансами разом з BFCA503</h1>
        <h2>
          Створюй, редагуй, аналізуй свої доходи, витрати, депозити та інше!
        </h2>
        <Button type="button">
          <Link to="/dashboard">Почати зараз </Link>
        </Button>
      </span>
      <img src={GraphHome} alt="graph" />
    </main>
  );
};

export default Home;
