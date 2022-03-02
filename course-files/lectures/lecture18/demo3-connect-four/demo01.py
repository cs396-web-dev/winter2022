# To test: python3 -m websockets ws://localhost:8081/
import asyncio
import websockets

async def handler(websocket):
    # aloop that echos all the messages that are received:
    async for message in websocket:
        await websocket.send('You just said: "{0}"'.format(message))


async def main():
    async with websockets.serve(handler, "", 8081):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    print('Starting web socket server...')
    asyncio.run(main())