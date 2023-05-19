# large-dataset
Handle a large amount of data with React.

Note: the large dataset was generated with https://www.onlinedatagenerator.com/manage/usertables/create/


## Crashing Chrome with bad code
When the code renders this much data (100.000 rows) with an array, it crashes:
![Crashing Chrome with bad code](crash.png)

I will try to fix this problem by using [pagination](https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/amp/), and possibly a dictionary instead of an array.
