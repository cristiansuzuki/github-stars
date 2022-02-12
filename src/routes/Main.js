import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGithub } from "../services/api";

function Main() {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${apiGithub}${params.username}`, { method: "GET" }).then(
      async (retorno) => {
        if (retorno.status === 200) {
          setUser(await retorno.json());
        } else if (retorno.status === 404) {
          console.log(retorno);
        }
      }
    );
  }, [params]);

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

export default Main;
