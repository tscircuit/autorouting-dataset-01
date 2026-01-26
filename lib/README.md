This is the folder where we store the circuits that we later convert to simple route JSON for autorouter performance and solvability tests.

This file also acts as documentation for the available circuits and what they do. We only use the root import path here to refer to a particular file.

- lib/circuit01.tscircuit.tsx
Minimal RC network demo board: one resistor, one capacitor, and a single trace between them.

- lib/circuit02.tscircuit.tsx
TC78H670FTG motor driver breakout with power/logic pins and basic filtering and reference components.

- lib/circuit03.tscircuit.tsx
ATTiny85-based joystick/I2C breakout with optional I2C pull-ups, an ISP header, and a status LED.

- lib/circuit04.tscircuit.tsx
Variant of circuit03 with similar functionality and slightly shifted PCB placements.

- lib/circuit05.tscircuit.tsx
Simple voltage-divider with LED indicator and 1x3 header for VIN/VOUT/GND.

- lib/circuit06.tscircuit.tsx
Dual RC low-pass filter board with a 1x6 header for two signal channels.

- lib/circuit07.tscircuit.tsx
Button input with pull-up and LED output, using headers for external connections.
