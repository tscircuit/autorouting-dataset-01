This is the folder where we store the circuits that we later convert to simple route JSON for autorouter performance and solvability tests.

This file also acts as documentation for the available circuits and what they do. We only use the root import path here to refer to a particular file.

- lib/circuit001.tsx
Minimal RC network demo board: one resistor, one capacitor, and a single trace between them.

- lib/circuit002.tsx
TC78H670FTG-based motor driver breakout. What the board does: - Breaks out the motor driver IC pins for VM, logic, and outputs. - Includes input/output filtering and reference components. - Intended as a compact test board for routing and power layouts.

- lib/circuit003.tsx
ATTiny85-based joystick/I2C breakout board with onboard pull-ups and status LED. What the board does: - Reads a joystick (X/Y axes + select) via the ATTiny85. - Exposes I2C (SDA/SCL) along with 3.3V and GND on multiple connectors. - Includes a pogo-style AVR ISP header for programming the ATTiny85. - Provides optional I2C pull-ups via a 3-pin solder jumper. - Shows power/activity with an on-board LED.

- lib/circuit004.tsx
ATTiny85-based joystick/I2C breakout board with onboard pull-ups and status LED. What the board does: - Reads a joystick (X/Y axes + select) via the ATTiny85. - Exposes I2C (SDA/SCL) along with 3.3V and GND on multiple connectors. - Includes a pogo-style AVR ISP header for programming the ATTiny85. - Provides optional I2C pull-ups via a 3-pin solder jumper. - Shows power/activity with an on-board LED.

- lib/circuit005.tsx
Simple voltage-divider with LED indicator and 1x3 header. What the board does: - Provides a two-resistor divider from VIN to VOUT. - Exposes VIN/VOUT/GND on a header for probing. - Drives an LED from VOUT through a current-limit resistor.

- lib/circuit006.tsx
Dual RC low-pass filter with test header. What the board does: - Filters two input signals with identical RC networks. - Exposes IN_A/OUT_A and IN_B/OUT_B on a 1x6 header.

- lib/circuit007.tsx
Button input with pull-up and LED output. What the board does: - Provides a pull-up resistor to VCC for a momentary button input. - Exposes VCC/BTN/GND/LED on a 1x4 header and BTN/GND on a 1x2 header. - Lights an LED when the button signal is active.

- lib/circuit008.tsx
TB6612FNG motor driver board with dual 8-pin headers and bypass capacitors.

- lib/circuit009.tsx
USB-C + ESP32-S3 Mini board with 5V-to-3.3V regulation and USB-C config resistors.

- lib/circuit010.tsx
ACS37800-based Qwiic power meter board with high-current pass-through holes. What the board does: - Measures voltage and current via the ACS37800 and exposes data over I2C. - Provides two Qwiic connectors for daisy-chained I2C. - Includes I2C pull-ups and local decoupling on the logic supply. - Adds two large current holes for the primary conductor path.

- lib/circuit011.tsx
I2C bus splitter with Qwiic connectors and header breakout. What the board does: - Provides two Qwiic connectors for daisy-chained I2C. - Breaks out VCC/GND/SDA/SCL to a 1x4 header. - Includes 2.2k pull-ups and a local decoupling capacitor.

- lib/circuit012.tsx
Low-side load switch with gate pull-down and status LED. What the board does: - Switches a load to ground using a small 3-pin FET device. - Exposes VIN/LOAD/GND and SIG/VIN/GND on two 1x3 headers. - Adds a gate pull-down and a signal LED for quick debugging.

- lib/circuit013.tsx
Dual LED indicator board with external control pins. What the board does: - Provides two LEDs with series resistors tied to VCC. - Exposes the LED cathodes for sinking current externally. - Breaks out VCC/GND and two LED control pins on a 1x4 header.

- lib/circuit014.tsx
Joystick thumbstick breakout with single 1x8 header. What the board does: - Breaks out the two potentiometer axes and the push switch. - Provides a simple 1x8 header with all joystick signals.

- lib/circuit015.tsx
Quad RC low-pass filter bank with a 1x12 header. What the board does: - Filters four independent signals with identical RC networks. - Exposes IN/OUT/GND for each channel on a single header.

- lib/circuit016.tsx
60% keyboard matrix using a Pico microcontroller and layouts.default60.

- lib/circuit017.tsx
Pico W driving a 3x5 WS2812B LED matrix with chained data and shared 5V/GND.

- lib/circuit018.tsx
ISM330DHCX IMU + MMC5983MA magnetometer breakout with I2C headers, jumpers, and LED.

