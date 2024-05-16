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

const simleTable = ({ paragraphs, maxNumber, mode }) => {
    const generateRandomNumbers = () => {
        let randomNumbers = [];
        for (let i = 1; i <= 5; i++) {
            let randomNumber = Number(Math.random() * (maxNumber * 0.02));
            randomNumber += (maxNumber / 5) * i;
            if (maxNumber > 5) {
                randomNumber = Math.round(randomNumber);
                randomNumber += ".0";
            } else {
                randomNumber = randomNumber.toFixed(1);
            }
            if (i < 5) {
                randomNumbers.push(randomNumber);
            } else {
                if (maxNumber % 1 === 0) {
                    maxNumber += ".0";
                }
                randomNumbers.push(maxNumber);
            }
        }
        return randomNumbers;
    };
    let numbers = generateRandomNumbers().map((num) => num.toString());
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
                                            text: mode,
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                            rowSpan: 5,
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
                                            text: numbers[0],
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
                                            text: numbers[0],
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
                                            text: numbers[1],
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
                                            text: numbers[1],
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
                                            text: numbers[2],
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
                                            text: numbers[2],
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
                                            text: numbers[3],
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
                                            text: numbers[3],
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
                // < --------------------------5-5-5------------------------------ >
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
                                            text: numbers[4],
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
                                            text: numbers[4],
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
export default simleTable;
