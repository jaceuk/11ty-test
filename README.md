# How to generate the places data

We're using the pagination feature of 11ty to enable the creartion of all the static pages for each service and town.

This unfortunately doesn't support any sort of nested iteration so we have to mould the data into a structure that means we can achieve everything in one iteration.

To achieve this we need to run the `utils/buildData.js` which pulls togther places and services info and saves the output to `_data/places.json` whihc is then used to generate the pages.

If any data is changed it has to be updated in the `utils` folder and the script rerun to update the master data file.
