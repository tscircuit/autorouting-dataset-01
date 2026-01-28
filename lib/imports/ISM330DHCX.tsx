/** ST ISM330DHCX 6-axis IMU (accelerometer/gyro) footprint. */
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VDD"],
  pin2: ["VDD_IO"],
  pin3: ["GND1"],
  pin4: ["GND2"],
  pin5: ["INT2"],
  pin6: ["INT1"],
  pin7: ["OCS_AUX"],
  pin8: ["SDO_AUX"],
  pin9: ["SCX"],
  pin10: ["SDX"],
  pin11: ["SDO_SAO"],
  pin12: ["SCL"],
  pin13: ["SDA_SDI_SDO"],
  pin14: ["CS_N"],
} as const

export const ISM330DHCX = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C2655101"],
      }}
      manufacturerPartNumber="ISM330DHCX"
      footprint={
        <footprint>
          {/* Pad order matches Eagle package P1..P14 (physically clockwise) */}
          <smtpad
            portHints={["pin1"]}
            pcbX="-1.1625mm"
            pcbY="0.75mm"
            width="0.48mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-1.1625mm"
            pcbY="0.25mm"
            width="0.48mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.1625mm"
            pcbY="-0.25mm"
            width="0.48mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-1.1625mm"
            pcbY="-0.75mm"
            width="0.48mm"
            height="0.3mm"
            shape="rect"
          />

          <smtpad
            portHints={["pin5"]}
            pcbX="-0.5mm"
            pcbY="-1mm"
            width="0.3mm"
            height="0.48mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="0mm"
            pcbY="-1mm"
            width="0.3mm"
            height="0.48mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="0.5mm"
            pcbY="-1mm"
            width="0.3mm"
            height="0.48mm"
            shape="rect"
          />

          <smtpad
            portHints={["pin8"]}
            pcbX="1.1625mm"
            pcbY="-0.75mm"
            width="0.48mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="1.1625mm"
            pcbY="-0.25mm"
            width="0.48mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="1.1625mm"
            pcbY="0.25mm"
            width="0.48mm"
            height="0.3mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.1625mm"
            pcbY="0.75mm"
            width="0.48mm"
            height="0.3mm"
            shape="rect"
          />

          <smtpad
            portHints={["pin12"]}
            pcbX="0.5mm"
            pcbY="1mm"
            width="0.3mm"
            height="0.48mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="0mm"
            pcbY="1mm"
            width="0.3mm"
            height="0.48mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-0.5mm"
            pcbY="1mm"
            width="0.3mm"
            height="0.48mm"
            shape="rect"
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=1e27b85210a0453eb361fa5def23f788&pn=C2655101",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: {
          x: -0.000025399999913133797,
          y: 0.0001015999999935957,
          z: 2.0499975,
        },
      }}
      {...props}
    />
  )
}
