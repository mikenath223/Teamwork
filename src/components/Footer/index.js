import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SocialIcons from 'assets/socialicons.png';
import {
  Wrapper,
  GroupText,
  LinkText,
  BottomBar,
  CopyrightText
} from './Footer.styled';

const Footer = () => (
  <Wrapper>
    <Row className="justify-content-around mx-5">
      <Col className="pl-5 mt-5">
        <GroupText>Company</GroupText>
        <LinkText>About Teamwork</LinkText>
        <LinkText>Careers</LinkText>
        <LinkText>Customers</LinkText>
        <LinkText>Security</LinkText>
        <LinkText>News</LinkText>
        <LinkText>Brand</LinkText>
        <LinkText>Contact us</LinkText>
      </Col>
      <Col className="pl-5 mt-5">
        <GroupText>Products</GroupText>
        <LinkText>Teamwork</LinkText>
        <LinkText>Desk</LinkText>
        <LinkText>Chat</LinkText>
        <LinkText>Spaces</LinkText>
        <LinkText>CRM</LinkText>
        <LinkText>View all products</LinkText>
      </Col>
      <Col className="pl-5 mt-5">
        <GroupText>Solutions</GroupText>
        <LinkText>Marketing agency</LinkText>
        <LinkText>Marketing teams</LinkText>
        <LinkText>Product teams</LinkText>
        <LinkText>Support teams</LinkText>
        <LinkText>Professional services</LinkText>
        <LinkText>Enterprises</LinkText>
      </Col>
      <Col className="pl-5 mt-5">
        <GroupText>Resources</GroupText>
        <LinkText>Blog</LinkText>
        <LinkText>Webinars</LinkText>
        <LinkText>Ebooks</LinkText>
        <LinkText>Guides</LinkText>
        <LinkText>Templates</LinkText>
        <LinkText>Project management guide</LinkText>
        <LinkText>View all resources</LinkText>
      </Col>
      <Col className="pl-5 mt-5">
        <GroupText>Support</GroupText>
        <LinkText>Support Center</LinkText>
        <LinkText>Training</LinkText>
        <LinkText>API</LinkText>
        <LinkText>Integrations</LinkText>
        <LinkText>Partners</LinkText>
        <LinkText>Startups</LinkText>
        <LinkText>Roadmap</LinkText>
        <LinkText>Status</LinkText>
      </Col>
    </Row>
    <BottomBar>
      <CopyrightText>
        © 2020 Teamwork.com, Ltd. All rights reserved.
      </CopyrightText>
      <img src={SocialIcons} alt="" />
    </BottomBar>
  </Wrapper>
);

export default Footer;