import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {COLORS, FONT} from './brand';

// Kartu judul pembuka: "404 Inovators · PULSA" + tagline
export const IntroTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const logoIn = spring({frame, fps, config: {damping: 200}, durationInFrames: 30});
  const logoScale = interpolate(logoIn, [0, 1], [0.8, 1]);
  const logoOpacity = interpolate(logoIn, [0, 1], [0, 1]);

  const titleIn = spring({frame: frame - 12, fps, config: {damping: 200}});
  const titleY = interpolate(titleIn, [0, 1], [30, 0]);
  const titleOpacity = interpolate(frame, [12, 30], [0, 1], {extrapolateRight: 'clamp'});

  const taglineOpacity = interpolate(frame, [30, 48], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.indigoDark} 0%, ${COLORS.indigo} 55%, ${COLORS.indigoLight} 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: 6,
          color: COLORS.indigoSoft,
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        404 Inovators
      </div>

      <div
        style={{
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
          fontSize: 160,
          fontWeight: 800,
          color: COLORS.white,
          letterSpacing: -4,
          lineHeight: 1,
        }}
      >
        PULSA
      </div>

      <div
        style={{
          opacity: taglineOpacity,
          fontSize: 34,
          fontWeight: 500,
          color: 'rgba(255,255,255,0.85)',
          marginTop: 28,
          maxWidth: 1100,
          textAlign: 'center',
        }}
      >
        AI Financial Intelligence untuk UMKM Berbasis Data Transaksi
      </div>
    </AbsoluteFill>
  );
};
