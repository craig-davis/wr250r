from fabric.api import *

env.project_name = 'wr250r'

def production():
	""" Use the actual webserver """
	
	env.settings = 'production'
	env.hosts = ['www.wr250r.com']
	env.user = 'ubuntu'
	env.path = '/home/ubuntu/sites/wr250r'
	env.virtualhost_path = env.path

def deploy():
	""" Deploy the code """
	
	require('settings', provided_by=[production])
	
	with cd('/home/ubuntu/sites/wr250r'):
		run('git pull')

