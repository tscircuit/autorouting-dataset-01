import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["1"],
  pin2: ["2"],
  pin3: ["3"],
  pin4: ["4"],
} as const

export const PinHeader1x4 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={0.7}
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4],
        },
      }}
      manufacturerPartNumber="CONN_041X04_NO_SILK"
      footprint={
        <footprint>
          {/* 0.1" spacing = 2.54mm between pins */}
          <platedhole
            portHints={["pin1"]}
            pcbX="-3.81mm"
            pcbY="0mm"
            outerDiameter="1.7mm"
            holeDiameter="1.0mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="-1.27mm"
            pcbY="0mm"
            outerDiameter="1.7mm"
            holeDiameter="1.0mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="1.27mm"
            pcbY="0mm"
            outerDiameter="1.7mm"
            holeDiameter="1.0mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="3.81mm"
            pcbY="0mm"
            outerDiameter="1.7mm"
            holeDiameter="1.0mm"
            shape="circle"
          />
        </footprint>
      }
      {...props}
    />
  )
}
