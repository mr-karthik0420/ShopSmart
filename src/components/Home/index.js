import React from 'react';
import { HomeContainer, Container, CenteredRow, ContentColumn, Heading, Paragraph, PrimaryButton } from "./styledComponents";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import About from '../About';
import ContactUs from '../Contact';
import Header from '../Header';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeContainer className="home-container">
        <Container>
          <CenteredRow>
            <ContentColumn>
              <Heading>Welcome to Our Grocery Web App</Heading>
              <Paragraph>Discover a wide range of Groceries and Fresh Items for all your needs</Paragraph>
              <PrimaryButton>
                <Link to='/shopping' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bolder' }}>
                  Shop Now
                </Link>
              </PrimaryButton>
            </ContentColumn>
          </CenteredRow>
        </Container>
      </HomeContainer>
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;