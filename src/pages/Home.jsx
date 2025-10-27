import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import MissionStatement from '../components/StatsSection';

export default function Home() {
  return (
    <Box>
      <Hero />
      <MissionStatement />
    </Box>
  );
}
