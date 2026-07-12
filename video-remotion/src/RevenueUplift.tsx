import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {COLORS, FONT} from './brand';

// Potensi kenaikan omzet +10-15% (DIBINGKAI JUJUR sebagai potensi/proyeksi)
export const RevenueUplift: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const labelOpacity = interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp'});

  // Bar "Tanpa PULSA" (baseline) vs "Dengan PULSA" (naik ~12%)
  const grow = spring({frame: frame - 20, fps, config: {damping: 200}, durationInFrames: 45});
  const baseHeight = 300;
  const upliftHeight = interpolate(grow, [0, 1], [baseHeight, baseHeight * 1.12]);

  const numberOpacity = interpolate(frame, [50, 68], [0, 1], {extrapolateRight: 'clamp'});
  const numberScale = spring({frame: frame - 50, fps, config: {damping: 200}, durationInFrames: 24});
  const footnoteOpacity = interpolate(frame, [78, 96], [0, 1], {extrapolateRight: 'clamp'});

  const bar = (label: string, height: number, color: string, highlight: boolean) => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
      <div
        style={{
          width: 180,
          height,
          background: color,
          borderRadius: '12px 12px 0 0',
          boxShadow: highlight ? `0 0 40px ${COLORS.green}55` : 'none',
        }}
      />
      <div style={{fontSize: 28, fontWeight: 600, color: highlight ? COLORS.green : COLORS.muted}}>
        {label}
      </div>
    </div>
  );

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONT,
        color: COLORS.ink,
      }}
    >
      <div style={{opacity: labelOpacity, fontSize: 36, color: COLORS.slate, marginBottom: 48}}>
        Potensi kenaikan omzet dalam 6 bulan
      </div>

      <div style={{display: 'flex', alignItems: 'flex-end', gap: 90, height: 380}}>
        {bar('Tanpa PULSA', baseHeight, '#CBD5E1', false)}
        {bar('Dengan PULSA', upliftHeight, COLORS.green, true)}
      </div>

      <div
        style={{
          opacity: numberOpacity,
          transform: `scale(${interpolate(numberScale, [0, 1], [0.8, 1])})`,
          marginTop: 40,
          fontSize: 96,
          fontWeight: 800,
          color: COLORS.green,
          letterSpacing: -2,
        }}
      >
        +10–15%
      </div>

      <div style={{opacity: footnoteOpacity, marginTop: 12, fontSize: 24, color: COLORS.muted}}>
        *potensi bagi pengguna yang menerapkan rekomendasi — divalidasi via pilot/case study
      </div>
    </AbsoluteFill>
  );
};
