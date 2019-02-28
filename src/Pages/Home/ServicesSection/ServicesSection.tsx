import React, { FC } from 'react';

import { Section } from 'src/UI-Kits';
import { Panel } from 'src/UI-Kits/Panel';
import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 700px;
`;

const Center = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ColoredTitle = styled.div`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  color: #0accbe !important;
  font-weight: 700 !important;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 39px;
  line-height: 1.23077;
  padding-top: 10px;
`;

const StyledPanels = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 60px;
`;

const StyledWrapPanel = styled.div`
  padding: 5px;
`;

export const ServicesSection: FC = () => (
  <Section style={{ height: '300px' }}>
    <RootContainer>
      <Center>
        <ColoredTitle>WHAT WE DO</ColoredTitle>
      </Center>
      <Center>
        <SubTitle>Our Services</SubTitle>
      </Center>

      <StyledPanels>
        <StyledWrapPanel>
          <Panel width={'220px'} height={'280px'}>
            test
          </Panel>
        </StyledWrapPanel>
        <StyledWrapPanel>
          <Panel width={'220px'} height={'280px'}>
            test
          </Panel>
        </StyledWrapPanel>
        <StyledWrapPanel>
          <Panel width={'220px'} height={'280px'}>
            test
          </Panel>
        </StyledWrapPanel>
        <StyledWrapPanel>
          <Panel width={'220px'} height={'280px'}>
            test
          </Panel>
        </StyledWrapPanel>
      </StyledPanels>
    </RootContainer>
  </Section>
);
