$(document).ready(async function () {

    async function fetchOptions() {
        console.log("testing")
        let optionsResponse = await fetch(`https://gisportal.mnm.punjab.gov.pk/mmd/applications/`,
         {
            method: 'options',
            Authorization : 'Token 8a88146a6df8be5ad797825b99914dd3daeaf36e'
        
        });
        let optionsData = await optionsResponse.json();
        return optionsData.actions.POST;
    }
    // fetchConsolidateApplications('');
    // let applicationCounts = await fetchConsolidatedCounts('applications');
    // processCounts(applicationCounts);
})


$(document).ready( function () {

    console.log("testing");
    let data =  fetchOptions();

    console.log(data);
   
});


async function fetchOptions() {
    console.log("testing")
    let optionsResponse = await fetch(`https://gisportal.mnm.punjab.gov.pk/mmd/applications/`,
    
    {
        
        method: 'options',
        Authorization : 'Token 8a88146a6df8be5ad797825b99914dd3daeaf36e'
    
    }
    
    
    );
    let optionsData = await optionsResponse.json();
    return optionsData.actions.POST;
}
