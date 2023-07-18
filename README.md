
# moodometer

# Dead / No longer Developing

I've run into so many problems trying to get the configurations right to run native code on Mobile.


From implementing the 'sign in with Goole' button to just getting the application running on mobile has been disasterous & I can no longer keep up with the exponentiating problems that is getting native code running & trying to make this application compatible on web and mobile.I may recycle my components and build a pure web app if I want to salvage any of my work, I cannot in good conscience keep banging my head against a new plethora of error messages every step of thew way.

~~Currently in development~~

A tracker for your mood & journal built in react-native.

Idea is to be able to log your mood, and add an optional note as a kind of diary.Will then have options to view mood over time, and view, edit and delete your notes.

Inspired by my fitbit app's partial implementation of the basic mood logging, but adding a text field and not having that annoying banner that asks you to buy premium for 'more insight'.

~~Progress:~~\
~~✅ starting template for entering submissions.~~\
~~✅ decided whether or not to save data to cloud or local storage~~\
~~✅ Navigation banner~~ \
~~✅ Saving data~~\
~~✅ OAuth~~\
~~✅ Chart tab~~\
~~✅ Reading saved data~~\
~~✅ History tabI have a lot to do here to clean up the whole project:~~

~~1. Support deletion & updating of entries. This may need me to collect and pass my data differently since I'm unbinding data as I pass it through different components. Maybe querying the database with `where` will work? Need time for R&D.~~
~~2. clean up all my packages so that it actually runs on mobile. So far I've only tested & ran the application on my desktop and I tried it on mobile for the 1st time to be greeted with several bundling errors which I'm working on quashing~~.
~~3. At least try to clean up all the errors that appear on the consule when rendering my Chart component.~~
~~5. Maybe some stylzation adjustments for the banner and the text & gauge in the chart tab~~
~~4. Figure out what to do with the x-axis labels on my chart. Already overlapping when I shrink the page by a small amount.~~

~~6. chart component's dots clickable should be dealt with. Either hide/remove it or figure out how to attach useful information relevant to the selected entry.& a future feature release I could work on if I want is Modify the chart such that filtering by year/month/week is supported~~
~~As in see entries by:~~\
~~week~~\
~~day (maybe not)~~\
~~year~~\
~~month~~\

~~allIt would also be nice to be able to select which month or which year, but complex and not necessary.~~

~~❌ polish~~

