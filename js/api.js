const BASE_URL = "http://localhost:5050";
const RESOURSE_URL = `${BASE_URL}/orders`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
      const reqParams = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      if (body) {
        reqParams.body = JSON.stringify(body);
      }
      return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
      console.error("HTTP ERROR: ", error);
    }
  };
  
  
  export const getAllOrders = async () => {
    const rawResponse = await baseRequest({ method: "GET" });
    return await rawResponse.json();
  };
  
  export const postOrders = (body) =>
    baseRequest({ method: "POST", body });

//   export const editItem = (id, body) =>
//     baseRequest({ urlPath: `/${id}`, method: "PUT", body });
  
  export const deleteOreder = async (id) => {
    await baseRequest({ urlPath: `/${id}`, method: "DELETE" });
  }
 