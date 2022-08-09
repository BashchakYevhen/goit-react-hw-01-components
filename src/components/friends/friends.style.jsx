import styled from 'styled-components';

export const FriendListStyle = styled.ul`
  margin: 0 auto;
  list-style: none;
  padding: 0px;
`;
export const FriendCard = styled.li`
  margin: 10px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${p => p.theme.borders.shadow};
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  width: 250px;
`;
export const IsOnlineStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ isOnline, theme }) => {
    return isOnline ? theme.colors.online : theme.colors.offline;
  }};
`;
