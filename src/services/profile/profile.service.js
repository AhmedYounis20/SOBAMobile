import { apiPost } from "../apirequest/apirequest.service";

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
