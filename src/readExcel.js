import XlsxPopulate from "xlsx-populate";
import { format } from "date-fns";

const pathToExcellFile = "./dist/list.xlsx";
const timeZoneOffset = new Date().getTimezoneOffset() * 60000;

const readExcelFile = async () => {
    try {
        const workbook = await XlsxPopulate.fromFileAsync(pathToExcellFile);
        const worksheet = workbook.sheet(0);
        const data = worksheet.usedRange().value();
        const headers = data.shift();
        const certs = data.map((row) => {
            const maxRead = row[headers.indexOf("MaxRead")].toString();
            // console.log(maxRead);
            const dueDate = () => {
                if (row[headers.indexOf("CalDue")] !== "OUT OF ORDER") {
                    return format(
                        new Date(
                            XlsxPopulate.numberToDate(
                                row[headers.indexOf("CalDue")]
                            ) - timeZoneOffset
                        )
                            .toISOString()
                            .split("T")[0],
                        "dd-MMM-yyyy"
                    );
                } else {
                    return row[headers.indexOf("CalDue")];
                }
            };
            return {
                customer: row[headers.indexOf("Customer")],
                equipment: row[headers.indexOf("Equipment")],
                ui: row[headers.indexOf("UI")],
                type: row[headers.indexOf("Type")],
                make: row[headers.indexOf("Make")],
                model: row[headers.indexOf("Model")],
                range: row[headers.indexOf("Range")],
                tolerance: row[headers.indexOf("Tolerance")],
                location: row[headers.indexOf("Location")],
                mode: row[headers.indexOf("Mode")],
                maxRead: maxRead,
                freq: row[headers.indexOf("Freq")],
                calDate: format(
                    new Date(
                        XlsxPopulate.numberToDate(
                            row[headers.indexOf("CalDate")]
                        ) - timeZoneOffset
                    )
                        .toISOString()
                        .split("T")[0],
                    "dd-MMM-yyyy"
                ),
                calDue: dueDate(),
            };
        });
        // console.log(certs);
        return certs;
    } catch (error) {
        console.error("Error:", error);
    }
};

export default readExcelFile;
