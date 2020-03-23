// Can you keep a secret?
// http://www.codewars.com/kata/can-you-keep-a-secret

function createSecretHolder(secret) {
    return {
        getSecret: function() {
            return _secret;
        },
        setSecret: function(v) {
            _secret = v
        }
    }
}