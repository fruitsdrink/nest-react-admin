import React from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section<{ $bg: string; $opacity: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bg};
  opacity: ${(props) => props.$opacity};
  pointer-events: none;
`;

const animate = keyframes`
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  `;

const Span = styled.span<{ $i: number; $count: number; $color: string }>`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${(props) => props.$color};
  border-radius: 50%;
  --i: ${(props) => props.$i};
  transform: rotate(calc(var(--i) * (360deg / ${(props) => props.$count})))
    translateY(35px);
  animation: ${animate} 1.5s linear infinite;
  animation-delay: calc(var(--i) * 0.1s);
  opacity: 0;
`;

interface Props {
  color?: React.CSSProperties["color"];
  bgColor?: React.CSSProperties["backgroundColor"];
  opacity?: number;
}
export const NraLoader: React.FC<Props> = ({ color, bgColor, opacity }) => {
  const dotCount = 15;

  return (
    <Section $bg={bgColor || "#fff"} $opacity={opacity || 0.9}>
      {Array(dotCount)
        .fill(0)
        .map((_, i) => (
          <Span
            key={i + 1}
            $i={i + 1}
            $count={dotCount}
            $color={color || "#333"}
          ></Span>
        ))}
    </Section>
  );
};
