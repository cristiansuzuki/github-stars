import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const BoxOne = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  flex-direction: {
    xs: "column",
    sm: "row",
  }
  width: 100%;
  max-width: 700px;
  border-radius: 5px;
  padding: 32px;
  margin: 16px;
  box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 20%);
  background-color: ${(props) => props.theme.colors.box};
`;

export const BoxTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: {
    xs: 100%,
    sm: 50%,
  }
  text-align: center;
  margin-bottom: 32px;
`;

export const UserLogo = styled.img`
  margin-bottom: 32px;
  height: 100px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const UserLocation = styled.p`
  font-size: 12px;
`;

export const UserLocationLabel = styled.label`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserFollowers = styled.p`
  font-size: 12px;
`;

export const UserFollowersLabel = styled.label`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserBio = styled.p`
  font-size: 12px;
`;

export const UserBioLabel = styled.label`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserCreatedAt = styled.p`
  font-size: 12px;
`;

export const UserCreatedAtLabel = styled.label`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserMostUsedLanguage = styled.p`
  font-size: 12px;
`;

export const UserMostUsedLanguageLabel = styled.label`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserPublicRepos = styled.p`
  font-size: 12px;
`;

export const UserPublicReposLabel = styled.label`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const UserOrganizations = styled.p`
  font-size: 12px;
`;

export const UserOrganizationsLabel = styled.label`
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const BoxThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  label {
    display: flex;
    align-items: center;
    p {
      font-size: 15px;
      font-weight: initial;
      margin-left: 5px;
    }
  }
`;

export const Ranked = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2%;
`;
