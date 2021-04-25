from settings import *
import json

db= SQLAlchemy(app)

class User(db.Model):
    __tablename__= 'usuarios'
    User_ID= db.Column(db.String(45),primary_key=True)
    Name=db.Column(db.String(45), nullable=False)
    LastName=db.Column(db.String(45), nullable=False)
    Email=db.Column(db.String(50), nullable=False)

    def json (self):
        return {"User_ID": self.User_ID , "Name": self.Name, "LastName": self.LastName, "Email": self.Email}

    def add_user(_User_ID, _Name, _LastName, _Email):
        new_user= User(User_ID=_User_ID, Name= _Name, LastName=_LastName, Email= _Email)
        db.session.add(new_user)
        db.session.commit()
    
    def get_all_users():
        return [User.json(u) for u in User.query.all()]
    
    def update_user(_User_ID, _Name, _LastName, _Email):
        user_to_update= User.query.filter_by(User_ID=_User_ID).first()
        user_to_update.Name= _Name
        user_to_update.LastName= _LastName
        user_to_update.Email=_Email
        db.session.commit()
    
    def delete_user(_User_ID):
        User.query.filter_by(User_ID=_User_ID).delete()
        db.session.commit()
    


