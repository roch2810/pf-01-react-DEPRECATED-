import React from 'react';

import { Typography, Section, Panel, Carousel } from 'src/UI-Kits';

export const PriceListSection = () => (
  <Section backgroundTheme="accent" style={{ textAlign: 'center' }}>
    <header style={{ marginBottom: '2em' }}>
      <Typography variant="subheading" style={{ textTransform: 'uppercase' }}>
        Pricing Plans
      </Typography>
      <Typography variant="headline" component="h3">
        Choose Your Plan
      </Typography>
      <Typography variant="body">
        We offer three different plans that cover the needs of modern startups and businesses. They
        are provided via monthly or annual payments for your convenience.
      </Typography>
    </header>

    <Carousel slidesToShow={3} slidePadding="1em">
      <Carousel.Slide>
        <Panel variant="with-top-accent">
          <Typography variant="subheading" colorTheme="primary" text="Basic" />
          <Typography variant="title">
            <span>$</span>49
          </Typography>
          <ul>
            <li>Concept Development</li>
            <li>UI Design</li>
            <li>App Management</li>
            <li>Software QA</li>
            <li>App Integration</li>
            <li>Regular Updates</li>
          </ul>
        </Panel>
      </Carousel.Slide>
      <Carousel.Slide>
        <Panel variant="with-top-accent" margins="out-standing">
          <Typography variant="subheading" colorTheme="primary" text="Standard" />
          <Typography variant="title">
            <span>$</span>79
          </Typography>
          <ul>
            <li>Concept Development</li>
            <li>UI Design</li>
            <li>App Management</li>
            <li>Software QA</li>
            <li>App Integration</li>
            <li>Regular Updates</li>
          </ul>
        </Panel>
      </Carousel.Slide>
      <Carousel.Slide>
        <Panel variant="with-top-accent">
          <Typography variant="subheading" colorTheme="primary" text="Premium" />
          <Typography variant="title">
            <span>$</span>99
          </Typography>
          <ul>
            <li>Concept Development</li>
            <li>UI Design</li>
            <li>App Management</li>
            <li>Software QA</li>
            <li>App Integration</li>
            <li>Regular Updates</li>
          </ul>
        </Panel>
      </Carousel.Slide>
    </Carousel>
  </Section>
);
