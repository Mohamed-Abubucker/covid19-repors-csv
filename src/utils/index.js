const fse = require('fs-extra');
const jsonexport = require('jsonexport');

const saveFile = async (reportName, data) => {
    const fileName = `${reportName}-${getFormattedTime()}.csv`;
    return await fse.outputFile(fileName, data, { encoding: "utf8" })
};

const convertToCsv = (data) => {
    return new Promise((resolve, reject) => {
        jsonexport(data, (err, csv) => {
            if (err) return reject(err);
            resolve(csv);
        });
    })
}


const getFormattedTime = () => {
    const now = new Date();
    const y = now.getFullYear();
    // JavaScript months are 0-based.
    const m = now.getMonth() + 1;
    const d = now.getDate();
    const h = now.getHours();
    const mi = now.getMinutes();
    const s = now.getSeconds();
    return `${y}-${m}-${d}T${h}:${mi}:${s}`;
}

module.exports = {
    getFormattedTime,
    convertToCsv,
    saveFile
}