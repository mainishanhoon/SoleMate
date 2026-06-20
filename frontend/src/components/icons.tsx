import * as React from 'react';

import { IconSvgProps } from '@/types';

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M18.88 1.099Q17.78-.001 16.233 0H3.746Q2.198 0 1.099 1.099Q-.001 2.199 0 3.746v12.487q0 1.548 1.099 2.647q1.1 1.1 2.647 1.099H6.66q.285 0 .429-.02a.5.5 0 0 0 .286-.169q.143-.15.143-.435l-.007-.885q-.006-.846-.006-1.34l-.3.052q-.285.052-.721.046a5.6 5.6 0 0 1-.904-.091a2 2 0 0 1-.872-.39a1.65 1.65 0 0 1-.572-.8l-.13-.3a3.3 3.3 0 0 0-.41-.663q-.28-.364-.566-.494l-.09-.065a1 1 0 0 1-.17-.156a.7.7 0 0 1-.117-.182q-.039-.092.065-.15q.104-.06.378-.059l.26.04q.26.051.643.311a2.1 2.1 0 0 1 .631.677q.3.532.722.813q.423.28.852.28t.742-.065a2.6 2.6 0 0 0 .585-.196q.117-.871.637-1.34a9 9 0 0 1-1.333-.234a5.3 5.3 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872q-.416-.52-.683-1.365q-.266-.846-.266-1.952q0-1.573 1.027-2.68q-.48-1.183.091-2.652q.378-.118 1.119.175t1.086.5q.345.21.553.352a9.2 9.2 0 0 1 2.497-.338q1.288 0 2.498.338l.494-.312a7 7 0 0 1 1.197-.572q.689-.26 1.054-.143q.585 1.47.103 2.653q1.028 1.105 1.028 2.68q0 1.106-.267 1.957q-.266.852-.689 1.366a3.7 3.7 0 0 1-1.053.865q-.63.351-1.223.507a9 9 0 0 1-1.333.235q.675.585.676 1.846v3.11q0 .22.065.357a.36.36 0 0 0 .208.189q.143.052.254.064q.111.014.318.013h2.914q1.548 0 2.647-1.099t1.099-2.647V3.746q0-1.548-1.1-2.647z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SpinnersBlocksShuffle3 = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <rect fill="currentColor" height="10" rx="1" width="10" x="1" y="1">
        <animate
          attributeName="x"
          begin="0;SVGo3aOUHlJ.end"
          dur="0.2s"
          fill="freeze"
          id="SVG7WybndBt"
          values="1;13"
        />
        <animate
          attributeName="y"
          begin="SVGFpk9ncYc.end"
          dur="0.2s"
          fill="freeze"
          id="SVGVoKldbWM"
          values="1;13"
        />
        <animate
          attributeName="x"
          begin="SVGaI8owdNK.end"
          dur="0.2s"
          fill="freeze"
          id="SVGKsXgPbui"
          values="13;1"
        />
        <animate
          attributeName="y"
          begin="SVG28A4To9L.end"
          dur="0.2s"
          fill="freeze"
          id="SVG7JzAfdGT"
          values="13;1"
        />
      </rect>
      <rect fill="currentColor" height="10" rx="1" width="10" x="1" y="13">
        <animate
          attributeName="y"
          begin="SVG7WybndBt.end"
          dur="0.2s"
          fill="freeze"
          id="SVGUiS2jeZq"
          values="13;1"
        />
        <animate
          attributeName="x"
          begin="SVGVoKldbWM.end"
          dur="0.2s"
          fill="freeze"
          id="SVGU0vu2GEM"
          values="1;13"
        />
        <animate
          attributeName="y"
          begin="SVGKsXgPbui.end"
          dur="0.2s"
          fill="freeze"
          id="SVGOIboFeLf"
          values="1;13"
        />
        <animate
          attributeName="x"
          begin="SVG7JzAfdGT.end"
          dur="0.2s"
          fill="freeze"
          id="SVG14lAaeuv"
          values="13;1"
        />
      </rect>
      <rect fill="currentColor" height="10" rx="1" width="10" x="13" y="13">
        <animate
          attributeName="x"
          begin="SVGUiS2jeZq.end"
          dur="0.2s"
          fill="freeze"
          id="SVGFpk9ncYc"
          values="13;1"
        />
        <animate
          attributeName="y"
          begin="SVGU0vu2GEM.end"
          dur="0.2s"
          fill="freeze"
          id="SVGaI8owdNK"
          values="13;1"
        />
        <animate
          attributeName="x"
          begin="SVGOIboFeLf.end"
          dur="0.2s"
          fill="freeze"
          id="SVG28A4To9L"
          values="1;13"
        />
        <animate
          attributeName="y"
          begin="SVG14lAaeuv.end"
          dur="0.2s"
          fill="freeze"
          id="SVGo3aOUHlJ"
          values="1;13"
        />
      </rect>
    </svg>
  );
};
