const Axios = require('axios');
const MapService = require('../services/mapService');


module.exports.google_map_token = async ( req, res ) => {
    try {
        console.log("token");

        let response = await Axios(tokenUrl);
        // if (response.status == 200) {
        //     console.log(response);
        // } else {
        //     console.log("else");
        // }
        console.log(response, tokenUrl);
        // return { message : "hello", status : 200}
    }
    catch (error) {
        console.log('Error from mapController');
        return res.message = "false"
     }
}