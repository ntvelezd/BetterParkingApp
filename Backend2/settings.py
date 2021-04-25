from flask import Flask, request, Response,jsonify
from flask_sqlalchemy import SQLAlchemy

app= Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']= "mysql://db-user:12345@localhost/betterparking"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False

