#!/usr/bin/env python3
import serial
import json
import sys
ser = serial.Serial('/dev/ttyACM0', 115200, timeout=1)

while True:
    if ser.in_waiting > 0:
        line = ser.readline().decode('utf-8').rstrip()
        print(line)
        # try:
        #     jsonObj = json.loads(line)
        #     pot = jsonObj.get('value')
        #     print("value: ", pot)
        #     ser.reset_input_buffer()
        # except:
        #     print("Ne dela")