import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/pt-br";
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
  UserMostUsedLanguage,
  UserMostUsedLanguageLabel,
} from "./styles";

function Main() {
  const params = useParams();
  const [mostUsedLanguage, setMostUsedLanguage] = useState("");
  const [user, setUser] = useState({});
  const [theme, setTheme] = usePersistedState("theme", light);

  // Toggle para alterar tema. Light (por default) ou Dark.
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  async function getMostUsedLanguages() {
    // Lógica para filtrar os repositórios do usuário
    const repos = await fetch(`${apiGithub}${params.username}/repos`);

    // Transforma o resultado em um JSON
    const reposData = await repos.json();

    // Da um Reduce na const language
    const language = reposData
      .reduce((previousValue, currentValue) => {
        const languageFind = previousValue.find(
          ({ name }) => name === currentValue.language
        );
        languageFind
          ? languageFind.count++
          : previousValue.push({ name: currentValue.language, count: 1 });
        return previousValue;
      }, [])
      // Ordena o resultado pelo número de linguagens encontradas
      .sort((a, b) => b.count - a.count)[0]?.name;

    setMostUsedLanguage(language);
  }

  useEffect(() => {
    // Fetch na API do Git com os parametros do usuario que vieram da página inicial
    fetch(`${apiGithub}${params.username}`, { method: "GET" }).then(
      async (retorno) => {
        if (retorno.status === 200) {
          await getMostUsedLanguages();
          // Se der Status 200 (OK), da um setUser com o retorno da API em json
          setUser(await retorno.json());
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
                  <UserCreatedAt>
                    {moment(user.created_at).format("LL")}
                  </UserCreatedAt>{" "}
                </UserCreatedAtLabel>

                <UserMostUsedLanguageLabel>
                  Linguagem mais usada:{" "}
                  <UserMostUsedLanguage>
                    {mostUsedLanguage}
                  </UserMostUsedLanguage>
                </UserMostUsedLanguageLabel>
              </BoxThree>
            </BoxOne>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Main;
