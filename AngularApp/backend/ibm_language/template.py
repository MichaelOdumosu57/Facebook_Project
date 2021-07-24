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
import jwt
from datetime import datetime,timedelta
from functools import wraps
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
        self.timedelta = timedelta
        self.time = time
        self.uuid = uuid
        self.authenticator = authenticator
        self.language_translator = language_translator
        self.random = random
        self.lorem  = lorem
        self.jwt = jwt
        self.wraps = wraps
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
        self.auth ={
            'secret_key':os.urandom(12)
        }
        self.my_login_dict = {
            "Python3":{
                "pass":"Abc",
                "avatar":"python.jpg"
            },

            "Angular":{
                "pass":"Def",
                "avatar":"angular.png"
            },

            "Ruby":  {
                "pass":"Ghi",
                "avatar":"ruby_programming.png"
            },

        }

        { self.my_login_dict[x].update({"login":False,"secret":os.urandom(12),"tries":3}) for x in self.my_login_dict}
        self.auth_enum = {
            "Error":"Log In Again",
            "Authorized":"Authorized",
            "Invalid":"Please try again"
        }
    def token_required(self,func):
        def inner(token,user):
            if not token:
                return 'Token is missing!'
            target_dict = self.my_login_dict.get(user)
            if( target_dict.get("tries") <= 0):
                return {
                    "status":401,
                    "message":self.auth_enum["Error"]
                }
            try:
                mySecret = self.my_login_dict.get(user).get("secret")
                payload = jwt.decode(token, key=mySecret, algorithms=["HS256"])
                print(payload)
                print("Authorized")
                func(token,user)
            except jwt.InvalidTokenError as e:
                print(e)
                print('Invalid')
                self.my_login_dict.get(user)["tries"] -=1
                if(self.my_login_dict.get(user)["tries"] <= 0):
                    return {
                        "status":401,
                        "message":self.auth_enum["Error"]
                    }
                return {
                    "status":403,
                    "message":self.auth_enum["Invalid"]
                }
            except BaseException as e:
                print(e)
                print('Error')
                return {
                    "status":401,
                    "message":self.auth_enum["Error"]
                }
            return func(token,user)
        return inner




    def execute(self, data):

        #setup
        jwt = self.jwt
        timedelta = self.timedelta
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
        token = data.get("token")
        my_login_dict = self.my_login_dict
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
                self.token_required(data)
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


        elif( env == "refresh_page"):
            try:
                refresh_user= data.get("refresh_user")
                refresh_token= data.get("refresh_token")
                @self.token_required
                def refresh_page(token,user):
                    target_dict = my_login_dict.get(user)
                    target_dict["login"] = True
                    target_dict["tries"] = 3
                    access_token= jwt.encode(
                        payload={
                            "expiration":str(datetime.utcnow() + timedelta(seconds=120)),
                        },
                        key=target_dict.get("secret"),
                        algorithm="HS256"
                    )
                    return {
                        'status':200,
                        'message':json.dumps(
                            {
                                'message':'allow user to proceed',
                                'user':user,
                                'avatar':target_dict.get("avatar"),
                                'token':access_token
                            }
                        ),
                    }
                return refresh_page(refresh_token,refresh_user)
            except BaseException as e:
                print('my custom error\n')
                print(e.__class__.__name__)
                print('\n')
                print(e)
                return {
                    'status':500,
                    'message': 'an error occured check the output from the backend'

                }

        elif(env == "logout"):
            try:

                target_dict = my_login_dict.get(username)
                target_dict["login"] = False
                target_dict["tries"] = 3
                target_dict["secret"] = os.urandom(12)
                return {
                    'status':200,
                    "refresh_token":"",
                    'message':json.dumps(
                        {
                            'message':'Logout sucessfully',
                        }
                    ),
                }

                # return  {
                #         'status':404,
                #         'message':'Logout Failed'
                #     }

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

                target_dict = my_login_dict.get(username)
                if(target_dict.get("pass") == password):
                    target_dict["login"] = True
                    target_dict["tries"] = 3
                    access_token= jwt.encode(
                        payload={
                            "expiration":str(datetime.utcnow() + timedelta(seconds=120)),
                        },
                        key=target_dict.get("secret"),
                        algorithm="HS256"
                    )
                    refresh_token= jwt.encode(
                        payload={
                            "expiration":str(datetime.utcnow() + timedelta(minutes=120))
                        },
                        key=target_dict.get("secret"),
                        algorithm="HS256"
                    )
                    return {
                        'status':200,
                        'refresh_token':refresh_token,
                        'refresh_user':username,
                        'message':json.dumps(
                            {
                                'message':'allow user to proceed',
                                'avatar':target_dict.get("avatar"),
                                'token':access_token
                            }
                        ),
                    }

                return  {
                        'status':401,
                        'message':'Login Failed'
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
                @self.token_required
                def somePosts(token,user):
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
                return somePosts(token=token,user=username)


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

        elif(env =="resetTracks"):
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
                @self.token_required
                def someListings(token,user):
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
                return someListings(token=token,user=username)

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










