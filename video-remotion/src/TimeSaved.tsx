import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {COLORS, FONT} from './brand';

// Animasi angka: rekap 2 jam -> 15 menit / minggu
export const TimeSaved: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Hitung mundur dari 120 menit (2 jam) ke 15 menit
  const progress = spring({frame: frame - 20, fps, config: {damping: 200}, durationInFrames: 50});
  const minutes = Math.round(interpolate(progress, [0, 1], [120, 15]));

  const labelOpacity = interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp'});
  const arrowOpacity = interpolate(frame, [20, 40], [0, 1], {extrapolateRight: 'clamp'});
  const captionOpacity = interpolate(frame, [70, 90], [0, 1], {extrapolateRight: 'clamp'});

  const numberColor = minutes <= 20 ? COLORS.green : COLORS.indigo;

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
      <div style={{opacity: labelOpacity, fontSize: 36, color: COLORS.slate, marginBottom: 16}}>
        Waktu rekap transaksi
      </div>

      <div style={{display: 'flex', alignItems: 'baseline', gap: 28}}>
        <div style={{fontSize: 220, fontWeight: 800, color: numberColor, letterSpacing: -6}}>
          {minutes}
        </div>
        <div style={{fontSize: 60, fontWeight: 700, color: COLORS.muted}}>menit</div>
      </div>

      <div style={{opacity: arrowOpacity, fontSize: 34, color: COLORS.muted, marginTop: 8}}>
        dari <b style={{color: COLORS.slate}}>±2 jam</b> → per minggu
      </div>

      <div
        style={{
          opacity: captionOpacity,
          marginTop: 40,
          fontSize: 40,
          fontWeight: 700,
          color: COLORS.green,
        }}
      >
        Hemat ~88% waktu
      </div>
    </AbsoluteFill>
  );
};
