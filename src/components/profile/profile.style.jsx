import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 300px;
  box-shadow: ${p => p.theme.borders.shadow};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.sm};
`;
export const ProfileImg = styled.img`
  margin: 20px auto 0;
  width: 70px;
  border-radius: ${p => p.theme.radii.round};
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const TextStyle = styled.p`
  margin: 15px auto;
  font-size: 24px;
  font-weight: 700;
`;
export const ListInfo = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: flex;
  gap: 0px;
  padding: 0px;
  justify-content: center;
`;
export const ActivityBox = styled.li`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  background-color: ${p => p.theme.colors.secondary};
`;
export const Activity = styled.span`
  margin-right: 5px;
`;
