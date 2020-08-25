import React from 'react';
import NavBar from 'components/Nav';
import Infograph from 'assets/infograph.png';
import Workpic from 'assets/workpic.png';
import Icons from 'assets/brandicons.png';
import {
  Hero,
  HeroText,
  HeroButton,
  HeroSection,
  ProductSection,
  ProductDetails,
  ProductItem,
  Text,
  BrandIcons
} from './Landing.styled';

const Landing = () => (
  <>
    <NavBar />
    <main>
      <Hero>
        <HeroSection>
          <HeroText>
            <div>Focus on the work that</div>
            <div>matters, wherever</div>
            <div>you are.</div>
          </HeroText>
          <article>
            <p>
              Teamwork is a work and project management tool that helps
              in house & remote teams improve collaboartion, visibility,
              accountability and ultimately results.
          </p>
          </article>
          <HeroButton className="border border-light">
            Try Teamwork for free
        </HeroButton>
        </HeroSection>
        <img src={Infograph} alt="info-graph" />
      </Hero>
      <ProductSection>
        <ProductItem className='reversed'>
          <img src={Workpic} alt="team-work-play"/>
          <ProductDetails>
            <Text>Work with the team <br /> you want</Text>
            <p>
              Whether it's for work, a side project or even
              the next family vacation, Trello helps your
              team stay organized
            </p>
          </ProductDetails>
        </ProductItem>
        <ProductItem>
          <img src={Workpic} alt="info-details"/>
          <ProductDetails>
            <Text>Information at a glance</Text>
            <p>
              Dive into the details by adding comments,
              attachments, end dates and more diretly to
              Trello cards. Collaborate throughout projects.
            </p>
          </ProductDetails>
        </ProductItem>
        <ProductItem className='reversed'>
          <img src={Workpic} alt="butler-workflow"/>
          <ProductDetails>
            <Text>Internal Workflow 
            Automation with Butler</Text>
            <p>
              Let the robots do the job! Boost productivity
              by releasing the power of automation across
              your entire team with Butler and remove
              boring tasks from your to-do lists with ease.
            </p>
          </ProductDetails>
        </ProductItem>
      </ProductSection>
      <BrandIcons>
        <img src={Icons} alt="brand-icons"/>
      </BrandIcons>
    </main>
  </>
)

export default Landing;