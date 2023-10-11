import axios from "axios";

export const getData = async (req, res) => {
  const originSkyId = req.body.flyingFrom;
  console.log(originSkyId);
  const destinationSkyId = req.body.flyingTo;
  console.log(destinationSkyId);

  const options = {
    method: "GET",
    url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/getPriceCalendar",
    params: {
      originSkyId: originSkyId,
      destinationSkyId: destinationSkyId,
      fromDate: "2023-02-20",
    },
    headers: {
      "X-RapidAPI-Key": "a997c27e97mshf8d4fe69ff01a92p1e0558jsnc7c2fad30579",
      "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    axios.request(options).then((response) => res.json(response.data));
  } catch (error) {
    console.error(error);
  }
};
