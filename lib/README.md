This is the folder where we store the circuits that we later convert to simple route JSON for autorouter performance and solvability tests.

This file also acts as documentation for the available circuits and what they do. We only use the root import path here to refer to a particular file.

- lib/circuit01.tscircuit.tsx
Minimal RC network demo board: one resistor, one capacitor, and a single trace between them.

- lib/circuit02.tscircuit.tsx
TC78H670FTG-based motor driver breakout. What the board does: - Breaks out the motor driver IC pins for VM, logic, and outputs. - Includes input/output filtering and reference components. - Intended as a compact test board for routing and power layouts.

- lib/circuit03.tscircuit.tsx
ATTiny85-based joystick/I2C breakout board with onboard pull-ups and status LED. What the board does: - Reads a joystick (X/Y axes + select) via the ATTiny85. - Exposes I2C (SDA/SCL) along with 3.3V and GND on multiple connectors. - Includes a pogo-style AVR ISP header for programming the ATTiny85. - Provides optional I2C pull-ups via a 3-pin solder jumper. - Shows power/activity with an on-board LED.

- lib/circuit04.tscircuit.tsx
ATTiny85-based joystick/I2C breakout board with onboard pull-ups and status LED. What the board does: - Reads a joystick (X/Y axes + select) via the ATTiny85. - Exposes I2C (SDA/SCL) along with 3.3V and GND on multiple connectors. - Includes a pogo-style AVR ISP header for programming the ATTiny85. - Provides optional I2C pull-ups via a 3-pin solder jumper. - Shows power/activity with an on-board LED.

- lib/circuit05.tscircuit.tsx
Simple voltage-divider with LED indicator and 1x3 header. What the board does: - Provides a two-resistor divider from VIN to VOUT. - Exposes VIN/VOUT/GND on a header for probing. - Drives an LED from VOUT through a current-limit resistor.

- lib/circuit06.tscircuit.tsx
Dual RC low-pass filter with test header. What the board does: - Filters two input signals with identical RC networks. - Exposes IN_A/OUT_A and IN_B/OUT_B on a 1x6 header.

- lib/circuit07.tscircuit.tsx
Button input with pull-up and LED output. What the board does: - Provides a pull-up resistor to VCC for a momentary button input. - Exposes VCC/BTN/GND/LED on a 1x4 header and BTN/GND on a 1x2 header. - Lights an LED when the button signal is active.

- lib/circuit08.tscircuit.tsx
TB6612FNG motor driver board with dual 8-pin headers and bypass capacitors.

- lib/circuit09.tscircuit.tsx
USB-C + ESP32-S3 Mini board with 5V-to-3.3V regulation and USB-C config resistors.

- lib/circuit10.tscircuit.tsx
ACS37800-based Qwiic power meter board with high-current pass-through holes. What the board does: - Measures voltage and current via the ACS37800 and exposes data over I2C. - Provides two Qwiic connectors for daisy-chained I2C. - Includes I2C pull-ups and local decoupling on the logic supply. - Adds two large current holes for the primary conductor path.

- lib/circuit11.tscircuit.tsx
I2C bus splitter with Qwiic connectors and header breakout. What the board does: - Provides two Qwiic connectors for daisy-chained I2C. - Breaks out VCC/GND/SDA/SCL to a 1x4 header. - Includes 2.2k pull-ups and a local decoupling capacitor.

- lib/circuit12.tscircuit.tsx
Low-side load switch with gate pull-down and status LED. What the board does: - Switches a load to ground using a small 3-pin FET device. - Exposes VIN/LOAD/GND and SIG/VIN/GND on two 1x3 headers. - Adds a gate pull-down and a signal LED for quick debugging.

- lib/circuit13.tscircuit.tsx
Dual LED indicator board with external control pins. What the board does: - Provides two LEDs with series resistors tied to VCC. - Exposes the LED cathodes for sinking current externally. - Breaks out VCC/GND and two LED control pins on a 1x4 header.

- lib/circuit14.tscircuit.tsx
Joystick thumbstick breakout with single 1x8 header. What the board does: - Breaks out the two potentiometer axes and the push switch. - Provides a simple 1x8 header with all joystick signals.

- lib/circuit15.tscircuit.tsx
Quad RC low-pass filter bank with a 1x12 header. What the board does: - Filters four independent signals with identical RC networks. - Exposes IN/OUT/GND for each channel on a single header.

- lib/circuit16.tscircuit.tsx
60% keyboard matrix using a Pico microcontroller and layouts.default60.

- lib/circuit17.tscircuit.tsx
Pico W driving a 3x5 WS2812B LED matrix with chained data and shared 5V/GND.

- lib/circuit18.tscircuit.tsx
ISM330DHCX IMU + MMC5983MA magnetometer breakout with I2C headers, jumpers, and LED.
