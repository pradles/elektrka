# WattsOut
Welcome to WattsOut, your centralized platform for managing all your electric devices! Whether you have smart devices or traditional ones, WattsOut has got you covered. This repository contains the code for our web page, hardware solution, and mobile app.

## The Need for WattsOut
In today's diverse living environments, the way we consume energy varies greatly. Many people share living spaces with roommates or family members, each with their own energy usage habits and preferences. This diversity in energy consumption can often lead to challenges when it comes to splitting utility bills fairly or managing household expenses effectively.

Additionally, managing energy consumption can be a complex task that requires time, effort, and expertise. For households with multiple members, ensuring that everyone is on the same page and adhering to energy-saving practices can be challenging.

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


## Centralized Device Management - Web app
Our web app serves as a centralized platform where all your connected devices are displayed. Whether you have smart devices or traditional ones managed through our hardware solution, you can view and manage them all in one place.

### Customizable Alerts and Estimates
**Device Parameters:** You can set specific parameters for each device to receive accurate alerts. Whether it's power usage thresholds or usage patterns, customize the settings to fit your needs.

**Estimated Usage:** The web app provides estimates of each device's power consumption based on historical data and current settings, helping you plan and manage your energy usage more effectively.

### Detailed Statistics and Insights
**Statistics:** Gain insights into your energy consumption with detailed statistics. Track usage trends over time, compare devices, and identify opportunities for optimization.

**Sorting by Rooms or People:** Organize your devices efficiently by sorting them into rooms or associating them with specific individuals. This feature allows for easier management and a clearer overview of your energy usage.

## Future Plans and Potential Features
**Energy Usage History:** We plan to implement a feature that allows users to view historical energy usage data over extended periods. This will provide a deeper understanding of energy consumption patterns and trends.

**Energy Saving Tips:** We aim to incorporate energy-saving tips and recommendations based on your usage patterns and device settings, helping you reduce energy consumption and save money.

**Location alerts:** With tracking user locations we could implement smart device shout downs.

**Smart power outlet:** Our hardware solution could be transformet into smart power outlet.
