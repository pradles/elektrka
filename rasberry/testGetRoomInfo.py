import requests

url = 'http://172.20.10.4:3000/get-room-info/'

# Checking if the request was successful (status code 200)
def fetch_room_info(room_name):
    try:
        # Send GET request to the server
        response = requests.get(url + room_name)
        # Check if request was successful (status code 200)
        if response.status_code == 200:
            # Parse JSON response
            room_info = response.json()
            # Print room info
            print("Room:", room_info['room'])
            print("Devices and total wattage:")
            for device in room_info['devices']:
                print("  Device:", device['device_name'])
                print("  Total Wattage:", device['total_wattage'])
            print("Wattage with timestamps:")
            for wattage in room_info['wattageWithTimestamp']:
                print("  Wattage:", wattage['wattage'], "Timestamp:", wattage['timestamp'])
        else:
            print("Request failed with status code:", response.status_code)
    except Exception as e:
        print("Error fetching room info:", e)

# Call the fetch_room_info function with the room name
fetch_room_info("Cooking HQ")