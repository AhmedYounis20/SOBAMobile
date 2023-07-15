import { apiGet, apiPost } from "../apirequest/apirequest.service";

export const createProfile = (userId) => {
  const data = {
    Id: userId,
    UserId: userId,
  };

  const load = async (resolve, reject) => {
    try {
      console.log("sent data: " + JSON.stringify(data));
      const result = await apiPost("/api/Profiles", data).then((res) => {
        console.log("profile res:" + JSON.stringify(res));
        return res.json();
      });
      console.log("data sent: " + JSON.stringify(data));
      console.log(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  };

  return new Promise((resolve, reject) => {
    load(resolve, reject); // Call load function
  });
};

export const getProfile = (id) => {
  const load = async (resolve, reject) => {
    try {
      const result = await apiGet("api/Profiles/" + id).then((res) => {
        console.log("profile res:" + JSON.stringify(res));
        return res.json();
      });
      if (result.id == "00000000-0000-0000-0000-000000000000") resolve(null);
      else resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  };

  return new Promise((resolve, reject) => {
    load(resolve, reject); // Call load function
  });
};
