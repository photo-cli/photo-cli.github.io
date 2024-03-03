---
sidebar_position: 6
---

# 6. Caching Reverse Geocode Responses

Since the responses in close coordinate's requests in pretty close results, we implemented a caching mechanism for optimization. This is done by rounding the fractional digits of coordinates from the end. We are currently only use 4 fraction digits.

For example the original coordinate for 39.92501234567890, 32.83471234567890 will interpreted as 39.9250, 32.8347 internally before sending the request.

If you need more precise results in your reverse geocode responses, you can increase this value on [settings](/docs/settings) with a key of `CoordinatePrecision`.