import {test,expect} from '@playwright/test';
import fs from 'fs';

//*JSON
const jsonPath = 'testData/data.json';
const loginData = JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

//*CSV
import {test,expect} from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
const csvPath = "testData/data.csv";
const fileContent = fs.readFileSync(csvPath,'utf-8');
const records = parse(fileContent ,
    {
        columns : true,
        skip_empty_lines :true,
    }
)

//*XLSX
//* install npm install xlsx

import {test,expect} from '@playwright/test';
import fs from 'fs';
import * as XLSX from 'xlsx';
const xlsxFilePath = "testData/data.xlsx";
const content = XLSX.readFile(xlsxFilePath);
const sheet = content.SheetNames[0];
const worksheet = content.Sheets[sheet];
const loginData1 = XLSX.utils.sheet_to_json(worksheet);

