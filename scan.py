import httpx

with open("px.txt", 'w') as file:

 file.write(httpx.get("https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all").text)
