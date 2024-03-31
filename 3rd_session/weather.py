import requests
import json

city = "London"
apikey = "ce2f10f3f144a018e7b47478f289b2ae"
lang="kr"
api = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}&lang={lang}&units=metric"

result = requests.get(api)

data = json.loads(result.text)

#print(type(result.text))
#print(type(data))

print("🌞 ⛅ 🌦️  🌧️  🌨️  ⛈️  🌪️  🌝 \n[오늘의 날씨]")
print(data["name"], "의 날씨입니다.")
print("오늘의 날씨는", data["weather"][0]["description"], "입니다.")
print("----------------------------")
print("[기본 정보💫]")
print("현재온도:", data["main"]["temp"])
print("체감 온도:", data["main"]["feels_like"])
print("최저 기온:", data["main"]["temp_min"])
print("최고 기온:", data["main"]["temp_max"])
print("기압:", data["main"]["pressure"])
print("습도:", data["main"]["humidity"])
print("----------------------------")
print("[바람🌬️ ]")
print("풍속:", data["wind"]["speed"])
print("풍향:", data["wind"]["deg"])
print("----------------------------")
print("[해☀️ ]")
print("일출:", data["sys"]["sunrise"])
print("일몰:", data["sys"]["sunset"])
print("------------------------------------------")
print("현재 유닉스 시간", data["dt"], "의 날씨 정보입니다." )
print("------------------------------------------")

