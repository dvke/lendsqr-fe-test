// data.ts

import { UserData } from "@/types/types";
import axios from "axios";

const apiUrl = "https://api.mockaroo.com/api/59fa7300?count=500&key=5be01090";

export async function fetchUserData(): Promise<UserData[]> {
  try {
    const response = await axios.get(apiUrl);
    return response.data; // Assuming data is in the response.data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
}

export default fetchUserData; // Optional default export
