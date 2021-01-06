import axios from "axios";
import React from "react";
import "./App.css";

export default {
  getUser: function () {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  },
};
