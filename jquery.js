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

    < script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" ></script>

        <script type="text/javascript">
            $(document).ready(function() {
                requestToken();
      });

      var token;

      function requestToken() {

                $.ajax({
                    "async": true,
                    "crossDomain": true,
                    "url": "https://cors-anywhere.herokuapp.com/https://login.microsoftonline.com/sharepointtechie.onmicrosoft.com/oauth2/v2.0/token", // Pass your tenant name instead of sharepointtechie    
                    "method": "POST",
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    "data": {
                        "grant_type": "client_credentials",
                        "client_id ": "8baf0301-27df-44b1-b4fe-7911b9a918de", //Provide your app id    
                        "client_secret": "**********", //Provide your client secret genereated from your app
                        "scope ": "https://graph.microsoft.com/.default"
                    },
                    success: function (response) {
                        console.log(response);
                        token = response.access_token;
                        document.getElementById('content').innerHTML = token;
                    }

                })
            }
        </script>  