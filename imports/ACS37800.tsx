import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["pin8"],
  pin9: ["pin9"],
  pin10: ["pin10"],
  pin11: ["pin11"],
  pin12: ["pin12"],
  pin13: ["pin13"],
  pin14: ["pin14"],
  pin15: ["pin15"],
  pin16: ["pin16"],
} as const;

export const ACS37800 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="ACS37800"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-2.2mm"
            pcbY="2.8mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-2.2mm"
            pcbY="2.0mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-2.2mm"
            pcbY="1.2mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-2.2mm"
            pcbY="0.4mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-2.2mm"
            pcbY="-0.4mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-2.2mm"
            pcbY="-1.2mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="-2.2mm"
            pcbY="-2.0mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="-2.2mm"
            pcbY="-2.8mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />

          <smtpad
            portHints={["pin9"]}
            pcbX="2.2mm"
            pcbY="-2.8mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="2.2mm"
            pcbY="-2.0mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="2.2mm"
            pcbY="-1.2mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="2.2mm"
            pcbY="-0.4mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="2.2mm"
            pcbY="0.4mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="2.2mm"
            pcbY="1.2mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="2.2mm"
            pcbY="2.0mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="2.2mm"
            pcbY="2.8mm"
            width="0.6mm"
            height="1.6mm"
            shape="rect"
          />

          <silkscreenpath
            route={[
              { x: -1.6, y: -3.4 },
              { x: -1.6, y: 3.4 },
              { x: 1.6, y: 3.4 },
              { x: 1.6, y: -3.4 },
              { x: -1.6, y: -3.4 },
            ]}
          />
        </footprint>
      }
      {...props}
    />
  );
};
