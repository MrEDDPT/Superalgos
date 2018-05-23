﻿
/*

This module is for enabling the AACloud to run at the browser.

When running at the clode on NodeJS some things work diffently that at the browser. That gap will be fixed by the functions at this module.

*/



function runBot() {

    window.CURRENT_ENVIRONMENT = "Develop"; 
    window.STORAGE_PERMISSIONS = ecosystem.getStoragePermissions();
    window.EXCHANGE_KEYS = ecosystem.getExchangeKeys();

    let root = newRoot();

    root.initialize(onInitialized);

    function onInitialized() {

        root.start();
    }

}

function webRequire(pModulePath) {

    switch (pModulePath) {

        case 'fs': {

            return newWebFS();
        }
        case 'azure-storage': {

            return AzureStorage.Blob;
        }
        case './EventHandler': {

            let MODULE = {};
            MODULE.newEventHandler = newEventHandler;
            return MODULE;
        }
        case './BlobStorage': {

            let MODULE = {};
            MODULE.newBlobStorage = newBlobStorage;
            return MODULE;
        }
        case './DebugLog': {

            let MODULE = {};
            MODULE.newDebugLog = newDebugLog;
            return MODULE;
        }
        case './TradingBotProcessMainLoop': {

            let MODULE = {};
            MODULE.newTradingBotProcessMainLoop = newTradingBotProcessMainLoop;
            return MODULE;
        }
        case './ExtractionBotProcessMainLoop': {

            let MODULE = {};
            MODULE.newExtractionBotProcessMainLoop = newExtractionBotProcessMainLoop;
            return MODULE;
        }
        case './IndicatorBotProcessMainLoop': {

            let MODULE = {};
            MODULE.newIndicatorBotProcessMainLoop = newIndicatorBotProcessMainLoop;
            return MODULE;
        }
        case './CloudUtilities': {

            let MODULE = {};
            MODULE.newCloudUtilities = newCloudUtilities;
            return MODULE;
        }
        case './PoloniexAPIClient': {

            let MODULE = {};
            MODULE.newPoloniexAPIClient = newPoloniexAPIClient;
            return MODULE;
        }
        case './ExchangeAPI': {

            let MODULE = {};
            MODULE.newExchangeAPI = newExchangeAPI;
            return MODULE;
        }
        case './Context': {

            let MODULE = {};
            MODULE.newContext = newContext;
            return MODULE;
        }
        case './Assistant': {

            let MODULE = {};
            MODULE.newAssistant = newAssistant;
            return MODULE;
        }
        case './StatusReport': {

            let MODULE = {};
            MODULE.newStatusReport = newStatusReport;
            return MODULE;
        }
        case './DataSet': {

            let MODULE = {};
            MODULE.newDataSet = newDataSet;
            return MODULE;
        }
        case './StatusDependencies': {

            let MODULE = {};
            MODULE.newStatusDependencies = newStatusDependencies;
            return MODULE;
        }
        case './DataDependencies': {

            let MODULE = {};
            MODULE.newDataDependencies = newDataDependencies;
            return MODULE;
        }
        default: {
            console.log(pModulePath + " not found. ");
        }
    }
}

function downloadModule(pPath) {

    /*  We will need this to load individual bots modules. */

    Requirejs(["Scripts/DummyWeb"], function (DummyWeb) {
        console.log("Dummy Web Loaded");
    });

}


