import axios from "./axios";

export async function receiveParentInfo() {
    const { data } = await axios.get("/api/parent");
    console.log("data from /api/parent", data);
    console.log("hoho action is in action");
    return {
        type: "RECEIVE_PARENT_INFO",
        parent: data
    };
}
