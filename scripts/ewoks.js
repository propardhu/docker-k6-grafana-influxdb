import http from 'k6/http';
import { check, sleep } from "k6";

export let options = {
  stages: [
      // Ramp-up from 1 to 5 virtual users (VUs) in 5s
      { duration: "10s", target: 500 },

      // // Stay at rest on 5 VUs for 10s
      // { duration: "10s", target: 50 },

      // // Ramp-down from 5 to 0 VUs for 5s
      // { duration: "5s", target: 0 }
  ]
};

export default function () {
  // let response = http.get("https://gateway.vantashala.com/services/publisher/api/_search/items?query=%20&sort=id,asc&page=0&size=8&lat=17.4601442&lng=78.4751349");
  // let res = http.get('https://gateway.vantashala.com/services/publisher/api/publisher/findByStatus?status=APPROVED');
  // check(response, { "status is 200": (r) => r.status === 200 });
  // sleep(.300);
  let res = http.get('https://gateway.vantashala.com/services/publisher/api/publisher/findByStatus?status=APPROVED');
  check(res, { "status is 200": (r) => r.status === 200 });
  sleep(.300);
};
