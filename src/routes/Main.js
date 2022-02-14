import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGithub } from "../services/api";
import usePersistedState from "../utils/userPersistedState";
import Header from "../components/Header";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import {
  Container,
  BoxOne,
  BoxTwo,
  UserName,
  UserLogo,
  BoxThree,
  UserLocation,
  UserFollowers,
  UserBio,
  UserCreatedAt,
  UserPublicRepos,
  UserLocationLabel,
  UserFollowersLabel,
  UserBioLabel,
  UserCreatedAtLabel,
  UserPublicReposLabel,
} from "./styles";

function Main() {
  const params = useParams();
  const [user, setUser] = useState({});
  const [theme, setTheme] = usePersistedState("theme", light);

  // Toggle para alterar tema. Light (por default) ou Dark.
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  async function getMostUserLanguages() {
    const repos = await fetch(`${apiGithub}${params.username}/repos`);
    const reposData = await repos.json();
    console.log("Repos:", reposData);
  }

  useEffect(() => {
    // Fetch na API do Git com os parametros do usuario que vieram da página inicial
    fetch(`${apiGithub}${params.username}`, { method: "GET" }).then(
      async (retorno) => {
        if (retorno.status === 200) {
          // Se der Status 200 (OK), da um setUser com o retorno da API em json
          setUser(await retorno.json());
          getMostUserLanguages();
        } else if (retorno.status === 404) {
        }
      }
    );
  }, [params]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Container>
            <BoxOne>
              <BoxTwo>
                <UserLogo src={user.avatar_url} />
                <UserName>{user.name}</UserName>
              </BoxTwo>
              <BoxThree>
                <UserBioLabel>
                  Bio: <UserBio>{user.bio}</UserBio>
                </UserBioLabel>

                <UserFollowersLabel>
                  Seguidores: <UserFollowers>{user.followers}</UserFollowers>
                </UserFollowersLabel>

                <UserPublicReposLabel>
                  Repositórios Publicos:{" "}
                  <UserPublicRepos>{user.public_repos}</UserPublicRepos>
                </UserPublicReposLabel>

                <UserLocationLabel>
                  Localização: <UserLocation>{user.location}</UserLocation>
                </UserLocationLabel>

                <UserCreatedAtLabel>
                  Entrou no GitHub:{" "}
                  <UserCreatedAt>{user.created_at}</UserCreatedAt>{" "}
                </UserCreatedAtLabel>
              </BoxThree>
            </BoxOne>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Main;
