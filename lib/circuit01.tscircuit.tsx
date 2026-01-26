/**
 * Minimal RC network demo board.
 *
 * What the board does:
 * - Places a resistor and capacitor and connects them with a single trace.
 * - Serves as a simple autorouting/placement test case.
 */
const Circuit01 = () => (
  <board height={"10"}>
    <resistor resistance="1k" footprint="0402" name="R1" schX={3} pcbX={3} />
    <capacitor capacitance="1000pF" footprint="0402" name="C1" schX={-3} pcbX={-3} />
    <trace from=".R1 > .pin1" to=".C1 > .pin1" />
  </board>
)

export default Circuit01;
