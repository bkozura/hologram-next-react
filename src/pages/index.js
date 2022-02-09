import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import HeroBanner from '../sections/hero';  // Hologram override
import GetInTouch from '../sections/get-in-touch';
import PanelSection from '../sections/panel-section';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="IOT & Micromobility | Hologram Panel" />
          <HeroBanner />
          <PanelSection />
          <GetInTouch />
        </Layout>
    </ThemeProvider>
  );
}
