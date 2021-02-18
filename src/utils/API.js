import axios from "axios";
// import router from "express";
// const googleApiKey = "AIzaSyBh52MlbJJBGNRjJP5tYFwtdEAiYxLqp2s";
// const limit = `${limit}`
// const APIKEY = "";

//exporting default ajax call as axios
export const getEmployeeList = (limit, nat) => {
  // getEmployeeList: function (limit, nat) {
    const URL = "https://randomuser.me/api/?results="+limit+"&nat="+nat;
    return axios.get(URL);
  
  //  getGoogleMap: function (location, radius, type){
  //    const mapsURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+location+"&radius="+radius+"&type="+type+"&key="+googleApiKey;
  //    return axios.get(mapsURL);
  //  }
};


