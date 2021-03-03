const fetch = require('node-fetch');
const qs = require('qs');


// Make sure you replace these values from the copied values of you app
const APP_ID = " b97b1ad2-26da-478d-8aa4-a1cbcc43c5f6";
const TENANT_ID = "92a96cbf-4edd-4c34-befa-21c2917614af"
const APP_SECERET = "V_Zz_bj~oiMa3k3-34.e4Ocd33Ir6_tvs7";
const TOKEN_ENDPOINT = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
const MS_GRAPH_SCOPE = 'https://graph.microsoft.com/.default';

const postData = {
    grant_type: 'client_credentials',
    client_id: APP_ID,
    client_secret: APP_SECERET,
    scope: MS_GRAPH_SCOPE
}



async function fetchToken() {
    let response = await fetch(TOKEN_ENDPOINT, {

        method: 'post',
        body: qs.stringify(postData),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });

    token = await response.json();

    return token;
}

const accessToken = fetchToken().then(r => {
    console.log("resposne", r);
    return r
});

console.log(accessToken);
