import sys
sys.path.append(sys.path[0] + "\\site-packages")
import pprint
import asyncio
from urllib.parse import urlparse, unquote
from watchdog.events import LoggingEventHandler
from watchdog.observers import Observer
import threading
import logging
import json
import tornado.web
import tornado.ioloop
import template
from template import my_ibm_language_client
import time
import datetime
import os
import multiprocessing
import importlib
from importlib import reload,util
pp = pprint.PrettyPrinter(indent=4, compact=True, width=1)




#  find the tables module for hot reload
class ModuleFinder(importlib.machinery.PathFinder):
    def __init__(self):
        self.path_map = {"template":template.__spec__.loader}

    def find_spec(self, fullname, path, target=None):

        if not fullname in self.path_map:
            return None
        return importlib.util.spec_from_loader(fullname, self.path_map[fullname])


    def find_module(self, fullname, path):
        return None # No need to implement, backward compatibility only
sys.meta_path.append(ModuleFinder())
#

# route handler
def createHandler(client):
    class MainHandler(tornado.web.RequestHandler):

        def set_default_headers(self):
            self.set_header("Access-Control-Allow-Origin", "*")
            self.set_header("Access-Control-Allow-Headers", "*")
            self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

        def post(self):
            data = ""
            if self.request.headers['Content-Type'] == 'application/json':
                data = tornado.escape.json_decode(self.request.body)
                # print(data.get("tableName"))
            self.set_header("Content-Type", "text/plain")
            result = client.execute(data)
            self.set_status(result["status"])
            self.write(result["message"])
            self.finish()

        def options(self):
            self.set_status(204)
            self.finish()

    return MainHandler
#

# configuring web server
PORT = os.environ["PORT"] if os.environ["PORT"] else 3005
# 3005
server = ""
ioloop = tornado.ioloop.IOLoop.current()
restart_server = False
my_client = my_ibm_language_client()







if __name__ == "__main__":
    # for heroku only
    application = tornado.web.Application([
        (r"/", createHandler(my_client)),
    ])
    print("server listening on {}".format(PORT))
    server = application.listen(PORT)
    tornado.ioloop.IOLoop.instance().start()
    #







