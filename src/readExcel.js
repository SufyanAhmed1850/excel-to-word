import XlsxPopulate from "xlsx-populate";
import { format } from "date-fns";

const pathToExcellFile = "./dist/list.xlsx";

const readExcelFile = async () => {
    try {
        const workbook = await XlsxPopulate.fromFileAsync(pathToExcellFile);
        const worksheet = workbook.sheet(0);
        const data = worksheet.usedRange().value();
        const headers = data.shift();
        const certs = data.map((row) => {
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
                maxRead: parseFloat(row[headers.indexOf("MaxRead")]),
                freq: row[headers.indexOf("Freq")],
                calDate: format(
                    XlsxPopulate.numberToDate(row[headers.indexOf("CalDate")])
                        .toISOString()
                        .split("T")[0],
                    "dd-MMM-yyyy"
                ),
                calDue: format(
                    XlsxPopulate.numberToDate(row[headers.indexOf("CalDue")])
                        .toISOString()
                        .split("T")[0],
                    "dd-MMM-yyyy"
                ),
            };
        });
        console.log(certs);
        return certs;
    } catch (error) {
        console.error("Error:", error);
    }
};

export default readExcelFile;