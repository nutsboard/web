#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html')

@app.route("/products")
def products():
    return render_template('products.html')

@app.route("/download")
def download():
    return render_template('download.html')

@app.route("/overview")
def overview():
    return render_template('overview.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True, threaded=True)
