var init = function (address, onmessage, onreconnect) {
      var connect = function () {
        var socket = new WebSocket(address)
          , reconnect = function () {
              if (onreconnect)
                onreconnect()

              socket.removeEventListener('message', onmessage)
              socket.removeEventListener('error', reconnect)
              socket.removeEventListener('close', reconnect)

              setTimeout(connect, 300)
            }

        socket.addEventListener('error', reconnect)
        socket.addEventListener('close', reconnect)
        socket.addEventListener('message', onmessage)
      }

      connect()
    }

module.exports = init