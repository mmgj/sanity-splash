import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, Card, Stack } from '@sanity/ui';
import { Router } from '@reach/router';

import { sanityClient } from './lib/sanity';
import { useStateValue } from './lib/state';

import Curriculum from './pages/Curriculum';
import Personalia from './pages/Personalia';
import CoverLetter from './pages/CoverLetter';

import Nav from './cpt/Nav';
import Footer from './cpt/Footer';
import CornerKitty from './cpt/CornerKitty';

import './transitions.css';

function App() {
  const [{ siteSettings, personalia, curriculum }, dispatch] = useStateValue();
  const isTinyScreen = useMediaQuery({ query: '(max-width: 470px)' });
  useEffect(() => {
    async function loadData() {
      /* Singletons ftw! */
      const res = await sanityClient.getDocuments([
        'siteSettings',
        'person',
        'curriculum',
      ]);
      dispatch({ type: 'setSiteSettings', payload: res[0] });
      dispatch({ type: 'setPersonalia', payload: res[1] });
      dispatch({ type: 'setCurriculum', payload: res[2] });
    }
    loadData();
  }, []);
  return (
    <main className='transition-container' style={{ width: '100vw' }}>
      <CornerKitty />
      <Card
        paddingX={isTinyScreen ? 4 : 4}
        paddingY={4}
        paddingBottom={8}
        style={{
          width: isTinyScreen ? '100%' : '90%',
          maxWidth: 980,
          minHeight: '100vh',
          margin: '0 auto',
        }}
      >
        <Stack>
          <Nav />
          <Box>
            <Router primary={false}>
              {siteSettings && <CoverLetter path='/' />}
              {personalia && <Personalia path='/who' />}
              {/* FIXME: Fix ⬇ */}
              {curriculum && <Curriculum path='cv' cv={curriculum} />}
            </Router>
          </Box>
        </Stack>
      </Card>
      <Footer />
    </main>
  );
}

export default App;