- lib/circuit019.tsx
QRE1113 reflectance sensor breakout with 3-pin header and bias resistors.

- lib/circuit020.tsx
QRE1113 analog line sensor breakout with labeled silkscreen and 3-pin header.

- lib/circuit021.tsx
RFID reader module breakout for ID-xx boards with dual headers.

- lib/circuit100.tsx
Randomly generated circuit 100.

- lib/circuit101.tsx
Randomly generated circuit 101.

- lib/circuit102.tsx
Randomly generated circuit 102.

- lib/circuit103.tsx
Randomly generated circuit 103.

- lib/circuit104.tsx
Randomly generated circuit 104.

- lib/circuit105.tsx
Randomly generated circuit 105.

- lib/circuit106.tsx
Randomly generated circuit 106.

- lib/circuit107.tsx
Randomly generated circuit 107.

- lib/circuit108.tsx
Randomly generated circuit 108.

- lib/circuit109.tsx
Randomly generated circuit 109.

- lib/circuit110.tsx
Randomly generated circuit 110.

- lib/circuit111.tsx
Randomly generated circuit 111.

- lib/circuit112.tsx
Randomly generated circuit 112.

- lib/circuit113.tsx
Randomly generated circuit 113.

- lib/circuit114.tsx
Randomly generated circuit 114.

- lib/circuit115.tsx
Randomly generated circuit 115.

- lib/circuit116.tsx
Randomly generated circuit 116.

- lib/circuit117.tsx
Randomly generated circuit 117.

- lib/circuit118.tsx
Randomly generated circuit 118.

- lib/circuit119.tsx
Randomly generated circuit 119.

- lib/circuit120.tsx
Randomly generated circuit 120.

- lib/circuit121.tsx
Randomly generated circuit 121.

- lib/circuit122.tsx
Randomly generated circuit 122.

- lib/circuit123.tsx
Randomly generated circuit 123.

- lib/circuit124.tsx
Randomly generated circuit 124.

- lib/circuit125.tsx
Randomly generated circuit 125.

- lib/circuit126.tsx
Randomly generated circuit 126.

- lib/circuit127.tsx
Randomly generated circuit 127.

- lib/circuit128.tsx
Randomly generated circuit 128.

- lib/circuit129.tsx
Randomly generated circuit 129.

- lib/circuit130.tsx
Randomly generated circuit 130.

- lib/circuit131.tsx
Randomly generated circuit 131.

- lib/circuit132.tsx
Randomly generated circuit 132.

- lib/circuit133.tsx
Randomly generated circuit 133.

- lib/circuit134.tsx
Randomly generated circuit 134.

- lib/circuit135.tsx
Randomly generated circuit 135.

- lib/circuit136.tsx
Randomly generated circuit 136.

- lib/circuit137.tsx
Randomly generated circuit 137.

- lib/circuit138.tsx
Randomly generated circuit 138.

- lib/circuit139.tsx
Randomly generated circuit 139.

- lib/circuit140.tsx
Randomly generated circuit 140.

- lib/circuit141.tsx
Randomly generated circuit 141.

- lib/circuit142.tsx
Randomly generated circuit 142.

- lib/circuit143.tsx
Randomly generated circuit 143.

- lib/circuit144.tsx
Randomly generated circuit 144.

- lib/circuit145.tsx
Randomly generated circuit 145.

- lib/circuit146.tsx
Randomly generated circuit 146.

- lib/circuit147.tsx
Randomly generated circuit 147.

- lib/circuit148.tsx
Randomly generated circuit 148.

- lib/circuit149.tsx
Randomly generated circuit 149.

- lib/circuit150.tsx
Randomly generated circuit 150.

- lib/circuit151.tsx
Randomly generated circuit 151.

- lib/circuit152.tsx
Randomly generated circuit 152.

- lib/circuit153.tsx
Randomly generated circuit 153.

- lib/circuit154.tsx
Randomly generated circuit 154.

- lib/circuit155.tsx
Randomly generated circuit 155.

- lib/circuit156.tsx
Randomly generated circuit 156.

- lib/circuit157.tsx
Randomly generated circuit 157.

- lib/circuit158.tsx
Randomly generated circuit 158.

- lib/circuit159.tsx
Randomly generated circuit 159.

- lib/circuit160.tsx
Randomly generated circuit 160.

- lib/circuit161.tsx
Randomly generated circuit 161.

- lib/circuit162.tsx
Randomly generated circuit 162.

