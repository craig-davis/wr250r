from fabric.api import *

env.project_name = 'wr250r'

def production():
	""" Use the actual webserver """
	
	env.settings = 'production'
	env.hosts = ['wr250r.com']
	env.user = 'ubuntu'

def deploy():
	""" Deploy the code """
	
	require('settings', provided_by=[production])
	
	with cd('/home/ubuntu/sites/wr250r'):
		run('git pull')

