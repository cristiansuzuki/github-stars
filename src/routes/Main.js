import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGithub } from "../services/api";

function Main() {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch na API do Git com os parametros do usuario que vieram da página inicial
    fetch(`${apiGithub}${params.username}`, { method: "GET" }).then(
      async (retorno) => {
        if (retorno.status === 200) {
          // Se der Status 200 (OK), da um setUser com o retorno da API em json
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
