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

export async function receiveOtherKitaInfo(id) {
    const { data } = await axios.get("/api/kita" + id);
    console.log("data from /api/kita", data);
    console.log("receiveKitaInfo action is in action");
    return {
        type: "RECEIVE_OTHER_KITA_INFO",
        otherkita: data
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

export async function receiveApplication(id) {
    const { data } = await axios.get("/api/application/" + id);
    console.log("data from /api/application", data);
    return {
        type: "RECEIVE_APPLICATION",
        application: data.data,
        kita: data.contact
    };
}

export async function updateApplication(data) {
    //const { data } = await axios.get("/api/update/application");
    console.log("A*C*T*O*N data from /api/update/application", data);
    return {
        type: "UPDATE_APPLICATION",
        application: data
    };
}
