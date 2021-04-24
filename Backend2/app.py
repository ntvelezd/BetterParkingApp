from flask import Flask
from flask_mysqldb import MySQL
import json
app= Flask(__name__)
app.config["MYSQL_HOST"]= "localhost"
app.config["MYSQL_USER"]= "root" 
app.config["MYSQL_PASSWORD"]= "yjW1aht/"
app.config["MYSQL_DB"]= "centro_comercial"
mysql= MySQL(app)


@app.route('/')
def Index():
    cur= mysql.connection.cursor()
    cur.execute('SELECT * FROM empleado')
    row_headers=[x[0] for x in cur.description]
    data = cur.fetchall()
    print(data)
    json_data=[]
    for result in data:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)
        

if __name__ == '__main__':
    app.run(port=3000, debug= True)
