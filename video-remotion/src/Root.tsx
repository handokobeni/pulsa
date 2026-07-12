import React from 'react';
import {Composition} from 'remotion';
import {FPS, WIDTH, HEIGHT} from './brand';
import {IntroTitle} from './IntroTitle';
import {TimeSaved} from './TimeSaved';
import {RevenueUplift} from './RevenueUplift';
import {HealthScoreRing} from './HealthScoreRing';
import {OutroCTA} from './OutroCTA';
import {PulsaOpener} from './PulsaOpener';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Klip gabungan (±18 dtk) — render utama */}
      <Composition
        id="PulsaOpener"
        component={PulsaOpener}
        durationInFrames={540}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {/* Scene individual — untuk disisipkan terpisah */}
      <Composition
        id="IntroTitle"
        component={IntroTitle}
        durationInFrames={90}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="TimeSaved"
        component={TimeSaved}
        durationInFrames={120}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="RevenueUplift"
        component={RevenueUplift}
        durationInFrames={120}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="HealthScoreRing"
        component={HealthScoreRing}
        durationInFrames={120}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{target: 75}}
      />
      <Composition
        id="OutroCTA"
        component={OutroCTA}
        durationInFrames={90}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
