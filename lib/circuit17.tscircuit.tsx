/** Pico W driving a 3x5 WS2812B LED matrix with chained data and shared 5V/GND. */
//@ts-ignore
import { usePICO_W } from "@tsci/seveibar.PICO_W"
import { WS2812B_2020 as LedWithIc } from "@tsci/seveibar.WS2812B_2020"
import { grid } from "@tscircuit/math-utils"

export default () => {
const U1 = usePICO_W("U1")
return (  
  <board width="65mm" height="60mm">
    <U1 pcbRotation="90deg" pcbX={-15} pcbY={0} />

    {/* LED matrix */}
    {grid({ cols: 3, rows: 5, xSpacing: 8, ySpacing: 5, offsetX: 20, offsetY: 5 }).map(
      ({ center, index }) => {
        const ledName = "LED" + (index + 1)
        const prevLedName = index > 0 ? "LED" + (index) : null
        return (
          <>
            {/* LED */}
            <LedWithIc schX={center.x/2} schY={5 + center.y/2} name={ledName} pcbX={center.x} pcbY={center.y} />

            {/* Connecting the LED to GND and VDD */}
            <trace from={".LED" + (index + 1) + " .GND"} to="net.GND" />
            <trace from={".LED" + (index + 1) + " .VDD"} to="net.V5" />

            {/* Connecting the LED to the previous LED */}
            {prevLedName && <trace from={".LED" + (index) + " .DO"} to={".LED" + (index + 1) + " .DI"} />}
          </>
        )
      }
    )}

    {/* Connecting the Pico to the LED matrix using GP6 pin */}
    <trace from={U1.GP6_SPI0SCK_I2C1SDA} to={".LED1 .DI"} />

    {/* Connecting the Pico to GND */}
    <trace from={U1.GND1} to="net.GND" />
    <trace from={U1.GND2} to="net.GND" />
    <trace from={U1.GND3} to="net.GND" />
    <trace from={U1.GND4} to="net.GND" />
    <trace from={U1.GND5} to="net.GND" />
    <trace from={U1.GND6} to="net.GND" />
    <trace from={U1.GND7} to="net.GND" />
  </board>
)
}