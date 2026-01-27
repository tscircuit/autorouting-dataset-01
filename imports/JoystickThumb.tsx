/** Joystick module footprint with multiple pins. */
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VPLUS"],
  pin2: ["V"],
  pin3: ["VMINUS"],
  pin4: ["HPLUS"],
  pin5: ["H"],
  pin6: ["HMINUS"],
  pin7: ["SELPLUS"],
  pin8: ["SELMINUS"],
} as const

export const JoystickThumb = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      manufacturerPartNumber="COM-09032"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            pcbX="-10.16mm"
            pcbY="2.54mm"
            outerDiameter="1.778mm"
            holeDiameter="0.889mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="-10.16mm"
            pcbY="0mm"
            outerDiameter="1.778mm"
            holeDiameter="0.889mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="-10.16mm"
            pcbY="-2.54mm"
            outerDiameter="1.778mm"
            holeDiameter="0.889mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="-2.54mm"
            pcbY="-10.16mm"
            outerDiameter="1.778mm"
            holeDiameter="0.889mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="0mm"
            pcbY="-10.16mm"
            outerDiameter="1.778mm"
            holeDiameter="0.889mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="2.54mm"
            pcbY="-10.16mm"
            outerDiameter="1.778mm"
            holeDiameter="0.889mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="-3.175mm"
            pcbY="12.7mm"
            outerDiameter="1.778mm"
            holeDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin8"]}
            pcbX="-3.175mm"
            pcbY="7.62mm"
            outerDiameter="1.778mm"
            holeDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            pcbX="7.62mm"
            pcbY="6.6675mm"
            outerDiameter="2.286mm"
            holeDiameter="1.397mm"
            shape="circle"
          />
          <platedhole
            pcbX="7.62mm"
            pcbY="-6.6675mm"
            outerDiameter="2.286mm"
            holeDiameter="1.397mm"
            shape="circle"
          />
          <platedhole
            pcbX="3.175mm"
            pcbY="12.7mm"
            outerDiameter="1.778mm"
            holeDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            pcbX="3.175mm"
            pcbY="7.62mm"
            outerDiameter="1.778mm"
            holeDiameter="0.9mm"
            shape="circle"
          />
          <platedhole
            pcbX="-7.62mm"
            pcbY="6.6675mm"
            outerDiameter="2.286mm"
            holeDiameter="1.397mm"
            shape="circle"
          />
          <platedhole
            pcbX="-7.62mm"
            pcbY="-6.6675mm"
            outerDiameter="2.286mm"
            holeDiameter="1.397mm"
            shape="circle"
          />
        </footprint>
      }
      schWidth={1.4}
      schHeight={3}
      {...props}
    />
  )
}
