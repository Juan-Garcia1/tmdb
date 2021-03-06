const axios = require("axios");
const qs = require("qs");

exports.handler = function(event, context, callback) {
  const { movie_id } = event.queryStringParameters;
  const { API_KEY, API_URL } = process.env;
  const URL = `${API_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`;

  const pass = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  };

  const get = () => {
    axios
      .get(URL)
      .then(response => {
        pass(response.data);
      })
      .catch(err => pass(err));
  };
  if (event.httpMethod == "GET") {
    get();
  }
};
