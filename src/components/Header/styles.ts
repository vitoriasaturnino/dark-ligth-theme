import styled from 'styled-components';

export const ContainerStyle = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;