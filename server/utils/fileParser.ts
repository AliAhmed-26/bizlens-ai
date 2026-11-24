import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import ExcelJS from "exceljs";

const MAX_ROWS = 50000;

function normalizeCell(value: any): unknown {
    if (value === null || value === undefined) return null;
    if (value instanceof Date) return value.toISOString();
    if (typeof value === "object") {
        if ("result" in value) return normalizeCell(value.result);
        if ("richText" in value) return value.richText.map((t: any) => t.text).join("");
        if ("text" in value) return value.text;
        return null;
    }
    return value;
}

export const parseFile = async (filePath: string): Promise<Record<string, unknown>[]> => {
    const extension = path.extname(filePath).toLowerCase();
    let records: Record<string, unknown>[] = [];

    if (extension === ".csv") {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
            bom: true,
            relax_column_count: true,
        });
    } else if (extension === ".xlsx") {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);

        const worksheet = workbook.worksheets[0];
        if (!worksheet) throw new Error("Excel file contains no worksheet.");

        const headers: string[] = [];
        worksheet.getRow(1).eachCell((cell, colNumber) => {
            headers[colNumber - 1] = String(normalizeCell(cell.value) ?? "").trim();
        });

        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber === 1) return;

            const record: Record<string, unknown> = {};
            let hasData = false;

            headers.forEach((header, index) => {
                if (!header) return;
                const val = normalizeCell(row.getCell(index + 1).value);
                record[header] = val;
                if (val !== null && val !== "") hasData = true;
            });

            if (hasData) records.push(record);
        });
    } else {
        throw new Error("Unsupported file format. Please upload CSV or XLSX.");
    }

    if (records.length === 0) throw new Error("File has no data rows.");
    if (records.length > MAX_ROWS) throw new Error(`Max ${MAX_ROWS} rows allowed.`);

    return records;
};