import React from 'react';
import NavBar from 'components/Nav';
import PriceBoard from 'components/PriceBoard'
import { Row } from 'react-bootstrap';
import Infograph from 'assets/infograph.png';
import Workpic from 'assets/workpic.png';
import Icons from 'assets/brandicons.png';
import Testimonialpic from 'assets/testimonial.png';
import Billing from 'assets/billing.png';
import Calendar from 'assets/calendar.png';
import Email from 'assets/email.png';
import Thumbs from 'assets/goodjob.png';
import {
  Hero,
  HeroText,
  SectButton,
  HeroSection,
  ProductSection,
  ProductDetails,
  ProductItem,
  Text,
  BrandIcons,
  Testimonial,
  LearnMore,
  LearnMoreSpec
} from './Landing.styled';
import Footer from 'components/Footer';

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
          <SectButton className="border border-light">
            Try Teamwork for free
          </SectButton>
        </HeroSection>
        <img src={Infograph} alt="info-graph" />
      </Hero>
      <ProductSection>
        <ProductItem className='reversed'>
          <img src={Workpic} alt="team-work-play" />
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
          <img src={Workpic} alt="info-details" />
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
          <img src={Workpic} alt="butler-workflow" />
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
        <img src={Icons} alt="brand-icons" />
      </BrandIcons>
      <Testimonial>
        <Text transform="uppercase">Testimonial</Text>
        <img src={Testimonialpic} alt="testimonial" />
      </Testimonial>
      <PriceBoard />
      <LearnMore>
        <Text transform="uppercase">How it works</Text>
        <Row className="justify-content-around">
          <LearnMoreSpec xs={12} sm={6}>
            <img src={Email} alt="email-tasks" />
            <Text as="h5" transform="uppercase">Email tasks In</Text>
            <p>Each workspace has it's own email address.
            You and your clients can email tasks directly.</p>
            <SectButton dark="black">Learn More</SectButton>
          </LearnMoreSpec>
          <LearnMoreSpec xs={12} sm={6}>
            <img src={Calendar} alt="email-tasks" />
            <Text as="h5" transform="uppercase">Calendar Sync</Text>
            <p>Synchronise your task due dates with
            any iCal compatible calendar.</p>
            <SectButton dark="black">Learn More</SectButton>
          </LearnMoreSpec>
          <LearnMoreSpec xs={12} sm={6}>
            <img src={Thumbs} alt="email-tasks" />
            <Text as="h5" transform="uppercase">Good Job!</Text>
            <p>With the "Good Job" feature let your team when
            they've done a good job on a particular task</p>
            <SectButton dark="black">Learn More</SectButton>
          </LearnMoreSpec>
          <LearnMoreSpec xs={12} sm={6}>
            <img src={Billing} alt="email-tasks" />
            <Text as="h5" transform="uppercase">Time Billing</Text>
            <p>Select which time is billable,
            raise detailed invoice reports.</p>
            <SectButton dark="black">Learn More</SectButton>
          </LearnMoreSpec>
        </Row>
      </LearnMore>
      <Footer/>
    </main>
  </>
)

export default Landing;