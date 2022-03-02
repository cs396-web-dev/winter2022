# To test: python3 -m websockets ws://localhost:8081/
import asyncio
import websockets

PORT = 8081
async def echo(websocket):
    print('A client just connected.')
    try:
        # asynchronous loop
        async for message in websocket:
            print('received message from client:', message)
            await websocket.send('Pong: ' + message)

    except websockets.ConnectionClosed as e:
        print('A client just disconnected')
        print(e)

async def echo(websocket):
    print('A client just connected.')
    # asynchronous loop
    async for message in websocket:
        print('received message from client:', message)
        await websocket.send('Pong: ' + message)


async def main():
    async with websockets.serve(echo, "", PORT):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    print('Starting web socket server...')
    asyncio.run(main())