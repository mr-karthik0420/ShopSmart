import styled from 'styled-components';

export const HomeContainer = styled.section`
  background-image: url('https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  color: #000;
  height: 100vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 150px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentColumn = styled.div`
  flex: 1;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
`;

export const PrimaryButton = styled.button`
  padding: 20px 40px;
  font-size: 26px;
  font-family: 'Bree Serif';
  border-radius: 50px;
  font-weight: bold;
  background-color: #f030b6;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff3781;
  }
`;