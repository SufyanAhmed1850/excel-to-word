import * as fs from "fs";
import inquirer from "inquirer";
import readExcelFile from "./src/readExcel.js";
import { getMaster } from "./src/masterEquip.js";
import {
    Document,
    LineRuleType,
    Packer,
    Paragraph,
    PositionalTab,
    PositionalTabAlignment,
    PositionalTabLeader,
    PositionalTabRelativeTo,
    TextRun,
    PageBreak,
} from "docx";
import simleTable from "./src/table/simpleTable.js";
import flowMeterTable from "./src/table/flowMeterTable.js";

const pathToSaveWord = "./dist/Certificates.docx";
let certs;

const border = () => {
    return {
        top: {
            color: "auto",
            space: 0,
            style: "single",
            size: 6,
        },
        bottom: {
            color: "auto",
            space: 1,
            style: "single",
            size: 6,
        },
        left: {
            color: "auto",
            space: 0,
            style: "single",
            size: 6,
        },
        right: {
            color: "auto",
            space: 0,
            style: "single",
            size: 6,
        },
    };
};

const getPageBreak = (i) => {
    if (i + 1 !== certs.length) {
        return new PageBreak();
    }
};

const getChildren = (answer) => {
    const paragraphs = [];
    certs.forEach((cert, i) => {
        const customerEq = cert.equipment.toLowerCase();
        const meta = getMaster(cert.equipment, cert.maxRead, cert.mode);
        const condition = meta.condition;
        const master = meta.master;
        const getFreq = (fr) => {
            let freq = fr === "cal" ? "Calibration" : "Verification";
            let sig = fr === "cal" ? "CALIBRATED" : "VERIFIED";
            return { freq, sig };
        };
        const frequency = getFreq(cert.freq);
        const getYearMonth = (date) => {
            const newDate = new Date(date);
            let year = newDate.getFullYear();
            year = year.toString().slice(2, 4);
            let month = newDate.getMonth() + 1;
            month = month.toString().padStart(2, "0");
            return { year, month };
        };
        const yeraMonth = getYearMonth(cert.calDate);
        paragraphs.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Certificate No:\t\t\t\t",
                        bold: true,
                        font: "Calibri",
                        size: 21,
                    }),
                    new TextRun({
                        text: `${yeraMonth.year}-${yeraMonth.month}-${
                            +answer.certNum + i
                        }`,
                        font: "Calibri",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Customer Name:\t\t\t",
                        bold: true,
                        font: "Calibri",
                        size: 21,
                    }),
                    new TextRun({
                        text: cert.customer,
                        font: "Calibri",
                    }),
                ],
                spacing: {
                    before: 60,
                    lineRule: LineRuleType.EXACTLY,
                },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: `${frequency.freq} Date:\t\t\t`,
                        bold: true,
                        font: "Calibri",
                        size: 21,
                    }),
                    new TextRun({ text: cert.calDate, font: "Calibri" }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text:
                            "Recommended " +
                            frequency.freq +
                            " Date:" +
                            (cert.freq === "cal" ? "\t\t" : "\t"),
                        bold: true,
                        font: "Calibri",
                        size: 21,
                    }),
                    new TextRun({
                        text: cert.calDue,
                        bold: true,
                        font: "Calibri",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Customer's Equipment Data",
                        bold: true,
                        font: "Calibri",
                        size: 21,
                    }),
                ],
                spacing: {
                    before: 120,
                    lineRule: LineRuleType.EXACTLY,
                },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: `  ${cert.equipment}`,
                        bold: true,
                        font: "Calibri",
                    }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "\tU.I No:\t\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: cert.ui,
                        font: "Calibri",
                    }),
                    new TextRun({
                        children: [
                            new PositionalTab({
                                alignment: PositionalTabAlignment.CENTER,
                                relativeTo: PositionalTabRelativeTo.INDENT,
                                leader: PositionalTabLeader.NONE,
                            }),
                            new TextRun({
                                text: customerEq.includes("flow meter")
                                    ? "\tLine Size:\t"
                                    : "\tRange:\t\t",
                                font: "Calibri",
                            }),
                        ],
                    }),
                    new TextRun({ text: cert.range, font: "Calibri" }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "\tType:\t\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: cert.type,
                        font: "Calibri",
                    }),
                    new TextRun({
                        children: [
                            new PositionalTab({
                                alignment: PositionalTabAlignment.CENTER,
                                relativeTo: PositionalTabRelativeTo.INDENT,
                                leader: PositionalTabLeader.NONE,
                            }),
                            new TextRun({
                                text: "\tTolerance:\t",
                                font: "Calibri",
                            }),
                        ],
                    }),
                    new TextRun({ text: cert.tolerance, font: "Calibri" }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "\tMake:\t\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: cert.make,
                        font: "Calibri",
                    }),
                    new TextRun({
                        children: [
                            new PositionalTab({
                                alignment: PositionalTabAlignment.CENTER,
                                relativeTo: PositionalTabRelativeTo.INDENT,
                                leader: PositionalTabLeader.NONE,
                            }),
                            new TextRun({
                                text: "\tLocation:\t",
                                font: "Calibri",
                            }),
                        ],
                    }),
                    new TextRun({ text: cert.location, font: "Calibri" }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "\tModel:\t\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: cert.model,
                        font: "Calibri",
                    }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "\tSerial:\t\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: "N/A",
                        font: "Calibri",
                    }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "Master Equipment ",
                        bold: true,
                        font: "Calibri",
                        size: 21,
                    }),
                ],
                spacing: {
                    before: 120,
                    lineRule: LineRuleType.EXACTLY,
                },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: `  ${master.equipName}`,
                        bold: true,
                        font: "Calibri",
                    }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "\tMake:\t\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: master.model,
                        font: "Calibri",
                    }),
                    new TextRun({
                        children: [
                            new PositionalTab({
                                alignment: PositionalTabAlignment.CENTER,
                                relativeTo: PositionalTabRelativeTo.INDENT,
                                leader: PositionalTabLeader.NONE,
                            }),
                            new TextRun({
                                text: "\tSerial No:\t",
                                font: "Calibri",
                            }),
                        ],
                    }),
                    new TextRun({ text: master.serial, font: "Calibri" }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "\tTraceability:\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: master.trac,
                        font: "Calibri",
                    }),
                    new TextRun({
                        children: [
                            new PositionalTab({
                                alignment: PositionalTabAlignment.CENTER,
                                relativeTo: PositionalTabRelativeTo.INDENT,
                                leader: PositionalTabLeader.NONE,
                            }),
                            new TextRun({
                                text: "\tId No:\t\t",
                                font: "Calibri",
                            }),
                        ],
                    }),
                    new TextRun({
                        text: master.idNo,
                        font: "Calibri",
                    }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "\tCal. Date:\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: master.calDate,
                        font: "Calibri",
                    }),
                    new TextRun({
                        children: [
                            new PositionalTab({
                                alignment: PositionalTabAlignment.CENTER,
                                relativeTo: PositionalTabRelativeTo.INDENT,
                                leader: PositionalTabLeader.NONE,
                            }),
                            new TextRun({
                                text: "\tCal. Due Date:\t",
                                font: "Calibri",
                            }),
                        ],
                    }),
                    new TextRun({
                        text: master.calDueDate,
                        font: "Calibri",
                    }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: `${frequency.freq} Procedure:\t`,
                        bold: true,
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: condition.procedure,
                        font: "Calibri",
                        size: 19,
                    }),
                ],
                spacing: {
                    before: 120,
                    lineRule: LineRuleType.EXACTLY,
                },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: `${frequency.freq.toUpperCase()} CONDITION:`,
                        bold: true,
                        font: "Calibri",
                        size: 21,
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "  Temperature:\t\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: `${condition.temp} ± 3°C`,
                        font: "Calibri",
                        size: 19,
                    }),
                ],
                border: border(),
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "  Relative Humidity:\t",
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: `${condition.hum} ± 10% RH`,
                        font: "Calibri",
                        size: 19,
                    }),
                ],
                border: border(),
            })
        );
        if (cert.calDue !== "OUT OF ORDER") {
            const argsToPass = {
                paragraphs,
                maxNumber: +cert.maxRead,
                mode: cert.mode,
            };
            paragraphs.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `${frequency.freq.toUpperCase()} RESULT`,
                            bold: true,
                            font: "Calibri",
                            size: 21,
                        }),
                        new TextRun({
                            children: [
                                new PositionalTab({
                                    alignment: PositionalTabAlignment.RIGHT,
                                    relativeTo: PositionalTabRelativeTo.INDENT,
                                    leader: PositionalTabLeader.NONE,
                                }),
                                new TextRun({
                                    text: "Status [Pass]",
                                    bold: true,
                                    font: "Calibri",
                                    size: 22,
                                }),
                            ],
                        }),
                    ],
                    spacing: {
                        before: 120,
                        lineRule: LineRuleType.EXACTLY,
                    },
                })
            );
            switch (customerEq) {
                case "flow meter":
                    flowMeterTable(argsToPass);
                    break;
                default:
                    simleTable(argsToPass);
                    break;
            }
        }
        paragraphs.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: `The ${frequency.freq.toLowerCase()} result indicated refers to the measured values only, with no account being taken of the instrument’s ability to maintain its calibration.`,
                        font: "Calibri",
                    }),
                ],
                spacing: {
                    before: 80,
                    lineRule: LineRuleType.EXACTLY,
                },
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "NOTE : ",
                        bold: true,
                        font: "Calibri",
                    }),
                    new TextRun({
                        text: "This Certificate is NOT VALID for further Calibration/Certification/Verification purpose.",
                        font: "Calibri",
                    }),
                ],
            }),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph(""),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "____________________________\t\t\t\t\t\t\t\t____________________________",
                        font: "Times New Roman",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: `	${frequency.sig} BY\t\t\t\t\t\t\t\t\t\t     CHECKED BY`,
                        font: "Calibri",
                    }),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({
                        text: "F-07-03 Issue No. “2” Rev.”1” Dated: 10/05/2017.",
                        font: "Calibri",
                        size: 16,
                    }),
                    getPageBreak(i),
                ],
                spacing: {
                    before: 40,
                    lineRule: LineRuleType.EXACTLY,
                },
            })
        );
    });
    return paragraphs;
};
const processDoc = async (answer) => {
    try {
        certs = await readExcelFile();
        const doc = new Document({
            sections: [
                {
                    properties: {
                        page: {
                            size: {
                                width: 12240, // Letter size width in TWIPs
                                height: 15840, // Letter size height in TWIPs
                            },
                            margin: {
                                top: 2592,
                                right: 720,
                                bottom: 720,
                                left: 720,
                            },
                        },
                    },
                    children: getChildren(answer),
                },
            ],
        });

        Packer.toBuffer(doc).then((buffer) => {
            fs.writeFileSync(pathToSaveWord, buffer);
        });
    } catch (error) {
        console.error(error.message);
    }
};

const questions = [
    {
        type: "input",
        name: "certNum",
        message: "Please enter first certificate number e.g. 8888888:",
        validate: function (value) {
            var pass = value.match();
            if (/^\d+$/.test(value)) {
                return true;
            }
            return "Please enter a valid certificate number";
        },
    },
];
inquirer
    .prompt(questions)
    .then((answer) => processDoc(answer))
    .catch((error) => console.error(error));
