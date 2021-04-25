# ##from flask import Flask
# from flask_mysqldb import MySQL
# import json
# app= Flask(__name__)
# app.config["MYSQL_HOST"]= "localhost"
# app.config["MYSQL_USER"]= "root" 
# app.config["MYSQL_PASSWORD"]= "yjW1aht/"
# app.config["MYSQL_DB"]= "betterparking"
# mysql= MySQL(app) 

from users import *


# @app.route('/')
# def Index():
#     cur= mysql.connection.cursor()
#     cur.execute('SELECT * FROM usuarios')
#     row_headers=[x[0] for x in cur.description]
#     data = cur.fetchall()
#     print(data)
#     json_data=[]
#     for result in data:
#         json_data.append(dict(zip(row_headers,result)))
#     return json.dumps(json_data)

@app.route('/')
def index():
    pass

@app.route('/users',methods=["GET"])
def get_user():
    return jsonify ({ "Users": User.get_all_users()})

@app.route('/users', methods=['POST'])
def add_users():
    request_data = request.get_json() 
    User.add_user(request_data["User_ID"], request_data["Name"],request_data["LastName"], request_data["Email"])
    response = Response("User added", 201, mimetype='application/json')
    return response


if __name__ == '__main__':
    app.run(port=3000, debug= True)
