import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["MISO"],
  pin2: ["VCC"],
  pin3: ["SCK"],
  pin4: ["MOSI"],
  pin5: ["RST"],
  pin6: ["GND"],
} as const

export const AVR_ISP_2x3 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      schWidth={1.5}
      pinLabels={pinLabels}
      manufacturerPartNumber="AVR_SPI_PROG_3X2"
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.635mm"
            pcbY="1.27mm"
            radius="0.38mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-0.635mm"
            pcbY="0mm"
            radius="0.38mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="-0.635mm"
            pcbY="-1.27mm"
            radius="0.38mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0.635mm"
            pcbY="1.27mm"
            radius="0.38mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.635mm"
            pcbY="0mm"
            radius="0.38mm"
            shape="circle"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0.635mm"
            pcbY="-1.27mm"
            radius="0.38mm"
            shape="circle"
          />
        </footprint>
      }
      {...props}
    />
  )
}
