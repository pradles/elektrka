import requests

url = 'http://localhost:3000/test'

# Sending a GET request to the server
response = requests.get(url)

# Checking if the request was successful (status code 200)
if response.status_code == 200:
    print('Request successful!')
    # Printing the response from the server
    print('Response:', response.text)
else:
    print('Request failed with status code:', response.status_code)