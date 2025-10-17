import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import MissionStatement from '../components/StatsSection';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <Box>
      <Hero />
      <MissionStatement />
      <CallToAction />
    </Box>
  );
}
