export const upload = uploader => ({type: "UPLOAD", uploader});

export const list = uploader => ({type: "LIST", uploader});

export const play = uploader => ({type: "PLAY", uploader});

export const wait = () => ({type: "WAIT"});
