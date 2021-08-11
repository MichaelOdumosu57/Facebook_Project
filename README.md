# Summary
This webpage is a mock facebook project. It takes a few pages on facebook and upgrades the existing UI, allowing the developer to practice concepts such as authention, content UI management and component libraries such as PrimeNG. Big stylistic update while keeping the overall appearance of facebook

## Features include 

Only members of the project can read the README.md from the ignore folder

# Stack 

## Frontend
* Angular v11.2.13
## Backend
* IBM cloud 5.1.0 
* Python v3.9.6
* tornado v6.1
* watchdog v2.1

## Testing
* Docker, (tes in docker containers from linux VM) v20.10.7

### Unit
* rspec    v3.10.0
* capybara v3.35.3

### Integration
* rspec    v3.10.0
* capybara v3.35.3

### E2E
* rspec    v3.10.0
* capybara v3.35.3
* puffing billy v2.4.1

## Hosting
* GH Pages

### CMS

## CI/CD
* CircleCI
* Docker v20.10.7
* Virtual Box v 6.1.22
* Ubuntu VM 20.04.1


# Structure

## Linting Rules
* for each commit, we append "WORKING COMMIT" so we know the commit is free of bugs
* ruby indentation 2 lines
* ts indentation 4 lines
* we prefix all our styles with "a_p_p_" a judima methodlogy so as not to confunse with 3rd party libs


## Project Directory Mapping

### Frotend
#### Configurations
* in __AngularApp/src/app/directive/facebook-login.directive.ts__- there we handle the auth login for the app
* in __AngularApp/src/app/directive/language-translator.directive.ts__ - handles the translantion service implemented by clicking on the language buttons in the login page, for limited resources, we translate only the login page and parts of the home page
* in __AngularApp/src/app/directive/vanilla-tilt.directive.ts__ - handles that tilting features of buttons and panels throughout the app

### Backend
* backend logic is found in __AngularApp/backend/ibm_language/template.py__

#### Configurations
* refer to README.md in ignore


### Testing 
* in __AngularApp/testing/TESTS.md__ we have  where we write pseudo code for our unit,e2e and integration tests later
*    __AngularApp/testing/e2e/app-e2e-circleci.rb__ - is where all of our e2e tests live, we test on docker in a ubuntu 20.04 to closely represent the circleCI env and write the code 
* in the local testing env we use a gui browser, to oberserve to  make sure the tests work properly, however in circleci we have the browsers run in headless mode. 

### CI/CD
* IN .circle is our config.yml, we make use of the company's Docker image as well as the circleci browser-build tools orb, as a general practice we packages our dependencies into the orb so we dont have to increased build times


### Issues
* say we have issues and we are looking for support with a library language or other 3rd party found here __AngularApp/misc/issues__

### Future Plans
refer to README.md in ignore


## Site Navigation

* to navigate through the website, end user clicks on the links in the dropdown , the camera will move to different planets showingthe different pages of the website.

### Home Page 
* the menu appears as well as the solar system background of the website , nothing fancy here



# Aspects

## Challenges
* lazyloading when it need to takes the new DOM elements and format them 

## Mistakes/Failures

## Enjoyed
* Recreating and website and adding my own twist to the situation

## Leadership


## Conflict
* make sure the headers were implemented correctly

## Done Different


# Issues 
* commit 7c744c14805e915a0b6316ded481d0313c0c1588
if it does not correct itself in production find out whats going on


# Notes
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



# TODO

## Template Updates


# Resources

## Snippets

## Media 
<!-- bunch of links -->

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

<div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
Photo by Karolina Grabowska from Pexels
Photo by OVAN from Pexels

```











