from flask import Flask, request, jsonify
from api import *

app = Flask(__name__)

API_KEY = "0d4cd773fd0b459b857d71068f5e7a09"
API_SECRET = "24c8fe9bbdca40eab0dc293d4cdc91af"
fs = Fatsecret(API_KEY, API_SECRET)


@app.route('/get_calories',methods=['POST'])
def get_calories_endpoint():
    data = request.get_json()
    food_name = data['food']
    data=fs.foods_search(food_name)
    food_name=data[0]["food_name"]
    food_details=data[0]["food_description"]
    data=food_details.split(" | ")
    per=data[0].split("Per ")[1].split("g")[0]
    calories=data[0].split("Calories: ")[1].split("kcal")[0]
    fat=data[1].split("Fat: ")[1].split("g")[0]
    carbs=data[2].split("Carbs: ")[1].split("g")[0]
    protein=data[3].split("Protein: ")[1].split("g")[0]
    return jsonify({"food name":food_name,"Per":per,"calories":calories,"fat":fat,"carbs":carbs,"protein":protein})

if __name__ == '__main__':
    app.run(debug=True)