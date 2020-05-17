

"""
CoDeR= Furkan Ceran
"""
#-------iMPORTLAR---------------------------------------------------------------------------------------------------
import time
import os
import random
from os import environ
import sys
import urllib
from flask import Flask, redirect, render_template, request, url_for,flash
from flask_socketio import SocketIO, emit
import json
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
import requests		
from random import randint

async_mode = None
socketio = SocketIO(app, async_mode=async_mode)
thread = None



##################################################################################################################
#--------------------DECODE--------------------------------------------------------------------------------------#
##################################################################################################################

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/navi", methods=['GET', 'POST'])
def navigation():
    return render_template("navigation.html")
@app.route("/message", methods=['GET', 'POST'])	
def message():
    return render_template("chat.html")
@app.route("/about")
def about():
        return render_template("about.html")
@app.route("/exit", methods=['GET', 'POST'])
def exit():
        return render_template("index.html")
@app.route("/advise")
def advise():
        return render_template("suggestions.html")
@app.route("/sifremiunuttum", methods=['GET', 'POST'])
def sifremiunuttum():
    return render_template("sifremiunuttum.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
@app.errorhandler(500)
def server_error(e):
	return render_template('404.html'), 500






if __name__ == '__main__':
    HOST = environ.get('0.0.0.0', 'localhost')
    try:
        PORT = int(environ.get('80', '5000'))
    except ValueError:
        PORT = 80
    #Sinif().sinif()
#    app.run(HOST, PORT)
    socketio.run(app, debug=True)


##################################################################################################################
