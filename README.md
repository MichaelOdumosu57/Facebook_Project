# AngularTemplateProject



It is currrently at   [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10
## Educational
* every other software stack on sevearl platforms the software is doing the same things
    * in web design this is not the case
    * the zChild and its framework was designed to make all browsers to the same thing

## Copyright 
```html
<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

Photo by Karolina Grabowska from Pexels
```

### Issues
* commit 7c744c14805e915a0b6316ded481d0313c0c1588
if it does not correct itself in production find out whats going on

### Notes

* you get this error, ignore, it will eventually correct itself
![](./images/eval_Error.PNG)

* in zProtoChildren.delta.options, when you modify the css.top you also need to modify the component.top because stack will try to do the calculation so now it must match up, add the component.top to to the delta you have to css.top to make it work

* to get lanague list
```ts
            http.get(
                "https://api.us-south.language-translator.watson.cloud.ibm.com/instances/ff50cf00-8514-4ad2-91b4-54368e6ccd6d/v3/languages?version=2018-05-01",

                {
                    headers:{
                        Authorization: env.facebook.IBM.authorization
                    }
                }
            )
            .subscribe({
                next:(result:any)=>{
                    console.log(result)
                },
                error:(result:any)=>{
                    console.log(result)
                }
            })
```

#### Heroku 
email :shieldmousetower734@gmail.com

|property|value|data|
|:------|:------:|------|
|project name|facebook-language-translator||
||||

* deploy subtree
 git subtree push --prefix AngularApp/backend/ibm_language/  heroku master


#### API 
* IBM cloud language translator API



### Left off
* Prime NG posts
card component
