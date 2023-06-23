# moodometer

## Currently in development

A tracker for your mood & journal built in react-native.
Idea is to be able to log your mood, and add an optional note as a kind of diary.

Will then have options to view mood over time, and view, edit and delete your notes.


Inspired by my fitbit app's partial implementation of the basic logging mood, but adding a text field and not having that annoying banner that asks you to buy premium for 'more insight'.

Progress:

✅ starting template for entering submissions.\
✅ Navigation banner \
✅ decided whether or not to save data to cloud or local storage\


⚠️ Initially tried using AsyncStorage which is now deprecated and doesn not play nice with desktop development.
I will not be trying to figure out some basics from Google cloud's free tier of:
1. Database
2. users

I could implement a basic database, but would require to concurrently run a backend, which I am aiming to avoid since I'd like to try having this project hosted on completion.
Users - meaning usernames, passwords, and giving the correct data to the correct person will take more time in R&D. I've no experience with working on this kind of thing.

This is already being way more than I anticipated for the scope of project I was hoping to finish, but I have nothing but time, so why not.
I'm also anticipating some UX wierdness when making a sign in option on a static page.

I may come to find out I cannot complete this proejct with my constraints:
1. static page for free and easy hosting
2. desktop and mobile friendly
3. allows more than 1 person to use (in that I'm not hard coding a single DB destination)


❌ Saving data\
❌ Reading saved data\
❌ History tab\
❌ Notes tab\
❌ polish\
