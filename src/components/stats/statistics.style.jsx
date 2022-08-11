import styled from 'styled-components';
import { getRandomHexColor } from 'utils/randomColor';

export const StatSection = styled.div`
  margin: 30px auto 0;
  width: 300px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.sm};
  text-align: center;
`;
export const ListInfo = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: flex;
  gap: 0px;
  padding: 0px;
  justify-content: center;
`;
export const StatBox = styled.li`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${getRandomHexColor};
`;
export const StatData = styled.span`
  color: ${p => p.theme.colors.white};
`;
