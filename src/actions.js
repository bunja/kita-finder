import axios from "./axios";

export async function receiveParentInfo() {
    const { data } = await axios.get("/api/parent");
    console.log("data from /api/parent", data);
    console.log("receiveParentInfo action is in action");
    return {
        type: "RECEIVE_PARENT_INFO",
        parent: data
    };
}

export async function receiveKitaInfo() {
    const { data } = await axios.get("/api/kita");
    console.log("data from /api/kita", data);
    console.log("receiveKitaInfo action is in action");
    return {
        type: "RECEIVE_KITA_INFO",
        kita: data
    };
}

export async function updateKitaInfo(data) {
    //console.log("data from /api/kita", data);
    console.log("updateKitaInfo action is in action", data);
    return {
        type: "UPDATE_KITA_INFO",
        kita: data
    };
}
