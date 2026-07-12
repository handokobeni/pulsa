import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {IntroTitle} from './IntroTitle';
import {TimeSaved} from './TimeSaved';
import {RevenueUplift} from './RevenueUplift';
import {HealthScoreRing} from './HealthScoreRing';
import {OutroCTA} from './OutroCTA';

// Gabungan semua scene jadi satu klip motion-graphic (±18 detik)
// Sisipkan ke video utama via CapCut (intro + selingan angka + outro).
export const PulsaOpener: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={90}>
        <IntroTitle />
      </Sequence>
      <Sequence from={90} durationInFrames={120}>
        <TimeSaved />
      </Sequence>
      <Sequence from={210} durationInFrames={120}>
        <RevenueUplift />
      </Sequence>
      <Sequence from={330} durationInFrames={120}>
        <HealthScoreRing />
      </Sequence>
      <Sequence from={450} durationInFrames={90}>
        <OutroCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
