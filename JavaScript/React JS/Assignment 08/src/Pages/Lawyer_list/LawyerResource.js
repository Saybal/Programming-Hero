import { wrapPromise } from "../../Util/fetchResources";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


const lawyerPromise = delay(2000).then(() =>
    fetch('/lawyerlist.json').then(res => res.json())
  );
export const lawyerResource = wrapPromise(lawyerPromise);