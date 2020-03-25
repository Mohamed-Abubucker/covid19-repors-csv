const PluginManager = require("covid19-api");
const path = require('path');
const { saveFile, convertToCsv } = require("./utils");

const getReports = async () => {
    const data = await PluginManager.getReports();

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getReports');

    await saveFile(filePath, csv);

}

const getReportsByCountries = async (country) => {

    const data = await PluginManager.getReportsByCountries(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getReportsByCountries');

    await saveFile(filePath, csv);

}

const getDeaths = async (country) => {

    const data = await PluginManager.getDeaths(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getDeaths');

    await saveFile(filePath, csv);

}

const getSituationReports = async (country) => {

    const data = await PluginManager.getSituationReports(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getSituationReports');

    await saveFile(filePath, csv);

}

const getTaskForceInfoUS = async (country) => {

    const data = await PluginManager.getTaskForceInfoUS(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getTaskForceInfoUS');

    await saveFile(filePath, csv);

}

const getGlobalData = async (country) => {

    const data = await PluginManager.getGlobalData(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getGlobalData');

    await saveFile(filePath, csv);

}

const getTestsInUS = async (country) => {

    const data = await PluginManager.getTestsInUS(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getTestsInUS');

    await saveFile(filePath, csv);

}

const getFatalityRateByAge = async (country) => {

    const data = await PluginManager.getFatalityRateByAge(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getFatalityRateByAge');

    await saveFile(filePath, csv);

}

const getFatalityRateBySex = async (country) => {

    const data = await PluginManager.getFatalityRateBySex(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getFatalityRateBySex');

    await saveFile(filePath, csv);

}

const getFatalityRateByComorbidities = async (country) => {

    const data = await PluginManager.getFatalityRateByComorbidities(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getFatalityRateByComorbidities');

    await saveFile(filePath, csv);

}


const getCountriesWhereCoronavirusHasSpread = async (country) => {

    const data = await PluginManager.getCountriesWhereCoronavirusHasSpread(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getCountriesWhereCoronavirusHasSpread');

    await saveFile(filePath, csv);

}

const getTravelHealthNotices = async (country) => {

    const data = await PluginManager.getTravelHealthNotices(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getTravelHealthNotices');

    await saveFile(filePath, csv);

}

const getAllCasesInAmerica = async (country) => {

    const data = await PluginManager.getAllCasesInAmerica(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getAllCasesInAmerica');

    await saveFile(filePath, csv);

}

const getAllCasesInEurope = async (country) => {

    const data = await PluginManager.getAllCasesInEurope(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getAllCasesInEurope');

    await saveFile(filePath, csv);

}

const getCaseStatusUndeEvalutationInPR = async (country) => {

    const data = await PluginManager.getCaseStatusUndeEvalutationInPR(country);

    const csv = await convertToCsv(data);

    const filePath = path.resolve(__dirname, '..', 'data', 'getCaseStatusUndeEvalutationInPR');

    await saveFile(filePath, csv);

}

module.exports = {
    getReports,
    getReportsByCountries,
    getDeaths,
    getSituationReports,
    getTaskForceInfoUS,
    getGlobalData,
    getTestsInUS,
    getFatalityRateByAge,
    getFatalityRateBySex,
    getFatalityRateByComorbidities,
    getCountriesWhereCoronavirusHasSpread,
    getTravelHealthNotices,
    getAllCasesInAmerica,
    getAllCasesInEurope,
    getCaseStatusUndeEvalutationInPR
}