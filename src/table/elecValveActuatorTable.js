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

const elecValveActuatorTable = ({ paragraphs, maxNumber, mode }) => {
    let splitMaxNum = maxNumber.split(" | ");
    let percentage = +splitMaxNum[0];
    let volt = +splitMaxNum[1];
    const generateRandomNumbers = (max, eq) => {
        let results = [];
        let decimal = false;
        if (eq === "V") {
            decimal = true;
        }
        for (let i = 1; i <= 4; i++) {
            let number = (max / 4) * i;
            number = Math.round(number);
            if (decimal) {
                number += ".0";
            }
            if (i < 4) {
                results.push(number.toString());
            } else {
                if (decimal) {
                    max += ".0";
                }
                results.push(max.toString());
            }
        }
        return results;
    };

    let percentageResult = generateRandomNumbers(percentage, "%");
    let voltResult = generateRandomNumbers(volt, "V");
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
                            rowSpan: 4,
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
                                            text: percentageResult[0],
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
                                            text: percentageResult[0],
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
                                            text: "0",
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
                                            text: percentageResult[1],
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
                                            text: percentageResult[1],
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
                                            text: "0",
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
                                            text: percentageResult[2],
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
                                            text: percentageResult[2],
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
                                            text: "0",
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
                // < --------------------------4-4-4------------------------------ >
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
                                            text: percentageResult[3],
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
                                            text: percentageResult[3],
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
                                            text: "0",
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
                            rowSpan: 4,
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
                                            text: voltResult[0],
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
                                            text: voltResult[0],
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
                                            text: "0.0",
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
                                            text: voltResult[1],
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
                                            text: voltResult[1],
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
                                            text: "0.0",
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
                                            text: voltResult[2],
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
                                            text: voltResult[2],
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
                                            text: "0.0",
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
                // < --------------------------'4'-'4'-'4'------------------------------ >
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
                                            text: voltResult[3],
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
                                            text: voltResult[3],
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
                                            text: "0.0",
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
export default elecValveActuatorTable;
