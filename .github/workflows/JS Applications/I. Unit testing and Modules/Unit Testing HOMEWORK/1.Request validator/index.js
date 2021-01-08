function requestValidator(request) {
    const template = {
        method: ["GET", "POST", "DELETE", "CONNECT"],
        uri: /^([A-Za-z0-9.])$|\*/g,
        version: ["HTTP/0.9", "HTTP/1.0", "HTTP/01.1", "HTTP/2.0"],
        message: /(^[^<>\\&'"]+)$/
    }



    if (!template.method.includes(request.method) || !request.hasOwnProperty(method)) {
        throw new Error('Invalid request header: Invalid Method!')
    }
    if (!request.uri.match(template.uri) || !request.hasOwnProperty(uri)) {
        throw new Error('Invalid request header: Invalid uri')
    }
    if (!template.version.includes(request.version) || !request.hasOwnProperty(version)) {
        throw new Error('Invalid request header: Invalid version')
    }
    if (!template.message.includes(request.message) || !request.hasOwnProperty(message)) {
        throw new Error('Invalid request header: Invalid type message')
    }

}
requestValidator({
    method: "GET",
    uri: '*',
    version: 'HTTP/8.1',
    message: ''
})