
const axios = require('axios');
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
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var data = null;

async function myFunc() {

    const token = await axios
        .post(TOKEN_ENDPOINT, qs.stringify(postData))
        .then(response => {
            data = response.data;
            // console.log("data log", data);
            return data;
        })
        .catch(error => {
            console.log(error);
        });
    console.log("my token variable iside functon", token)

    console.log(token);
    return token;
}
const accessToken = myFunc().then(data => console.log("hey-hey", data))
console.log("my global token", accessToken);





//const endpoint = "https://graph.microsoft.com/v1.0/users";

// async function callApi(url, token) {

//     const options = {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     };

//     console.log('request made to web API at: ' + new Date().toString());

//     try {
//         const response = await axios.default.get(url, token);
//         return response.data;
//     } catch (error) {
//         console.log(error)
//         return error;
//     }
// };

