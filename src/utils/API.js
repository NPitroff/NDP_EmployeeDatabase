import axios from "axios";


// const limit = `${limit}`
// const APIKEY = "";

//exporting default ajax call as axios
export default {
  getEmployeeList: function (limit, nat) {
    const URL = "https://randomuser.me/api/?results="+limit+"&nat="+nat;
    return axios.get(URL);
  },
};