- lib/circuit163.tsx
Randomly generated circuit 163.

- lib/circuit164.tsx
Randomly generated circuit 164.

- lib/circuit165.tsx
Randomly generated circuit 165.

- lib/circuit166.tsx
Randomly generated circuit 166.

- lib/circuit167.tsx
Randomly generated circuit 167.

- lib/circuit168.tsx
Randomly generated circuit 168.

- lib/circuit169.tsx
Randomly generated circuit 169.

- lib/circuit170.tsx
Randomly generated circuit 170.

- lib/circuit171.tsx
Randomly generated circuit 171.

- lib/circuit172.tsx
Randomly generated circuit 172.

- lib/circuit173.tsx
Randomly generated circuit 173.

- lib/circuit174.tsx
Randomly generated circuit 174.

- lib/circuit175.tsx
Randomly generated circuit 175.

- lib/circuit176.tsx
Randomly generated circuit 176.

- lib/circuit177.tsx
Randomly generated circuit 177.

- lib/circuit178.tsx
Randomly generated circuit 178.

- lib/circuit179.tsx
Randomly generated circuit 179.

- lib/circuit180.tsx
Randomly generated circuit 180.

- lib/circuit181.tsx
Randomly generated circuit 181.

- lib/circuit182.tsx
Randomly generated circuit 182.

- lib/circuit183.tsx
Randomly generated circuit 183.

- lib/circuit184.tsx
Randomly generated circuit 184.

- lib/circuit185.tsx
Randomly generated circuit 185.

- lib/circuit186.tsx
Randomly generated circuit 186.

- lib/circuit187.tsx
Randomly generated circuit 187.

- lib/circuit188.tsx
Randomly generated circuit 188.

- lib/circuit189.tsx
Randomly generated circuit 189.

- lib/circuit190.tsx
Randomly generated circuit 190.

- lib/circuit191.tsx
Randomly generated circuit 191.

- lib/circuit192.tsx
Randomly generated circuit 192.

- lib/circuit193.tsx
Randomly generated circuit 193.

- lib/circuit194.tsx
Randomly generated circuit 194.

- lib/circuit195.tsx
Randomly generated circuit 195.

- lib/circuit196.tsx
Randomly generated circuit 196.

- lib/circuit197.tsx
Randomly generated circuit 197.

- lib/circuit198.tsx
Randomly generated circuit 198.

- lib/circuit199.tsx
Randomly generated circuit 199.

- lib/circuit200.tsx
Randomly generated circuit 200.

- lib/circuit201.tsx
Randomly generated circuit 201.

- lib/circuit202.tsx
Randomly generated circuit 202.

- lib/circuit203.tsx
Randomly generated circuit 203.

- lib/circuit204.tsx
Randomly generated circuit 204.

- lib/circuit205.tsx
Randomly generated circuit 205.

- lib/circuit206.tsx
Randomly generated circuit 206.

- lib/circuit207.tsx
Randomly generated circuit 207.

- lib/circuit208.tsx
Randomly generated circuit 208.

- lib/circuit209.tsx
Randomly generated circuit 209.

- lib/circuit210.tsx
Randomly generated circuit 210.

- lib/circuit211.tsx
Randomly generated circuit 211.

- lib/circuit212.tsx
Randomly generated circuit 212.

- lib/circuit213.tsx
Randomly generated circuit 213.

- lib/circuit214.tsx
Randomly generated circuit 214.

- lib/circuit215.tsx
Randomly generated circuit 215.

- lib/circuit216.tsx
Randomly generated circuit 216.

- lib/circuit217.tsx
Randomly generated circuit 217.

- lib/circuit218.tsx
Randomly generated circuit 218.

- lib/circuit219.tsx
Randomly generated circuit 219.

- lib/circuit220.tsx
Randomly generated circuit 220.

- lib/circuit221.tsx
Randomly generated circuit 221.

- lib/circuit222.tsx
Randomly generated circuit 222.

- lib/circuit223.tsx
Randomly generated circuit 223.

- lib/circuit224.tsx
Randomly generated circuit 224.

- lib/circuit225.tsx
Randomly generated circuit 225.

- lib/circuit226.tsx
Randomly generated circuit 226.

- lib/circuit227.tsx
Randomly generated circuit 227.

- lib/circuit228.tsx
Randomly generated circuit 228.

- lib/circuit229.tsx
Randomly generated circuit 229.

- lib/circuit230.tsx
Randomly generated circuit 230.

