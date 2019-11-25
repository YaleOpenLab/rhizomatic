const AirtablePlus = require('airtable-plus');


// baseID, apiKey, and tableName can alternatively be set by environment variables
const airtable = new AirtablePlus({
    baseID: 'xxx',
    apiKey: 'xxx',
    tableName: 'Table 1',
});

async function getProduct(id)
{
    (async () => {
        try {
            // allows for api params to be passed in from Airtable api
            const readRes = await airtable.read({
                filterByFormula: 'Name = "Foo"',
                maxRecords: 1
            });
    
            // functions can take optional override configuration object
            const cfg = { tableName: 'Read' };
            const updateRes = await airtable.update('1234', {
                Name: 'foobar'
            }, cfg);
    
            const updateWhereRes = await airtable.updateWhere('Name = "Foo"', {
                filterByFormula: 'Name = "foobar"'
            });
    
            const deleteRes = await airtable.delete('1234');
    
            const truncRes = await airtable.truncate();
        }
        catch(e) {
            console.error(e);
        }
    })();
}