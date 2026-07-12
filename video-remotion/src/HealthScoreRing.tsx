import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {COLORS, FONT} from './brand';

// Ring Business Health Score beranimasi 0 -> 75 (kategori B)
export const HealthScoreRing: React.FC<{target?: number}> = ({target = 75}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const size = 460;
  const stroke = 40;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = spring({frame: frame - 15, fps, config: {damping: 200}, durationInFrames: 55});
  const value = Math.round(interpolate(progress, [0, 1], [0, target]));
  const dashOffset = circumference - (value / 100) * circumference;

  const grade = value >= 80 ? 'A' : value >= 65 ? 'B' : value >= 50 ? 'C' : 'D';
  const titleOpacity = interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp'});
  const compOpacity = interpolate(frame, [55, 75], [0, 1], {extrapolateRight: 'clamp'});

  const components = [
    'Revenue Stability',
    'Transaction Frequency',
    'Customer Diversity',
    'Channel Diversity',
    'Growth Trend',
  ];

  return (
    <AbsoluteFill
      style={{
        background: COLORS.bg,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONT,
        color: COLORS.ink,
        flexDirection: 'row',
        gap: 90,
      }}
    >
      <div style={{position: 'relative', width: size, height: size}}>
        <svg width={size} height={size} style={{transform: 'rotate(-90deg)'}}>
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="#E2E8F0" strokeWidth={stroke} fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={COLORS.indigo}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{fontSize: 130, fontWeight: 800, letterSpacing: -4}}>{value}</div>
          <div style={{fontSize: 40, fontWeight: 700, color: COLORS.indigo}}>Grade {grade}</div>
        </div>
      </div>

      <div style={{maxWidth: 620}}>
        <div style={{opacity: titleOpacity, fontSize: 46, fontWeight: 800, marginBottom: 8}}>
          Business Health Score
        </div>
        <div style={{opacity: titleOpacity, fontSize: 30, color: COLORS.muted, marginBottom: 28}}>
          5 komponen · skor 0–100
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
          {components.map((c, i) => (
            <div
              key={c}
              style={{
                opacity: interpolate(frame, [55 + i * 6, 70 + i * 6], [0, 1], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                fontSize: 30,
                color: COLORS.slate,
              }}
            >
              <span style={{width: 12, height: 12, borderRadius: 4, background: COLORS.indigo}} />
              {c}
            </div>
          ))}
        </div>
        <div style={{opacity: compOpacity, marginTop: 24, fontSize: 26, color: COLORS.muted}}>
          Transparan &amp; dapat ditelusuri per komponen
        </div>
      </div>
    </AbsoluteFill>
  );
};
