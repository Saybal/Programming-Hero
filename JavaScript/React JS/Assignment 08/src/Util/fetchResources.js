// src/utils/fetchResource.js
export function wrapPromise(promise) {
    let status = "pending";
    let result;
  
    const suspender = promise.then(
      res => {
        status = "success";
        result = res;
      },
      err => {
        status = "error";
        result = err;
      }
    );
  
    return {
      read() {
        if (status === "pending") {
          throw suspender; // Suspense will catch this
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      }
    };
  }
  