import { JoystickThumb } from "imports/JoystickThumb"
import { sel } from "tscircuit"

/**
 * Joystick thumbstick breakout with single 1x8 header.
 *
 * What the board does:
 * - Breaks out the two potentiometer axes and the push switch.
 * - Provides a simple 1x8 header with all joystick signals.
 */
export default () => (
  <board width="40mm" height="35mm">
    <JoystickThumb
      name="U1"
      pcbX={5}
      pcbY={0}
      connections={{
        pin1: sel.net().VPLUS,
        pin2: sel.net().V,
        pin3: sel.net().VMINUS,
        pin4: sel.net().HPLUS,
        pin5: sel.net().H,
        pin6: sel.net().HMINUS,
        pin7: sel.net().SELPLUS,
        pin8: sel.net().SELMINUS,
      }}
    />

    <pinheader
      name="J1"
      pinCount={8}
      pitch="2.54mm"
      pcbX={-14}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: sel.net().VPLUS,
        pin2: sel.net().V,
        pin3: sel.net().VMINUS,
        pin4: sel.net().HPLUS,
        pin5: sel.net().H,
        pin6: sel.net().HMINUS,
        pin7: sel.net().SELPLUS,
        pin8: sel.net().SELMINUS,
      }}
    />
  </board>
)
