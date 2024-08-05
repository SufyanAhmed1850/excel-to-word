const customerEquip = [
    { equipName: "Ahiba Machine", procedureNo: "W-09-25" },
    { equipName: "AIR CAPTURE HOOD", procedureNo: "W-09-57" },
    { equipName: "AIR COMPRESSOR", procedureNo: "W-09-23" },
    { equipName: "Air Flow Meter", procedureNo: "W-09-57" },
    { equipName: "Air Sampler", procedureNo: "W-09-88" },
    { equipName: "Air/Gas Regulator", procedureNo: "W-09-23" },
    { equipName: "Ammonia Gas Detector", procedureNo: "W-09-46" },
    { equipName: "Ampere Meter", procedureNo: "W-09-85" },
    { equipName: "Analog Torque Tester", procedureNo: "W-09-42" },
    { equipName: "Analogue Pressure Gauge", procedureNo: "W-09-23" },
    { equipName: "Analogue Temperature Gauge", procedureNo: "W-09-29" },
    { equipName: "Analytical Balance", procedureNo: "W-09-43" },
    { equipName: "Anemometer", procedureNo: "W-09-57" },
    { equipName: "Anti Skid Machine (Heater)", procedureNo: "W-09-29" },
    {
        equipName: "Anti Skid Machine (Regulator Pressure Gauge)",
        procedureNo: "W-09-23",
    },
    { equipName: "Anti Skid Machine (Timer)", procedureNo: "W-09-32" },
    { equipName: "Aseptic Filler Weight", procedureNo: "W-09-43" },
    { equipName: "Auto Clave", procedureNo: "W-09-25" },
    { equipName: "Auto Level", procedureNo: "W-09-33" },
    { equipName: "Automatic Labeling Machines (IV)", procedureNo: "W-09-87" },
    { equipName: "Balance Laboratory", procedureNo: "W-09-43" },
    { equipName: "Batch Mixing Tank", procedureNo: "W-09-54" },
    { equipName: "Beaker", procedureNo: "W-09-88" },
    { equipName: "BEAKER JUG", procedureNo: "W-09-88" },
    { equipName: "Beaker Tube", procedureNo: "W-09-88" },
    { equipName: "Bevel Protector", procedureNo: "W-09-44" },
    { equipName: "Bio Safety Cabinet", procedureNo: "W-09-67" },
    { equipName: "Blowing Machine", procedureNo: "W-09-54" },
    { equipName: "Bore Gauge", procedureNo: "W-09-43" },
    { equipName: "BP Appratus", procedureNo: "W-09-23" },
    { equipName: "Brust Tester", procedureNo: "W-09-23" },
    { equipName: "Bulb Pipette", procedureNo: "W-09-88" },
    { equipName: "Bulb Pipette 1 ml", procedureNo: "W-09-88" },
    { equipName: "Bulb Pipette 10 ml", procedureNo: "W-09-88" },
    { equipName: "Bulb Pipette 2 ml", procedureNo: "W-09-88" },
    { equipName: "Bulb Pipette 25 ml", procedureNo: "W-09-88" },
    { equipName: "Bulb Pipette 5 ml", procedureNo: "W-09-88" },
    { equipName: "Bulb Pipette 50 ml", procedureNo: "W-09-88" },
    { equipName: "Burette Glass", procedureNo: "W-09-88" },
    { equipName: "Burette Glass 25 ml", procedureNo: "W-09-88" },
    { equipName: "Burette Glass 50 ml", procedureNo: "W-09-88" },
    { equipName: "Capacitance Level Transmitter", procedureNo: "W-09-27" },
    { equipName: "Centrifugal Machine", procedureNo: "W-09-41" },
    { equipName: "Centrifuge Machine", procedureNo: "W-09-62" },
    { equipName: "CLIMATIC CHAMBER", procedureNo: "W-09-25" },
    { equipName: "Coating thickness Meter", procedureNo: "W-09-88" },
    { equipName: "COD Reactor", procedureNo: "W-09-29" },
    { equipName: "COD Vial Digester", procedureNo: "W-09-25" },
    { equipName: "Cold Room", procedureNo: "W-09-28" },
    { equipName: "Colorimeter", procedureNo: "W-09-95" },
    { equipName: "Column Oven", procedureNo: "W-09-25" },
    { equipName: "Compound Gauge", procedureNo: "W-09-23" },
    { equipName: "Compression Testing Machine", procedureNo: "W-09-44" },
    { equipName: "Conductivity Meter", procedureNo: "W-09-23" },
    { equipName: "Conical Flask", procedureNo: "W-09-88" },
    { equipName: "Conical Flask 250ml", procedureNo: "W-09-88" },
    { equipName: "Control Valve", procedureNo: "W-09-23" },
    { equipName: "Conventional Incubator", procedureNo: "W-09-25" },
    { equipName: "Cool Incubator", procedureNo: "W-09-25" },
    { equipName: "Counter Meter", procedureNo: "W-09-32" },
    { equipName: "Crown Crimp Gauge", procedureNo: "W-09-43" },
    { equipName: "Cylinder", procedureNo: "W-09-88" },
    { equipName: "DE-HUMIDIFIER", procedureNo: "W-09-25" },
    { equipName: "Dead Weight", procedureNo: "W-09-43" },
    { equipName: "Dead Weight Tester", procedureNo: "W-09-43" },
    { equipName: "Dead Weight Trolley", procedureNo: "^W-09-43" },
    { equipName: "Dead weights Box", procedureNo: "W-09-43" },
    { equipName: "Deep Freezer", procedureNo: "W-09-25" },
    { equipName: "Desiccator", procedureNo: "W-09-25" },
    { equipName: "Dew Point Transmitter", procedureNo: "W-09-54" },
    { equipName: "DIAL GAUGE", procedureNo: "W-09-83" },
    { equipName: "Dial Indicator", procedureNo: "W-09-43" },
    { equipName: "Differential Pressure Gauge", procedureNo: "W-09-23" },
    {
        equipName: "Differential pressure idicator switch",
        procedureNo: "W-09-23",
    },
    { equipName: "Differential Pressure Switch", procedureNo: "W-09-24" },
    { equipName: "Differential Pressure Transmitter", procedureNo: "W-09-23" },
    { equipName: "Clamp Meter", procedureNo: "W-09-85" },
    { equipName: "Digital Clamp Meter", procedureNo: "W-09-85" },
    { equipName: "Digital Differential Manometer", procedureNo: "W-09-23" },
    { equipName: "Digital Humidity Controller", procedureNo: "W-09-28" },
    { equipName: "DIGITAL HUMIDITY RECORDER", procedureNo: "W-09-28" },
    { equipName: "Digital Hygrometer", procedureNo: "W-09-25" },
    { equipName: "Hygrometer", procedureNo: "W-09-25" },
    { equipName: "Digital Micro Meter", procedureNo: "W-09-23" },
    { equipName: "Digital Multimeter", procedureNo: "W-09-85" },
    { equipName: "Multimeter", procedureNo: "W-09-85" },
    { equipName: "Digital Phase Indicator", procedureNo: "W-09-57" },
    { equipName: "Digital Pressure Gauge", procedureNo: "W-09-23" },
    { equipName: "Digital Stop Watch", procedureNo: "W-09-29" },
    {
        equipName: "Digital Temperature & Humidity Data Logger",
        procedureNo: "W-09-25",
    },
    { equipName: "Data Logger", procedureNo: "W-09-25" },
    { equipName: "Digital Temperature Controller", procedureNo: "W-09-25" },
    { equipName: "Digital Temperature Indicator", procedureNo: "W-09-25" },
    { equipName: "Temperature Indicator", procedureNo: "W-09-25" },
    { equipName: "Digital Thermo Hygrometer", procedureNo: "W-09-25" },
    { equipName: "Digital Thermometer", procedureNo: "W-09-25" },
    { equipName: "Digital Torque Tester", procedureNo: "W-09-42" },
    { equipName: "Digital Weight Indicator", procedureNo: "W-09-43" },
    { equipName: "Disintegration tester", procedureNo: "W-09-56" },
    { equipName: "Dispensing Booth", procedureNo: "W-09-64" },
    { equipName: "Dissolution Tester", procedureNo: "W-09-56" },
    { equipName: "Dissolve Oxygen Meter", procedureNo: "W-09-49" },
    { equipName: "DOP Test For Hepa Filter", procedureNo: "W-09-64" },
    { equipName: "DRY BATH", procedureNo: "W-09-26" },
    { equipName: "Dry Incubator", procedureNo: "W-09-26" },
    { equipName: "Dry Oven", procedureNo: "W-09-25" },
    { equipName: "Dry/Wet Hygrometer", procedureNo: "W-09-25" },
    { equipName: "Earth Ground Clamp Meter", procedureNo: "W-09-85" },
    { equipName: "Earth Quack Detector", procedureNo: "W-09-49" },
    { equipName: "Earth Resistance Meter", procedureNo: "W-09-67" },
    { equipName: "Earth Tester", procedureNo: "W-09-41" },
    { equipName: "ECG Machine", procedureNo: "W-09-55" },
    { equipName: "Elcometer", procedureNo: "W-09-89" },
    { equipName: "ELECTRIC VALVE ACTUATOR", procedureNo: "W-09-56" },
    { equipName: "Electrical Balance Scale", procedureNo: "W-09-43" },
    { equipName: "Energy Analyzer", procedureNo: "W-09-70" },
    { equipName: "Energy Meter", procedureNo: "W-09-85" },
    { equipName: "Extension Pressure Module", procedureNo: "W-09-23" },
    { equipName: "FIBER OPTIC SENSOR", procedureNo: "W-09-42" },
    { equipName: "Filling Machine", procedureNo: "W-09-64" },
    { equipName: "Filter Assembly", procedureNo: "W-09-64" },
    { equipName: "Flame Photo Meter", procedureNo: "W-09-95" },
    { equipName: "Flim/Coating Thickness Gauge", procedureNo: "W-09-88" },
    { equipName: "Flow Meter", procedureNo: "W-09-57" },
    { equipName: "Flow Transmitter", procedureNo: "W-09-57" },
    { equipName: "Freezer", procedureNo: "W-09-25" },
    { equipName: "Friability Tester", procedureNo: "W-09-63" },
    { equipName: "Friability Testers", procedureNo: "W-09-89" },
    { equipName: "FRIDGE", procedureNo: "W-09-25" },
    { equipName: "FTIR-Bruker", procedureNo: "W-09-98" },
    { equipName: "Fuel Dispenser", procedureNo: "W-09-58" },
    { equipName: "Fume Hood", procedureNo: "W-09-54" },
    { equipName: "Function Generator", procedureNo: "W-09-46" },
    { equipName: "Furnace", procedureNo: "W-09-25" },
    { equipName: "Gas Analyzer", procedureNo: "W-09-37" },
    { equipName: "Gas Detector", procedureNo: "W-09-46" },
    { equipName: "Gas flow meter", procedureNo: "W-09-57" },
    { equipName: "Gate Valve", procedureNo: "W-09-40" },
    { equipName: "Gauge Block Set", procedureNo: "W-09-33" },
    { equipName: "Gauge Flow meter", procedureNo: "W-09-23" },
    {
        equipName: "Gear Flow Meter with Display Indicator",
        procedureNo: "W-09-57",
    },
    { equipName: "Glass Cylinder", procedureNo: "W-09-88" },
    { equipName: "GO NO GO Gauge", procedureNo: "W-09-99" },
    { equipName: "Gold Bottle", procedureNo: "W-09-99" },
    { equipName: "Graduated Pipette", procedureNo: "W-09-88" },
    { equipName: "Graduated Pipette 1 ml", procedureNo: "W-09-88" },
    { equipName: "Graduated Pipette 10 ml", procedureNo: "W-09-88" },
    { equipName: "Graduated Pipette 2 ml", procedureNo: "W-09-88" },
    { equipName: "Graduated Pipette 25 ml", procedureNo: "W-09-88" },
    { equipName: "Graduated Pipette 5 ml", procedureNo: "W-09-88" },
    { equipName: "Graduated Pipette 50 ml", procedureNo: "W-09-88" },
    { equipName: "Gravity Oven", procedureNo: "W-09-25" },
    { equipName: "Hardness Tester", procedureNo: "W-09-51" },
    { equipName: "Heating Furnace", procedureNo: "W-09-25" },
    { equipName: "Heating Mantle", procedureNo: "W-09-42" },
    { equipName: "Heating Mantle", procedureNo: "W-09-25" },
    { equipName: "Height Gauge", procedureNo: "W-09-88" },
    { equipName: "Hepa Filter", procedureNo: "W-09-64" },
    { equipName: "High Voltage insulation  Tester", procedureNo: "W-09-29" },
    { equipName: "High Voltage Proximity Detector", procedureNo: "W-09-29" },
    { equipName: "HMI CONTROLLER", procedureNo: "W-09-29" },
    { equipName: "Holiday Detector", procedureNo: "W-09-89" },
    { equipName: "Hose Pipe", procedureNo: "W-09-26" },
    { equipName: "Hot Incubator", procedureNo: "W-09-25" },
    { equipName: "Hot Plate", procedureNo: "W-09-25" },
    { equipName: "Hours Meter", procedureNo: "W-09-33" },
    { equipName: "Humidity Meter", procedureNo: "W-09-25" },
    { equipName: "Humidity Sensor", procedureNo: "W-09-25" },
    { equipName: "Hydraulic Motor Pump", procedureNo: "W-09-23" },
    {
        equipName: "Hydraulic Oil Flow Meter with Display",
        procedureNo: "W-09-57",
    },
    {
        equipName: "Diesel Flow Meter",
        procedureNo: "W-09-57",
    },
    { equipName: "Hydraulic Pump", procedureNo: "W-09-23" },
    { equipName: "Hydraulic Servo  Valve Tester", procedureNo: "W-09-48" },
    { equipName: "Hydraulic Tensioner Cylinder", procedureNo: "W-09-42" },
    { equipName: "Hydraulic Tensioners", procedureNo: "W-09-41" },
    { equipName: "Hydraulic Torque Wrench", procedureNo: "W-09-41" },
    { equipName: "Incubator", procedureNo: "W-09-25" },
    { equipName: "Incubator Controller", procedureNo: "W-09-45" },
    { equipName: "Indicator Humidity", procedureNo: "W-09-45" },
    { equipName: "INFRA RED SENSOR", procedureNo: "W-09-25" },
    { equipName: "Infrared Gun", procedureNo: "W-09-25" },
    { equipName: "Infrared thermometer", procedureNo: "W-09-25" },
    { equipName: "Inside Micrometer", procedureNo: "W-09-43" },
    { equipName: "INSTRUMENT: HMI", procedureNo: "W-09-87" },
    { equipName: "Insulation Tester", procedureNo: "W-09-29" },
    { equipName: "Iodine Flask", procedureNo: "W-09-88" },
    { equipName: "Iodine Flask 250 ml", procedureNo: "W-09-88" },
    { equipName: "Karl Fisher Titrator", procedureNo: "W-09-38" },
    { equipName: "Kett Machine", procedureNo: "W-09-22" },
    { equipName: "Kilo Volt", procedureNo: "W-09-37" },
    { equipName: "KILOWATT METER", procedureNo: "W-09-46" },
    { equipName: "Kori Counter Meter", procedureNo: "W-09-44" },
    { equipName: "Lab Controller", procedureNo: "W-09-48" },
    { equipName: "Laminar Air Flow Hood", procedureNo: "W-09-57" },
    { equipName: "Leak Tester Apparatus", procedureNo: "W-09-63" },
    { equipName: "Leakage Apparatus", procedureNo: "W-09-63" },
    { equipName: "Level Control Valve", procedureNo: "W-09-27" },
    { equipName: "Level Gauge", procedureNo: "W-09-44" },
    { equipName: "Level indicator", procedureNo: "W-09-23" },
    { equipName: "Level Measuring Rod", procedureNo: "W-09-57" },
    { equipName: "Level Sensor", procedureNo: "W-09-23" },
    { equipName: "Level Switch", procedureNo: "W-09-27" },
    { equipName: "Level Transmitter", procedureNo: "W-09-27" },
    { equipName: "Light Cabinet Box", procedureNo: "W-09-88" },
    { equipName: "load cell", procedureNo: "W-09-23" },
    { equipName: "LOADING ROLLER INSPECTION PANEL", procedureNo: "W-09-57" },
    { equipName: "Loop Calibrator", procedureNo: "W-09-23" },
    { equipName: "Low Pressure Calibrator", procedureNo: "W-09-23" },
    { equipName: "LPG Flow Meter", procedureNo: "W-09-57" },
    { equipName: "Lux Meter", procedureNo: "W-09-88" },
    { equipName: "mA Process Clamp Meter", procedureNo: "W-09-85" },
    { equipName: "Magnehelic Gauge", procedureNo: "W-09-23" },
    {
        equipName: "Magnehellic Differential Pressure Gauge",
        procedureNo: "W-09-23",
    },
    { equipName: "Magnetic Stirrer", procedureNo: "W-09-26" },
    { equipName: "Manometer", procedureNo: "W-09-35" },
    { equipName: "Measuring Cylinder", procedureNo: "W-09-88" },
    { equipName: "Measuring Cylinder 10 ml", procedureNo: "W-09-88" },
    { equipName: "Measuring Cylinder 100 ml", procedureNo: "W-09-88" },
    { equipName: "Measuring Cylinder 1000 ml", procedureNo: "W-09-88" },
    { equipName: "Measuring Cylinder 200 ml", procedureNo: "W-09-88" },
    { equipName: "Measuring Cylinder 25 ml", procedureNo: "W-09-88" },
    { equipName: "Measuring Cylinder 5 ml", procedureNo: "W-09-88" },
    { equipName: "Measuring Cylinder 50 ml", procedureNo: "W-09-88" },
    { equipName: "Measuring Cylinder 500 ml", procedureNo: "W-09-88" },
    { equipName: "MEASURING SCALE", procedureNo: "W-09-44" },
    { equipName: "Measuring Tape", procedureNo: "W-09-44" },
    { equipName: "MEGGER", procedureNo: "W-09-41" },
    { equipName: "Melting Point Apparatus", procedureNo: "W-09-67" },
    { equipName: "Metal Detector", procedureNo: "9.0 Standard" },
    { equipName: "Micro Manometer", procedureNo: "W-09-35" },
    { equipName: "MICROMETER", procedureNo: "W-09-42" },
    { equipName: "Moisture Analyzer", procedureNo: "W-09-25" },
    { equipName: "Moisture Tester", procedureNo: "W-09-23" },
    { equipName: "Muffle Furnace", procedureNo: "W-09-25" },
    { equipName: "Multifunction Calibrator", procedureNo: "W-09-88" },
    { equipName: "Needle Detector", procedureNo: "0.8mm (Standard)" },
    { equipName: "Non Aseptic Filler Weight", procedureNo: "W-09-43" },
    { equipName: "Oil Tester", procedureNo: "W-09-43" },
    { equipName: "ON/OFF Valve", procedureNo: "W-09-40" },
    { equipName: "Outside Micrometer", procedureNo: "W-09-43" },
    { equipName: "Oven", procedureNo: "W-09-25" },
    { equipName: "Panel Meter", procedureNo: "W-09-25" },
    { equipName: "Particle  Counter", procedureNo: "W-09-93" },
    { equipName: "Perpendicular Gauge", procedureNo: "W-09-33" },
    { equipName: "pH Meter", procedureNo: "W-09-65" },
    { equipName: "Plateform Scale", procedureNo: "W-09-43" },
    { equipName: "Plotter Machine", procedureNo: "W-09-57" },
    { equipName: "Pneumatic Hand Pump with Gauge", procedureNo: "W-09-25" },
    { equipName: "Polarimeter", procedureNo: "W-09-20" },
    { equipName: "Portable Gas Detector", procedureNo: "W-09-46" },
    { equipName: "Power Analyzer", procedureNo: "W-09-41" },
    { equipName: "Power Factor Controller", procedureNo: "W-09-46" },
    { equipName: "Power Harmonic Analyzer", procedureNo: "W-09-45" },
    { equipName: "Power Supply", procedureNo: "W-09-33" },
    { equipName: "Press Machine", procedureNo: "W-09-44" },
    { equipName: "Pressure Calibrator", procedureNo: "W-09-23" },
    { equipName: "Pressure Calibrator", procedureNo: "W-09-23" },
    { equipName: "Pressure Calibrator Pump", procedureNo: "W-09-23" },
    { equipName: "Pressure Control Valve", procedureNo: "W-09-23" },
    { equipName: "Pressure Gauge", procedureNo: "W-09-23" },
    { equipName: "Pressure Gauge (SST)", procedureNo: "W-09-25" },
    { equipName: "PRESSURE INDICATOR", procedureNo: "W-09-23" },
    { equipName: "PRESSURE INDICATOR SWITCH", procedureNo: "W-09-23" },
    { equipName: "Pressure regulator", procedureNo: "W-09-23" },
    { equipName: "Pressure safety valve", procedureNo: "W-09-23" },
    { equipName: "Pressure Switch", procedureNo: "W-09-25" },
    { equipName: "Pressure Transmitter", procedureNo: "W-09-23" },
    { equipName: "Pressure Vacuum Safety Valve", procedureNo: "W-09-40" },
    { equipName: "Process Calibrator", procedureNo: "W-09-25" },
    { equipName: "Process Timer", procedureNo: "W-09-32" },
    { equipName: "Push Pull Scale", procedureNo: "W-09-43" },
    { equipName: "Refractometer", procedureNo: "W-09-70" },
    { equipName: "Refractometer", procedureNo: "W-09-70" },
    { equipName: "Refrigerator", procedureNo: "W-09-25" },
    { equipName: "Refrigerator Incubator", procedureNo: "W-09-25" },
    { equipName: "Resistance Temp. Detector RTD", procedureNo: "W-09-25" },
    { equipName: "Rotameter", procedureNo: "W-09-23" },
    { equipName: "RPM Meter", procedureNo: "W-09-27" },
    { equipName: "RTD Calibrator", procedureNo: "W-09-25" },
    { equipName: "Sampling Hood", procedureNo: "W-09-54" },
    { equipName: "Screw Gauge", procedureNo: "W-09-24" },
    { equipName: "Set Of Mass", procedureNo: "W-09-43" },
    { equipName: "Shade Box", procedureNo: "W-09-23" },
    { equipName: "Shrinkage Template", procedureNo: "W-09-42" },
    { equipName: "Somex Degasser", procedureNo: "W-09-57" },
    { equipName: "Sound Level Meter", procedureNo: "W-09-93" },
    { equipName: "Sound Meter", procedureNo: "W-09-93" },
    { equipName: "Spectrophotometer", procedureNo: "W-09-95" },
    { equipName: "SPEED METER", procedureNo: "W-09-27" },
    { equipName: "Speedy Moisture Meter", procedureNo: "W-09-88" },
    { equipName: "Square Meter Tape", procedureNo: "W-09-43" },
    { equipName: "SS Expansion Joint", procedureNo: "W-09-40" },
    { equipName: "SS Tube", procedureNo: "W-09-59" },
    { equipName: "Stability Chamber", procedureNo: "W-09-25" },
    { equipName: "Steam Flow Meter", procedureNo: "W-09-57" },
    { equipName: "Steel Shaft", procedureNo: "W-09-29" },
    { equipName: "STORAGE OSCILLO SCOPE", procedureNo: "W-09-41" },
    { equipName: "Storage Tank", procedureNo: "W-09-29" },
    { equipName: "Stress Crack Tester", procedureNo: "W-09-34" },
    { equipName: "Striping Machine", procedureNo: "W-09-54" },
    { equipName: "Suction machine", procedureNo: "W-09-23" },
    { equipName: "Surface Profile Gauge", procedureNo: "W-09-88" },
    { equipName: "Tachometer", procedureNo: "W-09-27" },
    { equipName: "Tala Meter", procedureNo: "W-09-70" },
    { equipName: "Taper Gauge", procedureNo: "W-09-44" },
    { equipName: "TDS Meter", procedureNo: "W-09-23" },
    { equipName: "Temperature Bath", procedureNo: "W-09-25" },
    { equipName: "Temperature Calibrator", procedureNo: "W-09-25" },
    { equipName: "Temperature Control Valve", procedureNo: "W-09-25" },
    { equipName: "TEMPERATURE CONTROLLER", procedureNo: "W-09-29" },
    { equipName: "Temperature Gauge", procedureNo: "W-09-25" },
    { equipName: "Temperature Gun", procedureNo: "W-09-25" },
    {
        equipName: "TEMPERATURE HUMIDITY CHART RECORDER",
        procedureNo: "W-09-28",
    },
    { equipName: "TEMPERATURE HUMIDITY INDICATOR", procedureNo: "W-09-45" },
    { equipName: "Temperature Humidity Meter", procedureNo: "W-09-25" },
    { equipName: "Temperature Indicator Controller", procedureNo: "W-09-45" },
    { equipName: "Temperature Probe", procedureNo: "W-09-25" },
    { equipName: "Temperature Sensor", procedureNo: "W-09-25" },
    { equipName: "Temperature Timer", procedureNo: "W-09-32" },
    { equipName: "Temperature Transmitter", procedureNo: "W-09-25" },
    { equipName: "Thermal Imager Camera", procedureNo: "W-09-25" },
    { equipName: "Thermo Anemometer", procedureNo: "W-09-45" },
    { equipName: "Thermo Anemometer Hot Wire", procedureNo: "W-09-45" },
    { equipName: "Thermography Camera", procedureNo: "W-09-25" },
    { equipName: "Thermometer", procedureNo: "W-09-25" },
    { equipName: "Thickness Gauge", procedureNo: "W-09-88" },
    { equipName: "Timer", procedureNo: "W-09-32" },
    { equipName: "Titration Flask", procedureNo: "W-09-88" },
    { equipName: "Titration Flask 100 ml", procedureNo: "W-09-88" },
    { equipName: "Titration Flask 1000 ml", procedureNo: "W-09-88" },
    { equipName: "Titration Flask 250 ml", procedureNo: "W-09-88" },
    { equipName: "Titration Flask 50 ml", procedureNo: "W-09-88" },
    { equipName: "Titration Flask 500 ml", procedureNo: "W-09-88" },
    { equipName: "Top Balance Scale", procedureNo: "W-09-43" },
    { equipName: "Top Load Tester", procedureNo: "W-09-67" },
    { equipName: "Torque Kit", procedureNo: "W-09-42" },
    { equipName: "Torque Wrench", procedureNo: "W-09-41" },
    { equipName: "Transformer", procedureNo: "W-09-33" },
    { equipName: "True RMS Multimeter", procedureNo: "W-09-85" },
    {
        equipName: "Tupesa Machine (Regulator Pressure Gauge)",
        procedureNo: "W-09-23",
    },
    {
        equipName: "Tupesa Machine (Temperature Sensor)",
        procedureNo: "W-09-25",
    },
    { equipName: "Turbidity Meter", procedureNo: "W-09-52" },
    { equipName: "UltraSonic Bath 2.5L", procedureNo: "W-09-25" },
    { equipName: "Ultrasonic Flow Meter", procedureNo: "W-09-88" },
    { equipName: "Vacuum Gauge", procedureNo: "W-09-23" },
    { equipName: "Vacuum Pressure Calibrator", procedureNo: "W-09-23" },
    { equipName: "Vacuum Pump", procedureNo: "W-09-23" },
    { equipName: "Vacuum Sensor", procedureNo: "W-09-23" },
    { equipName: "Vacuum Transmitter", procedureNo: "W-09-23" },
    { equipName: "Variable Frequency Device", procedureNo: "W-09-27" },
    { equipName: "Vernier caliper", procedureNo: "W-09-33" },
    { equipName: "Vessel Tank", procedureNo: "W-09-23" },
    { equipName: "Vibration Meter", procedureNo: "W-09-32" },
    { equipName: "viscometer", procedureNo: "W-09-56" },
    { equipName: "Volt & Ampere Meter", procedureNo: "W-09-37" },
    { equipName: "Volt Meter", procedureNo: "W-09-37" },
    { equipName: "VOLUMETRIC CYLINDER", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 10 ml", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 10 ml (Amber)", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 100 ml", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 100 ml (Amber)", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 1000 ml", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 200 ml", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 200 ml (Amber)", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 25 ml", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 25 ml (Amber)", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 250 ml (Amber)", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 50 ml", procedureNo: "W-09-88" },
    { equipName: "Volumetric Flask 500 ml", procedureNo: "W-09-88" },
    { equipName: "Warm Room", procedureNo: "W-09-25" },
    { equipName: "Water Bath", procedureNo: "W-09-25" },
    { equipName: "Water Flow Meter", procedureNo: "W-09-57" },
    { equipName: "Water Pump", procedureNo: "W-09-65" },
    { equipName: "Weather Station", procedureNo: "W-09-88" },
    { equipName: "Weighing Balance Scale", procedureNo: "W-09-43" },
    { equipName: "Weighing Bridge", procedureNo: "W-09-43" },
    { equipName: "Weighing Machine", procedureNo: "W-09-43" },
    { equipName: "Weighing Scale", procedureNo: "W-09-43" },
    { equipName: "Weighing Set", procedureNo: "W-09-43" },
    { equipName: "Weight", procedureNo: "W-09-43" },
    { equipName: "Welding Gauge", procedureNo: "W-09-23" },
    { equipName: "Welding Plant", procedureNo: "W-09-41" },
    { equipName: "WOBBLE METER", procedureNo: "W-09-43" },
    { equipName: "Yard Meter", procedureNo: "W-09-42" },
    { equipName: "Yarn Tension Meter", procedureNo: "W-09-65" },
];

const getProcedureNo = (equipName) => {
    try {
        const equipment = customerEquip.find(
            (equip) => equip.equipName.toLowerCase() === equipName.toLowerCase()
        );
        if (equipment) {
            return equipment.procedureNo;
        } else {
            console.error(equipName);
            throw new Error(
                `Procedure number not found for equipment ${equipName}`
            );
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default getProcedureNo;
