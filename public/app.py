import os
from flask import Flask, render_template, make_response

# Setup
PROJECT_PATH = os.path.dirname(os.path.realpath(__file__)) + '/'
app = Flask(__name__)

# Routes
@app.route('/')
def page_index():
	return render_template('common/index.html')

# Initialize
app.run(debug=True, port=80)

