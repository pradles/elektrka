import requests

url = 'http://172.20.10.4:3000/get-user-info/'

# Checking if the request was successful (status code 200)
def fetch_room_info(user_name):
    try:
        # Send GET request to the server
        response = requests.get(url + user_name)
        # Check if request was successful (status code 200)
        if response.status_code == 200:
            # Parse JSON response
            user_info = response.json()
            # Print room info
            print("User:", user_info['user'])
            print("Devices and total wattage:")
            for device in user_info['devices']:
                print("  Device:", device['device_name'])
                print("  Total Wattage:", device['average_wattage'])
            print("Wattage with timestamps:")
            for wattage in user_info['wattageWithTimestamp']:
                print("  Wattage:", wattage['wattage'], "Timestamp:", wattage['timestamp'])
        else:
            print("Request failed with status code:", response.status_code)
    except Exception as e:
        print("Error fetching user info:", e)

# Call the fetch_room_info function with the room name
fetch_room_info("NullPointers")