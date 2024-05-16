import getProcedureNo from "./customerEquip.js";

const masterEquip = [
    {
        _id: "fa51a8dc-0765-4beb-85eb-ee11228f8a1e",
        equipName: "AC/DC Clamp Meter",
        model: "MS2109A",
        serial: "23930118",
        idNo: "DCA-07",
        trac: "CL-1561(E-89)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "e81afb1c-71b4-4e1a-9980-e0b13316ac6b",
        equipName: "Air Compressor",
        model: "UDT",
        serial: "N/A",
        idNo: "DE-04",
        trac: "2023134256",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "56175f1f-8e82-4892-8b65-8ec544be8ca3",
        equipName: "Air Heat Gun",
        model: "HG1600-2A(Crownn)",
        serial: "N/A",
        idNo: "120082",
        trac: "BETALINK-UAE",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "b6f95491-2028-4789-88d3-a4ac0506db99",
        equipName: "Air/Gas Flow Meter",
        model: "S401(Suto)",
        serial: "09227366",
        idNo: "120001",
        trac: "CL-1601(Q-41)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "00801269-9afc-4533-ac52-f0e8b186684b",
        equipName: "Beaker",
        model: "N/A",
        serial: "N/A",
        idNo: "BK-001",
        trac: "APCIC/MF 570(DAWN ENGINEERING)",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "ba3fa0cd-a8ca-485b-bf8b-81f43df36b3d",
        equipName: "BMI Precision Level",
        model: "4901-150",
        serial: "2409090121",
        idNo: "-",
        trac: "PCSIR",
        calDate: "03-Feb-2024",
        calDueDate: "02-Feb-2025",
    },
    {
        _id: "0427e8b6-60ef-4f6e-9586-66dbc552fb8a",
        equipName: "Buffer solution pH 10.01 � 0.01 (25�C)",
        model: "HI7010/1L",
        serial: "N/A",
        idNo: "Hanna Instrument",
        trac: "LOT-4791",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "a893e4d1-45b9-482f-917d-d5a1b9271682",
        equipName: "Buffer solution pH 14.01 � 0.01 (25�C)",
        model: "HI7010/1L",
        serial: "N/A",
        idNo: "Hanna Instrument",
        trac: "LOT-4791",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "531583dd-0fdc-40e2-8019-4a8bd1446c72",
        equipName: "Buffer solution pH 4.01� 0.01 (25�C)",
        model: "HI7004/1L",
        serial: "32095.297",
        idNo: "Hanna Instruments",
        trac: "Lot No: 4893",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "220f3be6-defa-450e-a915-580211731095",
        equipName: "Buffer solution pH 7.01 � 0.01 (25�C)",
        model: "HI7007/1L",
        serial: "32096.291",
        idNo: "Hanna Instruments",
        trac: "Lot No: 4909",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "c9603bb3-3cde-4801-8ac9-8916a7cb8ff7",
        equipName: "Conductivity Meter",
        model: "Hanna(HI98308)",
        serial: "100241018",
        idNo: "15333",
        trac: "CL-1565(Ch-90)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "d078cf85-7295-4730-969e-fcd1e5871e7e",
        equipName: "Conductivity Standard Solution",
        model: "Hanna Instruments",
        serial: "1413�5 �S/cm@25 �C",
        idNo: "HI7031L",
        trac: "7675",
        calDate: "23-Oct-2023",
        calDueDate: "27-Apr-2027",
    },
    {
        _id: "58f06f93-441e-4a50-ab71-b28930a137bb",
        equipName: "DC Power Supply 24VDC",
        model: "3303D(Topward)",
        serial: "740878",
        idNo: "DE-LHR-0420030",
        trac: "CL-1569(E-90)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "fac6d929-c502-4a76-98bf-1d5d0e393de9",
        equipName: "Dead weights Box",
        model: "SS-F1 Class",
        serial: "1903857",
        idNo: "DCA-04",
        trac: "CL-1608(M-229)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "2930649a-9243-4742-98d1-492c0c493861",
        equipName: "Dead weights Box 24 pcs",
        model: "SS",
        serial: "1911500",
        idNo: "120048",
        trac: "CL-1607(M-228)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "344d76dd-c6b0-49ee-814b-e11f14a1ef4b",
        equipName: "Decade Resisitance Box",
        model: "1051",
        serial: "17-41357-13",
        idNo: "DCA-29",
        trac: "20231124762",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "37ec5b88-7ebe-4912-9cb0-4443e5536c3b",
        equipName: "Dew Point Transmitter",
        model: "S211-MOD",
        serial: "07228514",
        idNo: "S6993211",
        trac: "SUTO iTech",
        calDate: "20-Feb-2023",
        calDueDate: "19-Feb-2024",
    },
    {
        _id: "cd8281f2-721f-45c7-8d40-0b679fe1bea2",
        equipName: "Digital  Lab Balance Scale",
        model: "Panther(USA)",
        serial: "N/A",
        idNo: "DT-001",
        trac: "058153(Punjab Weight &Measurement)",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "b51345f4-eca7-463a-93ad-b208b472e94d",
        equipName: "Digital Air/Gas  Flow Meter",
        model: "S430",
        serial: "22198116",
        idNo: "S695 4302",
        trac: "SUTO iTEC",
        calDate: "23-Oct-2023",
        calDueDate: "22-Oct-2024",
    },
    {
        _id: "490b191f-85b3-46a5-98c5-51cdcec92181",
        equipName: "Digital Anemometer",
        model: "MS625B (Mastech)",
        serial: "MBFBC34914",
        idNo: "120012",
        trac: "CL-1564(S&V-83)-2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "1b9d30d1-9eab-4d57-844f-4b62c65c7b95",
        equipName: "Digital Chroma Meter",
        model: "ST520",
        serial: "1427004856",
        idNo: "DCA-04",
        trac: "Betalink.UAE",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "56aa7ac8-410c-4ec8-8e5f-234c54239c3e",
        equipName: "Digital Coating Thickness Meter",
        model: "N/A",
        serial: "N/A",
        idNo: "DE-05",
        trac: "J04/170623.15",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "713e2efa-3d9b-4ff8-b1b2-c498fd5c8519",
        equipName: "DIGITAL INFRARED THERMOMETER",
        model: "Bably BLIR-3",
        serial: "18537829",
        idNo: "DCA-27",
        trac: "CL 1579(T-387)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "69a281d5-51bc-4e44-8fbd-1b5c92babdd6",
        equipName: "Digital Insulation  Tester",
        model: "DY30-1",
        serial: "R20005358",
        idNo: "DE-05",
        trac: "CL-1511(E-57)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "aa0cdd6b-e7e2-4bda-9902-11af0b0c69f6",
        equipName: "Digital Level And Slope Meter",
        model: "2179-360",
        serial: "N/A",
        idNo: "-",
        trac: "PCSIR",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "1b21b1d6-89b0-48d5-9b76-7e977c6ee12e",
        equipName: "Digital light meter",
        model: "MS6612",
        serial: "MBJF012145",
        idNo: "120011",
        trac: "CL-1563LI-13)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "3648b0b7-5577-49e2-b982-e4b8a6795b80",
        equipName: "Digital Manometer",
        model: "AS510",
        serial: "04582491",
        idNo: "DCA-08",
        trac: "CL-1490(P-79)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "9c7abf34-293a-46b2-90a5-4806f372cd62",
        equipName: "Digital Manometer",
        model: "MP120 (KIMO)",
        serial: "12041575",
        idNo: "DCA-08",
        trac: "CL-1577(P-100)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "b8f6502e-1504-4d37-aeef-4e4bb7eb9466",
        equipName: "Digital Moisture Meter",
        model: "GUANGZHOU AMITTARI INSTRUMENTS",
        serial: "N/A",
        idNo: "-",
        trac: "CE-AM-P15050601",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "27a4cb05-b7f1-43c3-a94b-80964dcb28d5",
        equipName: "Digital Multi meter",
        model: "ST833A",
        serial: "009916759",
        idNo: "120097",
        trac: "CL-11573(E-192)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "c9cdff17-fef4-4864-8fd5-b45379b2f6b0",
        equipName: "Digital multimeter",
        model: "77iii(Fluke)",
        serial: "N/A",
        idNo: "DCA-06",
        trac: "CL-1600(E-99)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "00c8bc10-db49-42cd-9861-e83595e4d229",
        equipName: "Digital Multimeter",
        model: "CD800a Sanwa Japan",
        serial: "N/A",
        idNo: "DE-LHR-0420006",
        trac: "CL-1558(E-87)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "4ce76759-ea8c-4147-8869-f252e041d3cb",
        equipName: "Digital Pressure  Gauge(400 Bar)",
        model: "QDB118(QIXING METER)",
        serial: "A230909009",
        idNo: "120081",
        trac: "CL-1571(P-99)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "d1130912-4f16-47e9-b63a-4c827e68ce6c",
        equipName: "Digital Pressure calibrator",
        model: "(Druck)DPI-610 IS",
        serial: "61027059",
        idNo: "DCA-10",
        trac: "CL-1602(P-105)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "578e907f-306b-4539-9c69-a37504a01c99",
        equipName: "Digital Pressure Calibrator Druck",
        model: "DPI615 IS",
        serial: "61027059",
        idNo: "120069",
        trac: "CL-1603(P-106)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "38f24724-1a25-478f-9e04-2fd154c76b0f",
        equipName: "Digital Pressure Gauge",
        model: "QDB118(Qixing)",
        serial: "20161020",
        idNo: "DE-005",
        trac: "CL-1594(P-101)2023",
        calDate: "23-Oct-2023",
        calDueDate: "22-Oct-2024",
    },
    {
        _id: "6199b799-b8f5-4995-8aea-7b236d99e938",
        equipName: "Digital Pressure Gauge (Fluke)",
        model: "700G31",
        serial: "5492438",
        idNo: "-",
        trac: "PCSIR",
        calDate: "23-Oct-2023",
        calDueDate: "22-Oct-2024",
    },
    {
        _id: "2fbaff06-8ee2-408c-a2df-b2c6cfd4df3e",
        equipName: "Digital Pressure Gauge(700 Bar)",
        model: "QDB118 (Qixing Meter)",
        serial: "201204031",
        idNo: "-",
        trac: "CL-1571(P-99)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "82845449-6e20-4c69-85be-865b46b873bb",
        equipName: "Digital Stop Watch",
        model: "HS-302(Q&Q)",
        serial: "CR2032",
        idNo: "DCA-02",
        trac: "CL-1556(T&F-28)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "920298cb-2618-4acd-8d94-e2bae0841a6a",
        equipName: "Digital thermometer",
        model: "MS6512(MASTECH)",
        serial: "MBJF048393",
        idNo: "12007",
        trac: "CL-1609(T-392)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "579c628e-3812-4d55-b2fb-6dcd96ed2c45",
        equipName: "Digital torque Tester",
        model: "Norbar",
        serial: "43218",
        idNo: "DCA-24",
        trac: "2023100585",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "fb9cf499-f5a0-463a-992d-c391d366ce57",
        equipName: "Digital Ultrasonic Flow Meter",
        model: "XYT-UL200(GI INSTRUMENT)",
        serial: "22000281",
        idNo: "120049",
        trac: "CL-1599(Q-40)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "5ac0735e-c7f8-48a7-8b9a-de9bde55b4ab",
        equipName: "Digital Ultrasonic Flow Meter",
        model: "GFU-120A(Taiwan)",
        serial: "98304",
        idNo: "-",
        trac: "CL-1586(Q-39)",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "2334590b-ad25-43cd-82ed-c006fdbb29ab",
        equipName: "Digital Vernier caliper",
        model: "INSIZE",
        serial: "0712221022",
        idNo: "DCA-01",
        trac: "CL-1589(L-174)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "778f3933-e4fb-4d36-ade5-edd8afe47ad3",
        equipName: "Digital Weighing Scale",
        model: "SANG Korea",
        serial: "N/A",
        idNo: "DCA-04",
        trac: "APCIC/MF 570",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "bbd6f2b0-c2f6-4eb1-938c-fcf596001d9c",
        equipName: "Dissolved Oxygen Test Kit",
        model: "HI8310",
        serial: "32095297",
        idNo: "-",
        trac: "811410049 Hanna",
        calDate: "23-Oct-2023",
        calDueDate: "22-Oct-2024",
    },
    {
        _id: "4d3b8969-97b9-4972-a12a-17b2f6e90c48",
        equipName: "Distilled Water",
        model: "N/A",
        serial: "N/A",
        idNo: "ID-04",
        trac: "Hanna Instrument",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "ea319ad8-294c-4905-8f3d-9fc1a0eb04d6",
        equipName: "Dry Block Temperature Bath",
        model: "MTC (High) Ametek Denmark",
        serial: "502088-01628",
        idNo: "120018",
        trac: "CL-1605(T-391)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "0daa3387-4d37-4614-8415-2bf5a9cd5fd0",
        equipName: "Dry Block Temperature Bath",
        model: "SIKA(M-650)",
        serial: "5802322",
        idNo: "DCA-06",
        trac: "CL-1570(T-386)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "53a284ed-cfb5-46e6-bc6f-8782cdf21371",
        equipName: "Dual Digital Tachometer",
        model: "DT-2236C(Lutron)",
        serial: "5269779",
        idNo: "120005",
        trac: "CL-1580(S&V-84)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "8ec76183-4aca-4ac7-a6c8-f8a28c49001c",
        equipName: "Earth Tester",
        model: "Keyortsu(4105A)",
        serial: "E8310396",
        idNo: "-",
        trac: "CL-1596(E-98)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "baaf3035-ac3f-410f-a1bd-4629ea45f6c3",
        equipName: "Elcometer Foils",
        model: "N/A",
        serial: "SK2345,SK1929,SK2139",
        idNo: "DCA-04",
        trac: "20231124753",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "4666505d-7708-4a87-8d1c-bdb2046e24de",
        equipName: "ENERGY METER",
        model: "SUTO S 110-P",
        serial: "P554 0034",
        idNo: "120036",
        trac: "SUTO I-TECH",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "a36788db-3a32-4fa0-891f-65a23a248e2f",
        equipName: "Filler Gauge",
        model: "N/A",
        serial: "17-41357-05",
        idNo: "DCA-11",
        trac: "20231124757",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "5be603eb-9ab2-4fb3-adec-73d77e23f9a0",
        equipName: "Gas Cylinder",
        model: "UN 1956",
        serial: "233142",
        idNo: "-",
        trac: "United State Of America",
        calDate: "24-Oct-2022",
        calDueDate: "23-Oct-2023",
    },
    {
        _id: "d47f08bd-ca1f-4a40-a2c8-915b8ff23a93",
        equipName: "Gauge Block Set",
        model: "Mitutoyo",
        serial: "180029",
        idNo: "1252",
        trac: "CL-1587(L-173)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "063de174-48ad-483b-8e38-cd22ab1cca48",
        equipName: "Glass Beaker",
        model: "Kimble(5000ml)",
        serial: "64000",
        idNo: "DAE-04",
        trac: "CL-1578(V-217)",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "92a5ded1-d0ac-42f1-acc7-0169df5dea0d",
        equipName: "Hardness Rubber Box",
        model: "N/A",
        serial: "N/A",
        idNo: "49267",
        trac: "Betalink-UAE",
        calDate: "24-Oct-2024",
        calDueDate: "23-Oct-2025",
    },
    {
        _id: "56905d9b-8725-48ce-a31e-1ed94acd1d78",
        equipName: "Hart Communicator 375",
        model: "375 (Emerson)",
        serial: "11045880",
        idNo: "DE-LHR-0420002",
        trac: "CL-1604(E-100)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "452aead8-ae23-49ea-81a9-47a6e4bcf1da",
        equipName: "Hart Communicator 475",
        model: "475 (Emerson)",
        serial: "11140182",
        idNo: "DE-LHR-0420001",
        trac: "CL-1572(E-91)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "f75e5320-6ce3-4c53-8e61-472a1d4f56ca",
        equipName: "Hydranal-Water Standard 10.0mg/l",
        model: "N/A",
        serial: "Cat# 34849",
        idNo: "4924",
        trac: "Hanna Instrument",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "c7b04864-998f-4b64-b19a-5e2cb83652dc",
        equipName: "Hydraulic Pump with Gauge",
        model: "700G31(FLUKE)",
        serial: "5492438",
        idNo: "120056",
        trac: "CL-1598(P-104)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "b14f618f-17c4-4bb5-93e6-f72a13d1851f",
        equipName: "IN � HOUSE (Repeat  Test )",
        model: "N/A",
        serial: "N/A",
        idNo: "-",
        trac: "PCSIR",
        calDate: "20-Nov-2023",
        calDueDate: "19-Nov-2024",
    },
    {
        _id: "38f70b27-dd8c-4678-bca7-4fa9c2c4ef50",
        equipName: "Infrared Thermometer",
        model: "GM1150",
        serial: "JC2036306",
        idNo: "DCA-27",
        trac: "CL-1582(T-388)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "8d744ebd-c623-4ff4-bc07-412aa6a6e7c6",
        equipName: "K Solution 10ppm",
        model: "N/A",
        serial: "N/A",
        idNo: "-",
        trac: "Hanna instrument",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "da95852c-5811-4cde-8c39-57810773791c",
        equipName: "Laser Distance Meter",
        model: "MASTECH (MS6414)",
        serial: "MBFBC36914",
        idNo: "-",
        trac: "CL-1562(LI-171)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "21cfb0cb-36b4-4449-a4e3-b42bb72e5ff2",
        equipName: "Laser Particle Counter",
        model: "APC 9303-01",
        serial: "93031118805",
        idNo: "120040",
        trac: "CL-1645(T&F-22)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "780a9727-af6b-4e2f-b999-7f4755fe8ab7",
        equipName: "Load Cell",
        model: "Monad Electronics",
        serial: "N/A",
        idNo: "DE-056",
        trac: "CL-954(M-121)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "616ca213-1929-46c2-bf3a-c3c1c0b24b3a",
        equipName: "Loop Calibrator",
        model: "705(FLUKE)",
        serial: "N/A",
        idNo: "DA-05",
        trac: "CL-1590(E-95)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "bed08777-db01-48b3-bd02-cf8b66ade128",
        equipName: "Loop Calibrator (mA Source)",
        model: "707 Ex (Fluke)",
        serial: "LR1104460-2",
        idNo: "120099",
        trac: "CL-1591(E-96)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "fa555cdd-201d-48a1-bc68-1c9128536674",
        equipName: "Lux Meter",
        model: "MASTECH",
        serial: "MBJF 012145",
        idNo: "-",
        trac: "PCSIR",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "938e8680-1735-4acf-9172-21b66c9e5fa7",
        equipName: "Measuring Cylinder",
        model: "N/A",
        serial: "N/A",
        idNo: "CL-003",
        trac: "CL-1574(V-214)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "854bdd56-b837-48b8-b4bc-8773fb4faa3f",
        equipName: "Measuring tape",
        model: "DONGLIANG",
        serial: "MT-35375-01",
        idNo: "DCA-03",
        trac: "CL-1555(L-170)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "956b2fb6-e7db-4bf9-924a-bcdfa72bb020",
        equipName: "Multi function Process Calibrator",
        model: "725 EX (Fluke USA)",
        serial: "7562009",
        idNo: "120055",
        trac: "CL-1588(E-94, T-390)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "88f967d6-00ab-40f8-96b6-b1f1e57b51cd",
        equipName: "Multi Gas Detector",
        model: "AS8900F",
        serial: "03643288",
        idNo: "DE-140",
        trac: "ALJ/CS20-093001A",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "dc0c9486-468a-445e-95b5-186135ed383d",
        equipName: "Na-Solution 10ppm",
        model: "N/A",
        serial: "N/A",
        idNo: "-",
        trac: "Hanna Instrument",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "ffbebca3-7774-49a9-b40a-501a0d688ca4",
        equipName: "pH Meter",
        model: "(HI98304)Hanna",
        serial: "N/A",
        idNo: "DE-04",
        trac: "CL-1584(Ch-92)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "9fda45aa-162a-4227-a8c7-15808e28b290",
        equipName: "Portable Power Analyzer",
        model: "Lutron(DW-6092)",
        serial: "19178136",
        idNo: "-",
        trac: "PCSIR -Peshawar",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "53b014ac-79ff-4044-a392-b6ac0fb7265a",
        equipName: "Portable Power Meter",
        model: "S-110P",
        serial: "19178136",
        idNo: "-",
        trac: "SUTO-ITEC GmbH",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "5140849e-b2ed-4d2b-8856-3ebc63e6a586",
        equipName: "Pressure Gauge (Hand pump)",
        model: "LPP40 (DRUCK)",
        serial: "N/A",
        idNo: "DE-LHR-0420008",
        trac: "CL-1595(P-102)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "8b8d5946-38df-46c0-9870-7f0e9f78c4d7",
        equipName: "Rice Whiteness Tester",
        model: "C600",
        serial: "CA84506",
        idNo: "DE-03",
        trac: "Betalink-UAE",
        calDate: "22-Oct-2021",
        calDueDate: "21-Oct-2022",
    },
    {
        _id: "9c2c4c6b-2ae1-401c-95e1-e219a94d45d2",
        equipName: "Rockwell Hardness test piece",
        model: "N/A",
        serial: "N/A",
        idNo: "LB-RHT-07",
        trac: "CL-1414(F-77)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "d3aa0b60-bd9a-4b82-a6e8-0542f54cec5d",
        equipName: "Scale Indicator",
        model: "ST120(USA)",
        serial: "N/A",
        idNo: "DE-071",
        trac: "058153(Punjab Weight&Measurement",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "d6f09cc8-a26a-4fb3-b600-181219faacd4",
        equipName: "Sindh Weight & Measurements",
        model: "TT-5399",
        serial: "Licence No: R-K/236",
        idNo: "-",
        trac: "PCSIR",
        calDate: "30-Jun-2021",
        calDueDate: "29-Jun-2022",
    },
    {
        _id: "e2ee08fa-620a-4565-973f-7895db4c58d8",
        equipName: "Sound level meter",
        model: "MS6700(Mastech)",
        serial: "MS6700",
        idNo: "120004",
        trac: "CL-1593(SM-08)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "755c028b-edd7-4712-8de7-3dcfbd7675bf",
        equipName: "SPI Bevel Protractor",
        model: "13-638-2",
        serial: "N/A",
        idNo: "-",
        trac: "PCSIR",
        calDate: "23-Oct-2023",
        calDueDate: "22-Oct-2024",
    },
    {
        _id: "4d36c42e-f66b-4282-bee7-9d7f8f4dfba9",
        equipName: "Standard Dead weights",
        model: "SS-F1Class",
        serial: "N/A",
        idNo: "DEA09",
        trac: "CL-1568(M-227)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "5e30fea2-026e-47eb-bc10-de56a30f36cd",
        equipName: "Stop Watch",
        model: "HS-80TW-1",
        serial: "0110785TW",
        idNo: "DCA-001",
        trac: "CL-1556(t&f-28)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "79056695-da2c-46eb-916b-2972c2bafe3b",
        equipName: "TDS Meter",
        model: "AD31",
        serial: "1100241018",
        idNo: "DE-032",
        trac: "CL-1566(Ch-91)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "e91fbbf5-69e2-47f5-963e-06d1f900387a",
        equipName: "TDS Standard Solution",
        model: "1382 �5  ppm @ 25 �C",
        serial: "HI 7032L",
        idNo: "Hanna",
        trac: "Lot: 1920",
        calDate: "23-Oct-2023",
        calDueDate: "22-Oct-2024",
    },
    {
        _id: "ab5ce4d6-9583-45d2-8f1f-824bcc940e3e",
        equipName: "Temperature calibrator",
        model: "ISOTHERMAL Technology",
        serial: "24252/2",
        idNo: "DCA-16",
        trac: "CL-1513(T-432)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "1941d7d3-7de3-4385-93ec-082d0969ec40",
        equipName: "Temperature Humidity Meter",
        model: "AS837(TES)",
        serial: "04569625",
        idNo: "DCA-25",
        trac: "CL-1559(T385, RH-95)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "e14e895e-d854-4db1-ba4d-d2f448de52b1",
        equipName: "Tester Tablet",
        model: "100 Tablets",
        serial: "N/A",
        idNo: "Lot 4924",
        trac: "Hanna Instrument",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "2c9ef397-1dab-4a4b-990b-08bb5ee7b24c",
        equipName: "Thermocouple K type",
        model: "MS7220",
        serial: "MHBH-05598",
        idNo: "DCA-15",
        trac: "CL 1609T-392)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "8537bede-e7eb-4f85-a2de-dc589b61aa26",
        equipName: "Torque Wrench",
        model: "Tolsen",
        serial: "43218",
        idNo: "DE-04",
        trac: "2023100589",
        calDate: "30-Sep-2023",
        calDueDate: "29-Sep-2024",
    },
    {
        _id: "580aed12-3a16-47c4-a9f4-2d0e5b022358",
        equipName: "Turbidity Solution",
        model: "Hanna",
        serial: "N/A",
        idNo: "DAE-08",
        trac: "Hanna Instrument",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "eae31c67-c520-4cf8-a017-552c589fcbc6",
        equipName: "Ultrasonic Flow Meter",
        model: "S460 SUTO(12002B)",
        serial: "48209447",
        idNo: "120049",
        trac: "CL-1599(Q-40)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "128bb37a-07ec-4004-876d-c5a3a0e8641a",
        equipName: "Vernier Caliper(300mm)",
        model: "INSIZE",
        serial: "7562009",
        idNo: "DEA-1",
        trac: "CL-15677(L-172)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "cbd71384-ab53-4890-9b7a-5aa09fb0806a",
        equipName: "Vibration Meter",
        model: "GM63-B",
        serial: "JC2036306",
        idNo: "120002",
        trac: "CL-1581(S&V-85)2023",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
    {
        _id: "aeabca79-e6a5-4ee9-9cfb-67d983043e33",
        equipName: "Yarn Tension Meter",
        model: "ZEF-100",
        serial: "2021987",
        idNo: "DE-09",
        trac: "PCSIR",
        calDate: "23-Oct-2023",
        calDueDate: "23-Oct-2024",
    },
];

masterEquip.findById = (id) => {
    return masterEquip.find((mEq) => mEq._id === id) || "---";
};

const getMaster = (equip, maxNum, mode) => {
    equip = equip.toLowerCase();
    maxNum = +maxNum;
    mode = mode.toLowerCase().split(" ")[2];
    let meta = { master: null, condition: {} };
    switch (equip) {
        // Bath
        case "temperature gauge":
        case "temperature sensor":
        case "temperature gun":
        case "ir gun":
        case "infrared gun":
            meta.master = masterEquip.findById(
                "ea319ad8-294c-4905-8f3d-9fc1a0eb04d6"
            );
            // meta.condition.procedure = "W-09-68";
            meta.condition.temp = "23";
            meta.condition.hum = "46";
            break;

        // Thermometer
        case "temperature controller":
        case "thermometer":
            meta.master = masterEquip.findById(
                "920298cb-2618-4acd-8d94-e2bae0841a6a"
            );
            // meta.condition.procedure = "W-09-82";
            meta.condition.temp = "24";
            meta.condition.hum = "47";
            break;

        // Temp & Hum Meter
        case "hygrometer":
        case "digital hygrometer":
        case "thermo hygrometer":
        case "data logger":
        case "humidity meter":
        case "humidity sensor":
            meta.master = masterEquip.findById(
                "1941d7d3-7de3-4385-93ec-082d0969ec40"
            );
            // meta.condition.procedure = "W-09-29";
            meta.condition.temp = "24";
            meta.condition.hum = "42";
            break;

        // Dead Weight Box
        case "weighing scale":
        case "weight indicator":
        case "digital weight indicator":
            meta.master = masterEquip.findById(
                "fac6d929-c502-4a76-98bf-1d5d0e393de9"
            );
            // meta.condition.procedure = "W-09-43";
            meta.condition.temp = "21";
            meta.condition.hum = "50";
            break;

        // Measuring Tape
        case "measuring tape":
        case "measuring scale":
            meta.master = masterEquip.findById(
                "854bdd56-b837-48b8-b4bc-8773fb4faa3f"
            );
            // meta.condition.procedure = "W-09-44";
            meta.condition.temp = "23";
            meta.condition.hum = "46";
            break;

        // Measuring Cylinder
        case "measuring cylinder":
            meta.master = masterEquip.findById(
                "938e8680-1735-4acf-9172-21b66c9e5fa7"
            );
            // meta.condition.procedure = "W-09-65";
            meta.condition.temp = "24";
            meta.condition.hum = "47";
            break;

        // Laser Distance Meter
        case "yard meter":
            meta.master = masterEquip.findById(
                "da95852c-5811-4cde-8c39-57810773791c"
            );
            // meta.condition.procedure = "W-09-44";
            meta.condition.temp = "23";
            meta.condition.hum = "46";
            break;

        // Lux Meter
        case "lux meter":
            meta.master = masterEquip.findById(
                "fa555cdd-201d-48a1-bc68-1c9128536674"
            );
            // meta.condition.procedure = "W-09-64";
            meta.condition.temp = "23";
            meta.condition.hum = "50";
            break;

        // Vernier Caliper
        case "vernier caliper":
        case "digital vernier caliper":
            meta.master = masterEquip.findById(
                "2334590b-ad25-43cd-82ed-c006fdbb29ab"
            );
            // meta.condition.procedure = "W-09-42";
            meta.condition.temp = "23";
            meta.condition.hum = "45";
            break;

        // Tachometer
        case "rpm":
        case "rpm meter":
            meta.master = masterEquip.findById(
                "53a284ed-cfb5-46e6-bc6f-8782cdf21371"
            );
            // meta.condition.procedure = "W-09-27";
            meta.condition.temp = "24";
            meta.condition.hum = "49";
            break;

        // Stop Watch
        case "timer":
        case "stop watch":
            meta.master = masterEquip.findById(
                "82845449-6e20-4c69-85be-865b46b873bb"
            );
            // meta.condition.procedure = "W-09-60";
            meta.condition.temp = "20";
            meta.condition.hum = "52";
            break;

        // Flow Meter
        case "flow meter":
        case "ultrasonic flow meter":
        case "air flow meter":
        case "gas flow meter":
        case "steam flow meter":
        case "water flow meter":
        case "oil flow meter":
            meta.master = masterEquip.findById(
                "eae31c67-c520-4cf8-a017-552c589fcbc6"
            );
            meta.condition.temp = "26";
            meta.condition.hum = "49";
            break;

        // Pressure Gauge
        case "pressure gauge":
        case "magnehelic gauge":
        case "pressure transmitter":
        case "pressure switch":
        case "pressure safety valve":
            switch (mode) {
                case "bar":
                case "kgcm²":
                case "kg/cm²":
                case "kgfcm²":
                case "kgf/cm²":
                    if (maxNum <= 20) {
                        meta.master = masterEquip.findById(
                            "578e907f-306b-4539-9c69-a37504a01c99"
                        );
                    }
                    if (maxNum >= 21) {
                        meta.master = masterEquip.findById(
                            "6199b799-b8f5-4995-8aea-7b236d99e938"
                        );
                    }
                    // if (maxNum > 40 && maxNum <= 400) {
                    //     meta.master = masterEquip.findById(
                    //         "4ce76759-ea8c-4147-8869-f252e041d3cb"
                    //     );
                    // }
                    // if (maxNum > 401 && maxNum <= 700) {
                    //     meta.master = masterEquip.findById(
                    //         "2fbaff06-8ee2-408c-a2df-b2c6cfd4df3e"
                    //     );
                    // }
                    break;
                case "psi":
                    if (maxNum <= 290) {
                        meta.master = masterEquip.findById(
                            "578e907f-306b-4539-9c69-a37504a01c99"
                        );
                    }
                    if (maxNum > 290) {
                        meta.master = masterEquip.findById(
                            "6199b799-b8f5-4995-8aea-7b236d99e938"
                        );
                    }
                    break;
                case "mbar":
                    if (maxNum <= 20000) {
                        meta.master = masterEquip.findById(
                            "578e907f-306b-4539-9c69-a37504a01c99"
                        );
                    }
                    if (maxNum > 20000) {
                        meta.master = masterEquip.findById(
                            "6199b799-b8f5-4995-8aea-7b236d99e938"
                        );
                    }
                    break;
                case "mpa":
                    if (maxNum <= 2) {
                        meta.master = masterEquip.findById(
                            "578e907f-306b-4539-9c69-a37504a01c99"
                        );
                    }
                    if (maxNum > 2) {
                        meta.master = masterEquip.findById(
                            "6199b799-b8f5-4995-8aea-7b236d99e938"
                        );
                    }
                    break;
            }
            // meta.condition.procedure = "W-09-23";
            meta.condition.temp = "23";
            meta.condition.hum = "50";
            break;
    }
    const procedure = getProcedureNo(equip);
    meta.condition.procedure = procedure;
    if (!meta.master) {
        console.log({ equip, maxNum, mode });
    }
    return meta;
};

export { masterEquip, getMaster };
