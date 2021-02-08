import axios from "axios";

const URL = "https://randomuser.me/api/";
// const APIKEY = "";

//exporting default ajax call as axios
export default {
  search: function (query) {
    return axios.get(URL + query);
  },
};