- lib/circuit231.tsx
Randomly generated circuit 231.

- lib/circuit232.tsx
Randomly generated circuit 232.

- lib/circuit233.tsx
Randomly generated circuit 233.

- lib/circuit234.tsx
Randomly generated circuit 234.

- lib/circuit235.tsx
Randomly generated circuit 235.

- lib/circuit236.tsx
Randomly generated circuit 236.

- lib/circuit237.tsx
Randomly generated circuit 237.

- lib/circuit238.tsx
Randomly generated circuit 238.

- lib/circuit239.tsx
Randomly generated circuit 239.

- lib/circuit240.tsx
Randomly generated circuit 240.

- lib/circuit241.tsx
Randomly generated circuit 241.

- lib/circuit242.tsx
Randomly generated circuit 242.

- lib/circuit243.tsx
Randomly generated circuit 243.

- lib/circuit244.tsx
Randomly generated circuit 244.

- lib/circuit245.tsx
Randomly generated circuit 245.

- lib/circuit246.tsx
Randomly generated circuit 246.

- lib/circuit247.tsx
Randomly generated circuit 247.

- lib/circuit248.tsx
Randomly generated circuit 248.

- lib/circuit249.tsx
Randomly generated circuit 249.

- lib/circuit250.tsx
Randomly generated circuit 250.

- lib/circuit251.tsx
Randomly generated circuit 251.

- lib/circuit252.tsx
Randomly generated circuit 252.

- lib/circuit253.tsx
Randomly generated circuit 253.

- lib/circuit254.tsx
Randomly generated circuit 254.

- lib/circuit255.tsx
Randomly generated circuit 255.

- lib/circuit256.tsx
Randomly generated circuit 256.

- lib/circuit257.tsx
Randomly generated circuit 257.

- lib/circuit258.tsx
Randomly generated circuit 258.

- lib/circuit259.tsx
Randomly generated circuit 259.

- lib/circuit260.tsx
Randomly generated circuit 260.

- lib/circuit261.tsx
Randomly generated circuit 261.

- lib/circuit262.tsx
Randomly generated circuit 262.

- lib/circuit263.tsx
Randomly generated circuit 263.

- lib/circuit264.tsx
Randomly generated circuit 264.

- lib/circuit265.tsx
Randomly generated circuit 265.

- lib/circuit266.tsx
Randomly generated circuit 266.

- lib/circuit267.tsx
Randomly generated circuit 267.

- lib/circuit268.tsx
Randomly generated circuit 268.

- lib/circuit269.tsx
Randomly generated circuit 269.

- lib/circuit270.tsx
Randomly generated circuit 270.

- lib/circuit271.tsx
Randomly generated circuit 271.

- lib/circuit272.tsx
Randomly generated circuit 272.

- lib/circuit273.tsx
Randomly generated circuit 273.

- lib/circuit274.tsx
Randomly generated circuit 274.

- lib/circuit275.tsx
Randomly generated circuit 275.

- lib/circuit276.tsx
Randomly generated circuit 276.

- lib/circuit277.tsx
Randomly generated circuit 277.

- lib/circuit278.tsx
Randomly generated circuit 278.

- lib/circuit279.tsx
Randomly generated circuit 279.

- lib/circuit280.tsx
Randomly generated circuit 280.

- lib/circuit281.tsx
Randomly generated circuit 281.

- lib/circuit282.tsx
Randomly generated circuit 282.

- lib/circuit283.tsx
Randomly generated circuit 283.

- lib/circuit284.tsx
Randomly generated circuit 284.

- lib/circuit285.tsx
Randomly generated circuit 285.

- lib/circuit286.tsx
Randomly generated circuit 286.

- lib/circuit287.tsx
Randomly generated circuit 287.

- lib/circuit288.tsx
Randomly generated circuit 288.

- lib/circuit289.tsx
Randomly generated circuit 289.

- lib/circuit290.tsx
Randomly generated circuit 290.

- lib/circuit291.tsx
Randomly generated circuit 291.

- lib/circuit292.tsx
Randomly generated circuit 292.

- lib/circuit293.tsx
Randomly generated circuit 293.

- lib/circuit294.tsx
Randomly generated circuit 294.

- lib/circuit295.tsx
Randomly generated circuit 295.

- lib/circuit296.tsx
Randomly generated circuit 296.

- lib/circuit297.tsx
Randomly generated circuit 297.

- lib/circuit298.tsx
Randomly generated circuit 298.

- lib/circuit299.tsx
Randomly generated circuit 299.
