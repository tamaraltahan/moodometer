# moodometer

## Currently in development

A tracker for your mood & journal built in react-native.
Idea is to be able to log your mood, and add an optional note as a kind of diary.

Will then have options to view mood over time, and view, edit and delete your notes.


Inspired by my fitbit app's partial implementation of the basic mood logging, but adding a text field and not having that annoying banner that asks you to buy premium for 'more insight'.

Progress:

✅ starting template for entering submissions.\
✅ Navigation banner \
✅ decided whether or not to save data to cloud or local storage\
✅ OAuth\
✅ Saving data\
✅ Reading saved data\
✅ Chart tab\

My chart component has limitations which prevent me from customizing it as well as I wanted to, it still serves its purpose. I will be thinking about how this chart will scale over time & more entries but for now, it works as intended and I will be moving on.

The next step is to put the RUD in CRUD and be able to read, update, and delete my entries.

as a side note, figuring out how to pull my data from firestore and isolating the values I needed (no less figuring out how to read them) was way more difficult than I anticipated.

I am sure I'm going to struggle with implementing my history tab as I'm planning.

❌ History tab\
❌ polish
