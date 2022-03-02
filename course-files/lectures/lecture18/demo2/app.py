# To test: python3 -m websockets ws://localhost:8081/
import asyncio
import websockets
import json


connected = set()

async def echo(websocket, path):
    connected.add(websocket)
    print('A client just connected:')
    for sock in connected:
        if sock != websocket:
            await sock.send('Broadcast: A client just connected')
    try:
        async for message in websocket:
            print('received message from client:', message)
            await websocket.send('Pong: ' + message)
            for sock in connected:
                if sock != websocket:
                    await sock.send('Broadcast: ' + message)
    except websockets.ConnectionClosed as e:
        print('A client just disconnected')
        for sock in connected:
            if sock != websocket:
                await sock.send('Broadcast: A client just disconnected')
        print(e)
    finally:
        connected.remove(websocket)

# start_server = websockets.serve(echo, "localhost", 8081)
# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()
async def main():
    websockets.serve(echo, "", 8081)
    async with websockets.serve(echo, "", 8081):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    print('Starting web socket server...')
    asyncio.run(main())