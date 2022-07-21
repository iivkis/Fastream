const ICE_SERVERS_URLS = [
    "stun:stun.l.google.com:19302",
    "stun:stun1.l.google.com:19302",
    "stun:stun2.l.google.com:19302",
    "stun:stun3.l.google.com:19302",
    "stun:stun4.l.google.com:19302",
];

export interface WebSocketMessageData {
    broadcastID: string;
    type: RTCSdpType;
    sdp: string;
}

export interface WebSocketMessage {
    data?: WebSocketMessageData;
    error?: string;
}

export {ICE_SERVERS_URLS};
