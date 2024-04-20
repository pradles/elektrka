import requests

url = 'http://172.20.10.4:3000/get-room'

# Checking if the request was successful (status code 200)
response = requests.get(url)
if response.status_code == 200:
    print('Request successful!')
    # Printing the response from the server
    print('Response:', response.text)
else:
    print('Request failed with status code:', response.status_code)
