import axios from "axios";

export const sendMessage = (message) => {
  // const TOKEN = "6802394873:AAHFRGdxOIQHrTnNR0_aAX2e3XhxQf3p66Q";
  const TOKEN = "6894810948:AAGK2gumV7SN_bMQpTpLxw0iVLxh2qeDEHs";
  const CHAT_ID = "-1514536231";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => { })
    .catch((err) => { });
};
