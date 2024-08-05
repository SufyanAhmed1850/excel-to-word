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

const phMeterTable = ({ paragraphs }) => {
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
                                            text: "Sample 01",
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
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
                                            text: "4",
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
                                            text: "4",
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
                                            text: "Sample 02",
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
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
                                            text: "7",
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
                                            text: "7",
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
                                            text: "Sample 03",
                                            font: "Calibri",
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
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
                                            text: "10",
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
                                            text: "10",
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
            ],
        })
    );
};
export default phMeterTable;