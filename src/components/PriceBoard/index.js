import React from 'react';
import {
  PriceSection,
  PriceDetails,
  PriceTag,
  PriceFeature,
  Text
} from './PriceBoard.styled';

const PriceBoard = () => (
  <PriceSection>
    <PriceDetails>
      <PriceTag>$35</PriceTag>
      <PriceFeature>Basic</PriceFeature>
      <ul>
        <Text><b>✓</b> Unlimited Projects</Text>
        <Text><b>✓</b> Unlimited Version History</Text>
      </ul>
    </PriceDetails>
    <PriceDetails>
      <PriceTag>$40</PriceTag>
      <PriceFeature>Premium</PriceFeature>
      <ul>
        <Text><b>✓</b> Unlimited Projects</Text>
        <Text><b>✓</b> Unlimited Version History</Text>
        <Text><b>✓</b> Custom File/Permissions</Text>
        <Text><b>✓</b> Invite-only Private Projects</Text>
      </ul>
    </PriceDetails>
    <PriceDetails>
      <PriceTag>$50</PriceTag>
      <PriceFeature>Ultimate</PriceFeature>
      <ul>
        <Text><b>✓</b> Unlimited Projects</Text>
        <Text><b>✓</b> Unlimited Version History</Text>
        <Text><b>✓</b> Custom File/Permissions</Text>
        <Text><b>✓</b> Invite-only Private Projects</Text>
        <Text><b>✓</b> Unlimited Private Projects</Text>
      </ul>
    </PriceDetails>
  </PriceSection>
)

export default PriceBoard;