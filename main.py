#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html')

@app.route("/approach")
def approach():
    return render_template('approach.html')

@app.route("/products")
def products():
    return render_template('products.html')

@app.route("/pistachio")
def pistachio():
    return render_template('pistachio.html')

@app.route("/download")
def download():
    return render_template('download.html')

@app.route("/almond_download")
def almond_download():
    return render_template('almond_download.html')

@app.route("/pistachio_download")
def pistachio_download():
    return render_template('pistachio_download.html')

@app.route("/community")
def community():
    return render_template('community.html')

@app.route("/shop")
def shop():
    return render_template('shop.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True, threaded=True)
