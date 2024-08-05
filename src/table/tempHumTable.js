import {
    Paragraph,
    TextRun,
    Table,
    TableCell,
    TableRow,
    WidthType,
    AlignmentType,
    VerticalAlign,
} from "docx";

const tempHumTable = ({ paragraphs, maxNumber, mode }) => {
    let splitMaxNum = maxNumber.split(" | ");
    let temp = +splitMaxNum[0];
    let hum = +splitMaxNum[1];
    const generateRandomNumbers = (max) => {
        let randomUpOrDowm;
        if (mode.split(" | ")[0].split(" ")[3] === "°C") {
            randomUpOrDowm = max * 0.6;
        } else {
            randomUpOrDowm = max * 0.15;
        }
        let results = [];
        for (let i = 1; i <= 3; i++) {
            let randomNumber = Math.random() * randomUpOrDowm;
            if (Math.round(Math.random() * 1 + 1) == 1) {
                randomNumber = max + randomNumber;
            } else {
                randomNumber = max - randomNumber;
            }

            let instrument = randomNumber;
            if (Math.round(Math.random() * 4 + 1) == 2) {
                if (Math.round(Math.random() * 1 + 1) == 1) {
                    instrument = randomNumber + (Math.random() * 0.2 + 0.1);
                } else {
                    instrument = randomNumber - (Math.random() * 0.2 + 0.1);
                }
            }

            randomNumber = randomNumber.toFixed(1);
            instrument = instrument.toFixed(1);
            let err = (instrument - randomNumber).toFixed(1);

            results.push({
                master: randomNumber.toString(),
                instrument: instrument.toString(),
                err: err.toString(),
            });
        }
        return results;
    };
    let tempResult = generateRandomNumbers(temp);
    let humResult = generateRandomNumbers(hum);
    paragraphs.push(
        new Table({
            columnWidths: [2420, 2160, 3024, 1606, 1606],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                top: 20,
                                bottom: 36,
                                left: 12,
                                right: 12,
                            },
                            width: {
                                size: 2420,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Measuring Mode",
                                            bold: true,
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            margins: {
                                top: 20,
                                bottom: 36,
                                left: 12,
                                right: 12,
                            },
                            width: {
                                size: 2160,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Master Reading",
                                            bold: true,
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            margins: {
                                top: 20,
                                bottom: 36,
                                left: 12,
                                right: 12,
                            },
                            width: {
                                size: 3024,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Under Instrument Reading",
                                            bold: true,
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            margins: {
                                top: 20,
                                bottom: 36,
                                left: 12,
                                right: 12,
                            },
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Error",
                                            bold: true,
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            margins: {
                                top: 20,
                                bottom: 36,
                                left: 12,
                                right: 12,
                            },
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Status",
                                            bold: true,
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
                // < --------------------------1-1-1------------------------------ >
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 2420,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: mode.split(" | ")[0],
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            rowSpan: 3,
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 2160,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: tempResult[0].master,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 3024,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: tempResult[0].instrument,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: tempResult[0].err,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Pass",
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
                // < --------------------------2-2-2------------------------------ >
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 2160,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: tempResult[1].master,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 3024,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: tempResult[1].instrument,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: tempResult[1].err,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Pass",
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
                // < --------------------------3-3-3------------------------------ >
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 2160,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: tempResult[2].master,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 3024,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: tempResult[2].instrument,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: tempResult[2].err,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Pass",
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
                // < --------------------------EMPTY------------------------------ >
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 2420,
                                type: WidthType.DXA,
                            },
                            children: [new Paragraph("")],
                            columnSpan: 5,
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
                // < --------------------------'1'-'1'-'1'------------------------------ >
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 2420,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: mode.split(" | ")[1],
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            rowSpan: 3,
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 2160,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: humResult[0].master,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 3024,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: humResult[0].instrument,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: humResult[0].err,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Pass",
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
                // < --------------------------'2'-'2'-'2'------------------------------ >
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 2160,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: humResult[1].master,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 3024,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: humResult[1].instrument,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: humResult[1].err,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Pass",
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
                // < --------------------------'3'-'3'-'3'------------------------------ >
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 2160,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: humResult[2].master,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 3024,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: humResult[2].instrument,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: humResult[2].err,
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 1606,
                                type: WidthType.DXA,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Pass",
                                            font: "Calibri",
                                            size: 19,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
            ],
        })
    );
};
export default tempHumTable;
