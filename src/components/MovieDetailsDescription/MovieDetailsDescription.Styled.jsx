import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  margin-right: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Span = styled.span`
  margin-left: 7px;
`;

export const Text = styled.p`
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
`;

export const Genres = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const WrapperInformation = styled.div`
  padding: 10px 0;
`;

export const TitleInformation = styled.h3`
  margin-bottom: 15px;
`;

export const List = styled.ul`
  width: 70px;
`;

export const Item = styled.li`
  font-weight: 500;
  :not(:last-child) {
    margin-bottom: 10px;
  }

  :hover {
    color: orangered;
  }
`;
