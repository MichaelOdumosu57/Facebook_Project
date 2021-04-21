import sys
sys.path[0] += "\\site-packages"
import json
from ibm_watson import LanguageTranslatorV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
import os
import uuid
import datetime
import time
import pprint
import asyncio
import json
import datetime
# import pytz
import time
pp = pprint.PrettyPrinter(indent=4, compact=True, width=1)
import random

# end


# authenticate the backend
authenticator = IAMAuthenticator(os.environ["IBM_APIKEY"])
language_translator = LanguageTranslatorV3(
    version='2018-05-01',
    authenticator=authenticator
)
language_translator.set_service_url(os.environ["IBM_ENDPOINT"])
#

class my_ibm_language_client():

    def __init__(self):
        self.datetime = datetime
        self.time = time
        self.uuid = uuid
        self.authenticator = authenticator
        self.language_translator = language_translator
        self.random = random


    def execute(self, data):

        #setup

        datetime = self.datetime
        time = self.time
        uuid = self.uuid
        random = self.random
        authenticator = self.authenticator
        language_translator = self.language_translator
        name = data.get("titleName") if data.get("titleName")  else "My_Source_Model"
        source = data.get("source")
        target = data.get("target")
        text = data.get("text")
        env = data.get("env")
        #


        # translate
        if( env == "translate"):
            try:
                translation = language_translator.translate(
                    text=text,
                    source= source,
                    target=target).get_result()
                return {
                        "status":200,
                        "message":json.dumps(translation, indent=2, ensure_ascii=False)
                }

            except BaseException as e:
                print('my custom error\n')
                print(e.__class__.__name__)
                print('\n')
                print(e)
                return {
                    "status" :500,
                    "message":'an error occured check the output from the backend'
                }
        #
        elif( env == "dummy"):
            try:
                message = json.dumps({
                        "translations": [
                            {
                                "translation": random.choice([
                                            "Mi mano",
                                            "Alamante",
                                            "Busco por un tavola",
                                            "Mostra ma",
                                            "Escucha ma por favor",
                                            "Incio un Session"
                                        ])
                            }
                        ],
                        'word_count': 2,
                        'character_count': 7
                    })


                return {
                        "status":200,
                        "message":message
                }
            except BaseException as e:
                print('my custom error\n')
                print(e.__class__.__name__)
                print('\n')
                print(e)
                return {
                    'status':500,
                    'message': 'an error occured check the output from the backend'
                }
        elif( env =="list"):
            try:
                languages = language_translator.list_languages().get_result()
                return {
                    "status":200,
                    "message":json.dumps(languages, indent=2)
                }
            except BaseException as e:
                print('my custom error\n')
                print(e.__class__.__name__)
                print('\n')
                print(e)
                return {
                    'status':500,
                    'message': 'an error occured check the output from the backend'
            }

        return {
            "status" :500,
            "message": "Check the backend env dictionary you did set it so the backend didnt do anything"
        }









