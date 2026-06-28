import { type IconSvgProps } from '@/types/icon';

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
