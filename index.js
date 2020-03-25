const {
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
} = require('./src');

getReports().then(() => console.log("getReports downloaded and saved into csv file")).catch(err => console.error(`getReports ${err.message}`));

getReportsByCountries("us").then(() => console.log("getReportsByCountries downloaded and saved into csv file")).catch(err => console.error(`getReportsByCountries ${err.message}`));

getDeaths().then(() => console.log("getDeaths downloaded and saved into csv file")).catch(err => console.error(`getDeaths ${err.message}`));

getSituationReports().then(() => console.log("getSituationReports downloaded and saved into csv file")).catch(err => console.error(`getSituationReports ${err.message}`));

getTaskForceInfoUS().then(() => console.log("getTaskForceInfoUS downloaded and saved into csv file")).catch(err => console.error(`getTaskForceInfoUS ${err.message}`));

getGlobalData().then(() => console.log("getGlobalData downloaded and saved into csv file")).catch(err => console.error(`getGlobalData ${err.message}`));

getTestsInUS().then(() => console.log("getTestsInUS downloaded and saved into csv file")).catch(err => console.error(`getTestsInUS ${err.message}`));

getFatalityRateByAge().then(() => console.log("getFatalityRateByAge downloaded and saved into csv file")).catch(err => console.error(`getFatalityRateByAge ${err.message}`));

getFatalityRateBySex().then(() => console.log("getFatalityRateBySex downloaded and saved into csv file")).catch(err => console.error(`getFatalityRateBySex ${err.message}`));

getFatalityRateByComorbidities().then(() => console.log("getFatalityRateByComorbidities downloaded and saved into csv file")).catch(err => console.error(`getFatalityRateByComorbidities ${err.message}`));

getCountriesWhereCoronavirusHasSpread().then(() => console.log("getCountriesWhereCoronavirusHasSpread downloaded and saved into csv file")).catch(err => console.error(`getCountriesWhereCoronavirusHasSpread ${err.message}`));

getTravelHealthNotices().then(() => console.log("getTravelHealthNotices downloaded and saved into csv file")).catch(err => console.error(`getTravelHealthNotices ${err.message}`));

getAllCasesInAmerica().then(() => console.log("getAllCasesInAmerica downloaded and saved into csv file")).catch(err => console.error(`getAllCasesInAmerica ${err.message}`));

getAllCasesInEurope().then(() => console.log("getAllCasesInEurope downloaded and saved into csv file")).catch(err => console.error(`getAllCasesInEurope ${err.message}`));

getCaseStatusUndeEvalutationInPR().then(() => console.log("getCaseStatusUndeEvalutationInPR downloaded and saved into csv file")).catch(err => console.error(`getCaseStatusUndeEvalutationInPR ${err.message}`));