const populate = require("./populateDB");
populate(() => {
    console.log('Done!');
    process.exit(0);
});