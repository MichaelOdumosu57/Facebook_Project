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
import lorem

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
        self.lorem  = lorem
        self.posts ={
            "items":[
                {
                    "header":random.choice(["Python3","Angular","Ruby"]),
                    "cardText":lorem.sentence(),
                    "media":"home/{}".format(random.choice([
                        "pexels-karolina-grabowska-4033325.jpg",
                        "pexels-public-domain-pictures-87818.jpg",
                        "pexels-skitterphoto-615350.jpg"
                    ]))
                } for i in list(range(100))
            ],
            "track":0
        }
        self.listings = {
            "items":[
                {
                    "header":"${}".format(random.choice(range(200))),
                    "subheader":lorem.sentence(),
                    "media":"market/{}".format(random.choice([
                        "pexels-anastasia-zhenina-4040365.jpg"
                        ,"pexels-burak-k-704555.jpg"
                        ,"pexels-cottonbro-4551309.jpg"
                        ,"pexels-cottonbro-4551310.jpg"
                        ,"pexels-céline-7115127.jpg"
                        ,"pexels-john-petalcurin-4317157.jpg"
                        ,"pexels-karen-laårk-boshoff-6679462.jpg"
                        ,"pexels-kindel-media-7667728.jpg"
                        ,"pexels-maria-tyutina-246327.jpg"
                        ,"pexels-ovan-62689.jpg"
                        ,"pexels-tatiana-syrikova-3932930.jpg"
                    ]))
                } for i in list(range(20000))
            ],
            "track":0
        }


    def execute(self, data):

        #setup

        datetime = self.datetime
        time = self.time
        uuid = self.uuid
        random = self.random
        authenticator = self.authenticator
        language_translator = self.language_translator
        lorem = self.lorem
        posts = self.posts
        listings = self.listings
        name = data.get("titleName") if data.get("titleName")  else "My_Source_Model"
        source = data.get("source")
        target = data.get("target")
        text = data.get("text")
        env = data.get("env")
        username = data.get("user")
        password = data.get("pass")
        times = data.get("times")
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

        elif(env == "login"):
            try:
                login_dict = {
                    "Python3":"Abc",
                    "Angular":"Def",
                    "Ruby":"Ghi"
                }

                avatar_dict = {
                    "Python3":"python.jpg",
                    "Angular":"angular.png",
                    "Ruby":"ruby_programming.png"
                }

                if(login_dict.get(username) == password):
                    return {
                        'status':200,
                        'message':json.dumps(
                            {
                                'message':'allow user to proceed',
                                'avatar':avatar_dict.get(username)
                            }
                        ),

                    }

                return  {
                        'status':401,
                        'message':json.dumps({
                            'message':'There has been an issue please try again'
                        })
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

        elif(env =="somePosts"):
            try:
                current = posts.get("track")
                span = current+times
                result = posts.get("items")[current:span]
                posts["track"] = span
                print(posts["track"]
                )
                return {
                    "status":200,
                    "message":json.dumps(result)
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

        elif(env =="allPosts"):
            try:
                return {
                    "status":200,
                    "message":json.dumps(posts.get("items"))
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

        elif(env =="resetPostsTrack"):
            try:
                posts["track"] = 0
                listings["track"] = 0
                return {
                    "status":200,
                    "message":"OK"
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

        elif(env =="someListings"):
            try:
                current = listings.get("track")
                span = current+times
                result = listings.get("items")[current:span]
                listings["track"] = span
                print(listings["track"]
                )
                return {
                    "status":200,
                    "message":json.dumps(result)
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










