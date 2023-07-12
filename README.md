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
✅ History tab

I have a lot to do here to clean up the whole project:

1. Support deletion & updating of entries. This may need me to collect and pass my data differently since I'm unbinding data as I pass it through different components. Maybe querying the database with `where` will work? Need time for R&D.
2. clean up all my packages so that it actually runs on mobile. So far I've only tested & ran the application on my desktop and I tried it on mobile for the 1st time to be greeted with several bundling errors which I'm working on quashing. 
3. At least try to clean up all the errors that appear on the consule when rendering my Chart component.
4. Figure out what to do with the x-axis labels on my chart. Already overlapping when I shrink the page by a small amount.
5. Maybe some stylzation adjustments for the banner and the text & gauge in the chart tab
6. chart component's dots clickable should be dealt with. Either hide/remove it or figure out how to attach useful information relevant to the selected entry.

& a future feature release I could work on if I want is Modify the chart such that filtering by year/month/week is supported.
As in see entries by:
day (maybe not)\
week\
month\
year\
all

It would also be nice to be able to select which month or which year, but complex and not necessary. 

❌ polish
