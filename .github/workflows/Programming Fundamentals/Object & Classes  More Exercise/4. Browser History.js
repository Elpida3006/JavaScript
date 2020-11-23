function browserHistory(object, commandArray) {

    function checkIfOpen(site) {
        object['Open Tabs'].includes(site) ? true : false;
    }

    function closeTab(site) {
        let closeSiteIndex = object['Open Tabs'].indexOf(site);
        object['Open Tabs'].splice(closeSiteIndex, 1);
        object['Recently Closed'].push(site);
    }

    function openTab(site) {
        object['Open Tabs'].push(site);
    }

    function addToLogs(command, site) {
        object['Browser Logs'].push(`${command} ${site}`);
    }

    function clearHistory() {
        object['Open Tabs'].splice(0);
        object['Recently Closed'].splice(0);
        object['Browser Logs'].splice(0);
    }


    for (const commands of commandArray) {
        let [command, site] = commands.split(' ');

        if (commands.includes('Clear History and Cache')) {
            command = commands;
        }

        switch (command) {
            case 'Close':
                if (checkIfOpen(site)) {
                    closeTab(site);
                    addToLogs(command, site);
                }
                break;
            case 'Open':
                openTab(site);
                addToLogs(command, site);
                break;
            case 'Clear History and Cache':
                clearHistory();
                break;
        }

    }
    console.log(`${object['Browser Name']}`);
    console.log(`Open Tabs: ${object['Open Tabs'].join(", ")}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(", ")}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(", ")}`);
}
browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
}, ["Close Facebook", "Open StackOverFlow", "Open Google"])