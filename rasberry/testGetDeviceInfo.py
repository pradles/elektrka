import requests

url = 'http://172.20.10.4:3000/get-device-info/'

# Function to fetch device info
def fetch_device_info(device_name):
    try:
        # Send GET request to the server
        response = requests.get(url + device_name)
        # Check if request was successful (status code 200)
        if response.status_code == 200:
            # Parse JSON response
            device_info = response.json()
            # Print device info
            print("Device:", device_info['device_name'])
            print("Data:")
            for data in device_info['data']:
                print("  User:", data['user'])
                print("  Room:", data['room'])
                print("  Average Wattage:", data['average_wattage'])
            print("Wattage with timestamps:")
            for wattage in device_info['wattageWithTimestamp']:
                print("  Wattage:", wattage['wattage'], "Timestamp:", wattage['timestamp'])
        else:
            print("Request failed with status code:", response.status_code)
    except Exception as e:
        print("Error fetching device info:", e)

# Call the fetch_device_info function with the device name
fetch_device_info("podaljsek")