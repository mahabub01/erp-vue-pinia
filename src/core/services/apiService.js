import axiosInstance from "./axios";

// const handleResponse = (resolve, reject, response) => {
//   if (response.data.status === 200) {
//     resolve(response.data)
//   }
//   else {
//     reject(response.data)
//   }
// }

// const handleError = (reject, error) => {
//   console.log(error)
//   const newError = {
//     status: 500,
//     message: 'Có lỗi kết nối với máy chủ hệ thống'
//   }
//   reject(newError)
// }

const handleResponse = (resolve, response) => {
  resolve(response.data);
  // if (response?.data.status === 200) {
  //   resolve(response.data);
  // } else {
  //   reject(response.data);
  // }
};

const handleError = (reject, error) => {
  reject(error);
};

// export const sendGetget = (url, payload) => {
//   return new Promise((resolve, reject) => {
//     axiosInstance
//       .get(url, { payload })
//       .then((response) => {
//         handleResponse(resolve, reject, response);
//       })
//       .catch((error) => {
//         handleError(reject, error);
//       });
//   });
// };

export const sendGetget = (url, payload) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url, { payload })
      .then((response) => {
        handleResponse(resolve, response);
      })
      .catch((error) => {
        handleError(reject, error);
      });
  });
};

export const sendPost = (url, payload) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(url, payload)
      .then((response) => {
        handleResponse(resolve, response);
      })
      .catch((error) => {
        handleError(reject, error);
      });
  });
};

export const sendPut = (url, payload) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(url, payload)
      .then((response) => {
        handleResponse(resolve, response);
      })
      .catch((error) => {
        handleError(reject, error);
      });
  });
};

export const sendPatch = (url, payload) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(url, payload)
      .then((response) => {
        handleResponse(resolve, response);
      })
      .catch((error) => {
        handleError(reject, error);
      });
  });
};

export const sendDelete = (url, payload) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(url, { payload })
      .then((response) => {
        handleResponse(resolve, response);
      })
      .catch((error) => {
        handleError(reject, error);
      });
  });
};
