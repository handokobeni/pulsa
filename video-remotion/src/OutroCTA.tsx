import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {COLORS, FONT} from './brand';

// Penutup: status jujur + collaboration ask
export const OutroCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const badgeIn = spring({frame, fps, config: {damping: 200}, durationInFrames: 24});
  const badgeScale = interpolate(badgeIn, [0, 1], [0.85, 1]);
  const line1 = interpolate(frame, [16, 34], [0, 1], {extrapolateRight: 'clamp'});
  const line2 = interpolate(frame, [34, 52], [0, 1], {extrapolateRight: 'clamp'});
  const cta = interpolate(frame, [54, 72], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.indigoDark} 0%, ${COLORS.indigo} 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONT,
        color: COLORS.white,
      }}
    >
      <div
        style={{
          transform: `scale(${badgeScale})`,
          background: 'rgba(255,255,255,0.12)',
          border: '2px solid rgba(255,255,255,0.35)',
          borderRadius: 999,
          padding: '12px 28px',
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: 2,
          marginBottom: 40,
        }}
      >
        INNOVATION LEVEL 3 · PROTOTYPE LIVE
      </div>

      <div style={{opacity: line1, fontSize: 56, fontWeight: 800, textAlign: 'center'}}>
        Menuju Closed Beta
      </div>
      <div
        style={{
          opacity: line2,
          fontSize: 34,
          fontWeight: 500,
          color: 'rgba(255,255,255,0.85)',
          marginTop: 16,
          textAlign: 'center',
          maxWidth: 1100,
        }}
      >
        Backend &amp; ingestion nyata sedang kami bangun
      </div>

      <div
        style={{
          opacity: cta,
          marginTop: 56,
          fontSize: 44,
          fontWeight: 800,
          color: COLORS.white,
          borderTop: '2px solid rgba(255,255,255,0.3)',
          paddingTop: 28,
        }}
      >
        Mari bangun bersama.
      </div>
    </AbsoluteFill>
  );
};
