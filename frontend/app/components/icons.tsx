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

export function SvgSpinnersBarsRotateFade({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="currentColor"
          opacity=".14"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="currentColor"
          opacity=".29"
          transform="rotate(30 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="currentColor"
          opacity=".43"
          transform="rotate(60 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="currentColor"
          opacity=".57"
          transform="rotate(90 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="currentColor"
          opacity=".71"
          transform="rotate(120 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="currentColor"
          opacity=".86"
          transform="rotate(150 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="currentColor"
          transform="rotate(180 12 12)"
        />
        <animateTransform
          attributeName="transform"
          calcMode="discrete"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
        />
      </g>
    </svg>
  );
}

export function LineMdSunRisingTwoToneLoop({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="12" cy="32" r="6" fill="currentColor" fillOpacity=".3">
          <animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12" />
        </circle>
        <g>
          <path
            strokeDasharray="2"
            strokeDashoffset="2"
            d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
          >
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.7s"
              dur="0.2s"
              values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              values="2;0"
            />
          </path>
          <path
            strokeDasharray="2"
            strokeDashoffset="2"
            d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
          >
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.9s"
              dur="0.2s"
              values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.9s"
              dur="0.2s"
              values="2;0"
            />
          </path>
          <animateTransform
            attributeName="transform"
            dur="30s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </g>
      </g>
    </svg>
  );
}

export function LineMdSunnyFilledLoopToMoonFilledLoopTransition({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillOpacity="0"
        d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"
        fill="currentColor"
      >
        <animate
          id="SVGiNMVtdZD"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;SVGiNMVtdZD.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="SVGiNMVtdZD.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path
        fillOpacity="0"
        d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
        fill="currentColor"
      >
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="SVGiNMVtdZD.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="SVGiNMVtdZD.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path
        fillOpacity="0"
        d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"
        fill="currentColor"
      >
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="SVGiNMVtdZD.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="SVGiNMVtdZD.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path
        fillOpacity="0"
        d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"
        fill="currentColor"
      >
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="SVGiNMVtdZD.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="SVGiNMVtdZD.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g>
          <path
            strokeDasharray="2"
            strokeDashoffset="4"
            d="M12 21v1M21 12h1M12 3v-1M3 12h-1"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;2"
            />
          </path>
          <path
            strokeDasharray="2"
            strokeDashoffset="4"
            d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            />
          </path>
          <set fill="freeze" attributeName="opacity" begin="0.5s" to="0" />
        </g>
        <path
          fill="currentColor"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity="0"
        >
          <set fill="freeze" attributeName="opacity" begin="0.5s" to="1" />
        </path>
      </g>
      <mask id="SVGlre7ZcDF">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="22" cy="2" r="3" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="3;12"
          />
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="1;10"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="6"
        mask="url(#SVGlre7ZcDF)"
        fill="currentColor"
      >
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="6;10"
        />
        <set fill="freeze" attributeName="opacity" begin="0.5s" to="0" />
      </circle>
    </svg>
  );
}

export function MdiGithubBox({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        fill="currentColor"
      />
    </svg>
  );
}
