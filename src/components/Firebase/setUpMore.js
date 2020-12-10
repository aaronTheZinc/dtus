
 checkStatusAndGetJSON = (fetchResponse) => {
    return fetchResponse.ok
        ? fetchResponse.json()
        : fetchResponse.json().then(promiseReject)
}
    get = (method) => (path) => fetch(path, {
        // mode: 'no-cors',
        headers: {
            Accept: "application/json"
        },
        method
    }).then(checkStatusAndGetJSON).catch(error => undefined)
exports.createMore = (uid, email) => {

    get = this.get("GET")
  get(`https://us-central1-downtown-97d7d.cloudfunctions.net/sellerExtraSetUp?uid=${uid}&email=${email}`)
    

}