import requests
import serial
import json
import sys
ser = serial.Serial('/dev/ttyACM0', 115200, timeout=1)

url = 'http://172.20.10.4:3000/send-wattage'

# Checking if the request was successful (status code 200)
while True:
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').rstrip()
        data = {
            'device_name': 'podaljsek',
            'user': 'NullPointers',
            'room': 'Cooking HQ',
            'wattage': line
        }
        response = requests.post(url, json = data)
        if response.status_code == 200:
            print('Request successful!')
            # Printing the response from the server
            print('Response:', response.text)
        else:
            print('Request failed with status code:', response.status_code)
