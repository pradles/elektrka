# WattsOut
Welcome to WattsOut, your centralized platform for managing all your electric devices! Whether you have smart devices or traditional ones, WattsOut has got you covered. This repository contains the code for our web page, hardware solution, and mobile app.

## Hardware solution
In today's interconnected world, many people have embraced smart devices to enhance their lives, offering convenience and control at their fingertips. However, there are still countless traditional electric devices that lack smart capabilities. Recognizing this gap, our WattsOut project introduces a hardware solution tailored for these conventional devices, ensuring that everyone can benefit from centralized energy management.

### How It Works
Our innovative hardware solution utilizes a combination of sensors, microcontrollers, and servers to transform your traditional devices into smart, manageable assets. Here's a step-by-step breakdown of how it works:

**Sensor and Ampere Meter:** A sensor is connected to an ampere meter, allowing us to measure the electrical current drawn by your device accurately.

**Arduino Microcontroller:** The sensor sends an analog signal to an Arduino microcontroller. The Arduino reads this signal and prepares it for further processing.

**Signal Transformation:** The analog signal is transformed into power consumption data, providing insights into how much power your device is using.
** Raspberry Pi: ** The power consumption data is then sent to a Raspberry Pi, acting as the central hub for data collection and processing.

**Node.js Server:** A Node.js server manages the data flow, storing the power consumption data in an SQLite database for easy retrieval and analysis.

**Vue.js Frontend:** The stored data is utilized by our Vue.js frontend, providing a user-friendly interface where you can monitor and manage your devices' power usage.


## User frendly interface

