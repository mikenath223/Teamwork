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
        <LinkText>About Teamwork</LinkText>
        <LinkText>Careers</LinkText>
        <LinkText>Customers</LinkText>
        <LinkText>Security</LinkText>
        <LinkText>News</LinkText>
        <LinkText>Brand</LinkText>
        <LinkText>Contact us</LinkText>
      </Col>
      <Col className="pl-5 mt-5">
        <GroupText>Solutions</GroupText>
        <LinkText>About Teamwork</LinkText>
        <LinkText>Careers</LinkText>
        <LinkText>Customers</LinkText>
        <LinkText>Security</LinkText>
        <LinkText>News</LinkText>
        <LinkText>Brand</LinkText>
        <LinkText>Contact us</LinkText>
      </Col>
      <Col className="pl-5 mt-5">
        <GroupText>Resources</GroupText>
        <LinkText>About Teamwork</LinkText>
        <LinkText>Careers</LinkText>
        <LinkText>Customers</LinkText>
        <LinkText>Security</LinkText>
        <LinkText>News</LinkText>
        <LinkText>Brand</LinkText>
        <LinkText>Contact us</LinkText>
      </Col>
      <Col className="pl-5 mt-5">
        <GroupText>Support</GroupText>
        <LinkText>About Teamwork</LinkText>
        <LinkText>Careers</LinkText>
        <LinkText>Customers</LinkText>
        <LinkText>Security</LinkText>
        <LinkText>News</LinkText>
        <LinkText>Brand</LinkText>
        <LinkText>Contact us</LinkText>
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