import axios from "axios";

const BASE_URL = "https://leetcode.com/graphql";
const fetchGraphQLData = async (query, variables) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(BASE_URL, {
      query,
      variables,
    }, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchGraphQLData;
