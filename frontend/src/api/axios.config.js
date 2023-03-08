import axios from "axios";

const backendAPI = "http://localhost:4000/api";

const client = axios.create({
	baseURL: `${backendAPI}`,
	headers: {
		"Content-type": "application/json",
	},
	
});

export default client;